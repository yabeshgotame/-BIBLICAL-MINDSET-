// search.js - Site-wide Search Functionality

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchModal = document.getElementById('searchModal');
    
    if(searchButton && searchInput) {
        // Sample content - in a real app this would come from an API
        const searchContent = [
            {
                title: "Fear Vs Faith: The Digital Demand",
                excerpt: "How Jesus' teachings help us navigate modern digital challenges",
                url: "blogs/fear-vs-faith.html",
                category: "Parable of Jesus"
            },
            {
                title: "The Power of Forgiveness",
                excerpt: "Biblical principles for emotional healing through forgiveness",
                url: "blogs/power-of-forgiveness.html",
                category: "Spiritual Growth"
            },
            {
                title: "Building Godly Confidence",
                excerpt: "Understanding your identity in Christ to overcome insecurity",
                url: "blogs/godly-confidence.html",
                category: "Personal Development"
            }
        ];
        
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') performSearch();
        });
        
        function performSearch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if(searchTerm === '') {
                showSearchResults([]);
                return;
            }
            
            const results = searchContent.filter(item => 
                item.title.toLowerCase().includes(searchTerm) || 
                item.excerpt.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
            
            showSearchResults(results);
        }
        
        function showSearchResults(results) {
            let resultsHTML;
            
            if(results.length === 0) {
                resultsHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No Results Found</h3>
                        <p>Try different keywords or browse our teachings</p>
                        <a href="learn.html" class="btn-outline">View All Teachings</a>
                    </div>
                `;
            } else {
                resultsHTML = `
                    <div class="search-results-header">
                        <h3>Found ${results.length} ${results.length === 1 ? 'Result' : 'Results'}</h3>
                    </div>
                    <div class="search-results-list">
                        ${results.map(item => `
                            <div class="search-result-item">
                                <div class="result-category">${item.category}</div>
                                <h4><a href="${item.url}">${item.title}</a></h4>
                                <p class="result-excerpt">${item.excerpt}</p>
                                <a href="${item.url}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            // Remove previous results if any
            const existingResults = document.querySelector('.search-results-container');
            if(existingResults) existingResults.remove();
            
            // Create and append new results
            const resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results-container';
            resultsContainer.innerHTML = resultsHTML;
            
            searchModal.appendChild(resultsContainer);
            
            // Close modal when clicking on results (for demo purposes)
            resultsContainer.addEventListener('click', function() {
                searchModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    }
});
