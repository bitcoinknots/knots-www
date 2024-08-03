const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const knots_line = document.getElementById("knots-line");

const navLinks = document.querySelectorAll(".nav-link");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  knots_line.classList.toggle("pt-16");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
    knots_line.classList.toggle("pt-16");
  });
});
