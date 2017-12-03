window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const item = document.querySelector(`.drumkit__item[data-key="${e.keyCode}"]`);
  item.classList.add('drumkit__item_pressed');
});

const items = document.querySelectorAll('.drumkit__item');
items.forEach(item => item.addEventListener('transitionend', function(e) {
  if (e.propertyName != 'transform') return;
  item.classList.remove('drumkit__item_pressed');
}));
