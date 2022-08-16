
// Напиши скрипт, который при сабмите формы вызывает функцию
// createPromise(position, delay) столько раз,
//   сколько ввели в поле amount.При каждом вызове передай 
//    номер создаваемого промиса(position) и задержку 
//    учитывая введенную пользователем первую задержку(delay)
//     и шаг(step).


// Дополни код функции createPromise так, чтобы она 
// возвращала один промис, который выполянется или 
// отклоняется через delay времени.Значением промиса 
// должен быть объект, в котором будут свойства position и 
// delay со значениями одноименных параметров.
// Используй начальный код функции для выбора того,
//   что нужно сделать с промисом - выполнить или отклонить.

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
};

refs.formEl.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

//   const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));