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

let currenImage = 0;

function showImage() {
    const slide = document.querySelector('.slides1');
    const image = document.querySelectorAll('.slides1 img');
    currenImage++;
    if (currenImage >= image.length) {
        currenImage = 0;
    }
    slide.style.transform = `translateX(-${currenImage * 100}%)`;
}
setInterval(showImage, 3000);
