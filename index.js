const bgImageEl = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
  updateImage();
});

function updateImage() {
  const scrollOffset = window.scrollY; // Replaces `pageYOffset`
  
  bgImageEl.style.opacity = 1 - scrollOffset / 900;
  bgImageEl.style.backgroundSize = (160 - scrollOffset / 12) + "%";
}
