document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.transition = 'opacity 0.8s ease-in-out';
        });
        slides[(index + totalSlides) % totalSlides].classList.add('active');
    }
    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }
    showSlide(currentIndex);
});
document.querySelectorAll('.rate-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const hotelName = this.closest('.hotel-card').querySelector('h3').textContent;
    // Your rating logic here
    console.log(`Rating ${hotelName}`);
  });
});