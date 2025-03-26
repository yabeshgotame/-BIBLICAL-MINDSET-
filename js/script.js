// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Search Bar Toggle (for Blogs Page)
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

if (searchIcon && searchBar) {
  searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
  });
}
