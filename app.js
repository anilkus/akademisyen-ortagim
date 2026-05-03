/* ═══════════════════════════════════════
   Akademisyen Ortağım — app.js
   ═══════════════════════════════════════ */

// ── State ──────────────────────────────
let freeLeft      = 5;
let matchRun      = false;
let activeMethods = new Set();
let curIdx        = null;
let curTpl        = 'tubitak';
let acceptedIds   = new Set();
let inboxPerson   = null;

// ── Page navigation ─────────────────────
function gp(p) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('on'));
  document.querySelectorAll('.nl:not(.cta)').forEach(el => el.classList.remove('active'));
  document.getElementById('pg-' + p).classList.add('on');
  const navBtn = document.getElementById('nl-' + p);
  if (navBtn) navBtn.classList.add('active');
  if (p === 'proj') renderProjects('all');
  if (p === 'uni')  renderUnis('');
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ── Profile method toggle ───────────────
function toggleMethod(m) {
  const el = document.getElementById('um-' + m);

  // If already selected → deselect
  if (activeMethods.has(m)) {
    activeMethods.delete(m);
    el.classList.remove('done');
    el.querySelector('.um-txt').style.color = '';
    const originals = { cv: 'PDF / DOCX', li: 'Profil linki', sc: 'Author ID', or: '0000-xxxx', gh: 'Kullanıcı adı' };
    const sub = el.querySelector('.um-sub');
    sub.textContent = originals[m];
    sub.style.color = '';
    document.getElementById('btn-match').style.display = activeMethods.size > 0 ? 'block' : 'none';
    return;
  }

  // Prompt for input
  const labels = {
    cv:  null,
    li:  'LinkedIn profil linkinizi girin:',
    sc:  'Scopus Author ID\'nizi girin:',
    or:  'ORCID numaranızı girin (0000-xxxx-xxxx-xxxx):',
    gh:  'GitHub kullanıcı adınızı girin:'
  };
  const defaults = {
    cv:  null,
    li:  'https://linkedin.com/in/kullanici-adi',
    sc:  '12345678900',
    or:  '0000-0001-2345-6789',
    gh:  'kullanici-adi'
  };

  let value;
  if (m === 'cv') {
    // Simulate file picker
    value = 'ozgecmis.pdf';
  } else {
    value = window.prompt(labels[m], defaults[m]);
    if (value === null || !value.trim()) return; // cancelled
    value = value.trim();
  }

  activeMethods.add(m);
  el.classList.add('done');
  el.querySelector('.um-txt').style.color = 'var(--teal3)';

  const sub = el.querySelector('.um-sub');
  const short = value.length > 22 ? value.slice(0, 20) + '…' : value;
  sub.textContent = '✓ ' + short;
  sub.style.color = 'var(--teal3)';

  document.getElementById('btn-match').style.display = 'block';
}

// ── Run match ──────────────────────────
function runMatch() {
  if (matchRun) return;
  if (activeMethods.size === 0) return;

  matchRun = true;
  const btn = document.getElementById('btn-match');
  btn.disabled = true;

  const steps = [
    'Profil analiz ediliyor…',
    'Yayınlar taranıyor…',
    'Araştırma alanları eşleştiriliyor…',
    'Uyum skorları hesaplanıyor…',
    'Eşleşmeler bulundu ✓'
  ];

  let s = 0;
  btn.textContent = steps[0];

  const iv = setInterval(() => {
    s++;
    if (s < steps.length - 1) {
      btn.textContent = steps[s];
    } else {
      clearInterval(iv);
      btn.textContent = steps[steps.length - 1];
      btn.style.background = 'var(--teal2)';
      document.getElementById('ml-badge').textContent = PEOPLE.length + ' eşleşme bulundu';
      drawMap();
      buildList();
      setTimeout(triggerDiamond, 600);
    }
  }, 650);
}

