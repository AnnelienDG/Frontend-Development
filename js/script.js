var button = document.querySelector('header button');
var filter = document.querySelector('main button:first-child');
var sluitknop = document.querySelector('fieldset button');
var body = document.body;

var workshopbutton = document.querySelector('main article section form button');

// Aftel counter afgehaald op: "https://www.w3schools.com/howto/howto_js_countdown.asp" (october, 2019)
// Deze wel aangepast naar eigen behoeften

var countDownDate = new Date("Nov 1, 2020 20:00:00").getTime();
var x = setInterval(function () {

var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("timer").innerHTML = "Nog " + days + " dagen " + " en " + hours + " uur " + "tot bekendmaking";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// einde code aftelcounter


button.addEventListener('click', function () {
    body.classList.toggle('menuOpen');
});

filter.addEventListener('click', function () {
    body.classList.toggle('filterOpen');
});

sluitknop.addEventListener('click', function () {
    body.classList.toggle('filterOpen');
});
