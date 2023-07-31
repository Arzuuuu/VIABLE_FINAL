// const menuToggle = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav-links");
// const hamburgerIcon = document.querySelector(".fa-bars");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
//   hamburgerIcon.classList.toggle("white-icon"); // Toggle the white color class for the hamburger icon
// });

// function isClickOutsideElement(event, element) {
//   return !element.contains(event.target);
// }

// // Event listener to hide the navigation links when clicking outside them
// document.addEventListener("click", (event) => {
//   if (isClickOutsideElement(event, navLinks) && isClickOutsideElement(event, menuToggle)) {
//     navLinks.classList.remove("show");
//     if (hamburgerIcon.classList.contains("white-icon")) {
//       hamburgerIcon.classList.remove("white-icon"); // Remove white color class when hiding the navLinks
//     }
//   }
// });


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const hamburgerIcon = document.querySelector(".fa-bars");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburgerIcon.classList.toggle("white-icon"); // Toggle the white color class for the hamburger icon
});

function isClickOutsideElement(event, element) {
  return !element.contains(event.target);
}

// Event listener to hide the navigation links when clicking outside them
document.addEventListener("click", (event) => {
  if (isClickOutsideElement(event, navLinks) && isClickOutsideElement(event, menuToggle)) {
    navLinks.classList.remove("show");
    if (hamburgerIcon.classList.contains("white-icon")) {
      hamburgerIcon.classList.remove("white-icon"); // Remove white color class when hiding the navLinks
    }
  }
});