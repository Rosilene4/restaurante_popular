const USERS={admin:{nome:'Ana Gestora',perfil:'administrador',initials:'AG'},gestor:{nome:'Bruno Gestor',perfil:'gestor',initials:'BG'},estoque:{nome:'Carlos Estoque',perfil:'estoque',initials:'CE'},doacoes:{nome:'Diana Doações',perfil:'doacoes',initials:'DD'},producao:{nome:'Eduardo Produção',perfil:'producao',initials:'EP'}};
const ESTOQUE_DATA=[
  {id:1,nome:'Arroz Tipo 1',cat:'Grãos',qty:150,un:'kg',val:'10/11/2025',status:'ok'},
  {id:2,nome:'Feijão Carioca',cat:'Grãos',qty:80,un:'kg',val:'05/10/2025',status:'ok'},
  {id:3,nome:'Óleo de Soja',cat:'Óleos',qty:45,un:'L',val:'12/10/2025',status:'ok'},
  {id:4,nome:'Carne Bovina',cat:'Carnes',qty:20,un:'kg',val:'20/05/2026',status:'warn'},
  {id:5,nome:'Macarrão',cat:'Massas',qty:60,un:'kg',val:'15/08/2025',status:'ok'},
  {id:6,nome:'Leite em Pó',cat:'Laticínios',qty:10,un:'kg',val:'15/04/2025',status:'danger'},
  {id:7,nome:'Açúcar',cat:'Adoçantes',qty:25,un:'kg',val:'20/08/2025',status:'warn'},
  {id:8,nome:'Sal',cat:'Temperos',qty:30,un:'kg',val:'30/08/2026',status:'ok'},
];
const DOACOES_DATA=[
  {id:1,doador:'Supermercado Bom Preço',data:'18/05/2026',itens:'Arroz, Feijão',qty:'45 kg'},
  {id:2,doador:'Igreja Evangélica Central',data:'14/05/2026',itens:'Macarrão, Óleo',qty:'28 kg'},
  {id:3,doador:'Conab / Governo',data:'10/05/2026',itens:'Arroz',qty:'100 kg'},
  {id:4,doador:'Supermercado Bom Preço',data:'05/05/2026',itens:'Feijão, Açúcar',qty:'60 kg'},
  {id:5,doador:'Associação Moradores',data:'02/05/2026',itens:'Temperos, Sal',qty:'15 kg'},
];
const COMPRAS_DATA=[
  {id:1,forn:'Alimentos SA',data:'18/05/2026',itens:'Frango, Arroz',val:'R$ 1.240,00'},
  {id:2,forn:'Distribuidora Norte',data:'12/05/2026',itens:'Feijão, Óleo',val:'R$ 980,00'},
  {id:3,forn:'Cerealista Alagoana',data:'08/05/2026',itens:'Arroz, Macarrão',val:'R$ 1.620,00'},
  {id:4,forn:'Alimentos SA',data:'03/05/2026',itens:'Carne Bovina',val:'R$ 2.100,00'},
  {id:5,forn:'Distribuidora Norte',data:'01/05/2026',itens:'Leite em Pó',val:'R$ 900,00'},
];
const REFEICOES_DATA=[
  {id:1,data:'18/05/2026',prod:380,serv:368},
  {id:2,data:'17/05/2026',prod:395,serv:390},
  {id:3,data:'16/05/2026',prod:350,serv:340},
  {id:4,data:'15/05/2026',prod:395,serv:390},
  {id:5,data:'14/05/2026',prod:380,serv:371},
  {id:6,data:'13/05/2026',prod:360,serv:342},
  {id:7,data:'12/05/2026',prod:400,serv:388},
];

let currentUser=null;
// Chart instances
let chartRefeicoes=null;
let chartDoacoes=null;

