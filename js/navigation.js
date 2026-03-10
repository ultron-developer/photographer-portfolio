const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

    menuOpen = true;
  } else if (menuOpen == true) {
    navLinks.style.display = "none";
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");

    menuOpen = false;
  }
});
