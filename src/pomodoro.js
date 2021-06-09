const optionA = document.querySelector(".optionA");
const optionB = document.querySelector(".optionB");
const timeAndSet = document.querySelector(".timeSetOptions"); //div
const timeSetUl = document.querySelector(".timeSet-ul"); // ul
const limitedBtn = document.querySelector(".limited"); // li - limited of timeSetOptions div
const unlimitedBtn = document.querySelector(".unlimited");
const twentyAndFiveBtn = document.querySelector(".twentyAndFiveBtn");
const twentyFiveAndFiveBtn = document.querySelector(".twentyFiveAndFiveBtn");
const fiftyAndFiveBtn = document.querySelector(".fiftyAndFiveBtn");

//Option A
const Atime = document.querySelector(".Atime");

function updateCountDown() {
  console.log("time   ");
  const startingMin = 20;
  let time = startingMin * 60; // 20분 x 60초

  const mintues = Math.floor(time / 60);
  let seconds = mintues % 60;

  Atime.innerText = `${mintues < 10 ? `0${mintues}` : mintues}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  time--;
}

function handleTwentyAndFive() {
  setInterval(updateCountDown, 1000);
}

function handleLimitedBtns(event) {
  timeAndSet.style.display = "none";
  optionA.style.display = "block";

  twentyAndFiveBtn.addEventListener("click", handleTwentyAndFive);
}

function showOptions() {
  optionA.style.display = "none";
  optionB.style.display = "none";

  limitedBtn.addEventListener("click", handleLimitedBtns);
  //   unlimitedBtn.addEventListener("click", handleUnlimitedBtns);
}

function init() {
  showOptions();
}

init();

// First, user have to choose option from the time and set list
// Second, the page will load one of them (option A & option B) according to his option

// First, need to hide optionA, optionB when window load
