const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function toDegree(d, notHour = true) {
  let ct = 60;
  if (!notHour) ct = 12;
  const degree = ((d / ct) * 360) + 90;
  return degree;
}

function currentDate() {
  const now = new Date();
  const hours = toDegree(now.getHours(), false);
  const minutes = toDegree(now.getMinutes());
  const seconds = toDegree(now.getSeconds());

  hourHand.style.transform = `rotate(${hours}deg)`;
  minuteHand.style.transform = `rotate(${minutes}deg)`;
  secondHand.style.transform = `rotate(${seconds}deg)`;

  if (seconds == 444) {
    setTimeout(function() {
      secondHand.classList.add('ended')
    }, 2000);

    secondHand.classList.remove('ended')
  }
  
}

setInterval(currentDate, 1000);
