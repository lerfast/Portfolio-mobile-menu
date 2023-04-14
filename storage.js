const formelement = document.getElementById('formData1');
const userName = formelement[0];
const userEmail = formelement[1];
const userText = formelement[2];

formelement.oninput = function saveData() {
  const data = {
    saveName: userName.value,
    saveEmail: userEmail.value,
    saveText: userText.value,
  };
  localStorage.setItem('formdata', JSON.stringify(data));
};

function loadData() {
  const dataForm = JSON.parse(localStorage.getItem('formdata'));
  userName.value = dataForm.saveName;
  userEmail.value = dataForm.saveEmail;
  userText.value = dataForm.saveText;
}
loadData();

// const input1 = document.getElementById('name1');
// const input2 = document.getElementById('email');
// const input3 = document.getElementById('message');

// let formData = {
//     name1: '',
//     email: '',
//     message: ''
// };

// name1.addEventListener('change', function() {
//   formData.name1 = name1.value;
//   localStorage.setItem('form-element', JSON.stringify(formData));
// });

// email.addEventListener('change', function() {
//   formData.email = email.value;
//   localStorage.setItem('form-element', JSON.stringify(formData));
// });

// message.addEventListener('change', function() {
//   formData.message = message.value;
//   localStorage.setItem('form-element', JSON.stringify(formData));
// });

// const savedData = JSON.parse(localStorage.getItem('form-element'));

// if (savedData) {
//   name1.value = savedData.name1;
//   email.value = savedData.email;
//   message.value = savedData.message;
// }

// const input1 = document.getElementById('name1');
// const input2 = document.getElementById('email');
// const textarea = document.getElementById('message2');

// let formData = {
//   name1: '',
//   email: '',
//   message: ''
// };

// input1.addEventListener('change', function() {
//   formData.name1 = input1.value;
//   localStorage.setItem('formData1', JSON.stringify(formData));
// });

// input2.addEventListener('change', function() {
//   formData.email = input2.value;
//   localStorage.setItem('formData1', JSON.stringify(formData));
// });

// textarea.addEventListener('change', function() {
//   formData.message = input3.value;
//   localStorage.setItem('formData1', JSON.stringify(formData));
// });

// const savedData = JSON.parse(localStorage.getItem('formData1'));

// if (savedData) {
//   input1.value = savedData.name1;
//   input2.value = savedData.email;
//   textarea.value = savedData.message;
// }

// const resetButton = document.getElementById('resetButton');

// resetButton.addEventListener('click', function() {
//   input1.value = '';
//   input2.value = '';
//   input3.value = '';
//   localStorage.removeItem('formData');
// });