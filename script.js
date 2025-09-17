  const video = document.getElementById('video-bg');

  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
  });

  setInterval(() => {
    if (video.paused) video.play();
  }, 1000);

  const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');

// Duplicar los slides para animación infinita
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slidesContainer.appendChild(clone);
});
