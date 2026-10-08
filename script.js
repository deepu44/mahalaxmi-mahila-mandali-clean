/* =========================================================
   MAHALAXMI MAHILA MANDALI — COMMON JAVASCRIPT
   ---------------------------------------------------------
   COMMON FILE:
   Keep this exact script.js beside every HTML page.

   It controls:
   1. Copyright year
   2. Mobile navigation
   3. Dropdown menus
   4. Escape/outside-click closing
   5. Home-page hero carousel
   Pages without a carousel simply ignore the carousel code.
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  // COMMON: automatically show the current year in every footer.
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // COMMON: mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const dropdownItems = Array.from(document.querySelectorAll(".has-dropdown"));
  const dropdownButtons = Array.from(document.querySelectorAll(".dropdown-toggle"));

  function closeDropdowns() {
    dropdownItems.forEach(function (item) {
      item.classList.remove("open");
      const button = item.querySelector(".dropdown-toggle");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  }

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", function () {
      const open = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      if (!open) closeDropdowns();
    });
  }

  // COMMON: dropdown buttons work with mouse, keyboard and touch.
  dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const parent = button.closest(".has-dropdown");
      const willOpen = !parent.classList.contains("open");
      closeDropdowns();
      if (willOpen) {
        parent.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  // COMMON: clicking outside closes open dropdowns.
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".has-dropdown")) closeDropdowns();
  });

  // COMMON: Escape closes menus.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDropdowns();
      if (primaryNav) primaryNav.classList.remove("open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // COMMON: after choosing any navigation link on mobile, close the menu.
  if (primaryNav) {
    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        primaryNav.classList.remove("open");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
        closeDropdowns();
      });
    });
  }

  // COMMON: if the window becomes desktop-sized, reset mobile state.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      if (primaryNav) primaryNav.classList.remove("open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      closeDropdowns();
    }
  });

  // HOME PAGE ONLY: hero carousel.
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));
  const previous = document.querySelector(".carousel-arrow.previous");
  const next = document.querySelector(".carousel-arrow.next");
  const hero = document.querySelector(".hero");
  let active = 0;
  let timer = null;

  function showSlide(index) {
    if (!slides.length) return;
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === active));
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === active);
      dot.setAttribute("aria-pressed", i === active ? "true" : "false");
    });
  }

  function startCarousel() {
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timer);
    timer = setInterval(() => showSlide(active + 1), 6500);
  }

  function stopCarousel() {
    clearInterval(timer);
    timer = null;
  }

  if (slides.length) {
    showSlide(0);
    if (previous) previous.addEventListener("click", () => { showSlide(active - 1); startCarousel(); });
    if (next) next.addEventListener("click", () => { showSlide(active + 1); startCarousel(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); startCarousel(); }));
    if (hero) {
      hero.addEventListener("mouseenter", stopCarousel);
      hero.addEventListener("mouseleave", startCarousel);
      hero.addEventListener("focusin", stopCarousel);
      hero.addEventListener("focusout", startCarousel);
    }
    startCarousel();
  }
});
