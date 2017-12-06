const controls = document.querySelector('.controls');

document.addEventListener('change', function(e) {
  const units = e.target.dataset.units || '';
  document.documentElement.style.setProperty(`--${e.target.dataset.property}`, e.target.value + units);
});