// ── Draw map nodes & lines ──────────────
function drawMap() {
  const nl = document.getElementById('map-lines');
  const nn = document.getElementById('map-nodes');
  nl.innerHTML = '';
  nn.innerHTML = '';

  const cities = ['Ankara', 'İzmir', 'Trabzon', 'Erzurum', 'Konya'];

  PEOPLE.forEach((p, i) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', 197); line.setAttribute('y1', 165);
    line.setAttribute('x2', p.cx); line.setAttribute('y2', p.cy);
    line.style.stroke = p.col;
    line.style.opacity = '.42';
    line.setAttribute('stroke-width', '1');
    line.classList.add('la');
    nl.appendChild(line);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.style.cursor = 'pointer';
    g.setAttribute('onclick', `openProf(${i})`);
    g.setAttribute('onmouseenter', `showMapTip(event,'${p.name}','${p.uni}','${p.alan}')`);
    g.setAttribute('onmouseleave', 'hideMapTip()');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p.cx); circle.setAttribute('cy', p.cy);
    circle.setAttribute('r', '8'); circle.setAttribute('fill', p.col); circle.setAttribute('opacity', '.88');

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', p.cx); dot.setAttribute('cy', p.cy);
    dot.setAttribute('r', '3.5'); dot.setAttribute('fill', 'rgba(255,255,255,.75)');

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', p.cx); label.setAttribute('y', p.cy + 17);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('class', 'map-lbl');
    label.textContent = cities[i] || '';

    g.appendChild(circle); g.appendChild(dot); g.appendChild(label);
    nn.appendChild(g);
  });
}

// ── Diamond burst animation ─────────────
function triggerDiamond() {
  const layer = document.getElementById('dmnd-layer');
  layer.innerHTML = '';

  const positions = [{ x: 197, y: 165 }, ...PEOPLE.map(p => ({ x: p.cx, y: p.cy }))];
  const colors = ['#c9a84c', '#8890e0', '#6dcfbf', '#f09060', '#c9a84c', '#3da090'];

  positions.forEach((pos, i) => {
    setTimeout(() => {
      const d = document.createElement('div');
      d.style.cssText = `position:absolute;left:${pos.x}px;top:${pos.y}px;width:14px;height:14px;background:${colors[i%colors.length]};opacity:0;animation:dmndPop .9s ease-out forwards;box-shadow:0 0 12px ${colors[i%colors.length]}88;`;
      layer.appendChild(d);
      for (let r = 0; r < 3; r++) {
        const sd = document.createElement('div');
        const size = 5 + r * 4;
        sd.style.cssText = `position:absolute;left:${pos.x}px;top:${pos.y}px;width:${size}px;height:${size}px;background:${colors[i%colors.length]};opacity:0;animation:dmndPop ${0.6+r*0.18}s ease-out forwards;animation-delay:${r*0.07}s;`;
        layer.appendChild(sd);
      }
    }, i * 110);
  });

  setTimeout(() => { layer.innerHTML = ''; }, 2800);
}

// ── Build match card list ───────────────
function buildList() {
  const ml = document.getElementById('mlist');
  ml.innerHTML = '';

  PEOPLE.forEach((p, i) => {
    const locked   = i >= freeLeft && !acceptedIds.has(i);
    const accepted = acceptedIds.has(i);
    const card = document.createElement('div');
    card.className = 'mc' + (i === 0 ? ' top' : '');
    card.style.position = 'relative';

    const nameTxt = locked ? `<span style="filter:blur(5px);user-select:none">${p.name}</span>` : p.name;
    const uniTxt  = locked ? `<span style="filter:blur(4px);user-select:none">${p.uni}</span>`  : p.uni;
    const accPill = accepted ? `<span class="acc-pill"><span class="acc-dot"></span>Eşleşildi</span>` : '';
    const actions = !locked ? `
      <div class="mc-acts">
        <button class="act act-y" onclick="openProf(${i})">Profili Gör</button>
        <button class="act act-o" onclick="openCollab(${i})">İşbirliği Teklif Et</button>
      </div>` : '';
    const lockOverlay = locked ? `
      <div class="lock-o">
        <span class="lock-t">Üye ol, profili gör</span>
        <button class="btn-lk" onclick="ovp('vp-ug')">Üye Ol</button>
      </div>` : '';

    card.innerHTML = `
      <div class="ava ${p.avc}">${p.ini}</div>
      <div class="mc-inf">
        <div class="mc-n">${nameTxt}${accPill}</div>
        <div class="mc-u">${uniTxt}</div>
        <div class="mc-ts">${p.tags.map(t => `<span class="mt ${t.c}">${t.l}</span>`).join('')}</div>
        ${actions}
      </div>
      <div class="mc-sc"><div class="sc-n">${p.score}%</div><div class="sc-l">uyum</div></div>
      ${lockOverlay}`;
    ml.appendChild(card);
  });

  document.getElementById('free-n').textContent = freeLeft;
  document.getElementById('ml-badge').textContent =
    freeLeft > 0 ? `${PEOPLE.length} eşleşme · ${freeLeft} hak kaldı` : 'Ücretsiz hak tükendi';
}