// Load persisted mock data (if exists)
// Load persisted mock data (if exists). Prefer server API, fallback to localStorage.
async function loadData(){
  try{
    const res = await fetch('/api/data');
    if(res.ok){
      const json = await res.json();
      if(json.ESTOQUE_DATA) ESTOQUE_DATA.splice(0,ESTOQUE_DATA.length,...json.ESTOQUE_DATA);
      if(json.DOACOES_DATA) DOACOES_DATA.splice(0,DOACOES_DATA.length,...json.DOACOES_DATA);
      if(json.COMPRAS_DATA) COMPRAS_DATA.splice(0,COMPRAS_DATA.length,...json.COMPRAS_DATA);
      if(json.REFEICOES_DATA) REFEICOES_DATA.splice(0,REFEICOES_DATA.length,...json.REFEICOES_DATA);
      return;
    }
  }catch(e){
    console.warn('API load failed, falling back to localStorage',e);
  }
  try{
    const sEst=localStorage.getItem('ESTOQUE_DATA');
    const sDo=localStorage.getItem('DOACOES_DATA');
    const sComp=localStorage.getItem('COMPRAS_DATA');
    const sRef=localStorage.getItem('REFEICOES_DATA');
    if(sEst) ESTOQUE_DATA.splice(0,ESTOQUE_DATA.length,...JSON.parse(sEst));
    if(sDo) DOACOES_DATA.splice(0,DOACOES_DATA.length,...JSON.parse(sDo));
    if(sComp) COMPRAS_DATA.splice(0,COMPRAS_DATA.length,...JSON.parse(sComp));
    if(sRef) REFEICOES_DATA.splice(0,REFEICOES_DATA.length,...JSON.parse(sRef));
  }catch(e){console.warn('Erro ao carregar dados do localStorage',e)}
}

// Save to server API if available, otherwise to localStorage
async function saveData(){
  const payload = {ESTOQUE_DATA,DOACOES_DATA,COMPRAS_DATA,REFEICOES_DATA};
  try{
    const res = await fetch('/api/data',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!res.ok) throw new Error('server error');
  }catch(e){
    console.warn('API save failed, saving to localStorage',e);
    try{
      localStorage.setItem('ESTOQUE_DATA',JSON.stringify(ESTOQUE_DATA));
      localStorage.setItem('DOACOES_DATA',JSON.stringify(DOACOES_DATA));
      localStorage.setItem('COMPRAS_DATA',JSON.stringify(COMPRAS_DATA));
      localStorage.setItem('REFEICOES_DATA',JSON.stringify(REFEICOES_DATA));
    }catch(err){console.warn('Erro ao salvar dados no localStorage',err)}
  }
}
function aplicarPermissoes(){
  const permissoes = {
    administrador: ['dashboard','estoque','doacoes','compras','refeicoes','relatorios','usuarios'],
    gestor: ['dashboard','estoque','doacoes','compras','refeicoes','relatorios'],
    estoque: ['estoque'],
    doacoes: ['doacoes'],
    producao: ['refeicoes']
  };

  const telasPermitidas = permissoes[currentUser.perfil] || ['dashboard'];

  document.querySelectorAll('.nav-item').forEach(item => {
    const onclick = item.getAttribute('onclick') || '';
    const pagina = onclick.match(/goPage\('(.+?)'\)/)?.[1];

    if(pagina && !telasPermitidas.includes(pagina)){
      item.style.display = 'none';
    }else{
      item.style.display = 'flex';
    }
  });

  document.getElementById('nav-admin-section').style.display =
    currentUser.perfil === 'administrador' ? '' : 'none';

  return telasPermitidas[0];
}
async function doLogin(){
  const l=document.getElementById('inp-login').value.trim();
  const s=document.getElementById('inp-senha').value;
  if(USERS[l]&&s==='1234'){
    currentUser={login:l,...USERS[l]};
    localStorage.setItem('USUARIO_LOGADO', l);
    document.getElementById('login-page').style.display='none';
    document.getElementById('app').style.display='flex';
    document.getElementById('user-name').textContent=currentUser.nome;
    document.getElementById('user-role').textContent=currentUser.perfil;
    document.getElementById('user-avatar').textContent=currentUser.initials;
    if(currentUser.perfil!=='administrador'){
      document.getElementById('nav-admin-section').style.display='none';
      document.getElementById('nav-usuarios').style.display='none';
    }else{
      document.getElementById('nav-admin-section').style.display='';
      document.getElementById('nav-usuarios').style.display='';
    }
    document.getElementById('topbar-date').textContent=new Date().toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'2-digit',year:'numeric'});
    await loadData();
    renderTables();
    renderCharts();

    const primeiraTela = aplicarPermissoes();
    goPage(primeiraTela);
  }else{
    showToast('Login ou senha inválidos!');
  }
}

