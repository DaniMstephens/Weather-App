// Funcion para que el resultado de la palabra tenga la primera letra en mayusculas y las otras en minusculas
function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

//funcion que reemplaza los datos de la temperatura
function displayTemperature(response) {
  let temperatureDisplay = document.querySelector("#degrees");
  let temperature = Math.round(response.data.temperature.current);
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#weather-description");
  let iconElement = document.querySelector("#weather-icon");

  temperatureDisplay.innerHTML = `${temperature}`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  descriptionElement.innerHTML = `, ${response.data.condition.description}`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji" />`;

  //para ver los datos en consola
  //console.log(response.data.temperature);
}

function updateWeatherData(city) {
  let apiKey = "20939f2253oaab2tb9eb2c1b303f1469";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

function city(event) {
  event.preventDefault();
  let cityTyped = document.querySelector("#enter-city");
  let h1 = document.querySelector("#city-name-entered");
  h1.innerHTML = `${cityTyped.value}`;

  // Convertir a Title Case y asignar al h1
  h1.textContent = toTitleCase(cityTyped.value);

  //llamado a la funcion que reemplaza la temperatura
  updateWeatherData(cityTyped.value);
}

//funcion para los datos actualizados de la fecha

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  //esto le agrega el 0 adelante del número,
  //por que por lo general los minutos/horas cuando son menores de 10 salen solos
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", city);

let currentDataElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDataElement.innerHTML = formatDate(currentDate);
