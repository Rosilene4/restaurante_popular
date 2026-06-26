const USERS={admin:{nome:'Ana Gestora',perfil:'administrador',initials:'AG'},gestor:{nome:'Bruno Gestor',perfil:'gestor',initials:'BG'},estoque:{nome:'Carlos Estoque',perfil:'estoque',initials:'CE'},doacoes:{nome:'Diana Doações',perfil:'doacoes',initials:'DD'},producao:{nome:'Eduardo Produção',perfil:'producao',initials:'EP'}};
const ESTOQUE_DATA=[
  {id:1,nome:'Arroz Tipo 1',cat:'Grãos',qty:180,un:'kg',val:'10/11/2026',status:'ok'},
  {id:2,nome:'Feijão Carioca',cat:'Grãos',qty:120,un:'kg',val:'05/10/2026',status:'ok'},
  {id:3,nome:'Macarrão',cat:'Massas',qty:85,un:'kg',val:'15/08/2026',status:'ok'},
  {id:4,nome:'Farinha de Trigo',cat:'Grãos',qty:70,un:'kg',val:'12/09/2026',status:'ok'},
  {id:5,nome:'Milho Verde',cat:'Grãos',qty:60,un:'kg',val:'22/08/2026',status:'ok'},
  {id:6,nome:'Óleo de Soja',cat:'Óleos',qty:50,un:'L',val:'12/10/2026',status:'ok'},
  {id:7,nome:'Carne Bovina',cat:'Carnes',qty:24,un:'kg',val:'20/05/2026',status:'warn'},
  {id:8,nome:'Frango',cat:'Carnes',qty:32,un:'kg',val:'18/06/2026',status:'ok'},
  {id:9,nome:'Salsicha',cat:'Carnes',qty:18,un:'kg',val:'17/06/2026',status:'warn'},
  {id:10,nome:'Leite em Pó',cat:'Laticínios',qty:12,un:'kg',val:'15/04/2026',status:'danger'},
  {id:11,nome:'Queijo Mussarela',cat:'Laticínios',qty:16,un:'kg',val:'16/06/2026',status:'ok'},
  {id:12,nome:'Açúcar',cat:'Adoçantes',qty:28,un:'kg',val:'20/08/2026',status:'warn'},
  {id:13,nome:'Sal',cat:'Temperos',qty:35,un:'kg',val:'30/08/2026',status:'ok'},
  {id:14,nome:'Cebola',cat:'Legumes',qty:40,un:'kg',val:'01/07/2026',status:'ok'},
  {id:15,nome:'Tomate',cat:'Legumes',qty:30,un:'kg',val:'02/07/2026',status:'ok'},
  {id:16,nome:'Batata',cat:'Legumes',qty:55,un:'kg',val:'03/07/2026',status:'ok'},
  {id:17,nome:'Alho',cat:'Temperos',qty:22,un:'kg',val:'04/07/2026',status:'ok'},
  {id:18,nome:'Cenoura',cat:'Legumes',qty:25,un:'kg',val:'05/07/2026',status:'ok'},
  {id:19,nome:'Abóbora',cat:'Legumes',qty:20,un:'kg',val:'06/07/2026',status:'ok'},
  {id:20,nome:'Banana',cat:'Frutas',qty:35,un:'kg',val:'07/07/2026',status:'ok'}
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
const MOVIMENTACOES_DATA=[
  {id:1,tipo:'entrada',item:'Arroz Tipo 1',quantidade:50,unidade:'kg',data:'2026-05-18',obs:'Compra registrada'},
  {id:2,tipo:'saida',item:'Arroz Tipo 1',quantidade:12,unidade:'kg',data:'2026-05-17',obs:'Consumo para produção'}
];

function formatarDataBrasil(valor){
  if(!valor) return '';
  if(/^\d{4}-\d{2}-\d{2}$/.test(valor)){
    const [ano, mes, dia] = valor.split('-').map(Number);
    return `${String(dia).padStart(2,'0')}/${String(mes).padStart(2,'0')}/${ano}`;
  }
  if(/^\d{2}\/\d{2}\/\d{4}$/.test(valor)) return valor;
  const data = new Date(valor);
  return Number.isNaN(data.getTime()) ? String(valor) : data.toLocaleDateString('pt-BR');
}

function converterDataParaTimestamp(valor){
  if(!valor) return null;
  if(/^\d{4}-\d{2}-\d{2}$/.test(valor)){
    const [ano, mes, dia] = valor.split('-').map(Number);
    return Date.UTC(ano, mes - 1, dia);
  }
  if(/^\d{2}\/\d{2}\/\d{4}$/.test(valor)){
    const [dia, mes, ano] = valor.split('/').map(Number);
    return Date.UTC(ano, mes - 1, dia);
  }
  const data = new Date(valor);
  return Number.isNaN(data.getTime()) ? null : data.getTime();
}

function ordenarRefeicoesPorData(lista){
  return [...lista].sort((a, b) => {
    const dataA = converterDataParaTimestamp(a?.data);
    const dataB = converterDataParaTimestamp(b?.data);
    if(dataA !== null && dataB !== null) return dataB - dataA;
    return (Number(b?.id) || 0) - (Number(a?.id) || 0);
  });
}

function normalizarRefeicoes(){
  REFEICOES_DATA.forEach(item => {
    if(item?.data) item.data = formatarDataBrasil(item.data);
  });
  REFEICOES_DATA.splice(0, REFEICOES_DATA.length, ...ordenarRefeicoesPorData(REFEICOES_DATA));
}

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
      if(json.MOVIMENTACOES_DATA) MOVIMENTACOES_DATA.splice(0,MOVIMENTACOES_DATA.length,...json.MOVIMENTACOES_DATA);
      normalizarRefeicoes();
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
    const sMov=localStorage.getItem('MOVIMENTACOES_DATA');
    if(sEst) ESTOQUE_DATA.splice(0,ESTOQUE_DATA.length,...JSON.parse(sEst));
    if(sDo) DOACOES_DATA.splice(0,DOACOES_DATA.length,...JSON.parse(sDo));
    if(sComp) COMPRAS_DATA.splice(0,COMPRAS_DATA.length,...JSON.parse(sComp));
    if(sRef) REFEICOES_DATA.splice(0,REFEICOES_DATA.length,...JSON.parse(sRef));
    if(sMov) MOVIMENTACOES_DATA.splice(0,MOVIMENTACOES_DATA.length,...JSON.parse(sMov));
    normalizarRefeicoes();
  }catch(e){console.warn('Erro ao carregar dados do localStorage',e)}
}

