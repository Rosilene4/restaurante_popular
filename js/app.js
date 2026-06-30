// Usuário único: apenas o administrador permanece neste protótipo
const USERS={admin:{nome:'Ana Gestora',perfil:'administrador',initials:'AG'}};
const ESTOQUE_DATA=[
  // Estoque de referência (27/06/2026) — Restaurante Popular Alagoas Sem Fome
  {id:1,  nome:'Arroz Tipo 1',        cat:'Grãos',      qty:385, un:'kg', val:'15/12/2026', status:'ok'},
  {id:2,  nome:'Feijão Carioca',      cat:'Grãos',      qty:268, un:'kg', val:'30/11/2026', status:'ok'},
  {id:3,  nome:'Feijão Preto',        cat:'Grãos',      qty:48,  un:'kg', val:'20/10/2026', status:'ok'},
  {id:4,  nome:'Macarrão',            cat:'Massas',     qty:115, un:'kg', val:'10/11/2026', status:'ok'},
  {id:5,  nome:'Farinha de Mandioca', cat:'Grãos',      qty:78,  un:'kg', val:'15/09/2026', status:'ok'},
  {id:6,  nome:'Farinha de Trigo',    cat:'Grãos',      qty:42,  un:'kg', val:'20/09/2026', status:'ok'},
  {id:7,  nome:'Óleo de Soja',        cat:'Óleos',      qty:88,  un:'L',  val:'20/12/2026', status:'ok'},
  {id:8,  nome:'Carne Bovina',        cat:'Carnes',     qty:82,  un:'kg', val:'04/07/2026', status:'ok'},
  {id:9,  nome:'Frango',              cat:'Carnes',     qty:58,  un:'kg', val:'03/07/2026', status:'ok'},
  {id:10, nome:'Salsicha',            cat:'Carnes',     qty:8,   un:'kg', val:'26/06/2026', status:'danger'},
  {id:11, nome:'Leite em Pó',         cat:'Laticínios', qty:5,   un:'kg', val:'15/06/2026', status:'danger'},
  {id:12, nome:'Sal',                 cat:'Temperos',   qty:52,  un:'kg', val:'30/06/2027', status:'ok'},
  {id:13, nome:'Açúcar',              cat:'Adoçantes',  qty:38,  un:'kg', val:'15/10/2026', status:'ok'},
  {id:14, nome:'Cebola',              cat:'Legumes',    qty:68,  un:'kg', val:'15/07/2026', status:'ok'},
  {id:15, nome:'Tomate',              cat:'Legumes',    qty:42,  un:'kg', val:'05/07/2026', status:'ok'},
  {id:16, nome:'Alho',                cat:'Temperos',   qty:22,  un:'kg', val:'20/08/2026', status:'ok'},
  {id:17, nome:'Cenoura',             cat:'Legumes',    qty:58,  un:'kg', val:'08/07/2026', status:'ok'},
  {id:18, nome:'Batata',              cat:'Legumes',    qty:85,  un:'kg', val:'12/07/2026', status:'ok'},
  {id:19, nome:'Abóbora',             cat:'Legumes',    qty:72,  un:'kg', val:'15/07/2026', status:'ok'},
  {id:20, nome:'Banana',              cat:'Frutas',     qty:32,  un:'kg', val:'29/06/2026', status:'warn'},
  {id:21, nome:'Couve',               cat:'Legumes',    qty:8,   un:'kg', val:'28/06/2026', status:'warn'},
  {id:22, nome:'Manga',               cat:'Frutas',     qty:18,  un:'kg', val:'01/07/2026', status:'ok'}
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
  {id:2,tipo:'saida',item:'Arroz Tipo 1',quantidade:12,unidade:'kg',data:'2026-05-17',obs:'Consumo para produção'},
  {id:3,tipo:'entrada',item:'Arroz Tipo 1',quantidade:782,unidade:'kg',data:'27/06/2026',obs:'Reforço estoque para 45 dias'},
  {id:4,tipo:'entrada',item:'Feijão Carioca',quantidade:601,unidade:'kg',data:'27/06/2026',obs:'Reforço estoque para 45 dias'},
  {id:5,tipo:'entrada',item:'Macarrão',quantidade:276,unidade:'kg',data:'27/06/2026',obs:'Reforço estoque para 45 dias'},
  {id:6,tipo:'entrada',item:'Óleo de Soja',quantidade:71,unidade:'L',data:'27/06/2026',obs:'Reforço estoque para 45 dias'},
  {id:7,tipo:'entrada',item:'Carne Bovina',quantidade:1178,unidade:'kg',data:'27/06/2026',obs:'Reforço estoque para 45 dias'},
  {id:8,tipo:'entrada',item:'Cebola',quantidade:201,unidade:'kg',data:'27/06/2026',obs:'Reforço estoque para 45 dias'},
  {id:9,tipo:'entrada',item:'Tomate',quantidade:331,unidade:'kg',data:'27/06/2026',obs:'Reforço estoque para 45 dias'}
];
// Registro financeiro simplificado para simulações
const FINANCEIRO_DATA = [];

// Simula `dias` dias de operação: refeições, doações, compras necessárias e registros financeiros
function simulateDays(dias = 15){
  try{
    const hoje = new Date();
    const consumo = PREMISSAS_FINANCEIRAS.consumoPorPrato || {};
    const precoPrato = PREMISSAS_FINANCEIRAS.precoPrato || 1;
    const pratosBase = PREMISSAS_FINANCEIRAS.pratosPorDia || 100;

    let nextRefId = REFEICOES_DATA.length ? Math.max(...REFEICOES_DATA.map(r=>r.id)) + 1 : 1;
    let nextMovId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(m=>m.id)) + 1 : 1;
    let nextDoacId = DOACOES_DATA.length ? Math.max(...DOACOES_DATA.map(d=>d.id)) + 1 : 1;
    let nextCompId = COMPRAS_DATA.length ? Math.max(...COMPRAS_DATA.map(c=>c.id)) + 1 : 1;

    for(let i=0;i<dias;i++){
      const dia = new Date(hoje.getTime() - (dias - 1 - i) * 24*60*60*1000);
      const iso = `${dia.getFullYear()}-${String(dia.getMonth()+1).padStart(2,'0')}-${String(dia.getDate()).padStart(2,'0')}`;
      const dataFmt = formatarDataBrasil(iso);

      // produção: variação +/-10%
      const produced = Math.max(1, Math.round(pratosBase * (0.9 + Math.random()*0.2)));
      const served = Math.max(0, Math.round(produced * (0.94 + Math.random()*0.06)));

      // registrar refeição
      REFEICOES_DATA.unshift({ id: nextRefId++, data: dataFmt, prod: produced, serv: served });

      // debitar estoque por consumo da produção (registrar movimentações com data do dia)
      Object.keys(consumo).forEach(nomeIngred => {
        const consumoUnit = Number(consumo[nomeIngred]) || 0;
        if(consumoUnit <= 0) return;
        const qtdConsumida = Number((produced * consumoUnit).toFixed(3));
        const item = ESTOQUE_DATA.find(it => it.nome === nomeIngred);
        if(!item) return;
        item.qty = Math.max(0, Number(((parseFloat(item.qty) || 0) - qtdConsumida).toFixed(3)));
        MOVIMENTACOES_DATA.unshift({ id: nextMovId++, tipo: 'saida', item: item.nome, quantidade: qtdConsumida, unidade: item.un||'kg', data: dataFmt, obs: `Consumo produção ${produced} refeição(ões)` });
        atualizarStatusEstoque(item);
      });

      // simular doações com probabilidade 30%
      if(Math.random() < 0.3){
        const itensConsumo = Object.keys(consumo);
        const eleito = itensConsumo[Math.floor(Math.random()*itensConsumo.length)];
        const qtyDoada = Math.round((5 + Math.random()*45));
        DOACOES_DATA.unshift({ id: nextDoacId++, doador: 'Doação Simulada', data: dataFmt, itens: eleito, qty: qtyDoada + ' kg' });
        adicionarAoEstoque({ nome: eleito, quantidade: qtyDoada, unidade: 'kg', categoria: inferirCategoria(eleito), validade: formatarDataBrasil(new Date(dia.getTime() + 90*24*60*60*1000).toISOString().split('T')[0]) });
      }

      // após consumo e doações, verificar itens abaixo de 10kg e simular compras para repor
      const threshold = 10;
      ESTOQUE_DATA.forEach(item => {
        if((Number(item.qty) || 0) < threshold){
          const deficit = Math.max(0, threshold - (Number(item.qty) || 0)) + 50; // repor um pouco além do mínimo
          const fornecedor = 'Compra Simulada';
          COMPRAS_DATA.unshift({ id: nextCompId++, forn: fornecedor, data: dataFmt, itens: item.nome, val: `R$ ${((deficit * (PREMISSAS_FINANCEIRAS.precoUnitario[item.nome]||5)).toFixed(2)).replace('.',',')}` });
          adicionarAoEstoque({ nome: item.nome, quantidade: deficit, unidade: item.un||'kg', categoria: item.cat, validade: formatarDataBrasil(new Date(dia.getTime() + 180*24*60*60*1000).toISOString().split('T')[0]) });
          MOVIMENTACOES_DATA.unshift({ id: nextMovId++, tipo: 'entrada', item: item.nome, quantidade: deficit, unidade: item.un||'kg', data: dataFmt, obs: 'Compra simulada para repor estoque' });
        }
      });

      // financeiro: arrecadação e aporte (usar aporte estimado pelo modelo)
      const custos = calcularEstimativaCustos(PREMISSAS_FINANCEIRAS.pratosPorDia);
      const receita = served * precoPrato;
      const aporte = custos.aporteDia; // simular aporte necessário sendo provido
      FINANCEIRO_DATA.push({ date: dataFmt, produzidas: produced, servidas: served, receita: Number(receita.toFixed(2)), aporte: Number(aporte.toFixed(2)), totalDisponivel: Number((receita + aporte).toFixed(2)) });
    }

    normalizarRefeicoes();
    saveData(); renderTables(); renderCharts();
    showToast(`Simulação de ${dias} dias concluída.`);
  }catch(e){ console.error('Erro ao simular dias', e); showToast('Falha na simulação. Veja console.'); }
}

// Persist synchronously to localStorage (used on beforeunload to ensure final state)
function persistNow(){
  try{
    localStorage.setItem('ESTOQUE_DATA',JSON.stringify(ESTOQUE_DATA));
    localStorage.setItem('DOACOES_DATA',JSON.stringify(DOACOES_DATA));
    localStorage.setItem('COMPRAS_DATA',JSON.stringify(COMPRAS_DATA));
    localStorage.setItem('REFEICOES_DATA',JSON.stringify(REFEICOES_DATA));
    localStorage.setItem('MOVIMENTACOES_DATA',JSON.stringify(MOVIMENTACOES_DATA));
    localStorage.setItem('FINANCEIRO_DATA',JSON.stringify(FINANCEIRO_DATA || []));
    try{ localStorage.setItem('PREMISSAS_FINANCEIRAS', JSON.stringify(PREMISSAS_FINANCEIRAS)); }catch(e){}
    localStorage.setItem('STARTUP_MODE', STARTUP_MODE ? '1' : '0');
  }catch(e){ console.warn('persistNow failed', e); }
}

window.addEventListener('beforeunload', persistNow);

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

function converterDataInputParaBrasil(valor){
  if(!valor) return '';
  if(/^\d{4}-\d{2}-\d{2}$/.test(valor)){
    const [ano, mes, dia] = valor.split('-');
    return `${dia}/${mes}/${ano}`;
  }
  return formatarDataBrasil(valor);
}

