// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js. 
// Напиши скрипт таймера, который ведёт обратный отсчет до определенной
// даты.Такой таймер может использоваться в блогах и интернет - магазинах,
//     страницах регистрации событий, во время технического обслуживания и т.д.
//     Посмотри демо видео работы таймера.

import flatpickr from "flatpickr";


// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import "flatpickr/dist/themes/material_green.css";

const inputEl = document.getElementById('datetime-picker');



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0]<=Date.now()) {
            return alert('Please choose a date in the future'); 
      }
        console.log(selectedDates[0]);
        refs.startBtn.disable = false; 
  },
};

flatpickr(inputEl, options);


const refs = {
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

class Timer {
    constructor({onTime}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTime = onTime;
    }


    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = convertMs(deltaTime);

            console.log(time);

            this.onTime(time);
            // updateClockTime(time);
        }, 1000)
    }
}
const timer = new Timer({
    onTime: updateClockTime,
});
// timer.start(); 
    
function updateClockTime({ days, hours, minutes, seconds }) {
    inputEl.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

refs.startBtn.addEventListener('click', () => {
    timer.start();
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}