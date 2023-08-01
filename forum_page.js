document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const usernameInput = document.getElementById('username');
    const commentInput = document.getElementById('comment');
    const commentsContainer = document.getElementById('comments');

    submitBtn.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        const comment = commentInput.value.trim();

        if (!username || !comment) {
            alert('Please enter both your ID and comment.');
            return;
        }

        const commentElement = createCommentElement(username, comment);
        commentsContainer.appendChild(commentElement);

        // Clear the input fields after posting a comment
        usernameInput.value = '';
        commentInput.value = '';
    });

    function createCommentElement(username, comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <strong>${username}</strong>
            <p>${comment}</p>
        `;
        return commentElement;
    }
});



// JavaScript to handle the toggle of the navigation links on smaller screens
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const hamburgerIcon = document.querySelector(".fa-bars");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburgerIcon.classList.toggle("white-icon"); 
});

function isClickOutsideElement(event, element) {
  return !element.contains(event.target);
}

document.addEventListener("click", (event) => {
  if (isClickOutsideElement(event, navLinks) && isClickOutsideElement(event, menuToggle)) {
    navLinks.classList.remove("show");
    if (hamburgerIcon.classList.contains("white-icon")) {
      hamburgerIcon.classList.remove("white-icon"); // Remove white color class when hiding the navLinks
    }
  }
});
