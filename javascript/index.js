function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    londonDateElement.innerHTML = moment
      .tz("Europe/London")
      .format("dddd MMMM Do YYYY");

    londonTimeElement.innerHTML = moment.tz("Europe/London").format("HH:mm:ss");
  }

  let tokyoElement = document.querySelector("#tokyo");

  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoDateElement.innerHTML = moment
      .tz("Asia/Tokyo")
      .format("dddd MMMM Do YYYY");

    tokyoTimeElement.innerHTML = moment.tz("Asia/Tokyo").format("HH:mm:ss");
  }

  let newYorkElement = document.querySelector("#new-york");

  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    newYorkDateElement.innerHTML = moment
      .tz("America/New_York")
      .format("dddd MMMM Do YYYY");

    newYorkTimeElement.innerHTML = moment
      .tz("America/New_York")
      .format("HH:mm:ss");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesHTML = `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm")}</div>
    </div>`;

  citiesElement.innerHTML = citiesHTML;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
