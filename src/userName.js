const userForm = document.querySelector(".userName");
const userNameInput = document.querySelector(".userNameInput");
const userNameValue = document.querySelector(".userNameValue");

const userName_ls = "currentUser";

function saveUserName(userName) {
  localStorage.setItem(userName_ls, userName);
}

function handleSubmit(event) {
  event.preventDefault();
  const enteredName = userNameInput.value;
  displayUserName(enteredName);
  saveUserName(enteredName);
}

function askUserName() {
  userForm.addEventListener("submit", handleSubmit);
}

function displayUserName(userName) {
  userNameInput.style.display = "none";
  userNameValue.innerHTML = `Welcome Back, ${userName}!`;
}

function loadUserName() {
  const userName = localStorage.getItem(userName_ls);
  if (userName === null) {
    askUserName();
  } else {
    displayUserName(userName);
  }
}

function init() {
  loadUserName();
}

init();
