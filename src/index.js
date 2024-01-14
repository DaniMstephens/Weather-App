// Funcion para que el resultado de la palabra tenga la primera letra en mayusculas y las otras en minusculas
function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

function city(event) {
  event.preventDefault();
  let cityTyped = document.querySelector("#enter-city");
  let h1 = document.querySelector("#city-name-entered");
  h1.innerHTML = `${cityTyped.value}`;

  // Convertir a Title Case y asignar al h1
  h1.textContent = toTitleCase(cityTyped.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", city);
