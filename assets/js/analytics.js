/**
 * HLCorp GA4 Click Tracking via GTM dataLayer
 * Pushes custom events that GTM forwards to GA4.
 * All page-level tracking is done via event delegation here.
 * Cart/coupon events are pushed inline in packages.html.
 */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  function track(event, params) {
    window.dataLayer.push(Object.assign({ event: event }, params || {}));
  }

  function textOf(el) {
    return (el ? el.textContent : '').replace(/\s+/g, ' ').trim();
  }

  function pageLabel() {
    var p = window.location.pathname;
    if (p.indexOf('packages') !== -1) return 'packages';
    if (p.indexOf('opportunity') !== -1) return 'opportunity';
    return 'home';
  }

  document.addEventListener('click', function (e) {
    var el = e.target;

    // ── Walk up to find the meaningful element ─────────────────────
    function closest(selector) {
      var node = el;
      while (node && node !== document) {
        if (node.matches && node.matches(selector)) return node;
        node = node.parentNode;
      }
      return null;
    }

    // ── Filter pills (packages page) ───────────────────────────────
    var pill = closest('.filter-pill');
    if (pill) {
      track('filter_category', {
        category: pill.dataset.cat || 'all',
        page: pageLabel()
      });
      return;
    }

    // ── Open cart drawer ───────────────────────────────────────────
    if (closest('#cart-fab')) {
      track('open_cart', { page: pageLabel() });
      return;
    }

    // ── Request Free Quote button ──────────────────────────────────
    if (closest('#btn-checkout')) {
      track('begin_checkout', { page: pageLabel() });
      return;
    }

    // ── LINE button (modal) ────────────────────────────────────────
    var lineModal = closest('.btn-checkout-line');
    if (lineModal) {
      track('contact_line', { location: 'checkout_modal', page: pageLabel() });
      return;
    }

    // ── Email button (modal) ───────────────────────────────────────
    if (closest('#btn-email')) {
      track('contact_email', { location: 'checkout_modal', page: pageLabel() });
      return;
    }

    // ── Copy for Chat button ───────────────────────────────────────
    if (closest('#btn-copy-quote')) {
      track('copy_quote', { page: pageLabel() });
      return;
    }

    // ── Coupon apply button ────────────────────────────────────────
    if (closest('#coupon-apply-btn')) {
      var input = document.getElementById('coupon-input');
      track('coupon_apply_attempt', {
        coupon_code: input ? input.value.toUpperCase() : '',
        page: pageLabel()
      });
      return;
    }

    // ── Copy hero coupon ───────────────────────────────────────────
    var heroCopy = closest('[id^="hcc-copy-"]');
    if (heroCopy) {
      var code = heroCopy.id.replace('hcc-copy-', '');
      track('copy_coupon', { coupon_code: code, location: 'hero', page: pageLabel() });
      return;
    }

    // ── Get This Solution (showcase cards, index page) ─────────────
    var scCta = closest('.sc-cta');
    if (scCta) {
      var card = closest('.showcase-card') || closest('[class*="sc-"]') || scCta.parentNode;
      var title = card ? textOf(card.querySelector('.sc-name, h3, h4')) : '';
      track('solution_click', {
        solution_name: title || 'unknown',
        page: pageLabel()
      });
      return;
    }

    // ── Service section CTA (index page) ──────────────────────────
    var serviceBtn = closest('.service-btn');
    if (serviceBtn) {
      var serviceCard = serviceBtn.closest ? serviceBtn.closest('[class*="service"]') : serviceBtn.parentNode;
      var serviceTitle = serviceCard ? textOf(serviceCard.querySelector('h3, h4, .service-title')) : '';
      track('service_cta_click', {
        service_name: serviceTitle || 'unknown',
        page: pageLabel()
      });
      return;
    }

    // ── Nav / Hero primary CTA ─────────────────────────────────────
    var navCta = closest('.btn-cta');
    if (navCta) {
      var loc = closest('nav, header, .navbar') ? 'nav' : 'hero';
      track('cta_click', { location: loc, label: textOf(navCta), page: pageLabel() });
      return;
    }

    // ── Hero "Browse Plans" link ───────────────────────────────────
    if (closest('.btn-shop-browse')) {
      track('cta_click', { location: 'hero', label: 'browse_plans', page: pageLabel() });
      return;
    }

    // ── Affiliate / Referral join ──────────────────────────────────
    if (closest('.btn-affiliate-join')) {
      track('affiliate_click', { page: pageLabel() });
      return;
    }

    // ── LINE link (anywhere on page, outside modal) ────────────────
    var lineLink = closest('a[href*="lin.ee"]');
    if (lineLink) {
      var lineCtx = closest('.checkout-modal') ? 'checkout_modal'
        : closest('footer') ? 'footer'
        : closest('nav, .navbar') ? 'nav'
        : 'page';
      track('contact_line', { location: lineCtx, page: pageLabel() });
      return;
    }

    // ── Email link (anywhere on page) ─────────────────────────────
    var emailLink = closest('a[href^="mailto:"]');
    if (emailLink) {
      var emailCtx = closest('footer') ? 'footer'
        : closest('nav, .navbar') ? 'nav'
        : closest('.contact-quick-card, .cc-btn') ? 'contact_section'
        : 'page';
      track('contact_email', { location: emailCtx, page: pageLabel() });
      return;
    }

    // ── "View Packages" links ──────────────────────────────────────
    var pkgLink = closest('a[href*="packages"]');
    if (pkgLink) {
      track('packages_page_click', {
        label: textOf(pkgLink) || 'link',
        location: closest('footer') ? 'footer' : closest('nav') ? 'nav' : 'page',
        page: pageLabel()
      });
      return;
    }

    // ── df-link buttons (hero secondary) ──────────────────────────
    var dfLink = closest('.df-link');
    if (dfLink) {
      track('cta_click', {
        location: 'hero',
        label: textOf(dfLink),
        page: pageLabel()
      });
      return;
    }

  }, true); // capture phase so we catch before preventDefault

})();
