var button = document.querySelector("nav button");
var options = document.querySelectorAll("nav ul li a");

/* querySelectorAll werkt niet */

button.addEventListener("click", function () {
    options.classList.toggle("open");
    button.classList.toggle("active");
});
