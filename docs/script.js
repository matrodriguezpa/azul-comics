var slide_index = 1;
slidesDisplay(slide_index);

function nextSlide(n) {
  slidesDisplay((slide_index += n));
}

function currentSlide(n) {
  slidesDisplay((slide_index = n));
}

function slidesDisplay(n) {
  var i;
  var slides = document.getElementsByClassName("showSlider");
  var totalSlides = slides.length;
  
  if (n > totalSlides) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = totalSlides;
  }

  for (i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < 4; i++) {
    var slideToShow = (slide_index + i - 1) % totalSlides;
    slides[slideToShow].style.display = "block";
  }
}
