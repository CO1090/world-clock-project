function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  londonDateElement.innerHTML = moment
    .tz("Europe/London")
    .format("dddd MMMM Do YYYY");

  londonTimeElement.innerHTML = moment.tz("Europe/London").format("HH:mm:ss");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = moment
    .tz("Asia/Tokyo")
    .format("dddd MMMM Do YYYY");

  tokyoTimeElement.innerHTML = moment.tz("Asia/Tokyo").format("HH:mm:ss");
}
updateTime();
setInterval(updateTime, 1000);
