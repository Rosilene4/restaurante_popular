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

function sortEstoque(){
  try{
    ESTOQUE_DATA.sort((a,b)=>{
      return normalizarTexto(a.nome).localeCompare(normalizarTexto(b.nome));
    });
  }catch(e){console.warn('Erro ao ordenar estoque',e)}
}

function sortDoacoes(){
  try{
    DOACOES_DATA.sort((a,b)=>{
      // sort by donated items string (itens)
      return normalizarTexto(a.itens || '').localeCompare(normalizarTexto(b.itens || ''));
    });
  }catch(e){console.warn('Erro ao ordenar doações',e)}
}

let currentUser=null;
// Chart instances
let chartRefeicoes=null;
let chartDoacoes=null;

const PREMISSAS_FINANCEIRAS = {
  pratosPorDia: 267,
  precoPrato: 1,
  custoFixoMensal: 38000,
  consumoPorPrato: {
    'Arroz Tipo 1': 0.08,
    'Feijão Carioca': 0.06,
    'Óleo de Soja': 0.01,
    'Carne Bovina': 0.10,
    'Macarrão': 0.03,
    'Sal': 0.002
  },
  precoUnitario: {
    'Arroz Tipo 1': 4.50,
    'Feijão Carioca': 6.00,
    'Óleo de Soja': 6.50,
    'Carne Bovina': 18.00,
    'Macarrão': 5.50,
    'Sal': 2.50
  }
};

function preencherFormularioPremissas(){
  const pratosInput = document.getElementById('sim-pratos-dia');
  const precoInput = document.getElementById('sim-preco-prato');
  const fixoInput = document.getElementById('sim-custo-fixo');
  if(pratosInput) pratosInput.value = PREMISSAS_FINANCEIRAS.pratosPorDia;
  if(precoInput) precoInput.value = Number(PREMISSAS_FINANCEIRAS.precoPrato).toFixed(2);
  if(fixoInput) fixoInput.value = Math.round(PREMISSAS_FINANCEIRAS.custoFixoMensal);
}

function carregarPremissasFinanceiras(){
  try{
    const raw = localStorage.getItem('PREMISSAS_FINANCEIRAS');
    if(!raw) return;
    const cfg = JSON.parse(raw);
    if(cfg && typeof cfg === 'object'){
      PREMISSAS_FINANCEIRAS.pratosPorDia = Math.max(1, Number(cfg.pratosPorDia) || PREMISSAS_FINANCEIRAS.pratosPorDia);
      PREMISSAS_FINANCEIRAS.precoPrato = Math.max(0, Number(cfg.precoPrato) || PREMISSAS_FINANCEIRAS.precoPrato);
      PREMISSAS_FINANCEIRAS.custoFixoMensal = Math.max(0, Number(cfg.custoFixoMensal) || PREMISSAS_FINANCEIRAS.custoFixoMensal);
    }
  }catch(e){
    console.warn('Falha ao carregar premissas financeiras', e);
  }
}

function salvarPremissasFinanceiras(){
  const pratosInput = document.getElementById('sim-pratos-dia');
  const precoInput = document.getElementById('sim-preco-prato');
  const fixoInput = document.getElementById('sim-custo-fixo');

  const pratosPorDia = Math.max(1, parseInt(pratosInput?.value, 10) || PREMISSAS_FINANCEIRAS.pratosPorDia);
  const precoPrato = Math.max(0, parseFloat(String(precoInput?.value || '').replace(',', '.')) || PREMISSAS_FINANCEIRAS.precoPrato);
  const custoFixoMensal = Math.max(0, parseFloat(String(fixoInput?.value || '').replace(',', '.')) || PREMISSAS_FINANCEIRAS.custoFixoMensal);

  PREMISSAS_FINANCEIRAS.pratosPorDia = pratosPorDia;
  PREMISSAS_FINANCEIRAS.precoPrato = precoPrato;
  PREMISSAS_FINANCEIRAS.custoFixoMensal = custoFixoMensal;

  try{
    localStorage.setItem('PREMISSAS_FINANCEIRAS', JSON.stringify({
      pratosPorDia,
      precoPrato,
      custoFixoMensal
    }));
  }catch(e){
    console.warn('Falha ao salvar premissas financeiras', e);
  }

  preencherFormularioPremissas();
  renderTables();
  showToast('Premissas financeiras atualizadas.');
}

