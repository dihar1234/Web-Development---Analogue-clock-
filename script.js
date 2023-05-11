function rotateClockHands() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
  
    const hourRotation = 360 / 12 * (hour % 12) + 30 / 60 * minute;
    const minuteRotation = 360 / 60 * minute + 6 / 60 * second;
    const secondRotation = 360 / 60 * second;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);
  