'use strict';

/* ===============================
   UTILS
================================ */
const toggleActive = (el) => el && el.classList.toggle("active");

/* ===============================
   SIDEBAR (MOBILE)
================================ */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    toggleActive(sidebar);
  });
}

/* ===============================
   PAGE NAVIGATION
================================ */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navLinks.length && pages.length) {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetPage = link.dataset.page;

      // Switch visible page
      pages.forEach(page => {
        page.classList.toggle(
          "active",
          page.dataset.page === targetPage
        );
      });

      // Switch active nav button
      navLinks.forEach(btn => btn.classList.remove("active"));
      link.classList.add("active");

      // Scroll reset
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  });
}

/* ===============================
   CONTACT FORM (OPTIONAL UX ONLY)
================================ */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}
