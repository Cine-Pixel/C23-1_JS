// Navbar options
const menuButton = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  menuButton.classList.toggle("menu-open");
});

// Slider options
const slides = document.querySelectorAll(".slider-slide");
const circles = document.querySelectorAll(".circle");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let counter = 0;

const nextSlide = () => {
  slides[counter].classList.remove("active");
  circles[counter].classList.remove("active");

  if (counter === 3) counter = 0;
  else counter++;

  slides[counter].classList.add("active");
  circles[counter].classList.add("active");
};

next.addEventListener("click", nextSlide);

prev.addEventListener("click", () => {
  slides[counter].classList.remove("active");
  circles[counter].classList.remove("active");

  if (counter === 0) counter = 3;
  else counter--;

  slides[counter].classList.add("active");
  circles[counter].classList.add("active");
});

setInterval(nextSlide, 5000);
