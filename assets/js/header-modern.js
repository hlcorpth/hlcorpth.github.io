(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.header-toggle');
  const body = document.body;

  if (toggle) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');

      const isOpen = header.classList.contains('open');
      const icon = toggle.querySelector('i');

      if (isOpen) {
        body.style.overflow = 'hidden'; // Lock scroll
        toggle.innerHTML = '<i class="fa fa-times"></i> Close';
        // Add class to show CTA with delay
        setTimeout(() => {
          const actions = document.querySelector('.site-header .header-actions');
          if (actions) actions.classList.add('open-visible');
        }, 100);
      } else {
        body.style.overflow = ''; // Unlock scroll
        toggle.innerHTML = '<i class="fa fa-bars"></i> Menu';
        const actions = document.querySelector('.site-header .header-actions');
        if (actions) actions.classList.remove('open-visible');
      }
    });

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll('.site-header .main-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('open');
        body.style.overflow = '';
        toggle.innerHTML = '<i class="fa fa-bars"></i> Menu';
      });
    });
  }

  let lastY = 0;
  window.addEventListener('scroll', function () {
    const y = window.scrollY || window.pageYOffset;
    if (y > 10) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
    lastY = y;
  });
})();



