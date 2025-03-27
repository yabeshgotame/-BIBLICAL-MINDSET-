// main.js - Core Functionality for All Pages

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
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
    
    // Search Modal Toggle
    const searchIcon = document.getElementById('searchIcon');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.querySelector('.close-search');
    
    if(searchIcon && searchModal) {
        searchIcon.addEventListener('click', function() {
            searchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
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
    }
    
    // FAQ Accordion for Prayer Page
    const faqItems = document.querySelectorAll('.faq-item');
    if(faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close Sidebar When Clicking on Links
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });
});
