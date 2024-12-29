import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stateRadios = form.querySelectorAll('[name="state"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(delayInput.value, 10);
  const selectedState = document.querySelector(
    'input[name="state"]:checked'
  )?.value;

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid delay time in milliseconds.',
    });
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else if (selectedState === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${resolvedDelay}ms`,
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${rejectedDelay}ms`,
      });
    });
});