// Save to server API if available, otherwise to localStorage
async function saveData(){
  const payload = {ESTOQUE_DATA,DOACOES_DATA,COMPRAS_DATA,REFEICOES_DATA,MOVIMENTACOES_DATA};
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
      localStorage.setItem('MOVIMENTACOES_DATA',JSON.stringify(MOVIMENTACOES_DATA));
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
  renderTables();
  renderCharts();
}

function parseQty(value){
  const match = String(value).match(/-?\d+(?:[.,]\d+)?/);
  return match ? parseFloat(match[0].replace(',','.')) : 0;
}

function getDashboardMetrics(){
  const totalItems = ESTOQUE_DATA.length;
  const totalStockQty = ESTOQUE_DATA.reduce((sum,item)=> sum + (Number(item.qty)||0),0);
  const itensVencendo = ESTOQUE_DATA.filter(item=>item.status==='warn').length;
  const itensVencidos = ESTOQUE_DATA.filter(item=>item.status==='danger').length;
  const doacoesMes = DOACOES_DATA.reduce((sum,item)=> sum + parseQty(item.qty),0);
  const totalProduzido = REFEICOES_DATA.reduce((sum,item)=> sum + (Number(item.prod)||0),0);
  const totalServido = REFEICOES_DATA.reduce((sum,item)=> sum + (Number(item.serv)||0),0);
  const performance = totalProduzido ? Math.round((totalServido / totalProduzido) * 100) : 0;

  return { totalItems, totalStockQty, itensVencendo, itensVencidos, doacoesMes, totalProduzido, totalServido, performance };
}

