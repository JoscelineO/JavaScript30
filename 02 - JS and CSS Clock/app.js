window.onload = function() {
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    console.log(minutes);
  }

  setInterval(setDate, 1000);
  setDate();
};
