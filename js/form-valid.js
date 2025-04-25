const formButton = document.querySelector('.form__button');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const hideErrorOnValidInput = (input) => {
  if (input.validity.valid) {
    input.classList.remove('input-error');
  }
};

const formValid = () => {
  formButton.addEventListener('click', (evt) => {
    let formIsValid = true;


    if (email.validity.valueMissing) {
      email.setCustomValidity('Пожалуйста, введите Email');
      email.classList.add('input-error');
      email.reportValidity();
      formIsValid = false;
    } else if (email.validity.patternMismatch) {
      email.setCustomValidity('Email должен оканчиваться на .рф');
      email.classList.add('input-error');
      email.reportValidity();
      formIsValid = false;
    } else {
      email.setCustomValidity('');
      email.classList.remove('input-error');
    }

    if (!phone.validity.valid) {
      phone.classList.add('input-error');
      evt.preventDefault();
      phone.reportValidity();
    } else {
      phone.classList.remove('input-error');
    }

    if (!formIsValid) {
      evt.preventDefault();
    }
  });

  email.addEventListener('input', () => hideErrorOnValidInput(email));
  phone.addEventListener('input', () => hideErrorOnValidInput(phone));
};

export { formValid };


