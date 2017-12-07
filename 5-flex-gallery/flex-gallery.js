const gallery = document.querySelector('.gallery');
const galleryItems = gallery.querySelectorAll('.gallery__item');

gallery.addEventListener('click', function(e) {
  var target = e.target;
  while (target != gallery) {
    if (target.classList.contains('gallery__item')) {
      target.classList.toggle('gallery__item_opened');
      return;
    }
    target = target.parentNode;
  }
});
