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
let Atime = document.querySelector(".Atime");

function updateCountDown(min) {
  let seconds = 60;
  setInterval(function () {
    if (min == 0 && seconds == 1) {
      Atime.innerHTML = "00:00";
    } else {
      seconds--;
      if (seconds == 0) {
        min--;
        seconds = 60;

        if (min == 0) {
          min = min;
        }
      }

      Atime.innerHTML = `${min < 10 ? `0${min}` : min}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;
    }
  }, 1000);
}

function handleLimitedBtns(min) {
  timeAndSet.style.display = "none";
  optionA.style.display = "block";

  updateCountDown(min);
}

function handleTwentyAndFive() {
  const twenty = 19;
  handleLimitedBtns(twenty);
}

function handleTwentyFiveAndFiveBtn() {
  const twentyFive = 24;
  handleLimitedBtns(twentyFive);
}

function handleFiftyAndFiveBtn() {
  const fifty = 49;
  handleLimitedBtns(fifty);
}

function showOptions() {
  optionA.style.display = "none";
  optionB.style.display = "none";

  twentyAndFiveBtn.addEventListener("click", handleTwentyAndFive);
  twentyFiveAndFiveBtn.addEventListener("click", handleTwentyFiveAndFiveBtn);
  fiftyAndFiveBtn.addEventListener("click", handleFiftyAndFiveBtn);
  //   unlimitedBtn.addEventListener("click", handleUnlimitedBtns);
}

function init() {
  showOptions();
}

init();

// First, user have to choose option from the time and set list
// Second, the page will load one of them (option A & option B) according to his option

// First, need to hide optionA, optionB when window load
