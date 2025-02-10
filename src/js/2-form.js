import { loadFromLS, saveToLS } from './localStorageAPI';
const LS_USER_DATA_KEY = 'userData';
const refs = { form: document.querySelector('.form-js') };
const formData = { email: '', message: '' };

const savedData = loadFromLS(LS_USER_DATA_KEY);
console.log(savedData);

if (savedData) {
  refs.form.elements.email.value = savedData.email;
  refs.form.elements.message.value = savedData.message;
}

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  formData.email = email;
  formData.message = message;
  saveToLS(LS_USER_DATA_KEY, formData);
}

function onFormSubmit(e) {
  e.preventDefault();

  const data = loadFromLS(LS_USER_DATA_KEY);

  const isEmptyField = !data || Object.values(data).some(item => !item);
  if (isEmptyField) {
    console.log('Fill please all fields');
    return;
  }

  console.log(data);
  localStorage.removeItem(LS_USER_DATA_KEY);
  e.target.reset();
}
