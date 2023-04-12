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
  guy : {
    Id: "guy-project",
    title:  "1- Tonic",
    technology1: "HTML",
    technology2: "CSS",
    technology3: "JAVASCRIPT",
    image: "./vectors/Snapshoot Portfolio.png",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  }
}

function showNewSection(projectId) {
  var container = document.getElementById(projects[projectId].Id);
  var newSection = document.createElement("div");
  newSection.id = "pop-up-window";
  newSection.innerHTML = "<div class= 'grid-container-popup' > <div class='pop-up-container'><h3 style='margin-top: 0;' class='card-title'>" + projects[projectId].title +"<button id='close-popup-button' class='x-button js-button' onclick='closeNewSection()'><img src='./vectors/close.png' alt=''></button>" + "</h3>" +        
                          "<img src='" + projects[projectId].image + "' alt='" + projects[projectId].title + "' />" +
                          "<p class='card-description'>" + projects[projectId].paragraph + "</p>" + 
                          "<ul class='tags-list-style-none'>" + "<li class='tag-description1'>" + "<p>" + projects[projectId].technology1 + "</p>"+ "</li>" + "<li class='tag-description2'>"+ "<p>" + projects[projectId].technology2 + "</p>" + "</li>" + "<li class='tag-description3'>"+ "<p>" + projects[projectId].technology3 + "</p>" + "</li>"+ 
                          "<div><button class='see-btn'>See Live</button>" + " " +"<button class='see-btn'>See Source</button></div></div>";
  container.appendChild(newSection);
  newSection.style.display = "flex";

}                

function closeNewSection() {
  var newSection = document.getElementById("pop-up-window");
  newSection.parentNode.removeChild(newSection);
 }

const projects2 = {
  availability : {
    Id: "availability-project",
    title:  "2- Multi-Post Stories",
    technology1: "HTML",
    technology2: "CSS",
    technology3: "JAVASCRIPT",
    image: "./vectors/Snapshoot Portfolio2.png",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  }
}

function showNewSection2(projectId2) {
  var container = document.getElementById(projects2[projectId2].Id);
  var newSection = document.createElement("div");
  newSection.id = "pop-up-window";
  newSection.innerHTML = "<div class= 'grid-container-popup' > <div class='pop-up-container'><h3 style='margin-top: 0;' class='card-title'>" + projects2[projectId2].title +"<button id='close-popup-button' class='x-button js-button' onclick='closeNewSection()'><img src='./vectors/close.png' alt=''></button>" + "</h3>" +        
  "<img src='" + projects2[projectId2].image + "' alt='" + projects2[projectId2].title + "' />" +
  "<p class='card-description'>" + projects2[projectId2].paragraph + "</p>" + 
  "<ul class='tags-list-style-none'>" + "<li class='tag-description1'>" + "<p>" + projects2[projectId2].technology1 + "</p>"+ "</li>" + "<li class='tag-description2'>"+ "<p>" + projects2[projectId2].technology2 + "</p>" + "</li>" + "<li class='tag-description3'>"+ "<p>" + projects2[projectId2].technology3 + "</p>" + "</li>"+ 
  "<div><button class='see-btn'>See Live</button>" + " " +"<button class='see-btn'>See Source</button></div></div>";
  container.appendChild(newSection);
  newSection.style.display = "flex";
}

const projects3 = {
  yoga : {
    Id: "yoga-project",
    title:  "3- Tonic",
    technology1: "HTML",
    technology2: "CSS",
    technology3: "JAVASCRIPT",
    image: "./vectors/Snapshoot Portfolio3.png",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  }
}

function showNewSection3(projectId3) {
  var container = document.getElementById(projects3[projectId3].Id);
  var newSection = document.createElement("div");
  newSection.id = "pop-up-window";
  newSection.innerHTML = "<div class= 'grid-container-popup' > <div class='pop-up-container'><h3 style='margin-top: 0;' class='card-title'>" + projects3[projectId3].title +"<button id='close-popup-button' class='x-button js-button' onclick='closeNewSection()'><img src='./vectors/close.png' alt=''></button>" + "</h3>" +        
  "<img src='" + projects3[projectId3].image + "' alt='" + projects3[projectId3].title + "' />" +
  "<p class='card-description'>" + projects3[projectId3].paragraph + "</p>" + 
  "<ul class='tags-list-style-none'>" + "<li class='tag-description1'>" + "<p>" + projects3[projectId3].technology1 + "</p>"+ "</li>" + "<li class='tag-description2'>"+ "<p>" + projects3[projectId3].technology2 + "</p>" + "</li>" + "<li class='tag-description3'>"+ "<p>" + projects3[projectId3].technology3 + "</p>" + "</li>"+ 
  "<div><button class='see-btn'>See Live</button>" + " " +"<button class='see-btn'>See Source</button></div></div>";
  container.appendChild(newSection);
  newSection.style.display = "flex";
}


const projects4 = {
  art : {
    Id: "art-project",
    title:  "4- Multi-Post Stories",
    technology1: "HTML",
    technology2: "CSS",
    technology3: "JAVASCRIPT",
    image: "./vectors/Snapshoot Portfolio4.png",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  }
}

function showNewSection4(projectId4) {
  var container = document.getElementById(projects4[projectId4].Id);
  var newSection = document.createElement("div");
  newSection.id = "pop-up-window";
  newSection.innerHTML = "<div class= 'grid-container-popup' > <div class='pop-up-container'><h3 style='margin-top: 0;' class='card-title'>" + projects4[projectId4].title +"<button id='close-popup-button' class='x-button js-button' onclick='closeNewSection()'><img src='./vectors/close.png' alt=''></button>" + "</h3>" +        
  "<img src='" + projects4[projectId4].image + "' alt='" + projects4[projectId4].title + "' />" +
  "<p class='card-description'>" + projects4[projectId4].paragraph + "</p>" + 
  "<ul class='tags-list-style-none'>" + "<li class='tag-description1'>" + "<p>" + projects4[projectId4].technology1 + "</p>"+ "</li>" + "<li class='tag-description2'>"+ "<p>" + projects4[projectId4].technology2 + "</p>" + "</li>" + "<li class='tag-description3'>"+ "<p>" + projects4[projectId4].technology3 + "</p>" + "</li>"+ 
  "<div><button class='see-btn'>See Live</button>" + " " +"<button class='see-btn'>See Source</button></div></div>";
  container.appendChild(newSection);
  newSection.style.display = "flex";
}