function renderDashboardSummary(){
  const metrics = getDashboardMetrics();

  const itensEl = document.getElementById('dashboard-itens-estoque');
  const alertaEl = document.getElementById('dashboard-alerta-estoque');
  const doacoesEl = document.getElementById('dashboard-doacoes-mes');
  const doacoesNoteEl = document.getElementById('dashboard-doacoes-note');
  const producaoEl = document.getElementById('dashboard-refeicoes-producao');
  const producaoNoteEl = document.getElementById('dashboard-producao-note');
  const servidasEl = document.getElementById('dashboard-refeicoes-servidas');
  const servidasNoteEl = document.getElementById('dashboard-servidas-note');
  const alert1El = document.getElementById('dashboard-alert-1');
  const alert2El = document.getElementById('dashboard-alert-2');
  const alert3El = document.getElementById('dashboard-alert-3');

  if(itensEl) itensEl.textContent = metrics.totalItems;
  if(alertaEl){
    const alertaText = metrics.itensVencidos > 0
      ? `⚠ ${metrics.itensVencidos} itens vencidos`
      : metrics.itensVencendo > 0
        ? `⚠ ${metrics.itensVencendo} itens com validade próxima`
        : '✓ Estoque está estável';
    alertaEl.textContent = alertaText;
  }
  if(doacoesEl) doacoesEl.textContent = `${metrics.doacoesMes.toFixed(1).replace(/\.0$/, '')} kg`;
  if(doacoesNoteEl) doacoesNoteEl.textContent = metrics.doacoesMes > 0 ? '↑ volume consolidado no mês' : 'Sem registros recentes';
  if(producaoEl) producaoEl.textContent = metrics.totalProduzido.toLocaleString('pt-BR');
  if(producaoNoteEl) producaoNoteEl.textContent = metrics.totalProduzido > 0 ? 'Total acumulado do período' : 'Sem produção registrada';
  if(servidasEl) servidasEl.textContent = metrics.totalServido.toLocaleString('pt-BR');
  if(servidasNoteEl) servidasNoteEl.textContent = metrics.totalProduzido > 0 ? `${metrics.performance}% das produzidas` : 'Sem registros recentes';

  if(alert1El){
    alert1El.innerHTML = `<span>⚠</span><div><strong>${metrics.itensVencendo}</strong> item(ns) com validade próxima.</div>`;
  }
  if(alert2El){
    const estoqueBaixo = ESTOQUE_DATA.some(item => Number(item.qty) < 20);
    alert2El.innerHTML = `<span>⚠</span><div>${estoqueBaixo ? 'Há itens com estoque abaixo do limite operacional.' : 'O estoque geral está dentro do esperado.'}</div>`;
  }
  if(alert3El){
    alert3El.innerHTML = `<span>ℹ</span><div>O desempenho de atendimento está em <strong>${metrics.performance}%</strong> das refeições produzidas.</div>`;
  }
}

function applyTableSearch(){
  const query = document.getElementById('topbar-search')?.value.trim().toLowerCase() || '';
  const activePage = document.querySelector('.page.active');
  if(!activePage) return;

  activePage.querySelectorAll('table tbody tr').forEach(row => {
    if(!query){
      row.style.display='';
      return;
    }
    row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
  });
}

function renderTables(){
  const te=document.getElementById('tabela-estoque');
  if(te){
    if(!ESTOQUE_DATA.length){
      te.innerHTML=`<tr><td colspan="8" style="text-align:center;color:var(--gray-400);padding:24px">Nenhum alimento cadastrado ainda.</td></tr>`;
    }else{
      te.innerHTML=ESTOQUE_DATA.map(i=>{
        const sc=i.status==='ok'?'ok':i.status==='warn'?'warn':'danger';
        const sl=i.status==='ok'?'Dentro da validade':i.status==='warn'?'Atenção':'Vencido';
        return`<tr><td>${i.id}</td><td><strong>${i.nome}</strong></td><td>${i.cat}</td><td>${i.qty}</td><td>${i.un}</td><td>${i.val || '—'}</td><td><span class="badge ${sc}">${sl}</span></td><td><div style="display:flex;gap:6px"><button class="btn outline btn-sm" onclick="openMovimentacaoModal('${i.nome}')">Mov.</button><button class="btn blue btn-sm" onclick="abrirSaidaRapida('${i.nome}')">Saída</button></div></td></tr>`;
      }).join('');
    }
  }
  const td=document.getElementById('tabela-doacoes');
  if(td){
    td.innerHTML=DOACOES_DATA.map(d=>`<tr><td>${d.id}</td><td>${d.doador}</td><td>${d.data}</td><td>${d.itens}</td><td>${d.qty}</td><td><span class="badge ok">✓ Atualizado</span></td></tr>`).join('');
  }
  const tc=document.getElementById('tabela-compras');
  if(tc){
    tc.innerHTML=COMPRAS_DATA.map(c=>`<tr><td>${c.id}</td><td>${c.forn}</td><td>${c.data}</td><td>${c.itens}</td><td>${c.val}</td><td><span class="badge ok">✓ Atualizado</span></td></tr>`).join('');
  }
  const tr=document.getElementById('tabela-refeicoes');
  if(tr){
    const refeicoesOrdenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
    tr.innerHTML=refeicoesOrdenadas.map(r=>{
      const diff=r.prod-r.serv;
      const pct=Math.round(r.serv/r.prod*100);
      const sc=pct>=97?'ok':'warn';
      return`<tr><td>${r.id}</td><td>${formatarDataBrasil(r.data)}</td><td>${r.prod}</td><td>${r.serv}</td><td>${diff}</td><td><span class="badge ${sc}">${pct}%</span></td></tr>`;
    }).join('');
  }

  renderDashboardSummary();
  renderStockSummary();
  renderMovimentacoes();
  applyTableSearch();
}

