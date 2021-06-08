const tracking_ls = "Tracking List";
let tracking_Array = [];

const trackingSheetForm = document.querySelector(".trackingSheetForm");
const trackingForms = document.querySelectorAll(".trackingForm");
const enteredWorks = document.querySelectorAll(".inputForTracking");
const trackingSheetUl = document.querySelector(".trackingSheet-ul");

function displayTrackList(enteredTask) {
  const enteredTasksSpan = document.createElement("span");
  enteredTasksSpan.innerText = enteredTask;

  form.append(enteredTasksSpan);

  const taskObj = {
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
  //     console.log(loadedTrackList);
  //     const parsedTrackList = JSON.parse(loadedTrackList);
  //     console.log(parsedTrackList);
  //     parsedTrackList.forEach(trackList => );
  //   }
}

function handleTest(event) {
  event.preventDefault();
  //   console.dir(event);
  //   console.log(event.target);
  //   console.log(event.target[0]);
  const formClassName = event.target.className.substring(12, 15);
  const inputClassName = event.target[0].className.substring(16, 19);
  const enteredValue = event.target.firstElementChild.value;

  let form = document.getElementsByClassName(`trackingForm ${formClassName}`);
  let input = document.getElementsByClassName(
    `inputForTracking ${inputClassName}`
  );

  displayTrackList(enteredValue);
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
