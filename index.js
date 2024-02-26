let timerId; // переменная, которая будет хранить ID таймера
let isRanning = false;

function startClock() {
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', function () {
    if (!isRanning) {
      timerId = setInterval(updateClock, 1000);
    }
  });
}

function stopClock() {
  const stopButton = document.getElementById('stop');
  stopButton.addEventListener('click', function () {
    isRanning = false;
    clearInterval(timerId); // останавливаем таймер
  });
}



function updateClock() {
  const clock = document.getElementById('clock');
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  const now = new Date();
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  clock.textContent = hours + ':' + minutes + ':' + seconds;
}

updateClock();
startClock();
stopClock()
