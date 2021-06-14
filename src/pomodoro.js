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

function updateRest() {
  let restMin = 0;
  let restSeconds = 59;
  console.log("done");

  Atime.innerHTML = `${restMin}:${restSeconds}`;

  const restMin_starter = setInterval(restMin_start, 60000);
  const restSeconds_starter = setInterval(restSeconds_start, 1000);

  function restMin_start() {
    restMin--;
    Atime.innerHTML = `${restMin}:${restSeconds}`;
  }

  function restSeconds_start() {
    restSeconds--;
    Atime.innerHTML = `${restMin}:${restSeconds}`;

    if (restSeconds == 0) {
      if (restMin == 0) {
        clearInterval(restMin_starter);
        clearInterval(restSeconds_starter);
      }
      restSeconds = 60;
    }
  }
}

function updateCountDown(min) {
  let seconds = 59;
  console.log(min);
  let template_min = min - 1;

  Atime.innerHTML = `${template_min}:${seconds}`;

  //Start countdown
  const min_starter = setInterval(min_start, 60000);
  const second_starter = setInterval(second_start, 1000);

  function min_start() {
    template_min--;
    Atime.innerHTML = `${template_min}:${seconds}`;
  }

  function second_start() {
    seconds--;
    Atime.innerHTML = `${template_min}:${seconds}`;

    if (seconds == 0) {
      if (template_min == 0) {
        clearInterval(min_starter);
        clearInterval(second_starter);

        updateRest();
      }
      seconds = 60;
    }
  }
}

function handleLimitedBtns(min) {
  timeAndSet.style.display = "none";
  optionA.style.display = "block";

  updateCountDown(min);
  setintervaltime = min * 60000 + 1 * 60000;
  let counter = 0;

  let i = setInterval(function () {
    updateCountDown(min);
    counter++;

    if (counter == 2) {
      clearInterval(i);
    }
  }, 120000);
}

function handleTwentyAndFive() {
  const twenty = 1;
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
