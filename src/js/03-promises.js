
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

const formEl = document.querySelector('.form');
  
formEl.addEventListener('submit', onCreatePromise);
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(position), delay);
//   });
// }
// makePromise()
//   .than(result => console.log(result))
//   .catch(error => console.log(error));

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } 
        reject({ position, delay })
      
    }, delay)
  })
    .then(({ position, delay }) => {
      return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

}
function onCreatePromise(e) {
  e.preventDefault();

   delay = Number(e.currentTarget.delay.value);
   step = Number(e.currentTarget.step.value);
   amount = Number(e.currentTarget.amount.value);

  if (delay >= 0 && step >=0 && amount > 0) {
    for (let position = 1; position <= amount; position += 1 ){
    createPromise(position, delay);
    delay += step;
  }
  } else {
    return Notify.warning('input value >0');
  }
  
 }