function carregarCenarioSimulado8000(){
  REFEICOES_DATA.splice(0, REFEICOES_DATA.length,
    {id:1,data:'02/05/2026',prod:374,serv:360},
    {id:2,data:'03/05/2026',prod:369,serv:355},
    {id:3,data:'04/05/2026',prod:385,serv:372},
    {id:4,data:'05/05/2026',prod:381,serv:368},
    {id:5,data:'06/05/2026',prod:375,serv:362},
    {id:6,data:'09/05/2026',prod:384,serv:370},
    {id:7,data:'10/05/2026',prod:371,serv:358},
    {id:8,data:'11/05/2026',prod:379,serv:365},
    {id:9,data:'12/05/2026',prod:386,serv:371},
    {id:10,data:'13/05/2026',prod:373,serv:359},
    {id:11,data:'16/05/2026',prod:380,serv:366},
    {id:12,data:'17/05/2026',prod:389,serv:374},
    {id:13,data:'18/05/2026',prod:373,serv:360},
    {id:14,data:'19/05/2026',prod:370,serv:357},
    {id:15,data:'20/05/2026',prod:382,serv:369},
    {id:16,data:'23/05/2026',prod:376,serv:363},
    {id:17,data:'24/05/2026',prod:390,serv:376},
    {id:18,data:'25/05/2026',prod:374,serv:361},
    {id:19,data:'26/05/2026',prod:367,serv:354},
    {id:20,data:'27/05/2026',prod:381,serv:367},
    {id:21,data:'30/05/2026',prod:387,serv:373},
    {id:22,data:'31/05/2026',prod:379,serv:365}
  );

  DOACOES_DATA.splice(0, DOACOES_DATA.length,
    {id:1,doador:'Conab / Governo',data:'04/05/2026',itens:'Arroz Tipo 1',qty:'180 kg'},
    {id:2,doador:'Supermercado Bom Preço',data:'08/05/2026',itens:'Feijão Carioca',qty:'120 kg'},
    {id:3,doador:'Igreja Evangélica Central',data:'11/05/2026',itens:'Macarrão',qty:'80 kg'},
    {id:4,doador:'Associação Moradores',data:'14/05/2026',itens:'Óleo de Soja',qty:'65 L'},
    {id:5,doador:'Conab / Governo',data:'18/05/2026',itens:'Arroz Tipo 1',qty:'160 kg'},
    {id:6,doador:'Supermercado Bom Preço',data:'22/05/2026',itens:'Feijão Carioca',qty:'110 kg'},
    {id:7,doador:'Paróquia São José',data:'25/05/2026',itens:'Sal',qty:'35 kg'},
    {id:8,doador:'Coletivo Solidário',data:'29/05/2026',itens:'Carne Bovina',qty:'90 kg'}
  );

  COMPRAS_DATA.splice(0, COMPRAS_DATA.length,
    {id:1,forn:'Alimentos SA',data:'03/05/2026',itens:'Arroz Tipo 1',val:'R$ 3.240,00'},
    {id:2,forn:'Distribuidora Norte',data:'05/05/2026',itens:'Feijão Carioca',val:'R$ 2.160,00'},
    {id:3,forn:'Cerealista Alagoana',data:'09/05/2026',itens:'Macarrão',val:'R$ 1.870,00'},
    {id:4,forn:'Alimentos SA',data:'12/05/2026',itens:'Carne Bovina',val:'R$ 5.600,00'},
    {id:5,forn:'Distribuidora Norte',data:'16/05/2026',itens:'Óleo de Soja',val:'R$ 1.740,00'},
    {id:6,forn:'Cerealista Alagoana',data:'18/05/2026',itens:'Arroz Tipo 1',val:'R$ 2.970,00'},
    {id:7,forn:'Alimentos SA',data:'20/05/2026',itens:'Feijão Carioca',val:'R$ 2.340,00'},
    {id:8,forn:'Distribuidora Norte',data:'23/05/2026',itens:'Carne Bovina',val:'R$ 4.980,00'},
    {id:9,forn:'Cerealista Alagoana',data:'27/05/2026',itens:'Macarrão',val:'R$ 1.560,00'},
    {id:10,forn:'Alimentos SA',data:'30/05/2026',itens:'Óleo de Soja',val:'R$ 1.620,00'}
  );

  PREMISSAS_FINANCEIRAS.pratosPorDia = 267;
  PREMISSAS_FINANCEIRAS.precoPrato = 1;
  PREMISSAS_FINANCEIRAS.custoFixoMensal = 38000;

  normalizarRefeicoes();
  sortDoacoes();
  sortEstoque();

  preencherFormularioPremissas();
  saveData();
  renderTables();
  renderCharts();
  showToast('Cenário simulado de ~8.000 refeições/mês carregado.');
}

