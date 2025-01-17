// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Carica il file navbar.html
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Carica il file navbar.html
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});
