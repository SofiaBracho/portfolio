(function(){
  "use strict";
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- i18n ---------- */
  var ES = {
    nav_work:'Trabajo', nav_about:'Sobre mí', nav_journey:'Trayecto',
    hero_badge:'Ingeniera de Producto · Desarrolladora Full-Stack',
    hero_s1:'Diseño interfaces que se sienten', hero_s2:'vivas',
    hero_sub:'Ingeniera de producto y desarrolladora full-stack. Diseño y entrego productos interactivos de punta a punta, de la interfaz a la nube.',
    hero_cta:'Hablemos', hero_cv:'Currículum', ph2:'foto de perfil', id_role:'INGENIERA DE PRODUCTO', av_hint:'te sigue el cursor',
    tech_also:'También trabajo con',
    tech_c_ts:'De punta a punta', tech_c_node:'Backend', tech_c_ng:'Apps web', tech_c_pg:'Datos',
    work_title:'Trabajo seleccionado',
    p_nehemias:'Tras los terremotos de 2026 en Venezuela, comunidades fuera del radar institucional necesitaban una forma radicalmente transparente de recibir y auditar ayuda. Me sumé para llevar un MVP existente a producción: endurecí un VPS Ubuntu virgen (UFW, SSH root deshabilitado, Docker, respaldos automáticos), implementé middleware de CSRF y verificación de administradores, corregí un bug de integridad en la sincronización con Google Sheets, y integré una suite de Vitest/Playwright en CI con GitHub Actions. En producción en menos de 48 horas, el fondo ya superó los $17,000 USD recaudados, con cada bolívar auditable en tiempo real.',
    cta_live_nehemias:'Sitio en vivo →', cta_code_nehemias:'Código',
    p_unidos:'La emergencia sísmica de 2026 en Venezuela necesitaba una forma rápida de encontrar centros de acopio activos antes de que se propagara la desinformación. Como una de 5 desarrolladoras que sacaron el MVP en un solo día, lideré la interfaz mobile-first para conexiones degradadas 3G/Edge, el flujo de búsqueda geolocalizada y los paneles de inventario para administradores, además de la indexación espacial en Supabase/PostgreSQL y el edge caching. La plataforma sostuvo 100% de éxito (0 errores) ante un pico de tráfico que superó los 500 usuarios en las primeras 36 horas.',
    cta_live_unidos:'Sitio en vivo →', cta_code_unidos:'Código',
    work_more:'Ver más proyectos', work_less:'Ver menos proyectos',
    p_nexus:'Los mecánicos que leen un volcado crudo del escáner suelen adivinar reparaciones sin respaldo específico del fabricante. Construí Nexus para convertir códigos DTC y datos freeze-frame en informes de reparación citados y específicos por fabricante, diseñando y construyendo de punta a punta la interfaz industrial cyber-workshop sobre React 19, TypeScript y Supabase.',
    p_nest:'Los diarios digitales rara vez ofrecen privacidad real y una interfaz cuidada a la vez. Nest es un diario cifrado y local-first renderizado como una escena 3D animada: tocas la placa, escribes una contraseña y un libro de anillas de cuero coñac se abre con toda la app sobre el papel.',
    p_piensa:'La Universidad Politécnica Territorial de Maracaibo necesitaba una sola plataforma para dar clases híbridas entre roles de estudiante, profesor y coordinador, en lugar de herramientas dispersas. Como proyecto de grado, diseñé y construí sola todo el sistema: evaluación de actividades, planificación de clases, horarios, documentos compartidos, períodos académicos y respaldos automáticos. Entró en uso real en la universidad y me ayudó a graduarme 2ª de mi promoción.',
    cta_live:'Sitio en vivo →', cta_code:'Código', cta_live2:'Sitio en vivo →', cta_code2:'Código', cta_live3:'Sitio en vivo →',
    about_lead:'Sobre mí',
    about_h:'El diseño me enseñó a cuidar. La ingeniería, a entregar.',
    about_p1:'Soy ingeniera de producto y desarrolladora full-stack con un pasado como diseñadora gráfica, bilingüe en inglés y español. Trabajo en todo el producto: diseño de interfaz, front-end, back-end y nube, llevando funcionalidades desde el primer boceto hasta producción.',
    about_p2:'Hoy construyo a lo largo del stack en Inimble, cuidando las pequeñas interacciones que hacen que el software se sienta nítido y considerado.',
    exp_title:'Dónde he estado', edu_title:'Lo que he aprendido',
    exp_inimble:'Construí una app legaltech con modelos de IA autoalojados e integré cobros con Stripe. Desarrollé funcionalidades full-stack en Angular, Node.js y MariaDB, con despliegues en AWS, sitios WordPress y correcciones en producción en equipos ágiles, además de una plataforma B2B de streaming en PHP/Symfony y Angular.',
    exp_mega:'Materiales promocionales y contenido audiovisual para redes; identidad de marca en empaques, etiquetas y gráficos digitales.',
    edu_uni:'Me gradué en 2º lugar de mi promoción. Proyecto final: una plataforma e-learning para educación híbrida (PIENSA). Lideré un proyecto de mantenimiento preventivo para departamentos académicos.',
    contact_kicker:'Construyamos algo al límite.',
    cv_en:'Currículum (EN)', cv_es:'CV (ES)'
  };

  var lang = localStorage.getItem('neon-lang') || 'en';
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function(el){ el.__en = el.innerHTML; });

  function applyLang(){
    document.documentElement.lang = lang;
    nodes.forEach(function(el){
      var k = el.getAttribute('data-i18n');
      el.innerHTML = (lang === 'es' && ES[k]) ? ES[k] : el.__en;
    });
    var meta = { en:{ f:'🇺🇸', l:'English' }, es:{ f:'🇪🇸', l:'Español' } }[lang] || { f:'🇺🇸', l:'English' };
    var cvHref = lang === 'es'
      ? 'https://drive.google.com/file/d/1RWSKXAZzaUWrQ_F3BrZ4ViP7R9HjTZpx/view?usp=sharing'
      : 'https://drive.google.com/file/d/1MpYET5DmpGmRF44TWKZEnXo3S-BH1j42/view?usp=sharing';
    var cv = document.getElementById('cvLink'); if (cv) cv.href = cvHref;
    var cvc = document.getElementById('cvLinkCta'); if (cvc) cvc.href = cvHref;
    var lc = document.querySelector('#langBtn .lang-code'); if (lc) lc.textContent = meta.l;
    var lf = document.querySelector('#langBtn .flag'); if (lf) lf.textContent = meta.f;
    document.querySelectorAll('.lang-opt').forEach(function(o){
      o.setAttribute('aria-selected', o.getAttribute('data-l') === lang ? 'true' : 'false');
    });
  }
  var langDd = document.getElementById('langDd');
  var langBtn = document.getElementById('langBtn');
  function closeLang(){ langDd.classList.remove('open'); langBtn.setAttribute('aria-expanded','false'); }
  langBtn.addEventListener('click', function(e){
    e.stopPropagation();
    var open = langDd.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.lang-opt').forEach(function(o){
    o.addEventListener('click', function(){
      lang = o.getAttribute('data-l');
      localStorage.setItem('neon-lang', lang);
      closeLang(); applyLang();
    });
  });
  document.addEventListener('click', function(e){ if (langDd.classList.contains('open') && !langDd.contains(e.target)) closeLang(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeLang(); });
  applyLang();

  /* ---------- more projects toggle ---------- */
  var moreBtn = document.getElementById('moreProjectsBtn');
  var morePanel = document.getElementById('moreProjects');
  var moreLabel = moreBtn && moreBtn.querySelector('.more-toggle-label');
  if (moreBtn && morePanel && moreLabel) {
    var moreLabels = { en:{ more:'Show more projects', less:'Show fewer projects' }, es:{ more:ES.work_more, less:ES.work_less } };
    moreBtn.addEventListener('click', function(){
      var open = morePanel.hasAttribute('hidden');
      if (open) morePanel.removeAttribute('hidden'); else morePanel.setAttribute('hidden','');
      moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      moreLabel.textContent = moreLabels[lang][open ? 'less' : 'more'];
    });
  }

  /* ---------- theme ---------- */
  var theme = localStorage.getItem('neon-theme') || 'dark';
  function applyTheme(){
    document.documentElement.setAttribute('data-theme', theme);
  }
  document.getElementById('themeBtn').addEventListener('click', function(){
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('neon-theme', theme); applyTheme();
  });
  applyTheme();

  /* ---------- reveal ---------- */
  if (reduce) {
    document.querySelectorAll('[data-reveal]').forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(ents){
      ents.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold:0.12, rootMargin:'0px 0px -7% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });
  }

  /* ---------- floating nav: hide on scroll down, reveal on scroll up / hover near top ---------- */
  var nav = document.querySelector('nav');
  if (nav) {
    var lastY = window.scrollY || 0, ticking = false;
    function navScroll(){
      var y = window.scrollY || 0;
      if (y > lastY && y > 90) nav.classList.add('nav-hidden');
      else nav.classList.remove('nav-hidden');
      lastY = y; ticking = false;
    }
    window.addEventListener('scroll', function(){
      if (!ticking) { requestAnimationFrame(navScroll); ticking = true; }
    }, { passive: true });
    window.addEventListener('pointermove', function(e){
      if (e.clientY < 84) nav.classList.remove('nav-hidden');
    }, { passive: true });
    nav.addEventListener('pointerenter', function(){ nav.classList.remove('nav-hidden'); });
  }

  /* ---------- email electric zap on click ---------- */
  var email = document.querySelector('.email');
  if (email && !reduce) {
    email.addEventListener('click', function(){
      var r = email.getBoundingClientRect();
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var acc = (getComputedStyle(document.documentElement).getPropertyValue('--acc').trim() || '#ffce1f');
      var cols = ['#22d3ee', acc];

      email.classList.remove('zap'); void email.offsetWidth; email.classList.add('zap');
      setTimeout(function(){ email.classList.remove('zap'); }, 600);

      // thunderbolt arcing through the text, left -> right
      var svgNS = 'http://www.w3.org/2000/svg';
      var h = r.height, pad = h * 0.5;
      var padX = Math.max(120, r.width * 0.35); // bolt overshoots the text on both sides
      var w = r.width + padX * 2;
      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('class', 'zap-bolt');
      svg.style.left = (r.left - padX) + 'px';
      svg.style.top = (r.top - pad) + 'px';
      svg.style.width = w + 'px';
      svg.style.height = (h + pad * 2) + 'px';
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + (h + pad * 2));
      svg.setAttribute('preserveAspectRatio', 'none');

      var n = Math.max(9, Math.round(w / 50)), midY = h * 0.5 + pad, pts = [];
      for (var i = 0; i <= n; i++) {
        var x = (w / n) * i;
        var amp = (i === 0 || i === n) ? h * 0.14 : h * 0.42;
        var y = midY + (Math.random() * 2 - 1) * amp;
        pts.push(x.toFixed(1) + ',' + y.toFixed(1));
      }
      var d = 'M' + pts.join(' L');
      ['bolt-glow', 'bolt-core'].forEach(function(cls){
        var p = document.createElementNS(svgNS, 'path');
        p.setAttribute('d', d); p.setAttribute('class', cls);
        svg.appendChild(p);
      });
      document.body.appendChild(svg);
      Array.prototype.forEach.call(svg.querySelectorAll('path'), function(p){
        var L = p.getTotalLength();
        p.style.strokeDasharray = L; p.style.strokeDashoffset = L;
        requestAnimationFrame(function(){ requestAnimationFrame(function(){ p.style.strokeDashoffset = '0'; }); });
      });
      setTimeout(function(){ svg.classList.add('fade'); }, 280);
      setTimeout(function(){ svg.remove(); }, 700);
    });
  }

  /* ---------- matrix code rain (hero right) ---------- */
  var mc = document.getElementById('matrix');
  if (mc) {
    var hero = document.getElementById('top');
    var ctx = mc.getContext('2d');
    var glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/{}=+*'.split('');
    var fontSize = 16, drops = [];
    function setup(){
      mc.width = hero.clientWidth; mc.height = hero.clientHeight;
      var cols = Math.ceil(mc.width / fontSize); drops = [];
      for (var i = 0; i < cols; i++) drops.push(Math.random() * -60);
    }
    function colors(){
      var s = getComputedStyle(document.documentElement);
      return { cy:(s.getPropertyValue('--cyan').trim() || '#22d3ee'), ac:(s.getPropertyValue('--acc').trim() || '#ffce1f') };
    }
    function frame(){
      var dark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.fillStyle = dark ? 'rgba(5,7,15,0.12)' : 'rgba(238,244,251,0.22)';
      ctx.fillRect(0, 0, mc.width, mc.height);
      var c = colors();
      ctx.font = fontSize + "px 'Space Mono', monospace";
      for (var i = 0; i < drops.length; i++) {
        var ch = glyphs[(Math.random() * glyphs.length) | 0];
        var y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() < 0.34 ? c.ac : c.cy;
        ctx.fillText(ch, i * fontSize, y);
        if (y > mc.height && Math.random() > 0.975) drops[i] = Math.random() * -20;
        drops[i] += 0.6;
      }
    }
    setup();
    window.addEventListener('resize', setup);
    if (reduce) { frame(); }
    else { var t = 0; (function loop(){ requestAnimationFrame(loop); if ((t++ % 2) === 0) frame(); })(); }
  }

  /* ---------- card tilt on hover (subtle) ---------- */
  if (!reduce) {
    document.querySelectorAll('.card, .item').forEach(function(card){
      card.addEventListener('pointermove', function(e){
        if (e.pointerType === 'touch') return;
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = 'transform .12s ease-out';
        card.style.transform = 'perspective(1100px) rotateX(' + (-py * 3).toFixed(2) + 'deg) rotateY(' + (px * 4).toFixed(2) + 'deg) translateY(-3px) scale(1.006)';
      });
      card.addEventListener('pointerleave', function(){
        card.style.transition = 'transform .5s cubic-bezier(.2,.7,.2,1)';
        card.style.transform = '';
      });
    });
  }

  // Project demo videos: show the poster by default; play the clip on hover
  // (pointer devices) or while on screen (touch, no hover). The video is only
  // revealed once it is FULLY loaded (canplaythrough) — until then the cover
  // image stays, even if the user hovers early. Reduced-motion: never play.
  var demos = document.querySelectorAll('.viz-media');
  if (demos.length) {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;

    // Fully buffered = the buffered range spans the whole clip (not just
    // readyState 4, which only means "enough to start"). This is what stops the
    // play-1s / flash-cover / play-again flicker from mid-clip stalls.
    var fullyLoaded = function(v){
      if (!v.duration || !isFinite(v.duration)) return false;
      for (var i = 0; i < v.buffered.length; i++) {
        if (v.buffered.start(i) <= 0.15 && v.buffered.end(i) >= v.duration - 0.3) return true;
      }
      return false;
    };
    // Reveal only when fully loaded AND the user still wants it active. Once
    // revealed it stays revealed (no hiding on transient buffering).
    var reveal = function(v){
      if (v._ready && v._active) { var p = v.play(); if (p && p.catch) p.catch(function(){}); v.classList.add('is-playing'); }
    };
    var setActive = function(v, on){
      v._active = on;
      if (on) { reveal(v); }            // shows only if already fully loaded
      else { v.pause(); try { v.currentTime = 0; } catch(e){} v.classList.remove('is-playing'); }
    };

    demos.forEach(function(v){
      var markIfLoaded = function(){ if (!v._ready && fullyLoaded(v)) { v._ready = true; reveal(v); } };
      v._ready = false;
      v.addEventListener('progress', markIfLoaded);
      v.addEventListener('canplaythrough', markIfLoaded);
      v.addEventListener('loadeddata', markIfLoaded);
      markIfLoaded(); // already buffered (e.g. cached)
    });

    if (reduce) {
      demos.forEach(function(v){ v.pause(); });
    } else if (canHover) {
      demos.forEach(function(v){
        var card = v.closest('.card') || v;
        card.addEventListener('pointerenter', function(){ setActive(v, true); });
        card.addEventListener('pointerleave', function(){ setActive(v, false); });
      });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ setActive(e.target, e.isIntersecting); });
      }, { threshold: 0.4 });
      demos.forEach(function(v){ io.observe(v); });
    }
  }
})();
