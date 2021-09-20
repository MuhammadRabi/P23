let menuToggle = document.querySelector(".menu-toggle");
let navMenu = document.querySelector(".navigation");
let darkSwitch = document.querySelector(".day-light");
let body = document.querySelector("body");

console.log(darkSwitch);

darkSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkSwitch.classList.toggle("active");
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
