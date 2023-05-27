import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

document.body.style.backgroundColor = '#afeb54';
const TIMER_DELAY = 1000;
let intervalId = null;
let selectedDate = null;
let currentDate = null;

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  btnStartTimer: document.querySelector('button[data-start-timer]'),
  daysRemaining: document.querySelector('[data-days]'),
  hoursRemaining: document.querySelector('[data-hours]'),
  minutesRemaining: document.querySelector('[data-minutes]'),
  secondsRemaining: document.querySelector('[data-seconds]'),
};

refs.btnStartTimer.disabled = true;
refs.btnStartTimer.addEventListener('click', timerStart);

