const APIKeys = "067bdb166b56865579b98267f3e21336";
const coords_ls = "COORDS";

const weatherContainer = document.querySelector(".weather");
const tem = document.querySelector(".tem");
const hum = document.querySelector(".humidity");
const cloudsDes = document.querySelector(".clouds");
const cityName = document.querySelector(".city");

function displayWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKeys}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const temp = data.main.temp.toFixed(1);
      const city = data.name;
      const humidity = data.main.humidity;
      //   const clouds = data.weather[0].description;
      const cloudsIcon = data.weather[0].icon;

      tem.innerHTML = `${temp}°C`;
      hum.innerHTML = `${humidity}%`;
      cloudsDes.innerHTML = `<img src='http://openweathermap.org/img/w/${cloudsIcon}.png'></img>`;
      cityName.innerHTML = `@ ${city}`;
    });
}

function saveCoords(coordsInfor) {
  localStorage.setItem(coords_ls, JSON.stringify(coordsInfor));
}

function HandleSuccess(position) {
  console.log(position);

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude);

  const coordObj = {
    latitude: latitude,
    longitude: longitude,
  };

  saveCoords(coordObj);
}

function HandleErrors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function askLocations() {
  navigator.geolocation.getCurrentPosition(HandleSuccess, HandleErrors);
}

function loadLocations() {
  const loadedCoords = localStorage.getItem(coords_ls);
  if (loadedCoords === null) {
    askLocations();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    displayWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

window.addEventListener("load", loadLocations);
