(function () {
  'use strict';

  const DATA = window.PPID_DATA;
  const STORAGE_KEYS = {
    theme: 'ppid_theme',
    settings: 'ppid_settings',
    layanan: 'ppid_layanan',
    projects: 'ppid_projects',
    artikel: 'ppid_artikel',
    regulasi: 'ppid_regulasi',
    permohonan: 'ppid_permohonan'
  };

  function loadStore(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(fallback));
    } catch (e) {
      return JSON.parse(JSON.stringify(fallback));
    }
  }

  function saveStore(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }

  const state = {
    currentRoute: 'beranda',
    selectedLayananSlug: null,
    selectedProjectSlug: null,
    selectedArtikelSlug: null,
    isDark: false,
    homeLayananCat: 'Semua',
    layananCat: 'Semua',
    layananSearch: '',
    projectCat: 'Semua',
    projectSearch: '',
    artikelCat: 'Semua',
    artikelSearch: '',
    artikelPage: 1,
    regulasiCat: 'Semua',
    regulasiSearch: '',
    infoType: 'Semua',
    infoSearch: '',
    dipSearch: '',
    testiIndex: 0,
    adminTab: 'overview',
    siteSettings: loadStore(STORAGE_KEYS.settings, DATA.siteSettings),
    layananList: loadStore(STORAGE_KEYS.layanan, DATA.layananList),
    projectList: loadStore(STORAGE_KEYS.projects, DATA.projectList),
    artikelList: loadStore(STORAGE_KEYS.artikel, DATA.artikelList),
    regulasiList: loadStore(STORAGE_KEYS.regulasi, DATA.regulasiList),
    permohonanList: loadStore(STORAGE_KEYS.permohonan, DATA.permohonanList),
    informasiPublikList: DATA.informasiPublikList,
    dipItems: DATA.dipItems,
    testimoniList: DATA.testimoniList,
    clientList: DATA.clientList,
    teamList: DATA.teamList
  };

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getIconSvg(name, size) {
    const s = size || 18;
    const common = `width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
    const icons = {
      hammer: `<svg ${common}><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>`,
      cpu: `<svg ${common}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
      zap: `<svg ${common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      flame: `<svg ${common}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
      wrench: `<svg ${common}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      sliders: `<svg ${common}><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>`,
      compass: `<svg ${common}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
      shield: `<svg ${common}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
      file: `<svg ${common}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`
    };
    return icons[name] || icons.wrench;
  }

  // Theme initialization
  function initTheme() {
    try {
      state.isDark = localStorage.getItem(STORAGE_KEYS.theme) === 'dark';
    } catch (e) {
      state.isDark = false;
    }
    applyTheme();
  }

  function applyTheme() {
    document.documentElement.classList.toggle('dark', state.isDark);
    try {
      localStorage.setItem(STORAGE_KEYS.theme, state.isDark ? 'dark' : 'light');
    } catch (e) {}

    const sunIcons = document.querySelectorAll('[data-theme-sun]');
    const moonIcons = document.querySelectorAll('[data-theme-moon]');
    sunIcons.forEach((el) => el.classList.toggle('hidden', !state.isDark));
    moonIcons.forEach((el) => el.classList.toggle('hidden', state.isDark));
  }

  function toggleTheme() {
    state.isDark = !state.isDark;
    applyTheme();
  }

  // Navigation & Hash routing
  function parseHash() {
    const hash = window.location.hash.replace(/^#/, '').trim();
    if (!hash) return { route: 'beranda', slug: null };
    const parts = hash.split('/');
    const validRoutes = [
      'beranda', 'profil', 'regulasi', 'layanan', 'detail-layanan',
      'informasi-publik', 'daftar-informasi', 'standar-layanan',
      'project', 'detail-project', 'artikel', 'detail-artikel',
      'kontak', 'admin'
    ];
    const route = validRoutes.includes(parts[0]) ? parts[0] : 'beranda';
    const slug = parts[1] ? decodeURIComponent(parts[1]) : null;
    return { route, slug };
  }

  function navigate(route, slug) {
    state.currentRoute = route;
    if (route === 'detail-layanan' && slug) state.selectedLayananSlug = slug;
    if (route === 'detail-project' && slug) state.selectedProjectSlug = slug;
    if (route === 'detail-artikel' && slug) state.selectedArtikelSlug = slug;

    const newHash = slug ? `#${route}/${encodeURIComponent(slug)}` : `#${route}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }

    renderRoute();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  }

  function renderRoute() {
    const isAdmin = state.currentRoute === 'admin';
    const siteShellTop = document.getElementById('site-topbar');
    const siteHeader = document.getElementById('site-header');
    const siteFooter = document.getElementById('site-footer');

    if (siteShellTop) siteShellTop.classList.toggle('hidden', isAdmin);
    if (siteHeader) siteHeader.classList.toggle('hidden', isAdmin);
    if (siteFooter) siteFooter.classList.toggle('hidden', isAdmin);

    document.querySelectorAll('[data-page]').forEach((sec) => {
      sec.classList.toggle('hidden', sec.getAttribute('data-page') !== state.currentRoute);
    });

    // Update active nav buttons
    document.querySelectorAll('[data-nav-route]').forEach((btn) => {
      const target = btn.getAttribute('data-nav-route');
      const active =
        target === state.currentRoute ||
        (target === 'layanan' && state.currentRoute === 'detail-layanan') ||
        (target === 'project' && state.currentRoute === 'detail-project') ||
        (target === 'artikel' && state.currentRoute === 'detail-artikel');

      btn.classList.toggle('bg-blue-50', active && !btn.hasAttribute('data-mobile-nav'));
      btn.classList.toggle('dark:bg-blue-950/60', active && !btn.hasAttribute('data-mobile-nav'));
      btn.classList.toggle('text-blue-700', active && !btn.hasAttribute('data-mobile-nav'));
      btn.classList.toggle('dark:text-blue-400', active && !btn.hasAttribute('data-mobile-nav'));
      btn.classList.toggle('font-semibold', active);

      if (btn.hasAttribute('data-mobile-nav')) {
        btn.classList.toggle('bg-blue-600', active);
        btn.classList.toggle('text-white', active);
      }
    });

    // Render specific page content
    if (state.currentRoute === 'beranda') renderHome();
    if (state.currentRoute === 'profil') renderProfil();
    if (state.currentRoute === 'regulasi') renderRegulasi();
    if (state.currentRoute === 'layanan') renderLayananPage();
    if (state.currentRoute === 'detail-layanan') renderDetailLayanan();
    if (state.currentRoute === 'informasi-publik') renderInformasiPublik();
    if (state.currentRoute === 'daftar-informasi') renderDaftarInformasi();
    if (state.currentRoute === 'project') renderProjectPage();
    if (state.currentRoute === 'detail-project') renderDetailProject();
    if (state.currentRoute === 'artikel') renderArtikelPage();
    if (state.currentRoute === 'detail-artikel') renderDetailArtikel();
    if (state.currentRoute === 'kontak') syncSettingsToDOM();
    if (state.currentRoute === 'admin') renderAdmin();

    syncSettingsToDOM();
  }

  function syncSettingsToDOM() {
    const s = state.siteSettings;
    document.title = s.metaTitle || DATA.siteSettings.metaTitle;
    document.querySelectorAll('[data-bind="phone"]').forEach((el) => (el.textContent = s.phone));
    document.querySelectorAll('[data-bind="whatsapp"]').forEach((el) => (el.textContent = s.whatsapp));
    document.querySelectorAll('[data-bind="email"]').forEach((el) => (el.textContent = s.email));
    document.querySelectorAll('[data-bind="address"]').forEach((el) => (el.textContent = s.address));
    document.querySelectorAll('[data-bind="city"]').forEach((el) => (el.textContent = s.city));
    document.querySelectorAll('[data-bind="hours"]').forEach((el) => (el.textContent = s.operationalHours));
    document.querySelectorAll('[data-bind="companyName"]').forEach((el) => (el.textContent = s.companyName));
    document.querySelectorAll('[data-bind="tagline"]').forEach((el) => (el.textContent = s.tagline));

    const footerLayanan = document.getElementById('footer-layanan-links');
    if (footerLayanan) {
      footerLayanan.innerHTML =
        state.layananList
          .slice(0, 7)
          .map(
            (l) => `<li><button type="button" data-go="detail-layanan" data-slug="${escapeHtml(l.slug)}" class="hover:text-blue-400 transition-colors text-left line-clamp-1">${escapeHtml(l.title)}</button></li>`
          )
          .join('') +
        `<li><button type="button" data-go="layanan" class="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"><span>Lihat Seluruh Layanan</span> &rarr;</button></li>`;
    }
  }

  // Animated Counters on Home
  let countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    const targets = [
      { id: 'stat-years', val: 22, suffix: '+' },
      { id: 'stat-projects', val: 520, suffix: '+' },
      { id: 'stat-employees', val: 135, suffix: '+' },
      { id: 'stat-satisfaction', val: 99, suffix: '%' }
    ];
    let step = 0;
    const steps = 28;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      targets.forEach((t) => {
        const el = document.getElementById(t.id);
        if (el) el.textContent = Math.floor(progress * t.val) + t.suffix;
      });
      if (step >= steps) {
        clearInterval(timer);
        targets.forEach((t) => {
          const el = document.getElementById(t.id);
          if (el) el.textContent = t.val + t.suffix;
        });
      }
    }, 35);
  }

  // Render Home Sections
  function renderHome() {
    // Clients
    const clientsEl = document.getElementById('home-clients-grid');
    if (clientsEl) {
      clientsEl.innerHTML = state.clientList
        .map(
          (c) => `
          <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-center hover:border-blue-500 transition-colors group">
            <div class="font-bold text-xs tracking-wider text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${escapeHtml(c.logoText)}</div>
            <div class="text-[10px] text-slate-400 mt-1 truncate">${escapeHtml(c.industry)}</div>
          </div>`
        )
        .join('');
    }

    // Layanan Filter Tabs
    const homeFilterWrap = document.getElementById('home-layanan-filters');
    if (homeFilterWrap) {
      const cats = ['Semua', 'Manufaktur', 'Presisi', 'Otomasi', 'Layanan PPID'];
      homeFilterWrap.innerHTML = cats
        .map(
          (cat) => `
          <button type="button" data-home-layanan-cat="${escapeHtml(cat)}" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            state.homeLayananCat === cat
              ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }">${escapeHtml(cat)}</button>`
        )
        .join('');
    }

    // Layanan Cards
    const homeLayananGrid = document.getElementById('home-layanan-grid');
    if (homeLayananGrid) {
      const list =
        state.homeLayananCat === 'Semua'
          ? state.layananList
          : state.layananList.filter((l) => l.category === state.homeLayananCat);
      homeLayananGrid.innerHTML = list.map((l) => renderLayananCard(l, true)).join('');
    }

    // Projects (8 items)
    const homeProjGrid = document.getElementById('home-project-grid');
    const homeProjCount = document.getElementById('home-project-count');
    if (homeProjCount) homeProjCount.textContent = String(state.projectList.length);
    if (homeProjGrid) {
      homeProjGrid.innerHTML = state.projectList.slice(0, 8).map((p) => renderProjectCard(p)).join('');
    }

    // Testimoni
    renderTestimoniSlider();

    // Articles (6 items)
    const homeArtGrid = document.getElementById('home-artikel-grid');
    if (homeArtGrid) {
      homeArtGrid.innerHTML = state.artikelList.slice(0, 6).map((a) => renderArtikelCard(a)).join('');
    }

    animateCounters();
  }

  function renderLayananCard(l, compact) {
    return `
      <div data-go="detail-layanan" data-slug="${escapeHtml(l.slug)}" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer">
        <div class="relative ${compact ? 'h-44' : 'h-48'} overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src="${escapeHtml(l.image)}" alt="${escapeHtml(l.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-blue-700 dark:text-blue-400 shadow">
            ${getIconSvg(l.icon, 18)}
          </div>
          <div class="absolute bottom-2 left-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur-sm rounded text-[10px] font-semibold text-white">
            ${escapeHtml(l.category)}
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <h3 class="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">${escapeHtml(l.title)}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 ${compact ? 'line-clamp-2' : 'line-clamp-3'}">${escapeHtml(l.shortDesc)}</p>
          </div>
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400">
            <span>${compact ? 'Lihat Rincian Teknis' : 'Rincian Kapabilitas & SOP'}</span>
            <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </div>
      </div>`;
  }

  function renderProjectCard(p) {
    return `
      <div data-go="detail-project" data-slug="${escapeHtml(p.slug)}" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer">
        <div class="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute top-2.5 left-2.5 px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm rounded-md text-[10px] font-semibold text-white">${escapeHtml(p.category)}</div>
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
          <div>
            <h3 class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">${escapeHtml(p.title)}</h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">📍 ${escapeHtml(p.location)}</p>
            <p class="text-[11px] text-slate-400 mt-0.5 truncate">Klien: ${escapeHtml(p.client)}</p>
          </div>
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-400">
            <span class="font-mono">${escapeHtml(p.year)}</span>
            <span class="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">Rincian &rarr;</span>
          </div>
        </div>
      </div>`;
  }

  function renderArtikelCard(a) {
    return `
      <article data-go="detail-artikel" data-slug="${escapeHtml(a.slug)}" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer">
        <div class="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src="${escapeHtml(a.thumbnail)}" alt="${escapeHtml(a.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm rounded-md text-[10px] font-semibold text-white">${escapeHtml(a.category)}</div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span>${escapeHtml(a.date)}</span>
              <span>·</span>
              <span>${escapeHtml(a.readTime)}</span>
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">${escapeHtml(a.title)}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">${escapeHtml(a.summary)}</p>
          </div>
          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium truncate max-w-[170px]">${escapeHtml(a.author)}</span>
            <span class="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">Baca &rarr;</span>
          </div>
        </div>
      </article>`;
  }

  function renderTestimoniSlider() {
    const t = state.testimoniList[state.testiIndex] || state.testimoniList[0];
    const starsEl = document.getElementById('testi-stars');
    const quoteEl = document.getElementById('testi-quote');
    const authorEl = document.getElementById('testi-author');
    const roleEl = document.getElementById('testi-role');
    const contextEl = document.getElementById('testi-context');
    const dotsEl = document.getElementById('testi-dots');

    if (starsEl) starsEl.innerHTML = '★'.repeat(t.rating);
    if (quoteEl) quoteEl.textContent = `"${t.quote}"`;
    if (authorEl) authorEl.textContent = t.name;
    if (roleEl) roleEl.innerHTML = `${escapeHtml(t.role)} · <span class="text-blue-600 dark:text-blue-400">${escapeHtml(t.company)}</span>`;
    if (contextEl) contextEl.textContent = `Proyek: ${t.projectContext}`;

    if (dotsEl) {
      dotsEl.innerHTML = state.testimoniList
        .map(
          (_, idx) => `<button type="button" data-testi-dot="${idx}" class="h-2 rounded-full transition-all ${
            state.testiIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
          }" aria-label="Slide ${idx + 1}"></button>`
        )
        .join('');
    }
  }

  // Profil Page
  function renderProfil() {
    const teamGrid = document.getElementById('profil-team-grid');
    if (teamGrid) {
      teamGrid.innerHTML = state.teamList
        .map((m) => {
          const initials = m.name.split(' ').slice(0, 2).map((n) => n[0]).join('');
          return `
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500 transition-colors">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold flex items-center justify-center text-base shrink-0">${escapeHtml(initials)}</div>
                <div>
                  <h3 class="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">${escapeHtml(m.name)}</h3>
                  <p class="text-[11px] font-medium text-blue-600 dark:text-blue-400">${escapeHtml(m.role)}</p>
                </div>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${escapeHtml(m.bio)}</p>
              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400">Divisi: ${escapeHtml(m.division)}</div>
            </div>`;
        })
        .join('');
    }
  }

  // Regulasi Page
  function renderRegulasi() {
    const catsWrap = document.getElementById('regulasi-filters');
    const listWrap = document.getElementById('regulasi-list');
    const cats = ['Semua', 'Undang-Undang', 'Peraturan Pemerintah', 'Peraturan Menteri', 'SOP Teknis'];

    if (catsWrap) {
      catsWrap.innerHTML = cats
        .map(
          (c) => `<button type="button" data-reg-cat="${escapeHtml(c)}" class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            state.regulasiCat === c
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }">${escapeHtml(c)}</button>`
        )
        .join('');
    }

    const q = state.regulasiSearch.toLowerCase();
    const filtered = state.regulasiList.filter((r) => {
      const mCat = state.regulasiCat === 'Semua' || r.category === state.regulasiCat;
      const mSearch = r.title.toLowerCase().includes(q) || r.nomor.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
      return mCat && mSearch;
    });

    if (listWrap) {
      if (filtered.length === 0) {
        listWrap.innerHTML = `<div class="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">Tidak ada dokumen regulasi yang cocok dengan pencarian.</div>`;
      } else {
        listWrap.innerHTML = filtered
          .map(
            (r) => `
            <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div class="space-y-2 flex-1">
                <div class="flex flex-wrap items-center gap-2 text-xs">
                  <span class="font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-200 dark:border-blue-900">${escapeHtml(r.nomor)}</span>
                  <span class="text-slate-400">·</span>
                  <span class="text-slate-600 dark:text-slate-400 font-medium">${escapeHtml(r.category)}</span>
                  <span class="text-slate-400">·</span>
                  <span class="text-slate-500 font-mono text-[11px]">Tahun ${escapeHtml(r.year)}</span>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">${escapeHtml(r.title)}</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${escapeHtml(r.description)}</p>
              </div>
              <div class="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                <button type="button" data-doc-preview='${escapeHtml(JSON.stringify({ title: r.title, nomor: r.nomor, type: r.category, size: r.fileSize, date: r.dateIssued }))}' class="px-3.5 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Lihat Pratinjau</button>
                <button type="button" data-doc-preview='${escapeHtml(JSON.stringify({ title: r.title, nomor: r.nomor, type: r.category, size: r.fileSize, date: r.dateIssued }))}' class="px-3.5 py-2 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors shadow-sm">Unduh (${escapeHtml(r.fileSize)})</button>
              </div>
            </div>`
          )
          .join('');
      }
    }
  }

  // Layanan Page
  function renderLayananPage() {
    const catsWrap = document.getElementById('layanan-page-filters');
    const gridWrap = document.getElementById('layanan-page-grid');
    const cats = ['Semua', 'Manufaktur', 'Presisi', 'Otomasi', 'Layanan PPID'];

    if (catsWrap) {
      catsWrap.innerHTML = cats
        .map(
          (c) => `<button type="button" data-layanan-cat="${escapeHtml(c)}" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            state.layananCat === c
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }">${escapeHtml(c)}</button>`
        )
        .join('');
    }

    const q = state.layananSearch.toLowerCase();
    const filtered = state.layananList.filter((l) => {
      const mCat = state.layananCat === 'Semua' || l.category === state.layananCat;
      const mSearch = l.title.toLowerCase().includes(q) || l.shortDesc.toLowerCase().includes(q) || l.description.toLowerCase().includes(q);
      return mCat && mSearch;
    });

    if (gridWrap) {
      if (filtered.length === 0) {
        gridWrap.innerHTML = `<div class="col-span-full p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">Tidak ada layanan yang sesuai dengan pencarian Anda.</div>`;
      } else {
        gridWrap.innerHTML = filtered.map((l) => renderLayananCard(l, false)).join('');
      }
    }
  }

  // Detail Layanan Page
  function renderDetailLayanan() {
    const l = state.layananList.find((x) => x.slug === state.selectedLayananSlug) || state.layananList[0];
    if (!l) return;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('dl-category', `Kategori: ${l.category}`);
    set('dl-title', l.title);
    set('dl-shortdesc', l.shortDesc);
    set('dl-desc', l.description);
    set('dl-faq-title', `FAQ Seputar Layanan ${l.title}`);
    set('dl-cta-title', `Butuh Konsultasi Langsung Mengenai ${l.title}?`);

    const imgEl = document.getElementById('dl-image');
    if (imgEl) {
      imgEl.src = l.image;
      imgEl.alt = l.title;
    }

    const benWrap = document.getElementById('dl-benefits');
    if (benWrap) {
      benWrap.innerHTML = (l.benefits || [])
        .map(
          (b) => `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
            <span class="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
            <span class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${escapeHtml(b)}</span>
          </div>`
        )
        .join('');
    }

    const specWrap = document.getElementById('dl-specs');
    if (specWrap) {
      specWrap.innerHTML = (l.specifications || [])
        .map(
          (s) => `
          <div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0 gap-4">
            <span class="text-slate-500 dark:text-slate-400 font-medium">${escapeHtml(s.label)}</span>
            <span class="font-semibold text-slate-900 dark:text-white text-right font-mono">${escapeHtml(s.value)}</span>
          </div>`
        )
        .join('');
    }

    const faqWrap = document.getElementById('dl-faqs');
    if (faqWrap) {
      faqWrap.innerHTML = (l.faqs || [])
        .map(
          (f, idx) => `
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <button type="button" data-faq-toggle="${idx}" class="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
              <span>${escapeHtml(f.question)}</span>
              <span data-faq-arrow="${idx}" class="text-blue-600 text-xs">${idx === 0 ? '▲' : '▼'}</span>
            </button>
            <div data-faq-body="${idx}" class="${idx === 0 ? '' : 'hidden'} px-5 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              ${escapeHtml(f.answer)}
            </div>
          </div>`
        )
        .join('');
    }
  }

  // Informasi Publik Page
  function renderInformasiPublik() {
    const catsWrap = document.getElementById('info-filters');
    const tbody = document.getElementById('info-table-body');
    const types = ['Semua', 'Berkala', 'Serta Merta', 'Setiap Saat', 'Dikecualikan'];

    if (catsWrap) {
      catsWrap.innerHTML = types
        .map(
          (t) => `<button type="button" data-info-type="${escapeHtml(t)}" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            state.infoType === t
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }">${t === 'Semua' ? 'Semua Klasifikasi' : `Informasi ${escapeHtml(t)}`}</button>`
        )
        .join('');
    }

    const q = state.infoSearch.toLowerCase();
    const filtered = state.informasiPublikList.filter((d) => {
      const mType = state.infoType === 'Semua' || d.type === state.infoType;
      const mSearch = d.title.toLowerCase().includes(q) || d.responsibleUnit.toLowerCase().includes(q) || d.year.includes(q);
      return mType && mSearch;
    });

    if (tbody) {
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="py-10 text-center text-slate-500">Tidak ada dokumen yang sesuai dengan pencarian Anda.</td></tr>`;
      } else {
        tbody.innerHTML = filtered
          .map((d) => {
            const badge =
              d.type === 'Berkala'
                ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400'
                : d.type === 'Serta Merta'
                ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400'
                : d.type === 'Setiap Saat'
                ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                : 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400';

            const docPayload = escapeHtml(JSON.stringify({ title: d.title, type: `Informasi ${d.type}`, size: d.fileSize, date: d.lastUpdated }));
            return `
              <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-4 px-4 font-semibold text-slate-900 dark:text-white max-w-xs sm:max-w-sm">${escapeHtml(d.title)}</td>
                <td class="py-4 px-4 whitespace-nowrap"><span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${badge}">${escapeHtml(d.type)}</span></td>
                <td class="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">${escapeHtml(d.responsibleUnit)}</td>
                <td class="py-4 px-4 font-mono text-slate-600 dark:text-slate-300">${escapeHtml(d.year)}</td>
                <td class="py-4 px-4 font-mono text-slate-500 whitespace-nowrap">${escapeHtml(d.fileFormat)} · ${escapeHtml(d.fileSize)}</td>
                <td class="py-4 px-4 text-right whitespace-nowrap">
                  <div class="flex items-center justify-end gap-2">
                    <button type="button" data-doc-preview='${docPayload}' class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium">Pratinjau</button>
                    <button type="button" data-doc-preview='${docPayload}' class="px-2.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium shadow-sm">Unduh</button>
                  </div>
                </td>
              </tr>`;
          })
          .join('');
      }
    }
  }

  // Daftar Informasi Publik (DIP) Page
  function renderDaftarInformasi() {
    const q = state.dipSearch.toLowerCase();
    const filtered = state.dipItems.filter(
      (i) => i.ringkasan.toLowerCase().includes(q) || i.pejabatPenguasa.toLowerCase().includes(q)
    );
    const countEl = document.getElementById('dip-count');
    if (countEl) countEl.textContent = `Menampilkan ${filtered.length} kategori informasi publik terdaftar`;

    const tbody = document.getElementById('dip-table-body');
    if (tbody) {
      tbody.innerHTML = filtered
        .map((item, idx) => {
          const docPayload = escapeHtml(JSON.stringify({ title: item.ringkasan, type: 'Daftar Informasi Publik (DIP)', size: '1.2 MB', date: 'Tahun 2026' }));
          return `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
              <td class="py-4 px-4 text-center font-mono text-slate-400">${idx + 1}</td>
              <td class="py-4 px-4 font-semibold text-slate-900 dark:text-white max-w-xs">${escapeHtml(item.ringkasan)}</td>
              <td class="py-4 px-4 text-slate-600 dark:text-slate-300">${escapeHtml(item.pejabatPenguasa)}</td>
              <td class="py-4 px-4 font-mono text-slate-500">${escapeHtml(item.waktuPembuatan)}</td>
              <td class="py-4 px-4 text-slate-600 dark:text-slate-400">
                <p>${escapeHtml(item.bentukInformasi)}</p>
                <p class="text-[10px] text-slate-400">${escapeHtml(item.jenisMedia)}</p>
              </td>
              <td class="py-4 px-4 font-mono text-slate-600 dark:text-slate-300 whitespace-nowrap">${escapeHtml(item.jangkaSimpan)}</td>
              <td class="py-4 px-4 text-right whitespace-nowrap">
                <button type="button" data-doc-preview='${docPayload}' class="px-2.5 py-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg font-medium transition-colors">Detail DIP</button>
              </td>
            </tr>`;
        })
        .join('');
    }
  }

  // Project Page
  function renderProjectPage() {
    const catsWrap = document.getElementById('project-page-filters');
    const gridWrap = document.getElementById('project-page-grid');
    const cats = ['Semua', 'Fabrikasi', 'Otomasi Pabrik', 'Mesin Khusus', 'Komponen Presisi'];

    if (catsWrap) {
      catsWrap.innerHTML = cats
        .map(
          (c) => `<button type="button" data-proj-cat="${escapeHtml(c)}" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            state.projectCat === c
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }">${escapeHtml(c)}</button>`
        )
        .join('');
    }

    const q = state.projectSearch.toLowerCase();
    const filtered = state.projectList.filter((p) => {
      const mCat = state.projectCat === 'Semua' || p.category === state.projectCat;
      const mSearch = p.title.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
      return mCat && mSearch;
    });

    if (gridWrap) {
      if (filtered.length === 0) {
        gridWrap.innerHTML = `<div class="col-span-full p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">Tidak ada project yang cocok dengan pencarian Anda.</div>`;
      } else {
        gridWrap.innerHTML = filtered.map((p) => renderProjectCard(p)).join('');
      }
    }
  }

  // Detail Project Page
  function renderDetailProject() {
    const p = state.projectList.find((x) => x.slug === state.selectedProjectSlug) || state.projectList[0];
    if (!p) return;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('dp-kicker', `${p.category} · ${p.year}`);
    set('dp-title', p.title);
    set('dp-location', p.location);
    set('dp-client', `Klien: ${p.client}`);
    set('dp-desc', p.description);
    set('dp-challenge', p.challenge);
    set('dp-solution', p.solution);
    set('dp-meta-cat', p.category);
    set('dp-meta-client', p.client);
    set('dp-meta-year', p.year);
    set('dp-meta-location', p.location);

    const imgEl = document.getElementById('dp-thumb');
    if (imgEl) {
      imgEl.src = p.thumbnail;
      imgEl.alt = p.title;
    }

    const resWrap = document.getElementById('dp-results');
    if (resWrap) {
      resWrap.innerHTML = (p.results || [])
        .map(
          (r) => `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
            <span class="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
            <span class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">${escapeHtml(r)}</span>
          </div>`
        )
        .join('');
    }

    const galWrap = document.getElementById('dp-gallery');
    if (galWrap) {
      galWrap.innerHTML = (p.gallery || [p.thumbnail])
        .map(
          (img, idx) => `
          <div class="rounded-xl overflow-hidden aspect-[4/3] border border-slate-200 dark:border-slate-800 shadow-sm group">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(p.title)} Foto ${idx + 1}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>`
        )
        .join('');
    }

    const techWrap = document.getElementById('dp-tech');
    if (techWrap) {
      techWrap.innerHTML = (p.technologies || [])
        .map(
          (t) => `<div class="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${escapeHtml(t)}</div>`
        )
        .join('');
    }
  }

  // Artikel Page
  function renderArtikelPage() {
    const catsWrap = document.getElementById('artikel-page-filters');
    const gridWrap = document.getElementById('artikel-page-grid');
    const pagWrap = document.getElementById('artikel-pagination');
    const cats = ['Semua', 'Teknologi Manufaktur', 'Keterbukaan Informasi', 'Otomasi Industri', 'Standar Mutu'];

    if (catsWrap) {
      catsWrap.innerHTML = cats
        .map(
          (c) => `<button type="button" data-art-cat="${escapeHtml(c)}" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            state.artikelCat === c
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }">${escapeHtml(c)}</button>`
        )
        .join('');
    }

    const q = state.artikelSearch.toLowerCase();
    const filtered = state.artikelList.filter((a) => {
      const mCat = state.artikelCat === 'Semua' || a.category === state.artikelCat;
      const mSearch = a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
      return mCat && mSearch;
    });

    const perPage = 6;
    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    if (state.artikelPage > totalPages) state.artikelPage = 1;
    const slice = filtered.slice((state.artikelPage - 1) * perPage, state.artikelPage * perPage);

    if (gridWrap) {
      if (slice.length === 0) {
        gridWrap.innerHTML = `<div class="col-span-full p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">Tidak ada artikel yang cocok dengan pencarian Anda.</div>`;
      } else {
        gridWrap.innerHTML = slice.map((a) => renderArtikelCard(a)).join('');
      }
    }

    if (pagWrap) {
      if (totalPages <= 1) {
        pagWrap.innerHTML = '';
      } else {
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
          html += `<button type="button" data-art-page="${i}" class="w-9 h-9 rounded-lg font-mono text-xs font-semibold transition-colors ${
            state.artikelPage === i
              ? 'bg-blue-600 text-white'
              : 'border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }">${i}</button>`;
        }
        pagWrap.innerHTML = html;
      }
    }
  }

  // Detail Artikel Page
  function renderDetailArtikel() {
    const a = state.artikelList.find((x) => x.slug === state.selectedArtikelSlug) || state.artikelList[0];
    if (!a) return;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('da-cat', a.category);
    set('da-title', a.title);
    set('da-author', a.author);
    set('da-date', a.date);
    set('da-readtime', a.readTime);
    set('da-author-name', a.author);
    set('da-author-role', `${a.authorRole} · PPID Kemenag Kota Mojokerto`);

    const imgEl = document.getElementById('da-cover');
    if (imgEl) {
      imgEl.src = a.thumbnail;
      imgEl.alt = a.title;
    }

    const bodyWrap = document.getElementById('da-content');
    if (bodyWrap) {
      bodyWrap.innerHTML = (a.content || [])
        .map((p) => `<p class="text-justify leading-relaxed">${escapeHtml(p)}</p>`)
        .join('');
    }

    const tagsWrap = document.getElementById('da-tags');
    if (tagsWrap) {
      tagsWrap.innerHTML =
        `<span class="text-xs font-semibold text-slate-400">Kata Kunci:</span>` +
        (a.tags || [])
          .map((t) => `<span class="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300">#${escapeHtml(t)}</span>`)
          .join('');
    }

    const relWrap = document.getElementById('da-related');
    if (relWrap) {
      relWrap.innerHTML = state.artikelList
        .filter((x) => x.id !== a.id)
        .slice(0, 3)
        .map(
          (item) => `
          <div data-go="detail-artikel" data-slug="${escapeHtml(item.slug)}" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col">
            <div class="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src="${escapeHtml(item.thumbnail)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
              <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">${escapeHtml(item.title)}</h4>
              <p class="text-[11px] font-mono text-slate-400">${escapeHtml(item.date)}</p>
            </div>
          </div>`
        )
        .join('');
    }

    const shareUrl = window.location.href;
    const shareWa = document.getElementById('da-share-wa');
    const shareX = document.getElementById('da-share-x');
    if (shareWa) shareWa.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(a.title + ' ' + shareUrl)}`;
    if (shareX) shareX.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title + ' ' + shareUrl)}`;
  }

  // Admin Dashboard
  function renderAdmin() {
    document.querySelectorAll('[data-admin-tab]').forEach((btn) => {
      const isAct = btn.getAttribute('data-admin-tab') === state.adminTab;
      btn.classList.toggle('bg-blue-600', isAct);
      btn.classList.toggle('text-white', isAct);
      btn.classList.toggle('font-semibold', isAct);
      btn.classList.toggle('text-slate-400', !isAct);
    });

    const newCount = state.permohonanList.filter((p) => p.status === 'Baru').length;
    const permBadge = document.getElementById('admin-perm-count');
    if (permBadge) permBadge.textContent = String(newCount);

    const panel = document.getElementById('admin-panel-content');
    if (!panel) return;

    if (state.adminTab === 'overview') {
      panel.innerHTML = `
        <div class="space-y-8">
          <div class="space-y-1">
            <h1 class="text-2xl font-bold">Ringkasan Sistem & Statistik Layanan</h1>
            <p class="text-xs text-slate-500 dark:text-slate-400">Data real-time portal PPID & fasilitas manufaktur presisi Kemenag Kota Mojokerto</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <span class="text-xs text-slate-500 font-medium">Permohonan Masuk</span>
              <div class="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">${state.permohonanList.length} Tiket</div>
              <span class="text-[11px] text-amber-500 font-medium">${newCount} tiket berstatus baru</span>
            </div>
            <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <span class="text-xs text-slate-500 font-medium">Layanan Aktif</span>
              <div class="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">${state.layananList.length} Layanan</div>
              <span class="text-[11px] text-slate-400">Manufaktur & Layanan PPID</span>
            </div>
            <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <span class="text-xs text-slate-500 font-medium">Project Selesai</span>
              <div class="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">${state.projectList.length} Proyek</div>
              <span class="text-[11px] text-slate-400">Studi kasus & portofolio publik</span>
            </div>
            <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <span class="text-xs text-slate-500 font-medium">Artikel & Warta</span>
              <div class="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">${state.artikelList.length} Berita</div>
              <span class="text-[11px] text-slate-400">Edukasi teknis & informasi mutu</span>
            </div>
          </div>
          <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-sm">Permohonan & Pesan Kontak Terbaru</h3>
              <button type="button" data-admin-tab="permohonan" class="text-xs text-blue-600 font-medium hover:underline">Lihat Seluruh (${state.permohonanList.length}) Tiket</button>
            </div>
            <div class="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              ${state.permohonanList.slice(0, 5).map((p) => `
                <div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-mono font-bold text-blue-600 dark:text-blue-400">${escapeHtml(p.ticketNumber)}</span>
                      <span class="text-slate-400">·</span>
                      <span class="font-semibold text-slate-800 dark:text-white">${escapeHtml(p.fullName)}</span>
                      <span class="text-slate-400">(${escapeHtml(p.company)})</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 mt-1">${escapeHtml(p.subject)}</p>
                  </div>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold w-fit ${
                    p.status === 'Baru' ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400' :
                    p.status === 'Diproses' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400' :
                    'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                  }">${escapeHtml(p.status)}</span>
                </div>`).join('')}
            </div>
          </div>
        </div>`;
    } else if (state.adminTab === 'permohonan') {
      panel.innerHTML = `
        <div class="space-y-6">
          <div>
            <h1 class="text-xl font-bold">Daftar Permohonan & Pesan Masuk</h1>
            <p class="text-xs text-slate-500">Kelola status tanggapan masyarakat dan calon klien industri</p>
          </div>
          <div class="space-y-4">
            ${state.permohonanList.map((p) => `
              <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-blue-600 dark:text-blue-400">${escapeHtml(p.ticketNumber)}</span>
                    <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">${escapeHtml(p.type)}</span>
                    <span class="text-slate-400 font-mono text-[11px]">${escapeHtml(p.createdAt)}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-400">Status:</span>
                    <select data-perm-status="${escapeHtml(p.id)}" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold">
                      <option value="Baru" ${p.status === 'Baru' ? 'selected' : ''}>Baru</option>
                      <option value="Diproses" ${p.status === 'Diproses' ? 'selected' : ''}>Diproses</option>
                      <option value="Selesai" ${p.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                  </div>
                </div>
                <div class="space-y-1 text-xs">
                  <h3 class="font-bold text-sm text-slate-900 dark:text-white">${escapeHtml(p.subject)}</h3>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800">${escapeHtml(p.message)}</p>
                </div>
                <div class="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 font-mono pt-1">
                  <span>Pemohon: ${escapeHtml(p.fullName)}</span>
                  <span>Instansi: ${escapeHtml(p.company)}</span>
                  <span>Email: ${escapeHtml(p.email)}</span>
                  <span>Telp: ${escapeHtml(p.phone)}</span>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
    } else if (state.adminTab === 'layanan') {
      panel.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h1 class="text-xl font-bold">Kelola Layanan Manufaktur & PPID</h1>
              <p class="text-xs text-slate-500">Tambah, sunting, atau hapus item layanan di website</p>
            </div>
            <button type="button" id="admin-add-layanan" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold shadow">+ Tambah Layanan</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${state.layananList.map((l) => `
              <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                  <span class="text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">${escapeHtml(l.category)}</span>
                  <h3 class="font-bold text-sm line-clamp-1">${escapeHtml(l.title)}</h3>
                  <p class="text-xs text-slate-500 line-clamp-2">${escapeHtml(l.shortDesc)}</p>
                </div>
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button type="button" data-edit-layanan="${escapeHtml(l.id)}" class="text-blue-600 hover:text-blue-700 font-semibold">Sunting</button>
                  <button type="button" data-del-layanan="${escapeHtml(l.id)}" class="text-red-500 hover:text-red-700 font-semibold">Hapus</button>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
    } else if (state.adminTab === 'project') {
      panel.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h1 class="text-xl font-bold">Kelola Portofolio Project</h1>
              <p class="text-xs text-slate-500">Tambah dan kelola studi kasus rekayasa manufaktur</p>
            </div>
            <button type="button" id="admin-add-project" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold shadow">+ Tambah Project</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${state.projectList.map((p) => `
              <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                  <span class="text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">${escapeHtml(p.category)}</span>
                  <h3 class="font-bold text-sm line-clamp-1">${escapeHtml(p.title)}</h3>
                  <p class="text-xs text-slate-500">${escapeHtml(p.client)} · ${escapeHtml(p.location)}</p>
                </div>
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button type="button" data-edit-project="${escapeHtml(p.id)}" class="text-blue-600 hover:text-blue-700 font-semibold">Sunting</button>
                  <button type="button" data-del-project="${escapeHtml(p.id)}" class="text-red-500 hover:text-red-700 font-semibold">Hapus</button>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
    } else if (state.adminTab === 'artikel') {
      panel.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h1 class="text-xl font-bold">Kelola Artikel & Berita Mutu</h1>
              <p class="text-xs text-slate-500">Publikasi edukasi dan informasi resmi PPID</p>
            </div>
            <button type="button" id="admin-add-artikel" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold shadow">+ Tulis Artikel</button>
          </div>
          <div class="space-y-3">
            ${state.artikelList.map((a) => `
              <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 text-xs">
                <div class="space-y-1">
                  <span class="text-[10px] font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">${escapeHtml(a.category)}</span>
                  <h3 class="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">${escapeHtml(a.title)}</h3>
                  <p class="text-slate-400 font-mono text-[11px]">${escapeHtml(a.date)} · Oleh ${escapeHtml(a.author)}</p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <button type="button" data-edit-artikel="${escapeHtml(a.id)}" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-200">Sunting</button>
                  <button type="button" data-del-artikel="${escapeHtml(a.id)}" class="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100">Hapus</button>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
    } else if (state.adminTab === 'regulasi') {
      panel.innerHTML = `
        <div class="space-y-6">
          <div>
            <h1 class="text-xl font-bold">Kelola Dokumen Regulasi & SOP</h1>
            <p class="text-xs text-slate-500">Dokumen payung hukum resmi UU, PP, PMA, dan SOP</p>
          </div>
          <div class="space-y-3">
            ${state.regulasiList.map((r) => `
              <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 text-xs">
                <div class="space-y-1">
                  <span class="font-mono font-bold text-blue-600">${escapeHtml(r.nomor)}</span>
                  <h3 class="font-bold text-sm text-slate-900 dark:text-white">${escapeHtml(r.title)}</h3>
                  <p class="text-slate-400">${escapeHtml(r.category)} · Ukuran ${escapeHtml(r.fileSize)}</p>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
    } else if (state.adminTab === 'media') {
      const assets = [
        { title: 'Logo Resmi Kemenag RI', src: DATA.images.logo, ratio: '1:1 (WEBP)' },
        { title: 'Hero Industrial Facility', src: DATA.images.hero, ratio: '16:9 (JPG)' },
        { title: 'CNC 5-Axis Precision', src: DATA.images.cnc, ratio: '4:3 (JPG)' },
        { title: 'Laser Cutting 12kW', src: DATA.images.laser, ratio: '4:3 (JPG)' },
        { title: 'HQ Gedung PPID Kemenag', src: DATA.images.hq, ratio: '16:9 (JPG)' }
      ];
      panel.innerHTML = `
        <div class="space-y-6">
          <div>
            <h1 class="text-xl font-bold">Media Manager & Library Aset</h1>
            <p class="text-xs text-slate-500">Aset gambar resmi & industrial yang tersimpan di dalam proyek lokal</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${assets.map((m) => `
              <div class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm p-3 space-y-2">
                <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                  <img src="${escapeHtml(m.src)}" alt="${escapeHtml(m.title)}" class="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 class="font-bold text-xs line-clamp-1">${escapeHtml(m.title)}</h4>
                  <p class="text-[10px] text-slate-400 font-mono">${escapeHtml(m.ratio)}</p>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
    } else if (state.adminTab === 'seo' || state.adminTab === 'settings') {
      const s = state.siteSettings;
      panel.innerHTML = `
        <div class="space-y-6">
          <div>
            <h1 class="text-xl font-bold">${state.adminTab === 'seo' ? 'Pengaturan SEO Global & Meta Data' : 'Pengaturan Identitas & Kontak Kantor'}</h1>
            <p class="text-xs text-slate-500">Perubahan disimpan secara permanen di browser</p>
          </div>
          <form id="admin-settings-form" class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs max-w-2xl">
            <div>
              <label class="block font-semibold mb-1">Meta Title</label>
              <input type="text" name="metaTitle" value="${escapeHtml(s.metaTitle)}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
            </div>
            <div>
              <label class="block font-semibold mb-1">Meta Description</label>
              <textarea rows="3" name="metaDescription" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">${escapeHtml(s.metaDescription)}</textarea>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-semibold mb-1">Nomor Telepon Kantor</label>
                <input type="text" name="phone" value="${escapeHtml(s.phone)}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono" />
              </div>
              <div>
                <label class="block font-semibold mb-1">WhatsApp Layanan</label>
                <input type="text" name="whatsapp" value="${escapeHtml(s.whatsapp)}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono" />
              </div>
            </div>
            <div>
              <label class="block font-semibold mb-1">Email Resmi</label>
              <input type="email" name="email" value="${escapeHtml(s.email)}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
            </div>
            <div>
              <label class="block font-semibold mb-1">Alamat Kantor</label>
              <input type="text" name="address" value="${escapeHtml(s.address)}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
            </div>
            <div>
              <label class="block font-semibold mb-1">Jam Operasional</label>
              <input type="text" name="operationalHours" value="${escapeHtml(s.operationalHours)}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono" />
            </div>
            <button type="submit" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow">Simpan Perubahan</button>
          </form>
        </div>`;
    }
  }

  // Toast helper
  function showToast(msg) {
    const el = document.getElementById('global-toast');
    const txt = document.getElementById('global-toast-text');
    if (el && txt) {
      txt.textContent = msg;
      el.classList.remove('hidden');
      setTimeout(() => el.classList.add('hidden'), 3000);
    }
  }

  // Modals
  function openPermohonanModal(presetType) {
    const modal = document.getElementById('permohonan-modal');
    const formWrap = document.getElementById('perm-form-view');
    const successWrap = document.getElementById('perm-success-view');
    if (!modal) return;

    if (formWrap) formWrap.classList.remove('hidden');
    if (successWrap) successWrap.classList.add('hidden');
    setPermType(presetType || 'Informasi Publik');
    modal.classList.remove('hidden');
  }

  function closePermohonanModal() {
    const modal = document.getElementById('permohonan-modal');
    if (modal) modal.classList.add('hidden');
  }

  let activePermType = 'Informasi Publik';
  function setPermType(type) {
    activePermType = type;
    document.querySelectorAll('[data-perm-type]').forEach((btn) => {
      const active = btn.getAttribute('data-perm-type') === type;
      btn.classList.toggle('border-blue-600', active);
      btn.classList.toggle('bg-blue-50', active);
      btn.classList.toggle('dark:bg-blue-950/60', active);
      btn.classList.toggle('text-blue-700', active);
      btn.classList.toggle('dark:text-blue-300', active);
      btn.classList.toggle('font-semibold', active);
    });
  }

  function openDocModal(doc) {
    const modal = document.getElementById('doc-modal');
    if (!modal) return;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('doc-modal-title', doc.title || 'Dokumen Resmi');
    set('doc-modal-heading', doc.title || 'Dokumen Resmi');
    set('doc-modal-nomor', doc.nomor || 'REG-PPID-2026/DOC');
    set('doc-modal-nomor-sub', doc.nomor || 'Dokumen Resmi Kemenag Kota Mojokerto');
    set('doc-modal-type', doc.type || 'Informasi Publik Berkala');
    set('doc-modal-size', doc.size || '1.8 MB (PDF)');
    set('doc-modal-date', doc.date || 'Tahun Anggaran 2026');
    modal.classList.remove('hidden');
  }

  function closeDocModal() {
    const modal = document.getElementById('doc-modal');
    if (modal) modal.classList.add('hidden');
  }

  function closeMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) drawer.classList.add('hidden');
  }

  function copyTextSafe(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () {});
    }
  }

  // Admin CRUD & Confirm Modal helpers
  let crudState = null; // { entity: 'layanan'|'project'|'artikel', id: string|null }
  let pendingConfirmAction = null;

  function openConfirmModal(title, message, onConfirm) {
    const modal = document.getElementById('admin-confirm-modal');
    const titleEl = document.getElementById('admin-confirm-title');
    const msgEl = document.getElementById('admin-confirm-message');
    if (!modal) return;
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    pendingConfirmAction = onConfirm;
    modal.classList.remove('hidden');
  }

  function closeConfirmModal() {
    const modal = document.getElementById('admin-confirm-modal');
    if (modal) modal.classList.add('hidden');
    pendingConfirmAction = null;
  }

  function openCrudModal(entity, item) {
    const modal = document.getElementById('admin-crud-modal');
    const titleEl = document.getElementById('admin-crud-title');
    const fieldsEl = document.getElementById('admin-crud-fields');
    if (!modal || !fieldsEl) return;

    crudState = { entity, id: item ? item.id : null };
    const isEdit = Boolean(item);

    if (entity === 'layanan') {
      if (titleEl) titleEl.textContent = isEdit ? 'Sunting Layanan' : 'Tambah Layanan Baru';
      const cats = ['Manufaktur', 'Presisi', 'Otomasi', 'Layanan PPID'];
      fieldsEl.innerHTML = `
        <div>
          <label class="block font-semibold mb-1">Nama Layanan *</label>
          <input type="text" name="title" required value="${escapeHtml(item ? item.title : '')}" placeholder="Contoh: Laser Cutting Presisi" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
        </div>
        <div>
          <label class="block font-semibold mb-1">Kategori *</label>
          <select name="category" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">
            ${cats.map((c) => `<option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block font-semibold mb-1">Ringkasan Singkat *</label>
          <textarea rows="2" name="shortDesc" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">${escapeHtml(item ? item.shortDesc : '')}</textarea>
        </div>
        <div>
          <label class="block font-semibold mb-1">Deskripsi Lengkap *</label>
          <textarea rows="3" name="description" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">${escapeHtml(item ? item.description : '')}</textarea>
        </div>`;
    } else if (entity === 'project') {
      if (titleEl) titleEl.textContent = isEdit ? 'Sunting Project' : 'Tambah Project Baru';
      const cats = ['Fabrikasi', 'Otomasi Pabrik', 'Mesin Khusus', 'Komponen Presisi'];
      fieldsEl.innerHTML = `
        <div>
          <label class="block font-semibold mb-1">Judul Project *</label>
          <input type="text" name="title" required value="${escapeHtml(item ? item.title : '')}" placeholder="Contoh: Otomasi Conveyor Pabrik" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold mb-1">Kategori *</label>
            <select name="category" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">
              ${cats.map((c) => `<option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block font-semibold mb-1">Tahun *</label>
            <input type="text" name="year" required value="${escapeHtml(item ? item.year : '2026')}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold mb-1">Nama Klien *</label>
            <input type="text" name="client" required value="${escapeHtml(item ? item.client : '')}" placeholder="PT Mitra Industri" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Lokasi *</label>
            <input type="text" name="location" required value="${escapeHtml(item ? item.location : 'Kota Mojokerto, Jawa Timur')}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1">Deskripsi Project *</label>
          <textarea rows="3" name="description" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">${escapeHtml(item ? item.description : '')}</textarea>
        </div>`;
    } else if (entity === 'artikel') {
      if (titleEl) titleEl.textContent = isEdit ? 'Sunting Artikel' : 'Tulis Artikel Baru';
      const cats = ['Teknologi Manufaktur', 'Keterbukaan Informasi', 'Otomasi Industri', 'Standar Mutu'];
      fieldsEl.innerHTML = `
        <div>
          <label class="block font-semibold mb-1">Judul Artikel *</label>
          <input type="text" name="title" required value="${escapeHtml(item ? item.title : '')}" placeholder="Judul artikel informatif" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold mb-1">Kategori *</label>
            <select name="category" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">
              ${cats.map((c) => `<option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block font-semibold mb-1">Penulis *</label>
            <input type="text" name="author" required value="${escapeHtml(item ? item.author : 'Tim Redaksi PPID')}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg" />
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1">Ringkasan *</label>
          <textarea rows="2" name="summary" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">${escapeHtml(item ? item.summary : '')}</textarea>
        </div>
        <div>
          <label class="block font-semibold mb-1">Isi Artikel (Pisahkan paragraf dengan baris baru) *</label>
          <textarea rows="4" name="content" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">${escapeHtml(item && item.content ? item.content.join('\n\n') : '')}</textarea>
        </div>`;
    }

    modal.classList.remove('hidden');
  }

  function closeCrudModal() {
    const modal = document.getElementById('admin-crud-modal');
    if (modal) modal.classList.add('hidden');
    crudState = null;
  }

  // Event Delegation
  document.addEventListener('click', function (e) {
    const target = e.target;

    const goBtn = target.closest('[data-go]');
    if (goBtn) {
      e.preventDefault();
      navigate(goBtn.getAttribute('data-go'), goBtn.getAttribute('data-slug'));
      return;
    }

    const navBtn = target.closest('[data-nav-route]');
    if (navBtn) {
      e.preventDefault();
      navigate(navBtn.getAttribute('data-nav-route'));
      return;
    }

    if (target.closest('[data-toggle-theme]')) {
      toggleTheme();
      return;
    }

    if (target.closest('#mobile-menu-btn')) {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) drawer.classList.toggle('hidden');
      return;
    }

    const openPerm = target.closest('[data-open-permohonan]');
    if (openPerm) {
      openPermohonanModal(openPerm.getAttribute('data-open-permohonan'));
      return;
    }

    if (target.closest('[data-close-permohonan]')) {
      closePermohonanModal();
      return;
    }

    const permTypeBtn = target.closest('[data-perm-type]');
    if (permTypeBtn) {
      setPermType(permTypeBtn.getAttribute('data-perm-type'));
      return;
    }

    const docBtn = target.closest('[data-doc-preview]');
    if (docBtn) {
      try {
        openDocModal(JSON.parse(docBtn.getAttribute('data-doc-preview')));
      } catch (err) {
        console.error(err);
      }
      return;
    }

    if (target.closest('[data-close-doc]')) {
      closeDocModal();
      return;
    }

    if (target.closest('#doc-download-btn')) {
      const btn = target.closest('#doc-download-btn');
      btn.textContent = '✓ Berkas Berhasil Diunduh';
      setTimeout(() => { btn.textContent = 'Unduh Berkas Lengkap'; }, 2500);
      return;
    }

    if (target.closest('#doc-print-btn')) {
      window.print();
      return;
    }

    // Home Layanan Filter
    const homeCat = target.closest('[data-home-layanan-cat]');
    if (homeCat) {
      state.homeLayananCat = homeCat.getAttribute('data-home-layanan-cat');
      renderHome();
      return;
    }

    // Layanan Page Filter
    const layCat = target.closest('[data-layanan-cat]');
    if (layCat) {
      state.layananCat = layCat.getAttribute('data-layanan-cat');
      renderLayananPage();
      return;
    }

    // Regulasi Filter
    const regCat = target.closest('[data-reg-cat]');
    if (regCat) {
      state.regulasiCat = regCat.getAttribute('data-reg-cat');
      renderRegulasi();
      return;
    }

    // Info Publik Filter
    const infoCat = target.closest('[data-info-type]');
    if (infoCat) {
      state.infoType = infoCat.getAttribute('data-info-type');
      renderInformasiPublik();
      return;
    }

    // Project Filter
    const projCat = target.closest('[data-proj-cat]');
    if (projCat) {
      state.projectCat = projCat.getAttribute('data-proj-cat');
      renderProjectPage();
      return;
    }

    // Artikel Filter & Pagination
    const artCat = target.closest('[data-art-cat]');
    if (artCat) {
      state.artikelCat = artCat.getAttribute('data-art-cat');
      state.artikelPage = 1;
      renderArtikelPage();
      return;
    }
    const artPage = target.closest('[data-art-page]');
    if (artPage) {
      state.artikelPage = Number(artPage.getAttribute('data-art-page'));
      renderArtikelPage();
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    // FAQ Toggle
    const faqToggle = target.closest('[data-faq-toggle]');
    if (faqToggle) {
      const idx = faqToggle.getAttribute('data-faq-toggle');
      const body = document.querySelector(`[data-faq-body="${idx}"]`);
      const arrow = document.querySelector(`[data-faq-arrow="${idx}"]`);
      if (body) {
        const isHidden = body.classList.toggle('hidden');
        if (arrow) arrow.textContent = isHidden ? '▼' : '▲';
      }
      return;
    }

    // Testimoni Slider
    if (target.closest('#testi-prev')) {
      state.testiIndex = (state.testiIndex - 1 + state.testimoniList.length) % state.testimoniList.length;
      renderTestimoniSlider();
      return;
    }
    if (target.closest('#testi-next')) {
      state.testiIndex = (state.testiIndex + 1) % state.testimoniList.length;
      renderTestimoniSlider();
      return;
    }
    const dotBtn = target.closest('[data-testi-dot]');
    if (dotBtn) {
      state.testiIndex = Number(dotBtn.getAttribute('data-testi-dot'));
      renderTestimoniSlider();
      return;
    }

    // Share Artikel (Salin Tautan)
    const shareBtn = target.closest('[data-share="copy"]');
    if (shareBtn) {
      copyTextSafe(window.location.href);
      shareBtn.textContent = '✓ Tautan Tersalin';
      setTimeout(() => { shareBtn.textContent = 'Salin Tautan'; }, 2000);
      return;
    }

    // Modal CRUD & Confirm close/confirm buttons
    if (target.closest('[data-close-crud]')) {
      closeCrudModal();
      return;
    }
    if (target.closest('[data-close-confirm]')) {
      closeConfirmModal();
      return;
    }
    if (target.closest('#admin-confirm-yes')) {
      if (typeof pendingConfirmAction === 'function') pendingConfirmAction();
      closeConfirmModal();
      return;
    }

    // Admin Tabs & Actions
    const admTab = target.closest('[data-admin-tab]');
    if (admTab) {
      state.adminTab = admTab.getAttribute('data-admin-tab');
      renderAdmin();
      return;
    }

    if (target.closest('#admin-reset-btn')) {
      openConfirmModal(
        'Reset Data Bawaan',
        'Seluruh perubahan lokal pada layanan, project, artikel, permohonan, dan pengaturan akan dikembalikan ke data awal bawaan. Lanjutkan?',
        function () {
          Object.values(STORAGE_KEYS).forEach((k) => {
            if (k !== STORAGE_KEYS.theme) localStorage.removeItem(k);
          });
          state.siteSettings = JSON.parse(JSON.stringify(DATA.siteSettings));
          state.layananList = JSON.parse(JSON.stringify(DATA.layananList));
          state.projectList = JSON.parse(JSON.stringify(DATA.projectList));
          state.artikelList = JSON.parse(JSON.stringify(DATA.artikelList));
          state.regulasiList = JSON.parse(JSON.stringify(DATA.regulasiList));
          state.permohonanList = JSON.parse(JSON.stringify(DATA.permohonanList));
          renderAdmin();
          showToast('Data berhasil di-reset ke kondisi bawaan!');
        }
      );
      return;
    }

    if (target.closest('#admin-add-layanan')) {
      openCrudModal('layanan', null);
      return;
    }

    const editLay = target.closest('[data-edit-layanan]');
    if (editLay) {
      const id = editLay.getAttribute('data-edit-layanan');
      const item = state.layananList.find((x) => x.id === id);
      if (item) openCrudModal('layanan', item);
      return;
    }

    const delLay = target.closest('[data-del-layanan]');
    if (delLay) {
      const id = delLay.getAttribute('data-del-layanan');
      openConfirmModal('Hapus Layanan', 'Yakin ingin menghapus item layanan ini dari daftar?', function () {
        state.layananList = state.layananList.filter((x) => x.id !== id);
        saveStore(STORAGE_KEYS.layanan, state.layananList);
        renderAdmin();
        showToast('Layanan berhasil dihapus!');
      });
      return;
    }

    if (target.closest('#admin-add-project')) {
      openCrudModal('project', null);
      return;
    }

    const editProj = target.closest('[data-edit-project]');
    if (editProj) {
      const id = editProj.getAttribute('data-edit-project');
      const item = state.projectList.find((x) => x.id === id);
      if (item) openCrudModal('project', item);
      return;
    }

    const delProj = target.closest('[data-del-project]');
    if (delProj) {
      const id = delProj.getAttribute('data-del-project');
      openConfirmModal('Hapus Project', 'Yakin ingin menghapus portofolio project ini?', function () {
        state.projectList = state.projectList.filter((x) => x.id !== id);
        saveStore(STORAGE_KEYS.projects, state.projectList);
        renderAdmin();
        showToast('Project berhasil dihapus!');
      });
      return;
    }

    if (target.closest('#admin-add-artikel')) {
      openCrudModal('artikel', null);
      return;
    }

    const editArt = target.closest('[data-edit-artikel]');
    if (editArt) {
      const id = editArt.getAttribute('data-edit-artikel');
      const item = state.artikelList.find((x) => x.id === id);
      if (item) openCrudModal('artikel', item);
      return;
    }

    const delArt = target.closest('[data-del-artikel]');
    if (delArt) {
      const id = delArt.getAttribute('data-del-artikel');
      openConfirmModal('Hapus Artikel', 'Yakin ingin menghapus artikel ini dari publikasi?', function () {
        state.artikelList = state.artikelList.filter((x) => x.id !== id);
        saveStore(STORAGE_KEYS.artikel, state.artikelList);
        renderAdmin();
        showToast('Artikel berhasil dihapus!');
      });
      return;
    }

    if (target.closest('#copy-ticket-btn')) {
      const code = (document.getElementById('perm-ticket-code') || {}).textContent || '';
      copyTextSafe(code);
      const btn = target.closest('#copy-ticket-btn');
      btn.textContent = '✓ Tersalin';
      setTimeout(() => { btn.textContent = 'Salin Tiket'; }, 2000);
      return;
    }
  });

  // Input / Search listeners
  document.addEventListener('input', function (e) {
    const id = e.target.id;
    const val = e.target.value;
    if (id === 'regulasi-search') { state.regulasiSearch = val; renderRegulasi(); }
    if (id === 'layanan-search') { state.layananSearch = val; renderLayananPage(); }
    if (id === 'info-search') { state.infoSearch = val; renderInformasiPublik(); }
    if (id === 'dip-search') { state.dipSearch = val; renderDaftarInformasi(); }
    if (id === 'project-search') { state.projectSearch = val; renderProjectPage(); }
    if (id === 'artikel-search') { state.artikelSearch = val; state.artikelPage = 1; renderArtikelPage(); }
  });

  // Change listener (admin permohonan status)
  document.addEventListener('change', function (e) {
    const permId = e.target.getAttribute('data-perm-status');
    if (permId) {
      const item = state.permohonanList.find((p) => p.id === permId);
      if (item) {
        item.status = e.target.value;
        saveStore(STORAGE_KEYS.permohonan, state.permohonanList);
        renderAdmin();
        showToast('Status permohonan diperbarui!');
      }
    }
  });

  // Form Submissions
  document.addEventListener('submit', function (e) {
    const form = e.target;

    if (form.id === 'footer-newsletter-form') {
      e.preventDefault();
      const msg = document.getElementById('newsletter-success');
      if (msg) msg.classList.remove('hidden');
      form.reset();
      setTimeout(() => { if (msg) msg.classList.add('hidden'); }, 4000);
    }

    if (form.id === 'permohonan-form') {
      e.preventDefault();
      const fd = new FormData(form);
      const ticket = 'PPID-MJK-2026-' + Math.floor(1000 + Math.random() * 9000);
      state.permohonanList.unshift({
        id: 'perm-' + Date.now(),
        ticketNumber: ticket,
        fullName: fd.get('fullName'),
        email: fd.get('email'),
        phone: fd.get('phone'),
        company: fd.get('company') || 'Individu / Warga Negara',
        type: activePermType,
        subject: fd.get('subject'),
        message: fd.get('message'),
        status: 'Baru',
        createdAt: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB'
      });
      saveStore(STORAGE_KEYS.permohonan, state.permohonanList);
      const codeEl = document.getElementById('perm-ticket-code');
      if (codeEl) codeEl.textContent = ticket;
      document.getElementById('perm-form-view').classList.add('hidden');
      document.getElementById('perm-success-view').classList.remove('hidden');
      form.reset();
    }

    if (form.id === 'kontak-form') {
      e.preventDefault();
      const fd = new FormData(form);
      const ticket = 'PPID-MJK-2026-' + Math.floor(1000 + Math.random() * 9000);
      state.permohonanList.unshift({
        id: 'perm-' + Date.now(),
        ticketNumber: ticket,
        fullName: fd.get('name'),
        email: fd.get('email'),
        phone: fd.get('phone'),
        company: fd.get('company') || 'Individu / Warga Negara',
        type: 'Konsultasi Teknis',
        subject: fd.get('subject'),
        message: fd.get('message'),
        status: 'Baru',
        createdAt: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB'
      });
      saveStore(STORAGE_KEYS.permohonan, state.permohonanList);
      document.getElementById('kontak-ticket-code').textContent = ticket;
      document.getElementById('kontak-form').classList.add('hidden');
      document.getElementById('kontak-success').classList.remove('hidden');
      form.reset();
    }

    if (form.id === 'admin-settings-form') {
      e.preventDefault();
      const fd = new FormData(form);
      state.siteSettings = {
        ...state.siteSettings,
        metaTitle: fd.get('metaTitle'),
        metaDescription: fd.get('metaDescription'),
        phone: fd.get('phone'),
        whatsapp: fd.get('whatsapp'),
        email: fd.get('email'),
        address: fd.get('address'),
        operationalHours: fd.get('operationalHours')
      };
      saveStore(STORAGE_KEYS.settings, state.siteSettings);
      syncSettingsToDOM();
      showToast('Pengaturan portal berhasil disimpan!');
    }

    if (form.id === 'admin-crud-form' && crudState) {
      e.preventDefault();
      const fd = new FormData(form);
      const { entity, id } = crudState;

      if (entity === 'layanan') {
        const title = String(fd.get('title') || '').trim();
        const category = String(fd.get('category') || 'Manufaktur');
        const shortDesc = String(fd.get('shortDesc') || '').trim();
        const description = String(fd.get('description') || '').trim();
        if (id) {
          const item = state.layananList.find((x) => x.id === id);
          if (item) {
            item.title = title;
            item.category = category;
            item.shortDesc = shortDesc;
            item.description = description;
          }
          showToast('Layanan berhasil diperbarui!');
        } else {
          state.layananList.unshift({
            id: 'layanan-' + Date.now(),
            slug: 'layanan-' + Date.now(),
            title,
            category,
            shortDesc,
            description,
            image: DATA.images.laser,
            icon: 'wrench',
            benefits: ['Standar Mutu ISO 9001:2015', 'Pengerjaan Cepat & Presisi'],
            specifications: [{ label: 'Toleransi', value: '±0.01 mm' }],
            faqs: [{ question: 'Bagaimana pemesanan?', answer: 'Ajukan melalui form PPID.' }]
          });
          showToast('Layanan baru ditambahkan!');
        }
        saveStore(STORAGE_KEYS.layanan, state.layananList);
      } else if (entity === 'project') {
        const title = String(fd.get('title') || '').trim();
        const category = String(fd.get('category') || 'Fabrikasi');
        const year = String(fd.get('year') || '2026').trim();
        const client = String(fd.get('client') || '').trim();
        const location = String(fd.get('location') || '').trim();
        const description = String(fd.get('description') || '').trim();
        if (id) {
          const item = state.projectList.find((x) => x.id === id);
          if (item) {
            item.title = title;
            item.category = category;
            item.year = year;
            item.client = client;
            item.location = location;
            item.description = description;
          }
          showToast('Project berhasil diperbarui!');
        } else {
          state.projectList.unshift({
            id: 'proj-' + Date.now(),
            slug: 'proj-' + Date.now(),
            title,
            category,
            location,
            year,
            client,
            thumbnail: DATA.images.hero,
            gallery: [DATA.images.hero, DATA.images.cnc],
            description,
            challenge: 'Tantangan teknis di lapangan.',
            solution: 'Solusi rekayasa presisi.',
            technologies: ['CNC 5-Axis', 'PLC Siemens'],
            results: ['Efisiensi meningkat 30%']
          });
          showToast('Project baru ditambahkan!');
        }
        saveStore(STORAGE_KEYS.projects, state.projectList);
      } else if (entity === 'artikel') {
        const title = String(fd.get('title') || '').trim();
        const category = String(fd.get('category') || 'Teknologi Manufaktur');
        const author = String(fd.get('author') || 'Tim Redaksi PPID').trim();
        const summary = String(fd.get('summary') || '').trim();
        const rawContent = String(fd.get('content') || '').trim();
        const contentArr = rawContent ? rawContent.split(/\n+/).map((s) => s.trim()).filter(Boolean) : [summary];
        if (id) {
          const item = state.artikelList.find((x) => x.id === id);
          if (item) {
            item.title = title;
            item.category = category;
            item.author = author;
            item.summary = summary;
            item.content = contentArr;
          }
          showToast('Artikel berhasil diperbarui!');
        } else {
          state.artikelList.unshift({
            id: 'art-' + Date.now(),
            slug: 'art-' + Date.now(),
            title,
            category,
            summary,
            content: contentArr,
            thumbnail: DATA.images.cnc,
            author,
            authorRole: 'Dokumentasi & Publikasi',
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
            readTime: '4 min baca',
            tags: ['Manufaktur', 'PPID']
          });
          showToast('Artikel baru diterbitkan!');
        }
        saveStore(STORAGE_KEYS.artikel, state.artikelList);
      }

      closeCrudModal();
      renderAdmin();
    }
  });

  // Kontak reset
  document.addEventListener('click', function (e) {
    if (e.target.id === 'kontak-reset-btn') {
      document.getElementById('kontak-success').classList.add('hidden');
      document.getElementById('kontak-form').classList.remove('hidden');
    }
  });

  // Boot
  window.addEventListener('hashchange', function () {
    const parsed = parseHash();
    state.currentRoute = parsed.route;
    if (parsed.route === 'detail-layanan' && parsed.slug) state.selectedLayananSlug = parsed.slug;
    if (parsed.route === 'detail-project' && parsed.slug) state.selectedProjectSlug = parsed.slug;
    if (parsed.route === 'detail-artikel' && parsed.slug) state.selectedArtikelSlug = parsed.slug;
    renderRoute();
  });

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    const parsed = parseHash();
    state.currentRoute = parsed.route;
    if (parsed.route === 'detail-layanan' && parsed.slug) state.selectedLayananSlug = parsed.slug;
    if (parsed.route === 'detail-project' && parsed.slug) state.selectedProjectSlug = parsed.slug;
    if (parsed.route === 'detail-artikel' && parsed.slug) state.selectedArtikelSlug = parsed.slug;
    renderRoute();
  });
})();
