function toggleMenu() {
  document.getElementById('navbar').classList.toggle('show');
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  this.reset();
});
// 1. Define your media list here:
const mediaList = [
  { type: 'image', src: 'project 1.jpg' },
  { type: 'video', src: 'project 3.mp4' },
  { type: 'image', src: 'project 2.jpg' },
  { type: 'video', src: 'project 5.mp4' },
  { type: 'image', src: 'project 2.jpg' },
  { type: 'image', src: 'home 5.jpg' },
  { type: 'video', src: 'project-video.mp4' },

  // …add as many as you like
];

let currentMedia = 0;
const modal = document.getElementById('mediaModal');
const container = document.getElementById('mediaContainer');
const btn = document.getElementById('viewWorkBtn');
const closeBtn = modal.querySelector('.close');

function showMedia(index) {
  container.innerHTML = '';               // clear previous
  const item = mediaList[index];
  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    container.appendChild(img);
  } else {
    const vid = document.createElement('video');
    vid.src = item.src;
    vid.controls = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    container.appendChild(vid);
  }
}

function changeMedia(direction) {
  currentMedia = (currentMedia + direction + mediaList.length) % mediaList.length;
  showMedia(currentMedia);
}

// Open modal
btn.addEventListener('click', () => {
  modal.style.display = 'flex';
  currentMedia = 0;
  showMedia(currentMedia);
});

// Close modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Close when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
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


