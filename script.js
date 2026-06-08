// Minimal interactivity: dynamic year and mobile navigation.
// Smooth scrolling now lives in CSS so it can respect prefers-reduced-motion.

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav") || document.querySelector(".site-header nav");

if (navToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on link click
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", closeMenu)
  );

  // Close on Escape and return focus to the toggle
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
      navToggle.focus();
    }
  });

  // Close when tapping outside the menu on mobile
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
}
