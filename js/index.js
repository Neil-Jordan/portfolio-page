const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const body = document.body;

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("fixed-position");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.body.classList.remove("fixed-position");
  });
});
