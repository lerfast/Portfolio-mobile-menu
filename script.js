const openButton = document.getElementById('open-button');

openButton.onclick = () => {
  const x = document.getElementById('pop-up-menu');
  x.style.display = 'block';
};

const closeButton = document.querySelectorAll('.x-button');
closeButton.forEach((item) => {
  item.onclick = () => {
    const y = document.getElementById('pop-up-menu');
    y.style.display = 'none';
  };
});