const STORAGE_KEY = 'jhnfinn_state_v6_unified';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const ILLUSTRATIONS = {
  wallet: `
    <svg class="illustration-wallet" viewBox="0 0 110 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wShadow" x="0" y="10" width="110" height="86" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.22"/>
        </filter>
        <linearGradient id="billGrad1" x1="25" y1="8" x2="85" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
        <linearGradient id="billGrad2" x1="30" y1="4" x2="90" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#86efac"/>
          <stop offset="100%" stop-color="#16a34a"/>
        </linearGradient>
        <linearGradient id="leatherBody" x1="18" y1="26" x2="92" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#374151"/>
          <stop offset="45%" stop-color="#1f2937"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="leatherFlap" x1="62" y1="46" x2="98" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#4b5563"/>
          <stop offset="100%" stop-color="#111827"/>
        </linearGradient>
      </defs>
      <g filter="url(#wShadow)">
        <rect x="20" y="24" width="68" height="50" rx="10" transform="rotate(-6 20 24)" fill="#111827"/>
        <g transform="rotate(-11 30 22)">
          <rect x="26" y="12" width="58" height="32" rx="4" fill="url(#billGrad1)" stroke="#bbf7d0" stroke-width="1"/>
          <circle cx="55" cy="28" r="8" fill="#14532d" fill-opacity="0.25"/>
        </g>
        <g transform="rotate(-5 34 18)">
          <rect x="30" y="10" width="58" height="32" rx="4" fill="url(#billGrad2)" stroke="#dcfce7" stroke-width="1"/>
          <rect x="34" y="14" width="50" height="24" rx="2" stroke="#14532d" stroke-opacity="0.3" stroke-dasharray="2 2"/>
          <text x="64" y="26" fill="#052e16" font-size="9" font-weight="800" font-family="Inter, sans-serif">100</text>
        </g>
        <rect x="18" y="30" width="72" height="52" rx="11" transform="rotate(-4 18 30)" fill="url(#leatherBody)"/>
        <rect x="22" y="34" width="64" height="44" rx="8" transform="rotate(-4 22 34)" stroke="#6b7280" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="3 3"/>
        <rect x="64" y="47" width="28" height="18" rx="6" transform="rotate(-4 64 47)" fill="url(#leatherFlap)" stroke="#374151" stroke-width="1"/>
        <circle cx="73" cy="55" r="4.5" fill="#e5e7eb" stroke="#6b7280" stroke-width="1"/>
        <circle cx="72" cy="54" r="1.5" fill="#ffffff"/>
      </g>
    </svg>
  `,
  calendar: `
    <svg class="illustration-calendar" viewBox="0 0 90 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="calShadow" x="0" y="4" width="90" height="80" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#1e3a8a" flood-opacity="0.18"/>
        </filter>
        <linearGradient id="calTop" x1="20" y1="12" x2="78" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="coinGold" x1="12" y1="46" x2="40" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="50%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#a16207"/>
        </linearGradient>
      </defs>
      <g filter="url(#calShadow)">
        <path d="M28 22L78 16L84 62L34 68Z" fill="#cbd5e1"/>
        <g transform="rotate(-8 22 18)">
          <rect x="20" y="16" width="54" height="50" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
          <path d="M20 24C20 19.5817 23.5817 16 28 16H66C70.4183 16 74 19.5817 74 24V30H20V24Z" fill="url(#calTop)"/>
          <rect x="29" y="11" width="4" height="9" rx="2" fill="#94a3b8"/>
          <rect x="45" y="11" width="4" height="9" rx="2" fill="#94a3b8"/>
          <rect x="61" y="11" width="4" height="9" rx="2" fill="#94a3b8"/>
          <rect x="27" y="36" width="8" height="6" rx="1.5" fill="#93c5fd"/>
          <rect x="38" y="36" width="8" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="49" y="36" width="8" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="60" y="36" width="7" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="27" y="45" width="8" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="38" y="45" width="8" height="6" rx="1.5" fill="#3b82f6"/>
          <rect x="49" y="45" width="8" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="60" y="45" width="7" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="27" y="54" width="8" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="38" y="54" width="8" height="6" rx="1.5" fill="#cbd5e1"/>
          <rect x="49" y="54" width="8" height="6" rx="1.5" fill="#93c5fd"/>
        </g>
        <circle cx="25" cy="60" r="13" fill="url(#coinGold)" stroke="#fef08a" stroke-width="1.5"/>
        <circle cx="25" cy="60" r="9.5" stroke="#ca8a04" stroke-width="1" stroke-dasharray="2 1"/>
        <text x="25" y="63.5" text-anchor="middle" fill="#713f12" font-size="9" font-weight="800" font-family="Inter, sans-serif">R$</text>
      </g>
    </svg>
  `,
  scale: `
    <svg class="illustration-scale" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="scShadow" x="0" y="4" width="90" height="76" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.16"/>
        </filter>
        <linearGradient id="metalGrad" x1="30" y1="10" x2="60" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="50%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      <g filter="url(#scShadow)">
        <ellipse cx="45" cy="68" rx="18" ry="5" fill="url(#metalGrad)"/>
        <rect x="42.5" y="16" width="5" height="52" rx="2.5" fill="url(#metalGrad)"/>
        <circle cx="45" cy="15" r="5" fill="#334155"/>
        <line x1="16" y1="22" x2="74" y2="22" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="18" y1="22" x2="11" y2="46" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="18" y1="22" x2="25" y2="46" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="72" y1="22" x2="65" y2="46" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="72" y1="22" x2="79" y2="46" stroke="#94a3b8" stroke-width="1.2"/>
        <circle cx="18" cy="41" r="7.5" fill="#2563eb"/>
        <circle cx="15.5" cy="38.5" r="2" fill="#93c5fd"/>
        <circle cx="72" cy="41" r="7.5" fill="#f43f5e"/>
        <circle cx="69.5" cy="38.5" r="2" fill="#fda4af"/>
        <path d="M8 45H28C26 51 10 51 8 45Z" fill="url(#metalGrad)"/>
        <path d="M62 45H82C80 51 64 51 62 45Z" fill="url(#metalGrad)"/>
      </g>
    </svg>
  `,
  card: `
    <svg class="illustration-card" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cardShadow" x="0" y="4" width="88" height="68" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#1d4ed8" flood-opacity="0.25"/>
        </filter>
        <linearGradient id="blueCard3D" x1="12" y1="14" x2="76" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="45%" stop-color="#2563eb"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </linearGradient>
      </defs>
      <g filter="url(#cardShadow)" transform="rotate(-10 44 36)">
        <rect x="14" y="16" width="60" height="38" rx="7" fill="url(#blueCard3D)" stroke="#93c5fd" stroke-width="1"/>
        <rect x="22" y="29" width="12" height="9" rx="2" fill="#facc15" stroke="#ca8a04" stroke-width="0.8"/>
        <line x1="22" y1="33.5" x2="34" y2="33.5" stroke="#ca8a04" stroke-width="0.7"/>
        <rect x="22" y="43" width="24" height="3" rx="1.5" fill="#bfdbfe" fill-opacity="0.6"/>
        <circle cx="62" cy="44" r="4" fill="#38bdf8" fill-opacity="0.7"/>
        <circle cx="58" cy="44" r="4" fill="#93c5fd" fill-opacity="0.7"/>
      </g>
    </svg>
  `,
  house: `
    <svg class="illustration-house" viewBox="0 0 92 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="houseShadow" x="0" y="6" width="92" height="74" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.16"/>
        </filter>
        <linearGradient id="roofGrad" x1="20" y1="14" x2="72" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
      </defs>
      <g filter="url(#houseShadow)">
        <ellipse cx="46" cy="64" rx="34" ry="8" fill="#86efac"/>
        <rect x="56" y="16" width="8" height="16" rx="1.5" fill="#cbd5e1"/>
        <rect x="24" y="34" width="44" height="28" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>
        <path d="M17 36L46 14L75 36H17Z" fill="url(#roofGrad)" stroke="#3b82f6" stroke-linejoin="round"/>
        <rect x="31" y="45" width="10" height="17" rx="2" fill="#b45309"/>
        <rect x="47" y="42" width="13" height="11" rx="2" fill="#fde047" stroke="#eab308" stroke-width="1"/>
        <line x1="53.5" y1="42" x2="53.5" y2="53" stroke="#eab308" stroke-width="1"/>
        <line x1="47" y1="47.5" x2="60" y2="47.5" stroke="#eab308" stroke-width="1"/>
        <circle cx="22" cy="59" r="6" fill="#22c55e"/>
        <circle cx="27" cy="61" r="4.5" fill="#16a34a"/>
        <circle cx="70" cy="59" r="6" fill="#22c55e"/>
        <circle cx="65" cy="61" r="4.5" fill="#16a34a"/>
      </g>
    </svg>
  `,
  obra: `
    <svg class="illustration-obra" viewBox="0 0 92 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="obraShadow" x="0" y="6" width="92" height="74" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.18"/>
        </filter>
        <linearGradient id="helmetGrad" x1="26" y1="12" x2="68" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="55%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <g filter="url(#obraShadow)">
        <rect x="18" y="50" width="28" height="16" rx="2.5" fill="#94a3b8" stroke="#64748b"/>
        <rect x="22" y="54" width="8" height="8" rx="1" fill="#475569"/>
        <rect x="34" y="54" width="8" height="8" rx="1" fill="#475569"/>
        <rect x="46" y="50" width="28" height="16" rx="2.5" fill="#cbd5e1" stroke="#64748b"/>
        <rect x="50" y="54" width="8" height="8" rx="1" fill="#64748b"/>
        <rect x="62" y="54" width="8" height="8" rx="1" fill="#64748b"/>
        <rect x="30" y="36" width="32" height="15" rx="2.5" fill="#e2e8f0" stroke="#94a3b8"/>
        <path d="M28 34C28 21.8497 36.5066 13 47 13C57.4934 13 66 21.8497 66 34H28Z" fill="url(#helmetGrad)"/>
        <path d="M43 12H51V33H43V12Z" fill="#fbbf24" fill-opacity="0.6"/>
        <path d="M24 33H70C71.6569 33 73 34.3431 73 36C73 37.6569 71.6569 39 70 39H24C22.3431 39 21 37.6569 21 36C21 34.3431 22.3431 33 24 33Z" fill="#f59e0b"/>
      </g>
    </svg>
  `
};

