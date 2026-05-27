(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.header-toggle');
  const body = document.body;

  function isMobile() {
    return window.innerWidth <= 992;
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
      const isOpen = header.classList.contains('open');

      if (isOpen) {
        body.style.overflow = 'hidden';
        toggle.innerHTML = '<i class="fa fa-times"></i> Close';
        setTimeout(() => {
          const actions = document.querySelector('.site-header .header-actions');
          if (actions) actions.classList.add('open-visible');
        }, 100);
      } else {
        body.style.overflow = '';
        toggle.innerHTML = '<i class="fa fa-bars"></i> Menu';
        const actions = document.querySelector('.site-header .header-actions');
        if (actions) actions.classList.remove('open-visible');
        // Collapse all dropdowns on close
        document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('expanded'));
      }
    });

    // Close menu when clicking non-dropdown links
    const menuLinks = document.querySelectorAll('.site-header .main-menu a:not(.dropdown-trigger)');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('open');
        body.style.overflow = '';
        toggle.innerHTML = '<i class="fa fa-bars"></i> Menu';
        document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('expanded'));
      });
    });
  }

  // Mobile: toggle accordion on dropdown trigger click
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      if (!isMobile()) return; // desktop uses CSS hover
      e.preventDefault();
      const parent = this.closest('.has-dropdown');
      const isExpanded = parent.classList.contains('expanded');
      // Close others
      document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('expanded'));
      if (!isExpanded) parent.classList.add('expanded');
    });
  });

  // Sticky header on scroll
  window.addEventListener('scroll', function () {
    const y = window.scrollY || window.pageYOffset;
    if (y > 10) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  });
})();



