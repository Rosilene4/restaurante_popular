Como iniciar o projeto

Opção 1 — Abrir localmente (modo simples):

- Navegue até a pasta do projeto e abra o arquivo `index.html` no navegador (duplo-clique).

Opção 2 — Servir via servidor HTTP (recomendado para testes):

- Abra o PowerShell na pasta do projeto e execute:

```powershell
python -m http.server 8000
```

- Em seguida, abra no navegador:

```
http://localhost:8000/index.html
```

Opção 3 — Executar backend (API + servidor estático) (recomendado para persistência):

- Pré-requisitos: `Node.js` (versão 16+ ou similar).
- Instale dependências e inicie o servidor a partir da pasta do projeto:

```powershell
# Como iniciar o projeto (instruções rápidas e claras)

Pré-requisitos (opcional):
- Para usar o backend com persistência: `Node.js` (v16+ recomendado).
- Para servir apenas arquivos estáticos sem backend: `python` (qualquer versão com `http.server`) ou abrir o arquivo diretamente.
Como iniciar o projeto

Pré-requisitos (opcional):
- Para usar o backend com persistência: `Node.js` (v16+ recomendado).
- Para servir apenas arquivos estáticos sem backend: `python` (qualquer versão com `http.server`) ou abra o arquivo diretamente.

Opções de execução:

1) Abrir localmente (modo offline / rápido)

- Abra o arquivo `index.html` diretamente no navegador (duplo-clique). Neste modo a aplicação funciona e usa `localStorage` para salvar dados no navegador.

2) Servidor HTTP simples (útil para testes estáticos)

- Execute na pasta do projeto:

```powershell
python -m http.server 8000
```

- Abra no navegador:

```
http://localhost:8000/index.html
```

Observação: usando apenas o servidor Python não haverá a API `/api/data`. O frontend tentará usar a API e, se não encontrada, fará fallback para `localStorage` (pode haver pequena latência no login enquanto detecta a API).

3) Executar o backend (recomendado — serve arquivos estáticos + API + persistência SQLite)

- Do diretório do projeto, instale dependências e inicie o servidor:

```powershell
npm install
npm start
```

- Em seguida abra no navegador:

```
http://localhost:3000/
```

- O servidor fornece:
  - API `GET /api/data` — lê os conjuntos de dados persistidos.
  - API `POST /api/data` — grava os conjuntos de dados (payload JSON com chaves: `ESTOQUE_DATA`, `DOACOES_DATA`, `COMPRAS_DATA`, `REFEICOES_DATA`).
  - Arquivo SQLite `data.db` criado na pasta do projeto para persistência.

Testes rápidos (após abrir a interface):

1. Faça login com as credenciais de teste:

- Usuário: `admin`
- Senha: `1234`

2. Criar um registro de doação / compra / alimento via os modals — isso deve persistir automaticamente:
- Se você estiver usando o backend (`npm start`), os dados serão salvos em `data.db`.
- Se estiver com o arquivo aberto diretamente ou no `python -m http.server`, os dados serão salvos em `localStorage` do navegador.

Como verificar a API manualmente (PowerShell):

```powershell
# GET
Invoke-RestMethod -Uri 'http://localhost:3000/api/data' -Method GET | ConvertTo-Json -Depth 5

# Exemplo de POST (substitua o JSON conforme necessário)
$body = @{ESTOQUE_DATA = @(@{id=1;nome='Teste';qty=5})} | ConvertTo-Json -Depth 10
Invoke-RestMethod -Uri 'http://localhost:3000/api/data' -Method POST -Body $body -ContentType 'application/json'
```

Observações e solução de problemas:
- Se abrir via `http://localhost:8000/index.html` (servidor Python) e o login "não funcionar", rode o backend (`npm start`) ou abra o arquivo diretamente; a diferença é a presença da API `/api/data` no backend.
- Mensagens de erro do `npm install` podem aparecer por dependências obsoletas — a instalação ainda é suficiente para executar o servidor. Execute `npm audit` para detalhes de segurança.
- O arquivo `data.db` deverá aparecer na pasta do projeto após o primeiro POST bem-sucedido.

Arquivos relevantes:
- `server.js` — servidor Express + SQLite (API `GET/POST /api/data`).
- `js/app.js` — frontend: tenta usar a API e faz fallback para `localStorage`.
- `data.db` — (gerado após gravação) banco SQLite com os dados persistidos.

Se quiser, posso também adicionar um pequeno script PowerShell para automatizar start + abrir o navegador.
```
