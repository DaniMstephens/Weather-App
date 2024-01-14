function city(event) {
  event.preventDefault();
  let cityTyped = document.querySelector("#enter-city");
  let h1 = document.querySelector("#city-name-entered");
  h1.innerHTML = `${cityTyped.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", city);
