const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data.db');

// init sqlite
const db = new sqlite3.Database(DB_FILE);
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS storage (key TEXT PRIMARY KEY, value TEXT)');
  // Seed DB with default mock data so server mode matches file:// index view
  try {
    const seed = require('./seed_data.json');
    Object.keys(seed).forEach((k) => {
      db.get('SELECT value FROM storage WHERE key = ?', [k], (err, row) => {
        if (err) return console.error('DB read error during seed:', err);
        if (!row) {
          db.run('INSERT INTO storage (key, value) VALUES (?, ?)', [k, JSON.stringify(seed[k])], (e) => {
            if (e) console.error('DB seed insert error for', k, e);
          });
        }
      });
    });
  } catch (e) {
    console.warn('No seed data found or error loading seed:', e && e.message);
  }
});

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname)));

function getValue(key) {
  return new Promise((resolve, reject) => {
    db.get('SELECT value FROM storage WHERE key = ?', [key], (err, row) => {
      if (err) return reject(err);
      resolve(row ? row.value : null);
    });
  });
}

function setValue(key, value) {
  return new Promise((resolve, reject) => {
    db.run('REPLACE INTO storage (key, value) VALUES (?, ?)', [key, value], function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
}

app.get('/api/data', async (req, res) => {
  try {
    const keys = ['ESTOQUE_DATA', 'DOACOES_DATA', 'COMPRAS_DATA', 'REFEICOES_DATA', 'MOVIMENTACOES_DATA'];
    const out = {};
    for (const k of keys) {
      const v = await getValue(k);
      out[k] = v ? JSON.parse(v) : null;
    }
    res.json(out);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'db error' });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const payload = req.body || {};
    const promises = Object.keys(payload).map((k) => setValue(k, JSON.stringify(payload[k])));
    await Promise.all(promises);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'db error' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
