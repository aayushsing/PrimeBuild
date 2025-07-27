function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('active');
}

// Optional: Smooth scroll behavior for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Handle form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent successfully!');
});
