#!/usr/bin/env node
/**
 * Voluntad Visible — demostrador offline NO OFICIAL.
 * Sólo fixture propio sintético; estado efímero en memoria.
 * No acepta datos reales, red, publicación, alertas ni despacho.
 */
const fixture = [
  { id: 'S1', text: 'SINTÉTICO: aniego visible cerca del parque central, sector Norte.' },
  { id: 'S2', text: 'SINTÉTICO: aniego visible cerca del parque central, sector Norte.' },
  { id: 'S3', text: 'SINTÉTICO: vía bloqueada por barro en sector Sur.' },
  { id: 'S4', text: 'SINTÉTICO: se ve complicado por ahí, no sé exactamente dónde.' },
  { id: 'S5', text: 'SINTÉTICO: desborde de canal junto al mercado, sector Este.' }
];

function baseline(text) {
  const t = text.toLowerCase();
  if (t.includes('aniego')) return 'aniego';
  if (t.includes('bloqueada')) return 'vía bloqueada';
  if (t.includes('desborde')) return 'desborde';
  return null;
}

function extract(text) {
  const t = text.toLowerCase();
  const type = t.includes('aniego') ? 'aniego' : t.includes('bloqueada') ? 'vía bloqueada' : t.includes('desborde') ? 'desborde' : null;
  const sector = t.match(/sector (norte|sur|este|oeste)/)?.[1] ?? null;
  const confidence = type && sector ? 0.94 : 0.18;
  return { type, sector, confidence, abstained: confidence < 0.7, missing: [!type && 'tipo', !sector && 'sector'].filter(Boolean) };
}

function run() {
  console.log('DEMO=Voluntad Visible | STATUS=DEMOSTRADOR NO OFICIAL');
  console.log('DATA=SINTÉTICA | MODE=memory-only | NETWORK=none');
  console.log('WARNING=Sólo simulación local: no aceptar datos reales, no alerta oficial, no publicación, no despacho.');
  const rows = fixture.map((message) => ({ ...message, baseline: baseline(message.text), extraction: extract(message.text) }));
  const seen = new Map();
  for (const row of rows) {
    const key = `${row.extraction.type}|${row.extraction.sector}`;
    row.possibleDuplicate = !row.extraction.abstained && seen.has(key);
    if (!row.extraction.abstained && !seen.has(key)) seen.set(key, row.id);
    row.moderation = row.id === 'S1' ? 'confirmación simulada' : row.id === 'S4' ? 'pendiente: abstención simulada' : 'sin acción simulada';
  }
  const checks = {
    fiveSynthetic: rows.length === 5 && rows.every((row) => row.text.startsWith('SINTÉTICO:')),
    extraction: rows.every((row) => row.extraction && 'confidence' in row.extraction),
    baseline: rows.every((row) => 'baseline' in row),
    duplicate: rows.find((row) => row.possibleDuplicate)?.id === 'S2',
    abstention: rows.find((row) => row.id === 'S4')?.extraction.abstained === true,
    moderationSimulation: rows.every((row) => row.moderation.endsWith('simulada') || row.moderation === 'sin acción simulada')
  };
  for (const row of rows) console.log(JSON.stringify(row));
  console.log(`CHECKS=${JSON.stringify(checks)}`);
  const pass = Object.values(checks).every(Boolean);
  console.log(`RESULT=${JSON.stringify({ pass, persistentState: false, network: false, officialAction: false })}`);
  rows.length = 0;
  seen.clear();
  if (!pass) process.exitCode = 1;
}
run();