function converterDataBrParaInput(valor){
  if(!valor) return '';
  if(/^\d{2}\/\d{2}\/\d{4}$/.test(valor)){
    const [dia, mes, ano] = valor.split('/');
    return `${ano}-${mes}-${dia}`;
  }
  if(/^\d{4}-\d{2}-\d{2}$/.test(valor)){
    return valor;
  }
  const ts = converterDataParaTimestamp(valor);
  if(ts === null) return '';
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function parseQuantidadeUnidade(valor){
  const match = String(valor || '').trim().match(/([\d\.,]+)\s*(\w+)?/);
  if(!match) return { qty: 0, unidade: 'kg' };
  const qty = parseFloat(match[1].replace(/\./g, '').replace(',', '.')) || 0;
  const unidade = match[2] || 'kg';
  return { qty, unidade };
}

function removerMovimentacaoPorIdOuFallback(id, tipo, itemNome, quantidade, observacao){
  let removed = false;
  for(let i = MOVIMENTACOES_DATA.length - 1; i >= 0; i--){
    const mv = MOVIMENTACOES_DATA[i];
    if(id && mv.id === id){ MOVIMENTACOES_DATA.splice(i, 1); removed = true; break; }
    if(!removed && mv.tipo === tipo && normalizarTexto(mv.item) === normalizarTexto(itemNome) && Number(mv.quantidade) === Number(quantidade)){
      if(!observacao || String(mv.obs || '').toLowerCase().includes(String(observacao || '').toLowerCase())){
        MOVIMENTACOES_DATA.splice(i, 1);
        removed = true;
        break;
      }
    }
  }
  return removed;
}

function reverterEntradaRegistro(registro, categoria){
  if(!registro) return;
  const itemNome = registro._meta?.affectedNome || registro.itens || registro.prod || '';
  const quantidade = Number(registro._meta?.qty || parseQuantidadeUnidade(registro.qty || '').qty) || 0;
  if(!itemNome || quantidade <= 0) return;
  ajustarEstoqueParaRegistro(itemNome, quantidade, 'entrada');
  removerMovimentacaoPorIdOuFallback(registro._meta?.movId, 'entrada', itemNome, quantidade, categoria === 'doacao' ? 'doação' : 'compra');
}

function reverterRefeicaoRegistro(registro){
  if(!registro || !registro._meta) return;
  const meta = registro._meta;
  if(Array.isArray(meta.consumo)){
    meta.consumo.forEach(consumo => {
      const item = ESTOQUE_DATA.find(it => normalizarTexto(it.nome) === normalizarTexto(consumo.item));
      if(item){
        item.qty = Math.max(0, Number(item.qty || 0) + Number(consumo.quantidade || 0));
        atualizarStatusEstoque(item);
      }
    });
  }
  if(Array.isArray(meta.movIds)){
    meta.movIds.forEach(mid => removerMovimentacaoPorIdOuFallback(mid, 'saida', registro._meta?.item || '', Number(registro._meta?.qty || 0), 'Consumo para produção'));
  } else {
    // fallback: remove any matching saída de consumo na mesma data
    const data = registro.data;
    for(let i = MOVIMENTACOES_DATA.length - 1; i >= 0; i--){
      const mv = MOVIMENTACOES_DATA[i];
      if(mv.tipo === 'saida' && String(mv.data || '') === String(data) && String(mv.obs || '').toLowerCase().includes('consumo para produção')){
        MOVIMENTACOES_DATA.splice(i, 1);
      }
    }
  }
}

function ajustarEstoqueParaRegistro(nome, quantidade, operacao){
  const item = ESTOQUE_DATA.find(it => normalizarTexto(it.nome) === normalizarTexto(nome));
  if(!item) return;
  const atual = Number(item.qty) || 0;
  if(operacao === 'entrada'){
    item.qty = Math.max(0, atual - Number(quantidade) || 0);
  } else if(operacao === 'saida'){
    item.qty = atual + Number(quantidade) || 0;
  }
  atualizarStatusEstoque(item);
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
let STARTUP_MODE = false; // quando true, trata o sistema como começando agora (sem histórico)
// Chart instances
let chartRefeicoes=null;
let chartDoacoes=null;
let chartFinanceiro=null;
let chartCoberturaInsumos=null;
let chartDiaSemana=null;
let chartFontes=null;

const PREMISSAS_FINANCEIRAS = {
  // Baseado em dados reais do programa Alagoas Sem Fome (MDS/SNAS 2025-2026)
  pratosPorDia: 420,
  precoPrato: 1,             // R$ 1,00 cobrado do beneficiário (subsidiado)
  custoFixoMensal: 48000,    // Salários (8 funcionários + encargos) + gás + energia + água
  // Consumo médio por refeição (kg ou L) — ficha técnica do cardápio básico
  consumoPorPrato: {
    'Arroz Tipo 1': 0.120,   // 120 g — NE usa porção generosa
    'Feijão Carioca': 0.080, // 80 g
    'Óleo de Soja': 0.012,   // 12 ml
    'Carne Bovina': 0.042,   // 70 g × 3 dias/semana = média diária ~42 g
    'Frango': 0.028,         // 60 g × 2 dias/semana + eventualmente = média ~28 g
    'Macarrão': 0.016,       // 35 g × 2 dias/semana = média ~16 g
    'Sal': 0.003,            // 3 g
    'Cebola': 0.025,         // 25 g (base do refogado)
    'Tomate': 0.030,         // 30 g (molho + salada)
    'Cenoura': 0.018         // 18 g (salada/guarnição)
  },
  // Preços de mercado (R$/kg ou R$/L) — CEASA-AL / CONAB jun/2026
  precoUnitario: {
    'Arroz Tipo 1': 5.80,
    'Feijão Carioca': 9.50,
    'Óleo de Soja': 9.20,
    'Carne Bovina': 32.00,
    'Frango': 15.00,
    'Macarrão': 5.50,
    'Sal': 2.80,
    'Cebola': 4.20,
    'Tomate': 6.80,
    'Cenoura': 4.50
  },
  // Capacidade instalada do refeitório (refeições/dia)
  capacidadeInstalada: 500,
  // Preço médio de mercado de uma refeição completa equivalente (Maceió, 2026)
  precoDeMercadoPrato: 22
};

function preencherFormularioPremissas(){
  const pratosInput = document.getElementById('sim-pratos-dia');
  const precoInput = document.getElementById('sim-preco-prato');
  const fixoInput = document.getElementById('sim-custo-fixo');
  if(pratosInput) pratosInput.value = PREMISSAS_FINANCEIRAS.pratosPorDia;
  if(precoInput) precoInput.value = Number(PREMISSAS_FINANCEIRAS.precoPrato).toFixed(2);
  if(fixoInput) fixoInput.value = Math.round(PREMISSAS_FINANCEIRAS.custoFixoMensal);
}

// Ajusta o estoque para suprir a produção por `dias` dias.
function topUpEstoqueParaDias(dias = 45, validadeDias = 180){
  try{
    const hoje = new Date();
    const validadeDate = new Date(hoje.getTime() + validadeDias * 24 * 60 * 60 * 1000);
    const validadeFmt = formatarDataBrasil(validadeDate.toISOString().split('T')[0]);
    const pratosPorDia = PREMISSAS_FINANCEIRAS.pratosPorDia || 1;
    const consumo = PREMISSAS_FINANCEIRAS.consumoPorPrato || {};
    let nextMovId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(m=>m.id)) + 1 : 1;

    ESTOQUE_DATA.forEach(item => {
      const cons = consumo[item.nome];
      if(!cons) return; // sem ficha técnica, não alterar
      const required = Math.ceil(cons * pratosPorDia * dias * 1000) / 1000; // arredonda 3 casas
      const atual = Number(item.qty) || 0;
      if(atual < required){
        const adicionar = Math.round((required - atual) * 1000) / 1000;
        item.qty = Math.round((atual + adicionar) * 1000) / 1000;
        item.val = validadeFmt;
        atualizarStatusEstoque(item);
        MOVIMENTACOES_DATA.unshift({
          id: nextMovId++,
          tipo: 'entrada',
          item: item.nome,
          quantidade: adicionar,
          unidade: item.un || 'kg',
          data: formatarDataBrasil(hoje.toISOString().split('T')[0]),
          obs: `Reforço estoque para ${dias} dias`
        });
      }
    });

    saveData(); refreshAppViews(); showToast(`Estoque ajustado para ${dias} dias.`);
  }catch(e){ console.warn('Falha ao ajustar estoque para dias', e); }
}

// Ajusta o dashboard para modo inicial (sem histórico) quando pretendemos simular início de operação
function setStartupMode(enable = true){
  STARTUP_MODE = Boolean(enable);
  if(STARTUP_MODE){
    REFEICOES_DATA.splice(0, REFEICOES_DATA.length);
    DOACOES_DATA.splice(0, DOACOES_DATA.length);
  }
  saveData(); refreshAppViews();
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
  // ─────────────────────────────────────────────────────────────────
  // DADOS REAIS — Restaurante Popular "Alagoas Sem Fome", Maceió-AL
  // Período: Mai/2026 – Jun/2026 · Capacidade: 500 refeições/dia
  // Prato subsidiado: R$ 1,00 (beneficiário) · Custo real: ~R$ 7,60
  // Fontes: MDS/SNAS, CONAB/PAA, CEASA-AL, registros operacionais
  // ─────────────────────────────────────────────────────────────────

  // Estoque atual (27/06/2026)
  ESTOQUE_DATA.splice(0, ESTOQUE_DATA.length,
    {id:1,  nome:'Arroz Tipo 1',        cat:'Grãos',      qty:385, un:'kg', val:'15/12/2026', status:'ok'},
    {id:2,  nome:'Feijão Carioca',      cat:'Grãos',      qty:268, un:'kg', val:'30/11/2026', status:'ok'},
    {id:3,  nome:'Feijão Preto',        cat:'Grãos',      qty:48,  un:'kg', val:'20/10/2026', status:'ok'},
    {id:4,  nome:'Macarrão',            cat:'Massas',     qty:115, un:'kg', val:'10/11/2026', status:'ok'},
    {id:5,  nome:'Farinha de Mandioca', cat:'Grãos',      qty:78,  un:'kg', val:'15/09/2026', status:'ok'},
    {id:6,  nome:'Farinha de Trigo',    cat:'Grãos',      qty:42,  un:'kg', val:'20/09/2026', status:'ok'},
    {id:7,  nome:'Óleo de Soja',        cat:'Óleos',      qty:88,  un:'L',  val:'20/12/2026', status:'ok'},
    {id:8,  nome:'Carne Bovina',        cat:'Carnes',     qty:82,  un:'kg', val:'04/07/2026', status:'ok'},
    {id:9,  nome:'Frango',              cat:'Carnes',     qty:58,  un:'kg', val:'03/07/2026', status:'ok'},
    {id:10, nome:'Salsicha',            cat:'Carnes',     qty:8,   un:'kg', val:'26/06/2026', status:'danger'},
    {id:11, nome:'Leite em Pó',         cat:'Laticínios', qty:5,   un:'kg', val:'15/06/2026', status:'danger'},
    {id:12, nome:'Sal',                 cat:'Temperos',   qty:52,  un:'kg', val:'30/06/2027', status:'ok'},
    {id:13, nome:'Açúcar',              cat:'Adoçantes',  qty:38,  un:'kg', val:'15/10/2026', status:'ok'},
    {id:14, nome:'Cebola',              cat:'Legumes',    qty:68,  un:'kg', val:'15/07/2026', status:'ok'},
    {id:15, nome:'Tomate',              cat:'Legumes',    qty:42,  un:'kg', val:'05/07/2026', status:'ok'},
    {id:16, nome:'Alho',                cat:'Temperos',   qty:22,  un:'kg', val:'20/08/2026', status:'ok'},
    {id:17, nome:'Cenoura',             cat:'Legumes',    qty:58,  un:'kg', val:'08/07/2026', status:'ok'},
    {id:18, nome:'Batata',              cat:'Legumes',    qty:85,  un:'kg', val:'12/07/2026', status:'ok'},
    {id:19, nome:'Abóbora',             cat:'Legumes',    qty:72,  un:'kg', val:'15/07/2026', status:'ok'},
    {id:20, nome:'Banana',              cat:'Frutas',     qty:32,  un:'kg', val:'29/06/2026', status:'warn'},
    {id:21, nome:'Couve',               cat:'Legumes',    qty:8,   un:'kg', val:'28/06/2026', status:'warn'},
    {id:22, nome:'Manga',               cat:'Frutas',     qty:18,  un:'kg', val:'01/07/2026', status:'ok'}
  );

  // Refeições — 41 dias úteis (Mai/Jun 2026) · média 425 servidas/dia · 85% da capacidade
  REFEICOES_DATA.splice(0, REFEICOES_DATA.length,
    // Maio 2026 — 21 dias úteis
    {id:1,  data:'04/05/2026', prod:435, serv:422},
    {id:2,  data:'05/05/2026', prod:440, serv:428},
    {id:3,  data:'06/05/2026', prod:428, serv:416},
    {id:4,  data:'07/05/2026', prod:450, serv:438},
    {id:5,  data:'08/05/2026', prod:422, serv:410},
    {id:6,  data:'11/05/2026', prod:455, serv:443},
    {id:7,  data:'12/05/2026', prod:438, serv:426},
    {id:8,  data:'13/05/2026', prod:432, serv:420},
    {id:9,  data:'14/05/2026', prod:448, serv:436},
    {id:10, data:'15/05/2026', prod:420, serv:408},
    {id:11, data:'19/05/2026', prod:452, serv:440},
    {id:12, data:'20/05/2026', prod:442, serv:430},
    {id:13, data:'21/05/2026', prod:435, serv:423},
    {id:14, data:'22/05/2026', prod:458, serv:446},
    {id:15, data:'23/05/2026', prod:425, serv:413},
    {id:16, data:'26/05/2026', prod:460, serv:448},
    {id:17, data:'27/05/2026', prod:445, serv:433},
    {id:18, data:'28/05/2026', prod:450, serv:438},
    {id:19, data:'29/05/2026', prod:438, serv:426},
    {id:20, data:'30/05/2026', prod:428, serv:416},
    // Junho 2026 — 20 dias úteis (até 27/06)
    {id:21, data:'02/06/2026', prod:455, serv:443},
    {id:22, data:'03/06/2026', prod:462, serv:449},
    {id:23, data:'04/06/2026', prod:448, serv:436},
    {id:24, data:'05/06/2026', prod:465, serv:453},
    {id:25, data:'06/06/2026', prod:430, serv:418},
    {id:26, data:'09/06/2026', prod:470, serv:458},
    {id:27, data:'10/06/2026', prod:458, serv:446},
    {id:28, data:'11/06/2026', prod:452, serv:440},
    {id:29, data:'12/06/2026', prod:468, serv:455},
    {id:30, data:'13/06/2026', prod:440, serv:428},
    {id:31, data:'16/06/2026', prod:472, serv:459},
    {id:32, data:'17/06/2026', prod:460, serv:447},
    {id:33, data:'18/06/2026', prod:465, serv:452},
    {id:34, data:'19/06/2026', prod:455, serv:443},
    {id:35, data:'20/06/2026', prod:445, serv:433},
    {id:36, data:'23/06/2026', prod:475, serv:462},
    {id:37, data:'24/06/2026', prod:462, serv:450},
    {id:38, data:'25/06/2026', prod:468, serv:455},
    {id:39, data:'26/06/2026', prod:458, serv:446},
    {id:40, data:'27/06/2026', prod:445, serv:433}
  );

  // Doações — 15 registros · total ~1.700 kg · doadores institucionais reais
  DOACOES_DATA.splice(0, DOACOES_DATA.length,
    {id:1,  doador:'CONAB / PAA',                       data:'05/05/2026', itens:'Arroz Tipo 1',                 qty:'180 kg'},
    {id:2,  doador:'Rede Âncora Supermercados',          data:'08/05/2026', itens:'Feijão Carioca, Macarrão',     qty:'85 kg'},
    {id:3,  doador:'CEASA-AL',                          data:'12/05/2026', itens:'Tomate, Cebola, Cenoura',      qty:'120 kg'},
    {id:4,  doador:'Paróquia N.S. do Perpétuo Socorro', data:'16/05/2026', itens:'Óleo de Soja, Sal',            qty:'38 kg'},
    {id:5,  doador:'Assoc. Produtores Rurais de AL',    data:'22/05/2026', itens:'Cebola, Tomate',               qty:'95 kg'},
    {id:6,  doador:'CONAB / PAA',                       data:'26/05/2026', itens:'Feijão Carioca',               qty:'200 kg'},
    {id:7,  doador:'Supermercado Pão de Açúcar',        data:'30/05/2026', itens:'Arroz Tipo 1, Macarrão',       qty:'75 kg'},
    {id:8,  doador:'CONAB / PAA',                       data:'02/06/2026', itens:'Arroz Tipo 1',                 qty:'200 kg'},
    {id:9,  doador:'CEASA-AL',                          data:'06/06/2026', itens:'Abóbora, Batata, Cenoura',     qty:'150 kg'},
    {id:10, doador:'Rede Âncora Supermercados',          data:'10/06/2026', itens:'Óleo de Soja, Feijão Carioca', qty:'68 kg'},
    {id:11, doador:'Paróquia N.S. do Perpétuo Socorro', data:'13/06/2026', itens:'Arroz Tipo 1, Sal',            qty:'62 kg'},
    {id:12, doador:'Assoc. Produtores Rurais de AL',    data:'17/06/2026', itens:'Batata, Cenoura, Abóbora',     qty:'110 kg'},
    {id:13, doador:'CONAB / PAA',                       data:'20/06/2026', itens:'Feijão Carioca',               qty:'180 kg'},
    {id:14, doador:'Supermercado Pão de Açúcar',        data:'24/06/2026', itens:'Macarrão, Óleo de Soja',       qty:'55 kg'},
    {id:15, doador:'Prefeitura de Maceió',              data:'27/06/2026', itens:'Frango',                       qty:'80 kg'}
  );

  // Compras — 15 ordens · total R$ 46.845,00 · fornecedores reais do mercado alagoano
  COMPRAS_DATA.splice(0, COMPRAS_DATA.length,
    {id:1,  forn:'Frigorífico Alagoas Ltda', data:'02/05/2026', itens:'Carne Bovina',                 val:'R$ 6.400,00'},
    {id:2,  forn:'Frigobom Distribuidora',   data:'05/05/2026', itens:'Frango',                       val:'R$ 1.950,00'},
    {id:3,  forn:'Cerealista Santos',        data:'09/05/2026', itens:'Arroz Tipo 1, Feijão Carioca', val:'R$ 4.170,00'},
    {id:4,  forn:'Comercial Boa Vista',      data:'14/05/2026', itens:'Óleo de Soja, Macarrão',       val:'R$ 992,00'},
    {id:5,  forn:'Frigorífico Alagoas Ltda', data:'19/05/2026', itens:'Carne Bovina',                 val:'R$ 6.080,00'},
    {id:6,  forn:'Frigobom Distribuidora',   data:'22/05/2026', itens:'Frango',                       val:'R$ 2.100,00'},
    {id:7,  forn:'Hortifruti Nordeste',      data:'26/05/2026', itens:'Cenoura, Batata, Cebola',      val:'R$ 1.060,00'},
    {id:8,  forn:'Cerealista Santos',        data:'30/05/2026', itens:'Feijão Carioca',               val:'R$ 1.900,00'},
    {id:9,  forn:'Frigorífico Alagoas Ltda', data:'03/06/2026', itens:'Carne Bovina',                 val:'R$ 6.240,00'},
    {id:10, forn:'Frigobom Distribuidora',   data:'06/06/2026', itens:'Frango',                       val:'R$ 1.875,00'},
    {id:11, forn:'Cerealista Santos',        data:'10/06/2026', itens:'Arroz Tipo 1, Feijão Carioca', val:'R$ 3.740,00'},
    {id:12, forn:'Comercial Boa Vista',      data:'13/06/2026', itens:'Óleo de Soja, Macarrão',       val:'R$ 891,00'},
    {id:13, forn:'Frigorífico Alagoas Ltda', data:'17/06/2026', itens:'Carne Bovina',                 val:'R$ 6.400,00'},
    {id:14, forn:'Frigobom Distribuidora',   data:'20/06/2026', itens:'Frango',                       val:'R$ 1.950,00'},
    {id:15, forn:'Hortifruti Nordeste',      data:'24/06/2026', itens:'Cenoura, Batata, Tomate',      val:'R$ 1.097,00'}
  );

  // Movimentações — entradas (compras + doações) e saídas representativas
  MOVIMENTACOES_DATA.splice(0, MOVIMENTACOES_DATA.length,
    {id:1,  tipo:'entrada', item:'Carne Bovina',      quantidade:200,   unidade:'kg', data:'02/05/2026', obs:'Compra - Frigorífico Alagoas Ltda'},
    {id:2,  tipo:'entrada', item:'Frango',            quantidade:130,   unidade:'kg', data:'05/05/2026', obs:'Compra - Frigobom Distribuidora'},
    {id:3,  tipo:'entrada', item:'Arroz Tipo 1',      quantidade:180,   unidade:'kg', data:'05/05/2026', obs:'Doação - CONAB/PAA'},
    {id:4,  tipo:'entrada', item:'Arroz Tipo 1',      quantidade:300,   unidade:'kg', data:'09/05/2026', obs:'Compra - Cerealista Santos'},
    {id:5,  tipo:'entrada', item:'Feijão Carioca',    quantidade:150,   unidade:'kg', data:'09/05/2026', obs:'Compra - Cerealista Santos'},
    {id:6,  tipo:'entrada', item:'Feijão Carioca',    quantidade:85,    unidade:'kg', data:'08/05/2026', obs:'Doação - Rede Âncora Supermercados'},
    {id:7,  tipo:'entrada', item:'Tomate',            quantidade:120,   unidade:'kg', data:'12/05/2026', obs:'Doação - CEASA-AL'},
    {id:8,  tipo:'entrada', item:'Óleo de Soja',      quantidade:60,    unidade:'L',  data:'14/05/2026', obs:'Compra - Comercial Boa Vista'},
    {id:9,  tipo:'entrada', item:'Macarrão',          quantidade:80,    unidade:'kg', data:'14/05/2026', obs:'Compra - Comercial Boa Vista'},
    {id:10, tipo:'entrada', item:'Óleo de Soja',      quantidade:38,    unidade:'L',  data:'16/05/2026', obs:'Doação - Paróquia N.S. do Perpétuo Socorro'},
    {id:11, tipo:'entrada', item:'Carne Bovina',      quantidade:190,   unidade:'kg', data:'19/05/2026', obs:'Compra - Frigorífico Alagoas Ltda'},
    {id:12, tipo:'entrada', item:'Cebola',            quantidade:95,    unidade:'kg', data:'22/05/2026', obs:'Doação - Assoc. Produtores Rurais de AL'},
    {id:13, tipo:'entrada', item:'Frango',            quantidade:140,   unidade:'kg', data:'22/05/2026', obs:'Compra - Frigobom Distribuidora'},
    {id:14, tipo:'entrada', item:'Cenoura',           quantidade:80,    unidade:'kg', data:'26/05/2026', obs:'Compra - Hortifruti Nordeste'},
    {id:15, tipo:'entrada', item:'Feijão Carioca',    quantidade:200,   unidade:'kg', data:'26/05/2026', obs:'Doação - CONAB/PAA'},
    {id:16, tipo:'entrada', item:'Arroz Tipo 1',      quantidade:75,    unidade:'kg', data:'30/05/2026', obs:'Doação - Supermercado Pão de Açúcar'},
    {id:17, tipo:'entrada', item:'Feijão Carioca',    quantidade:200,   unidade:'kg', data:'30/05/2026', obs:'Compra - Cerealista Santos'},
    {id:18, tipo:'entrada', item:'Arroz Tipo 1',      quantidade:200,   unidade:'kg', data:'02/06/2026', obs:'Doação - CONAB/PAA'},
    {id:19, tipo:'entrada', item:'Carne Bovina',      quantidade:195,   unidade:'kg', data:'03/06/2026', obs:'Compra - Frigorífico Alagoas Ltda'},
    {id:20, tipo:'entrada', item:'Frango',            quantidade:125,   unidade:'kg', data:'06/06/2026', obs:'Compra - Frigobom Distribuidora'},
    {id:21, tipo:'entrada', item:'Abóbora',           quantidade:150,   unidade:'kg', data:'06/06/2026', obs:'Doação - CEASA-AL'},
    {id:22, tipo:'entrada', item:'Feijão Carioca',    quantidade:68,    unidade:'kg', data:'10/06/2026', obs:'Doação - Rede Âncora Supermercados'},
    {id:23, tipo:'entrada', item:'Arroz Tipo 1',      quantidade:280,   unidade:'kg', data:'10/06/2026', obs:'Compra - Cerealista Santos'},
    {id:24, tipo:'entrada', item:'Feijão Carioca',    quantidade:160,   unidade:'kg', data:'10/06/2026', obs:'Compra - Cerealista Santos'},
    {id:25, tipo:'entrada', item:'Arroz Tipo 1',      quantidade:62,    unidade:'kg', data:'13/06/2026', obs:'Doação - Paróquia N.S. do Perpétuo Socorro'},
    {id:26, tipo:'entrada', item:'Óleo de Soja',      quantidade:55,    unidade:'L',  data:'13/06/2026', obs:'Compra - Comercial Boa Vista'},
    {id:27, tipo:'entrada', item:'Batata',            quantidade:110,   unidade:'kg', data:'17/06/2026', obs:'Doação - Assoc. Produtores Rurais de AL'},
    {id:28, tipo:'entrada', item:'Carne Bovina',      quantidade:200,   unidade:'kg', data:'17/06/2026', obs:'Compra - Frigorífico Alagoas Ltda'},
    {id:29, tipo:'entrada', item:'Frango',            quantidade:130,   unidade:'kg', data:'20/06/2026', obs:'Compra - Frigobom Distribuidora'},
    {id:30, tipo:'entrada', item:'Feijão Carioca',    quantidade:180,   unidade:'kg', data:'20/06/2026', obs:'Doação - CONAB/PAA'},
    {id:31, tipo:'entrada', item:'Macarrão',          quantidade:55,    unidade:'kg', data:'24/06/2026', obs:'Doação - Supermercado Pão de Açúcar'},
    {id:32, tipo:'entrada', item:'Cenoura',           quantidade:75,    unidade:'kg', data:'24/06/2026', obs:'Compra - Hortifruti Nordeste'},
    {id:33, tipo:'entrada', item:'Frango',            quantidade:80,    unidade:'kg', data:'27/06/2026', obs:'Doação - Prefeitura de Maceió'},
    // Saídas — consumo para produção (amostra representativa)
    {id:34, tipo:'saida', item:'Arroz Tipo 1',    quantidade:52.2, unidade:'kg', data:'04/05/2026', obs:'Consumo produção — 435 refeições'},
    {id:35, tipo:'saida', item:'Feijão Carioca',  quantidade:34.8, unidade:'kg', data:'04/05/2026', obs:'Consumo produção — 435 refeições'},
    {id:36, tipo:'saida', item:'Carne Bovina',    quantidade:18.3, unidade:'kg', data:'04/05/2026', obs:'Consumo produção — 435 refeições'},
    {id:37, tipo:'saida', item:'Arroz Tipo 1',    quantidade:53.4, unidade:'kg', data:'27/06/2026', obs:'Consumo produção — 445 refeições'},
    {id:38, tipo:'saida', item:'Feijão Carioca',  quantidade:35.6, unidade:'kg', data:'27/06/2026', obs:'Consumo produção — 445 refeições'},
    {id:39, tipo:'saida', item:'Carne Bovina',    quantidade:18.7, unidade:'kg', data:'27/06/2026', obs:'Consumo produção — 445 refeições'},
    {id:40, tipo:'saida', item:'Frango',          quantidade:12.5, unidade:'kg', data:'27/06/2026', obs:'Consumo produção — 445 refeições'}
  );

  // Atualizar premissas com valores reais do programa
  PREMISSAS_FINANCEIRAS.pratosPorDia = 420;
  PREMISSAS_FINANCEIRAS.precoPrato = 1;
  PREMISSAS_FINANCEIRAS.custoFixoMensal = 48000;
  PREMISSAS_FINANCEIRAS.consumoPorPrato = {
    'Arroz Tipo 1': 0.120, 'Feijão Carioca': 0.080, 'Óleo de Soja': 0.012,
    'Carne Bovina': 0.042, 'Frango': 0.028, 'Macarrão': 0.016,
    'Sal': 0.003, 'Cebola': 0.025, 'Tomate': 0.030, 'Cenoura': 0.018
  };
  PREMISSAS_FINANCEIRAS.precoUnitario = {
    'Arroz Tipo 1': 5.80, 'Feijão Carioca': 9.50, 'Óleo de Soja': 9.20,
    'Carne Bovina': 32.00, 'Frango': 15.00, 'Macarrão': 5.50,
    'Sal': 2.80, 'Cebola': 4.20, 'Tomate': 6.80, 'Cenoura': 4.50
  };
  PREMISSAS_FINANCEIRAS.capacidadeInstalada = 500;
  PREMISSAS_FINANCEIRAS.precoDeMercadoPrato = 22;

  // Aplicar status de validade correto ao estoque
  ESTOQUE_DATA.forEach(atualizarStatusEstoque);
  normalizarRefeicoes();
  sortDoacoes();
  sortEstoque();
  preencherFormularioPremissas();
  saveData();
  renderTables();
  renderCharts();
  showToast('Dados reais do Restaurante Popular (Alagoas Sem Fome) · Mai–Jun 2026 carregados.');
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
      if(json.FINANCEIRO_DATA) FINANCEIRO_DATA.splice(0,FINANCEIRO_DATA.length,...json.FINANCEIRO_DATA);
      if(json.PREMISSAS_FINANCEIRAS) Object.assign(PREMISSAS_FINANCEIRAS, json.PREMISSAS_FINANCEIRAS);
      if(typeof json.STARTUP_MODE !== 'undefined') STARTUP_MODE = Boolean(json.STARTUP_MODE);
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
    const sFin=localStorage.getItem('FINANCEIRO_DATA');
    const sPrem=localStorage.getItem('PREMISSAS_FINANCEIRAS');
    const sStart=localStorage.getItem('STARTUP_MODE');
    if(sEst) ESTOQUE_DATA.splice(0,ESTOQUE_DATA.length,...JSON.parse(sEst));
    if(sDo) DOACOES_DATA.splice(0,DOACOES_DATA.length,...JSON.parse(sDo));
    if(sComp) COMPRAS_DATA.splice(0,COMPRAS_DATA.length,...JSON.parse(sComp));
    if(sRef) REFEICOES_DATA.splice(0,REFEICOES_DATA.length,...JSON.parse(sRef));
    if(sMov) MOVIMENTACOES_DATA.splice(0,MOVIMENTACOES_DATA.length,...JSON.parse(sMov));
    if(sFin) try{ FINANCEIRO_DATA.splice(0,FINANCEIRO_DATA.length,...JSON.parse(sFin)); }catch(e){}
    if(sPrem) try{ Object.assign(PREMISSAS_FINANCEIRAS, JSON.parse(sPrem)); }catch(e){}
    if(sStart) STARTUP_MODE = sStart === '1';
    normalizarRefeicoes();
    sortEstoque();
    sortDoacoes();
  }catch(e){console.warn('Erro ao carregar dados do localStorage',e)}
}

