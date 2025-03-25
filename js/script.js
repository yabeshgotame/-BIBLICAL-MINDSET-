// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Social Sharing Functionality
function setupSocialSharing() {
  const currentUrl = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  
  // Facebook Share
  document.querySelectorAll('.facebook-share').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
    });
  });
  
  // Twitter Share
  document.querySelectorAll('.twitter-share').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(`https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`, '_blank');
    });
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  setupSocialSharing();
});
