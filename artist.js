
const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.getElementsByTagName('img');
let currentImage = 0;

function showNextImage() {
  images[currentImage].style.opacity = '0';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = '1';
}

setInterval(showNextImage, 2000);
