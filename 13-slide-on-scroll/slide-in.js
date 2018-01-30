const slideIns = document.querySelectorAll('.slide-in');
window.addEventListener('scroll', checkSlide);

function checkSlide() {
  slideIns.forEach(slideImage => {
    const slideInAt = window.scrollY + window.innerHeight - slideImage.height / 2;
    const isHalfShown = slideInAt > slideImage.offsetTop;

    if (isHalfShown) {
      slideImage.classList.add('active');
    }
  });
}
