function toggleMenu() {
  document.getElementById('navbar').classList.toggle('show');
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  this.reset();
});
<script>
  const slider = document.getElementById("slider");
  const dotsContainer = document.getElementById("dots");
  const totalSlides = slider.children.length;
  let currentSlide = 0;
  let slideInterval;

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.children;
  updateDots();

  function goToSlide(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  }

  function updateDots() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[currentSlide].classList.add("active");
  }

  // Auto Slide
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Pause on hover
  const sliderContainer = document.getElementById("slider-container");
  sliderContainer.addEventListener("mouseover", stopAutoSlide);
  sliderContainer.addEventListener("mouseout", startAutoSlide);

  startAutoSlide();
</script>
