const tracking_ls = "Tracking List";
let tracking_Array = [];

const trackingSheetForm = document.querySelector(".trackingSheetForm");
const trackingForms = document.querySelectorAll(".trackingForm");
const enteredWorks = document.querySelectorAll(".inputForTracking");
const trackingSheetUl = document.querySelector(".trackingSheet-ul");

function displayTrackList(event, enteredTask) {
  const input = event.target.firstElementChild;
  const inputParent = input.parentElement;
  const enteredTasksSpan = document.createElement("span");
  enteredTasksSpan.innerText = enteredTask;

  inputParent.appendChild(enteredTasksSpan);
  inputParent.removeChild(input);

  const taskObj = {
    event,
    enteredTask,
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
  //   if (loadedTrackList !== null) {
  //     const parsedTrackList = JSON.parse(loadedTrackList);
  //     parsedTrackList.forEach((list) => {
  //       displayTrackList(list.event, list.enteredTask);
  //     });
  //   }
}

function handleTest(event) {
  event.preventDefault();
  const input = event.target.firstElementChild;
  const inputParent = input.parentElement;
  const enteredValue = event.target.firstElementChild.value;
  displayTrackList(input, enteredValue);
}

function init() {
  loadTrackList();
  trackingForms.forEach((trackingForm) => {
    trackingForm.addEventListener("submit", (event) => handleTest(event));
  });
}

init();

// First, enter what i did
// second, store entered work and display entered work
// Third, add a button related to clear
