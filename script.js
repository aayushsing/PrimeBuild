function toggleMenu() {
  document.getElementById('navbar').classList.toggle('show');
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  this.reset();
});