// Load persisted mock data (if exists)
// Load persisted mock data (if exists). Prefer server API, fallback to localStorage.
async function loadData(){
  try{
    // If running from a file:// origin prefer client seed/localStorage
    if(location.protocol === 'file:'){
      // initialize localStorage from client seed if empty
      try{
        if(window.SEED_DATA && !localStorage.getItem('ESTOQUE_DATA')){
          localStorage.setItem('ESTOQUE_DATA', JSON.stringify(window.SEED_DATA.ESTOQUE_DATA || []));
          localStorage.setItem('DOACOES_DATA', JSON.stringify(window.SEED_DATA.DOACOES_DATA || []));
          localStorage.setItem('COMPRAS_DATA', JSON.stringify(window.SEED_DATA.COMPRAS_DATA || []));
          localStorage.setItem('REFEICOES_DATA', JSON.stringify(window.SEED_DATA.REFEICOES_DATA || []));
          localStorage.setItem('MOVIMENTACOES_DATA', JSON.stringify(window.SEED_DATA.MOVIMENTACOES_DATA || []));
        }
      }catch(e){console.warn('Erro ao semear localStorage com seed client',e)}
      // load from localStorage
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
          sortEstoque();
          sortDoacoes();
      }catch(e){console.warn('Erro ao carregar dados do localStorage (file):',e)}
      return;
    }

    const res = await fetch('/api/data');
    if(res.ok){
      const json = await res.json();
      if(json.ESTOQUE_DATA) ESTOQUE_DATA.splice(0,ESTOQUE_DATA.length,...json.ESTOQUE_DATA);
      if(json.DOACOES_DATA) DOACOES_DATA.splice(0,DOACOES_DATA.length,...json.DOACOES_DATA);
      if(json.COMPRAS_DATA) COMPRAS_DATA.splice(0,COMPRAS_DATA.length,...json.COMPRAS_DATA);
      if(json.REFEICOES_DATA) REFEICOES_DATA.splice(0,REFEICOES_DATA.length,...json.REFEICOES_DATA);
      if(json.MOVIMENTACOES_DATA) MOVIMENTACOES_DATA.splice(0,MOVIMENTACOES_DATA.length,...json.MOVIMENTACOES_DATA);
      normalizarRefeicoes();
      sortEstoque();
      sortDoacoes();
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
    sortEstoque();
    sortDoacoes();
  }catch(e){console.warn('Erro ao carregar dados do localStorage',e)}
}

