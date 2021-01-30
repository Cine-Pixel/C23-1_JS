const slides = document.querySelectorAll(".slider-slide");
const circles = document.querySelectorAll(".circle");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let counter = 0;

next.addEventListener("click", () => {
  slides[counter].classList.remove("active");
  circles[counter].classList.remove("active");

  if (counter === 3) counter = 0;
  else counter++;

  slides[counter].classList.add("active");
  circles[counter].classList.add("active");
});

prev.addEventListener("click", () => {
  slides[counter].classList.remove("active");
  circles[counter].classList.remove("active");

  if (counter === 0) counter = 3;
  else counter--;

  slides[counter].classList.add("active");
  circles[counter].classList.add("active");
});
