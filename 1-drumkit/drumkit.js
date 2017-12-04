function playSound(keyCode) {
  var audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function pickUpItem(keyCode) {
  var item = document.querySelector(`.drumkit__item[data-key="${keyCode}"]`);
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

var drumkit = document.querySelector('.drumkit');

drumkit.addEventListener('click', function(e) {
  playSound(e.target.dataset.key);
  pickUpItem(e.target.dataset.key);
});

drumkit.addEventListener('transitionend', pickDownItem);