// Save to server API if available, otherwise to localStorage
async function saveData(){
  const payload = {ESTOQUE_DATA,DOACOES_DATA,COMPRAS_DATA,REFEICOES_DATA,MOVIMENTACOES_DATA};
  // If running as file:// prefer localStorage only
  if(location.protocol === 'file:'){
    try{
      localStorage.setItem('ESTOQUE_DATA',JSON.stringify(ESTOQUE_DATA));
      localStorage.setItem('DOACOES_DATA',JSON.stringify(DOACOES_DATA));
      localStorage.setItem('COMPRAS_DATA',JSON.stringify(COMPRAS_DATA));
      localStorage.setItem('REFEICOES_DATA',JSON.stringify(REFEICOES_DATA));
      localStorage.setItem('MOVIMENTACOES_DATA',JSON.stringify(MOVIMENTACOES_DATA));
    }catch(err){console.warn('Erro ao salvar dados no localStorage (file):',err)}
    return;
  }

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

// Estimate costs based on consumption assumptions and 500 plates/day
function calcularEstimativaCustos(pratosPorDia = PREMISSAS_FINANCEIRAS.pratosPorDia){
  const consumoPorPrato = PREMISSAS_FINANCEIRAS.consumoPorPrato;
  const precoUnitario = PREMISSAS_FINANCEIRAS.precoUnitario;

  // compute daily cost
  let custoDia = 0;
  Object.keys(consumoPorPrato).forEach(nome => {
    const consumoUnit = consumoPorPrato[nome] * pratosPorDia; // kg or L per day
    const preco = precoUnitario[nome] || 0;
    custoDia += consumoUnit * preco;
  });

  const custoMes = custoDia * 30;
  const custoFixoMensal = PREMISSAS_FINANCEIRAS.custoFixoMensal;
  const custoFixoDia = custoFixoMensal / 30;
  const custoTotalDia = custoDia + custoFixoDia;
  const custoTotalMes = custoMes + custoFixoMensal;
  const precoPrato = PREMISSAS_FINANCEIRAS.precoPrato;
  const receitaDia = pratosPorDia * precoPrato;
  const receitaMes = receitaDia * 30;
  const aporteDia = Math.max(custoTotalDia - receitaDia, 0);
  const aporteMes = Math.max(custoTotalMes - receitaMes, 0);

  return {
    pratosPorDia,
    custoDia: Number(custoDia.toFixed(2)),
    custoMes: Number(custoMes.toFixed(2)),
    custoFixoDia: Number(custoFixoDia.toFixed(2)),
    custoFixoMensal: Number(custoFixoMensal.toFixed(2)),
    custoTotalDia: Number(custoTotalDia.toFixed(2)),
    custoTotalMes: Number(custoTotalMes.toFixed(2)),
    receitaDia: Number(receitaDia.toFixed(2)),
    receitaMes: Number(receitaMes.toFixed(2)),
    aporteDia: Number(aporteDia.toFixed(2)),
    aporteMes: Number(aporteMes.toFixed(2))
  };
}

function calcularKpisGerenciais(){
  const custos = calcularEstimativaCustos(PREMISSAS_FINANCEIRAS.pratosPorDia);
  const totalProduzido = REFEICOES_DATA.reduce((sum,item)=> sum + (Number(item.prod)||0),0);
  const totalServido = REFEICOES_DATA.reduce((sum,item)=> sum + (Number(item.serv)||0),0);
  const aproveitamento = totalProduzido ? (totalServido / totalProduzido) * 100 : 0;
  const custoPorRefeicao = totalServido ? custos.custoTotalMes / totalServido : 0;
  const aportePorRefeicao = totalServido ? custos.aporteMes / totalServido : 0;

  const consumo = PREMISSAS_FINANCEIRAS.consumoPorPrato;
  const diasCobertura = ESTOQUE_DATA
    .filter(item => consumo[item.nome])
    .map(item => {
      const consumoDia = consumo[item.nome] * PREMISSAS_FINANCEIRAS.pratosPorDia;
      const dias = consumoDia > 0 ? (Number(item.qty) || 0) / consumoDia : 0;
      return { nome: item.nome, dias };
    });

  const coberturaMedia = diasCobertura.length
    ? diasCobertura.reduce((sum,item)=> sum + item.dias,0) / diasCobertura.length
    : 0;

  const itensCriticos = diasCobertura.filter(item => item.dias < 7).length;
  const dependenciaDoacoes = (() => {
    const volumeDoado = DOACOES_DATA.reduce((sum,item)=> sum + parseQty(item.qty),0);
    const necessidadeMensal = Object.values(consumo).reduce((sum,v)=> sum + v,0) * PREMISSAS_FINANCEIRAS.pratosPorDia * 30;
    if(necessidadeMensal <= 0) return 0;
    return (volumeDoado / necessidadeMensal) * 100;
  })();

  const toStatus = (valor, bomMin, atencaoMin) => {
    if(valor >= bomMin) return { statusClass:'ok', statusLabel:'Bom' };
    if(valor >= atencaoMin) return { statusClass:'warn', statusLabel:'Atenção' };
    return { statusClass:'danger', statusLabel:'Crítico' };
  };

  const coberturaStatus = toStatus(coberturaMedia, 20, 10);
  const aproveitamentoStatus = toStatus(aproveitamento, 97, 94);
  const doacoesStatus = dependenciaDoacoes >= 30
    ? { statusClass:'ok', statusLabel:'Bom' }
    : dependenciaDoacoes >= 20
      ? { statusClass:'warn', statusLabel:'Atenção' }
      : { statusClass:'danger', statusLabel:'Crítico' };
  const custoStatus = custoPorRefeicao <= 10
    ? { statusClass:'ok', statusLabel:'Bom' }
    : custoPorRefeicao <= 14
      ? { statusClass:'warn', statusLabel:'Atenção' }
      : { statusClass:'danger', statusLabel:'Crítico' };
  const aporteStatus = aportePorRefeicao <= 8
    ? { statusClass:'ok', statusLabel:'Bom' }
    : aportePorRefeicao <= 12
      ? { statusClass:'warn', statusLabel:'Atenção' }
      : { statusClass:'danger', statusLabel:'Crítico' };
  const rupturaStatus = itensCriticos === 0
    ? { statusClass:'ok', statusLabel:'Bom' }
    : itensCriticos <= 2
      ? { statusClass:'warn', statusLabel:'Atenção' }
      : { statusClass:'danger', statusLabel:'Crítico' };

  return [
    {
      nome: 'Custo por refeição',
      valor: 'R$ ' + custoPorRefeicao.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}),
      meta: '≤ R$ 10,00',
      detalhe: 'Custo total mensal / refeições servidas do período',
      ...custoStatus
    },
    {
      nome: 'Aporte público por refeição',
      valor: 'R$ ' + aportePorRefeicao.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}),
      meta: '≤ R$ 8,00',
      detalhe: 'Diferença custo-receita / refeições servidas',
      ...aporteStatus
    },
    {
      nome: 'Cobertura média de estoque',
      valor: coberturaMedia.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}) + ' dias',
      meta: '≥ 20 dias',
      detalhe: 'Dias de autonomia para insumos críticos em 500 pratos/dia',
      ...coberturaStatus
    },
    {
      nome: 'Itens críticos com risco de ruptura',
      valor: String(itensCriticos),
      meta: '0 itens',
      detalhe: 'Itens com cobertura abaixo de 7 dias',
      ...rupturaStatus
    },
    {
      nome: 'Dependência de doações',
      valor: dependenciaDoacoes.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}) + '%',
      meta: '≥ 30%',
      detalhe: 'Percentual da necessidade mensal coberta por doações',
      ...doacoesStatus
    },
    {
      nome: 'Aproveitamento da produção',
      valor: aproveitamento.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}) + '%',
      meta: '≥ 97%',
      detalhe: 'Relação entre servidas e produzidas',
      ...aproveitamentoStatus
    }
  ];
}

