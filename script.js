// Minimal interactivity for smooth scroll and dynamic year.
document.documentElement.style.scrollBehavior = "smooth";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
