var button = document.querySelector('header button');
var body = document.body;

button.addEventListener('click', function() {
    body.classList.toggle('menuOpen')
});