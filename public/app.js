(() => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');
    const header = document.querySelector('.site-header');
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      toggle.innerHTML = '<svg class="icon"><use href="#' + (open ? 'i-close' : 'i-menu') + '"/></svg>';
    });
    nav.addEventListener('click', e => { if (e.target.tagName === 'A') { header.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); toggle.innerHTML = '<svg class="icon"><use href="#i-menu"/></svg>'; } });
  })();
