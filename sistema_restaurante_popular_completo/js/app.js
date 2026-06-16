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

function doLogin(){
  const l=document.getElementById('inp-login').value.trim();
  const s=document.getElementById('inp-senha').value;
  if(USERS[l]&&s==='1234'){
    currentUser={login:l,...USERS[l]};
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
    renderTables();
    renderCharts();
    goPage('dashboard');
  }else{
    showToast('Login ou senha inválidos!');
  }
}

function doLogout(){
  document.getElementById('app').style.display='none';
  document.getElementById('login-page').style.display='flex';
}

function goPage(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(x=>{if(x.getAttribute('onclick')&&x.getAttribute('onclick').includes("'"+p+"'"))x.classList.add('active')});
  const titles={dashboard:'Dashboard Gerencial',estoque:'Controle de Estoque',doacoes:'Doações',compras:'Compras',refeicoes:'Refeições',relatorios:'Relatórios',usuarios:'Usuários'};
  document.getElementById('topbar-title').textContent=titles[p]||p;
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
  const days=[{l:'12/05',v:1420},{l:'13/05',v:1380},{l:'14/05',v:1500},{l:'15/05',v:1560},{l:'16/05',v:1290},{l:'17/05',v:1480},{l:'18/05',v:1680}];
  const max1=Math.max(...days.map(d=>d.v));
  document.getElementById('bar-refeicoes').innerHTML=days.map(d=>`<div class="bar-wrap"><div class="bar-val">${d.v}</div><div class="bar" style="height:${Math.round(d.v/max1*90)}px;background:var(--blue-500)"></div><div class="bar-label">${d.l}</div></div>`).join('');
  const months=[{l:'Jan',v:180},{l:'Fev',v:210},{l:'Mar',v:195},{l:'Abr',v:240},{l:'Mai',v:320},{l:'Jun',v:290}];
  const max2=Math.max(...months.map(d=>d.v));
  document.getElementById('bar-doacoes').innerHTML=months.map(d=>`<div class="bar-wrap"><div class="bar-val">${d.v}</div><div class="bar" style="height:${Math.round(d.v/max2*90)}px;background:var(--green-100);border-top:2px solid var(--green-600)"></div><div class="bar-label">${d.l}</div></div>`).join('');
}


// Ficha técnica média: consumo estimado de ingredientes para 1 refeição.
// Os valores estão em kg, exceto óleo, que está em litros.
function baixarEstoquePorRefeicao(qtdRefeicoes){
  const consumoPorRefeicao = {
    'Arroz Tipo 1': 0.08,      // 80g por refeição
    'Feijão Carioca': 0.06,    // 60g por refeição
    'Óleo de Soja': 0.01,      // 10ml por refeição
    'Carne Bovina': 0.10,      // 100g por refeição
    'Macarrão': 0.03,          // 30g por refeição
    'Sal': 0.002               // 2g por refeição
  };

  ESTOQUE_DATA.forEach(item => {
    if(consumoPorRefeicao[item.nome]){
      const quantidadeConsumida = qtdRefeicoes * consumoPorRefeicao[item.nome];

      item.qty = item.qty - quantidadeConsumida;

      if(item.qty < 0){
        item.qty = 0;
      }

      item.qty = Number(item.qty.toFixed(2));
    }
  });
}

function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}

function saveAlimento(){closeModal('modal-alimento');showToast('Alimento cadastrado com sucesso!');}
function saveDoacao(){closeModal('modal-doacao');showToast('Doação registrada! Estoque atualizado automaticamente.');}
function saveCompra(){closeModal('modal-compra');showToast('Compra registrada! Estoque atualizado automaticamente.');}
function saveUsuario(){closeModal('modal-usuario');showToast('Usuário cadastrado com sucesso!');}
function saveRefeicao(){
  const p = parseInt(document.getElementById('inp-produzida').value) || 0;
  const s = parseInt(document.getElementById('inp-servida').value) || 0;
  const w = document.getElementById('refeicao-warn');

  if(s > p){
    w.style.display = 'flex';
    return;
  }

  w.style.display = 'none';

  // Baixa o estoque com base na quantidade PRODUZIDA.
  // A lógica usa uma ficha técnica média por refeição.
  baixarEstoquePorRefeicao(p);

  closeModal('modal-refeicao');
  renderTables();

  showToast('Refeições registradas e estoque atualizado automaticamente!');
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

document.addEventListener('keydown',e=>{if(e.key==='Enter'&&document.getElementById('login-page').style.display!=='none')doLogin();});
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')}));
