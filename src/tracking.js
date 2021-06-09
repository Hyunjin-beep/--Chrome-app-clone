const tracking_ls = "Tracking List";
let tracking_Array = [];

const trackingSheetForm = document.querySelector(".trackingSheetForm");
const trackingForms = document.querySelectorAll(".trackingForm");
const trackingSheetUl = document.querySelector(".trackingSheet-ul");
const inputForTracking = document.querySelectorAll(".inputForTracking");
const deleteBtnForTracking = document.querySelector(".delteBtnForTracking");

function handleDeleteAll(event) {
  console.dir(event);
  const enteredTaks = document.querySelectorAll(".task");
  console.log(enteredTaks);
  // First, remove li from html not in local storage
  localStorage.removeItem(tracking_ls);
  location.reload();
}

function displayTrackList(formClassName, inputClassName, enteredValue) {
  //   console.log(formClassName, inputClassName, enteredValue); // number(time), number(time), entered task
  const form = document.getElementsByClassName(
    `trackingForm${formClassName}`
  )[0];
  const input = document.getElementsByClassName(
    `inputForTracking${inputClassName}`
  )[0];

  //   console.log(form, input, enteredValue);

  const enteredTasksSpan = document.createElement("span");
  enteredTasksSpan.classList.add("task");
  enteredTasksSpan.innerText = enteredValue;

  form.appendChild(enteredTasksSpan);
  form.removeChild(input);

  const taskObj = {
    formClassName,
    inputClassName,
    enteredValue,
    id: tracking_Array.length + 1,
  };

  tracking_Array.push(taskObj);
  saveTrackingList(tracking_Array);
}

function saveTrackingList(tracking_Array) {
  localStorage.setItem(tracking_ls, JSON.stringify(tracking_Array));
}

function loadTrackList() {
  const loadedTrackList = localStorage.getItem(tracking_ls);
  if (loadedTrackList !== null) {
    const parsedTrackList = JSON.parse(loadedTrackList);
    parsedTrackList.forEach((trackList) =>
      displayTrackList(
        trackList.formClassName,
        trackList.inputClassName,
        trackList.enteredValue
      )
    );
  }
}

function handleTest(event) {
  event.preventDefault();
  // Get class name(time) and give them as param to displayTrackList()
  const formClassName = event.target.className.substring(12, 15);
  const inputClassName = event.target[0].className.substring(16, 19);
  const enteredValue = event.target.firstElementChild.value;

  displayTrackList(formClassName, inputClassName, enteredValue);
}

function init() {
  loadTrackList();
  // 'trackinForms' are multiple forms, so need forEach
  trackingForms.forEach((trackingForm) => {
    trackingForm.addEventListener("submit", (event) => handleTest(event));
  });
  deleteBtnForTracking.addEventListener("click", handleDeleteAll);
}

init();

// First, enter what i did
// second, store entered work and display entered work
// Third, add a button related to clear
