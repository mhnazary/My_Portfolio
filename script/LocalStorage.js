let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputMessage = document.getElementById('contact-descrip');
  
  for (let key in formData ) {
    if (formData.hasOwnProperty(key)) {
      // add event listener to each input element
      switch (key) {
        case 'name':
          inputName.addEventListener('input', event => {
            formData.name = event.target.value;
            localStorage.setItem('formData', JSON.stringify(formData));
          });
          break;
        case 'email':
          inputEmail.addEventListener('input', event => {
            formData.email = event.target.value;
            localStorage.setItem('formData', JSON.stringify(formData));
          });
          break;
        case 'message':
          inputMessage.addEventListener('input', event => {
            formData.message = event.target.value;
            localStorage.setItem('formData', JSON.stringify(formData));
          });
          break;
      }
    }
  }
  
  if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    inputName.value = formData.name;
    inputEmail.value = formData.email;
    inputMessage.value = formData.message;
  }
  
  const form = document.getElementById('contact__form');
  form.addEventListener('submit', event => {
    localStorage.setItem('formData', JSON.stringify(formData));
  });