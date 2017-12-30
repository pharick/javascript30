const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const toggleButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreenButton = player.querySelector('.fullscreen');
const sliders = player.querySelectorAll('.player__slider');

function togglePlay() {
  (video.paused) ? video.play() : video.pause();
}

function updateToggleButton() {
  const icon = (video.paused) ? '►' : '❚❚';
  toggleButton.innerHTML = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
}

function rewind(e) {
  const time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
}

function toggleFullscreen() {
  if (player.fullscreenEnabled) {
    if (player.requestFullscreen) player.requestFullscreen();
    else if (player.mozRequestFullScreen) player.mozRequestFullScreen();
    else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
  } else {
    
  }
}

video.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
fullscreenButton.addEventListener('click', toggleFullscreen);

video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', rewind);

let isRewind = false;
progress.addEventListener('mousedown', () => isRewind = true);
progress.addEventListener('mouseup', () => isRewind = false);
progress.addEventListener('mousemove', (e) => {
  if (isRewind) rewind(e);
});

video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);

skipButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', handleRangeUpdate));