function doLogout(){
  localStorage.removeItem('USUARIO_LOGADO');
  document.getElementById('app').style.display='none';
  document.getElementById('login-page').style.display='flex';
}

function goPage(page){
  localStorage.setItem('PAGINA_ATUAL', page);

  document.querySelectorAll('.page').forEach(x => {
    x.classList.remove('active');
    x.style.display = 'none';
  });

  document.querySelectorAll('.nav-item').forEach(x => {
    x.classList.remove('active');
  });

  const pagina = document.getElementById('page-' + page);
  if(pagina){
    pagina.classList.add('active');
    pagina.style.display = 'block';
  }

  document.querySelectorAll('.nav-item').forEach(x => {
    const onclick = x.getAttribute('onclick') || '';
    if(onclick.includes("'" + page + "'") || onclick.includes('"' + page + '"')){
      x.classList.add('active');
    }
  });

  const titles = {
    dashboard: 'Dashboard Gerencial',
    estoque: 'Controle de Estoque',
    doacoes: 'Doações',
    compras: 'Compras',
    refeicoes: 'Refeições',
    relatorios: 'Relatórios',
    usuarios: 'Usuários'
  };

  document.getElementById('topbar-title').textContent = titles[page] || page;
}

function renderTables(){
  const te=document.getElementById('tabela-estoque');
  te.innerHTML=ESTOQUE_DATA.map(i=>{
    const sc=i.status==='ok'?'ok':i.status==='warn'?'warn':'danger';
    const sl=i.status==='ok'?'Dentro da validade':i.status==='warn'?'Atenção':'Vencido';
    return`<tr><td>${i.id}</td><td><strong>${i.nome}</strong></td><td>${i.cat}</td><td>${i.qty}</td><td>${i.un}</td><td>${i.val}</td><td><span class="badge ${sc}">${sl}</span></td><td><button class="btn outline btn-sm" onclick="showToast('Entrada/saída registrada!')">+/−</button></td></tr>`;
  }).join('');
  const td=document.getElementById('tabela-doacoes');
  td.innerHTML=DOACOES_DATA.map(d=>`<tr><td>${d.id}</td><td>${d.doador}</td><td>${d.data}</td><td>${d.itens}</td><td>${d.qty}</td><td><span class="badge ok">✓ Atualizado</span></td></tr>`).join('');
  const tc=document.getElementById('tabela-compras');
  tc.innerHTML=COMPRAS_DATA.map(c=>`<tr><td>${c.id}</td><td>${c.forn}</td><td>${c.data}</td><td>${c.itens}</td><td>${c.val}</td><td><span class="badge ok">✓ Atualizado</span></td></tr>`).join('');
  const tr=document.getElementById('tabela-refeicoes');
  tr.innerHTML=REFEICOES_DATA.map(r=>{
    const diff=r.prod-r.serv;
    const pct=Math.round(r.serv/r.prod*100);
    const sc=pct>=97?'ok':'warn';
    return`<tr><td>${r.id}</td><td>${r.data}</td><td>${r.prod}</td><td>${r.serv}</td><td>${diff}</td><td><span class="badge ${sc}">${pct}%</span></td></tr>`;
  }).join('');
}

