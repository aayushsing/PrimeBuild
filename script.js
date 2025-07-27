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
 // Show confirmation when trying to close or reload
  window.addEventListener("beforeunload", function (e) {
    // Show browser's native confirmation dialog
    e.preventDefault();
    e.returnValue = ""; // Required for Chrome
  });

  // Optional: small visual popup when user moves mouse to close tab
  document.addEventListener("mouseout", function (e) {
    if (e.clientY < 0) {
      document.getElementById("exitPopup").style.display = "block";
    }
  });

  function stayOnPage() {
    document.getElementById("exitPopup").style.display = "none";
  }

  function closeTab() {
    window.close(); // May not work unless tab was opened via JS
    document.getElementById("exitPopup").innerHTML = "<p>Use browser close button to exit.</p>";
  }

