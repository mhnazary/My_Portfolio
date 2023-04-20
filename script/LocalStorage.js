let formData = {
  name: '',
  email: '',
  message: '',
};

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('contact-descrip');

inputName.addEventListener('input', (event) => {
  formData.name = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

inputEmail.addEventListener('input', (event) => {
  formData.email = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

inputMessage.addEventListener('input', (event) => {
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

if (localStorage.getItem('formData')) {
  formData = JSON.parse(localStorage.getItem('formData'));
  inputName.value = formData.name;
  inputEmail.value = formData.email;
  inputMessage.value = formData.message;
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', () => {
  localStorage.setItem('formData', JSON.stringify(formData));
});