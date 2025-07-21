// Navbar-Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Navbar-Toggle
const navbarToggle = document.querySelector("#navbar-toggle");
const navMenu = document.querySelector("#nav-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("navbar-active");
  navMenu.classList.toggle("hidden");
});
