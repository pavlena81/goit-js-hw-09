// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js. 
// Напиши скрипт таймера, который ведёт обратный отсчет до определенной
// даты.Такой таймер может использоваться в блогах и интернет - магазинах,
//     страницах регистрации событий, во время технического обслуживания и т.д.
//     Посмотри демо видео работы таймера.

import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import "flatpickr/dist/themes/material_green.css";

let deltaTime = 0;
const inputEl = document.getElementById('datetime-picker');

const refs = {
    inputEl:document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.disable = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <=Date.now()) {            
            return Notify.failure('Please choose a date in the future');
           
      }
        console.log(selectedDates[0]);
        refs.startBtn.disable = false; 
        // selectedTimes = selectedDates[0];
  },
};





flatpickr(refs.inputEl, options);
const fp = flatpickr(refs.inputEl, options); 

class Timer {
    constructor({onTime}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTime = onTime;
    }


    startTimer() {
        if (this.isActive) {
            return;
        }

        // const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            let deltaTime = fp.selectedDates[0] - currentTime;
            const time = convertMs(deltaTime);

            console.log(time);

            this.onTime(time);
            if ((deltaTime <=1000)) {
                clearInterval(this.intervalId);
                return Notify.success('Time is Up');
        }
            // updateClockTime(time);
        }, 1000)
        
    }
}
const timer = new Timer({
    onTime: updateClockTime,
});
// timer.start(); 


    
function updateClockTime({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
    // inputEl.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}



refs.startBtn.addEventListener('click', () => {
     refs.startBtn.disabled = true;
    timer.startTimer();
});

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
};


