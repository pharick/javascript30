function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function pickUpItem(keyCode) {
  const item = document.querySelector(`.drumkit__item[data-key="${keyCode}"]`);
  item.classList.add('drumkit__item_pressed');
}

function pickDownItem(e) {
  if (e.propertyName != 'transform') return;
  e.target.classList.remove('drumkit__item_pressed');
}

window.addEventListener('keydown', function(e) {
  playSound(e.keyCode);
  pickUpItem(e.keyCode);
});

const items = document.querySelectorAll('.drumkit__item');
items.forEach(item => item.addEventListener('transitionend', pickDownItem));
