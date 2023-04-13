const openButton = document.getElementById('open-button');

openButton.onclick = () => {
  const x = document.getElementById('pop-up-menu');
  x.style.display = 'block';
};

const closeButton = document.querySelectorAll('.js-button');
closeButton.forEach((item) => {
  item.onclick = () => {
    const y = document.getElementById('pop-up-menu');
    y.style.display = 'none';
  };
});

const projects = {
  guy: {
    Id: 'guy-project',
    title: 'Tonic',
    technology1: 'HTML',
    technology2: 'CSS',
    technology3: 'JAVASCRIPT',
    image: './vectors/Snapshoot Portfolio.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },

  availability: {
    Id: 'availability-project',
    title: 'Multi-Post Stories',
    technology1: 'HTML',
    technology2: 'CSS',
    technology3: 'JAVASCRIPT',
    image: './vectors/Snapshoot Portfolio2.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },

  yoga: {
    Id: 'yoga-project',
    title: 'Tonic',
    technology1: 'HTML',
    technology2: 'CSS',
    technology3: 'JAVASCRIPT',
    image: './vectors/Snapshoot Portfolio3.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },

  art: {
    Id: 'art-project',
    title: 'Multi-Post Stories',
    technology1: 'HTML',
    technology2: 'CSS',
    technology3: 'JAVASCRIPT',
    image: './vectors/Snapshoot Portfolio4.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
};

function showNewSection(projectId) {
  const container = document.getElementById('portfolio');
  const newSection = document.createElement('div');
  newSection.id = 'pop-up-window';
  newSection.innerHTML = `<div class='grid-container-popup pop-up-container'><h3 style='margin: 0;' class='card-title'>${projects[projectId].title}<span id='close-popup-button'  class='x-button js-button' onclick='closeNewSection()'>X</span></h3>
                          <img class='popup-img' src='${projects[projectId].image}' alt='${projects[projectId].title}'/>
                          <div class="frame-2">
                    <p class="client">CANOPY</p>
                    <img src="./vectors/Counter.png" alt="Counter">
                    <p class="Role">Back End Dev</p>
                    <img src="./vectors/Counter.png" alt="Counter">
                    <p class="Role">2023</p>
                  </div>
                          <div class='popup-align'><div class='card-description2'><p class='popup-p'>${projects[projectId].paragraph}</p>
                          <div><ul class= 'tags-list-style-none'><li class='tag-description1'><p class='new-section-technology'>${projects[projectId].technology1}</p></li><li class='tag-description2'><p class='new-section-technology'>${projects[projectId].technology2}</p></li><li class='tag-description3'><p>${projects[projectId].technology3}</p></li></ul>
                          <div><div><div class=button-div><button class=see-btn>See Live   <img src="./vectors/live-icon.png" alt=""></button><button class='see-btn'>See Source  <img src="./vectors/github-link.png" alt=""></button></div></div></div></div></div>`;
  container.appendChild(newSection);
  newSection.style.display = 'flex';
}
function closeNewSection() {
  const newSection = document.getElementById('pop-up-window');
  newSection.parentNode.removeChild(newSection);
}

const closePopUp = document.getElementById('closePopUp');
closePopUp.onclick = closeNewSection();

const openPopUp = document.getElementById('popButton');
openPopUp.onclick = showNewSection();
