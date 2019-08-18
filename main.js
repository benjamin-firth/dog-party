var saveButton = document.querySelector("#name-form-button");
var newName = document.querySelector("#name-input");
var whatButton = document.querySelector("#what-button");
var factsButton = document.querySelector("#facts-button");
var howButton = document.querySelector("#how-button");


saveButton.addEventListener('click', updateDogName);

whatButton.addEventListener('click', toggleWhatDogText);

factsButton.addEventListener('click', toggleFactsDogText);

howButton.addEventListener('click', toggleHowDogText);


function updateDogName(event) {
  event.preventDefault();
  document.querySelector(".dog-name").innerText = newName.value;
}

function toggleWhatDogText(event) {
  event.preventDefault();
  document.querySelector(".what-text").classList.toggle('hidden-text');
}

function toggleFactsDogText(event) {
  event.preventDefault();
  document.querySelector(".facts-text").classList.toggle('hidden-text');
}

function toggleHowDogText(event) {
  event.preventDefault();
  document.querySelector(".how-text").classList.toggle('hidden-text');
}