function renderCharts(){
  // Refeicoes chart (last 7 entries from REFEICOES_DATA)
  const refeicoesOrdenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
  const labels = refeicoesOrdenadas.slice().reverse().map(r=>formatarDataBrasil(r.data));
  const produced = refeicoesOrdenadas.slice().reverse().map(r=>r.prod);
  const served = refeicoesOrdenadas.slice().reverse().map(r=>r.serv);
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

function openMovimentacaoModal(itemNome=''){
  const select = document.getElementById('mov-item');
  const dataInput = document.getElementById('mov-data');
  const obsInput = document.getElementById('mov-obs');
  const qtyInput = document.getElementById('mov-qty');
  const unidadeSelect = document.getElementById('mov-unidade');

  if(select){
    select.innerHTML = ESTOQUE_DATA.map(item => `<option value="${item.id}" ${item.nome === itemNome ? 'selected' : ''}>${item.nome}</option>`).join('');
  }
  if(dataInput) dataInput.value = new Date().toISOString().split('T')[0];
  if(obsInput) obsInput.value = '';
  if(qtyInput) qtyInput.value = 10;
  if(unidadeSelect) unidadeSelect.value = 'kg';

  openModal('modal-movimentacao');
}

function abrirSaidaRapida(itemNome){
  openMovimentacaoModal(itemNome);
  const tipo = document.getElementById('mov-tipo');
  if(tipo) tipo.value = 'saida';
}

function saveMovimentacao(){
  const itemId = document.getElementById('mov-item')?.value;
  const tipo = document.getElementById('mov-tipo')?.value;
  const qty = parseFloat(document.getElementById('mov-qty')?.value) || 0;
  const unidade = document.getElementById('mov-unidade')?.value || 'kg';
  const data = document.getElementById('mov-data')?.value || '';
  const obs = document.getElementById('mov-obs')?.value || '';

  const item = ESTOQUE_DATA.find(x => String(x.id) === String(itemId));
  if(!item){
    showToast('Selecione um item válido.');
    return;
  }
  if(qty <= 0){
    showToast('Informe uma quantidade maior que zero.');
    return;
  }

  if(tipo === 'saida' && (Number(item.qty) || 0) < qty){
    showToast('Saldo insuficiente para esta saída.');
    return;
  }

  const novoSaldo = tipo === 'entrada' ? (Number(item.qty) || 0) + qty : (Number(item.qty) || 0) - qty;
  item.qty = Math.max(0, novoSaldo);
  item.un = unidade;
  atualizarStatusEstoque(item);

  const id = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(x => x.id)) + 1 : 1;
  MOVIMENTACOES_DATA.unshift({id,tipo,item:item.nome,quantidade:qty,unidade,data,obs});

  saveData();
  renderTables();
  closeModal('modal-movimentacao');
  showToast(tipo === 'entrada' ? 'Entrada registrada no estoque.' : 'Saída registrada no estoque.');
}

