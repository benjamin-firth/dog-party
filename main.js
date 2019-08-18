var saveButton = document.querySelector("#name-form-button");
var newName = document.querySelector("#name-input")

saveButton.addEventListener('click', updateDogName);

function updateDogName(event) {
  event.preventDefault();
  document.querySelector(".dogName").innerText = newName.value;
}