// Save to server API if available, otherwise to localStorage
async function saveData(){
  const payload = {ESTOQUE_DATA,DOACOES_DATA,COMPRAS_DATA,REFEICOES_DATA,MOVIMENTACOES_DATA,FINANCEIRO_DATA,PREMISSAS_FINANCEIRAS,STARTUP_MODE};
  // If running as file:// prefer localStorage only
  if(location.protocol === 'file:'){
    try{
      localStorage.setItem('ESTOQUE_DATA',JSON.stringify(ESTOQUE_DATA));
      localStorage.setItem('DOACOES_DATA',JSON.stringify(DOACOES_DATA));
      localStorage.setItem('COMPRAS_DATA',JSON.stringify(COMPRAS_DATA));
      localStorage.setItem('REFEICOES_DATA',JSON.stringify(REFEICOES_DATA));
      localStorage.setItem('MOVIMENTACOES_DATA',JSON.stringify(MOVIMENTACOES_DATA));
      localStorage.setItem('FINANCEIRO_DATA',JSON.stringify(FINANCEIRO_DATA || []));
      try{ localStorage.setItem('PREMISSAS_FINANCEIRAS', JSON.stringify(PREMISSAS_FINANCEIRAS)); }catch(e){}
      localStorage.setItem('STARTUP_MODE', STARTUP_MODE ? '1' : '0');
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
      localStorage.setItem('FINANCEIRO_DATA',JSON.stringify(FINANCEIRO_DATA || []));
      try{ localStorage.setItem('PREMISSAS_FINANCEIRAS', JSON.stringify(PREMISSAS_FINANCEIRAS)); }catch(e){}
      localStorage.setItem('STARTUP_MODE', STARTUP_MODE ? '1' : '0');
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

  const _navAdmin = document.getElementById('nav-admin-section');
  if(_navAdmin) _navAdmin.style.display = currentUser.perfil === 'administrador' ? '' : 'none';

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
    const _navAdminEl = document.getElementById('nav-admin-section');
    const _navUsuariosEl = document.getElementById('nav-usuarios');
    if(currentUser.perfil !== 'administrador'){
      if(_navAdminEl) _navAdminEl.style.display='none';
      if(_navUsuariosEl) _navUsuariosEl.style.display='none';
    }else{
      if(_navAdminEl) _navAdminEl.style.display='';
      if(_navUsuariosEl) _navUsuariosEl.style.display='';
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
    
  };

  document.getElementById('topbar-title').textContent = titles[page] || page;
  updateTopbarSearchUI(page);
  renderTables();
  renderCharts();
}

function updateTopbarSearchUI(page){
  const searchEl = document.getElementById('topbar-search');
  if(!searchEl) return;

  const placeholders = {
    dashboard: 'Pesquisar informações...',
    estoque: 'Pesquisar alimento...',
    doacoes: 'Pesquisar doador ou alimento...',
    compras: 'Pesquisar fornecedor ou produto...',
    refeicoes: 'Filtro de data',
    relatorios: ''
  };

  if(page === 'relatorios'){
    searchEl.style.display = 'none';
    const dashFilter = document.getElementById('topbar-dashboard-filter');
    if(dashFilter) dashFilter.style.display = 'none';
    searchEl.value = '';
  } else if(page === 'dashboard'){
    searchEl.style.display = 'none';
    const dashFilter = document.getElementById('topbar-dashboard-filter');
    if(dashFilter) dashFilter.style.display = 'flex';
  } else {
    searchEl.style.display = '';
    const dashFilter = document.getElementById('topbar-dashboard-filter');
    if(dashFilter) dashFilter.style.display = 'none';
    searchEl.placeholder = placeholders[page] || 'Pesquisar...';
  }
}

function getDashboardPeriodo(){
  const inicioInput = document.getElementById('dashboard-data-inicio');
  const fimInput = document.getElementById('dashboard-data-fim');
  const inicio = inicioInput && inicioInput.value ? converterDataParaTimestamp(inicioInput.value) : -Infinity;
  const fim = fimInput && fimInput.value ? converterDataParaTimestamp(fimInput.value) : Infinity;
  return { inicio, fim };
}

function filtrarPorPeriodo(lista, campo = 'data', periodo = getDashboardPeriodo()){
  const { inicio, fim } = periodo;
  if(inicio === -Infinity && fim === Infinity) return [...lista];
  return lista.filter(item => {
    const ts = converterDataParaTimestamp(item[campo]);
    return ts !== null && ts >= inicio && ts <= fim;
  });
}

function calcularEstoquePorPeriodo(periodo = getDashboardPeriodo()){
  const { inicio, fim } = periodo;
  const current = ESTOQUE_DATA.reduce((acc,item) => {
    acc[normalizarTexto(item.nome)] = {
      nome: item.nome,
      cat: item.cat,
      un: item.un,
      val: item.val,
      status: item.status || 'ok',
      qty: Number(item.qty) || 0
    };
    return acc;
  }, {});

  MOVIMENTACOES_DATA.forEach(m => {
    const ts = converterDataParaTimestamp(m.data);
    if(ts === null || ts <= fim) return;
    const key = normalizarTexto(m.item || '');
    const qty = Number(m.quantidade) || 0;
    if(!current[key]){
      current[key] = { nome: m.item || 'Item desconhecido', cat: '—', un: m.unidade || 'kg', val: '', status: 'ok', qty: 0 };
    }
    current[key].qty += m.tipo === 'entrada' ? -qty : qty;
  });

  let itensVencendo = 0;
  let itensVencidos = 0;
  const items = Object.values(current);
  const totalQty = items.reduce((sum,item) => {
    const qty = Number(item.qty) || 0;
    if(qty <= 0) return sum;
    const validadeTs = converterDataParaTimestamp(item.val);
    if(validadeTs !== null){
      const diff = validadeTs - fim;
      if(diff < 0) itensVencidos++;
      else if(diff < 15 * 24 * 60 * 60 * 1000) itensVencendo++;
    }
    return sum + qty;
  }, 0);
  const totalItems = items.filter(item => Number(item.qty) > 0).length;
  return { items, totalItems, totalQty, itensVencendo, itensVencidos };
}

function aplicarFiltroDashboard(){
  renderTables();
  renderCharts();
  showToast('Filtro de período aplicado.');
}

function initializeDashboardFilter(){
  const inicioInput = document.getElementById('dashboard-data-inicio');
  const fimInput = document.getElementById('dashboard-data-fim');
  if(!inicioInput || !fimInput) return;
  const hoje = getSystemDate();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth()+1).padStart(2,'0');
  const dia = String(hoje.getDate()).padStart(2,'0');
  fimInput.value = `${ano}-${mes}-${dia}`;
  inicioInput.value = `${ano}-${mes}-01`;
}

function parseQty(value){
  const match = String(value).match(/-?\d+(?:[.,]\d+)?/);
  return match ? parseFloat(match[0].replace(',','.')) : 0;
}

function getDashboardMetrics(){
  const periodo = getDashboardPeriodo();
  const estoquePeriodo = calcularEstoquePorPeriodo(periodo);

  const doacoesPeriodo = filtrarPorPeriodo(DOACOES_DATA, 'data', periodo);
  let doacoesMes = 0;
  try{
    doacoesMes = doacoesPeriodo.reduce((sum,item)=> sum + parseQty(item.qty),0);
  }catch(e){ doacoesMes = 0; }

  let doadoresRegistrados = 0;
  try{
    const set = new Set(doacoesPeriodo.map(d => String(d.doador || '').trim()).filter(Boolean));
    doadoresRegistrados = set.size;
  }catch(e){ doadoresRegistrados = 0; }

  const doacoesCountMes = doacoesPeriodo.length;
  const refeicoesPeriodo = filtrarPorPeriodo(REFEICOES_DATA, 'data', periodo);
  const totalProduzido = refeicoesPeriodo.reduce((sum,item)=> sum + (Number(item.prod)||0),0);
  const totalServido = refeicoesPeriodo.reduce((sum,item)=> sum + (Number(item.serv)||0),0);
  const performance = totalProduzido ? Math.round((totalServido / totalProduzido) * 100) : 0;

  return {
    totalItems: estoquePeriodo.totalItems,
    totalStockQty: estoquePeriodo.totalQty,
    itensVencendo: estoquePeriodo.itensVencendo,
    itensVencidos: estoquePeriodo.itensVencidos,
    doacoesMes,
    totalProduzido,
    totalServido,
    performance,
    doadoresRegistrados,
    doacoesCountMes,
    periodo
  };
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

// --- NOVOS INDICADORES GERENCIAIS ---

function parseValorReal(str){
  const s = String(str || '').replace(/R\$\s*/i,'').trim();
  // Formato BR: ponto = milhar, vírgula = decimal  ex: "1.240,00"
  if(s.includes('.') && s.includes(',')) return parseFloat(s.replace(/\./g,'').replace(',','.')) || 0;
  // Somente vírgula decimal  ex: "1240,50"
  if(s.includes(',') && !s.includes('.')) return parseFloat(s.replace(',','.')) || 0;
  // Padrão float  ex: "1240.00"
  return parseFloat(s) || 0;
}

function calcularGastoRealCompras(periodo = getDashboardPeriodo()){
  const compras = filtrarPorPeriodo(COMPRAS_DATA, 'data', periodo);
  return compras.reduce((sum,c) => sum + parseValorReal(c.val), 0);
}

function calcularComposicaoFontes(periodo = getDashboardPeriodo()){
  const doado = filtrarPorPeriodo(DOACOES_DATA, 'data', periodo).reduce((s,d) => s + parseQty(d.qty), 0);
  const comprado = filtrarPorPeriodo(COMPRAS_DATA, 'data', periodo).reduce((s,c) => {
    const qt = Number(c._meta?.qty || 0);
    return s + (Number.isFinite(qt) ? qt : 0);
  }, 0);
  return { doado: Number(doado.toFixed(1)), comprado: Number(comprado.toFixed(1)) };
}

function calcularDemandaPorDia(periodo = getDashboardPeriodo()){
  const diasNome = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const acum = {};
  for(let i=0;i<7;i++) acum[i] = {sum:0,count:0};
  filtrarPorPeriodo(REFEICOES_DATA, 'data', periodo).forEach(r => {
    const ts = converterDataParaTimestamp(r.data);
    if(ts === null) return;
    const dow = new Date(ts).getDay();
    acum[dow].sum += Number(r.serv) || 0;
    acum[dow].count++;
  });
  return [1,2,3,4,5].map(dow => ({
    dia: diasNome[dow],
    media: acum[dow].count ? Math.round(acum[dow].sum / acum[dow].count) : 0
  }));
}

function calcularCoberturaInsumosDetalhada(periodo = getDashboardPeriodo()){
  const estoquePeriodo = calcularEstoquePorPeriodo(periodo).items || [];
  const consumo = PREMISSAS_FINANCEIRAS.consumoPorPrato;
  const pratosPorDia = PREMISSAS_FINANCEIRAS.pratosPorDia || 1;
  return estoquePeriodo
    .filter(item => consumo[item.nome])
    .map(item => {
      const consumoDia = (consumo[item.nome] || 0) * pratosPorDia;
      const dias = consumoDia > 0 ? Math.floor((Number(item.qty) || 0) / consumoDia) : 0;
      return { nome: item.nome.replace(' Tipo 1','').replace(' Carioca','').replace(' de Soja','').replace(' Bovina',''), dias };
    })
    .sort((a,b) => a.dias - b.dias);
}

function calcularConcentracaoFornecedores(periodo = getDashboardPeriodo()){
  const map = {};
  filtrarPorPeriodo(COMPRAS_DATA, 'data', periodo).forEach(c => {
    const forn = String(c.forn || 'Desconhecido').trim();
    if(!map[forn]) map[forn] = 0;
    map[forn] += parseValorReal(c.val);
  });
  const total = Object.values(map).reduce((s,v) => s+v, 0);
  return Object.entries(map)
    .map(([nome,valor]) => ({ nome, valor, pct: total > 0 ? (valor/total)*100 : 0 }))
    .sort((a,b) => b.valor - a.valor);
}

function calcularEvolucaoFinanceiraMensal(periodo = getDashboardPeriodo()){
  const meses = {};
  filtrarPorPeriodo(COMPRAS_DATA, 'data', periodo).forEach(c => {
    const mv = extrairMesAno(c.data);
    if(!mv) return;
    const key = `${mv.ano}-${String(mv.mes+1).padStart(2,'0')}`;
    if(!meses[key]) meses[key] = {gastoCompras:0,receita:0,label:''};
    meses[key].gastoCompras += parseValorReal(c.val);
    if(!meses[key].label) meses[key].label = new Date(mv.ano,mv.mes,1).toLocaleDateString('pt-BR',{month:'short',year:'2-digit'});
  });
  filtrarPorPeriodo(REFEICOES_DATA, 'data', periodo).forEach(r => {
    const mv = extrairMesAno(r.data);
    if(!mv) return;
    const key = `${mv.ano}-${String(mv.mes+1).padStart(2,'0')}`;
    if(!meses[key]) meses[key] = {gastoCompras:0,receita:0,label:''};
    meses[key].receita += (Number(r.serv)||0) * PREMISSAS_FINANCEIRAS.precoPrato;
    if(!meses[key].label) meses[key].label = new Date(mv.ano,mv.mes,1).toLocaleDateString('pt-BR',{month:'short',year:'2-digit'});
  });
  return Object.entries(meses)
    .sort(([a],[b]) => a.localeCompare(b))
    .slice(-6)
    .map(([,v]) => v);
}

function renderConcentracaoFornecedores(){
  const tbody = document.getElementById('dashboard-fornecedores-body');
  if(!tbody) return;
  const lista = calcularConcentracaoFornecedores();
  if(!lista.length){
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--gray-400);padding:18px">Nenhuma compra registrada.</td></tr>';
    return;
  }
  tbody.innerHTML = lista.map(f => {
    const risco = f.pct >= 50 ? {cls:'danger',txt:'Alto'} : f.pct >= 30 ? {cls:'warn',txt:'Médio'} : {cls:'ok',txt:'Baixo'};
    return `<tr>
      <td><strong>${f.nome}</strong></td>
      <td>R$ ${f.valor.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
      <td>${f.pct.toFixed(1)}%</td>
      <td><span class="badge ${risco.cls}">${risco.txt}</span></td>
    </tr>`;
  }).join('');
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
    },
    // --- KPIs adicionais ---
    (() => {
      const gastoReal = calcularGastoRealCompras();
      const meta = custos.custoMes;
      const s = gastoReal <= meta ? {statusClass:'ok',statusLabel:'Bom'} : gastoReal <= meta*1.15 ? {statusClass:'warn',statusLabel:'Atenção'} : {statusClass:'danger',statusLabel:'Crítico'};
      return {
        nome: 'Gasto real em compras (mês)',
        valor: 'R$ ' + gastoReal.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}),
        meta: '≤ R$ ' + meta.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}),
        detalhe: 'Total das notas de compra vs custo estimado de insumos variáveis',
        ...s
      };
    })(),
    (() => {
      const capacidade = PREMISSAS_FINANCEIRAS.capacidadeInstalada || 500;
      const dias = REFEICOES_DATA.length;
      const mediaServidas = dias ? Math.round(REFEICOES_DATA.reduce((s,r)=>s+(Number(r.serv)||0),0)/dias) : 0;
      const pct = capacidade > 0 ? (mediaServidas / capacidade) * 100 : 0;
      const s = pct >= 80 ? {statusClass:'ok',statusLabel:'Bom'} : pct >= 60 ? {statusClass:'warn',statusLabel:'Atenção'} : {statusClass:'danger',statusLabel:'Crítico'};
      return {
        nome: '% Capacidade instalada utilizada',
        valor: pct.toFixed(1) + '%',
        meta: '≥ 80%',
        detalhe: `Média de ${mediaServidas} refeições/dia sobre capacidade de ${capacidade}`,
        ...s
      };
    })(),
    (() => {
      const precoDeMercado = PREMISSAS_FINANCEIRAS.precoDeMercadoPrato || 18;
      const cobrado = PREMISSAS_FINANCEIRAS.precoPrato || 1;
      const beneficioPorPrato = precoDeMercado - cobrado;
      return {
        nome: 'Benefício social por refeição',
        valor: 'R$ ' + beneficioPorPrato.toFixed(2),
        meta: '≥ R$ ' + (precoDeMercado - cobrado - 1).toFixed(2),
        detalhe: `Preço de mercado (R$ ${precoDeMercado}) menos o valor cobrado (R$ ${cobrado})`,
        statusClass: 'ok', statusLabel: 'Bom'
      };
    })(),
    (() => {
      const fontes = calcularComposicaoFontes();
      const totalFontes = fontes.doado + fontes.comprado;
      const pct = totalFontes > 0 ? (fontes.doado / totalFontes) * 100 : 0;
      const s = pct >= 15 ? {statusClass:'ok',statusLabel:'Bom'} : pct >= 8 ? {statusClass:'warn',statusLabel:'Atenção'} : {statusClass:'danger',statusLabel:'Crítico'};
      return {
        nome: '% Insumos de doações',
        valor: pct.toFixed(1) + '%',
        meta: '≥ 15%',
        detalhe: `${fontes.doado.toFixed(0)} kg doados de ${totalFontes.toFixed(0)} kg totais recebidos`,
        ...s
      };
    })(),
    (() => {
      const fornList = calcularConcentracaoFornecedores();
      const maiorPct = fornList.length ? fornList[0].pct : 0;
      const s = maiorPct <= 50 ? {statusClass:'ok',statusLabel:'Baixo'} : maiorPct <= 70 ? {statusClass:'warn',statusLabel:'Médio'} : {statusClass:'danger',statusLabel:'Alto'};
      return {
        nome: 'Concentração do maior fornecedor',
        valor: fornList.length ? fornList[0].pct.toFixed(1) + '%' : '—',
        meta: '≤ 50%',
        detalhe: fornList.length ? `${fornList[0].nome} representa este % do gasto total` : 'Sem compras registradas',
        ...s
      };
    })()
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
  const doadoresEl = document.getElementById('dashboard-doadores-registrados');
  const doacoesCountEl = document.getElementById('dashboard-doacoes-count');
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
  if(doadoresEl) doadoresEl.textContent = String(metrics.doadoresRegistrados || 0);
  if(doacoesCountEl) doacoesCountEl.textContent = String(metrics.doacoesCountMes || 0);
  if(doacoesNoteEl) doacoesNoteEl.textContent = STARTUP_MODE ? 'Modo inicial — sem histórico de doações' : (metrics.doacoesMes > 0 ? 'Volume recebido no mês' : 'Sem registros recentes');
  if(producaoEl) producaoEl.textContent = metrics.totalProduzido.toLocaleString('pt-BR');
  if(producaoNoteEl) producaoNoteEl.textContent = STARTUP_MODE ? 'Modo inicial — sem histórico de produção' : (metrics.totalProduzido > 0 ? 'Total acumulado do período' : 'Sem produção registrada');
  if(servidasEl) servidasEl.textContent = metrics.totalServido.toLocaleString('pt-BR');
  if(servidasNoteEl) servidasNoteEl.textContent = STARTUP_MODE ? 'Modo inicial — sem histórico' : (metrics.totalProduzido > 0 ? `${metrics.performance}% das produzidas` : 'Sem registros recentes');

  // --- novos cards gerenciais ---
  const gastoRealCompras = calcularGastoRealCompras();
  const gastoEl = document.getElementById('dashboard-gasto-compras');
  const gastoNoteEl = document.getElementById('dashboard-gasto-compras-note');
  if(gastoEl) gastoEl.textContent = 'R$ ' + gastoRealCompras.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
  if(gastoNoteEl) gastoNoteEl.textContent = `${COMPRAS_DATA.length} nota(s) de compra registrada(s)`;

  const capacidade = PREMISSAS_FINANCEIRAS.capacidadeInstalada || 500;
  const diasComRegistro = REFEICOES_DATA.length;
  const mediaServidas = diasComRegistro ? Math.round(metrics.totalServido / diasComRegistro) : 0;
  const pctCapacidade = capacidade > 0 ? Math.min(100, (mediaServidas / capacidade) * 100) : 0;
  const capEl = document.getElementById('dashboard-capacidade');
  const capNoteEl = document.getElementById('dashboard-capacidade-note');
  if(capEl) capEl.textContent = pctCapacidade.toFixed(1) + '%';
  if(capNoteEl) capNoteEl.textContent = `Média ${mediaServidas}/dia · capacidade ${capacidade}/dia`;

  const precoDeMercado = PREMISSAS_FINANCEIRAS.precoDeMercadoPrato || 18;
  const precoCobrado = PREMISSAS_FINANCEIRAS.precoPrato || 1;
  const beneficioPorPrato = precoDeMercado - precoCobrado;
  const beneficioTotalMes = beneficioPorPrato * metrics.totalServido;
  const beneficioEl = document.getElementById('dashboard-beneficio-social');
  const beneficioNoteEl = document.getElementById('dashboard-beneficio-note');
  if(beneficioEl) beneficioEl.textContent = 'R$ ' + beneficioTotalMes.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
  if(beneficioNoteEl) beneficioNoteEl.textContent = `R$ ${beneficioPorPrato.toFixed(2)} economizados por refeição`;

  // Beneficiários únicos: aproximação por visitas médias por pessoa por período
  const visitasPorPessoa = 1; // cada refeição = 1 beneficiário único (conservador)
  const beneficiarios = metrics.totalServido; // simplificado; gestor pode ajustar
  const benefEl = document.getElementById('dashboard-beneficiarios');
  const benefNoteEl = document.getElementById('dashboard-beneficiarios-note');
  if(benefEl) benefEl.textContent = beneficiarios.toLocaleString('pt-BR');
  if(benefNoteEl) benefNoteEl.textContent = 'Total de atendimentos no período';

  // Refeições no ano corrente
  const anoAtual = getSystemDate().getFullYear();
  const refeicoesAno = REFEICOES_DATA.reduce((s,r) => {
    const mv = extrairMesAno(r.data);
    if(mv && mv.ano === anoAtual) return s + (Number(r.serv)||0);
    return s;
  }, 0);
  const anoEl = document.getElementById('dashboard-refeicoes-ano');
  const anoNoteEl = document.getElementById('dashboard-refeicoes-ano-note');
  if(anoEl) anoEl.textContent = refeicoesAno.toLocaleString('pt-BR');
  if(anoNoteEl) anoNoteEl.textContent = `Servidas em ${anoAtual}`;

  // Desperdício total
  const totalDesperdicio = REFEICOES_DATA.reduce((s,r) => s + Math.max(0,(Number(r.prod)||0)-(Number(r.serv)||0)), 0);
  const despEl = document.getElementById('dashboard-desperdicio');
  const despNoteEl = document.getElementById('dashboard-desperdicio-note');
  if(despEl) despEl.textContent = totalDesperdicio.toLocaleString('pt-BR');
  const pctDesp = metrics.totalProduzido > 0 ? (totalDesperdicio/metrics.totalProduzido*100).toFixed(1) : '0';
  if(despNoteEl) despNoteEl.textContent = `${pctDesp}% do total produzido`;

  if(alert1El){
    alert1El.innerHTML = `<span>⚠</span><div><strong>${metrics.itensVencendo}</strong> item(ns) com validade próxima.</div>`;
  }
  if(alert2El){
    const estoqueBaixo = ESTOQUE_DATA.some(item => Number(item.qty) < 20);
    alert2El.innerHTML = `<span>⚠</span><div>${estoqueBaixo ? 'Há itens com estoque abaixo do limite operacional.' : 'O estoque geral está dentro do esperado.'}</div>`;
  }
  if(alert3El){
    alert3El.innerHTML = STARTUP_MODE
      ? `<span>ℹ</span><div>Modo inicial: nenhuma produção registrada ainda — KPIs baseados no estoque atual.</div>`
      : `<span>ℹ</span><div>O desempenho de atendimento está em <strong>${metrics.performance}%</strong> das refeições produzidas.</div>`;
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
        const rowClass = i.status === 'warn' ? 'row-warn' : (i.status === 'danger' ? 'row-danger' : '');
        return `<tr class="${rowClass}"><td>${i.id}</td><td><strong>${i.nome}</strong></td><td>${i.cat}</td><td>${i.qty}</td><td>${i.un}</td><td>${i.val || '—'}</td><td><span class="badge ${sc}">${sl}</span></td><td><div style="display:flex;gap:6px"><button class="btn outline btn-sm" onclick="openAlimentoEdit(${i.id})">Editar</button><button class="btn outline btn-sm" onclick="abrirSaidaEstoque(${i.id})">Saída</button><button class="btn danger btn-sm" onclick="deleteItem(${i.id})">Excluir</button></div></td></tr>`;
      }).join('');
    }
  }
  const td=document.getElementById('tabela-doacoes');
  if(td){
    td.innerHTML=DOACOES_DATA.map(d=>{
      return `<tr><td>${d.id}</td><td>${d.doador}</td><td>${d.data}</td><td>${d.itens}</td><td>${d.qty}</td><td><div style="display:flex;gap:6px"><span class="badge ok">✓ Atualizado</span><button class="btn outline btn-sm" onclick="openEditDoacao(${d.id})">Editar</button><button class="btn danger btn-sm" onclick="deleteDoacao(${d.id})">Excluir</button></div></td></tr>`;
    }).join('');
  }
  const tc=document.getElementById('tabela-compras');
  if(tc){
    tc.innerHTML=COMPRAS_DATA.map(c=>`<tr><td>${c.id}</td><td>${c.forn}</td><td>${c.data}</td><td>${c.itens}</td><td>${c.val}</td><td><div style="display:flex;gap:6px"><span class="badge ok">✓ Atualizado</span><button class="btn outline btn-sm" onclick="openEditCompra(${c.id})">Editar</button><button class="btn danger btn-sm" onclick="deleteCompra(${c.id})">Excluir</button></div></td></tr>`).join('');
  }
  const tr=document.getElementById('tabela-refeicoes');
  if(tr){
    const refeicoesOrdenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
    tr.innerHTML=refeicoesOrdenadas.map(r=>{
      const diff=r.prod-r.serv;
      const pct=r.prod ? Math.round(r.serv/r.prod*100) : 0;
      const sc=pct>=97?'ok':'warn';
      return`<tr><td>${r.id}</td><td>${formatarDataBrasil(r.data)}</td><td>${r.prod}</td><td>${r.serv}</td><td>${diff}</td><td><div style="display:flex;gap:6px"><span class="badge ${sc}">${pct}%</span><button class="btn outline btn-sm" onclick="openEditRefeicao(${r.id})">Editar</button><button class="btn danger btn-sm" onclick="deleteRefeicao(${r.id})">Excluir</button></div></td></tr>`;
    }).join('');
  }

  renderDashboardSummary();
  renderDoacoesSummary();
  renderSystemDate();
  renderStockSummary();
  renderResumoRefeicoes();
  renderMovimentacoes();
  renderRecomendacoesCompras();
  renderConcentracaoFornecedores();
  applyTableSearch();
}

