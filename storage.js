



const input1 = document.getElementById('name1');
const input2 = document.getElementById('email');
const input3 = document.getElementById('message');


let formData = {
    name1: '',
    email: '',
    message: ''
};


name1.addEventListener('change', function() {
  formData.name1 = name1.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

email.addEventListener('change', function() {
  formData.email = email.value;
  localStorage.setItem('form-element', JSON.stringify(formData));
});

message.addEventListener('change', function() {
  formData.message = message.value;
  localStorage.setItem('form-element', JSON.stringify(formData));
});


const savedData = JSON.parse(localStorage.getItem('form-element'));


if (savedData) {
  name1.value = savedData.name1;
  email.value = savedData.email;
  message.value = savedData.message;
}


// const resetButton = document.getElementById('resetButton');

// resetButton.addEventListener('click', function() {
//   input1.value = '';
//   input2.value = '';
//   input3.value = '';
//   localStorage.removeItem('formData');
// });