// ── Map tooltip ─────────────────────────
const mapTt = document.getElementById('map-tt');
function showMapTip(e, n, u, f) {
  mapTt.innerHTML = `<div class="tt-n">${n}</div><div class="tt-u">${u}</div><div class="tt-f">${f}</div>`;
  mapTt.style.display = 'block';
  const rect = document.getElementById('map-svg').getBoundingClientRect();
  mapTt.style.left = (e.clientX - rect.left + 14) + 'px';
  mapTt.style.top  = (e.clientY - rect.top  - 55) + 'px';
}
function hideMapTip() { mapTt.style.display = 'none'; }

// ── Modal helpers ───────────────────────
function ovp(id) { document.getElementById(id).classList.add('on'); }
function cvp(id) { document.getElementById(id).classList.remove('on'); }
function cvpif(e, id) { if (e.target === document.getElementById(id)) cvp(id); }

// ── Open profile ────────────────────────
function openProf(i) {
  if (!matchRun) { gp('match'); return; }
  if (i >= freeLeft && !acceptedIds.has(i)) { ovp('vp-ug'); return; }

  curIdx = i;
  const p = PEOPLE[i];
  const d = p.det;

  document.getElementById('pr-ava').textContent  = p.ini;
  document.getElementById('pr-ava').className    = 'mb-ava ' + p.avc;
  document.getElementById('pr-name').textContent = p.name;
  document.getElementById('pr-uni').textContent  = p.uni;

  document.getElementById('pr-body').innerHTML = `
    <div class="pr-row"><div class="pr-l">Unvan</div><div class="pr-v">${d.unvan}</div></div>
    <div class="pr-row"><div class="pr-l">Kurum</div><div class="pr-v">${d.kurum}</div></div>
    <div class="pr-row"><div class="pr-l">Araştırma</div><div class="pr-v">${d.konu}</div></div>
    <div class="pr-row"><div class="pr-l">Yayınlar</div><div class="pr-v">${d.yayinlar.map(y => `<span class="pub-t">${y}</span>`).join('')}</div></div>
    <div class="pr-row"><div class="pr-l">Hibe</div><div class="pr-v">${d.hibe}</div></div>
    <div class="pr-row"><div class="pr-l">ORCID</div><div class="pr-v" style="font-size:10px;color:var(--ind3)">${d.orcid}</div></div>`;

  const notif = document.getElementById('notif-ok');
  notif.classList.remove('on');

  if (acceptedIds.has(i)) {
    document.getElementById('pr-btns').style.display = 'none';
    notif.textContent = 'Eşleşildi. İşbirliği teklifini gönderebilirsiniz.';
    notif.classList.add('on');
  } else {
    document.getElementById('pr-btns').style.display = 'flex';
  }
  ovp('vp-prof');
}

// ── Accept match ────────────────────────
function acceptMatch() {
  if (curIdx === null) return;
  freeLeft = Math.max(0, freeLeft - 1);
  acceptedIds.add(curIdx);

  document.getElementById('pr-btns').style.display = 'none';
  const notif = document.getElementById('notif-ok');
  notif.textContent = 'Karşı tarafa bildirim gönderildi. Kabul ederlerse bağlantı kurulacak.';
  notif.classList.add('on');

  buildList();
  triggerDiamond();

  inboxPerson = PEOPLE[curIdx];
  setTimeout(() => {
    document.getElementById('inbox-t').textContent =
      `${inboxPerson.name} eşleşme teklifinizi kabul etti! Hemen işbirliği teklifinde bulunun.`;
    document.getElementById('inbox').classList.add('on');
  }, 2000);

  if (freeLeft === 0) {
    setTimeout(() => { cvp('vp-prof'); ovp('vp-ug'); }, 2800);
  }
}

// ── Inbox collab shortcut ───────────────
function openInboxCollab() {
  if (!inboxPerson) return;
  document.getElementById('inbox').classList.remove('on');
  openCollab(PEOPLE.indexOf(inboxPerson));
}

// ── Open collab modal ───────────────────
function openCollab(i) {
  if (i >= freeLeft && !acceptedIds.has(i)) { ovp('vp-ug'); return; }
  curIdx = i;
  const p = PEOPLE[i];

  document.getElementById('col-ava').textContent = p.ini;
  document.getElementById('col-ava').className   = 'mb-ava ' + p.avc;
  document.getElementById('col-ttl').textContent = 'İşbirliği → ' + p.name;
  document.getElementById('col-sub').textContent = 'Şablon seç, doldur, gönder';

  document.getElementById('col-main').style.display = 'block';
  const suc = document.getElementById('col-suc');
  suc.classList.remove('on');
  suc.style.display = 'none';

  document.querySelectorAll('.tpo').forEach(b => b.classList.remove('on'));
  document.querySelector('.tpo').classList.add('on');
  curTpl = 'tubitak';
  renderTpl(p);
  ovp('vp-col');
}

