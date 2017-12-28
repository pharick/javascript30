let inbox = document.getElementById('inbox');
let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

inbox.addEventListener('click', handleChange);

function handleChange(event) {
  if (event.shiftKey && event.target.checked) {
    let inBetween = false;
    checkboxes.forEach(checkbox => {
      if (checkbox == lastChecked || checkbox == event.target) inBetween = !inBetween;
      if (inBetween) checkbox.checked = true;
    });
  }
  lastChecked = event.target;
}