function renderCharts(){
  // Refeicoes chart (last 7 entries from REFEICOES_DATA)
  const labels = REFEICOES_DATA.slice().reverse().map(r=>r.data);
  const produced = REFEICOES_DATA.slice().reverse().map(r=>r.prod);
  const served = REFEICOES_DATA.slice().reverse().map(r=>r.serv);
  const ctxR = document.getElementById('chart-refeicoes');
  if(ctxR){
    if(chartRefeicoes) chartRefeicoes.destroy();
    chartRefeicoes = new Chart(ctxR.getContext('2d'),{
      type: 'bar',
      data: { labels, datasets:[{label:'Produzidas',data:produced,backgroundColor:'#378ADD'},{label:'Servidas',data:served,backgroundColor:'#85B7EB'}] },
      options:{ responsive:true,maintainAspectRatio:false }
    });
  }

  // Doacoes chart (mock months)
  const months = [{l:'Jan',v:180},{l:'Fev',v:210},{l:'Mar',v:195},{l:'Abr',v:240},{l:'Mai',v:320},{l:'Jun',v:290}];
  const ctxD = document.getElementById('chart-doacoes');
  if(ctxD){
    if(chartDoacoes) chartDoacoes.destroy();
    chartDoacoes = new Chart(ctxD.getContext('2d'),{
      type:'line',
      data:{ labels: months.map(m=>m.l), datasets:[{label:'Doações (kg)',data:months.map(m=>m.v),borderColor:'#3B6D11',backgroundColor:'rgba(60,120,40,0.08)',fill:true}] },
      options:{ responsive:true,maintainAspectRatio:false }
    });
  }
}

// Sidebar toggle and theme
function toggleSidebar(){
  const sb=document.getElementById('sidebar');
  sb.classList.toggle('collapsed');
  localStorage.setItem('SIDEBAR_COLLAPSED', sb.classList.contains('collapsed'));
}


function toggleUserMenu(){
  const d=document.getElementById('user-menu-dropdown');
  d.style.display = d.style.display==='none'?'block':'none';
}

