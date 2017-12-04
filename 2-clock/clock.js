const secondsHand = document.querySelector('.clock__hand_seconds');
const minutesHand = document.querySelector('.clock__hand_minutes');
const hoursHand = document.querySelector('.clock__hand_hours');

function getTimeDegrees() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = seconds / 60 * 360;
  const minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6;
  const hoursDegrees = hours / 12 * 360 + minutes / 60 * 30;

  return {
    seconds: secondsDegrees,
    minutes: minutesDegrees,
    hours: hoursDegrees
  };
}

function setTime() {
  const degrees = getTimeDegrees();
  
  secondsHand.style.transform = `rotate(${degrees.seconds}deg)`;
  minutesHand.style.transform = `rotate(${degrees.minutes}deg)`;
  hoursHand.style.transform = `rotate(${degrees.hours}deg)`;
}

setInterval(setTime, 1000);
