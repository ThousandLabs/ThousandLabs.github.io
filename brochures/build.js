/* Brochures des services Thousand Labs (1 page A4 chacune).
   Usage : node build.js   (Playwright + Chromium, police Inter installée)
   Le contenu est dans services.js ; ce fichier ne contient que la mise en page. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
eval(fs.readFileSync(path.join(__dirname, 'qr.js'), 'utf8'));
const PACKS = require('./services.js');
const ICON = {
  play: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>',
  apple: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="M9 12l2 2 4-4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  school: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  repeat: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  sync: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14.5c2.5 0 4.2 1.6 4.5 4.5"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v9h14v-9M7.5 8a2.5 2.5 0 1 1 4.5-1.5V8M16.5 8A2.5 2.5 0 1 0 12 6.5"/>'
};
const ic = (n, s = 16, c = 'currentColor') => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[n] || ''}</svg>`;
const qrSvg = (text, px) => { const m = QR.encode(text, 'M'), n = m.length, q = 2, t = n + q * 2; let d = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (m[y][x]) d += `M${x + q} ${y + q}h1v1h-1z`;
  return `<svg width="${px}" height="${px}" viewBox="0 0 ${t} ${t}" shape-rendering="crispEdges"><rect width="${t}" height="${t}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`; };
const LOGO = '<svg width="34" height="34" viewBox="0 -2 120 120"><path d="M20 102 V22 L60 72 L100 22 V102" fill="none" stroke="#fff" stroke-width="15"/><circle cx="60" cy="44" r="7" fill="#E8A317"/><circle cx="70" cy="27" r="4.5" fill="#E8A317"/></svg>';

function html(a) {
  const wa = 'https://wa.me/221711216581?text=' + encodeURIComponent('Bonjour, je souhaite réserver le ' + (a.name === 'Sunny English' ? 'pack Sunny English' : a.name) + '.');
  const blocks = a.blocks.map(b => `<div class="bl"><div class="bh"><span class="bi">${ic(b.i, 17)}</span><h3>${b.t}</h3></div><ul>${b.items.map(x => `<li>${ic('check', 13, a.accent)}<span>${x}</span></li>`).join('')}</ul></div>`).join('');
  const why = a.why.map(w => `<div class="wy"><div class="wt"><span class="bi">${ic(w[0], 16)}</span><b>${w[1]}</b></div><p>${w[2]}</p></div>`).join('');
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
  @page{size:A4;margin:0}*{box-sizing:border-box}html,body{margin:0}
  body{font-family:Inter,system-ui,sans-serif;color:#15233F;width:210mm;height:297mm;display:flex;flex-direction:column;font-size:10.3pt;line-height:1.4}
  .hd{background:#15233F;color:#fff;padding:11mm 15mm 8mm;position:relative;overflow:hidden;flex-shrink:0}
  .hd:after{content:"";position:absolute;right:-30mm;top:-30mm;width:90mm;height:90mm;border-radius:50%;background:${a.accent};opacity:.22}
  .br{display:flex;align-items:center;gap:9px;font-size:8.5pt;letter-spacing:2px;font-weight:700;opacity:.95}
  .kick{display:inline-block;margin-top:5mm;background:${a.accent};color:#fff;font-weight:700;font-size:8.5pt;letter-spacing:1px;text-transform:uppercase;padding:3px 10px;border-radius:99px}
  h1{font-size:28pt;line-height:1.05;margin:2.5mm 0 1.5mm;letter-spacing:-.5px}
  .tg{font-size:13pt;color:#E8A317;font-weight:600;margin:0}
  .hook{margin:4mm 0 0;color:#D5DCE8;max-width:150mm}
  main{padding:6mm 15mm 0;flex:1;min-height:0;display:flex;flex-direction:column;gap:3.6mm}
  .bls{display:grid;grid-template-columns:1fr 1fr;gap:3.6mm}.bls .bl:first-child{grid-column:1/3}
  .bl{border:1px solid #E3DFD6;border-radius:12px;padding:3.2mm 4.5mm;background:#fff}
  .bh{display:flex;align-items:center;gap:9px}.bh h3{margin:0;font-size:12.5pt}
  .bi{width:28px;height:28px;border-radius:8px;background:${a.soft};color:${a.accent};display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
  ul{list-style:none;margin:2mm 0 0;padding:0}li{display:flex;gap:7px;margin:1.1mm 0;align-items:flex-start}li svg{margin-top:3px;flex-shrink:0}
  .why{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}
  .wy{background:#F6F4EF;border-radius:12px;padding:3mm 3.5mm}.wt{display:flex;align-items:center;gap:8px;margin-bottom:1.5mm}.wy p{margin:0;color:#4A5568;font-size:9.6pt}
  .pr{display:flex;gap:5mm;align-items:stretch}
  .pc{flex:1;background:#15233F;color:#fff;border-radius:14px;padding:4mm 5.5mm;display:flex;flex-direction:column;justify-content:center}
  .pc .l{font-size:9pt;letter-spacing:1px;text-transform:uppercase;opacity:.75}.pc .p{font-size:28pt;font-weight:800;line-height:1.1}.pc .s{color:#D5DCE8;font-size:9.5pt}
  .cb{margin-top:3mm;display:flex;gap:7px;align-items:flex-start;background:rgba(232,163,23,.16);color:#fff;border:1px solid rgba(232,163,23,.6);border-radius:10px;padding:2.5mm 3mm;font-size:9.4pt}
  .cb svg{flex-shrink:0;margin-top:1px}
  .qc{width:52mm;border:1.5px solid #15233F;border-radius:14px;padding:4mm;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2mm}
  .qc b{font-size:10pt}.qc .n{font-size:15pt;font-weight:800;letter-spacing:.5px}.qc .m{font-size:8.5pt;color:#4A5568}
  footer{margin-top:auto;padding:3mm 15mm 5mm;display:flex;justify-content:space-between;font-size:8.5pt;color:#4A5568;border-top:1px solid #E3DFD6}
  </style></head><body>
  <div class="hd"><div class="br">${LOGO}<span>THOUSAND LABS</span></div>
  <span class="kick">${a.kicker}</span><h1>${a.name}</h1><p class="tg">${a.tagline}</p><p class="hook">${a.hook}</p></div>
  <main><div class="bls">${blocks}</div><div class="why">${why}</div>
  <div class="pr"><div class="pc"><span class="l">Tarif</span><span class="p">${a.price}</span><span class="s">${a.priceSub}</span><div class="cb">${ic('gift', 15, '#E8A317')}<span>${a.combo}</span></div></div>
  <div class="qc"><b>Réserver ton installation</b>${qrSvg(wa, 80)}<span class="n">71 121 65 81</span><span class="m">WhatsApp · scanne le QR code</span></div></div></main>
  <footer><span>${a.name} · Thousand Labs · Service étudiant, ISM Dakar</span><span>thousandlabs.github.io</span></footer>
  </body></html>`;
}
(async () => {
  const only = process.argv[2], out = path.join(__dirname, '..');
  const b = await chromium.launch(); const pg = await b.newPage();
  for (const a of PACKS) { if (only && a.id !== only) continue;
    await pg.setContent(html(a), { waitUntil: 'load' });
    const over = await pg.evaluate(() => { const f = document.querySelector('footer').getBoundingClientRect(), m = document.querySelector('main'); return Math.max(0, m.scrollHeight - m.clientHeight, Math.round(f.bottom - document.body.clientHeight)); });
    await pg.pdf({ path: path.join(out, a.pdf), format: 'A4', printBackground: true });
    console.log(a.pdf, 'débordement (px) :', over); }
  await b.close();
})();
