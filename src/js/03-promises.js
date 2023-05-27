import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.body.style.backgroundColor = '#99cbe0';
refs.form.addEventListener('submit', onPromiseCreate);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();

  const valueDelay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);

  for (let i = 0; i < amount; i += 1) {

    let promiseDelay = valueDelay + step * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
  }
}
