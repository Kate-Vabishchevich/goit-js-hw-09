import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  amount: document.querySelector('input[name="amount"]'),
  firstDelay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]')
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  for (let position = 1; position <= refs.amount.value; position += 1) {
    const delayInterval = Number(refs.firstDelay.value) + position * Number(refs.step.value);
    createPromise(position, delayInterval).then(onSuccess).catch(onError)
  }
}

function onSuccess(result) {
  Notiflix.Notify.success(result);
}

function onError(result) {
  Notiflix.Notify.failure(result);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay)
  });
}
