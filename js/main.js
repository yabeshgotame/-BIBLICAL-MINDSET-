// Enhanced main.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        sidebar.classList.toggle('open');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
    });
    
    sidebarClose.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
    
    // Search Functionality
    const searchToggle = document.getElementById('searchToggle');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    if(searchToggle) {
        searchToggle.addEventListener('click', function() {
            searchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            searchInput.focus();
        });
    }
    
    closeSearch.addEventListener('click', function() {
        searchModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if(e.target === searchModal) {
            searchModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Search functionality
    if(searchButton) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') performSearch();
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if(query.length < 3) {
            searchResults.innerHTML = '<p>Please enter at least 3 characters</p>';
            return;
        }
        
        // Simulate search (in a real app, this would be an API call)
        searchResults.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Searching...</div>';
        
        setTimeout(() => {
            // This would be replaced with actual search results
            searchResults.innerHTML = `
                <div class="search-result">
                    <h3><a href="blogs/fear-vs-faith.html">Faith Over Fear: Biblical Strategies</a></h3>
                    <p>Discover how ancient Scripture speaks to modern anxieties in our technology-driven world.</p>
                </div>
                <div class="search-result">
                    <h3><a href="learn.html">Overcoming Fear Through Scripture</a></h3>
                    <p>Key Bible verses to help combat fear and anxiety in daily life.</p>
                </div>
                <div class="search-result">
                    <h3><a href="blogs/power-of-forgiveness.html">The Power of Forgiveness</a></h3>
                    <p>Release offense and experience emotional freedom through Christ.</p>
                </div>
            `;
        }, 800);
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if(faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close sidebar when clicking on links
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Lazy loading images
    if('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});