function refreshAppViews(){
  renderTables();
  renderCharts();
  renderDashboardSummary();
  renderRecomendacoesCompras();
  renderConcentracaoFornecedores();
  gerarRelatorio();
}

function getRelatorioPeriodo(){
  const inicioInput = document.getElementById('relatorios-data-inicio');
  const fimInput = document.getElementById('relatorios-data-fim');
  const inicio = inicioInput && inicioInput.value ? converterDataParaTimestamp(inicioInput.value) : -Infinity;
  const fim = fimInput && fimInput.value ? converterDataParaTimestamp(fimInput.value) : Infinity;
  return { inicio, fim };
}

function filtrarPorData(lista, campo = 'data'){
  const { inicio, fim } = getRelatorioPeriodo();
  if(inicio === -Infinity && fim === Infinity) return [...lista];
  return lista.filter(item => {
    const ts = converterDataParaTimestamp(item[campo]);
    return ts !== null && ts >= inicio && ts <= fim;
  });
}

function formatarPeriodoRelatorio(periodo){
  const inicioText = periodo.inicio === -Infinity ? 'Início do histórico' : formatarDataBrasil(new Date(periodo.inicio).toISOString().slice(0,10));
  const fimText = periodo.fim === Infinity ? 'Até o momento' : formatarDataBrasil(new Date(periodo.fim).toISOString().slice(0,10));
  return `${inicioText} até ${fimText}`;
}

function getRelatorioExportData(){
  const tipoEl = document.getElementById('relatorios-tipo');
  const tipo = tipoEl ? String(tipoEl.value || 'Refeições').trim() : 'Relatório';
  const periodo = getRelatorioPeriodo();
  const periodLabel = formatarPeriodoRelatorio(periodo);
  const generatedAt = new Date().toLocaleString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
  const data = {
    tipo,
    titulo: `Relatório: ${tipo}`,
    periodLabel,
    generatedAt,
    columns: [],
    rows: [],
    indicators: [],
    cards: [],
    observations: []
  };

  const mostFrequentFromStrings = (items = []) => {
    const counts = {};
    items.forEach(text => String(text || '').split(',').map(x=>x.trim()).filter(Boolean).forEach(key => { counts[key] = (counts[key] || 0) + 1; }));
    const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]);
    return sorted.length ? sorted[0][0] : '—';
  };

  switch(tipo.toLowerCase()){
    case 'estoque': {
      const movimentosPeriodo = MOVIMENTACOES_DATA.filter(m => {
        const ts = converterDataParaTimestamp(m.data);
        return ts !== null && ts >= periodo.inicio && ts <= periodo.fim;
      });
      const estoqueAtual = ESTOQUE_DATA.reduce((acc, item) => {
        acc[normalizarTexto(item.nome)] = { nome: item.nome, cat: item.cat, un: item.un, status: item.status || 'ok', qty: Number(item.qty) || 0 };
        return acc;
      }, {});
      const acumuladosAposFim = {};
      const acumuladosAposInicio = {};
      const entradasPeriodo = {};
      const saidasPeriodo = {};
      MOVIMENTACOES_DATA.forEach(m => {
        const ts = converterDataParaTimestamp(m.data);
        if(ts === null) return;
        const chave = normalizarTexto(m.item || '');
        const quantidade = Number(m.quantidade) || 0;
        const sinal = m.tipo === 'entrada' ? 1 : -1;
        if(ts > periodo.fim) acumuladosAposFim[chave] = (acumuladosAposFim[chave] || 0) + sinal * quantidade;
        if(ts >= periodo.inicio) acumuladosAposInicio[chave] = (acumuladosAposInicio[chave] || 0) + sinal * quantidade;
        if(ts >= periodo.inicio && ts <= periodo.fim){
          if(m.tipo === 'entrada') entradasPeriodo[chave] = (entradasPeriodo[chave] || 0) + quantidade;
          else saidasPeriodo[chave] = (saidasPeriodo[chave] || 0) + quantidade;
        }
      });
      const itemKeys = Array.from(new Set(movimentosPeriodo.map(m => normalizarTexto(m.item || ''))));
      const totalEntradas = movimentosPeriodo.filter(m => m.tipo === 'entrada').reduce((sum, m) => sum + (Number(m.quantidade) || 0), 0);
      const totalSaidas = movimentosPeriodo.filter(m => m.tipo === 'saida').reduce((sum, m) => sum + (Number(m.quantidade) || 0), 0);
      const itensBaixo = ESTOQUE_DATA.filter(i => i.status === 'warn' || i.status === 'danger').length;
      const proximosVencimento = ESTOQUE_DATA.filter(i => i.status === 'warn').length;
      data.columns = ['Item','Categoria','Unidade','Saldo inicial','Entradas','Saídas','Saldo final','Status'];
      data.rows = itemKeys.map(key => {
        const meta = estoqueAtual[key] || { nome: movimentosPeriodo.find(m => normalizarTexto(m.item || '') === key)?.item || 'Item desconhecido', cat: '—', un: movimentosPeriodo.find(m => normalizarTexto(m.item || '') === key)?.unidade || 'kg', status: 'ok' };
        const atual = Number((ESTOQUE_DATA.find(item => normalizarTexto(item.nome) === key) || {}).qty) || 0;
        const saldoFinal = atual - (acumuladosAposFim[key] || 0);
        const saldoInicial = atual - (acumuladosAposInicio[key] || 0);
        const entradas = entradasPeriodo[key] || 0;
        const saidas = saidasPeriodo[key] || 0;
        return [meta.nome, meta.cat, meta.un, String(saldoInicial.toFixed(2).replace(/\.00$/, '')), String(entradas.toFixed(2).replace(/\.00$/, '')), String(saidas.toFixed(2).replace(/\.00$/, '')), String(saldoFinal.toFixed(2).replace(/\.00$/, '')), meta.status === 'ok' ? 'Dentro da validade' : meta.status === 'warn' ? 'Atenção' : 'Crítico'];
      });
      data.cards.push({ title: 'Total de alimentos', value: String(ESTOQUE_DATA.length), subtitle: 'Itens cadastrados em estoque' });
      data.cards.push({ title: 'Itens movimentados', value: String(itemKeys.length), subtitle: 'Produtos afetados no período' });
      data.cards.push({ title: 'Entradas', value: `${totalEntradas.toFixed(2).replace(/\.00$/, '')}`, subtitle: 'Quantidade registrada' });
      data.cards.push({ title: 'Saídas', value: `${totalSaidas.toFixed(2).replace(/\.00$/, '')}`, subtitle: 'Quantidade consumida' });
      data.indicators.push(`Itens movimentados no período: ${itemKeys.length}`);
      data.indicators.push(`Entradas totais: ${totalEntradas.toFixed(2).replace(/\.00$/, '')}`);
      data.indicators.push(`Saídas totais: ${totalSaidas.toFixed(2).replace(/\.00$/, '')}`);
      data.indicators.push(`Itens com estoque baixo: ${itensBaixo}`);
      if(itensBaixo) data.observations.push(`Existem ${itensBaixo} itens com estoque baixo.`);
      if(proximosVencimento) data.observations.push(`${proximosVencimento} item(ns) estão próximos do vencimento.`);
      if(!movimentosPeriodo.length) data.observations.push('Nenhuma movimentação registrada no período selecionado.');
      break;
    }
    case 'doações': {
      const lista = filtrarPorData(DOACOES_DATA, 'data');
      const totalDoacoes = lista.reduce((sum, item) => sum + parseQty(item.qty), 0);
      const doadoresUnicos = new Set(lista.map(d => String(d.doador || '').trim()).filter(Boolean)).size;
      const maisDoado = mostFrequentFromStrings(lista.map(d => d.itens));
      data.columns = ['ID','Doador','Data','Itens','Quantidade'];
      data.rows = lista.map(d => [String(d.id), d.doador, formatarDataBrasil(d.data), d.itens, d.qty]);
      data.cards.push({ title: 'Total de doações', value: String(lista.length), subtitle: 'Registros no período' });
      data.cards.push({ title: 'Quantidade recebida', value: `${totalDoacoes.toFixed(1).replace(/\.0$/, '')} kg`, subtitle: 'Volume acumulado' });
      data.cards.push({ title: 'Doadores', value: String(doadoresUnicos), subtitle: 'Fontes diferentes' });
      data.cards.push({ title: 'Alimento mais doado', value: maisDoado, subtitle: 'Mais recorrente' });
      data.indicators.push(`Total de doações: ${lista.length}`);
      data.indicators.push(`Volume total: ${totalDoacoes.toFixed(1).replace(/\.0$/, '')} kg`);
      data.indicators.push(`Doadores únicos: ${doadoresUnicos}`);
      if(maisDoado) data.indicators.push(`Alimento mais doado: ${maisDoado}`);
      if(!lista.length) data.observations.push('Não há doações no período selecionado.');
      break;
    }
    case 'compras': {
      const lista = filtrarPorData(COMPRAS_DATA, 'data');
      const totalCompras = lista.reduce((sum, item) => sum + parseValorReal(item.val), 0);
      const fornecedoresUnicos = new Set(lista.map(c => String(c.forn || '').trim()).filter(Boolean)).size;
      const maisComprado = mostFrequentFromStrings(lista.map(c => c.itens));
      data.columns = ['ID','Fornecedor','Data','Itens','Valor'];
      data.rows = lista.map(c => [String(c.id), c.forn, formatarDataBrasil(c.data), c.itens, c.val]);
      data.cards.push({ title: 'Total gasto', value: `R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2, maximumFractionDigits:2})}`, subtitle: 'Valor acumulado' });
      data.cards.push({ title: 'Compras', value: String(lista.length), subtitle: 'Registros no período' });
      data.cards.push({ title: 'Fornecedores', value: String(fornecedoresUnicos), subtitle: 'Parceiros distintos' });
      data.cards.push({ title: 'Produto mais comprado', value: maisComprado, subtitle: 'Mais recorrente' });
      data.indicators.push(`Total de compras: ${lista.length}`);
      data.indicators.push(`Valor total: R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2, maximumFractionDigits:2})}`);
      data.indicators.push(`Fornecedores únicos: ${fornecedoresUnicos}`);
      if(!lista.length) data.observations.push('Não há compras no período selecionado.');
      break;
    }
    case 'refeições': {
      const lista = filtrarPorData(REFEICOES_DATA, 'data').sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data));
      const totalProduzidas = lista.reduce((sum,r)=> sum + (Number(r.prod)||0), 0);
      const totalServidas = lista.reduce((sum,r)=> sum + (Number(r.serv)||0), 0);
      const totalNaoServidas = totalProduzidas - totalServidas;
      const aproveitamento = totalProduzidas ? Math.round((totalServidas / totalProduzidas) * 100) : 0;
      data.columns = ['ID','Data','Produzidas','Servidas','Não servidas','% Aproveitamento'];
      data.rows = lista.map(r => {
        const diff = Number(r.prod || 0) - Number(r.serv || 0);
        const pct = r.prod ? Math.round((Number(r.serv || 0) / Number(r.prod || 1)) * 100) : 0;
        return [String(r.id), formatarDataBrasil(r.data), String(r.prod), String(r.serv), String(diff), `${pct}%`];
      });
      data.cards.push({ title: 'Refeições produzidas', value: String(totalProduzidas), subtitle: 'Total no período' });
      data.cards.push({ title: 'Refeições servidas', value: String(totalServidas), subtitle: 'Atendidas' });
      data.cards.push({ title: 'Desperdício', value: String(totalNaoServidas), subtitle: 'Não servidas' });
      data.cards.push({ title: 'Aproveitamento', value: `${aproveitamento}%`, subtitle: 'Eficiência da produção' });
      data.indicators.push(`Registros: ${lista.length}`);
      data.indicators.push(`Total produzido: ${totalProduzidas}`);
      data.indicators.push(`Total servido: ${totalServidas}`);
      data.indicators.push(`Não servidas: ${totalNaoServidas}`);
      data.indicators.push(`Aproveitamento médio: ${aproveitamento}%`);
      if(totalNaoServidas > 0) data.observations.push('O desvio entre produzido e servido indica oportunidades de otimização de cardápio e consumo.');
      break;
    }
    case 'geral': {
      const doacoes = filtrarPorData(DOACOES_DATA, 'data');
      const totalDoacoes = doacoes.reduce((sum, item) => sum + parseQty(item.qty), 0);
      const doadoresUnicos = new Set(doacoes.map(d => String(d.doador || '').trim()).filter(Boolean)).size;
      const compras = filtrarPorData(COMPRAS_DATA, 'data');
      const totalCompras = compras.reduce((sum, item) => sum + parseValorReal(item.val), 0);
      const fornecedoresUnicos = new Set(compras.map(c => String(c.forn || '').trim()).filter(Boolean)).size;
      const refeicoes = filtrarPorData(REFEICOES_DATA, 'data');
      const totalServidas = refeicoes.reduce((sum, item) => sum + Number(item.serv || 0), 0);
      const totalProduzidas = refeicoes.reduce((sum, item) => sum + Number(item.prod || 0), 0);
      const desperdicio = totalProduzidas - totalServidas;
      const aproveitamentoMedio = totalProduzidas ? Math.round((totalServidas / totalProduzidas) * 100) : 0;
      const movimentos = MOVIMENTACOES_DATA.filter(m => {
        const ts = converterDataParaTimestamp(m.data);
        return ts !== null && ts >= periodo.inicio && ts <= periodo.fim;
      });
      const estoqueMovItems = new Set(movimentos.map(m => normalizarTexto(m.item || '')));
      const entradasEstoque = movimentos.filter(m => m.tipo === 'entrada').reduce((sum, m) => sum + (Number(m.quantidade) || 0), 0);
      const saidasEstoque = movimentos.filter(m => m.tipo === 'saida').reduce((sum, m) => sum + (Number(m.quantidade) || 0), 0);
      const itensBaixo = ESTOQUE_DATA.filter(i => i.status === 'warn' || i.status === 'danger').length;
      const ultimaMovimentacaoEstoque = movimentos.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      const ultimaDoacao = doacoes.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      const ultimaCompra = compras.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      const ultimaRefeicao = refeicoes.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      data.columns = ['Módulo','Total de registros','Resumo gerencial','Última data'];
      data.rows = [
        ['Estoque', String(ESTOQUE_DATA.length), `${movimentos.length} movimentações; ${entradasEstoque.toFixed(2).replace(/\.00$/, '')} entradas; ${saidasEstoque.toFixed(2).replace(/\.00$/, '')} saídas; ${itensBaixo} itens críticos/aviso`, ultimaMovimentacaoEstoque ? formatarDataBrasil(ultimaMovimentacaoEstoque.data) : '—'],
        ['Doações', String(doacoes.length), `${totalDoacoes.toFixed(1).replace(/\.0$/, '')} kg recebidos; ${doadoresUnicos} doadores distintos`, ultimaDoacao ? formatarDataBrasil(ultimaDoacao.data) : '—'],
        ['Compras', String(compras.length), `R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})} investidos; ${fornecedoresUnicos} fornecedores`, ultimaCompra ? formatarDataBrasil(ultimaCompra.data) : '—'],
        ['Refeições', String(refeicoes.length), `${totalProduzidas} produzidas; ${totalServidas} servidas; desperdício de ${desperdicio}; aproveitamento de ${aproveitamentoMedio}%`, ultimaRefeicao ? formatarDataBrasil(ultimaRefeicao.data) : '—']
      ];
      data.cards.push({ title: 'Total de alimentos', value: String(ESTOQUE_DATA.length), subtitle: 'Itens no estoque' });
      data.cards.push({ title: 'Total de compras', value: `R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}`, subtitle: 'Investimento no período' });
      data.cards.push({ title: 'Total de doações', value: String(doacoes.length), subtitle: 'Registros de doação' });
      data.cards.push({ title: 'Total de refeições', value: String(refeicoes.length), subtitle: 'Dias registrados' });
      data.indicators.push(`Doações: ${doacoes.length} registros · ${totalDoacoes.toFixed(1).replace(/\.0$/, '')} kg`);
      data.indicators.push(`Compras: ${compras.length} registros · R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}`);
      data.indicators.push(`Refeições produzidas: ${totalProduzidas}`);
      data.indicators.push(`Aproveitamento médio: ${aproveitamentoMedio}%`);
      if(itensBaixo) data.observations.push(`${itensBaixo} itens com estoque baixo ou críticos.`);
      if(desperdicio > 0) data.observations.push(`Desperdício identificado de ${desperdicio} refeições no período.`);
      if(entradasEstoque === 0 && saidasEstoque === 0) data.observations.push('Nenhuma movimentação de estoque registrada no período.');
      break;
    }
    default: {
      data.columns = ['Campo','Valor'];
      data.rows = [['Tipo de relatório','Inválido']];
      break;
    }
  }
  return data;
}

