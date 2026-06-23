/* ==========================================================================
   HR Link — Redesign Interactions
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Sticky header scroll state ---------- */
  const header = document.getElementById("header");
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const toggleMenu = (open) => {
    const isOpen = open ?? !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  };
  burger.addEventListener("click", () => toggleMenu());
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu || e.target.closest("a") || e.target.closest("[data-menuclose]")) toggleMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu(false);
  });

  /* ---------- Product module tabs ---------- */
  const mtabs = document.querySelectorAll(".mtab[data-tab]");
  mtabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      mtabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });
      document.querySelectorAll(".mpanel").forEach((p) => {
        p.classList.toggle("is-active", p.id === id);
      });
    });
  });

  /* ---------- App audience tabs (employees / managers) ---------- */
  const appTabs = document.querySelectorAll(".mtab[data-apptab]");
  const phoneScreens = document.querySelectorAll(".phone__screen[data-screen]");
  appTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      appTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      const key = tab.dataset.apptab;
      phoneScreens.forEach((s) => s.classList.toggle("is-active", s.dataset.screen === key));
    });
  });

  /* ---------- Book-a-demo modal ---------- */
  const bookModal = document.getElementById("bookModal");
  if (bookModal) {
    const grid = document.getElementById("bookGrid");
    const success = document.getElementById("bookSuccess");
    const form = document.getElementById("bookForm");
    const dateInput = document.getElementById("bf-date");
    if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);

    const openModal = () => {
      if (grid) grid.hidden = false;
      if (success) success.hidden = true;
      bookModal.classList.add("is-open");
      bookModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      toggleMenu(false);
      const first = document.getElementById("bf-service");
      if (first) setTimeout(() => first.focus(), 80);
    };
    const closeModal = () => {
      bookModal.classList.remove("is-open");
      bookModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    };

    document.querySelectorAll("[data-book]").forEach((b) =>
      b.addEventListener("click", (e) => { e.preventDefault(); openModal(); })
    );
    bookModal.querySelectorAll("[data-close]").forEach((c) =>
      c.addEventListener("click", closeModal)
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && bookModal.classList.contains("is-open")) closeModal();
    });

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (typeof form.reportValidity === "function" && !form.reportValidity()) return;
        if (grid) grid.hidden = true;
        if (success) success.hidden = false;
      });
    }
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".acc").forEach((acc) => {
    const btn = acc.querySelector(".acc__btn");
    const panel = acc.querySelector(".acc__panel");
    btn.addEventListener("click", () => {
      const isOpen = acc.classList.contains("is-open");
      // close siblings for a clean single-open accordion
      document.querySelectorAll(".acc.is-open").forEach((other) => {
        if (other !== acc) {
          other.classList.remove("is-open");
          other.querySelector(".acc__btn").setAttribute("aria-expanded", "false");
          other.querySelector(".acc__panel").style.maxHeight = null;
        }
      });
      acc.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Animated KPI counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toString();
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count));
  }

  /* ---------- Smooth-close mega menu on anchor click ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      if (document.activeElement) document.activeElement.blur();
    });
  });
})();