function renderKpisGerenciais(){
  const body = document.getElementById('dashboard-kpis-body');
  if(!body) return;

  const kpis = calcularKpisGerenciais();
  body.innerHTML = kpis.map(kpi => `
    <tr>
      <td><strong>${kpi.nome}</strong><div style="font-size:12px;color:var(--gray-400);margin-top:4px">${kpi.detalhe}</div></td>
      <td>${kpi.valor}</td>
      <td>${kpi.meta}</td>
      <td><span class="badge ${kpi.statusClass}">${kpi.statusLabel}</span></td>
    </tr>
  `).join('');
}

function renderDashboardSummary(){
  const metrics = getDashboardMetrics();

  // update cost estimates (assume 500 pratos por dia)
  const custos = calcularEstimativaCustos(PREMISSAS_FINANCEIRAS.pratosPorDia);
  const custoMesEl = document.getElementById('dashboard-custo-mes');
  const custoDiaEl = document.getElementById('dashboard-custo-dia');
  const custoMesNoteEl = document.getElementById('dashboard-custo-note');
  const custoDiaNoteEl = document.getElementById('dashboard-custo-dia-note');
  const aporteMesEl = document.getElementById('dashboard-aporte-mes');
  const aporteNoteEl = document.getElementById('dashboard-aporte-note');
  if(custoMesEl) custoMesEl.textContent = 'R$ ' + custos.custoTotalMes.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  if(custoDiaEl) custoDiaEl.textContent = 'R$ ' + custos.custoTotalDia.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  if(custoMesNoteEl) custoMesNoteEl.textContent = 'Receita mensal (R$ 1/prato): R$ ' + custos.receitaMes.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  if(custoDiaNoteEl) custoDiaNoteEl.textContent = 'Receita diária (R$ 1/prato): R$ ' + custos.receitaDia.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  if(aporteMesEl) aporteMesEl.textContent = 'R$ ' + custos.aporteMes.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  if(aporteNoteEl) aporteNoteEl.textContent = 'Necessidade diária: R$ ' + custos.aporteDia.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});

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

  renderKpisGerenciais();
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
  sortEstoque();
  sortDoacoes();
  const te=document.getElementById('tabela-estoque');
  if(te){
    if(!ESTOQUE_DATA.length){
      te.innerHTML=`<tr><td colspan="8" style="text-align:center;color:var(--gray-400);padding:24px">Nenhum alimento cadastrado ainda.</td></tr>`;
    }else{
      te.innerHTML=ESTOQUE_DATA.map(i=>{
        const sc=i.status==='ok'?'ok':i.status==='warn'?'warn':'danger';
        const sl=i.status==='ok'?'Dentro da validade':i.status==='warn'?'Atenção':'Vencido';
        return`<tr><td>${i.id}</td><td><strong>${i.nome}</strong></td><td>${i.cat}</td><td>${i.qty}</td><td>${i.un}</td><td>${i.val || '—'}</td><td><span class="badge ${sc}">${sl}</span></td><td><div style="display:flex;gap:6px"><button class="btn outline btn-sm" onclick="openMovimentacaoModal('${i.nome}')">Entrada</button><button class="btn blue btn-sm" onclick="abrirSaidaRapida('${i.nome}')">Saída</button><button class="btn danger btn-sm" onclick="deleteItem(${i.id})">Excluir</button></div></td></tr>`;
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
  renderResumoRefeicoes();
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
  sortEstoque();
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

function openDoacaoModal(){
  const m = document.getElementById('modal-doacao');
  if(!m) return openModal('modal-doacao');

  // populate alimento select from estoque
  try{
    const selects = m.querySelectorAll('select.form-select');
    const inputs = m.querySelectorAll('input');
    const doadorSelect = selects[0];
    const alimentoSelect = selects[1];
    const unidadeSelect = selects[2];

    if(alimentoSelect){
      sortEstoque();
      alimentoSelect.innerHTML = ESTOQUE_DATA.map(item => `<option value="${item.nome}">${item.nome}</option>`).join('');
    }

    // default date to today
    if(inputs[0]) inputs[0].value = new Date().toISOString().split('T')[0];
    // default quantity
    if(inputs[1]) inputs[1].value = inputs[1].value || 1;
    // default unit
    if(unidadeSelect) unidadeSelect.value = 'kg';
  }catch(e){console.warn('Erro ao preparar modal de doação', e)}

  openModal('modal-doacao');
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

function extrairMesAno(valorData){
  const ts = converterDataParaTimestamp(valorData);
  if(ts === null) return null;
  const d = new Date(ts);
  return { mes: d.getMonth(), ano: d.getFullYear() };
}

function renderResumoRefeicoes(){
  const ordenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
  const ultima = ordenadas[0];
  const referencia = ultima ? extrairMesAno(ultima.data) : null;

  const produzidasHojeEl = document.getElementById('refeicoes-produzidas-hoje');
  const servidasHojeEl = document.getElementById('refeicoes-servidas-hoje');
  const produzidasMesEl = document.getElementById('refeicoes-produzidas-mes');
  const servidasMesEl = document.getElementById('refeicoes-servidas-mes');

  const totalMes = ordenadas.reduce((acc, item) => {
    const chave = extrairMesAno(item.data);
    if(!referencia || !chave || chave.mes !== referencia.mes || chave.ano !== referencia.ano) return acc;
    acc.prod += Number(item.prod) || 0;
    acc.serv += Number(item.serv) || 0;
    return acc;
  }, { prod: 0, serv: 0 });

  if(produzidasHojeEl) produzidasHojeEl.textContent = (ultima?.prod || 0).toLocaleString('pt-BR');
  if(servidasHojeEl) servidasHojeEl.textContent = (ultima?.serv || 0).toLocaleString('pt-BR');
  if(produzidasMesEl) produzidasMesEl.textContent = totalMes.prod.toLocaleString('pt-BR');
  if(servidasMesEl) servidasMesEl.textContent = totalMes.serv.toLocaleString('pt-BR');
}

function simularDadosRefeicoes(){
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth();
  const diasUteis = [];

  for(let dia = 1; dia <= 31; dia++){
    const data = new Date(ano, mes, dia);
    if(data.getMonth() !== mes) break;
    const semana = data.getDay();
    if(semana !== 0 && semana !== 6) diasUteis.push(data);
  }

  const diasConsiderados = diasUteis.slice(0, 22);
  const totalServidasAlvo = 8000;
  const base = Math.floor(totalServidasAlvo / diasConsiderados.length);
  let restante = totalServidasAlvo - (base * diasConsiderados.length);

  const variacoes = [-8,-4,-2,0,3,5,7,4,1,-1,-3,2,6,-2,0,4,-5,3,2,-1,5,1];
  const simuladas = diasConsiderados.map((data, idx) => {
    const extra = restante > 0 ? 1 : 0;
    if(restante > 0) restante -= 1;
    const serv = Math.max(320, base + extra + (variacoes[idx] || 0));
    const prod = serv + 10 + (idx % 6);
    return {
      id: idx + 1,
      data: formatarDataBrasil(data.toISOString().split('T')[0]),
      prod,
      serv
    };
  });

  REFEICOES_DATA.splice(0, REFEICOES_DATA.length, ...simuladas);
  normalizarRefeicoes();
  saveData();
  renderTables();
  renderCharts();
  showToast('Dados simulados de refeições carregados (~8.000/mês).');
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
  const valRaw = m.querySelector('input[type=date]')?.value||'';
  const val = valRaw ? formatarDataBrasil(valRaw) : '';
  const id = ESTOQUE_DATA.length?Math.max(...ESTOQUE_DATA.map(x=>x.id))+1:1;
  ESTOQUE_DATA.push({id,nome,cat,qty,un:unit,val,status:'ok'});
  sortEstoque();
  saveData(); renderTables(); closeModal('modal-alimento'); showToast('Alimento cadastrado e salvo.');
}

function deleteItem(id){
  if(!confirm('Excluir item do estoque permanentemente? Esta ação não pode ser desfeita.')) return;
  const idx = ESTOQUE_DATA.findIndex(x => Number(x.id) === Number(id));
  if(idx === -1){ showToast('Item não encontrado.'); return; }
    const itemName = ESTOQUE_DATA[idx].nome;
    ESTOQUE_DATA.splice(idx,1);
    // remove movimentacoes that reference this item name
    for(let i = MOVIMENTACOES_DATA.length - 1; i >= 0; i--){
      if(normalizarTexto(MOVIMENTACOES_DATA[i].item) === normalizarTexto(itemName)){
        MOVIMENTACOES_DATA.splice(i,1);
      }
    }
  saveData(); renderTables(); showToast('Item excluído do estoque.');
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
  sortDoacoes();
  // If donated name corresponds to an existing estoque item, use the exact estoque name
  try{
    const donatedNorm = normalizarTexto(alimento);
    const match = ESTOQUE_DATA.find(item => {
      const itemNorm = normalizarTexto(item.nome);
      return itemNorm.includes(donatedNorm) || donatedNorm.includes(itemNorm);
    });
    if(match){
      alimento = match.nome;
    }
  }catch(e){console.warn('Erro ao normalizar nome da doação', e)}

  // Add to estoque and get the affected item (existing or new)
  const affected = adicionarAoEstoque({
    nome: alimento,
    quantidade: qty,
    unidade: unidade,
    categoria: inferirCategoria(alimento)
  });
  if(affected){
    affected.origem = 'doacao';
  }
  sortEstoque();

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
  sortEstoque();

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
  carregarPremissasFinanceiras();

  await loadData();

  const jaAplicouCenario = localStorage.getItem('CENARIO_SIMULADO_8000') === 'true';
  if(!jaAplicouCenario){
    carregarCenarioSimulado8000();
    localStorage.setItem('CENARIO_SIMULADO_8000', 'true');
  }

  preencherFormularioPremissas();

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