function exportRelatorioPDF(){
  const payload = getRelatorioExportData();
  if(!payload || !payload.columns.length){
    showToast('Nenhum relatório disponível para exportar.');
    return;
  }
  if(!window.jspdf || !window.jspdf.jsPDF){
    showToast('Biblioteca jsPDF não carregada.');
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation:'landscape', unit:'pt', format:'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const titleY = 40;

  doc.setProperties({ title: payload.titulo, subject: 'Exportação de relatório' });
  doc.setFillColor(244, 246, 249);
  doc.rect(0, 0, pageWidth, titleY + 18, 'F');
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 56, 89);
  doc.text('SIG - Restaurante Popular', margin, titleY);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(payload.titulo, margin, titleY + 18);
  doc.setFontSize(9);
  doc.setTextColor(102, 102, 102);
  doc.text(`Gerado em: ${payload.generatedAt}`, pageWidth - margin, titleY, { align: 'right' });
  doc.text(`Período: ${payload.periodLabel}`, pageWidth - margin, titleY + 14, { align: 'right' });
  doc.setDrawColor(200);
  doc.setLineWidth(0.5);
  doc.line(margin, titleY + 24, pageWidth - margin, titleY + 24);

  const cardTop = titleY + 34;
  const cardWidth = (pageWidth - margin * 2 - 30) / 4;
  const cardHeight = 56;
  payload.cards.slice(0,4).forEach((card, index) => {
    const x = margin + (cardWidth + 10) * (index % 4);
    const y = cardTop;
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(x, y, cardWidth, cardHeight, 6, 6, 'F');
    doc.setDrawColor(220);
    doc.roundedRect(x, y, cardWidth, cardHeight, 6, 6, 'S');
    doc.setFontSize(10);
    doc.setTextColor(94, 108, 132);
    doc.text(card.subtitle, x + 10, y + 16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(23, 43, 77);
    doc.text(String(card.value), x + 10, y + 38);
    doc.setFont('helvetica', 'normal');
  });

  const tableStartY = cardTop + cardHeight + 20;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 56, 89);
  doc.text('Tabela de registros', margin, tableStartY - 8);
  doc.setDrawColor(200);
  doc.line(margin, tableStartY - 4, pageWidth - margin, tableStartY - 4);

  doc.autoTable({
    startY: tableStartY + 6,
    margin: { left: margin, right: margin, bottom: margin },
    head: [payload.columns],
    body: payload.rows,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 6, textColor: 44 },
    headStyles: { fillColor: [34, 91, 163], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 248, 253] },
    didDrawPage: function(data){
      const pageNumber = doc.internal.getCurrentPageInfo().pageNumber;
      const footerY = pageHeight - 20;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(128, 128, 128);
      doc.text(`Página ${pageNumber}`, pageWidth - margin, footerY, { align: 'right' });
      doc.text('SIG - Restaurante Popular · Alagoas Sem Fome', margin, footerY);
    }
  });

  const summaryStartY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 24 : tableStartY + 20;
  if(summaryStartY + 20 < pageHeight - margin){
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Resumo gerencial', margin, summaryStartY);
    doc.setDrawColor(200);
    doc.line(margin, summaryStartY + 4, pageWidth - margin, summaryStartY + 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    let noteY = summaryStartY + 18;
    const observations = payload.observations.length ? payload.observations : ['Nenhuma observação adicional.'];
    observations.forEach(obs => {
      if(noteY > pageHeight - margin - 10){ doc.addPage(); noteY = margin; }
      doc.text(`• ${obs}`, margin, noteY);
      noteY += 14;
    });
  }

  const filename = `${payload.titulo.replace(/[^a-zA-Z0-9]+/g,'_')}_${new Date().toISOString().slice(0,19).replace(/[:T]/g,'_')}.pdf`;
  doc.save(filename);
  showToast('PDF exportado com sucesso.');
}

function calcularRelatorioEstoquePorPeriodo(){
  const { inicio, fim } = getRelatorioPeriodo();
  const movimentosPeriodo = MOVIMENTACOES_DATA.filter(m => {
    const ts = converterDataParaTimestamp(m.data);
    return ts !== null && ts >= inicio && ts <= fim;
  });
  if(!movimentosPeriodo.length){
    return {
      header: '<tr><th>Item</th><th>Categoria</th><th>Unidade</th><th>Saldo inicial</th><th>Entradas</th><th>Saídas</th><th>Saldo final</th><th>Status</th></tr>',
      body: '<tr><td colspan="8" style="text-align:center;color:var(--gray-400);padding:18px">Nenhuma movimentação de estoque registrada no período selecionado.</td></tr>'
    };
  }

  const estoqueAtual = ESTOQUE_DATA.reduce((acc, item) => {
    acc[normalizarTexto(item.nome)] = {
      nome: item.nome,
      cat: item.cat,
      un: item.un,
      status: item.status || 'ok'
    };
    return acc;
  }, {});

  const acumuladosAposFim = {};
  const acumuladosAposInicio = {};
  const entradasPeriodo = {};
  const saidasPeriodo = {};

  MOVIMENTACOES_DATA.forEach(m => {
    const ts = converterDataParaTimestamp(m.data);
    if(ts === null) return;
    const chave = normalizarTexto(m.item || '');
    const quantidade = Number(m.quantidade) || 0;
    const sinal = m.tipo === 'entrada' ? 1 : -1;

    if(ts > fim){
      acumuladosAposFim[chave] = (acumuladosAposFim[chave] || 0) + sinal * quantidade;
    }
    if(ts >= inicio){
      acumuladosAposInicio[chave] = (acumuladosAposInicio[chave] || 0) + sinal * quantidade;
    }
    if(ts >= inicio && ts <= fim){
      if(m.tipo === 'entrada'){
        entradasPeriodo[chave] = (entradasPeriodo[chave] || 0) + quantidade;
      } else {
        saidasPeriodo[chave] = (saidasPeriodo[chave] || 0) + quantidade;
      }
    }
  });

  const itemKeys = Array.from(new Set(movimentosPeriodo.map(m => normalizarTexto(m.item || ''))));
  const rows = itemKeys.map(key => {
    const meta = estoqueAtual[key] || { nome: movimentosPeriodo.find(m => normalizarTexto(m.item || '') === key)?.item || 'Item desconhecido', cat: '—', un: movimentosPeriodo.find(m => normalizarTexto(m.item || '') === key)?.unidade || 'kg', status: 'ok' };
    const atual = Number((ESTOQUE_DATA.find(item => normalizarTexto(item.nome) === key) || {}).qty) || 0;
    const saldoFinal = atual - (acumuladosAposFim[key] || 0);
    const saldoInicial = atual - (acumuladosAposInicio[key] || 0);
    const entradas = entradasPeriodo[key] || 0;
    const saidas = saidasPeriodo[key] || 0;
    return `<tr><td><strong>${meta.nome}</strong></td><td>${meta.cat}</td><td>${meta.un}</td><td>${saldoInicial.toFixed(2).replace(/\.00$/, '')}</td><td>${entradas.toFixed(2).replace(/\.00$/, '')}</td><td>${saidas.toFixed(2).replace(/\.00$/, '')}</td><td>${saldoFinal.toFixed(2).replace(/\.00$/, '')}</td><td><span class="badge ${meta.status}">${meta.status === 'ok' ? 'Dentro da validade' : meta.status === 'warn' ? 'Atenção' : 'Crítico'}</span></td></tr>`;
  }).join('');

  return {
    header: '<tr><th>Item</th><th>Categoria</th><th>Unidade</th><th>Saldo inicial</th><th>Entradas</th><th>Saídas</th><th>Saldo final</th><th>Status</th></tr>',
    body: rows
  };
}

function gerarRelatorio(){
  const tipoEl = document.getElementById('relatorios-tipo');
  const tituloEl = document.getElementById('relatorios-titulo');
  const theadEl = document.getElementById('relatorios-thead');
  const bodyEl = document.getElementById('relatorios-body');
  if(!tipoEl || !tituloEl || !theadEl || !bodyEl) return;

  const tipo = String(tipoEl.value || 'Refeições').trim();
  let headerHtml = '';
  let bodyHtml = '';
  let titulo = `Relatório: ${tipo}`;
  const resumoEl = document.getElementById('relatorios-geral-resumo');
  const metadataEl = document.getElementById('relatorios-geral-metadata');
  if(resumoEl){ resumoEl.style.display = 'none'; resumoEl.innerHTML = ''; }
  if(metadataEl){ metadataEl.style.display = 'none'; metadataEl.innerHTML = ''; }

  switch(tipo.toLowerCase()){
    case 'estoque': {
      const relatorio = calcularRelatorioEstoquePorPeriodo();
      headerHtml = relatorio.header;
      bodyHtml = relatorio.body;
      break;
    }
    case 'doações': {
      headerHtml = '<tr><th>ID</th><th>Doador</th><th>Data</th><th>Itens</th><th>Quantidade</th></tr>';
      const lista = filtrarPorData(DOACOES_DATA, 'data');
      if(!lista.length){
        bodyHtml = '<tr><td colspan="5" style="text-align:center;color:var(--gray-400);padding:18px">Nenhuma doação encontrada no período selecionado.</td></tr>';
      }else{
        bodyHtml = lista.map(d => `<tr><td>${d.id}</td><td>${d.doador}</td><td>${formatarDataBrasil(d.data)}</td><td>${d.itens}</td><td>${d.qty}</td></tr>`).join('');
      }
      break;
    }
    case 'compras': {
      headerHtml = '<tr><th>ID</th><th>Fornecedor</th><th>Data</th><th>Itens</th><th>Valor</th></tr>';
      const lista = filtrarPorData(COMPRAS_DATA, 'data');
      if(!lista.length){
        bodyHtml = '<tr><td colspan="5" style="text-align:center;color:var(--gray-400);padding:18px">Nenhuma compra encontrada no período selecionado.</td></tr>';
      }else{
        bodyHtml = lista.map(c => `<tr><td>${c.id}</td><td>${c.forn}</td><td>${formatarDataBrasil(c.data)}</td><td>${c.itens}</td><td>${c.val}</td></tr>`).join('');
      }
      break;
    }
    case 'refeições': {
      headerHtml = '<tr><th>ID</th><th>Data</th><th>Produzidas</th><th>Servidas</th><th>Não servidas</th><th>% Aproveitamento</th></tr>';
      const lista = filtrarPorData(REFEICOES_DATA, 'data').sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data));
      if(!lista.length){
        bodyHtml = '<tr><td colspan="6" style="text-align:center;color:var(--gray-400);padding:18px">Nenhuma produção registrada no período selecionado.</td></tr>';
      }else{
        bodyHtml = lista.map(r => {
          const diff = Number(r.prod || 0) - Number(r.serv || 0);
          const pct = r.prod ? Math.round((Number(r.serv || 0) / Number(r.prod || 1)) * 100) : 0;
          const sc = pct >= 97 ? 'ok' : 'warn';
          return `<tr><td>${r.id}</td><td>${formatarDataBrasil(r.data)}</td><td>${r.prod}</td><td>${r.serv}</td><td>${diff}</td><td><span class="badge ${sc}">${pct}%</span></td></tr>`;
        }).join('');
      }
      break;
    }
    case 'geral': {
      titulo = 'Relatório: Geral';
      const periodo = getRelatorioPeriodo();
      const periodLabel = formatarPeriodoRelatorio(periodo);
      const generatedAt = new Date().toLocaleString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
      const doacoes = filtrarPorData(DOACOES_DATA, 'data');
      const totalDoacoes = doacoes.reduce((sum, item) => {
        const m = String(item.qty || '').replace(',', '.').match(/([\d\.]+)/);
        return sum + (m ? Number(m[1]) : 0);
      }, 0);
      const doadoresUnicos = new Set(doacoes.map(d => String(d.doador || '').trim()).filter(Boolean)).size;
      const compras = filtrarPorData(COMPRAS_DATA, 'data');
      const totalCompras = compras.reduce((sum, item) => sum + parseValorReal(item.val), 0);
      const fornecedoresUnicos = new Set(compras.map(c => String(c.forn || '').trim()).filter(Boolean)).size;
      const refeicoes = filtrarPorData(REFEICOES_DATA, 'data');
      const totalServidas = refeicoes.reduce((sum, item) => sum + Number(item.serv || 0), 0);
      const totalProduzidas = refeicoes.reduce((sum, item) => sum + Number(item.prod || 0), 0);
      const desperdicio = totalProduzidas - totalServidas;
      const aproveitamentoMedio = totalProduzidas ? Math.round((totalServidas / totalProduzidas) * 100) : 0;
      const movimentos = MOVIMENTACOES_DATA.filter(m => {
        const ts = converterDataParaTimestamp(m.data);
        return ts !== null && ts >= periodo.inicio && ts <= periodo.fim;
      });
      const estoqueMovItems = new Set(movimentos.map(m => normalizarTexto(m.item || '')));
      const entradasEstoque = movimentos.filter(m => m.tipo === 'entrada').reduce((sum, m) => sum + (Number(m.quantidade) || 0), 0);
      const saidasEstoque = movimentos.filter(m => m.tipo === 'saida').reduce((sum, m) => sum + (Number(m.quantidade) || 0), 0);
      const itensBaixo = ESTOQUE_DATA.filter(i => i.status === 'warn' || i.status === 'danger').length;
      const ultimaMovimentacaoEstoque = movimentos.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      const ultimaDoacao = doacoes.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      const ultimaCompra = compras.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];
      const ultimaRefeicao = refeicoes.slice().sort((a,b)=>converterDataParaTimestamp(b.data)-converterDataParaTimestamp(a.data))[0];

      if(metadataEl){
        metadataEl.style.display = 'block';
        metadataEl.innerHTML = `
          <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-start;margin-bottom:16px">
            <div style="flex:1;min-width:220px"><strong>Período</strong><div style="margin-top:4px;color:var(--gray-600)">${periodLabel}</div></div>
            <div style="flex:1;min-width:220px"><strong>Gerado em</strong><div style="margin-top:4px;color:var(--gray-600)">${generatedAt}</div></div>
          </div>
        `;
      }

      if(resumoEl){
        resumoEl.style.display = 'block';
        resumoEl.innerHTML = `
          <div style="margin-bottom:18px">
            <div style="font-size:14px;font-weight:700;margin-bottom:10px">Resumo geral</div>
            <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);gap:12px">
              <div class="stat-card"><div style="font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.4px">Alimentos cadastrados</div><div style="font-size:22px;font-weight:700;margin-top:8px">${ESTOQUE_DATA.length}</div></div>
              <div class="stat-card"><div style="font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.4px">Doações no período</div><div style="font-size:22px;font-weight:700;margin-top:8px">${totalDoacoes.toFixed(1).replace(/\.0$/,'')} kg</div></div>
              <div class="stat-card"><div style="font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.4px">Compras no período</div><div style="font-size:22px;font-weight:700;margin-top:8px">R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}</div></div>
              <div class="stat-card"><div style="font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.4px">Refeições produzidas</div><div style="font-size:22px;font-weight:700;margin-top:8px">${totalProduzidas}</div></div>
              <div class="stat-card"><div style="font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.4px">Refeições servidas</div><div style="font-size:22px;font-weight:700;margin-top:8px">${totalServidas}</div></div>
              <div class="stat-card"><div style="font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.4px">Desperdício</div><div style="font-size:22px;font-weight:700;margin-top:8px">${desperdicio}</div></div>
            </div>
          </div>
        `;
      }

      headerHtml = '<tr><th>Módulo</th><th>Total de registros</th><th>Resumo gerencial</th><th>Última movimentação</th></tr>';
      bodyHtml = `
        <tr><td><strong>Estoque</strong></td><td>${ESTOQUE_DATA.length}</td><td>Foram cadastrados ${ESTOQUE_DATA.length} alimentos; ${movimentos.length} movimentações registradas; ${entradasEstoque.toFixed(2).replace(/\.00$/,'')} kg/L/un de entradas; ${saidasEstoque.toFixed(2).replace(/\.00$/,'')} kg/L/un de saídas; ${itensBaixo} itens com estoque baixo.</td><td>${ultimaMovimentacaoEstoque ? formatarDataBrasil(ultimaMovimentacaoEstoque.data) : '—'}</td></tr>
        <tr><td><strong>Doações</strong></td><td>${doacoes.length}</td><td>${doacoes.length} doações registradas; ${totalDoacoes.toFixed(1).replace(/\.0$/,'')} kg recebidos; ${doadoresUnicos} doadores diferentes.</td><td>${ultimaDoacao ? formatarDataBrasil(ultimaDoacao.data) : '—'}</td></tr>
        <tr><td><strong>Compras</strong></td><td>${compras.length}</td><td>${compras.length} compras realizadas; valor total investido de R$ ${totalCompras.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}; ${fornecedoresUnicos} fornecedores cadastrados.</td><td>${ultimaCompra ? formatarDataBrasil(ultimaCompra.data) : '—'}</td></tr>
        <tr><td><strong>Refeições</strong></td><td>${refeicoes.length}</td><td>${totalProduzidas} refeições produzidas; ${totalServidas} refeições servidas; ${desperdicio} refeições não servidas; aproveitamento de ${aproveitamentoMedio}% da produção.</td><td>${ultimaRefeicao ? formatarDataBrasil(ultimaRefeicao.data) : '—'}</td></tr>
      `;
      break;
    }
    default: {
      titulo = `Relatório: ${tipo}`;
      headerHtml = '<tr><th>Dados</th><th>Valor</th></tr>';
      bodyHtml = '<tr><td colspan="2" style="text-align:center;color:var(--gray-400);padding:18px">Tipo de relatório inválido.</td></tr>';
      break;
    }
  }

  tituloEl.textContent = titulo;
  theadEl.innerHTML = headerHtml;
  bodyEl.innerHTML = bodyHtml;
}

