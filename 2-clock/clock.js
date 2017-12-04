const secondsHand = document.querySelector('.clock__hand_seconds');
const minutesHand = document.querySelector('.clock__hand_minutes');
const hoursHand = document.querySelector('.clock__hand_hours');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds / 60 * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes / 60 * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = hours / 60 * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
