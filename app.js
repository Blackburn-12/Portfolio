document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const navbar = document.querySelector(".nav-links-lap-mob");

  let isOverlayActive = false;

  hamburger.addEventListener("click", () => {
    if (isOverlayActive) {
      overlay.classList.remove("active");
      navbar.style.display = "none";
    } else {
      overlay.classList.add("active");
      navbar.style.display = "block";
    }
    isOverlayActive = !isOverlayActive;
  });
});

var hamburger = document.getElementById("hamburger");
var nav = document.querySelector("nav");
var overlay = document.getElementById("overlay");
var navbar = document.querySelector(".nav-links-lap-mob");

hamburger.addEventListener("click", function () {
  overlay.classList.add("active");
  navbar.style.display = "block";
});

document.querySelector("nav").addEventListener("click", function (e) {
  // Check if the clicked element is an anchor link
  if (e.target.tagName === "A") {
    e.preventDefault();

    // Extract the target ID from the href attribute
    var targetId = e.target.getAttribute("href").substring(1);

    // Find the target section using the ID
    var targetSection = document.getElementById(targetId);

    // Scroll to the target section if it exists
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Close the navigation and overlay
      overlay.classList.remove("active");
      navbar.style.display = "none";
    }
  }
});

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var subject = "New Contact Form Submission from " + name;
  var body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

  var mailtoLink =
    "mailto:dua18192@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailtoLink;

  setTimeout(function () {
    document.getElementById("successMessage").style.display = "block";
  }, 2000);
}