const MORADIA_ICONS = {
  key: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
  cone: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 7 15H5L12 3z"/><path d="M3 21h18"/></svg>`,
  card: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  building: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01"/></svg>`,
  bolt: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  wifi: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`
};

function createEmptyWorkspace() {
  return {
    selectedBillDay: 5,
    moradiaScope: 'individual',
    activeCardIndex: 0,
    activeInvoiceIdx: 0,
    pixSettled: false,
    salaryYou: 0,
    salaryPartner: 0,
    personalBillsYou: 0,
    dailyExpensesYou: 0,
    lancamentos: [],
    houseBills: [],
    payableBills: [],
    cards: [],
    upcomingInvoices: [
      { label: 'Nov 26', status: 'Aberta', amount: 0 },
      { label: 'Dez 26', status: '', amount: 0 },
      { label: 'Jan 27', status: '', amount: 0 }
    ],
    obra: {
      title: 'Obra / Projeto',
      amount: 0,
      description: 'Clique aqui para definir valor e descrição'
    },
    reserva: {
      totalSaved: 0,
      monthlyGoal: 0,
      targetEmergency: 0,
      savePctOfLeftover: 70,
      pctEmergency: 40,
      pctInvest: 30,
      pctShortTerm: 20,
      pctFree: 10
    }
  };
}

function getCleanInitialState() {
  const now = new Date();
  return {
    theme: 'light',
    mode: 'solo',
    soloProfileName: 'JHN',
    soloProfileInitial: 'J',
    coupleActiveProfile: 'voce',
    activeTab: 'visao-geral',
    history: ['visao-geral'],
    historyIndex: 0,
    monthIndex: now.getMonth(),
    year: now.getFullYear(),
    workspaces: {
      solo: createEmptyWorkspace(),
      casal: createEmptyWorkspace()
    }
  };
}

function normalizeState(parsed) {
  const base = getCleanInitialState();
  const src = parsed && typeof parsed === 'object' ? parsed : {};
  return {
    ...base,
    ...src,
    workspaces: {
      solo: { ...createEmptyWorkspace(), ...(src.workspaces?.solo || {}) },
      casal: { ...createEmptyWorkspace(), ...(src.workspaces?.casal || {}) }
    }
  };
}

/* =========================================================
   COFRE CRIPTOGRAFADO (Web Crypto API)
   - Chave: PBKDF2-SHA256 (310.000 iterações) + salt aleatório de 128 bits
   - Cifra: AES-256-GCM (confidencialidade + integridade), IV aleatório a cada gravação
   - Canal de sincronização derivado da senha (nunca fica no código-fonte)
   - Nada em texto puro é gravado no aparelho nem enviado para a nuvem
   ========================================================= */
const VAULT_STORAGE_KEY = 'jhnfinn_vault_v1';
const VAULT_SESSION_KEY = 'jhnfinn_vault_session_v1';
const VAULT_NOTICE_KEY = 'jhnfinn_vault_notice';
const VAULT_MIN_PASSWORD = 8;

const VaultCrypto = {
  ITERATIONS: 310000,
  TOPIC_ITERATIONS: 150000,
  AAD: 'jhnfinn-vault-v1',
  enc: new TextEncoder(),
  dec: new TextDecoder(),

  isSupported() {
    return !!(window.crypto && window.crypto.subtle && window.crypto.getRandomValues);
  },

  toB64(buf) {
    const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) {
      s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    }
    return btoa(s);
  },

  fromB64(str) {
    const bin = atob(str);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  },

  randomBytes(n) {
    return crypto.getRandomValues(new Uint8Array(n));
  },

  safeIterations(it) {
    const n = Number(it) || this.ITERATIONS;
    return Math.min(Math.max(n, 100000), 5000000);
  },

  importPassword(password) {
    return crypto.subtle.importKey(
      'raw',
      this.enc.encode(String(password).normalize('NFKC')),
      'PBKDF2',
      false,
      ['deriveKey', 'deriveBits']
    );
  },

  deriveAesKey(baseKey, saltB64, iterations) {
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: this.fromB64(saltB64), iterations: this.safeIterations(iterations), hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
  },

  importRawAesKey(rawB64) {
    return crypto.subtle.importKey('raw', this.fromB64(rawB64), { name: 'AES-GCM' }, true, ['encrypt', 'decrypt']);
  },

  async exportRawAesKey(key) {
    return this.toB64(await crypto.subtle.exportKey('raw', key));
  },

  // Canal secreto: derivado da senha por PBKDF2 (mesma senha => mesmo canal em qualquer aparelho)
  async deriveTopic(baseKey) {
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: this.enc.encode('jhnfinn/sync-channel/v1'), iterations: this.TOPIC_ITERATIONS, hash: 'SHA-256' },
      baseKey,
      256
    );
    const hex = Array.from(new Uint8Array(bits).slice(0, 24))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return 'jf_' + hex;
  },

  async gzip(bytes) {
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  },

  async gunzip(bytes) {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  },

  isEnvelope(o) {
    return !!(o && o.app === 'jhnfinn' && o.v === 1 && typeof o.ct === 'string' && typeof o.iv === 'string' && typeof o.salt === 'string');
  },

  async encryptJSON(obj, key, saltB64, iterations) {
    let bytes = this.enc.encode(JSON.stringify(obj));
    let z = 0;
    if (typeof CompressionStream !== 'undefined') {
      try {
        bytes = await this.gzip(bytes);
        z = 1;
      } catch (e) {}
    }
    const iv = this.randomBytes(12);
    const ct = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv, additionalData: this.enc.encode(this.AAD) },
      key,
      bytes
    );
    return {
      app: 'jhnfinn',
      v: 1,
      kdf: 'PBKDF2-SHA256',
      it: this.safeIterations(iterations),
      salt: saltB64,
      iv: this.toB64(iv),
      z,
      ct: this.toB64(ct)
    };
  },

  // Lança erro se a senha/chave estiver errada ou se o conteúdo foi adulterado (tag GCM)
  async decryptJSON(env, key) {
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: this.fromB64(env.iv), additionalData: this.enc.encode(this.AAD) },
      key,
      this.fromB64(env.ct)
    );
    let bytes = new Uint8Array(plain);
    if (env.z === 1) bytes = await this.gunzip(bytes);
    return JSON.parse(this.dec.decode(bytes));
  }
};

function splitBRL(value) {
  const num = Number(value) || 0;
  const abs = Math.abs(num);
  const fixed = abs.toFixed(2);
  const [intPart, decPart] = fixed.split('.');
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return { int: (num < 0 ? '-' : '') + formattedInt, cents: ',' + decPart };
}

function formatBRL(value, includeCurrency = true) {
  const { int, cents } = splitBRL(value);
  return (includeCurrency ? 'R$ ' : '') + int + cents;
}

class JHNFinnApp {
  constructor() {
    this.clientId = 'dev_' + Math.random().toString(36).slice(2, 9);
    this.vault = null; // { baseKey?, key, saltB64, iterations, topic }
    this.vaultAuthMode = 'login';
    this.vaultBusy = false;
    this.keyCache = new Map();
    this.undecryptableEvents = new Set();
    this.persistQueue = Promise.resolve();
    this.syncTopic = '';
    this.lastAppliedMsgId = '';
    this.lastServerTime = 0;
    this.hasPendingLocalChanges = false;
    this.syncTimer = null;
    this.pollInterval = null;
    this.eventSource = null;
    this.lastSyncedAt = null;
    this.cloudListenersBound = false;
    // Enquanto o cofre estiver trancado, o app só conhece um estado vazio (nenhum dado real em memória)
    this.state = getCleanInitialState();
    this.init();
  }

  // Returns the active workspace ('solo' or 'casal') — 100% separated!
  get data() {
    if (!this.state.workspaces) {
      this.state.workspaces = {
        solo: createEmptyWorkspace(),
        casal: createEmptyWorkspace()
      };
    }
    return this.state.mode === 'solo' ? this.state.workspaces.solo : this.state.workspaces.casal;
  }

  get isSolo() {
    return this.state.mode === 'solo';
  }

  /* ---------------------------------------------------------
     Armazenamento local (somente envelopes criptografados)
     --------------------------------------------------------- */
  readLocalVault() {
    try {
      const raw = localStorage.getItem(VAULT_STORAGE_KEY);
      if (!raw) return null;
      const env = JSON.parse(raw);
      return VaultCrypto.isEnvelope(env) ? env : null;
    } catch (e) {
      return null;
    }
  }

  // Dados antigos (versões anteriores sem criptografia) que ainda estejam neste navegador
  readLegacyPlaintextState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && parsed.workspaces ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  // Remove qualquer resquício em texto puro de versões anteriores (estado, canal, cursores)
  purgeLegacyPlaintext() {
    try {
      const toRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('jhnfinn_') && k !== VAULT_STORAGE_KEY) toRemove.push(k);
      }
      toRemove.forEach((k) => localStorage.removeItem(k));
    } catch (e) {}
  }

  async persistLocalVault() {
    if (!this.vault) return null;
    const env = await VaultCrypto.encryptJSON(this.state, this.vault.key, this.vault.saltB64, this.vault.iterations);
    localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(env));
    return env;
  }

  saveState(skipCloud = false) {
    // Cofre trancado: nunca grava nada
    if (!this.vault) return;
    if (!skipCloud) {
      this.state.syncRev = (Number(this.state.syncRev) || 0) + 1;
      this.state.updatedAt = Date.now();
      this.state.updatedBy = this.clientId;
      this.hasPendingLocalChanges = true;
    }
    this.persistQueue = this.persistQueue
      .then(() => this.persistLocalVault())
      .catch(() => {});
    if (!skipCloud) {
      this.scheduleCloudPush();
    }
  }

  // Obtém a chave AES correta para um envelope (mesmo salt = chave atual; outro salt = deriva da senha)
  async getKeyForEnvelope(env) {
    if (!this.vault) return null;
    if (env.salt === this.vault.saltB64) return this.vault.key;
    if (!this.vault.baseKey) return null;
    const cacheId = env.salt + ':' + VaultCrypto.safeIterations(env.it);
    if (!this.keyCache.has(cacheId)) {
      this.keyCache.set(cacheId, VaultCrypto.deriveAesKey(this.vault.baseKey, env.salt, env.it));
    }
    return this.keyCache.get(cacheId);
  }

  async decryptWithVault(env) {
    const key = await this.getKeyForEnvelope(env);
    if (!key) return null;
    try {
      return await VaultCrypto.decryptJSON(env, key);
    } catch (e) {
      return null;
    }
  }

  /* ---------------------------------------------------------
     Tela de bloqueio / cadastro de senha
     --------------------------------------------------------- */
  initVaultGate() {
    const notice = sessionStorage.getItem(VAULT_NOTICE_KEY);
    if (notice) sessionStorage.removeItem(VAULT_NOTICE_KEY);

    if (!VaultCrypto.isSupported()) {
      this.showVaultError('Este navegador não oferece criptografia segura (Web Crypto). Atualize o navegador ou abra o site via HTTPS.');
      const btn = document.getElementById('vaultSubmitBtn');
      if (btn) btn.disabled = true;
      return;
    }

    const hasVault = !!this.readLocalVault();
    const hasLegacy = !!this.readLegacyPlaintextState();
    this.setVaultAuthMode(hasVault ? 'login' : hasLegacy ? 'register' : 'login');
    if (notice) this.showVaultError(notice);

    this.tryRestoreSession().then((restored) => {
      if (!restored) document.getElementById('vaultPasswordInput')?.focus();
    });
  }

  async tryRestoreSession() {
    try {
      const raw = sessionStorage.getItem(VAULT_SESSION_KEY);
      const env = this.readLocalVault();
      if (!raw || !env) return false;
      const sess = JSON.parse(raw);
      if (!sess || sess.s !== env.salt || !sess.k || !sess.t) throw new Error('sessão inválida');
      const key = await VaultCrypto.importRawAesKey(sess.k);
      const state = await VaultCrypto.decryptJSON(env, key);
      await this.unlockWith({ key, saltB64: env.salt, iterations: env.it, topic: sess.t }, state, true);
      return true;
    } catch (e) {
      sessionStorage.removeItem(VAULT_SESSION_KEY);
      return false;
    }
  }

  setVaultAuthMode(mode) {
    this.vaultAuthMode = mode === 'register' ? 'register' : 'login';
    const isReg = this.vaultAuthMode === 'register';
    document.getElementById('vaultTabLogin')?.classList.toggle('active', !isReg);
    document.getElementById('vaultTabRegister')?.classList.toggle('active', isReg);
    const confirmGroup = document.getElementById('vaultConfirmGroup');
    if (confirmGroup) confirmGroup.style.display = isReg ? '' : 'none';
    const confirmInput = document.getElementById('vaultPasswordConfirm');
    if (confirmInput) confirmInput.required = isReg;
    const passInput = document.getElementById('vaultPasswordInput');
    if (passInput) {
      passInput.setAttribute('autocomplete', isReg ? 'new-password' : 'current-password');
      passInput.placeholder = isReg ? `Crie uma senha forte (mín. ${VAULT_MIN_PASSWORD} caracteres)...` : 'Digite sua senha secreta...';
    }
    const label = document.getElementById('vaultPassLabel');
    if (label) label.textContent = isReg ? 'Nova Senha Mestra' : 'Sua Senha Mestra (PC & Celular)';
    const btn = document.getElementById('vaultSubmitBtn');
    if (btn) btn.textContent = isReg ? '🛡️ Cadastrar Senha e Criptografar' : '🔓 Desbloquear e Sincronizar Cofre';
    const subtitle = document.getElementById('vaultModalSubtitle');
    if (subtitle) {
      if (isReg) {
        subtitle.textContent = this.readLegacyPlaintextState()
          ? 'Encontramos dados antigos neste aparelho. Eles serão criptografados com a nova senha e a cópia sem proteção será apagada.'
          : 'Crie sua senha mestra. Ela criptografa seus dados neste aparelho e na sincronização com o celular. Não existe recuperação: guarde-a bem!';
      } else {
        subtitle.textContent = this.readLocalVault()
          ? 'Digite sua senha para descriptografar os dados deste aparelho.'
          : 'Já cadastrou a senha em outro aparelho? Digite-a para baixar seu cofre criptografado. Primeiro acesso? Use "Cadastrar Senha".';
      }
    }
    this.showVaultError('');
  }

  showVaultError(msg) {
    const box = document.getElementById('vaultErrorBox');
    if (!box) return;
    box.textContent = msg || '';
    box.classList.toggle('visible', !!msg);
  }

  async submitVaultAuth() {
    if (this.vaultBusy) return;
    const passInput = document.getElementById('vaultPasswordInput');
    const confirmInput = document.getElementById('vaultPasswordConfirm');
    const remember = !!document.getElementById('vaultRememberDevice')?.checked;
    const btn = document.getElementById('vaultSubmitBtn');
    const password = passInput?.value || '';
    if (!password) {
      this.showVaultError('Digite a senha.');
      return;
    }

    this.vaultBusy = true;
    const originalLabel = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = '⏳ Gerando chave segura...';
    }
    this.showVaultError('');

    try {
      if (this.vaultAuthMode === 'register') {
        await this.registerVault(password, confirmInput?.value || '', remember);
      } else {
        await this.loginVault(password, remember);
      }
    } catch (err) {
      this.showVaultError(err?.message || 'Não foi possível abrir o cofre.');
    } finally {
      this.vaultBusy = false;
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalLabel;
      }
    }
  }

  // Busca as últimas mensagens do canal (mais nova primeiro) que tenham formato de envelope criptografado
  async fetchRemoteEnvelopes(topic) {
    const res = await fetch(`https://ntfy.sh/${encodeURIComponent(topic)}/json?poll=1&since=72h`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const lines = (await res.text()).split('\n').map((l) => l.trim()).filter(Boolean);
    const events = [];
    for (let i = lines.length - 1; i >= 0; i--) {
      try {
        const ev = JSON.parse(lines[i]);
        if (ev && ev.event === 'message') events.push(ev);
      } catch (e) {}
    }
    return events;
  }

  async findLatestRemoteState(topic, baseKey, preferredKey, preferredSalt) {
    let events = [];
    try {
      events = await this.fetchRemoteEnvelopes(topic);
    } catch (e) {
      return null;
    }
    const keys = new Map();
    for (const ev of events.slice(0, 25)) {
      const env = await this.extractEnvelopeFromNtfyEvent(ev);
      if (!env) continue;
      try {
        let key = preferredKey && env.salt === preferredSalt ? preferredKey : keys.get(env.salt);
        if (!key) {
          // Limita derivações (cada uma é propositalmente lenta) para não travar com mensagens estranhas no canal
          if (keys.size >= 3) continue;
          key = await VaultCrypto.deriveAesKey(baseKey, env.salt, env.it);
          keys.set(env.salt, key);
        }
        const state = await VaultCrypto.decryptJSON(env, key);
        return { state, env, key, event: ev };
      } catch (e) {}
    }
    return null;
  }

  async loginVault(password, remember) {
    const baseKey = await VaultCrypto.importPassword(password);
    const topic = await VaultCrypto.deriveTopic(baseKey);
    const localEnv = this.readLocalVault();

    let state = null;
    let env = null;
    let key = null;
    if (localEnv) {
      try {
        const k = await VaultCrypto.deriveAesKey(baseKey, localEnv.salt, localEnv.it);
        state = await VaultCrypto.decryptJSON(localEnv, k);
        env = localEnv;
        key = k;
      } catch (e) {
        state = null;
      }
    }

    const remote = await this.findLatestRemoteState(topic, baseKey, key, env?.salt);
    if (remote) {
      if (remote.state && remote.state.jhnfinnMoved) {
        throw new Error('Esta senha foi alterada em outro aparelho. Entre com a senha nova.');
      }
      if (remote.state?.workspaces && (!state || (Number(remote.state.updatedAt) || 0) > (Number(state.updatedAt) || 0))) {
        state = remote.state;
        env = remote.env;
        key = remote.key;
      }
    }

    if (!state) {
      if (localEnv) throw new Error('Senha incorreta. Tente novamente.');
      throw new Error('Nenhum cofre encontrado para esta senha. Se é seu primeiro acesso, use a aba "Cadastrar Senha".');
    }

    await this.unlockWith({ baseKey, key, saltB64: env.salt, iterations: env.it, topic }, state, remember);
  }

  async registerVault(password, confirm, remember) {
    if (password.length < VAULT_MIN_PASSWORD) {
      throw new Error(`A senha precisa ter pelo menos ${VAULT_MIN_PASSWORD} caracteres.`);
    }
    if (password !== confirm) {
      throw new Error('As senhas não conferem.');
    }
    if (this.readLocalVault()) {
      throw new Error('Já existe um cofre protegido neste aparelho. Entre com a senha atual (depois use "Trocar Senha" no menu) ou apague o cofre deste aparelho.');
    }

    const baseKey = await VaultCrypto.importPassword(password);
    const topic = await VaultCrypto.deriveTopic(baseKey);

    // Se essa mesma senha já tem um cofre na nuvem (cadastrado no outro aparelho), apenas conecta nele
    const remote = await this.findLatestRemoteState(topic, baseKey, null, null);
    if (remote && remote.state?.workspaces) {
      await this.unlockWith(
        { baseKey, key: remote.key, saltB64: remote.env.salt, iterations: remote.env.it, topic },
        remote.state,
        remember
      );
      this.showToast('🔒 Cofre já existente encontrado na nuvem e conectado!');
      return;
    }

    const saltB64 = VaultCrypto.toB64(VaultCrypto.randomBytes(16));
    const key = await VaultCrypto.deriveAesKey(baseKey, saltB64, VaultCrypto.ITERATIONS);
    const legacy = this.readLegacyPlaintextState();
    const initial = legacy ? { ...legacy, updatedAt: Date.now(), updatedBy: this.clientId } : getCleanInitialState();

    await this.unlockWith(
      { baseKey, key, saltB64, iterations: VaultCrypto.ITERATIONS, topic },
      initial,
      remember,
      true
    );
    this.showToast(legacy ? '🔒 Dados existentes criptografados com sua nova senha!' : '🛡️ Senha cadastrada! Cofre criptografado criado.');
  }

  async unlockWith(vault, state, remember, forcePush = false) {
    this.vault = vault;
    this.syncTopic = vault.topic;
    this.lastAppliedMsgId = '';
    this.lastServerTime = 0;

    // Migração: se ainda existir uma cópia antiga sem criptografia e ela for mais recente, ela é aproveitada
    let finalState = state;
    let migrated = false;
    const legacy = this.readLegacyPlaintextState();
    if (legacy && (Number(legacy.updatedAt) || 0) > (Number(state.updatedAt) || 0)) {
      finalState = legacy;
      migrated = true;
    }

    const currentTab = finalState.activeTab;
    this.state = normalizeState(finalState);
    this.state.activeTab = currentTab || 'visao-geral';
    this.purgeLegacyPlaintext();
    await this.persistLocalVault();

    if (remember) {
      try {
        sessionStorage.setItem(
          VAULT_SESSION_KEY,
          JSON.stringify({ k: await VaultCrypto.exportRawAesKey(vault.key), s: vault.saltB64, t: vault.topic })
        );
      } catch (e) {}
    } else {
      sessionStorage.removeItem(VAULT_SESSION_KEY);
    }

    const passInput = document.getElementById('vaultPasswordInput');
    const confirmInput = document.getElementById('vaultPasswordConfirm');
    if (passInput) passInput.value = '';
    if (confirmInput) confirmInput.value = '';
    document.getElementById('vaultLockOverlay')?.classList.add('hidden');
    document.body.classList.remove('vault-locked');

    this.applyTheme();
    this.renderAll();
    this.initCloudSync();
    if (forcePush || migrated) {
      this.state.updatedAt = Date.now();
      this.state.updatedBy = this.clientId;
      await this.persistLocalVault();
      this.pushToCloud(false);
    }
  }

  async lockVault() {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    try {
      await this.persistQueue;
    } catch (e) {}
    sessionStorage.removeItem(VAULT_SESSION_KEY);
    // Recarrega a página para limpar da memória e da tela qualquer dado descriptografado
    window.location.reload();
  }

  forgetLocalVault() {
    const ok = window.confirm(
      'Apagar o cofre deste aparelho?\n\nOs dados criptografados salvos SOMENTE neste navegador serão removidos. ' +
        'Se você usa a mesma senha em outro aparelho, poderá baixar o cofre de novo pela nuvem.'
    );
    if (!ok) return;
    try {
      localStorage.removeItem(VAULT_STORAGE_KEY);
      sessionStorage.removeItem(VAULT_SESSION_KEY);
    } catch (e) {}
    window.location.reload();
  }

  handlePasswordChangedElsewhere() {
    try {
      sessionStorage.removeItem(VAULT_SESSION_KEY);
      sessionStorage.setItem(VAULT_NOTICE_KEY, 'A senha do cofre foi alterada em outro aparelho. Entre com a senha nova.');
    } catch (e) {}
    window.location.reload();
  }

  openChangePasswordModal() {
    if (!this.vault) return;
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
      <div class="modal-header">
        <h3>🔑 Trocar Senha do Cofre</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <p style="font-size:12px;color:var(--text-secondary);line-height:1.45;margin-bottom:12px;">
        Os dados serão criptografados novamente com a nova senha. Os outros aparelhos serão bloqueados e pedirão a senha nova.
      </p>
      <div class="vault-error-msg" id="changePassError"></div>
      <form onsubmit="event.preventDefault(); window.app.submitChangePassword();">
        <div class="form-group">
          <label>Senha Atual</label>
          <input type="password" id="chgPassCurrent" class="form-control" autocomplete="current-password" required />
        </div>
        <div class="form-group">
          <label>Nova Senha (mín. ${VAULT_MIN_PASSWORD} caracteres)</label>
          <input type="password" id="chgPassNew" class="form-control" autocomplete="new-password" required />
        </div>
        <div class="form-group">
          <label>Confirmar Nova Senha</label>
          <input type="password" id="chgPassConfirm" class="form-control" autocomplete="new-password" required />
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button type="submit" class="btn-primary" id="chgPassBtn">Trocar Senha</button>
        </div>
      </form>
    `;
    modal.classList.add('open');
    document.getElementById('chgPassCurrent')?.focus();
  }

  async submitChangePassword() {
    if (!this.vault || this.vaultBusy) return;
    const errBox = document.getElementById('changePassError');
    const showErr = (msg) => {
      if (!errBox) return;
      errBox.textContent = msg || '';
      errBox.classList.toggle('visible', !!msg);
    };
    const current = document.getElementById('chgPassCurrent')?.value || '';
    const next = document.getElementById('chgPassNew')?.value || '';
    const confirm = document.getElementById('chgPassConfirm')?.value || '';
    if (next.length < VAULT_MIN_PASSWORD) return showErr(`A nova senha precisa ter pelo menos ${VAULT_MIN_PASSWORD} caracteres.`);
    if (next !== confirm) return showErr('As novas senhas não conferem.');
    if (next === current) return showErr('A nova senha deve ser diferente da atual.');

    const btn = document.getElementById('chgPassBtn');
    this.vaultBusy = true;
    if (btn) {
      btn.disabled = true;
      btn.textContent = '⏳ Recriptografando...';
    }
    showErr('');
    try {
      const curBase = await VaultCrypto.importPassword(current);
      const curTopic = await VaultCrypto.deriveTopic(curBase);
      if (curTopic !== this.vault.topic) throw new Error('Senha atual incorreta.');

      const newBase = await VaultCrypto.importPassword(next);
      const newTopic = await VaultCrypto.deriveTopic(newBase);
      const saltB64 = VaultCrypto.toB64(VaultCrypto.randomBytes(16));
      const newKey = await VaultCrypto.deriveAesKey(newBase, saltB64, VaultCrypto.ITERATIONS);

      // Avisa os outros aparelhos (no canal antigo, criptografado com a chave antiga) que a senha mudou
      const oldVault = this.vault;
      try {
        const movedEnv = await VaultCrypto.encryptJSON(
          { jhnfinnMoved: true, at: Date.now(), by: this.clientId },
          oldVault.key,
          oldVault.saltB64,
          oldVault.iterations
        );
        await fetch(`https://ntfy.sh/${encodeURIComponent(oldVault.topic)}`, { method: 'PUT', body: JSON.stringify(movedEnv) });
      } catch (e) {}

      this.vault = { baseKey: newBase, key: newKey, saltB64, iterations: VaultCrypto.ITERATIONS, topic: newTopic };
      this.keyCache.clear();
      this.undecryptableEvents.clear();
      this.syncTopic = newTopic;
      this.lastAppliedMsgId = '';
      this.lastServerTime = 0;
      this.state.syncRev = (Number(this.state.syncRev) || 0) + 1;
      this.state.updatedAt = Date.now();
      this.state.updatedBy = this.clientId;
      await this.persistQueue.catch(() => {});
      await this.persistLocalVault();

      if (sessionStorage.getItem(VAULT_SESSION_KEY)) {
        sessionStorage.setItem(
          VAULT_SESSION_KEY,
          JSON.stringify({ k: await VaultCrypto.exportRawAesKey(newKey), s: saltB64, t: newTopic })
        );
      }

      this.connectCloudStream();
      await this.pushToCloud(false);
      this.closeModal();
      this.showToast('🔑 Senha alterada! Use a nova senha no PC e no Celular.');
    } catch (err) {
      showErr(err?.message || 'Não foi possível trocar a senha.');
    } finally {
      this.vaultBusy = false;
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Trocar Senha';
      }
    }
  }

  /* ---------------------------------------------------------
     Sincronização PC ↔ Celular (somente ciphertext trafega)
     --------------------------------------------------------- */
  recordSyncCursor(msgId, srvTime) {
    if (msgId) this.lastAppliedMsgId = msgId;
    if (srvTime) this.lastServerTime = Number(srvTime) || 0;
  }

  updateSyncUI(status, customLabel = '') {
    const dot = document.getElementById('cloudSyncDot');
    const txt = document.getElementById('cloudSyncText');
    if (!dot || !txt) return;
    dot.className = 'sync-dot';
    if (status === 'syncing') {
      dot.classList.add('syncing');
      txt.textContent = customLabel || '🔄 Sincronizando...';
    } else if (status === 'offline') {
      dot.classList.add('offline');
      txt.textContent = customLabel || '⚠️ Local (Offline)';
    } else {
      txt.textContent = customLabel || '🔒 Criptografado';
    }
  }

  scheduleCloudPush() {
    this.updateSyncUI('syncing');
    if (this.syncTimer) clearTimeout(this.syncTimer);
    this.syncTimer = setTimeout(() => {
      this.pushToCloud();
    }, 300);
  }

  async pushToCloud(showToastOnDone = false) {
    if (!this.vault || !this.syncTopic) return;
    try {
      this.updateSyncUI('syncing');
      const syncPayload = {
        ...this.state,
        syncRev: Number(this.state.syncRev) || 1,
        updatedAt: Number(this.state.updatedAt) || Date.now(),
        updatedBy: this.clientId
      };
      const env = await VaultCrypto.encryptJSON(syncPayload, this.vault.key, this.vault.saltB64, this.vault.iterations);

      const res = await fetch(`https://ntfy.sh/${encodeURIComponent(this.syncTopic)}`, {
        method: 'PUT',
        body: JSON.stringify(env)
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const posted = await res.json();
      if (posted && posted.id) {
        this.recordSyncCursor(posted.id, posted.time);
      }
      this.hasPendingLocalChanges = false;
      this.lastSyncedAt = new Date();
      this.updateSyncUI('synced');
      if (showToastOnDone) {
        this.showToast('🔒 Dados criptografados enviados para a nuvem!');
      }
    } catch (err) {
      this.updateSyncUI('offline');
      if (showToastOnDone) {
        this.showToast('⚠️ Não foi possível conectar à nuvem no momento.');
      }
    }
  }

  async extractEnvelopeFromNtfyEvent(outer) {
    try {
      if (!outer || outer.event !== 'message') return null;
      let parsed = null;
      if (outer.attachment && outer.attachment.url) {
        const attRes = await fetch(outer.attachment.url, { cache: 'no-store' });
        if (!attRes.ok) return null;
        parsed = await attRes.json();
      } else if (outer.message) {
        parsed = JSON.parse(outer.message);
      }
      // Mensagens em texto puro (versões antigas) ou de terceiros são ignoradas
      return VaultCrypto.isEnvelope(parsed) ? parsed : null;
    } catch (e) {}
    return null;
  }

  // Retorna o estado descriptografado de um evento, ou null se não pertencer a este cofre
  async decodeRemoteEvent(outer) {
    if (!outer || !outer.id || this.undecryptableEvents.has(outer.id)) return null;
    const env = await this.extractEnvelopeFromNtfyEvent(outer);
    const decoded = env ? await this.decryptWithVault(env) : null;
    if (!decoded) {
      this.undecryptableEvents.add(outer.id);
      return null;
    }
    return decoded;
  }

  async applyDecodedRemote(outer, remoteState, silent = true) {
    if (remoteState.jhnfinnMoved) {
      if (remoteState.by !== this.clientId && (Number(remoteState.at) || 0) > (Number(this.state.updatedAt) || 0)) {
        this.handlePasswordChangedElsewhere();
      }
      return false;
    }
    if (!remoteState.workspaces) return false;

    // Se a mensagem veio deste mesmo aparelho/aba, apenas registra o cursor
    if (silent && remoteState.updatedBy && remoteState.updatedBy === this.clientId) {
      this.recordSyncCursor(outer.id, outer.time);
      return false;
    }
    // Ignora estados antigos/reenviados (proteção contra replay)
    if ((Number(remoteState.updatedAt) || 0) <= (Number(this.state.updatedAt) || 0)) {
      this.recordSyncCursor(outer.id, outer.time);
      return false;
    }

    const currentTab = this.state.activeTab;
    this.state = normalizeState(remoteState);
    this.state.activeTab = currentTab || remoteState.activeTab || 'visao-geral';

    this.recordSyncCursor(outer.id, outer.time);
    this.saveState(true);
    this.applyTheme();
    this.renderAll();
    this.lastSyncedAt = new Date();
    this.updateSyncUI('synced');
    if (!silent) {
      this.showToast('🔒 Dados sincronizados com a nuvem!');
    }
    return true;
  }

  async applyRemoteEvent(outer, silent = true) {
    if (!this.vault || !outer || outer.event !== 'message' || !outer.id) return false;
    if (silent && outer.id === this.lastAppliedMsgId) return false;
    if (silent && this.hasPendingLocalChanges) return false;
    const remoteState = await this.decodeRemoteEvent(outer);
    if (!remoteState) return false;
    return this.applyDecodedRemote(outer, remoteState, silent);
  }

  async pullFromCloud(silent = true) {
    if (!this.vault || !this.syncTopic) return;
    try {
      if (!silent) this.updateSyncUI('syncing', '🔄 Buscando...');
      const events = await this.fetchRemoteEnvelopes(this.syncTopic);

      let latest = null;
      for (const ev of events.slice(0, 25)) {
        if (silent && ev.id === this.lastAppliedMsgId) break;
        const decoded = await this.decodeRemoteEvent(ev);
        if (decoded) {
          latest = { ev, decoded };
          break;
        }
      }

      if (latest) {
        const applied = silent && this.hasPendingLocalChanges
          ? false
          : await this.applyDecodedRemote(latest.ev, latest.decoded, silent);
        if (!applied && !silent) {
          this.showToast('🔒 Seus dados já estão sincronizados com a nuvem!');
        }
      } else if (!events.length || !this.lastAppliedMsgId) {
        // Canal ainda sem cofre salvo nas últimas horas: envia o estado criptografado atual
        await this.pushToCloud(false);
        if (!silent) {
          this.showToast('🔒 Nuvem inicializada com os dados criptografados deste aparelho!');
        }
      }

      this.lastSyncedAt = new Date();
      this.updateSyncUI('synced');
    } catch (err) {
      this.updateSyncUI('offline');
      if (!silent) {
        this.showToast('⚠️ Falha ao buscar dados da nuvem.');
      }
    }
  }

  connectCloudStream() {
    try {
      if (this.eventSource) {
        this.eventSource.close();
        this.eventSource = null;
      }
      if (!this.vault || !this.syncTopic) return;
      this.eventSource = new EventSource(`https://ntfy.sh/${encodeURIComponent(this.syncTopic)}/sse`);
      this.eventSource.onopen = () => {
        this.updateSyncUI('synced');
      };
      this.eventSource.onmessage = (event) => {
        try {
          const outer = JSON.parse(event.data);
          if (outer && outer.event === 'message') {
            this.applyRemoteEvent(outer, true);
          }
        } catch (e) {}
      };
    } catch (e) {}
  }

  initCloudSync() {
    if (!this.vault) return;

    // 1. Busca o estado mais recente ao desbloquear (PC, arquivo local ou GitHub Pages no Celular)
    this.pullFromCloud(true);

    // 2. Escuta eventos em tempo real via Server-Sent Events (SSE)
    this.connectCloudStream();

    // 3. Verificação periódica automática (a cada 6s) caso o navegador móvel pause conexões SSE
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = setInterval(() => {
      if (!this.hasPendingLocalChanges && document.visibilityState !== 'hidden') {
        this.pullFromCloud(true);
      }
    }, 6000);

    if (this.cloudListenersBound) return;
    this.cloudListenersBound = true;

    // 4. Sincronização entre abas do mesmo navegador (o conteúdo continua criptografado no localStorage)
    window.addEventListener('storage', async (e) => {
      if (e.key !== VAULT_STORAGE_KEY || !this.vault) return;
      if (!e.newValue) {
        window.location.reload();
        return;
      }
      try {
        const env = JSON.parse(e.newValue);
        if (!VaultCrypto.isEnvelope(env)) return;
        const remoteState = await this.decryptWithVault(env);
        if (!remoteState || !remoteState.workspaces) {
          // Cofre trocado por outra senha em outra aba
          this.handlePasswordChangedElsewhere();
          return;
        }
        if ((Number(remoteState.updatedAt) || 0) > (Number(this.state.updatedAt) || 0)) {
          const currentTab = this.state.activeTab;
          this.state = normalizeState(remoteState);
          this.state.activeTab = currentTab || 'visao-geral';
          this.applyTheme();
          this.renderAll();
        }
      } catch (err) {}
    });

    // 5. Sempre que o usuário voltar para a aba ou desbloquear o celular, verifica atualizações
    window.addEventListener('focus', () => this.pullFromCloud(true));
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.pullFromCloud(true);
      }
    });
  }

  init() {
    this.applyTheme();
    this.renderAll();
    this.initVaultGate();

    document.addEventListener('click', (e) => {
      const notifPop = document.getElementById('notifPopover');
      const quickPop = document.getElementById('quickAddPopover');
      if (notifPop && !notifPop.contains(e.target) && !e.target.closest('.notif-btn')) {
        notifPop.classList.remove('open');
      }
      if (quickPop && !quickPop.contains(e.target) && !e.target.closest('.split-add-caret')) {
        quickPop.classList.remove('open');
      }
    });
  }

  showToast(msg) {
    const container = document.getElementById('toastContainer');
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }

  // Switch between Individual ('solo') and Couple ('casal')
  setMode(mode) {
    if (this.state.mode === mode) return;
    this.state.mode = mode;
    this.saveState();
    this.renderAll();
    this.showToast(
      mode === 'solo'
        ? `👤 Modo Individual (${this.state.soloProfileName}) ativado — finanças separadas do casal`
        : '👥 Modo Casal ativado — finananças compartilhadas'
    );
  }

  toggleMode() {
    this.setMode(this.isSolo ? 'casal' : 'solo');
  }

  handleProfileClick() {
    if (this.isSolo) {
      this.openProfileSettingsModal();
    } else {
      this.state.coupleActiveProfile = this.state.coupleActiveProfile === 'voce' ? 'esposa' : 'voce';
      this.saveState();
      this.renderAll();
      this.showToast(
        this.state.coupleActiveProfile === 'voce'
          ? 'Visão do Casal: Pessoa 1'
          : 'Visão do Casal: Esposa (E)'
      );
    }
  }

  // Unifica Contas Fixas (houseBills) + Lançamentos de Gasto (lancamentos) por dia para "Contas a pagar"
  getUnifiedPayables() {
    const d = this.data;
    const fixedItems = (d.houseBills || []).map(b => ({
      uid: `fixa:${b.id}`,
      source: 'fixa',
      sourceLabel: 'Conta Fixa',
      rawId: b.id,
      name: b.name,
      amount: Number(b.amount) || 0,
      day: Number(b.day) || 6,
      paid: b.paid !== undefined ? Boolean(b.paid) : false
    }));

    const lancamentoItems = (d.lancamentos || [])
      .filter(l => !(l.kind === 'receita' || l.category === 'Salário' || l.category === 'Renda Extra'))
      .map(l => {
        const parts = (l.date || '').split('-');
        const dayNum = parts.length === 3 ? (parseInt(parts[2], 10) || 5) : 5;
        return {
          uid: `lan:${l.id}`,
          source: 'lancamento',
          sourceLabel: l.category || 'Lançamento',
          rawId: l.id,
          name: l.desc,
          amount: Number(l.amount) || 0,
          day: dayNum,
          paid: Boolean(l.paid)
        };
      });

    return [...fixedItems, ...lancamentoItems];
  }

  getMetrics() {
    const d = this.data;
    const isSolo = this.isSolo;

    const houseTotal = d.houseBills.reduce((acc, b) => acc + Number(b.amount || 0), 0);
    const paidByYou = isSolo
      ? houseTotal
      : d.houseBills.filter(b => b.payer === 'voce').reduce((acc, b) => acc + Number(b.amount || 0), 0);
    const paidByPartner = isSolo
      ? 0
      : d.houseBills.filter(b => b.payer === 'esposa').reduce((acc, b) => acc + Number(b.amount || 0), 0);

    // In Solo mode, 100% of house/fixed bills in your solo workspace are yours; in Couple mode, 50% is your share
    const yourHouseShare = isSolo ? houseTotal : houseTotal / 2;
    const settlementDiff = isSolo ? 0 : paidByYou - yourHouseShare;

    const salary = Number(
      isSolo || this.state.coupleActiveProfile === 'voce' ? d.salaryYou : d.salaryPartner
    ) || 0;
    const personal = Number(d.personalBillsYou) || 0;
    const daily = Number(d.dailyExpensesYou) || 0;
    const lancamentosExpensesTotal = personal + daily;
    const leftover = salary - yourHouseShare - personal - daily;

    const pctHouse = salary > 0 ? Math.min(100, Math.round((yourHouseShare / salary) * 100)) : 0;
    const pctPersonal = salary > 0 ? Math.min(100, Math.round((personal / salary) * 100)) : 0;
    const pctDaily = salary > 0 ? Math.min(100, Math.round((daily / salary) * 100)) : 0;
    const pctLeftover = salary > 0 ? Math.max(0, Math.round((leftover / salary) * 100)) : 0;

    const youSplitNum = houseTotal > 0 ? (paidByYou / houseTotal) * 100 : (isSolo ? 100 : 50);
    const partnerSplitNum = houseTotal > 0 ? (paidByPartner / houseTotal) * 100 : (isSolo ? 0 : 50);
    const youSplitPct = houseTotal > 0 ? youSplitNum.toFixed(1).replace('.', ',') : '0,0';
    const partnerSplitPct = houseTotal > 0 ? partnerSplitNum.toFixed(1).replace('.', ',') : '0,0';

    const moradiaBills = d.houseBills.filter(b => b.inMoradia);
    const moradiaFullTotal = moradiaBills.reduce((acc, b) => acc + Number(b.amount || 0), 0);
    const otherHouseTotal = Math.max(0, houseTotal - moradiaFullTotal);

    const isIndividualMoradia = isSolo ? true : d.moradiaScope === 'individual';
    const moradiaDisplayTotal = isSolo
      ? moradiaFullTotal
      : (isIndividualMoradia ? moradiaFullTotal / 2 : moradiaFullTotal);

    const moradiaBaseSalary = isIndividualMoradia
      ? Number(d.salaryYou || 0)
      : Number(d.salaryYou || 0) + Number(d.salaryPartner || 0);
    const moradiaPct = moradiaBaseSalary > 0 ? Math.round((moradiaDisplayTotal / moradiaBaseSalary) * 100) : 0;

    const unifiedPayables = this.getUnifiedPayables();
    const totalPayable = unifiedPayables.reduce((acc, b) => acc + Number(b.amount || 0), 0);
    const paidCount = unifiedPayables.filter(b => b.paid).length;
    const totalCount = unifiedPayables.length;

    return {
      salary,
      yourHouseShare,
      personal,
      daily,
      lancamentosExpensesTotal,
      leftover,
      pctHouse,
      pctPersonal,
      pctDaily,
      pctLeftover,
      houseTotal,
      paidByYou,
      paidByPartner,
      youSplitNum,
      partnerSplitNum,
      youSplitPct,
      partnerSplitPct,
      settlementDiff,
      moradiaBills,
      moradiaFullTotal,
      otherHouseTotal,
      moradiaDisplayTotal,
      moradiaPct,
      isIndividualMoradia,
      unifiedPayables,
      totalPayable,
      paidCount,
      totalCount
    };
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const lightBtn = document.getElementById('themeBtnLight');
    const darkBtn = document.getElementById('themeBtnDark');
    if (lightBtn && darkBtn) {
      lightBtn.classList.toggle('active', this.state.theme === 'light');
      darkBtn.classList.toggle('active', this.state.theme === 'dark');
    }
  }

  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveState();
  }

  toggleFullscreen() {
    document.body.classList.toggle('fullscreen-mode');
  }

  changeMonth(delta) {
    if (delta === 0) {
      this.state.monthIndex = 11;
      this.state.year = 2026;
    } else {
      let nextMonth = this.state.monthIndex + delta;
      if (nextMonth > 11) {
        this.state.monthIndex = 0;
        this.state.year += 1;
      } else if (nextMonth < 0) {
        this.state.monthIndex = 11;
        this.state.year -= 1;
      } else {
        this.state.monthIndex = nextMonth;
      }
    }
    this.saveState();
    this.renderAll();
  }

  setTab(tabId, pushHistory = true) {
    this.state.activeTab = tabId;
    if (pushHistory) {
      this.state.history = this.state.history.slice(0, this.state.historyIndex + 1);
      this.state.history.push(tabId);
      this.state.historyIndex = this.state.history.length - 1;
    }
    document.querySelectorAll('.sidebar .nav-item, .mobile-bottom-nav .mob-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    this.saveState();
    this.renderMainView();
  }

  navigateHistory(dir) {
    const nextIdx = this.state.historyIndex + dir;
    if (nextIdx >= 0 && nextIdx < this.state.history.length) {
      this.state.historyIndex = nextIdx;
      this.setTab(this.state.history[nextIdx], false);
    }
  }

  selectBillDay(day) {
    this.data.selectedBillDay = day;
    this.saveState();
    this.renderMainView();
  }

  toggleUnifiedBillPaid(source, rawId) {
    if (source === 'fixa') {
      const bill = this.data.houseBills.find(b => b.id === rawId);
      if (bill) {
        bill.paid = !bill.paid;
        this.saveState();
        this.renderAll();
        this.showToast(bill.paid ? `✓ Conta fixa "${bill.name}" marcada como paga` : `"${bill.name}" marcada como pendente`);
      }
    } else {
      this.toggleLancamentoPaid(rawId);
    }
  }

  editUnifiedBill(source, rawId) {
    if (source === 'fixa') {
      this.openEditHouseBillModal(rawId);
    } else {
      this.openLancamentoModal(rawId);
    }
  }

  toggleHouseBillPayer(billId) {
    if (this.isSolo) {
      this.openEditHouseBillModal(billId);
      return;
    }
    const bill = this.data.houseBills.find(b => b.id === billId);
    if (bill) {
      bill.payer = bill.payer === 'voce' ? 'esposa' : 'voce';
      this.data.pixSettled = false;
      this.saveState();
      this.renderMainView();
      this.showToast(
        `${bill.name}: alterado para ${bill.payer === 'voce' ? 'Você paga' : 'Esposa paga'}`
      );
    }
  }

  togglePixSettled() {
    this.data.pixSettled = !this.data.pixSettled;
    this.saveState();
    this.renderMainView();
    this.showToast(
      this.data.pixSettled
        ? 'Acerto via Pix marcado como feito!'
        : 'Acerto via Pix reaberto.'
    );
  }

  setMoradiaScope(scope) {
    this.data.moradiaScope = scope;
    this.saveState();
    this.renderMainView();
  }

  cycleCard(dir) {
    const total = this.data.cards.length;
    if (total === 0) return;
    this.data.activeCardIndex = (this.data.activeCardIndex + dir + total) % total;
    this.saveState();
    this.renderMainView();
  }

  clearAllData() {
    if (this.isSolo) {
      this.state.workspaces.solo = createEmptyWorkspace();
      this.showToast('Dados do Perfil Individual foram zerados!');
    } else {
      this.state.workspaces.casal = createEmptyWorkspace();
      this.showToast('Dados do Modo Casal foram zerados!');
    }
    this.saveState();
    this.renderAll();
    document.getElementById('quickAddPopover')?.classList.remove('open');
  }

  exportData() {
    const m = this.getMetrics();
    const modeLabel = this.isSolo ? `Individual (${this.state.soloProfileName})` : 'Casal';
    const summary = `Resumo JHNFinn [${modeLabel}] (${MONTHS[this.state.monthIndex]} ${this.state.year}):\n- Saldo Previsto: ${formatBRL(m.leftover)}\n- Contas da Casa/Fixas: ${formatBRL(m.houseTotal)}\n- Contas a Pagar: ${formatBRL(m.totalPayable)} (${m.paidCount}/${m.totalCount} pagas)`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      this.showToast('Resumo copiado para a área de transferência!');
    } else {
      alert(summary);
    }
  }

  toggleNotifications(e) {
    e.stopPropagation();
    const pop = document.getElementById('notifPopover');
    const quick = document.getElementById('quickAddPopover');
    quick?.classList.remove('open');
    pop.classList.toggle('open');
    this.renderNotifications();
  }

  renderNotifications() {
    const list = document.getElementById('notifList');
    if (!list) return;
    const m = this.getMetrics();
    list.innerHTML = `
      <div style="padding:6px;border-radius:8px;background:var(--bg-card-subtle);">
        <strong>👤 Modo Ativo: ${this.isSolo ? 'Individual (' + this.state.soloProfileName + ')' : 'Casal'}</strong>
        <p style="color:var(--text-secondary);font-size:11px;margin-top:2px;">Os dados deste perfil são salvos separadamente.</p>
      </div>
      <div style="padding:6px;border-radius:8px;background:var(--bg-card-subtle);">
        <strong>📅 Contas a Pagar (Fixas + Lançamentos)</strong>
        <p style="color:var(--text-secondary);font-size:11px;margin-top:2px;">${m.totalCount} item(ns) no mês totalizando ${formatBRL(m.totalPayable)} (${m.paidCount} pagos).</p>
      </div>
    `;
  }

  toggleQuickMenu(e) {
    e.stopPropagation();
    const pop = document.getElementById('quickAddPopover');
    const notif = document.getElementById('notifPopover');
    notif?.classList.remove('open');
    pop.classList.toggle('open');
  }

  renderAll() {
    this.renderHeader();
    this.renderSidebarAndMode();
    this.renderMainView();
  }

  renderHeader() {
    document.getElementById('currentMonthName').textContent = MONTHS[this.state.monthIndex];
    document.getElementById('currentYearNum').textContent = this.state.year;
    const badge = document.getElementById('notifBadge');
    if (badge) {
      const pending = this.getUnifiedPayables().filter(b => !b.paid).length;
      badge.textContent = pending;
      badge.style.display = pending > 0 ? 'block' : 'none';
    }
    const modeBadge = document.getElementById('topbarModeBadge');
    if (modeBadge) {
      modeBadge.textContent = this.isSolo
        ? `👤 Perfil Individual (${this.state.soloProfileName})`
        : '👥 Modo Casal';
    }
  }

  renderSidebarAndMode() {
    const isSolo = this.isSolo;
    document.getElementById('modeBtnSolo')?.classList.toggle('active', isSolo);
    document.getElementById('modeBtnCouple')?.classList.toggle('active', !isSolo);

    const brandAvatars = document.getElementById('brandAvatars');
    const brandSubtitle = document.getElementById('brandSubtitle');
    if (isSolo) {
      brandAvatars.innerHTML = `<span class="avatar-circle blue">${this.state.soloProfileInitial || 'J'}</span>`;
      brandSubtitle.textContent = 'Finanças pessoais';
    } else {
      brandAvatars.innerHTML = `
        <span class="avatar-circle blue">1</span>
        <span class="avatar-circle pink">E</span>
      `;
      brandSubtitle.textContent = 'Finanças em casal';
    }

    // Sidebar dynamic labels
    const resEl = document.getElementById('navLabelReserva');
    const renEl = document.getElementById('navLabelRenda');
    const conEl = document.getElementById('navLabelContas');
    if (resEl) resEl.textContent = isSolo ? 'Minha reserva' : 'Nossa reserva';
    if (renEl) renEl.textContent = isSolo ? 'Minha renda' : 'Nossa renda';
    if (conEl) conEl.textContent = isSolo ? 'Contas fixas' : 'Contas da casa';

    // Bottom profile switcher
    const avatar = document.getElementById('profileAvatar');
    const name = document.getElementById('profileName');
    const status = document.getElementById('profileStatusText');
    const dot = document.getElementById('profileDot');

    if (isSolo) {
      avatar.className = 'avatar-circle blue';
      avatar.textContent = this.state.soloProfileInitial || 'J';
      name.textContent = this.state.soloProfileName || 'Perfil Individual';
      status.textContent = 'Separado do casal';
      if (dot) dot.style.background = '#2563eb';
    } else if (this.state.coupleActiveProfile === 'voce') {
      avatar.className = 'avatar-circle blue';
      avatar.textContent = '1';
      name.textContent = 'Pessoa 1 (Casal)';
      status.textContent = 'Visão Pessoa 1';
      if (dot) dot.style.background = '#16a34a';
    } else {
      avatar.className = 'avatar-circle pink';
      avatar.textContent = 'E';
      name.textContent = 'Esposa (Casal)';
      status.textContent = 'Visão Esposa';
      if (dot) dot.style.background = '#f43f5e';
    }
  }

  renderMainView() {
    const container = document.getElementById('viewContainer');
    switch (this.state.activeTab) {
      case 'visao-geral':
        container.innerHTML = this.buildOverviewHTML();
        break;
      case 'lancamentos':
        container.innerHTML = this.buildLancamentosHTML();
        break;
      case 'cartoes':
        container.innerHTML = this.buildCartoesPageHTML();
        break;
      case 'nossa-reserva':
        container.innerHTML = this.buildNossaReservaPageHTML();
        break;
      case 'nossa-renda':
        container.innerHTML = this.buildNossaRendaPageHTML();
        break;
      case 'contas-casa':
        container.innerHTML = this.buildContasCasaPageHTML();
        break;
      default:
        this.state.activeTab = 'visao-geral';
        container.innerHTML = this.buildOverviewHTML();
    }
  }

  buildOverviewHTML() {
    const d = this.data;
    const isSolo = this.isSolo;
    const m = this.getMetrics();

    const leftoverParts = splitBRL(m.leftover);
    const payableParts = splitBRL(m.totalPayable);
    const houseParts = splitBRL(m.houseTotal);

    const activeCard = d.cards[d.activeCardIndex] || null;
    const selectedInvoice = d.upcomingInvoices[d.activeInvoiceIdx] || { amount: 0 };
    const headerCardAmount = activeCard ? activeCard.invoiceAmount : selectedInvoice.amount;
    const cardParts = splitBRL(headerCardAmount);
    const moradiaParts = splitBRL(m.moradiaDisplayTotal);
    const obraParts = splitBRL(d.obra.amount);

    const unifiedPayables = m.unifiedPayables;
    const existingDays = [...new Set(unifiedPayables.map(b => Number(b.day)).filter(n => n >= 1 && n <= 31))].sort((a, b) => a - b);
    const defaultDays = [5, 6, 7, 8, 24];
    const billDays = existingDays.length >= 4
      ? existingDays
      : [...new Set([...existingDays, ...defaultDays])].slice(0, 6).sort((a, b) => a - b);

    if (!billDays.includes(Number(d.selectedBillDay)) && billDays.length > 0) {
      d.selectedBillDay = billDays[0];
    }

    const dayPillsHTML = billDays.map(dayNum => {
      const count = Math.min(5, unifiedPayables.filter(b => Number(b.day) === dayNum).length);
      const dots = Array.from({ length: count }).map(() => `<span></span>`).join('');
      const activeClass = Number(d.selectedBillDay) === dayNum ? 'active' : '';
      return `
        <div class="day-pill ${activeClass}" onclick="window.app.selectBillDay(${dayNum})">
          <span class="day-num">${String(dayNum).padStart(2, '0')}</span>
          <div class="day-dots">${dots}</div>
        </div>
      `;
    }).join('');

    const filteredPayables = unifiedPayables.filter(
      b => Number(b.day) === Number(d.selectedBillDay)
    );

    const checklistHTML = filteredPayables.length > 0
      ? filteredPayables.map(b => `
          <div class="bill-check-item ${b.paid ? 'paid' : ''}">
            <div class="bill-check-left" onclick="window.app.toggleUnifiedBillPaid('${b.source}', '${b.rawId}')" title="Clique para marcar Pago / Pendente">
              <span class="radio-circle">
                ${b.paid ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
              </span>
              <span class="bill-name">
                ${b.name}
                <small style="font-size:10px;padding:1px 6px;border-radius:99px;margin-left:4px;font-weight:600;background:${b.source === 'fixa' ? 'var(--blue-soft)' : 'var(--bg-card-subtle)'};color:${b.source === 'fixa' ? 'var(--blue-primary)' : 'var(--text-secondary)'};">
                  ${b.source === 'fixa' ? 'Fixa' : b.sourceLabel}
                </small>
              </span>
            </div>
            <span class="bill-check-amount">${formatBRL(b.amount)}</span>
            <button class="edit-inline-btn" onclick="window.app.editUnifiedBill('${b.source}', '${b.rawId}')" title="Editar em ${b.source === 'fixa' ? 'Contas Fixas' : 'Lançamentos'}">✎</button>
          </div>
        `).join('')
      : `<div class="empty-box-dashed">
           Nenhuma conta fixa ou lançamento para o dia ${String(d.selectedBillDay).padStart(2, '0')}.
           <br>
           <button class="edit-inline-btn" style="margin-top:6px;color:var(--blue-primary);font-weight:600;" onclick="window.app.openAddModal('conta')">+ Conta Fixa</button>
           ·
           <button class="edit-inline-btn" style="margin-top:6px;color:var(--blue-primary);font-weight:600;" onclick="window.app.openLancamentoModal()">+ Lançamento</button>
         </div>`;

    const houseBillsHTML = d.houseBills.length > 0
      ? d.houseBills.map(b => `
          <div class="house-bill-row">
            <div class="house-bill-left" onclick="window.app.toggleHouseBillPayer('${b.id}')" title="${isSolo ? 'Clique para editar conta fixa' : 'Clique para alternar quem paga (Você / Esposa)'}">
              <span class="dot ${isSolo ? 'blue' : (b.payer === 'voce' ? 'blue' : 'pink')}"></span>
              <span>${b.name} <small style="color:var(--text-muted);font-size:10.5px;">(dia ${String(b.day || 6).padStart(2, '0')})</small></span>
            </div>
            <span class="house-bill-val">${formatBRL(b.amount)}</span>
            <button class="edit-inline-btn" onclick="window.app.openEditHouseBillModal('${b.id}')" title="Editar / Excluir">✎</button>
          </div>
        `).join('')
      : `<div class="empty-box-dashed">
           Nenhuma conta fixa cadastrada.
           <br><button class="edit-inline-btn" style="margin-top:6px;color:var(--blue-primary);font-weight:600;" onclick="window.app.openAddModal('conta')">+ Adicionar conta fixa</button>
         </div>`;

    // Card 3 Content adapts to Solo vs Couple Mode
    let card3HeaderAndBarHTML = '';
    let card3FooterHTML = '';

    if (isSolo) {
      const moradiaPctOfFixed = m.houseTotal > 0 ? Math.round((m.moradiaFullTotal / m.houseTotal) * 100) : 100;
      const otherPctOfFixed = m.houseTotal > 0 ? 100 - moradiaPctOfFixed : 0;
      card3HeaderAndBarHTML = `
        <div class="split-players-row">
          <div class="player-col">
            <span class="player-label"><span class="dot blue"></span> Moradia (Individual)</span>
            <span class="player-amount">${formatBRL(m.moradiaFullTotal)}</span>
          </div>
          <div class="player-col right">
            <span class="player-label">Outras / Reserva <span class="dot sky"></span></span>
            <span class="player-amount">${formatBRL(m.otherHouseTotal)}</span>
          </div>
        </div>
        <div class="split-bar-container">
          <div class="split-bar-blue" style="width: ${moradiaPctOfFixed}%; border-radius: ${otherPctOfFixed === 0 ? '6px' : '6px 0 0 6px'};">
            ${m.houseTotal > 0 ? moradiaPctOfFixed + '%' : '0%'}
          </div>
          ${otherPctOfFixed > 0 ? `
            <div class="split-bar-pink" style="width: ${otherPctOfFixed}%; background: #60a5fa;">
              ${otherPctOfFixed}%
            </div>
          ` : ''}
        </div>
      `;
      card3FooterHTML = `
        <div class="pix-settlement-box">
          <div class="pix-left">
            <span class="mini-avatar blue">${this.state.soloProfileInitial || 'J'}</span>
            <span>Controle <strong>100% Individual</strong> (separado do casal)</span>
          </div>
          <button class="btn-pill-outline" onclick="window.app.setMode('casal')">Ir p/ Casal</button>
        </div>
      `;
    } else {
      const absDiff = Math.abs(m.settlementDiff);
      const partnerOwesYou = m.settlementDiff >= 0;
      card3HeaderAndBarHTML = `
        <div class="split-players-row">
          <div class="player-col">
            <span class="player-label"><span class="dot blue"></span> Você paga</span>
            <span class="player-amount">${formatBRL(m.paidByYou)}</span>
          </div>
          <div class="player-col right">
            <span class="player-label">Esposa paga <span class="dot pink"></span></span>
            <span class="player-amount">${formatBRL(m.paidByPartner)}</span>
          </div>
        </div>
        <div class="split-bar-container">
          <div class="split-bar-blue" style="width: ${m.youSplitNum}%">
            ${m.youSplitPct}%
          </div>
          <div class="split-center-marker" title="Meta 50% / 50%"></div>
          <div class="split-bar-pink" style="width: ${m.partnerSplitNum}%">
            ${m.partnerSplitPct}%
          </div>
        </div>
      `;
      card3FooterHTML = `
        <div class="pix-settlement-box">
          <div class="pix-left">
            <div class="pix-avatars">
              <span class="mini-avatar ${partnerOwesYou ? 'pink' : 'blue'}">${partnerOwesYou ? 'E' : '1'}</span>
              <span style="font-size:10px;color:var(--text-muted);">→</span>
              <span class="mini-avatar ${partnerOwesYou ? 'blue' : 'pink'}">${partnerOwesYou ? '1' : 'E'}</span>
            </div>
            <span>
              ${partnerOwesYou ? 'Esposa te devolve' : 'Você devolve'}
              <strong>${formatBRL(absDiff)}</strong> no Pix
            </span>
          </div>
          <button class="btn-pill-outline ${d.pixSettled ? 'done' : ''}" onclick="window.app.togglePixSettled()">
            ${d.pixSettled ? '✓ Feito' : 'Marcar feito'}
          </button>
        </div>
      `;
    }

    // Credit Card Carousel
    const translateX = d.activeCardIndex * -86;
    const cardsViewportHTML = d.cards.length > 0
      ? `
        <div class="credit-cards-viewport">
          <div class="credit-cards-track" style="transform: translateX(${translateX}%);">
            ${d.cards.map(c => `
              <div class="cc-visual ${c.theme || 'santander'}" onclick="window.app.openCardFormModal('${c.id}')" title="Clique para editar cartão e fatura">
                <div class="cc-top-row">
                  <div class="cc-brand">${c.bank}</div>
                  <span class="cc-status-badge">${c.status}</span>
                </div>
                <div class="cc-middle-row">
                  <div class="cc-chip"></div>
                  <span class="cc-series">${c.tier}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3"/><path d="M12 17a5 5 0 0 0 0-10"/><path d="M15.5 19.5a8.5 8.5 0 0 0 0-15"/></svg>
                </div>
                <div class="cc-bottom-row">
                  <div>
                    <div class="cc-meta-label">VENCE</div>
                    <div class="cc-meta-val">${c.due}</div>
                  </div>
                  <div style="text-align:right;">
                    <div class="cc-meta-label">LIMITE LIVRE</div>
                    <div class="cc-meta-val">${formatBRL(c.freeLimit)}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `
      : `
        <div class="credit-cards-viewport">
          <div class="cc-empty-card" onclick="window.app.openCardFormModal()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            <strong style="font-size:12.5px;">+ Adicionar Cartão de Crédito</strong>
            <span style="font-size:11px;">Configure nome, vencimento, limite e fatura</span>
          </div>
        </div>
      `;

    const upcomingHTML = d.upcomingInvoices.map((inv, idx) => `
      <div class="invoice-mini-card ${d.activeInvoiceIdx === idx ? 'active' : ''}" onclick="window.app.openUpcomingInvoicesModal(${idx})" title="Clique para alterar valor da fatura futura">
        <div style="text-align:center;">
          <div class="inv-month">${inv.label}</div>
          ${inv.status ? `<div class="inv-tag">${inv.status}</div>` : ''}
        </div>
        <div class="inv-val">${formatBRL(inv.amount)}</div>
      </div>
    `).join('');

    const moradiaItemsHTML = m.moradiaBills.length > 0
      ? m.moradiaBills.map(b => {
          const val = isSolo ? b.amount : (m.isIndividualMoradia ? b.amount / 2 : b.amount);
          return `
            <div class="moradia-item" onclick="window.app.openEditHouseBillModal('${b.id}')" title="Clique para editar">
              <div class="moradia-icon-box">
                ${MORADIA_ICONS[b.icon] || MORADIA_ICONS.building}
              </div>
              <div class="moradia-item-text">
                <span class="moradia-item-name">${b.name}</span>
                <span class="moradia-item-val">${b.approx ? '≈ ' : ''}${formatBRL(val)}</span>
              </div>
            </div>
          `;
        }).join('')
      : `<div class="empty-box-dashed" style="grid-column: span 2;">
           Nenhuma despesa de moradia.
           <br><button class="edit-inline-btn" style="margin-top:6px;color:var(--blue-primary);font-weight:600;" onclick="window.app.openAddModal('conta')">+ Adicionar item de moradia</button>
         </div>`;

    const moradiaBarWidth = m.moradiaPct > 0 ? Math.min(100, Math.max(4, (m.moradiaPct / 60) * 100)) : 0;

    return `
      <div class="dashboard-grid">
        <!-- Card 1: Saldo previsto -->
        <section class="card col-span-2">
          <div class="card-title-row">
            <h2 class="card-title">
              Saldo previsto
              <span class="card-title-muted">· ${isSolo ? 'Perfil Individual (' + this.state.soloProfileName + ')' : 'Modo Casal'}</span>
            </h2>
            <button class="edit-inline-btn" onclick="window.app.openAddModal('salario')">✎ Editar valores</button>
          </div>

          <div class="saldo-header-wrap">
            <div class="saldo-main-left">
              <div class="hero-money xl" onclick="window.app.openAddModal('salario')" style="cursor:pointer;" title="Clique para editar salário e despesas">
                <span class="currency">R$</span>
                <span class="integer">${leftoverParts.int}</span>
                <span class="cents">${leftoverParts.cents}</span>
              </div>
              <div class="saldo-badge-info">
                <span class="saldo-free-pct">↗ ${m.pctLeftover}% do salário livre</span>
                <span class="saldo-free-desc">valor estimado após pagar todas as contas</span>
              </div>
            </div>
            ${ILLUSTRATIONS.wallet}
          </div>

          <div class="saldo-bar-track">
            <div class="saldo-bar-left" style="flex: ${Math.max(10, 100 - m.pctLeftover)};">
              <div class="seg-house" style="width: ${m.pctHouse}%" title="${isSolo ? 'Contas da casa' : 'Sua metade da casa'}: ${m.pctHouse}%"></div>
              <div class="seg-personal" style="width: ${m.pctPersonal}%" title="Contas pessoais: ${m.pctPersonal}%"></div>
              <div class="seg-daily" style="width: ${m.pctDaily}%" title="Dia a dia: ${m.pctDaily}%"></div>
            </div>
            <div class="seg-gap"></div>
            <div class="seg-leftover" style="flex: ${Math.max(0, m.pctLeftover)};" title="Sobra: ${m.pctLeftover}%"></div>
          </div>

          <div class="saldo-breakdown-grid">
            <div class="breakdown-col">
              <span class="breakdown-label">Salário</span>
              <div class="breakdown-val">
                <span>${formatBRL(m.salary)}</span>
                <button class="edit-inline-btn" onclick="window.app.openAddModal('salario')" title="Editar salário">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                </button>
              </div>
            </div>

            <div class="breakdown-col">
              <span class="breakdown-label"><span class="dot navy"></span> ${isSolo ? 'Contas da casa' : 'Sua metade da casa'}</span>
              <div class="breakdown-val">
                <span>– ${formatBRL(m.yourHouseShare)}</span>
                <span class="pct">· ${m.pctHouse}%</span>
              </div>
            </div>

            <div class="breakdown-col" onclick="window.app.openAddModal('salario')" style="cursor:pointer;" title="Clique para alterar Contas pessoais">
              <span class="breakdown-label"><span class="dot blue"></span> Contas pessoais ✎</span>
              <div class="breakdown-val">
                <span>– ${formatBRL(m.personal)}</span>
                <span class="pct">· ${m.pctPersonal}%</span>
              </div>
            </div>

            <div class="breakdown-col" onclick="window.app.openAddModal('salario')" style="cursor:pointer;" title="Clique para alterar Dia a dia">
              <span class="breakdown-label"><span class="dot sky"></span> Dia a dia ✎</span>
              <div class="breakdown-val">
                <span>– ${formatBRL(m.daily)}</span>
                <span class="pct">· ${m.pctDaily}%</span>
              </div>
            </div>

            <div class="breakdown-col">
              <span class="breakdown-label"><span class="dot green"></span> = Sobra</span>
              <div class="breakdown-val green-text">
                <span>${formatBRL(m.leftover)}</span>
                <span class="pct" style="color:var(--green-primary)">· ${m.pctLeftover}%</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Card 2: Contas a pagar -->
        <section class="card">
          <div class="contas-top-row">
            <div>
              <h2 class="card-title">
                Contas a pagar <span class="card-title-muted">· dia ${String(d.selectedBillDay).padStart(2, '0')}</span>
              </h2>
              <div class="hero-money lg" style="margin-top:6px;">
                <span class="currency">R$</span>
                <span class="integer">${payableParts.int}</span>
                <span class="cents">${payableParts.cents}</span>
              </div>
              <div class="contas-meta">
                ${m.paidCount} de ${m.totalCount} pagas ·
                <button class="edit-inline-btn" style="color:var(--blue-primary);font-weight:600;" onclick="window.app.openAddModal('conta')">+ Adicionar</button>
              </div>
            </div>
            ${ILLUSTRATIONS.calendar}
          </div>

          <div class="day-pills-row">
            ${dayPillsHTML}
          </div>

          <div class="bills-checklist">
            ${checklistHTML}
          </div>
        </section>

        <!-- Card 3: Divisão da casa (Couple) OR Contas Fixas & Casa (Individual) -->
        <section class="card">
          <div class="divisao-top">
            <div>
              <h2 class="card-title">${isSolo ? 'Contas da casa & Fixas' : 'Divisão da casa'}</h2>
              <div class="card-subtitle-top">Total das contas</div>
              <div class="hero-money lg">
                <span class="currency">R$</span>
                <span class="integer">${houseParts.int}</span>
                <span class="cents">${houseParts.cents}</span>
              </div>
            </div>
            ${ILLUSTRATIONS.scale}
          </div>

          ${card3HeaderAndBarHTML}

          <div class="section-mini-title">
            <span>${isSolo ? 'Minhas contas cadastradas' : 'Quem paga cada conta'}</span>
            <button class="edit-inline-btn" style="color:var(--blue-primary);font-weight:600;" onclick="window.app.openAddModal('conta')">+ Nova conta</button>
          </div>

          <div class="house-bills-list">
            ${houseBillsHTML}
          </div>

          ${card3FooterHTML}
        </section>

        <!-- Card 4: Cartões -->
        <section class="card">
          <div class="cartoes-top">
            <div>
              <h2 class="card-title">Cartões</h2>
              <div class="card-subtitle-top">Fatura de ${MONTHS[this.state.monthIndex].toLowerCase()}</div>
              <div class="hero-money lg" onclick="window.app.openCardFormModal('${activeCard ? activeCard.id : ''}')" style="cursor:pointer;">
                <span class="currency">R$</span>
                <span class="integer">${cardParts.int}</span>
                <span class="cents">${cardParts.cents}</span>
              </div>
            </div>
            ${ILLUSTRATIONS.card}
          </div>

          <div class="cartoes-controls">
            <div style="display:flex;gap:6px;">
              ${activeCard ? `<button class="btn-pill-outline" onclick="window.app.openCardFormModal('${activeCard.id}')">Editar cartão / fatura</button>` : ''}
              <button class="btn-pill-outline" style="color:var(--blue-primary);" onclick="window.app.openCardFormModal()">+ Cartão</button>
            </div>
            <div class="carousel-nav">
              <button class="circle-arrow-btn" onclick="window.app.cycleCard(-1)" title="Cartão anterior">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button class="circle-arrow-btn" onclick="window.app.cycleCard(1)" title="Próximo cartão">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          ${cardsViewportHTML}

          <div class="upcoming-title-row">
            <span class="upcoming-title">PRÓXIMAS FATURAS</span>
            <button class="edit-inline-btn" style="color:var(--blue-primary);font-weight:600;" onclick="window.app.openUpcomingInvoicesModal()">✎ Editar faturas</button>
          </div>
          <div class="upcoming-invoices-wrap">
            <svg class="trendline-svg" viewBox="0 0 300 32" preserveAspectRatio="none">
              <path d="M 0 22 L 50 18" stroke="#2563eb" stroke-width="1.8" fill="none"/>
              <path d="M 50 18 L 150 13 L 250 11 L 300 11" stroke="#64748b" stroke-width="1.4" stroke-dasharray="3 3" fill="none"/>
              <circle cx="50" cy="18" r="3.5" fill="#fff" stroke="#2563eb" stroke-width="2"/>
              <circle cx="150" cy="13" r="3.5" fill="#fff" stroke="#475569" stroke-width="1.8"/>
              <circle cx="250" cy="11" r="3.5" fill="#fff" stroke="#475569" stroke-width="1.8"/>
            </svg>
            ${upcomingHTML}
          </div>
        </section>

        <!-- Card 5: Moradia -->
        <section class="card">
          <div class="moradia-top">
            <div>
              <h2 class="card-title">Moradia</h2>
              <div class="card-subtitle-top">Quanto você gasta pra morar</div>
              <div class="hero-money lg">
                <span class="currency">R$</span>
                <span class="integer">${moradiaParts.int}</span>
                <span class="cents">${moradiaParts.cents}</span>
              </div>
            </div>
            ${ILLUSTRATIONS.house}
          </div>

          <div class="moradia-ref-line">
            <span class="moradia-ref-ok">✓ ${m.moradiaPct}% do salário</span>
            <span class="moradia-ref-Note">referência: até 30%</span>
          </div>

          ${isSolo ? `
            <div class="segmented-toggle" style="grid-template-columns: 1fr;">
              <button class="seg-btn active" style="cursor:default;">
                Baseado no meu salário individual (${this.state.soloProfileName})
              </button>
            </div>
          ` : `
            <div class="segmented-toggle">
              <button class="seg-btn ${m.isIndividualMoradia ? 'active' : ''}" onclick="window.app.setMoradiaScope('individual')">
                Só meu salário
              </button>
              <button class="seg-btn ${!m.isIndividualMoradia ? 'active' : ''}" onclick="window.app.setMoradiaScope('casal')">
                Salário do casal
              </button>
            </div>
          `}

          <div class="moradia-gauge-wrap">
            <div class="moradia-gauge-top-label">30%</div>
            <div class="moradia-bar-bg">
              <div class="moradia-bar-fill" style="width: ${moradiaBarWidth}%;"></div>
              <div class="moradia-bar-tick"></div>
            </div>
            <div class="moradia-gauge-labels">
              <span>0%</span>
              <span>60% do salário</span>
            </div>
          </div>

          <div class="section-mini-title">
            <span>O que entra na conta</span>
            <button class="edit-inline-btn" style="color:var(--blue-primary);font-weight:600;" onclick="window.app.openAddModal('conta')">+ Adicionar</button>
          </div>
          <div class="moradia-items-grid">
            ${moradiaItemsHTML}
          </div>
        </section>

        <!-- Card 6: Obra -->
        <section class="card col-span-2 obra-card" onclick="window.app.openObraModal()" style="cursor:pointer;" title="Clique para editar título, valor e descrição">
          <div class="obra-left">
            <h2 class="card-title">${d.obra.title} <span style="font-size:11px;color:var(--blue-primary);font-weight:500;">✎ Editar</span></h2>
            <div class="obra-val-row">
              <div class="obra-amount">
                <span>≈ R$</span>${obraParts.int}${obraParts.cents}
              </div>
              <span class="badge-estimado">estimado</span>
            </div>
            <p class="obra-desc">${d.obra.description}</p>
          </div>
          ${ILLUSTRATIONS.obra}
        </section>
      </div>
    `;
  }

  // Secondary Pages
  buildFluxoCaixaHTML() {
    const d = this.data;
    const m = this.getMetrics();
    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">Fluxo de Caixa (${this.isSolo ? 'Individual — ' + this.state.soloProfileName : 'Casal'})</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);margin-top:2px;">Entradas e saídas de ${MONTHS[this.state.monthIndex]} ${this.state.year}</p>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn-pill-outline" onclick="window.app.openAddModal('salario')">✎ Editar Renda</button>
            <button class="btn-primary" onclick="window.app.openAddModal('conta')">+ Nova Conta</button>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px;">
          <div style="padding:16px;border-radius:12px;background:var(--green-soft);border:1px solid rgba(22,163,74,0.2);">
            <span style="font-size:11.5px;color:var(--green-primary);font-weight:600;">Entradas (Salário)</span>
            <div style="font-size:22px;font-weight:800;color:var(--green-primary);margin-top:4px;">${formatBRL(m.salary)}</div>
          </div>
          <div style="padding:16px;border-radius:12px;background:var(--pink-soft);border:1px solid rgba(244,63,94,0.2);">
            <span style="font-size:11.5px;color:var(--pink-primary);font-weight:600;">Saídas Totais Previstas</span>
            <div style="font-size:22px;font-weight:800;color:var(--pink-primary);margin-top:4px;">– ${formatBRL(m.yourHouseShare + m.personal + m.daily)}</div>
          </div>
          <div style="padding:16px;border-radius:12px;background:var(--blue-soft);border:1px solid rgba(37,99,235,0.2);">
            <span style="font-size:11.5px;color:var(--blue-primary);font-weight:600;">Sobra Livre Estimada (${m.pctLeftover}%)</span>
            <div style="font-size:22px;font-weight:800;color:var(--blue-primary);margin-top:4px;">${formatBRL(m.leftover)}</div>
          </div>
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Vencimento</th>
              <th>Status</th>
              <th style="text-align:right;">Valor</th>
              <th style="text-align:right;">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Salário Mensal</strong></td>
              <td>Renda</td>
              <td>Dia 01</td>
              <td><span style="color:var(--green-primary);font-weight:600;">Recebido</span></td>
              <td style="text-align:right;font-weight:700;color:var(--green-primary);">+ ${formatBRL(m.salary)}</td>
              <td style="text-align:right;"><button class="edit-inline-btn" onclick="window.app.openAddModal('salario')">✎ Editar</button></td>
            </tr>
            ${d.payableBills.map(b => `
              <tr>
                <td onclick="window.app.toggleBillPaid('${b.id}')" style="cursor:pointer;"><strong>${b.name}</strong></td>
                <td>Contas a pagar</td>
                <td>Dia ${String(b.day).padStart(2, '0')}</td>
                <td onclick="window.app.toggleBillPaid('${b.id}')" style="cursor:pointer;">${b.paid ? '<span style="color:var(--green-primary);font-weight:600;">✓ Pago</span>' : '<span style="color:var(--amber-text);font-weight:600;">Pendente</span>'}</td>
                <td style="text-align:right;font-weight:600;">– ${formatBRL(b.amount)}</td>
                <td style="text-align:right;"><button class="edit-inline-btn" onclick="window.app.openEditPayableModal('${b.id}')">✎ Editar</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  buildCartoesPageHTML() {
    const d = this.data;
    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">Cartões e Próximas Faturas (${this.isSolo ? 'Individual' : 'Casal'})</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);">Adicione, edite ou exclua cartões e faturas futuras</p>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn-pill-outline" onclick="window.app.openUpcomingInvoicesModal()">📈 Editar Próximas Faturas</button>
            <button class="btn-primary" onclick="window.app.openCardFormModal()">+ Novo Cartão</button>
          </div>
        </div>

        ${d.cards.length === 0 ? `
          <div class="empty-box-dashed" style="padding:40px;">
            <p style="margin-bottom:10px;">Nenhum cartão cadastrado neste perfil.</p>
            <button class="btn-primary" onclick="window.app.openCardFormModal()">+ Cadastrar Primeiro Cartão</button>
          </div>
        ` : `
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:18px;">
            ${d.cards.map(c => `
              <div style="border:1px solid var(--border-color);border-radius:14px;padding:18px;background:var(--bg-card-subtle);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                  <strong style="font-size:16px;">${c.bank} — ${c.tier}</strong>
                  <span class="badge-estimado">${c.status} · Vence ${c.due}</span>
                </div>
                <div style="font-size:24px;font-weight:800;margin-bottom:4px;">${formatBRL(c.invoiceAmount)}</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Limite livre: <strong>${formatBRL(c.freeLimit)}</strong></div>
                <div style="display:flex;gap:8px;">
                  <button class="btn-pill-outline" onclick="window.app.openCardFormModal('${c.id}')">✎ Editar Cartão / Valor</button>
                  <button class="btn-danger" onclick="window.app.deleteCard('${c.id}')">Excluir</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  buildNossaCasaPageHTML() {
    const d = this.data;
    const m = this.getMetrics();
    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">${this.isSolo ? 'Minha Casa & Projetos' : 'Nossa Casa & Obra'}</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);">Gerencie custos de moradia e andamento de obra/projeto</p>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn-pill-outline" onclick="window.app.openObraModal()">🏗️ Editar Obra</button>
            <button class="btn-primary" onclick="window.app.openAddModal('conta')">+ Conta de Moradia</button>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div style="padding:18px;border:1px solid var(--border-color);border-radius:14px;">
            <h3 style="font-size:14px;margin-bottom:10px;">Moradia Atual (${m.moradiaPct}% da renda)</h3>
            <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:14px;">Custo: <strong>${formatBRL(m.moradiaDisplayTotal)}</strong></p>
            ${m.moradiaBills.length === 0 ? `<div class="empty-box-dashed">Nenhuma conta cadastrada.</div>` : m.moradiaBills.map(b => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-subtle);font-size:13px;">
                <span>${b.name}</span>
                <div>
                  <strong>${formatBRL(b.amount)}</strong>
                  <button class="edit-inline-btn" onclick="window.app.openEditHouseBillModal('${b.id}')">✎</button>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="padding:18px;border:1px solid var(--border-color);border-radius:14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <h3 style="font-size:14px;">${d.obra.title}</h3>
              ${ILLUSTRATIONS.obra}
            </div>
            <div style="font-size:24px;font-weight:800;margin:8px 0;">≈ ${formatBRL(d.obra.amount)}</div>
            <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:14px;">${d.obra.description}</p>
            <button class="btn-pill-outline" onclick="window.app.openObraModal()">✎ Alterar Dados da Obra</button>
          </div>
        </div>
      </div>
    `;
  }

  buildNossaReservaPageHTML() {
    const d = this.data;
    const r = d.reserva;
    const m = this.getMetrics();
    const pct = r.targetEmergency > 0 ? Math.min(100, Math.round((r.totalSaved / r.targetEmergency) * 100)) : 0;

    const availableMonth = Math.max(0, m.leftover);
    const savePct = r.savePctOfLeftover !== undefined ? Number(r.savePctOfLeftover) : 70;
    const canSaveAmount = Number(((availableMonth * savePct) / 100).toFixed(2));
    const remainingFreeAmount = Number((availableMonth - canSaveAmount).toFixed(2));

    const pctEmerg = r.pctEmergency !== undefined ? Number(r.pctEmergency) : 40;
    const pctInv = r.pctInvest !== undefined ? Number(r.pctInvest) : 30;
    const pctShort = r.pctShortTerm !== undefined ? Number(r.pctShortTerm) : 20;
    const pctFree = r.pctFree !== undefined ? Number(r.pctFree) : 10;

    const valEmerg = (availableMonth * pctEmerg) / 100;
    const valInv = (availableMonth * pctInv) / 100;
    const valShort = (availableMonth * pctShort) / 100;
    const valFree = (availableMonth * pctFree) / 100;

    const numFixed = (d.houseBills || []).length;
    const numLanDesp = (d.lancamentos || []).filter(l => !(l.kind === 'receita' || l.category === 'Salário' || l.category === 'Renda Extra')).length;

    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">${this.isSolo ? 'Minha Reserva & Saldo Disponível no Mês' : 'Nossa Reserva & Saldo Disponível no Mês'}</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);">Acompanhe quanto ainda resta disponível no mês e calcule quanto guardar</p>
          </div>
        </div>

        <!-- BLOCO 1: Valor Disponível no Mês de acordo com Contas Fixas e Lançamentos -->
        <div style="padding:18px;border-radius:14px;background:var(--bg-card-subtle);border:1px solid var(--border-color);margin-bottom:22px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
            <div>
              <strong style="font-size:14.5px;">📊 Valor Disponível no Mês (${MONTHS[this.state.monthIndex]} ${this.state.year})</strong>
              <p style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
                Calculado automaticamente a partir da sua Renda Mensal menos Contas Fixas e Lançamentos realizados
              </p>
            </div>
            <span style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:99px;background:var(--green-soft);color:var(--green-primary);">
              ${m.pctLeftover}% da renda livre
            </span>
          </div>

          <div class="kpi-grid-4">
            <div style="padding:14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <span style="font-size:11px;color:var(--text-secondary);font-weight:600;">1. Renda Mensal Total</span>
              <div style="font-size:19px;font-weight:800;color:var(--green-primary);margin-top:4px;">+ ${formatBRL(m.salary)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">Entradas do mês</small>
            </div>

            <div style="padding:14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <span style="font-size:11px;color:var(--text-secondary);font-weight:600;">2. Contas Fixas (${numFixed})</span>
              <div style="font-size:19px;font-weight:800;color:var(--pink-primary);margin-top:4px;">– ${formatBRL(m.yourHouseShare)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">${m.pctHouse}% da renda</small>
            </div>

            <div style="padding:14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <span style="font-size:11px;color:var(--text-secondary);font-weight:600;">3. Lançamentos (${numLanDesp})</span>
              <div style="font-size:19px;font-weight:800;color:var(--pink-primary);margin-top:4px;">– ${formatBRL(m.lancamentosExpensesTotal)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">Pessoais (${formatBRL(m.personal)}) + Dia a dia (${formatBRL(m.daily)})</small>
            </div>

            <div style="padding:14px;border-radius:10px;background:var(--blue-soft);border:1.5px solid rgba(37,99,235,0.35);">
              <span style="font-size:11px;color:var(--blue-primary);font-weight:700;">= VALOR DISPONÍVEL NO MÊS</span>
              <div style="font-size:22px;font-weight:800;color:var(--blue-primary);margin-top:4px;">${formatBRL(m.leftover)}</div>
              <small style="font-size:10.5px;color:var(--blue-primary);font-weight:600;">Saldo livre atual para alocar</small>
            </div>
          </div>
        </div>

        <!-- BLOCO 2: Cálculo de Quanto Posso Guardar com o Valor Disponível do Saldo -->
        <div style="padding:20px;border-radius:14px;background:var(--bg-card-subtle);border:1px solid var(--border-color);margin-bottom:24px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
            <div>
              <h3 style="font-size:15px;font-weight:700;">🧮 Cálculo: Quanto Posso Guardar com o Saldo Disponível (${formatBRL(availableMonth)})</h3>
              <p style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
                Escolha a porcentagem do saldo disponível que deseja guardar neste mês ou veja a divisão recomendada abaixo
              </p>
            </div>
            <button class="btn-primary" onclick="window.app.applyCalculatedSaveToReserva(${canSaveAmount})">
              ➕ Guardar ${formatBRL(canSaveAmount)} na Reserva Acumulada
            </button>
          </div>

          <!-- Simulador Direto por Porcentagem -->
          <div class="reserva-sim-grid" style="padding:14px;border-radius:12px;background:var(--bg-card);border:1px solid var(--border-subtle);margin-bottom:16px;">
            <div>
              <label style="font-size:12px;font-weight:700;display:block;margin-bottom:6px;">
                Porcentagem do Saldo Disponível para Guardar: <strong style="color:var(--blue-primary);">${savePct}%</strong>
              </label>
              <div style="display:flex;align-items:center;gap:10px;">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value="${savePct}"
                  style="flex:1;accent-color:var(--blue-primary);cursor:pointer;"
                  oninput="window.app.updateReserveCalcPct(this.value)"
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value="${savePct}"
                  class="form-control"
                  style="width:72px;text-align:center;font-weight:700;"
                  onchange="window.app.updateReserveCalcPct(this.value)"
                />
                <span style="font-size:12px;font-weight:700;">%</span>
              </div>
              <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
                <button class="btn-pill-outline" onclick="window.app.updateReserveCalcPct(40)">40% (Só Emergência)</button>
                <button class="btn-pill-outline" onclick="window.app.updateReserveCalcPct(70)">70% (Emergência + Invest.)</button>
                <button class="btn-pill-outline" onclick="window.app.updateReserveCalcPct(90)">90% (Com Metas)</button>
                <button class="btn-pill-outline" onclick="window.app.updateReserveCalcPct(100)">100% (Tudo)</button>
              </div>
            </div>

            <div style="padding:14px;border-radius:10px;background:var(--green-soft);border:1px solid rgba(22,163,74,0.25);text-align:center;">
              <span style="font-size:11.5px;color:var(--green-primary);font-weight:700;">VOCÊ PODE GUARDAR (${savePct}%)</span>
              <div style="font-size:24px;font-weight:800;color:var(--green-primary);margin-top:4px;">${formatBRL(canSaveAmount)}</div>
              <small style="font-size:11px;color:var(--text-secondary);">de ${formatBRL(availableMonth)} disponíveis</small>
            </div>

            <div style="padding:14px;border-radius:10px;background:var(--bg-card-subtle);border:1px solid var(--border-subtle);text-align:center;">
              <span style="font-size:11.5px;color:var(--text-secondary);font-weight:700;">RESTA LIVRE P/ USO (${100 - savePct}%)</span>
              <div style="font-size:22px;font-weight:800;color:var(--text-primary);margin-top:4px;">${formatBRL(remainingFreeAmount)}</div>
              <small style="font-size:11px;color:var(--text-muted);">após guardar na reserva</small>
            </div>
          </div>

          <!-- Divisão Sugerida do Saldo Disponível (4 Caixinhas da Planilha) -->
          <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">
            DISTRIBUIÇÃO SUGERIDA DO SALDO DISPONÍVEL (${formatBRL(availableMonth)}):
          </div>
          <div class="kpi-grid-4">
            <div style="padding:12px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;color:var(--green-primary);">
                <span>🛡️ Reserva Emergência</span>
                <span>${pctEmerg}%</span>
              </div>
              <div style="font-size:18px;font-weight:800;margin-top:4px;">${formatBRL(valEmerg)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">Segurança imprevistos</small>
            </div>

            <div style="padding:12px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;color:var(--blue-primary);">
                <span>📈 Investimentos</span>
                <span>${pctInv}%</span>
              </div>
              <div style="font-size:18px;font-weight:800;margin-top:4px;">${formatBRL(valInv)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">Longo prazo / Renda</small>
            </div>

            <div style="padding:12px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;color:#0284c7;">
                <span>🎯 Curto Prazo</span>
                <span>${pctShort}%</span>
              </div>
              <div style="font-size:18px;font-weight:800;margin-top:4px;">${formatBRL(valShort)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">Metas e projetos</small>
            </div>

            <div style="padding:12px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-subtle);">
              <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;color:var(--amber-text);">
                <span>🎉 Livre s/ Culpa</span>
                <span>${pctFree}%</span>
              </div>
              <div style="font-size:18px;font-weight:800;margin-top:4px;">${formatBRL(valFree)}</div>
              <small style="font-size:10.5px;color:var(--text-muted);">Lazer extra no mês</small>
            </div>
          </div>
        </div>

        <!-- BLOCO 3: Patrimônio & Meta da Reserva Acumulada -->
        <div class="kpi-grid-3" style="margin-bottom:24px;">
          <div style="padding:18px;border-radius:12px;background:var(--bg-card-subtle);border:1px solid var(--border-color);">
            <span style="font-size:12px;color:var(--text-secondary);">Saldo Acumulado na Reserva</span>
            <div style="font-size:26px;font-weight:800;color:var(--green-primary);margin-top:4px;">${formatBRL(r.totalSaved)}</div>
          </div>
          <div style="padding:18px;border-radius:12px;background:var(--bg-card-subtle);border:1px solid var(--border-color);">
            <span style="font-size:12px;color:var(--text-secondary);">Aporte Mensal Planejado (${savePct}% da Sobra)</span>
            <div style="font-size:26px;font-weight:800;margin-top:4px;">${formatBRL(r.monthlyGoal)}</div>
          </div>
          <div style="padding:18px;border-radius:12px;background:var(--bg-card-subtle);border:1px solid var(--border-color);">
            <span style="font-size:12px;color:var(--text-secondary);">Meta Total da Reserva (${pct}% atingido)</span>
            <div style="font-size:26px;font-weight:800;color:var(--blue-primary);margin-top:4px;">${formatBRL(r.targetEmergency)}</div>
          </div>
        </div>

        <div style="max-width:480px;">
          <h3 style="font-size:14px;margin-bottom:12px;">Editar Valores da Reserva Acumulada</h3>
          <div class="form-group">
            <label>Saldo Atual Guardado (R$)</label>
            <input type="number" step="0.01" id="inpResSaved" class="form-control" value="${r.totalSaved}" />
          </div>
          <div class="form-group">
            <label>Aporte Mensal Planejado (R$)</label>
            <input type="number" step="0.01" id="inpResMonthly" class="form-control" value="${r.monthlyGoal}" />
          </div>
          <div class="form-group">
            <label>Meta Total da Reserva (R$)</label>
            <input type="number" step="0.01" id="inpResTarget" class="form-control" value="${r.targetEmergency}" />
          </div>
          <button class="btn-primary" onclick="window.app.saveReservaForm()">Salvar Reserva</button>
        </div>
      </div>
    `;
  }

  updateReserveCalcPct(val) {
    const pct = Math.min(100, Math.max(0, parseInt(val, 10) || 0));
    this.data.reserva.savePctOfLeftover = pct;
    const m = this.getMetrics();
    const availableMonth = Math.max(0, m.leftover);
    this.data.reserva.monthlyGoal = Number(((availableMonth * pct) / 100).toFixed(2));
    this.saveState();
    this.renderMainView();
  }

  applyCalculatedSaveToReserva(amount) {
    const val = Number(amount) || 0;
    if (val <= 0) {
      this.showToast('O saldo disponível para guardar deve ser maior que zero.');
      return;
    }
    this.data.reserva.totalSaved = Number((Number(this.data.reserva.totalSaved || 0) + val).toFixed(2));
    this.data.reserva.monthlyGoal = val;
    this.saveState();
    this.renderMainView();
    this.showToast(`➕ ${formatBRL(val)} somados ao Saldo Acumulado da Reserva!`);
  }

  saveReservaForm() {
    this.data.reserva.totalSaved = parseFloat(document.getElementById('inpResSaved').value) || 0;
    this.data.reserva.monthlyGoal = parseFloat(document.getElementById('inpResMonthly').value) || 0;
    this.data.reserva.targetEmergency = parseFloat(document.getElementById('inpResTarget').value) || 0;
    this.saveState();
    this.renderMainView();
    this.showToast('Reserva atualizada com sucesso!');
  }

  buildNossaRendaPageHTML() {
    const d = this.data;
    const isSolo = this.isSolo;
    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">${isSolo ? 'Minha Renda & Orçamento Individual' : 'Nossa Renda & Orçamento do Casal'}</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);">Altere os valores abaixo para recalcular o Saldo Previsto</p>
          </div>
        </div>
        <div style="max-width:520px;">
          <div class="form-group">
            <label>${isSolo ? `Meu Salário (${this.state.soloProfileName}) (R$)` : 'Salário Pessoa 1 (R$)'}</label>
            <input type="number" step="0.01" id="inpSalYou" class="form-control" value="${d.salaryYou}" />
          </div>
          ${!isSolo ? `
            <div class="form-group">
              <label>Salário Esposa (R$)</label>
              <input type="number" step="0.01" id="inpSalPartner" class="form-control" value="${d.salaryPartner}" />
            </div>
          ` : ''}
          <div class="form-group">
            <label>Contas Pessoais (R$)</label>
            <input type="number" step="0.01" id="inpPersonal" class="form-control" value="${d.personalBillsYou}" />
          </div>
          <div class="form-group">
            <label>Gastos Dia a Dia (R$)</label>
            <input type="number" step="0.01" id="inpDaily" class="form-control" value="${d.dailyExpensesYou}" />
          </div>
          <button class="btn-primary" onclick="window.app.saveRendaForm()">Salvar Alterações</button>
        </div>
      </div>
    `;
  }

  saveRendaForm() {
    const d = this.data;
    d.salaryYou = parseFloat(document.getElementById('inpSalYou').value) || 0;
    const partnerInp = document.getElementById('inpSalPartner');
    if (partnerInp) {
      d.salaryPartner = parseFloat(partnerInp.value) || 0;
    }
    d.personalBillsYou = parseFloat(document.getElementById('inpPersonal').value) || 0;
    d.dailyExpensesYou = parseFloat(document.getElementById('inpDaily').value) || 0;
    this.saveState();
    this.showToast('Renda atualizada com sucesso!');
    this.setTab('visao-geral');
  }

  buildContasCasaPageHTML() {
    const d = this.data;
    const isSolo = this.isSolo;
    const m = this.getMetrics();
    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">${isSolo ? 'Minhas Contas Fixas' : 'Contas da Casa & Fixas (Casal)'}</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);">
              Cadastre suas contas fixas aqui — elas ficam salvas em Contas Fixas e aparecem automaticamente em <strong>Contas a Pagar</strong> na Visão Geral conforme o dia de vencimento
            </p>
          </div>
          <button class="btn-primary" onclick="window.app.openAddModal('conta')">+ Nova Conta Fixa (Modal)</button>
        </div>

        <!-- Barra Rápida para Cadastrar Conta Fixa Diretamente -->
        <div class="contas-fixas-form-bar">
          <div class="form-group">
            <label>Nome da Conta Fixa</label>
            <input type="text" id="inlHbName" class="form-control" placeholder="Ex: Conta de Energia, Internet, Aluguel..." />
          </div>
          <div class="form-group">
            <label>Valor Mensal (R$)</label>
            <input type="number" step="0.01" id="inlHbAmount" class="form-control" placeholder="0,00" />
          </div>
          <div class="form-group">
            <label>Dia Vencimento</label>
            <input type="number" min="1" max="31" id="inlHbDay" class="form-control" value="${d.selectedBillDay || 6}" />
          </div>
          <div class="form-group">
            <label>Entra em Moradia?</label>
            <select id="inlHbMoradia" class="form-control">
              <option value="sim">🏠 Sim (Moradia)</option>
              <option value="nao">📌 Não (Outra Fixa)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Ícone</label>
            <select id="inlHbIcon" class="form-control">
              <option value="bolt">⚡ Energia / Luz</option>
              <option value="wifi">📶 Internet / Assinatura</option>
              <option value="building">🏢 Condomínio / Faculdade</option>
              <option value="key">🔑 Aluguel / Casa</option>
              <option value="card">💳 Investimento / Cartão</option>
            </select>
          </div>
          <button class="btn-primary" style="height:37px;white-space:nowrap;" onclick="window.app.submitInlineHouseBill()">
            + Salvar Conta Fixa
          </button>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-radius:10px;background:var(--bg-card-subtle);border:1px solid var(--border-subtle);margin-bottom:16px;">
          <span style="font-size:12.5px;color:var(--text-secondary);">Total de Contas Fixas Cadastradas (${d.houseBills.length}):</span>
          <strong style="font-size:16px;color:var(--text-primary);">${formatBRL(m.houseTotal)} <span style="font-size:12px;color:var(--text-muted);font-weight:500;">(${m.pctHouse}% da renda)</span></strong>
        </div>

        ${d.houseBills.length === 0 ? `
          <div class="empty-box-dashed" style="padding:36px;">
            Nenhuma conta fixa cadastrada. Use a barra acima para cadastrar!
          </div>
        ` : `
          <table class="data-table">
            <thead>
              <tr>
                <th>Conta Fixa</th>
                <th>Dia de Vencimento</th>
                <th>Status no Mês</th>
                ${!isSolo ? `<th>Responsável</th>` : ''}
                <th>Entra em Moradia?</th>
                <th style="text-align:right;">Valor Mensal</th>
                <th style="text-align:right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${d.houseBills.map(b => `
                <tr>
                  <td><strong>${b.name}</strong></td>
                  <td><span class="pay-badge">Dia ${String(b.day || 6).padStart(2, '0')}</span></td>
                  <td onclick="window.app.toggleUnifiedBillPaid('fixa', '${b.id}')" style="cursor:pointer;" title="Clique para alternar Pago / Pendente">
                    ${b.paid
                      ? '<span style="color:var(--green-primary);font-weight:600;">✓ Paga</span>'
                      : '<span style="color:var(--amber-text);font-weight:600;">⏳ Pendente</span>'}
                  </td>
                  ${!isSolo ? `
                    <td>
                      <button class="btn-pill-outline" onclick="window.app.toggleHouseBillPayer('${b.id}')">
                        <span class="dot ${b.payer === 'voce' ? 'blue' : 'pink'}"></span>
                        ${b.payer === 'voce' ? 'Você paga (1)' : 'Esposa paga (E)'}
                      </button>
                    </td>
                  ` : ''}
                  <td>${b.inMoradia ? 'Sim (Moradia)' : 'Não (Outra Fixa)'}</td>
                  <td style="text-align:right;font-weight:700;">${formatBRL(b.amount)}</td>
                  <td style="text-align:right;">
                    <button class="edit-inline-btn" onclick="window.app.openEditHouseBillModal('${b.id}')">✎ Editar</button>
                    <button class="edit-inline-btn" style="color:var(--pink-primary);" onclick="window.app.deleteHouseBill('${b.id}')">Excluir</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `}
      </div>
    `;
  }

  submitInlineHouseBill() {
    const d = this.data;
    const name = document.getElementById('inlHbName')?.value.trim();
    const amount = parseFloat(document.getElementById('inlHbAmount')?.value);
    const day = Math.min(31, Math.max(1, parseInt(document.getElementById('inlHbDay')?.value, 10) || 6));
    const inMoradia = document.getElementById('inlHbMoradia')?.value === 'sim';
    const icon = document.getElementById('inlHbIcon')?.value || 'bolt';

    if (!name || isNaN(amount) || amount <= 0) {
      this.showToast('Informe o nome da conta fixa e um valor maior que zero.');
      return;
    }

    d.houseBills.push({
      id: 'hb_' + Date.now(),
      name,
      amount,
      day,
      paid: false,
      payer: 'voce',
      inMoradia,
      icon,
      approx: false
    });
    d.selectedBillDay = day;

    this.saveState();
    this.renderAll();
    this.showToast(`✓ Conta fixa "${name}" (Dia ${String(day).padStart(2, '0')}) salva em Contas Fixas e Contas a Pagar!`);
  }

  deleteHouseBill(id) {
    this.data.houseBills = this.data.houseBills.filter(b => b.id !== id);
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Conta fixa removida.');
  }

  deletePayableBill(id) {
    this.data.payableBills = this.data.payableBills.filter(b => b.id !== id);
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Conta a pagar removida.');
  }

  deleteCard(id) {
    this.data.cards = this.data.cards.filter(c => c.id !== id);
    this.data.activeCardIndex = 0;
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Cartão removido.');
  }

  // Profile Settings Modal (customize Individual Profile Name)
  openProfileSettingsModal() {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
      <div class="modal-header">
        <h3>Configurar Perfil & Modo</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>Modo de Controle Ativo</label>
        <select id="modProfileMode" class="form-control">
          <option value="solo" ${this.isSolo ? 'selected' : ''}>👤 Perfil Individual (Separado do casal)</option>
          <option value="casal" ${!this.isSolo ? 'selected' : ''}>👥 Modo Casal (Compartilhado)</option>
        </select>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Nome do Perfil Individual</label>
          <input type="text" id="modSoloName" class="form-control" value="${this.state.soloProfileName || 'JHN'}" />
        </div>
        <div class="form-group">
          <label>Sigla / Letra do Avatar</label>
          <input type="text" maxlength="2" id="modSoloInitial" class="form-control" value="${this.state.soloProfileInitial || 'J'}" />
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn-primary" onclick="window.app.submitProfileSettingsModal()">Salvar</button>
      </div>
    `;
    modal.classList.add('open');
  }

  submitProfileSettingsModal() {
    const mode = document.getElementById('modProfileMode').value;
    const name = document.getElementById('modSoloName').value.trim() || 'JHN';
    const initial = (document.getElementById('modSoloInitial').value.trim() || name[0] || 'J').toUpperCase();
    this.state.mode = mode;
    this.state.soloProfileName = name;
    this.state.soloProfileInitial = initial;
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Configurações de perfil salvas!');
  }

  // Modals for Editing Everything
  openAddModal(type = 'conta') {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const d = this.data;
    const isSolo = this.isSolo;
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');

    if (type === 'salario') {
      content.innerHTML = `
        <div class="modal-header">
          <h3>${isSolo ? `Editar Salário e Despesas (${this.state.soloProfileName})` : 'Editar Salários e Despesas (Casal)'}</h3>
          <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
        </div>
        <div class="${isSolo ? '' : 'form-row-2'}">
          <div class="form-group">
            <label>${isSolo ? 'Meu Salário Líquido (R$)' : 'Salário Pessoa 1 (R$)'}</label>
            <input type="number" step="0.01" id="modSalary" class="form-control" value="${d.salaryYou}" />
          </div>
          ${!isSolo ? `
            <div class="form-group">
              <label>Salário Esposa (R$)</label>
              <input type="number" step="0.01" id="modSalaryPartner" class="form-control" value="${d.salaryPartner}" />
            </div>
          ` : ''}
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Contas Pessoais (R$)</label>
            <input type="number" step="0.01" id="modPersonal" class="form-control" value="${d.personalBillsYou}" />
          </div>
          <div class="form-group">
            <label>Dia a dia (R$)</label>
            <input type="number" step="0.01" id="modDaily" class="form-control" value="${d.dailyExpensesYou}" />
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button class="btn-primary" onclick="window.app.submitSalaryModal()">Salvar</button>
        </div>
      `;
    } else {
      content.innerHTML = `
        <div class="modal-header">
          <h3>Adicionar Conta Fixa (${isSolo ? 'Perfil Individual' : 'Casal'})</h3>
          <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
        </div>
        <div class="form-group">
          <label>Nome da Conta Fixa</label>
          <input type="text" id="modBillName" class="form-control" placeholder="Ex: Aluguel, Condomínio, Luz, Internet..." />
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Valor (R$)</label>
            <input type="number" step="0.01" id="modBillVal" class="form-control" placeholder="0.00" />
          </div>
          <div class="form-group">
            <label>Dia de Vencimento (1 a 31)</label>
            <input type="number" min="1" max="31" id="modBillDay" class="form-control" value="${d.selectedBillDay || 6}" />
          </div>
        </div>
        <div class="form-row-2">
          ${!isSolo ? `
            <div class="form-group">
              <label>Quem paga na divisão?</label>
              <select id="modBillPayer" class="form-control">
                <option value="voce">Você paga (Pessoa 1)</option>
                <option value="esposa">Esposa paga (E)</option>
              </select>
            </div>
          ` : `
            <input type="hidden" id="modBillPayer" value="voce" />
          `}
          <div class="form-group" style="${isSolo ? 'grid-column: span 2;' : ''}">
            <label>Ícone em Moradia</label>
            <select id="modBillIcon" class="form-control">
              <option value="building">🏢 Condomínio / Prédio</option>
              <option value="key">🔑 Aluguel / Chave</option>
              <option value="bolt">⚡ Luz / Energia</option>
              <option value="wifi">📶 Internet / TV</option>
              <option value="card">💳 Cartão / Reserva</option>
              <option value="cone">🏗️ Obra / Financiamento</option>
            </select>
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Status deste Mês</label>
            <select id="modBillPaid" class="form-control">
              <option value="nao">⏳ Pendente</option>
              <option value="sim">✓ Paga</option>
            </select>
          </div>
          <div class="form-group">
            <label>Entra no cálculo de Moradia?</label>
            <select id="modBillMoradia" class="form-control">
              <option value="sim">Sim (Custo de morar)</option>
              <option value="nao">Não (Ex: Educação / Assinatura / Reserva)</option>
            </select>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button class="btn-primary" onclick="window.app.submitNewBillModal()">Salvar Conta Fixa</button>
        </div>
      `;
    }
    modal.classList.add('open');
  }

  submitSalaryModal() {
    const d = this.data;
    d.salaryYou = parseFloat(document.getElementById('modSalary').value) || 0;
    const pInp = document.getElementById('modSalaryPartner');
    if (pInp) {
      d.salaryPartner = parseFloat(pInp.value) || 0;
    }
    d.personalBillsYou = parseFloat(document.getElementById('modPersonal').value) || 0;
    d.dailyExpensesYou = parseFloat(document.getElementById('modDaily').value) || 0;
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Valores atualizados!');
  }

  submitNewBillModal() {
    const d = this.data;
    const name = document.getElementById('modBillName').value.trim();
    const amount = parseFloat(document.getElementById('modBillVal').value) || 0;
    const day = Math.min(31, Math.max(1, parseInt(document.getElementById('modBillDay').value, 10) || 6));
    const payer = document.getElementById('modBillPayer')?.value || 'voce';
    const icon = document.getElementById('modBillIcon').value;
    const paid = document.getElementById('modBillPaid')?.value === 'sim';
    const inMoradia = document.getElementById('modBillMoradia').value === 'sim';

    if (!name) {
      this.showToast('Informe o nome da conta fixa.');
      return;
    }

    // Salva diretamente em Contas Fixas (houseBills), que também vincula automaticamente com Contas a Pagar pelo dia!
    d.houseBills.push({
      id: 'hb_' + Date.now(),
      name,
      amount,
      day,
      paid,
      payer,
      inMoradia,
      icon,
      approx: false
    });
    d.selectedBillDay = day;

    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast(`✓ Conta fixa "${name}" salva em Contas Fixas e vinculada ao dia ${String(day).padStart(2, '0')}!`);
  }

  openEditHouseBillModal(id) {
    const b = this.data.houseBills.find(x => x.id === id);
    if (!b) return;
    const isSolo = this.isSolo;
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
      <div class="modal-header">
        <h3>Editar Conta Fixa</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>Nome da Conta Fixa</label>
        <input type="text" id="editHbName" class="form-control" value="${b.name}" />
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Valor Mensal (R$)</label>
          <input type="number" step="0.01" id="editHbVal" class="form-control" value="${b.amount}" />
        </div>
        <div class="form-group">
          <label>Dia de Vencimento (1 a 31)</label>
          <input type="number" min="1" max="31" id="editHbDay" class="form-control" value="${b.day || 6}" />
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Status no Mês</label>
          <select id="editHbPaid" class="form-control">
            <option value="sim" ${b.paid ? 'selected' : ''}>✓ Paga</option>
            <option value="nao" ${!b.paid ? 'selected' : ''}>⏳ Pendente</option>
          </select>
        </div>
        ${!isSolo ? `
          <div class="form-group">
            <label>Quem paga?</label>
            <select id="editHbPayer" class="form-control">
              <option value="voce" ${b.payer === 'voce' ? 'selected' : ''}>Você paga (Pessoa 1)</option>
              <option value="esposa" ${b.payer === 'esposa' ? 'selected' : ''}>Esposa paga (E)</option>
            </select>
          </div>
        ` : `<input type="hidden" id="editHbPayer" value="voce" />`}
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Entra em Moradia?</label>
          <select id="editHbMoradia" class="form-control">
            <option value="sim" ${b.inMoradia ? 'selected' : ''}>Sim</option>
            <option value="nao" ${!b.inMoradia ? 'selected' : ''}>Não</option>
          </select>
        </div>
        <div class="form-group">
          <label>Ícone</label>
          <select id="editHbIcon" class="form-control">
            <option value="building" ${b.icon === 'building' ? 'selected' : ''}>🏢 Condomínio</option>
            <option value="key" ${b.icon === 'key' ? 'selected' : ''}>🔑 Aluguel</option>
            <option value="bolt" ${b.icon === 'bolt' ? 'selected' : ''}>⚡ Luz</option>
            <option value="wifi" ${b.icon === 'wifi' ? 'selected' : ''}>📶 Internet</option>
            <option value="card" ${b.icon === 'card' ? 'selected' : ''}>💳 Cartão / Investimento</option>
            <option value="cone" ${b.icon === 'cone' ? 'selected' : ''}>🏗️ Obra</option>
          </select>
        </div>
      </div>
      <div class="modal-actions" style="justify-content:space-between;">
        <button class="btn-danger" onclick="window.app.deleteHouseBill('${b.id}')">Excluir</button>
        <div style="display:flex;gap:8px;">
          <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button class="btn-primary" onclick="window.app.submitEditHouseBillModal('${b.id}')">Salvar</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
  }

  submitEditHouseBillModal(id) {
    const b = this.data.houseBills.find(x => x.id === id);
    if (!b) return;
    b.name = document.getElementById('editHbName').value.trim() || b.name;
    b.amount = parseFloat(document.getElementById('editHbVal').value) || 0;
    b.day = Math.min(31, Math.max(1, parseInt(document.getElementById('editHbDay')?.value, 10) || b.day || 6));
    b.paid = document.getElementById('editHbPaid')?.value === 'sim';
    b.payer = document.getElementById('editHbPayer')?.value || 'voce';
    b.inMoradia = document.getElementById('editHbMoradia').value === 'sim';
    b.icon = document.getElementById('editHbIcon').value;
    this.data.selectedBillDay = b.day;
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Conta fixa atualizada!');
  }

  openCardFormModal(cardId = '') {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const existing = this.data.cards.find(c => c.id === cardId);
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
      <div class="modal-header">
        <h3>${existing ? 'Editar Cartão de Crédito' : 'Adicionar Novo Cartão'}</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Nome do Banco / Emissor</label>
          <input type="text" id="modCardBank" class="form-control" placeholder="Ex: Santander, Itaú, Nubank..." value="${existing ? existing.bank : ''}" />
        </div>
        <div class="form-group">
          <label>Linha / Nome no Cartão</label>
          <input type="text" id="modCardTier" class="form-control" placeholder="Ex: UNIQUE, BLACK, ULTRA..." value="${existing ? existing.tier : ''}" />
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Valor da Fatura Atual (R$)</label>
          <input type="number" step="0.01" id="modCardInvoice" class="form-control" value="${existing ? existing.invoiceAmount : 0}" />
        </div>
        <div class="form-group">
          <label>Limite Livre (R$)</label>
          <input type="number" step="0.01" id="modCardLimit" class="form-control" value="${existing ? existing.freeLimit : 0}" />
        </div>
      </div>
      <div class="form-row-3">
        <div class="form-group">
          <label>Vencimento</label>
          <input type="text" id="modCardDue" class="form-control" placeholder="05/12" value="${existing ? existing.due : '05/12'}" />
        </div>
        <div class="form-group">
          <label>Status</label>
          <select id="modCardStatus" class="form-control">
            <option value="Aberta" ${existing && existing.status === 'Aberta' ? 'selected' : ''}>Aberta</option>
            <option value="Fechada" ${existing && existing.status === 'Fechada' ? 'selected' : ''}>Fechada</option>
            <option value="Paga" ${existing && existing.status === 'Paga' ? 'selected' : ''}>Paga</option>
          </select>
        </div>
        <div class="form-group">
          <label>Cor do Cartão</label>
          <select id="modCardTheme" class="form-control">
            <option value="santander" ${existing && existing.theme === 'santander' ? 'selected' : ''}>Preto Metal</option>
            <option value="itau" ${existing && existing.theme === 'itau' ? 'selected' : ''}>Laranja</option>
            <option value="nubank" ${existing && existing.theme === 'nubank' ? 'selected' : ''}>Roxo</option>
            <option value="azul" ${existing && existing.theme === 'azul' ? 'selected' : ''}>Azul</option>
            <option value="verde" ${existing && existing.theme === 'verde' ? 'selected' : ''}>Verde</option>
          </select>
        </div>
      </div>
      <div class="modal-actions" style="justify-content:${existing ? 'space-between' : 'flex-end'};">
        ${existing ? `<button class="btn-danger" onclick="window.app.deleteCard('${existing.id}')">Excluir Cartão</button>` : ''}
        <div style="display:flex;gap:8px;">
          <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button class="btn-primary" onclick="window.app.submitCardFormModal('${existing ? existing.id : ''}')">Salvar Cartão</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
  }

  submitCardFormModal(cardId = '') {
    const d = this.data;
    const bank = document.getElementById('modCardBank').value.trim() || 'Cartão';
    const tier = document.getElementById('modCardTier').value.trim() || 'CRÉDITO';
    const invoiceAmount = parseFloat(document.getElementById('modCardInvoice').value) || 0;
    const freeLimit = parseFloat(document.getElementById('modCardLimit').value) || 0;
    const due = document.getElementById('modCardDue').value.trim() || '05/12';
    const status = document.getElementById('modCardStatus').value;
    const theme = document.getElementById('modCardTheme').value;

    if (cardId) {
      const card = d.cards.find(c => c.id === cardId);
      if (card) {
        card.bank = bank;
        card.tier = tier;
        card.invoiceAmount = invoiceAmount;
        card.freeLimit = freeLimit;
        card.due = due;
        card.status = status;
        card.theme = theme;
      }
    } else {
      d.cards.push({
        id: 'c_' + Date.now(),
        bank,
        tier,
        invoiceAmount,
        freeLimit,
        due,
        status,
        theme,
        items: []
      });
      d.activeCardIndex = d.cards.length - 1;
    }

    if (d.upcomingInvoices.length > 0 && d.activeCardIndex === 0) {
      d.upcomingInvoices[0].amount = invoiceAmount;
    }

    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Cartão salvo com sucesso!');
  }

  openUpcomingInvoicesModal(selectedIdx = 0) {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const d = this.data;
    d.activeInvoiceIdx = selectedIdx;
    const invs = d.upcomingInvoices;
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
      <div class="modal-header">
        <h3>Editar Próximas Faturas</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">
        Defina os meses, status e valores previstos para as 3 próximas faturas:
      </p>
      ${invs.map((inv, i) => `
        <div class="form-row-3" style="margin-bottom:10px;">
          <div class="form-group" style="margin-bottom:0;">
            <label>Mês ${i + 1}</label>
            <input type="text" id="upLabel_${i}" class="form-control" value="${inv.label}" />
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label>Tag / Status</label>
            <input type="text" id="upStatus_${i}" class="form-control" placeholder="Ex: Aberta" value="${inv.status}" />
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label>Valor (R$)</label>
            <input type="number" step="0.01" id="upAmount_${i}" class="form-control" value="${inv.amount}" />
          </div>
        </div>
      `).join('')}
      <div class="modal-actions">
        <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn-primary" onclick="window.app.submitUpcomingInvoicesModal()">Salvar Faturas</button>
      </div>
    `;
    modal.classList.add('open');
  }

  submitUpcomingInvoicesModal() {
    const d = this.data;
    d.upcomingInvoices = d.upcomingInvoices.map((inv, i) => ({
      label: document.getElementById(`upLabel_${i}`).value.trim() || inv.label,
      status: document.getElementById(`upStatus_${i}`).value.trim(),
      amount: parseFloat(document.getElementById(`upAmount_${i}`).value) || 0
    }));
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Próximas faturas atualizadas!');
  }

  openObraModal() {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const d = this.data;
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
      <div class="modal-header">
        <h3>Editar Obra / Projeto</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>Título do Card</label>
        <input type="text" id="modObraTitle" class="form-control" value="${d.obra.title}" />
      </div>
      <div class="form-group">
        <label>Valor Estimado (R$)</label>
        <input type="number" step="0.01" id="modObraVal" class="form-control" value="${d.obra.amount}" />
      </div>
      <div class="form-group">
        <label>Descrição / Data do Débito</label>
        <input type="text" id="modObraDesc" class="form-control" value="${d.obra.description}" />
      </div>
      <div class="modal-actions">
        <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn-primary" onclick="window.app.submitObraModal()">Salvar</button>
      </div>
    `;
    modal.classList.add('open');
  }

  submitObraModal() {
    const d = this.data;
    const title = document.getElementById('modObraTitle').value.trim() || 'Obra / Projeto';
    const val = parseFloat(document.getElementById('modObraVal').value) || 0;
    const desc = document.getElementById('modObraDesc').value.trim();
    d.obra.title = title;
    d.obra.amount = val;
    d.obra.description = desc;

    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Card de Obra atualizado!');
  }

  // Sincroniza Renda Mensal Total, Contas Pessoais e Dia a Dia a partir dos Lançamentos (SEM sobrescrever Contas Fixas!)
  syncFromLancamentos() {
    const d = this.data;
    if (!Array.isArray(d.lancamentos)) {
      d.lancamentos = [];
      return;
    }

    let totalReceitas = 0;
    let hasReceita = false;
    let totalPersonal = 0;
    let totalDaily = 0;

    d.lancamentos.forEach(item => {
      const val = Number(item.amount) || 0;
      if (item.kind === 'receita' || item.category === 'Salário' || item.category === 'Renda Extra') {
        totalReceitas += val;
        hasReceita = true;
      } else if (['Alimentação', 'Lazer'].includes(item.category)) {
        totalDaily += val;
      } else {
        totalPersonal += val;
      }
    });

    if (hasReceita) {
      d.salaryYou = Number(totalReceitas.toFixed(2));
    }
    d.personalBillsYou = Number(totalPersonal.toFixed(2));
    d.dailyExpensesYou = Number(totalDaily.toFixed(2));
  }

  formatDateBR(isoDate) {
    if (!isoDate) return '-';
    const parts = isoDate.split('-');
    if (parts.length !== 3) return isoDate;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  buildLancamentosHTML() {
    const d = this.data;
    if (!Array.isArray(d.lancamentos)) d.lancamentos = [];
    const m = this.getMetrics();
    const todayISO = `2026-${String(this.state.monthIndex + 1).padStart(2, '0')}-06`;

    return `
      <div class="card">
        <div class="subpage-header">
          <div>
            <h2 style="font-size:18px;font-weight:700;">Lançamentos (${this.isSolo ? 'Individual — ' + this.state.soloProfileName : 'Casal'})</h2>
            <p style="font-size:12.5px;color:var(--text-secondary);margin-top:2px;">
              Adicione receitas (somam na Renda Mensal Total) ou despesas variáveis (subtraem para a Sobra e aparecem em Contas a Pagar pelo dia)
            </p>
          </div>
          <button class="btn-primary" onclick="window.app.openLancamentoModal()">+ Novo Lançamento em Modal</button>
        </div>

        <!-- KPIs em tempo real -->
        <div class="kpi-grid-4" style="margin-bottom:18px;">
          <div style="padding:14px;border-radius:12px;background:var(--green-soft);border:1px solid rgba(22,163,74,0.2);">
            <span style="font-size:11px;color:var(--green-primary);font-weight:600;">Renda Mensal Total</span>
            <div style="font-size:20px;font-weight:800;color:var(--green-primary);margin-top:4px;">+ ${formatBRL(m.salary)}</div>
          </div>
          <div style="padding:14px;border-radius:12px;background:var(--bg-card-subtle);border:1px solid var(--border-color);">
            <span style="font-size:11px;color:var(--text-secondary);font-weight:600;">Contas Fixas (${d.houseBills.length})</span>
            <div style="font-size:20px;font-weight:800;color:var(--pink-primary);margin-top:4px;">– ${formatBRL(m.yourHouseShare)}</div>
          </div>
          <div style="padding:14px;border-radius:12px;background:var(--pink-soft);border:1px solid rgba(244,63,94,0.2);">
            <span style="font-size:11px;color:var(--pink-primary);font-weight:600;">Gastos Lançados Abaixo</span>
            <div style="font-size:20px;font-weight:800;color:var(--pink-primary);margin-top:4px;">– ${formatBRL(m.lancamentosExpensesTotal)}</div>
          </div>
          <div style="padding:14px;border-radius:12px;background:var(--blue-soft);border:1px solid rgba(37,99,235,0.2);">
            <span style="font-size:11px;color:var(--blue-primary);font-weight:600;">= Sobra da Renda (${m.pctLeftover}%)</span>
            <div style="font-size:20px;font-weight:800;color:var(--blue-primary);margin-top:4px;">${formatBRL(m.leftover)}</div>
          </div>
        </div>

        <!-- Barra Rápida de Lançamento -->
        <div class="lancamentos-form-bar">
          <div class="form-group">
            <label>Descrição pequena</label>
            <input type="text" id="inlDesc" class="form-control" placeholder="Ex: Mercado, Conta de luz, Salário..." />
          </div>
          <div class="form-group">
            <label>Tipo de Gasto / Receita</label>
            <select id="inlCategory" class="form-control">
              <optgroup label="➖ Tipos de Gasto (Subtraem para a Sobra)">
                <option value="Alimentação">🍔 Alimentação (Dia a dia)</option>
                <option value="Moradia">🏠 Moradia (Casa)</option>
                <option value="Transporte">🚗 Transporte (Pessoal)</option>
                <option value="Saúde">🏥 Saúde (Pessoal)</option>
                <option value="Educação">🎓 Educação (Fixa)</option>
                <option value="Lazer">🎉 Lazer (Dia a dia)</option>
                <option value="Assinaturas/Serviços">📺 Assinaturas/Serviços (Fixa)</option>
                <option value="Investimentos">💰 Investimentos / Reserva</option>
                <option value="Imprevistos">⚠️ Imprevistos (Pessoal)</option>
                <option value="Outros">📦 Outros (Pessoal)</option>
                <option value="Fatura">💳 Fatura de Cartão</option>
              </optgroup>
              <optgroup label="➕ Entradas (Adicionam na Renda Mensal)">
                <option value="Salário">💵 Salário (+ Renda Mensal)</option>
                <option value="Renda Extra">📈 Renda Extra (+ Renda Mensal)</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group">
            <label>Valor (R$)</label>
            <input type="number" step="0.01" id="inlAmount" class="form-control" placeholder="0,00" />
          </div>
          <div class="form-group">
            <label>Data</label>
            <input type="date" id="inlDate" class="form-control" value="${todayISO}" />
          </div>
          <div class="form-group">
            <label>Forma de Pagamento</label>
            <select id="inlPayment" class="form-control">
              <option value="Pix">Pix</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Boleto">Boleto</option>
              <option value="Transferência">Transferência</option>
            </select>
          </div>
          <button class="btn-primary" style="height:37px;white-space:nowrap;" onclick="window.app.submitInlineLancamento()">
            + Lançar
          </button>
        </div>

        <!-- Tabela de Lançamentos -->
        ${d.lancamentos.length === 0 ? `
          <div class="empty-box-dashed" style="padding:36px;">
            Nenhum lançamento registrado neste perfil. Use a barra acima para adicionar receitas ou gastos!
          </div>
        ` : `
          <table class="data-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Tipo de Gasto / Categoria</th>
                <th>Forma de Pagamento</th>
                <th>Status</th>
                <th style="text-align:right;">Valor</th>
                <th style="text-align:right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${d.lancamentos.map(l => {
                const isRec = l.kind === 'receita' || l.category === 'Salário' || l.category === 'Renda Extra';
                return `
                  <tr>
                    <td style="white-space:nowrap;color:var(--text-secondary);">${this.formatDateBR(l.date)}</td>
                    <td><strong>${l.desc}</strong></td>
                    <td>
                      <span class="cat-badge ${isRec ? 'receita' : 'despesa'}">
                        ${isRec ? '➕ ' : '➖ '}${l.category}
                      </span>
                    </td>
                    <td><span class="pay-badge">${l.paymentMethod || 'Pix'}</span></td>
                    <td onclick="window.app.toggleLancamentoPaid('${l.id}')" style="cursor:pointer;" title="Clique para alternar Pago/Pendente">
                      ${l.paid
                        ? `<span style="color:var(--green-primary);font-weight:600;">✓ ${isRec ? 'Recebido' : 'Pago'}</span>`
                        : `<span style="color:var(--amber-text);font-weight:600;">⏳ Pendente</span>`}
                    </td>
                    <td style="text-align:right;font-weight:700;color:${isRec ? 'var(--green-primary)' : 'var(--text-primary)'};">
                      ${isRec ? '+ ' : '– '}${formatBRL(l.amount)}
                    </td>
                    <td style="text-align:right;white-space:nowrap;">
                      <button class="edit-inline-btn" onclick="window.app.openLancamentoModal('${l.id}')">✎ Editar</button>
                      <button class="edit-inline-btn" style="color:var(--pink-primary);" onclick="window.app.deleteLancamento('${l.id}')">Excluir</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `}
      </div>
    `;
  }

  submitInlineLancamento() {
    const desc = document.getElementById('inlDesc')?.value.trim();
    const category = document.getElementById('inlCategory')?.value || 'Alimentação';
    const amount = parseFloat(document.getElementById('inlAmount')?.value);
    const date = document.getElementById('inlDate')?.value || '2026-11-06';
    const paymentMethod = document.getElementById('inlPayment')?.value || 'Pix';

    if (!desc || isNaN(amount) || amount <= 0) {
      this.showToast('Preencha uma descrição curta e um valor maior que zero.');
      return;
    }

    const isReceita = category === 'Salário' || category === 'Renda Extra';
    const d = this.data;
    if (!Array.isArray(d.lancamentos)) d.lancamentos = [];

    d.lancamentos.unshift({
      id: 'LAN-' + Date.now(),
      desc,
      category,
      kind: isReceita ? 'receita' : 'despesa',
      amount,
      date,
      paymentMethod,
      paid: true
    });

    this.syncFromLancamentos();
    this.saveState();
    this.renderAll();
    this.showToast(
      isReceita
        ? `➕ Receita "${desc}" (+${formatBRL(amount)}) adicionada à Renda Mensal!`
        : `➖ Gasto "${desc}" (-${formatBRL(amount)}) descontado na Sobra!`
    );
  }

  toggleLancamentoPaid(id) {
    const d = this.data;
    const item = d.lancamentos?.find(l => l.id === id);
    if (!item) return;
    item.paid = !item.paid;
    this.syncFromLancamentos();
    this.saveState();
    this.renderAll();
    this.showToast(item.paid ? `✓ "${item.desc}" marcado como pago/recebido` : `"${item.desc}" marcado como pendente`);
  }

  deleteLancamento(id) {
    const d = this.data;
    if (!Array.isArray(d.lancamentos)) return;
    d.lancamentos = d.lancamentos.filter(l => l.id !== id);
    this.syncFromLancamentos();
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast('Lançamento excluído e saldos recalculados!');
  }

  openLancamentoModal(id = '') {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    const d = this.data;
    const existing = d.lancamentos?.find(l => l.id === id);
    const todayISO = existing ? existing.date : `2026-${String(this.state.monthIndex + 1).padStart(2, '0')}-06`;

    const categories = [
      { group: '➖ Tipos de Gasto (Subtraem para a Sobra)', items: ['Alimentação', 'Moradia', 'Transporte', 'Saúde', 'Educação', 'Lazer', 'Assinaturas/Serviços', 'Investimentos', 'Imprevistos', 'Outros', 'Fatura'] },
      { group: '➕ Entradas (Adicionam na Renda Mensal Total)', items: ['Salário', 'Renda Extra'] }
    ];

    const payMethods = ['Pix', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro', 'Boleto', 'Transferência'];

    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
      <div class="modal-header">
        <h3>${existing ? 'Editar Lançamento' : 'Novo Lançamento'}</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>Descrição pequena</label>
        <input type="text" id="modLanDesc" class="form-control" placeholder="Ex: Supermercado, Luz, Salário..." value="${existing ? existing.desc : ''}" />
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Tipo de Gasto / Entrada</label>
          <select id="modLanCategory" class="form-control">
            ${categories.map(g => `
              <optgroup label="${g.group}">
                ${g.items.map(c => `<option value="${c}" ${existing && existing.category === c ? 'selected' : ''}>${c}</option>`).join('')}
              </optgroup>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Valor (R$)</label>
          <input type="number" step="0.01" id="modLanAmount" class="form-control" placeholder="0.00" value="${existing ? existing.amount : ''}" />
        </div>
      </div>
      <div class="form-row-3">
        <div class="form-group">
          <label>Data</label>
          <input type="date" id="modLanDate" class="form-control" value="${todayISO}" />
        </div>
        <div class="form-group">
          <label>Forma de Pagamento</label>
          <select id="modLanPayment" class="form-control">
            ${payMethods.map(p => `<option value="${p}" ${existing && existing.paymentMethod === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Status</label>
          <select id="modLanPaid" class="form-control">
            <option value="sim" ${!existing || existing.paid ? 'selected' : ''}>Pago / Recebido</option>
            <option value="nao" ${existing && !existing.paid ? 'selected' : ''}>Pendente</option>
          </select>
        </div>
      </div>
      <div class="modal-actions" style="justify-content:${existing ? 'space-between' : 'flex-end'};">
        ${existing ? `<button class="btn-danger" onclick="window.app.deleteLancamento('${existing.id}')">Excluir</button>` : ''}
        <div style="display:flex;gap:8px;">
          <button class="btn-pill-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button class="btn-primary" onclick="window.app.submitLancamentoModal('${existing ? existing.id : ''}')">Salvar Lançamento</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
  }

  submitLancamentoModal(id = '') {
    const desc = document.getElementById('modLanDesc')?.value.trim();
    const category = document.getElementById('modLanCategory')?.value || 'Alimentação';
    const amount = parseFloat(document.getElementById('modLanAmount')?.value);
    const date = document.getElementById('modLanDate')?.value || '2026-11-06';
    const paymentMethod = document.getElementById('modLanPayment')?.value || 'Pix';
    const paid = document.getElementById('modLanPaid')?.value === 'sim';

    if (!desc || isNaN(amount) || amount <= 0) {
      this.showToast('Informe uma descrição curta e um valor válido.');
      return;
    }

    const isReceita = category === 'Salário' || category === 'Renda Extra';
    const d = this.data;
    if (!Array.isArray(d.lancamentos)) d.lancamentos = [];

    if (id) {
      const existing = d.lancamentos.find(l => l.id === id);
      if (existing) {
        existing.desc = desc;
        existing.category = category;
        existing.kind = isReceita ? 'receita' : 'despesa';
        existing.amount = amount;
        existing.date = date;
        existing.paymentMethod = paymentMethod;
        existing.paid = paid;
      }
    } else {
      d.lancamentos.unshift({
        id: 'LAN-' + Date.now(),
        desc,
        category,
        kind: isReceita ? 'receita' : 'despesa',
        amount,
        date,
        paymentMethod,
        paid
      });
    }

    this.syncFromLancamentos();
    this.saveState();
    this.closeModal();
    this.renderAll();
    this.showToast(
      isReceita
        ? `➕ Receita "${desc}" atualizada na Renda Mensal!`
        : `➖ Lançamento "${desc}" atualizado na Sobra!`
    );
  }

  openCloudSyncModal() {
    document.getElementById('quickAddPopover')?.classList.remove('open');
    if (!this.vault) return;
    const modal = document.getElementById('appModal');
    const content = document.getElementById('modalContent');
    const lastSyncStr = this.lastSyncedAt
      ? this.lastSyncedAt.toLocaleTimeString('pt-BR')
      : 'Sincronizado automaticamente';

    content.innerHTML = `
      <div class="modal-header">
        <h3>🔒 Cofre Criptografado & Sincronização</h3>
        <button class="icon-btn-sm" onclick="window.app.closeModal()">✕</button>
      </div>

      <div style="padding:14px;border-radius:12px;background:var(--green-soft);border:1px solid rgba(22,163,74,0.25);margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:8px;font-weight:700;color:var(--green-primary);font-size:13px;">
          <span class="sync-dot"></span>
          <span>Criptografia AES-256-GCM ativa</span>
        </div>
        <p style="font-size:12px;color:var(--text-secondary);margin-top:6px;line-height:1.45;">
          Seus dados são criptografados com a sua senha <strong>antes</strong> de serem salvos neste aparelho ou enviados para a nuvem.
          O canal de sincronização é secreto e derivado da senha — use a <strong>mesma senha</strong> no PC e no Celular.<br>
          <small style="color:var(--text-muted);">Última verificação: ${lastSyncStr}</small>
        </p>
      </div>

      <div class="form-row-2" style="margin-bottom:14px;">
        <button class="btn-primary" style="width:100%;" onclick="window.app.pullFromCloud(false)">
          ⬇️ Buscar Dados da Nuvem Agora
        </button>
        <button class="btn-pill-outline" style="width:100%;justify-content:center;" onclick="window.app.pushToCloud(true)">
          ⬆️ Enviar Deste Aparelho p/ Nuvem
        </button>
      </div>

      <div class="form-row-2" style="margin-bottom:14px;">
        <button class="btn-pill-outline" style="width:100%;justify-content:center;" onclick="window.app.openChangePasswordModal()">
          🔑 Trocar Senha
        </button>
        <button class="btn-pill-outline" style="width:100%;justify-content:center;" onclick="window.app.lockVault()">
          🔒 Bloquear Agora
        </button>
      </div>

      <div style="border-top:1px solid var(--border-subtle);padding-top:14px;margin-top:14px;">
        <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:8px;">
          Backup Manual em Arquivo (criptografado com a sua senha)
        </label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn-pill-outline" onclick="window.app.exportBackupJSON()">💾 Baixar Backup Criptografado</button>
          <label class="btn-pill-outline" style="cursor:pointer;margin:0;">
            📂 Restaurar Backup (.json)
            <input type="file" accept=".json" style="display:none;" onchange="window.app.importBackupJSON(event)" />
          </label>
        </div>
        <small style="font-size:11px;color:var(--text-muted);display:block;margin-top:6px;">
          Backups antigos sem criptografia também podem ser restaurados: eles são criptografados ao importar. Depois apague o arquivo original.
        </small>
      </div>

      <div class="modal-actions">
        <button class="btn-pill-outline" onclick="window.app.closeModal()">Fechar</button>
      </div>
    `;
    modal.classList.add('open');
  }

  async exportBackupJSON() {
    if (!this.vault) return;
    try {
      const env = await VaultCrypto.encryptJSON(this.state, this.vault.key, this.vault.saltB64, this.vault.iterations);
      const blob = new Blob([JSON.stringify(env)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `jhnfinn_backup_criptografado_${this.state.year}_${this.state.monthIndex + 1}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      this.showToast('💾 Backup criptografado baixado!');
    } catch (e) {
      this.showToast('⚠️ Não foi possível gerar o backup.');
    }
  }

  importBackupJSON(event) {
    const file = event.target.files?.[0];
    if (!file || !this.vault) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        let restored = null;
        let wasPlaintext = false;
        if (VaultCrypto.isEnvelope(parsed)) {
          restored = await this.decryptWithVault(parsed);
          if (!restored) {
            this.showToast('🔒 Este backup foi criptografado com outra senha.');
            return;
          }
        } else if (parsed && parsed.workspaces) {
          restored = parsed;
          wasPlaintext = true;
        }
        if (restored && restored.workspaces) {
          this.state = normalizeState(restored);
          this.saveState();
          this.applyTheme();
          this.renderAll();
          this.closeModal();
          this.showToast(
            wasPlaintext
              ? '✅ Backup restaurado e criptografado! Apague o arquivo original sem proteção.'
              : '✅ Backup restaurado e sincronizado com a nuvem!'
          );
        } else {
          this.showToast('Arquivo de backup inválido.');
        }
      } catch (err) {
        this.showToast('Erro ao ler arquivo JSON.');
      } finally {
        event.target.value = '';
      }
    };
    reader.readAsText(file);
  }

  closeModal() {
    document.getElementById('appModal')?.classList.remove('open');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new JHNFinnApp();
});
