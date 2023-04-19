const contactForm = document.getElementById('contact-form');
const emailField = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

const correctEmail = () => {
  if (emailField.value === emailField.value.toLowerCase()) {
    return true;
  }

  return false;
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!correctEmail()) {
    emailField.style.border = '2px solid red';
    errorMessage.style.display = 'block';
  } else {
    emailField.style.border = '1px solid #cfd8dc';
    errorMessage.style.display = 'none';

    contactForm.submit();
    contactForm.result();
  }
});
