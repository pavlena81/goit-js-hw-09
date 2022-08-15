// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js. 
// Напиши скрипт таймера, который ведёт обратный отсчет до определенной
// даты.Такой таймер может использоваться в блогах и интернет - магазинах,
//     страницах регистрации событий, во время технического обслуживания и т.д.
//     Посмотри демо видео работы таймера.

import flatpickr from "flatpickr";


// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import"flatpickr/dist/themes/material_green.css";

flatpickr(inputEl, options);
const inputEl = document.getElementById('datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const ref = {
    startBtn: document.querySelector('[data - start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}