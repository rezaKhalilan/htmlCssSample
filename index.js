let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let navLinks = document.getElementById("nav-links");

openBtn.addEventListener("click", function() {
    navLinks.style.right = 0;
});

closeBtn.addEventListener("click", function() {
    navLinks.style.right = "-200px";
});