// Utility: export table to CSV
function exportTableCSV(tableId,filename){
  const rows = Array.from(document.querySelectorAll('#'+tableId+' tr'));
  const csv = rows.map(r=>Array.from(r.querySelectorAll('th,td')).map(c=>'"'+c.textContent.replace(/"/g,'""')+'"').join(',')).join('\n');
  const blob = new Blob([csv],{type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename||'export.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}

// Initialize UI state from localStorage
function initUIState(){
  const collapsed = localStorage.getItem('SIDEBAR_COLLAPSED')==='true';
  if(collapsed) document.getElementById('sidebar').classList.add('collapsed');
  // theme toggle removed — no theme state persisted
}

function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}

// Enhanced save handlers that persist to localStorage and update UI
function saveAlimento(){
  const m=document.getElementById('modal-alimento');
  const nome = m.querySelector('input.form-input').value || 'Novo alimento';
  const sel = m.querySelector('select.form-select');
  const cat = sel?sel.value:'Outros';
  const unit = m.querySelector('select.form-select:nth-of-type(2)')?m.querySelector('select.form-select:nth-of-type(2)').value:'kg';
  const qty = parseFloat(m.querySelector('input[type=number]')?.value||0);
  const val = m.querySelector('input[type=date]')?.value||'';
  const id = ESTOQUE_DATA.length?Math.max(...ESTOQUE_DATA.map(x=>x.id))+1:1;
  ESTOQUE_DATA.push({id,nome,cat,qty,un:unit,val,status:'ok'});
  saveData(); renderTables(); closeModal('modal-alimento'); showToast('Alimento cadastrado e salvo.');
}

function saveDoacao(){
  const m = document.getElementById('modal-doacao');

  const selects = m.querySelectorAll('select.form-select');
  const inputs = m.querySelectorAll('input');

  const doador = selects[0]?.value || 'Outro';
  const data = inputs[0]?.value || '';
  const alimento = selects[1]?.value || 'Alimento';
  const qty = parseFloat(inputs[1]?.value) || 0;
  const unidade = selects[2]?.value || 'kg';

  const id = DOACOES_DATA.length
    ? Math.max(...DOACOES_DATA.map(x => x.id)) + 1
    : 1;

  DOACOES_DATA.push({
    id: id,
    doador: doador,
    data: data,
    itens: alimento,
    qty: qty + ' ' + unidade
  });

  const item = ESTOQUE_DATA.find(i =>
    i.nome.toLowerCase().includes(alimento.toLowerCase()) ||
    alimento.toLowerCase().includes(i.nome.toLowerCase().split(' ')[0])
  );

  if(item){
    item.qty = (parseFloat(item.qty) || 0) + qty;
  }

  saveData();
  renderTables();
  closeModal('modal-doacao');
  showToast('Doação registrada e estoque atualizado.');
}

function saveCompra(){
  const m = document.getElementById('modal-compra');

  const selects = m.querySelectorAll('select.form-select');
  const inputs = m.querySelectorAll('input');

  const forn = selects[0]?.value || 'Fornecedor';
  const data = inputs[0]?.value || '';
  const prod = selects[1]?.value || 'Produto';

  const qty = parseFloat(inputs[1]?.value) || 0;
  const valUnitario = parseFloat(inputs[2]?.value) || 0;

  const valorTotal = qty * valUnitario;

  const id = COMPRAS_DATA.length
    ? Math.max(...COMPRAS_DATA.map(x => x.id)) + 1
    : 1;

  COMPRAS_DATA.push({
    id: id,
    forn: forn,
    data: data,
    itens: prod,
    val: 'R$ ' + valorTotal.toFixed(2)
  });

  const item = ESTOQUE_DATA.find(i =>
    i.nome.toLowerCase().includes(prod.toLowerCase()) ||
    prod.toLowerCase().includes(i.nome.toLowerCase().split(' ')[0])
  );

  if(item){
    item.qty = (parseFloat(item.qty) || 0) + qty;
  }

  saveData();
  renderTables();
  closeModal('modal-compra');
  showToast('Compra registrada e estoque atualizado.');
}

function saveUsuario(){
  // For prototype, just show toast and close modal. Real apps must POST to server.
  closeModal('modal-usuario'); showToast('Usuário cadastrado (simulação).');
}
function baixarEstoquePorRefeicao(qtdRefeicoes){
  const consumoPorRefeicao = {
    'Arroz Tipo 1': 0.08,
    'Feijão Carioca': 0.06,
    'Óleo de Soja': 0.01,
    'Carne Bovina': 0.10,
    'Macarrão': 0.03,
    'Sal': 0.002
  };

  ESTOQUE_DATA.forEach(item => {
    if(consumoPorRefeicao[item.nome]){
      const consumido = qtdRefeicoes * consumoPorRefeicao[item.nome];

      item.qty = Math.max(
        0,
        Number(
          ((parseFloat(item.qty) || 0) - consumido).toFixed(2)
        )
      );
    }
  });
}

function saveRefeicao(){
  const p=parseInt(document.getElementById('inp-produzida').value)||0;
  const s=parseInt(document.getElementById('inp-servida').value)||0;
  const w=document.getElementById('refeicao-warn');
  if(s>p){w.style.display='flex';return;}
  w.style.display='none';
  const id = REFEICOES_DATA.length?Math.max(...REFEICOES_DATA.map(x=>x.id))+1:1;
  const data = document.querySelector('#modal-refeicao input[type=date]')?.value||new Date().toLocaleDateString('pt-BR');
  REFEICOES_DATA.unshift({id,data,prod:p,serv:s});
  baixarEstoquePorRefeicao(p);
  saveData(); renderTables(); renderCharts(); closeModal('modal-refeicao'); showToast('Registro de refeições salvo com sucesso!');
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

document.addEventListener('keydown',e=>{if(e.key==='Enter'&&document.getElementById('login-page').style.display!=='none')doLogin();});
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')}));
// initialize UI state on load
document.addEventListener('DOMContentLoaded', async () => {
  initUIState();

  await loadData();

  const usuarioSalvo = localStorage.getItem('USUARIO_LOGADO');

  if(usuarioSalvo && USERS[usuarioSalvo]){
    currentUser = {
      login: usuarioSalvo,
      ...USERS[usuarioSalvo]
    };

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app').style.display = 'flex';

    document.getElementById('user-name').textContent = currentUser.nome;
    document.getElementById('user-role').textContent = currentUser.perfil;
    document.getElementById('user-avatar').textContent = currentUser.initials;

    aplicarPermissoes();

    const paginaSalva =
      localStorage.getItem('PAGINA_ATUAL') || 'dashboard';

    renderTables();
    renderCharts();
    goPage(paginaSalva);
  }else{
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
  }

  document.addEventListener('click', e => {
    const d = document.getElementById('user-menu-dropdown');
    const btn = document.getElementById('user-menu-btn');
    const menu = document.getElementById('user-menu');

    if(d && btn && menu && e.target !== btn && !menu.contains(e.target)){
      d.style.display = 'none';
    }
  });

  document.body.classList.remove('carregando');
});