function setTpl(btn, id) {
  document.querySelectorAll('.tpo').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  curTpl = id;
  renderTpl(PEOPLE[curIdx]);
}

function renderTpl(p) {
  document.getElementById('cform').innerHTML = TMPLS[curTpl].build(p);
}

function addMR(btn) {
  const row = document.createElement('div');
  row.className = 'add-row';
  row.innerHTML = '<input class="fin" placeholder="Ad Soyad — Rolü"/>';
  btn.parentNode.parentNode.insertBefore(row, btn.parentNode);
}

function sendCollab() {
  if (curIdx === null) return;
  const p = PEOPLE[curIdx];
  const tname = TMPLS[curTpl].name;
  const firstInput = document.querySelector('#cform .fin');
  const title = firstInput ? (firstInput.value || '(Başlık girilmedi)') : '—';

  document.getElementById('col-main').style.display = 'none';
  const suc = document.getElementById('col-suc');
  suc.innerHTML = `
    <div class="suc-ic">✓</div>
    <div class="suc-h">Teklif Gönderildi!</div>
    <p class="suc-p">${p.name} adresine iletildi.<br>Yanıt geldiğinde bildirim alacaksınız.</p>
    <div class="suc-det">
      <div class="sd-r"><div class="sd-l">Tür</div><div>${tname}</div></div>
      <div class="sd-r"><div class="sd-l">Başlık</div><div>${title}</div></div>
      <div class="sd-r"><div class="sd-l">Tarih</div><div>${new Date().toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'})}</div></div>
      <div class="sd-r"><div class="sd-l">Durum</div><div style="color:var(--teal3);font-weight:600">Yanıt bekleniyor</div></div>
    </div>`;
  suc.classList.add('on');
  suc.style.display = 'block';
}

// ── Projects page ───────────────────────
const PBG = { tubitak:'pb-t', makale:'pb-m', sempozyum:'pb-s', diger:'pb-b' };
const PLB = { tubitak:'TÜBİTAK', makale:'Makale', sempozyum:'Sempozyum', diger:'Diğer' };

function filterProj(btn, f) {
  document.querySelectorAll('.pf').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderProjects(f);
}

function renderProjects(f) {
  const list = document.getElementById('proj-list');
  list.innerHTML = '';
  PROJECTS.filter(p => f === 'all' || p.type === f).forEach(p => {
    const card = document.createElement('div');
    card.className = 'pj';
    card.innerHTML = `
      <div class="pj-top">
        <div class="pj-title">${p.title}</div>
        <div class="pj-badge ${PBG[p.type]}">${PLB[p.type]}</div>
      </div>
      <div class="pj-meta">
        <div class="pj-m">${p.uni1} <span>×</span> ${p.uni2}</div>
        <div class="pj-m">Bütçe: <span>${p.budget}</span></div>
        <div class="pj-m">Durum: <span>${p.status}</span></div>
      </div>
      <div class="pj-members">${p.members.map(m => `<span class="pmem">${m}</span>`).join('')}</div>`;
    list.appendChild(card);
  });
}

// ── Universities page ───────────────────
function filterUni(q) { renderUnis(q); }

function renderUnis(q) {
  const grid = document.getElementById('uni-grid');
  grid.innerHTML = '';
  const lower = q.toLowerCase();
  UNIS.filter(u => !q || u.name.toLowerCase().includes(lower) || u.city.toLowerCase().includes(lower)).forEach(u => {
    const card = document.createElement('div');
    card.className = 'uc';
    card.innerHTML = `
      <div class="uc-name">${u.name}</div>
      <div class="uc-city">${u.city}</div>
      <div class="uc-stats">
        <div class="uc-s">Akademisyen: <span>${u.aka.toLocaleString('tr')}</span></div>
        <div class="uc-s">Proje: <span>${u.prj}</span></div>
      </div>
      <div class="uc-tags">${u.tags.map(t => `<span class="uc-tag">${t}</span>`).join('')}</div>`;
    grid.appendChild(card);
  });
}

// ── Init ────────────────────────────────
renderUnis('');
renderProjects('all');