function normalizarTexto(texto){
  return String(texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function atualizarStatusEstoque(item){
  const qtd = Number(item.qty) || 0;
  if(qtd <= 0){
    item.status = 'danger';
  }else if(qtd < 20){
    item.status = 'warn';
  }else{
    item.status = 'ok';
  }
}

function inferirCategoria(nome){
  const texto = normalizarTexto(nome);
  if(/arroz|feij|grao|milho|trigo/.test(texto)) return 'Grãos';
  if(/oleo|manteiga|butter/.test(texto)) return 'Óleos';
  if(/carne|frango|peixe|bovina/.test(texto)) return 'Carnes';
  if(/leite|queijo|iogurte/.test(texto)) return 'Laticínios';
  if(/macarra|massa/.test(texto)) return 'Massas';
  if(/sal|temper|alho|cebola/.test(texto)) return 'Temperos';
  return 'Outros';
}

function adicionarAoEstoque({nome, quantidade, unidade='kg', categoria, validade=''}){
  const nomeItem = String(nome || '').trim();
  const qtd = Number(quantidade) || 0;

  if(!nomeItem || qtd <= 0) return null;

  const existente = ESTOQUE_DATA.find(item => {
    const nomeAtual = normalizarTexto(item.nome);
    const nomeNovo = normalizarTexto(nomeItem);
    return nomeAtual.includes(nomeNovo) || nomeNovo.includes(nomeAtual);
  });

  if(existente){
    existente.qty = (Number(existente.qty) || 0) + qtd;
    if(unidade) existente.un = unidade;
    if(categoria) existente.cat = categoria;
    if(validade && !existente.val) existente.val = validade;
    atualizarStatusEstoque(existente);
    return existente;
  }

  const novoId = ESTOQUE_DATA.length ? Math.max(...ESTOQUE_DATA.map(x => x.id)) + 1 : 1;
  const novoItem = {
    id: novoId,
    nome: nomeItem,
    cat: categoria || inferirCategoria(nomeItem),
    qty: qtd,
    un: unidade || 'kg',
    val: validade || '',
    status: 'ok'
  };

  ESTOQUE_DATA.push(novoItem);
  atualizarStatusEstoque(novoItem);
  return novoItem;
}

function renderStockSummary(){
  const totalItens = ESTOQUE_DATA.length;
  const totalQuantidade = ESTOQUE_DATA.reduce((sum,item)=> sum + (Number(item.qty)||0),0);
  const validadeProxima = ESTOQUE_DATA.filter(item=>item.status==='warn').length;
  const vencidos = ESTOQUE_DATA.filter(item=>item.status==='danger').length;

  const totalItensEl = document.getElementById('estoque-total-itens');
  const totalQuantidadeEl = document.getElementById('estoque-total-quantidade');
  const validadeProximaEl = document.getElementById('estoque-validade-proxima');
  const vencidosEl = document.getElementById('estoque-itens-vencidos');

  if(totalItensEl) totalItensEl.textContent = totalItens;
  if(totalQuantidadeEl) totalQuantidadeEl.textContent = `${totalQuantidade.toFixed(1).replace(/\.0$/, '')} kg`;
  if(validadeProximaEl) validadeProximaEl.textContent = `${validadeProxima} itens`;
  if(vencidosEl) vencidosEl.textContent = `${vencidos} itens`;
}

function renderMovimentacoes(){
  const container = document.getElementById('lista-movimentacoes');
  if(!container) return;

  const items = MOVIMENTACOES_DATA.slice(0,6).map(mov=>{
    const badge = mov.tipo === 'entrada' ? 'badge ok' : 'badge warn';
    const textoTipo = mov.tipo === 'entrada' ? 'Entrada' : 'Saída';
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-50)"><div><div style="font-weight:600">${textoTipo} · ${mov.item}</div><div style="font-size:12px;color:var(--gray-400)">${mov.data} · ${mov.quantidade} ${mov.unidade} · ${mov.obs || 'Sem observação'}</div></div><span class="${badge}">${textoTipo}</span></div>`;
  }).join('');

  container.innerHTML = items || '<div style="color:var(--gray-400)">Nenhuma movimentação registrada ainda.</div>';
}

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

  adicionarAoEstoque({
    nome: alimento,
    quantidade: qty,
    unidade: unidade,
    categoria: inferirCategoria(alimento)
  });

  const itemDoado = ESTOQUE_DATA.find(item => normalizarTexto(item.nome) === normalizarTexto(alimento));
  if(itemDoado){
    itemDoado.origem = 'doacao';
  }

  saveData();
  renderTables();
  closeModal('modal-doacao');
  showToast('Doação registrada e adicionada ao estoque.');
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

  adicionarAoEstoque({
    nome: prod,
    quantidade: qty,
    unidade: 'kg',
    categoria: inferirCategoria(prod)
  });

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
  const dataInput = document.querySelector('#modal-refeicao input[type=date]')?.value;
  const hoje = new Date();
  const dataPadrao = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
  const data = formatarDataBrasil(dataInput || dataPadrao);
  REFEICOES_DATA.unshift({id,data,prod:p,serv:s});
  normalizarRefeicoes();
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

const topbarSearch = document.getElementById('topbar-search');
if(topbarSearch){
  topbarSearch.addEventListener('input', applyTableSearch);
}

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