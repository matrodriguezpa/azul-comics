// script.js
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slideshow-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

showSlides();
setInterval(showSlides, 5000); // Change image every 5 seconds
