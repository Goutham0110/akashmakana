/* AM Productions - prototype interactions. Progressive enhancement only:
   every page is fully usable and readable with this file removed. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------- Sticky header ---------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.setAttribute('data-scrolled', String(window.scrollY > 8));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------- Mobile nav ------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    var setNav = function (open) {
      nav.setAttribute('data-open', String(open));
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    setNav(false);
    toggle.addEventListener('click', function () {
      setNav(nav.getAttribute('data-open') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
    window.matchMedia('(min-width: 52rem)').addEventListener('change', function (e) {
      if (e.matches) setNav(false);
    });
  }

  /* ------------------------- Settle-in on view -------------------------- */
  var settlers = document.querySelectorAll('[data-settle], [data-settle-stagger]');
  var revealAll = function () {
    document.documentElement.classList.remove('settle-armed');
    settlers.forEach(function (el) { el.classList.add('is-in'); });
  };
  if (settlers.length && !reduceMotion && 'IntersectionObserver' in window) {
    // Arm the hidden state only now that we can guarantee a reveal path.
    document.documentElement.classList.add('settle-armed');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    settlers.forEach(function (el) { io.observe(el); });
    // Hard fallback: whatever happens, nothing stays hidden past 1.6s.
    setTimeout(revealAll, 1600);
    // Also reveal on tab-restore / print.
    window.addEventListener('beforeprint', revealAll);
  } else {
    revealAll();
  }

  /* ---------------------------- Work filter ---------------------------- */
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-cat]'));
    var counter = document.querySelector('[data-filter-count]');
    var emptyMsg = document.querySelector('.gallery-empty');
    var apply = function (cat) {
      var shown = 0;
      items.forEach(function (item) {
        var match = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.hidden = !match;
        if (match) shown++;
      });
      if (counter) {
        counter.textContent = shown + (shown === 1 ? ' project' : ' projects');
      }
      if (emptyMsg) emptyMsg.hidden = shown !== 0;
    };
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-cat-filter]');
      if (!btn) return;
      filterBar.querySelectorAll('[data-cat-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      apply(btn.getAttribute('data-cat-filter'));
    });
  }

  /* ----------------------------- Lightbox ------------------------------ */
  var lightbox = document.querySelector('[data-lightbox]');
  if (lightbox) {
    var lbImg = lightbox.querySelector('[data-lb-img]');
    var lbCap = lightbox.querySelector('[data-lb-caption]');
    var lbMeta = lightbox.querySelector('[data-lb-meta]');
    var lbCurrent = lightbox.querySelector('[data-lb-current]');
    var lbTotal = lightbox.querySelector('[data-lb-total]');
    var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lb-open]'));
    var lastFocus = null;
    var index = 0;

    var visibleTriggers = function () {
      return triggers.filter(function (t) {
        var fig = t.closest('[data-cat]');
        return !fig || !fig.hidden;
      });
    };

    var render = function () {
      var list = visibleTriggers();
      var t = list[index];
      if (!t) return;
      var full = t.getAttribute('data-lb-full') || t.querySelector('img').src;
      lbImg.src = full;
      lbImg.alt = t.getAttribute('data-lb-alt') || t.querySelector('img').alt || '';
      lbCap.textContent = t.getAttribute('data-lb-title') || '';
      lbMeta.textContent = t.getAttribute('data-lb-meta') || '';
      if (lbCurrent) lbCurrent.textContent = String(index + 1);
      if (lbTotal) lbTotal.textContent = String(list.length);
    };

    var open = function (trigger) {
      var list = visibleTriggers();
      index = Math.max(0, list.indexOf(trigger));
      lastFocus = trigger;
      render();
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
      else lightbox.setAttribute('open', '');
      document.body.style.overflow = 'hidden';
    };
    var close = function () {
      if (typeof lightbox.close === 'function') lightbox.close();
      else lightbox.removeAttribute('open');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };
    var step = function (dir) {
      var list = visibleTriggers();
      index = (index + dir + list.length) % list.length;
      render();
    };

    triggers.forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.preventDefault();
        open(t);
      });
    });
    lightbox.querySelector('[data-lb-close]').addEventListener('click', close);
    lightbox.querySelector('[data-lb-prev]').addEventListener('click', function () { step(-1); });
    lightbox.querySelector('[data-lb-next]').addEventListener('click', function () { step(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) close();
    });
    lightbox.addEventListener('cancel', function (e) {
      e.preventDefault();
      close();
    });
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    });
  }

  /* ------------------------- Contact form demo ------------------------- */
  var form = document.querySelector('[data-demo-form]');
  if (form) {
    var status = form.querySelector('[data-form-status]');
    var successPanel = document.querySelector('[data-form-success]');

    // The wrapper holding the label + control + .field__error.
    // Text/select/textarea sit in .field; the radio group sits in a <fieldset>.
    var wrapOf = function (field) {
      return field.closest('.field, fieldset');
    };
    var setError = function (field, message) {
      var wrap = wrapOf(field);
      if (!wrap) return;
      wrap.setAttribute('data-invalid', message ? 'true' : 'false');
      if (!message) wrap.removeAttribute('data-invalid');
      var err = wrap.querySelector('.field__error');
      if (err) err.textContent = message || '';
      if (message) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
    };

    form.querySelectorAll('input, textarea, select').forEach(function (f) {
      var ev = f.type === 'radio' || f.tagName === 'SELECT' ? 'change' : 'input';
      f.addEventListener(ev, function () {
        if (f.type === 'radio') {
          form.querySelectorAll('input[name="' + f.name + '"]').forEach(function (r) {
            setError(r, '');
          });
        } else {
          setError(f, '');
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      var flag = function (field, message) {
        setError(field, message);
        if (!firstBad) firstBad = field;
      };

      // Required text / email / textarea
      form.querySelectorAll('input[required]:not([type="radio"]), textarea[required], select[required]')
        .forEach(function (f) {
          setError(f, '');
          var val = (f.value || '').trim();
          var label = f.getAttribute('data-label') || 'details';
          if (!val) {
            flag(f, 'Add your ' + label + ' so we can reply.');
          } else if (f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val)) {
            flag(f, 'That email address looks incomplete.');
          }
        });

      // Required radio group (any radio in the group carrying [required])
      var reqRadio = form.querySelector('input[type="radio"][required]');
      if (reqRadio) {
        var group = form.querySelectorAll('input[name="' + reqRadio.name + '"]');
        var picked = Array.prototype.some.call(group, function (r) { return r.checked; });
        group.forEach(function (r) { setError(r, ''); });
        if (!picked) flag(reqRadio, 'Pick the kind of night so we route it to the right lead.');
      }

      if (firstBad) {
        if (status) {
          status.textContent = 'Check the highlighted fields and send again.';
          status.setAttribute('data-tone', 'error');
        }
        firstBad.focus();
        return;
      }

      // Prototype only: no network request. Engineers wire this to a real handler.
      if (status) {
        status.textContent = '';
        status.removeAttribute('data-tone');
      }
      if (successPanel) {
        form.hidden = true;
        successPanel.hidden = false;
        successPanel.focus();
        successPanel.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  }

  /* ---------------------------- Footer year ---------------------------- */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
