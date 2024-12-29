import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;
let countdownInterval = null;

const input = document.querySelector('#datetime-picker');

const startButton = document.querySelector('#Start');

const daysDisplay = document.querySelector('[data-days]');
const hoursDisplay = document.querySelector('[data-hours]');
const minutesDisplay = document.querySelector('[data-minutes]');
const secondsDisplay = document.querySelector('[data-seconds]');

function validateDate(selectedDates) {
  if (selectedDates.length > 0) {
    const selectedDate = selectedDates[0];

    if (selectedDate > new Date()) {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    }
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: validateDate,
};

flatpickr(input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay() {
  const timeRemaining = userSelectedDate - new Date();

  if (timeRemaining <= 0) {
    daysDisplay.textContent = '00';
    hoursDisplay.textContent = '00';
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';

    startButton.disabled = false;
    input.disabled = false;

    iziToast.success({
      title: 'Success',
      message: "Time's up!",
    });
  } else {
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    daysDisplay.textContent = addLeadingZero(days);
    hoursDisplay.textContent = addLeadingZero(hours);
    minutesDisplay.textContent = addLeadingZero(minutes);
    secondsDisplay.textContent = addLeadingZero(seconds);
  }
}
startButton.addEventListener('click', function () {
  if (userSelectedDate) {
    startButton.disabled = true;
    input.disabled = true;

    countdownInterval = setInterval(updateTimerDisplay, 1000);
  }
});
