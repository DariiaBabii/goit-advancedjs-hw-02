// import iziToast from "izitoast";

// import "izitoast/dist/css/iziToast.min.css";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const delay = Number(formData.get("delay"));
  const step = Number(formData.get("step"));
  const amount = Number(formData.get("amount"));

  let position = 1;
  let promiseDelay = delay;

  while (position <= amount) {
    createPromise(position, promiseDelay)
      .then((data) => {
        iziToast.success({
          title: "Promise fulfilled",
          message: `✅ Fulfilled promise ${data.position} in ${data.delay}ms`,
          position: "topCenter",
        });
      })
      .catch((data) => {
        iziToast.error({
          title: "Promise rejected",
          message: `❌ Rejected promise ${data.position} in ${data.delay}ms`,
          position: "topCenter",
        });
      });
    position += 1;
    promiseDelay += step;
  }
  form.reset();
});