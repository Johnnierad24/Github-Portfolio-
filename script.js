// Minimal interactivity for smooth scroll and dynamic year.
document.documentElement.style.scrollBehavior = "smooth";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav") || document.querySelector(".site-header nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}
