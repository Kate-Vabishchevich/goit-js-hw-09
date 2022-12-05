import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]')
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates <= Date.now()) {
          Notiflix.Notify.warning("Please choose a date in the future");
      }
        console.log(selectedDates[0]);
        refs.startBtn.removeAttribute('disabled');
        selectedTime = selectedDates[0].getTime();
        // console.log(selectedTime)
  },
};

flatpickr('#datetime-picker', options);

function onTimerStart() {
    intervalId = setInterval(() => {
        currentTime = Date.now();
        console.log(currentTime);
        refs.startBtn.setAttribute('disabled', true);
        diff = selectedTime - currentTime;
        changeCountdown(diff);
            if (diff < 1000) {
                stopCountdown();
    }
    }, 1000)
};

function stopCountdown() {
    clearInterval(intervalId)
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