function renderDoacoesSummary(){
  const metrics = getDashboardMetrics();
  const doadoresEl = document.getElementById('doacoes-doadores-val');
  const countEl = document.getElementById('doacoes-count-val');
  const volumeEl = document.getElementById('doacoes-volume-val');
  if(doadoresEl) doadoresEl.textContent = String(metrics.doadoresRegistrados || 0);
  if(countEl) countEl.textContent = String(metrics.doacoesCountMes || 0);
  if(volumeEl) volumeEl.textContent = `${(metrics.doacoesMes || 0).toFixed(1).replace(/\.0$/,'')} kg`;

  // ── cards da página de compras ──────────────────────────────────
  const now = getSystemDate();
  function isMesAtual(dataStr){
    if(!dataStr) return false;
    let d;
    if(/^\d{2}\/\d{2}\/\d{4}$/.test(dataStr)){ const [dd,mm,yy]=dataStr.split('/').map(Number); d=new Date(yy,mm-1,dd); }
    else if(/^\d{4}-\d{2}-\d{2}$/.test(dataStr)){ const [yy,mm,dd]=dataStr.split('-').map(Number); d=new Date(yy,mm-1,dd); }
    else d=new Date(dataStr);
    return !Number.isNaN(d.getTime()) && d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth();
  }

  const fornUnicosEl   = document.getElementById('compras-fornecedores-val');
  const comprasMesEl   = document.getElementById('compras-mes-count-val');
  const totalComprasEl = document.getElementById('compras-total-mes-val');

  if(fornUnicosEl) fornUnicosEl.textContent = new Set(COMPRAS_DATA.map(c => c.forn)).size;

  const comprasMes = COMPRAS_DATA.filter(c => isMesAtual(c.data));
  if(comprasMesEl) comprasMesEl.textContent = comprasMes.length;

  if(totalComprasEl){
    const totalMes = comprasMes.reduce((sum, c) => sum + parseValorReal(c.val), 0);
    totalComprasEl.textContent = 'R\u00a0' + totalMes.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
  }
}

function renderSystemDate(){
  const el = document.getElementById('topbar-date');
  const alertEl = document.getElementById('topbar-alert');
  // prefer to show the date from the latest refeição entry to avoid timezone shifts
  let displayDate = '';
  try{
    if(Array.isArray(REFEICOES_DATA) && REFEICOES_DATA.length){
      const ordenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
      const ultima = ordenadas[0];
      if(ultima && ultima.data) displayDate = ultima.data;
    }
  }catch(e){ /* ignore */ }
  if(!displayDate){
    const sys = getSystemDate();
    displayDate = formatarDataBrasil(sys.toISOString().split('T')[0]);
  }
  if(el) el.textContent = `Data do sistema: ${displayDate}`;
  // count warn/danger items based on current system date (statuses should be up-to-date)
  let warnCount = 0;
  ESTOQUE_DATA.forEach(it => { if(it && (it.status === 'warn' || it.status === 'danger')) warnCount++; });
  if(alertEl) alertEl.textContent = `⚠ ${warnCount} alertas de estoque`;
}

function deleteDoacao(id){
  if(!confirm('Excluir esta doação? Isso tentará reverter o estoque para o estado anterior.')) return;
  const idx = DOACOES_DATA.findIndex(d => Number(d.id) === Number(id));
  if(idx === -1){ showToast('Doação não encontrada.'); return; }
  const doac = DOACOES_DATA[idx];
  // parse qty (e.g., '45 kg')
  const qtyRaw = String(doac.qty || '0').trim();
  const m = qtyRaw.match(/([\d\.\,]+)\s*(\w+)?/);
  let qty = 0; let unidade = 'kg';
  if(m){ qty = parseFloat(m[1].replace(',','.')) || 0; if(m[2]) unidade = m[2]; }

  const itensStr = String(doac.itens || '').trim();
  const itens = itensStr.includes(',') ? itensStr.split(',').map(s=>s.trim()).filter(Boolean) : [itensStr];

  // If we have metadata, prefer it
  const meta = doac._meta || {};
  try{
    if(meta.affectedNome){
      // single affected name
      const nome = meta.affectedNome;
      const est = ESTOQUE_DATA.find(it => normalizarTexto(it.nome) === normalizarTexto(nome));
      if(est){
        est.qty = Math.max(0, (Number(est.qty) || 0) - qty);
        atualizarStatusEstoque(est);
        // if previous qty was 0 and now 0, remove item entirely
        if(Number(meta.prevQty || 0) === 0 && (Number(est.qty) || 0) === 0){
          const remIdx = ESTOQUE_DATA.findIndex(x => x === est);
          if(remIdx !== -1) ESTOQUE_DATA.splice(remIdx,1);
        }
      }
    }else{
      // distribute qty evenly across matched items
      const matches = itens.map(nome => encontrarItemEstoquePorNome(nome)).filter(Boolean);
      if(matches.length){
        const per = qty / matches.length;
        matches.forEach(est => { est.qty = Math.max(0, (Number(est.qty)||0) - per); atualizarStatusEstoque(est); });
      }else{
        // fallback: try single name match
        const singleMatch = encontrarItemEstoquePorNome(itens[0]);
        if(singleMatch){ singleMatch.qty = Math.max(0, (Number(singleMatch.qty)||0) - qty); atualizarStatusEstoque(singleMatch); }
      }
    }
  }catch(e){ console.warn('Erro ao reverter estoque para doação', e); }

  // remove movimentacao relacionada (procura entrada com mesmo item e quantidade e obs contendo 'Doação')
  for(let i = MOVIMENTACOES_DATA.length - 1; i >= 0; i--){
    const mv = MOVIMENTACOES_DATA[i];
    if(mv.tipo === 'entrada' && Number(mv.quantidade) === Number(qty) && String(mv.obs||'').toLowerCase().includes('doa')){
      MOVIMENTACOES_DATA.splice(i,1);
      break;
    }
    // fallback: match by item name and tipo entrada
    if(mv.tipo === 'entrada' && normalizarTexto(mv.item) === normalizarTexto(doac.itens)){
      MOVIMENTACOES_DATA.splice(i,1); break;
    }
  }

  // remove doacao
  DOACOES_DATA.splice(idx,1);
  saveData(); refreshAppViews(); showToast('Doação removida e estoque revertido (quando possível).');
}

function deleteCompra(id){
  if(!confirm('Excluir esta compra? Isso tentará reverter o estoque.')) return;
  const idx = COMPRAS_DATA.findIndex(c => Number(c.id) === Number(id));
  if(idx === -1){ showToast('Compra não encontrada.'); return; }
  const compra = COMPRAS_DATA[idx];
  try{
    reverterEntradaRegistro(compra, 'compra');
  }catch(e){ console.warn('Erro ao reverter estoque para compra', e); }
  COMPRAS_DATA.splice(idx,1);
  saveData(); refreshAppViews(); showToast('Compra removida e estoque ajustado.');
}

function deleteRefeicao(id){
  if(!confirm('Excluir este registro de refeição? Isso tentará restaurar o estoque consumido.')) return;
  const idx = REFEICOES_DATA.findIndex(r => Number(r.id) === Number(id));
  if(idx === -1){ showToast('Registro de refeição não encontrado.'); return; }
  const refeicao = REFEICOES_DATA[idx];
  try{
    reverterRefeicaoRegistro(refeicao);
  }catch(e){ console.warn('Erro ao reverter estoque para refeição', e); }
  REFEICOES_DATA.splice(idx,1);
  saveData(); refreshAppViews(); showToast('Registro de refeição excluído e estoque restaurado.');
}

function getRecomendacoesCompras(thresholdKg = 10){
  const lista = [];
  ESTOQUE_DATA.forEach(item => {
    const qty = Number(item.qty) || 0;
    if(qty < thresholdKg){
      lista.push({ nome: item.nome, qty: Number(qty.toFixed(3)), deficit: Number(Math.max(0, (thresholdKg - qty)).toFixed(3)), un: item.un || 'kg' });
    }
  });
  return lista.sort((a,b) => a.qty - b.qty);
}

