const pickedDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");

startBtn.disabled = true;

const daysSpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");

let selectedDate = null;
let intervalId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function checkDate(selectedDates) {
  const now = new Date();

  if (selectedDates[0] > now) {
    selectedDate = selectedDates[0];
    startBtn.disabled = false;
  } else {
    startBtn.disabled = true;
    iziToast.error({
      title: "Error",
      message: "Please choose a date in the future",
      closeOnEscape: true,
      position: "topCenter",
    });
  }
}

function clockUpdate() {
  const now = new Date();
  const timeRemaining = selectedDate - now;
  

  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    startBtn.disabled = true;
    pickedDate.disabled = false;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(timeRemaining);

  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}

function onStartButtonClick() {
  startBtn.disabled = true;
  pickedDate.disabled = true;

  clockUpdate();

  intervalId = setInterval(clockUpdate, 1000);
}

startBtn.addEventListener("click", onStartButtonClick);

flatpickr(pickedDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: checkDate,
});