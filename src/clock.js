const date = document.querySelector(".date");
const clock = document.querySelector(".clock");

function loadDate() {
  const today = new Date();
  const yrs = today.getFullYear();
  const month = today.toLocaleString("default", { month: "short" });
  const day = today.getDate();
  const weekend = today.toLocaleString("default", { weekday: "short" });
  date.innerHTML = `${month < 10 ? `0${month}` : month} ${
    day < 10 ? `0${day}` : day
  }, ${yrs} ${weekend}`;
}

function loadClock() {
  const currentTime = new Date();
  const hrs = currentTime.getHours();
  const min = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  clock.innerHTML = `${hrs < 10 ? `0${hrs}` : hrs}:${
    min < 10 ? `0${min}` : min
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  loadDate();
  loadClock();
  setInterval(loadClock, 1000);
}

init();