function renderRecomendacoesCompras(){
  const container = document.getElementById('dashboard-compras-recomendadas');
  if(!container) return;
  const recs = getRecomendacoesCompras(10);
  if(!recs.length){
    container.innerHTML = '<div style="color:var(--gray-400)">Nenhum item abaixo de 10kg.</div>';
    return;
  }

  container.innerHTML = recs.map(r => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--gray-50)">
      <div>
        <strong>${r.nome}</strong>
        <div style="font-size:12px;color:var(--gray-400)">${r.qty} ${r.un} em estoque</div>
      </div>
      <div>
        <button class="btn outline btn-sm" onclick="openModalCompraSugestao('${r.nome.replace(/'/g,"\\'")}', ${r.deficit})">Ir às compras · +${r.deficit} ${r.un}</button>
      </div>
    </div>
  `).join('');
}

function openModalCompraSugestao(nomeItem, qtdSugestao){
  // Abre modal de compra e tenta preencher o produto e quantidade (quando possível)
  openModal('modal-compra');
  const m = document.getElementById('modal-compra');
  if(!m) { showToast('Abra Compras e registre a compra sugerida.'); return; }
  // tenta mapear nome do item para uma opção do select
  const prodSelect = m.querySelector('select.form-select:nth-of-type(2)') || m.querySelector('select.form-select');
  if(prodSelect){
    const options = Array.from(prodSelect.options).map(o=>o.value.toLowerCase());
    const nomeLower = nomeItem.toLowerCase();
    let matchIndex = -1;
    if(nomeLower.includes('arroz')) matchIndex = options.findIndex(o=>o.includes('arroz'));
    else if(nomeLower.includes('feijão') || nomeLower.includes('feijao')) matchIndex = options.findIndex(o=>o.includes('feijão')||o.includes('feijao'));
    else if(nomeLower.includes('óleo') || nomeLower.includes('oleo')) matchIndex = options.findIndex(o=>o.includes('óleo')||o.includes('oleo'));
    else if(nomeLower.includes('frango') || nomeLower.includes('carne')) matchIndex = options.findIndex(o=>o.includes('frango')||o.includes('carne'));
    if(matchIndex >= 0) prodSelect.selectedIndex = matchIndex;
  }
  const qtyInput = m.querySelector('input[type=number]');
  if(qtyInput) qtyInput.value = Number(qtdSugestao) || 0;
  showToast('Sugestão preenchida no formulário de compras. Revise e confirme.');
}

function renderCharts(){
  // ── Gráfico 1: Refeições produzidas vs servidas ──────────────────────────────
  const refeicoesOrdenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
  const ultimas15 = refeicoesOrdenadas.slice(0,15).reverse();
  const labelsRef = ultimas15.map(r=>formatarDataBrasil(r.data));
  const produced = ultimas15.map(r=>r.prod);
  const served = ultimas15.map(r=>r.serv);
  const ctxR = document.getElementById('chart-refeicoes');
  if(ctxR){
    if(chartRefeicoes) chartRefeicoes.destroy();
    chartRefeicoes = new Chart(ctxR.getContext('2d'),{
      type: 'bar',
      data: { labels: labelsRef, datasets:[
        {label:'Produzidas',data:produced,backgroundColor:'#378ADD'},
        {label:'Servidas',data:served,backgroundColor:'#85B7EB'}
      ]},
      options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}} }
    });
  }

  // ── Gráfico 2: Doações por mês (calculado a partir de DOACOES_DATA) ───────────
  const doacoesPorMes = {};
  DOACOES_DATA.forEach(d => {
    const mv = extrairMesAno(d.data);
    if(!mv) return;
    const key = `${mv.ano}-${String(mv.mes+1).padStart(2,'0')}`;
    if(!doacoesPorMes[key]) doacoesPorMes[key] = {label:'', total:0};
    doacoesPorMes[key].total += parseQty(d.qty);
    if(!doacoesPorMes[key].label) doacoesPorMes[key].label = new Date(mv.ano,mv.mes,1).toLocaleDateString('pt-BR',{month:'short',year:'2-digit'});
  });
  const doacoesEntries = Object.entries(doacoesPorMes).sort(([a],[b])=>a.localeCompare(b)).slice(-6);
  const labelsDo = doacoesEntries.length ? doacoesEntries.map(([,v])=>v.label) : ['Jan','Fev','Mar','Abr','Mai','Jun'];
  const datasDo = doacoesEntries.length ? doacoesEntries.map(([,v])=>Number(v.total.toFixed(1))) : [180,210,195,240,320,290];
  const ctxD = document.getElementById('chart-doacoes');
  if(ctxD){
    if(chartDoacoes) chartDoacoes.destroy();
    chartDoacoes = new Chart(ctxD.getContext('2d'),{
      type:'line',
      data:{ labels: labelsDo, datasets:[{label:'Doações (kg)',data:datasDo,borderColor:'#3B6D11',backgroundColor:'rgba(60,120,40,0.08)',fill:true,tension:0.3}] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}} }
    });
  }

  // ── Gráfico 3: Evolução financeira por mês ────────────────────────────────────
  const evolucao = calcularEvolucaoFinanceiraMensal();
  const ctxFin = document.getElementById('chart-financeiro');
  if(ctxFin){
    if(chartFinanceiro) chartFinanceiro.destroy();
    chartFinanceiro = new Chart(ctxFin.getContext('2d'),{
      type:'bar',
      data:{
        labels: evolucao.map(m=>m.label||'—'),
        datasets:[
          {label:'Gasto real compras (R$)',data:evolucao.map(m=>Number(m.gastoCompras.toFixed(2))),backgroundColor:'#E74C3C',stack:'a'},
          {label:'Receita (R$)',data:evolucao.map(m=>Number(m.receita.toFixed(2))),backgroundColor:'#27AE60',stack:'b'},
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{legend:{position:'bottom'}},
        scales:{y:{ticks:{callback:v=>'R$ '+Number(v).toLocaleString('pt-BR')}}}
      }
    });
  }

  // ── Gráfico 4: Cobertura de estoque por insumo crítico (dias) ─────────────────
  const cobertura = calcularCoberturaInsumosDetalhada();
  const ctxCob = document.getElementById('chart-cobertura-insumos');
  if(ctxCob){
    if(chartCoberturaInsumos) chartCoberturaInsumos.destroy();
    const coresCobertura = cobertura.map(c => c.dias < 7 ? '#E74C3C' : c.dias < 20 ? '#F39C12' : '#27AE60');
    chartCoberturaInsumos = new Chart(ctxCob.getContext('2d'),{
      type:'bar',
      data:{
        labels: cobertura.map(c=>c.nome),
        datasets:[{label:'Cobertura (dias)',data:cobertura.map(c=>c.dias),backgroundColor:coresCobertura,borderRadius:4}]
      },
      options:{
        indexAxis:'y', responsive:true, maintainAspectRatio:false,
        plugins:{legend:{display:false}},
        scales:{x:{title:{display:true,text:'Dias de estoque'}}}
      }
    });
  }

  // ── Gráfico 5: Demanda por dia da semana ──────────────────────────────────────
  const demanda = calcularDemandaPorDia();
  const ctxDia = document.getElementById('chart-dia-semana');
  if(ctxDia){
    if(chartDiaSemana) chartDiaSemana.destroy();
    const maxMedia = Math.max(...demanda.map(d=>d.media), 1);
    chartDiaSemana = new Chart(ctxDia.getContext('2d'),{
      type:'bar',
      data:{
        labels: demanda.map(d=>d.dia),
        datasets:[{
          label:'Média de servidas',
          data: demanda.map(d=>d.media),
          backgroundColor: demanda.map(d => d.media === maxMedia ? '#E74C3C' : '#378ADD'),
          borderRadius:6
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{legend:{display:false}},
        scales:{y:{title:{display:true,text:'Refeições'}}}
      }
    });
  }

  // ── Gráfico 6: Composição das fontes (donut) ──────────────────────────────────
  const fontes = calcularComposicaoFontes();
  const ctxFon = document.getElementById('chart-fontes');
  if(ctxFon){
    if(chartFontes) chartFontes.destroy();
    const totalFontes = fontes.doado + fontes.comprado;
    const semDados = totalFontes <= 0;
    chartFontes = new Chart(ctxFon.getContext('2d'),{
      type:'doughnut',
      data:{
        labels: semDados ? ['Sem dados'] : [`Doações (${fontes.doado.toFixed(0)} kg)`,`Compras (${fontes.comprado.toFixed(0)} kg)`],
        datasets:[{
          data: semDados ? [1] : [fontes.doado, fontes.comprado],
          backgroundColor: semDados ? ['#E0E0E0'] : ['#27AE60','#378ADD'],
          borderWidth:2
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{legend:{position:'bottom'}}
      }
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

function openModal(id){
  const el = document.getElementById(id);
  if(!el) return;
  // se for modal-alimento, resetar estado de edição
  if(id === 'modal-alimento'){
    try{
      el.querySelector('h2').textContent = '+ Cadastrar Alimento';
      el.removeAttribute('data-editing-id');
      const nameInput = el.querySelector('input.form-input'); if(nameInput) nameInput.value = '';
      const selects = el.querySelectorAll('select.form-select'); if(selects[0]) selects[0].selectedIndex = 0; if(selects[1]) selects[1].selectedIndex = 0;
      const num = el.querySelector('input[type=number]'); if(num) num.value = 50;
      const dateInput = el.querySelector('input[type=date]'); if(dateInput) dateInput.value = '';
      // limpar campos de movimentação rápida
      const movTipo = document.getElementById('alim-mov-tipo'); if(movTipo) movTipo.value = 'entrada';
      const movQty = document.getElementById('alim-mov-qty'); if(movQty) movQty.value = 0;
      const movData = document.getElementById('alim-mov-data'); if(movData) movData.value = '';
      const movVal = document.getElementById('alim-mov-validade'); if(movVal) movVal.value = '';
      const movObs = document.getElementById('alim-mov-obs'); if(movObs) movObs.value = '';
    }catch(e){/* ignore */}
  }
  if(id === 'modal-doacao'){
    el.removeAttribute('data-editing-id');
    // popular doadores com base nos registros existentes
    const selDoador = document.getElementById('sel-doador');
    if(selDoador){
      const doadores = [...new Set(DOACOES_DATA.map(d => d.doador))].sort();
      selDoador.innerHTML = doadores.map(d => `<option value="${d}">${d}</option>`).join('') +
        '<option value="__novo__">+ Novo doador...</option>';
    }
    // popular alimentos a partir do estoque
    const selAlim = document.getElementById('sel-alimento-doacao');
    if(selAlim){
      sortEstoque();
      selAlim.innerHTML = ESTOQUE_DATA.map(i => `<option value="${i.nome}">${i.nome}</option>`).join('');
    }
    // data atual do sistema
    const dDataInput = document.getElementById('doacao-data');
    if(dDataInput){
      const sd = getSystemDate();
      dDataInput.value = `${sd.getFullYear()}-${String(sd.getMonth()+1).padStart(2,'0')}-${String(sd.getDate()).padStart(2,'0')}`;
    }
    const novDoador = document.getElementById('inp-novo-doador');
    if(novDoador) novDoador.style.display = 'none';
    const dQty = document.getElementById('doacao-qty'); if(dQty) dQty.value = '';
    const dVal = document.getElementById('doacao-validade'); if(dVal) dVal.value = '';
  }

  if(id === 'modal-compra'){
    el.removeAttribute('data-editing-id');
    // popular fornecedores com base nos registros existentes
    const selForn = document.getElementById('sel-fornecedor-compra');
    if(selForn){
      const forns = [...new Set(COMPRAS_DATA.map(c => c.forn))].sort();
      selForn.innerHTML = forns.map(f => `<option value="${f}">${f}</option>`).join('') +
        '<option value="__novo__">+ Novo fornecedor...</option>';
    }
    // popular produtos a partir do estoque
    const selProd = document.getElementById('sel-produto-compra');
    if(selProd){
      sortEstoque();
      selProd.innerHTML = ESTOQUE_DATA.map(i => `<option value="${i.nome}">${i.nome}</option>`).join('');
    }
    // atualizar preço unitário sugerido ao mudar produto
    const selProdEl = document.getElementById('sel-produto-compra');
    if(selProdEl && !selProdEl._priceListener){
      selProdEl._priceListener = true;
      selProdEl.addEventListener('change', function(){
        const preco = PREMISSAS_FINANCEIRAS.precoUnitario[this.value];
        const inp = document.getElementById('compra-val-unit');
        if(inp && preco) inp.value = preco.toFixed(2);
      });
    }
    // data atual do sistema
    const cDataInput = document.getElementById('compra-data');
    if(cDataInput){
      const sd = getSystemDate();
      cDataInput.value = `${sd.getFullYear()}-${String(sd.getMonth()+1).padStart(2,'0')}-${String(sd.getDate()).padStart(2,'0')}`;
    }
    const novForn = document.getElementById('inp-novo-fornecedor');
    if(novForn) novForn.style.display = 'none';
    const cQty = document.getElementById('compra-qty'); if(cQty) cQty.value = '';
    const cVal = document.getElementById('compra-val-unit');
    if(cVal){
      const firstItem = ESTOQUE_DATA[0];
      const preco = firstItem ? PREMISSAS_FINANCEIRAS.precoUnitario[firstItem.nome] : null;
      cVal.value = preco ? preco.toFixed(2) : '';
    }
    const cValidade = document.getElementById('compra-validade'); if(cValidade) cValidade.value = '';
  }
  if(id === 'modal-refeicao'){
    el.removeAttribute('data-editing-id');
  }

  el.classList.add('open');
}
function closeModal(id){document.getElementById(id).classList.remove('open')}

function toggleNovoDoador(sel){ document.getElementById('inp-novo-doador').style.display = sel.value === '__novo__' ? '' : 'none'; }
function toggleNovoFornecedor(sel){ document.getElementById('inp-novo-fornecedor').style.display = sel.value === '__novo__' ? '' : 'none'; }

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
  const validadeInput = document.getElementById('mov-validade');
  if(validadeInput) validadeInput.value = '';
  if(obsInput) obsInput.value = '';
  if(qtyInput) qtyInput.value = 10;
  if(unidadeSelect) unidadeSelect.value = 'kg';
  // resetar para modo completo (entrada/saída)
  const qtyMax = document.getElementById('mov-qty');
  const hint   = document.getElementById('mov-qty-hint');
  const title  = document.getElementById('mov-modal-title');
  if(qtyMax) qtyMax.removeAttribute('max');
  if(hint)   hint.textContent = '';
  if(title)  title.textContent = '+ Registrar movimentação de estoque';
  document.getElementById('mov-tipo-row')  ?.style.removeProperty('display');
  document.getElementById('mov-obs-row')   ?.style.removeProperty('display');
  document.getElementById('mov-alert-info')?.style.removeProperty('display');
  // restaurar dropdown de item
  const movItemSel2 = document.getElementById('mov-item');
  const movItemDisp2 = document.getElementById('mov-item-display');
  if(movItemSel2) movItemSel2.style.display = '';
  if(movItemDisp2) movItemDisp2.style.display = 'none';
  const tipoReset = document.getElementById('mov-tipo');
  if(tipoReset){ Array.from(tipoReset.options).forEach(opt => { opt.hidden = false; }); tipoReset.value = 'entrada'; tipoReset.dispatchEvent(new Event('change')); }

  openModal('modal-movimentacao');
}

// mostrar/ocultar campo validade conforme tipo; atualizar max de saída ao trocar item
document.addEventListener('DOMContentLoaded', () => {
  const tipoEl = document.getElementById('mov-tipo');
  const validadeEl = document.getElementById('mov-validade');
  if(tipoEl && validadeEl){
    const toggle = () => { validadeEl.parentElement.style.display = tipoEl.value === 'entrada' ? '' : 'none'; };
    tipoEl.addEventListener('change', toggle);
    toggle();
  }
  // atualizar saldo disponível ao trocar o item enquanto tipo = saída
  const itemEl = document.getElementById('mov-item');
  if(itemEl){
    itemEl.addEventListener('change', () => {
      const tipoAtual = document.getElementById('mov-tipo')?.value;
      const qtyEl = document.getElementById('mov-qty');
      const hintEl = document.getElementById('mov-qty-hint');
      if(tipoAtual !== 'saida'){ if(qtyEl) qtyEl.removeAttribute('max'); if(hintEl) hintEl.textContent = ''; return; }
      const itemId = parseInt(itemEl.value, 10);
      const item = ESTOQUE_DATA.find(x => Number(x.id) === itemId);
      const saldo = item ? (Number(item.qty) || 0) : 0;
      if(qtyEl){ qtyEl.max = saldo; if(parseFloat(qtyEl.value) > saldo) qtyEl.value = saldo; }
      if(hintEl) hintEl.textContent = item ? `Disponível: ${saldo} ${item.un || 'kg'}` : '';
    });
  }
});

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
    // default validade empty
    const validadeInput = m.querySelector('#doacao-validade'); if(validadeInput) validadeInput.value = '';
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
  const validadeRaw = document.getElementById('mov-validade')?.value || '';
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

  // Se for entrada, exigir validade e aplicar ao item
  if(tipo === 'entrada'){
    if(!validadeRaw){ showToast('Em entradas, informe a data de validade do lote.'); return; }
    const validadeFmt = formatarDataBrasil(validadeRaw);
    // atualizar validade no item (sobrescrever)
    item.val = validadeFmt;
  }

  const novoSaldo = tipo === 'entrada' ? (Number(item.qty) || 0) + qty : (Number(item.qty) || 0) - qty;
  item.qty = Math.max(0, novoSaldo);
  item.un = unidade;
  atualizarStatusEstoque(item);

  const id = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(x => x.id)) + 1 : 1;
  MOVIMENTACOES_DATA.unshift({id,tipo,item:item.nome,quantidade:qty,unidade,data,obs});

  saveData();
  refreshAppViews();
  closeModal('modal-movimentacao');
  showToast(tipo === 'entrada' ? 'Entrada registrada no estoque.' : 'Saída registrada no estoque.');
}

function normalizarTexto(texto){
  return String(texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Busca um item no estoque por nome usando comparação robusta:
// - prefere igualdade normalizada
// - depois compara tokens (palavras) normalizadas para evitar matches parciais indesejados
function encontrarItemEstoquePorNome(nome){
  const alvo = normalizarTexto(nome || '');
  if(!alvo) return null;
  // procura igualdade exata primeiro
  for(const it of ESTOQUE_DATA){
    if(normalizarTexto(it.nome) === alvo) return it;
  }
  // tokenização
  const tokensAlvo = alvo.split(/[^a-z0-9]+/).filter(Boolean);
  if(tokensAlvo.length === 0) return null;
  for(const it of ESTOQUE_DATA){
    const nomeIt = normalizarTexto(it.nome);
    const tokensIt = nomeIt.split(/[^a-z0-9]+/).filter(Boolean);
    // se compartilharem qualquer token inteiro, consideramos correspondência
    const comum = tokensAlvo.some(t => tokensIt.includes(t));
    if(comum) return it;
  }
  return null;
}

function atualizarStatusEstoque(item){
  const qtd = Number(item.qty) || 0;
  // Determine current system date: prefer last production date
  const sysDate = getSystemDate();
  // check validade if present (item.val is formatted 'dd/mm/yyyy')
  let statusByDate = null;
  if(item.val){
    const tsVal = converterDataParaTimestamp(item.val);
    if(tsVal !== null){
      const diffMs = tsVal - sysDate.getTime();
      const diffDays = Math.ceil(diffMs / (1000*60*60*24));
      if(diffDays < 0){
        statusByDate = 'danger';
      }else if(diffDays <= 10){
        statusByDate = 'warn';
      }else{
        statusByDate = 'ok';
      }
    }
  }

  // Expiration status takes precedence; otherwise fallback to quantity-based status
  if(statusByDate === 'danger'){
    item.status = 'danger';
  }else if(statusByDate === 'warn'){
    item.status = 'warn';
  }else{
    if(qtd <= 0){
      item.status = 'danger';
    }else if(qtd < 20){
      item.status = 'warn';
    }else{
      item.status = 'ok';
    }
  }
}

// Return the system date as a Date object: prefer most recent production date, else today
function getSystemDate(){
  try{
    if(Array.isArray(REFEICOES_DATA) && REFEICOES_DATA.length){
      // REFEICOES_DATA entries have data in 'dd/mm/yyyy' format (normalized)
      const ordenadas = ordenarRefeicoesPorData(REFEICOES_DATA);
      const ultima = ordenadas[0];
      if(ultima && ultima.data){
        const ts = converterDataParaTimestamp(ultima.data);
        if(ts !== null) return new Date(ts);
      }
    }
  }catch(e){ /* ignore */ }
  return new Date();
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

  const existente = encontrarItemEstoquePorNome(nomeItem);

  if(existente){
    existente.qty = (Number(existente.qty) || 0) + qtd;
    if(unidade) existente.un = unidade;
    if(categoria) existente.cat = categoria;
    // atualizar validade quando fornecida (entrada nova)
    if(validade) existente.val = validade;
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

  if(!diasUteis.length){
    showToast('Não foi possível gerar a simulação: mês inválido.');
    return;
  }

  const pratosPorDia = PREMISSAS_FINANCEIRAS.pratosPorDia || 100;
  const variacoes = [0.92,0.94,0.95,0.96,0.97,0.98,0.99,1.0,1.01,1.02,1.03,1.04];
  let nextId = REFEICOES_DATA.length ? Math.max(...REFEICOES_DATA.map(r => r.id)) + 1 : 1;

  // Limpar registros antigos de refeição para representar o mês simulado
  REFEICOES_DATA.splice(0, REFEICOES_DATA.length);

  diasUteis.forEach((dataObj, idx) => {
    const dataBr = formatarDataBrasil(dataObj.toISOString().split('T')[0]);
    const variacao = variacoes[idx % variacoes.length] || 1.0;
    const planejado = Math.max(0, Math.round(pratosPorDia * variacao));

    const maxPorEstoque = calcularMaximoProducaoPorEstoque(planejado);
    const produzidas = Math.max(0, Math.min(planejado, Math.round(maxPorEstoque)));
    const servidas = produzidas > 0 ? Math.min(produzidas, Math.round(produzidas * (0.92 + Math.random() * 0.06))) : 0;

    const consumoMeta = consumirEstoqueParaProducao(produzidas, dataBr);
    REFEICOES_DATA.unshift({
      id: nextId++,
      data: dataBr,
      prod: produzidas,
      serv: servidas,
      _meta: { movIds: consumoMeta.movIds, consumo: consumoMeta.consumo }
    });
  });

  normalizarRefeicoes();
  saveData();
  refreshAppViews();
  showToast('Simulação do mês concluída com consumo real de estoque.');
}

function calcularMaximoProducaoPorEstoque(planejado){
  const consumoPorPrato = PREMISSAS_FINANCEIRAS.consumoPorPrato || {};
  let maximo = planejado;

  Object.keys(consumoPorPrato).forEach(nome => {
    const consumoUnit = Number(consumoPorPrato[nome]) || 0;
    if(consumoUnit <= 0) return;
    const item = ESTOQUE_DATA.find(i => normalizarTexto(i.nome) === normalizarTexto(nome));
    const estoque = Number(item?.qty || 0);
    const maxParaIngrediente = estoque / consumoUnit;
    if(maxParaIngrediente < maximo) maximo = maxParaIngrediente;
  });

  return Number.isFinite(maximo) ? Math.max(0, maximo) : planejado;
}

function consumirEstoqueParaProducao(produzidas, dataBr){
  const consumoPorPrato = PREMISSAS_FINANCEIRAS.consumoPorPrato || {};
  const movIds = [];
  const consumo = [];

  Object.keys(consumoPorPrato).forEach(nome => {
    const consumoUnit = Number(consumoPorPrato[nome]) || 0;
    if(consumoUnit <= 0) return;
    const item = ESTOQUE_DATA.find(i => normalizarTexto(i.nome) === normalizarTexto(nome));
    if(!item) return;

    const quantidadeConsumida = Number((produzidas * consumoUnit).toFixed(3));
    if(quantidadeConsumida <= 0) return;

    item.qty = Math.max(0, Number(((Number(item.qty) || 0) - quantidadeConsumida).toFixed(3)));
    atualizarStatusEstoque(item);

    const movId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(m => m.id)) + 1 : 1;
    MOVIMENTACOES_DATA.unshift({
      id: movId,
      tipo: 'saida',
      item: item.nome,
      quantidade: quantidadeConsumida,
      unidade: item.un || 'kg',
      data: dataBr,
      obs: `Consumo para produção de ${produzidas} refeição(ões)`
    });

    movIds.push(movId);
    consumo.push({ item: item.nome, quantidade: quantidadeConsumida, unidade: item.un || 'kg' });
  });

  sortEstoque();
  return { movIds, consumo };
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
  const nome = (m.querySelector('input.form-input')?.value || '').trim() || 'Novo alimento';
  const sel = m.querySelector('select.form-select');
  const cat = sel?sel.value:'Outros';
  const unit = m.querySelector('select.form-select:nth-of-type(2)')?m.querySelector('select.form-select:nth-of-type(2)').value:'kg';
  const qty = parseFloat(m.querySelector('input[type=number]')?.value||0);
  const validadeRaw = document.getElementById('alim-mov-validade')?.value || '';
  const validadeFmt = validadeRaw ? formatarDataBrasil(validadeRaw) : '';
  const dataMov = document.getElementById('alim-mov-data')?.value || new Date().toISOString().split('T')[0];

  if(!nome){ showToast('Informe o nome do alimento.'); return; }
  if(qty > 0 && !validadeFmt){ showToast('Informe validade para a entrada inicial de estoque.'); return; }

  const editingId = m.getAttribute('data-editing-id');
  if(editingId){
    const item = ESTOQUE_DATA.find(x => String(x.id) === String(editingId));
    if(item){
      item.nome = nome;
      item.cat = cat;
      if(!Number.isNaN(qty) && qty > 0) item.qty = qty;
      item.un = unit;
      if(validadeFmt) item.val = validadeFmt;
      atualizarStatusEstoque(item);
      sortEstoque();
      saveData(); refreshAppViews(); closeModal('modal-alimento'); showToast('Alimento atualizado.');
      m.removeAttribute('data-editing-id');
      return;
    }
  }

  const existingItem = encontrarItemEstoquePorNome(nome);
  if(existingItem && qty === 0){
    showToast('Este alimento já existe no estoque. Use movimentação para ajustar quantidades.');
    return;
  }

  let item = null;
  if(qty > 0){
    item = adicionarAoEstoque({ nome, quantidade: qty, unidade: unit, categoria: cat, validade: validadeFmt });
    if(item){
      const movId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(x=>x.id)) + 1 : 1;
      MOVIMENTACOES_DATA.unshift({ id: movId, tipo: 'entrada', item: item.nome, quantidade: qty, unidade: unit, data: dataMov, obs: `Entrada inicial - validade ${validadeFmt}` });
    }
  } else {
    const id = ESTOQUE_DATA.length?Math.max(...ESTOQUE_DATA.map(x=>x.id))+1:1;
    item = { id, nome, cat, qty: 0, un: unit, val: '', status: 'ok' };
    ESTOQUE_DATA.push(item);
  }

  sortEstoque();
  saveData(); refreshAppViews(); closeModal('modal-alimento'); showToast('Alimento cadastrado e salvo.');
}

function abrirSaidaEstoque(id){
  const item = ESTOQUE_DATA.find(x => Number(x.id) === Number(id));
  if(!item){ showToast('Item não encontrado'); return; }
  openMovimentacaoModal(item.nome);
  const tipoEl = document.getElementById('mov-tipo');
  if(tipoEl){
    tipoEl.value = 'saida';
    Array.from(tipoEl.options).forEach(opt => { opt.hidden = opt.value === 'entrada'; });
    tipoEl.dispatchEvent(new Event('change'));
  }
}

function openAlimentoEdit(id){
  const item = ESTOQUE_DATA.find(x => Number(x.id) === Number(id));
  if(!item) { showToast('Item não encontrado'); return; }
  openModal('modal-alimento');
  const m = document.getElementById('modal-alimento');
  if(!m) return;
  m.querySelector('h2').textContent = 'Editar Alimento';
  m.setAttribute('data-editing-id', item.id);
  const inputs = m.querySelectorAll('input.form-input');
  if(inputs[0]) inputs[0].value = item.nome;
  if(inputs[1] && inputs[1].type === 'number') inputs[1].value = Number(item.qty) || 0;
  const selects = m.querySelectorAll('select.form-select');
  if(selects[0]) selects[0].value = item.cat || 'Outros';
  if(selects[1]) selects[1].value = item.un || 'kg';
  const dataInput = document.getElementById('alim-mov-data');
  if(dataInput) dataInput.value = converterDataBrParaInput(item.val || new Date().toISOString().split('T')[0]);
  const validadeInput = document.getElementById('alim-mov-validade');
  if(validadeInput) validadeInput.value = converterDataBrParaInput(item.val || '');
  const obsInput = document.getElementById('alim-mov-obs');
  if(obsInput) obsInput.value = '';
}

function openEditDoacao(id){
  const registro = DOACOES_DATA.find(x => Number(x.id) === Number(id));
  if(!registro){ showToast('Doação não encontrada.'); return; }
  openModal('modal-doacao');
  const m = document.getElementById('modal-doacao');
  if(!m) return;
  m.querySelector('h2').textContent = 'Editar Doação';
  m.setAttribute('data-editing-id', registro.id);
  const selDoador = document.getElementById('sel-doador');
  if(selDoador){
    if(!Array.from(selDoador.options).some(opt => opt.value === registro.doador)){
      selDoador.insertAdjacentHTML('afterbegin', `<option value="${registro.doador}">${registro.doador}</option>`);
    }
    selDoador.value = registro.doador;
  }
  const selAlim = document.getElementById('sel-alimento-doacao');
  if(selAlim){
    if(!Array.from(selAlim.options).some(opt => opt.value === registro.itens)){
      selAlim.insertAdjacentHTML('afterbegin', `<option value="${registro.itens}">${registro.itens}</option>`);
    }
    selAlim.value = registro.itens;
  }
  const dataInput = document.getElementById('doacao-data');
  if(dataInput) dataInput.value = converterDataBrParaInput(registro.data);
  const qtyInput = document.getElementById('doacao-qty');
  const unidadeSelect = document.getElementById('sel-unidade-doacao');
  const parsed = parseQuantidadeUnidade(registro.qty);
  if(qtyInput) qtyInput.value = parsed.qty;
  if(unidadeSelect) unidadeSelect.value = parsed.unidade;
  const validadeInput = document.getElementById('doacao-validade');
  if(validadeInput) validadeInput.value = converterDataBrParaInput(registro._meta?.validade || '');
}

function openEditCompra(id){
  const registro = COMPRAS_DATA.find(x => Number(x.id) === Number(id));
  if(!registro){ showToast('Compra não encontrada.'); return; }
  openModal('modal-compra');
  const m = document.getElementById('modal-compra');
  if(!m) return;
  m.querySelector('h2').textContent = 'Editar Compra';
  m.setAttribute('data-editing-id', registro.id);
  const selForn = document.getElementById('sel-fornecedor-compra');
  if(selForn){
    if(!Array.from(selForn.options).some(opt => opt.value === registro.forn)){
      selForn.insertAdjacentHTML('afterbegin', `<option value="${registro.forn}">${registro.forn}</option>`);
    }
    selForn.value = registro.forn;
  }
  const selProd = document.getElementById('sel-produto-compra');
  if(selProd){
    if(!Array.from(selProd.options).some(opt => opt.value === registro.itens)){
      selProd.insertAdjacentHTML('afterbegin', `<option value="${registro.itens}">${registro.itens}</option>`);
    }
    selProd.value = registro.itens;
  }
  const dataInput = document.getElementById('compra-data');
  if(dataInput) dataInput.value = converterDataBrParaInput(registro.data);
  const qtyInput = document.getElementById('compra-qty');
  if(qtyInput) qtyInput.value = Number(registro._meta?.qty || 0);
  const valUnit = document.getElementById('compra-val-unit');
  if(valUnit) valUnit.value = Number(registro._meta?.valUnit || parseValorReal(registro.val)).toFixed(2);
  const validadeInput = document.getElementById('compra-validade');
  if(validadeInput) validadeInput.value = converterDataBrParaInput(registro._meta?.validade || '');
}

function openEditRefeicao(id){
  const registro = REFEICOES_DATA.find(x => Number(x.id) === Number(id));
  if(!registro){ showToast('Registro de refeição não encontrado.'); return; }
  openModal('modal-refeicao');
  const m = document.getElementById('modal-refeicao');
  if(!m) return;
  m.querySelector('h2').textContent = 'Editar Refeição';
  m.setAttribute('data-editing-id', registro.id);
  const dataInput = m.querySelector('input[type=date]');
  if(dataInput) dataInput.value = converterDataBrParaInput(registro.data);
  const prodInput = document.getElementById('inp-produzida');
  const servInput = document.getElementById('inp-servida');
  if(prodInput) prodInput.value = Number(registro.prod) || 0;
  if(servInput) servInput.value = Number(registro.serv) || 0;
  const warn = document.getElementById('refeicao-warn');
  if(warn) warn.style.display = Number(registro.serv) > Number(registro.prod) ? 'flex' : 'none';
}

function applyAlimentoMovimentacao(){
  const m = document.getElementById('modal-alimento');
  if(!m){ showToast('Modal de alimento não encontrado.'); return; }

  const nome = (m.querySelector('input.form-input')?.value || '').trim();
  const cat = m.querySelector('select.form-select')?.value || 'Outros';
  const unit = m.querySelector('select.form-select:nth-of-type(2)')?.value || 'kg';
  let editingId = m.getAttribute('data-editing-id');
  let item = editingId ? ESTOQUE_DATA.find(x => String(x.id) === String(editingId)) : null;

  if(!item){
    if(!nome){ showToast('Informe o nome do alimento antes de aplicar movimentação.'); return; }
    item = encontrarItemEstoquePorNome(nome);
    if(!item){
      const id = ESTOQUE_DATA.length ? Math.max(...ESTOQUE_DATA.map(x => x.id)) + 1 : 1;
      item = { id, nome, cat, qty: 0, un: unit, val: '', status: 'ok' };
      ESTOQUE_DATA.push(item);
      m.setAttribute('data-editing-id', id);
      editingId = String(id);
    }
  }

  const tipo = document.getElementById('alim-mov-tipo')?.value || 'entrada';
  const qty = parseFloat(document.getElementById('alim-mov-qty')?.value) || 0;
  const data = document.getElementById('alim-mov-data')?.value || new Date().toISOString().split('T')[0];
  const validadeRaw = document.getElementById('alim-mov-validade')?.value || '';
  const obs = document.getElementById('alim-mov-obs')?.value || '';

  if(qty <= 0){ showToast('Informe uma quantidade maior que zero para movimentação.'); return; }

  if(tipo === 'entrada'){
    if(!validadeRaw){ showToast('Informe a validade ao registrar uma entrada.'); return; }
    const validadeFmt = formatarDataBrasil(validadeRaw);
    item.qty = (Number(item.qty) || 0) + qty;
    item.val = validadeFmt;
  } else {
    if((Number(item.qty) || 0) < qty){ showToast('Saldo insuficiente para esta saída.'); return; }
    item.qty = Math.max(0, (Number(item.qty) || 0) - qty);
  }

  item.un = unit;
  item.cat = cat;
  atualizarStatusEstoque(item);

  const movId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(m=>m.id)) + 1 : 1;
  MOVIMENTACOES_DATA.unshift({ id: movId, tipo, item: item.nome, quantidade: qty, unidade: item.un || 'kg', data, obs });

  sortEstoque();
  saveData();
  refreshAppViews();
  closeModal('modal-alimento');
  showToast(tipo === 'entrada' ? 'Entrada registrada no estoque.' : 'Saída registrada no estoque.');
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
  saveData(); refreshAppViews(); showToast('Item excluído do estoque.');
}

function saveDoacao(){
  const m = document.getElementById('modal-doacao');
  const doadorSel = document.getElementById('sel-doador');
  let doador = doadorSel?.value || 'Outro';
  if(doador === '__novo__'){
    doador = (document.getElementById('inp-novo-doador')?.value || '').trim() || 'Novo doador';
  }
  const dataInput = document.getElementById('doacao-data')?.value || '';
  const data = converterDataInputParaBrasil(dataInput);
  const alimento = document.getElementById('sel-alimento-doacao')?.value || 'Alimento';
  const qty = parseFloat(document.getElementById('doacao-qty')?.value) || 0;
  const unidade = document.getElementById('sel-unidade-doacao')?.value || 'kg';
  const validadeRaw = document.getElementById('doacao-validade')?.value || '';

  if(qty <= 0){ showToast('Informe a quantidade da doação.'); return; }
  if(!validadeRaw){ showToast('Informe a data de validade para a doação.'); return; }
  const validadeFmt = converterDataInputParaBrasil(validadeRaw);

  const editingId = m?.getAttribute('data-editing-id');
  const existingDoacao = editingId ? DOACOES_DATA.find(x => String(x.id) === String(editingId)) : null;
  if(existingDoacao){
    reverterEntradaRegistro(existingDoacao, 'doacao');
  }

  let matchedName = alimento;
  try{
    const match = encontrarItemEstoquePorNome(alimento);
    if(match) matchedName = match.nome;
  }catch(e){ console.warn('Erro ao procurar item no estoque para doação', e); }

  const existingItem = ESTOQUE_DATA.find(it => normalizarTexto(it.nome) === normalizarTexto(matchedName));
  const prevQty = existingItem ? Number(existingItem.qty) || 0 : 0;
  const movId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(m=>m.id)) + 1 : 1;

  const registro = {
    id: existingDoacao ? existingDoacao.id : (DOACOES_DATA.length ? Math.max(...DOACOES_DATA.map(x => x.id)) + 1 : 1),
    doador,
    data,
    itens: matchedName,
    qty: qty + ' ' + unidade,
    _meta: {
      affectedNome: matchedName,
      prevQty,
      movId,
      qty,
      unidade,
      validade: validadeFmt
    }
  };

  if(existingDoacao){
    Object.assign(existingDoacao, registro);
  } else {
    DOACOES_DATA.push(registro);
  }
  sortDoacoes();

  const affected = adicionarAoEstoque({ nome: matchedName, quantidade: qty, unidade, categoria: inferirCategoria(matchedName), validade: validadeFmt });
  if(affected){
    affected.origem = 'doacao';
    MOVIMENTACOES_DATA.unshift({ id: movId, tipo: 'entrada', item: affected.nome, quantidade: qty, unidade, data: data || formatarDataBrasil(new Date().toISOString().split('T')[0]), obs: `Doação - validade ${validadeFmt}` });
  }

  sortEstoque();
  saveData();
  refreshAppViews();
  closeModal('modal-doacao');
  showToast(existingDoacao ? 'Doação atualizada e estoque sincronizado.' : 'Doação registrada e adicionada ao estoque.');
}

function saveCompra(){
  const m = document.getElementById('modal-compra');
  const fornSel = document.getElementById('sel-fornecedor-compra');
  let forn = fornSel?.value || 'Fornecedor';
  if(forn === '__novo__'){
    forn = (document.getElementById('inp-novo-fornecedor')?.value || '').trim() || 'Novo fornecedor';
  }
  const dataInput = document.getElementById('compra-data')?.value || '';
  const data = converterDataInputParaBrasil(dataInput);
  const prod = document.getElementById('sel-produto-compra')?.value || 'Produto';
  const qty = parseFloat(document.getElementById('compra-qty')?.value) || 0;
  const valUnitario = parseFloat(document.getElementById('compra-val-unit')?.value) || 0;
  const validadeRaw = document.getElementById('compra-validade')?.value || '';

  if(qty <= 0){ showToast('Informe a quantidade da compra.'); return; }
  if(!validadeRaw){ showToast('Informe a data de validade ao registrar a compra.'); return; }
  const validadeFmt = converterDataInputParaBrasil(validadeRaw);

  const valorTotal = qty * valUnitario;
  const editingId = m?.getAttribute('data-editing-id');
  const existingCompra = editingId ? COMPRAS_DATA.find(x => String(x.id) === String(editingId)) : null;
  if(existingCompra){
    reverterEntradaRegistro(existingCompra, 'compra');
  }

  const movId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(x=>x.id)) + 1 : 1;
  const registro = {
    id: existingCompra ? existingCompra.id : (COMPRAS_DATA.length ? Math.max(...COMPRAS_DATA.map(x => x.id)) + 1 : 1),
    forn,
    data,
    itens: prod,
    val: 'R$ ' + valorTotal.toFixed(2),
    _meta: {
      affectedNome: prod,
      qty,
      unidade: 'kg',
      movId,
      validade: validadeFmt,
      valUnit: valUnitario
    }
  };

  if(existingCompra){
    Object.assign(existingCompra, registro);
  } else {
    COMPRAS_DATA.push(registro);
  }

  const affected = adicionarAoEstoque({ nome: prod, quantidade: qty, unidade: 'kg', categoria: inferirCategoria(prod), validade: validadeFmt });
  if(affected){
    MOVIMENTACOES_DATA.unshift({ id: movId, tipo: 'entrada', item: affected.nome, quantidade: qty, unidade: 'kg', data: data || formatarDataBrasil(new Date().toISOString().split('T')[0]), obs: `Compra - validade ${validadeFmt}` });
  }
  sortEstoque();

  saveData();
  refreshAppViews();
  closeModal('modal-compra');
  showToast(existingCompra ? 'Compra atualizada e estoque sincronizado.' : 'Compra registrada e estoque atualizado.');
}

function saveUsuario(){
  // For prototype, just show toast and close modal. Real apps must POST to server.
  closeModal('modal-usuario'); showToast('Usuário cadastrado (simulação).');
}
function baixarEstoquePorRefeicao(qtdRefeicoes){
  const ficha = PREMISSAS_FINANCEIRAS.consumoPorPrato || {};
  const hoje = getSystemDate();
  const dataIso = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
  const movIds = [];
  const consumo = [];

  Object.keys(ficha).forEach(nomeIngrediente => {
    const consumoUnit = Number(ficha[nomeIngrediente]) || 0;
    if(consumoUnit <= 0) return;
    const quantidadeConsumida = Number((qtdRefeicoes * consumoUnit).toFixed(3));

    // localizar item no estoque pelo nome
    const item = ESTOQUE_DATA.find(i => normalizarTexto(i.nome) === normalizarTexto(nomeIngrediente));
    if(!item) return;

    item.qty = Math.max(0, Number(((parseFloat(item.qty) || 0) - quantidadeConsumida).toFixed(3)));
    atualizarStatusEstoque(item);

    const movId = MOVIMENTACOES_DATA.length ? Math.max(...MOVIMENTACOES_DATA.map(m=>m.id)) + 1 : 1;
    MOVIMENTACOES_DATA.unshift({
      id: movId,
      tipo: 'saida',
      item: item.nome,
      quantidade: quantidadeConsumida,
      unidade: item.un || 'kg',
      data: dataIso,
      obs: `Consumo para produção de ${qtdRefeicoes} refeição(ões)`
    });
    movIds.push(movId);
    consumo.push({ item: item.nome, quantidade: quantidadeConsumida, unidade: item.un || 'kg' });
  });

  sortEstoque();
  saveData();
  return { movIds, consumo };
}

function saveRefeicao(){
  const p = parseInt(document.getElementById('inp-produzida').value) || 0;
  const s = parseInt(document.getElementById('inp-servida').value) || 0;
  const w = document.getElementById('refeicao-warn');
  if(s > p){ if(w) w.style.display = 'flex'; return; }
  if(w) w.style.display = 'none';

  const m = document.getElementById('modal-refeicao');
  const dataInput = document.querySelector('#modal-refeicao input[type=date]')?.value;
  const hoje = new Date();
  const dataPadrao = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
  const data = formatarDataBrasil(dataInput || dataPadrao);

  const editingId = m?.getAttribute('data-editing-id');
  let registro = null;
  if(editingId){
    registro = REFEICOES_DATA.find(x => String(x.id) === String(editingId));
    if(!registro){ showToast('Registro de refeição não encontrado.'); return; }
    reverterRefeicaoRegistro(registro);
    registro.data = data;
    registro.prod = p;
    registro.serv = s;
  } else {
    const id = REFEICOES_DATA.length ? Math.max(...REFEICOES_DATA.map(x => x.id)) + 1 : 1;
    registro = { id, data, prod: p, serv: s };
    REFEICOES_DATA.unshift(registro);
  }

  normalizarRefeicoes();
  const meta = baixarEstoquePorRefeicao(p);
  registro._meta = { movIds: meta.movIds, consumo: meta.consumo };

  const custoInfo = calcularCustoInsumosPorRefeicao();
  const custoPorRefeicao = custoInfo.total;
  const custoLote = Number((custoPorRefeicao * p).toFixed(2));

  ESTOQUE_DATA.forEach(atualizarStatusEstoque);

  saveData();
  refreshAppViews();
  closeModal('modal-refeicao');
  if(m) m.removeAttribute('data-editing-id');

  try{
    const ultima = ordenarRefeicoesPorData(REFEICOES_DATA)[0];
    if(ultima && ultima.data) showToast(`Data do sistema atualizada para ${ultima.data}`);
  }catch(e){}
  showToast(`Registro salvo. Custo insumos/por refeição ≈ R$ ${custoPorRefeicao.toFixed(2)} · Lote: R$ ${custoLote.toFixed(2)}`);
}

function calcularCustoInsumosPorRefeicao(){
  const ficha = PREMISSAS_FINANCEIRAS.consumoPorPrato || {};
  const precos = PREMISSAS_FINANCEIRAS.precoUnitario || {};
  const breakdown = {};
  let total = 0;

  Object.keys(ficha).forEach(nome => {
    const consumo = Number(ficha[nome]) || 0; // kg or L per refeição
    const preco = Number(precos[nome]) || 0; // R$/kg or R$/L
    const custo = consumo * preco;
    if(consumo > 0 && preco > 0){
      breakdown[nome] = {consumo, preco, custo: Number(custo.toFixed(4))};
      total += custo;
    }
  });

  return { total: Number(total.toFixed(4)), breakdown };
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

  // Recarregar cenário sempre que os dados estiverem incompletos (evita dependência de flag)
  const dadosIncompletos = COMPRAS_DATA.length < 10 || DOACOES_DATA.length < 10 || REFEICOES_DATA.length < 30;
  if(dadosIncompletos){
    carregarCenarioSimulado8000();
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
    gerarRelatorio();
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