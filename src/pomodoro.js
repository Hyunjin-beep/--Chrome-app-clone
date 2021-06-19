const optionA = document.querySelector(".optionA");
const optionB = document.querySelector(".optionB");
const timeAndSet = document.querySelector(".timeSetOptions"); //div
const restSpan = document.querySelector(".restSpan");
const setANumber = document.querySelector(".AsetNumber");
const timeSetUl = document.querySelector(".timeSet-ul"); // ul
const limitedBtn = document.querySelector(".limited"); // li - limited of timeSetOptions div
const unlimitedBtn = document.querySelector(".unlimited");
const twentyAndFiveBtn = document.querySelector(".twentyAndFiveBtn");
const twentyFiveAndFiveBtn = document.querySelector(".twentyFiveAndFiveBtn");
const fiftyAndFiveBtn = document.querySelector(".fiftyAndFiveBtn");

const h3 = document.querySelector("h3");

//audio
const startBell = new Audio("sound/start-bell.wav");
const restBell = new Audio("sound/rest-bell.mp3");

//Option A
let Atime = document.querySelector(".Atime");

function updateRest() {
  let restMin = 4;
  let restSeconds = 59;
  console.log("done");

  restBell.play();
  restSpan.style.display = "flex";

  Atime.innerHTML = `${restMin < 10 ? `0${restMin}` : restMin}:${
    restSeconds < 10 ? `0${restSeconds}` : restSeconds
  }`;

  const restMin_starter = setInterval(restMin_start, 60000);
  const restSeconds_starter = setInterval(restSeconds_start, 1000);

  function restMin_start() {
    restMin--;
    Atime.innerHTML = `${restMin < 10 ? `0${restMin}` : restMin}:${
      restSeconds < 10 ? `0${restSeconds}` : restSeconds
    }`;
  }

  function restSeconds_start() {
    restSeconds--;
    Atime.innerHTML = `${restMin < 10 ? `0${restMin}` : restMin}:${
      restSeconds < 10 ? `0${restSeconds}` : restSeconds
    }`;

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
  let template_min = min - 1;

  startBell.play();
  restSpan.style.display = "none";

  Atime.innerHTML = `${template_min < 10 ? `0${template_min}` : template_min}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  //Start countdown
  const min_starter = setInterval(min_start, 60000);
  const second_starter = setInterval(second_start, 1000);

  function min_start() {
    template_min--;
    Atime.innerHTML = `${
      template_min < 10 ? `0${template_min}` : template_min
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  function second_start() {
    seconds--;
    Atime.innerHTML = `${
      template_min < 10 ? `0${template_min}` : template_min
    }:${seconds < 10 ? `0${seconds}` : seconds}`;

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
  h3.style.display = "none";
  timeAndSet.style.display = "none";
  optionA.style.display = "block";

  updateCountDown(min);
  setintervaltime = min * 60000 + 5 * 60000;

  let counter = 0;
  let i = setInterval(function () {
    updateCountDown(min);
    setANumber.innerHTML = `${counter + 2}st`;
    counter++;
    if (counter == 3) {
      clearInterval(i);
    }
  }, setintervaltime);
}

function handleTwentyAndFive() {
  const twenty = 1;
  handleLimitedBtns(twenty);
}

function handleTwentyFiveAndFiveBtn() {
  const twentyFive = 25;
  handleLimitedBtns(twentyFive);
}

function handleFiftyAndFiveBtn() {
  const fifty = 50;
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
