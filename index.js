let timerId; // переменная, которая будет хранить ID таймера
let isRanning = false;

function startClock() {
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', function () {
    if (!isRanning) {
      timerId = setInterval(updateClock, 1000);
      isRanning = true;
    }
  });
}

function stopClock() {
  const stopButton = document.getElementById('stop');
  stopButton.addEventListener('click', function () {
    if(isRanning){
      clearInterval(timerId); 
      isRanning = false;
    }
  });
}

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  clock.textContent = hours + ':' + minutes + ':' + seconds;
}


startClock();
stopClock();