let currentIndex = 0;

function showNextImage() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 4000); // Change image every 4 seconds

let currentImage = 0;

function showImage() {
    const slide = document.querySelector('.slides1');
    const image = document.querySelectorAll('.slides1 img');
    currentImage++;
    if (currentImage >= image.length) {
        currentImage = 0;
    }
    slide.style.transform = `translateX(-${currentImage * 100}%)`;
}
setInterval(showImage, 4000);

let currentSlide = 0;

function showSlide() {
    const slide1 = document.querySelector('.slide2');
    const image1 = document.querySelectorAll('.slide2 img');
    currentSlide++;
    if (currentSlide >= image1.length) {
        currentSlide = 0;
    }
    slide1.style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(showSlide, 4000);

