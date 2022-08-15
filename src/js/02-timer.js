// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js. 
// Напиши скрипт таймера, который ведёт обратный отсчет до определенной
// даты.Такой таймер может использоваться в блогах и интернет - магазинах,
//     страницах регистрации событий, во время технического обслуживания и т.д.
//     Посмотри демо видео работы таймера.

import flatpickr from "flatpickr";


// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

flatpickr(document.getElementById('datetime-picker'), options);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};