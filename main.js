const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute('data-visible') ? console.log("true") : console.log("it doesn't");
  primaryNav.toggleAttribute("data-visible");
});
