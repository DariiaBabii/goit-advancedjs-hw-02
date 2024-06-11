const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;

stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener("click", () => {
  if (timerId === null) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
      const randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
});