// article-interactions.js - Enhanced Blog Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Table of Contents Generator
    const generateTOC = () => {
        const headings = document.querySelectorAll('.article-section h2');
        if (headings.length > 2) {
            const tocContainer = document.createElement('div');
            tocContainer.className = 'table-of-contents';
            
            const tocTitle = document.createElement('h3');
            tocTitle.textContent = 'Contents';
            
            const tocList = document.createElement('ol');
            
            headings.forEach(heading => {
                if (heading.id) {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `#${heading.id}`;
                    link.textContent = heading.textContent;
                    listItem.appendChild(link);
                    tocList.appendChild(listItem);
                }
            });
            
            tocContainer.appendChild(tocTitle);
            tocContainer.appendChild(tocList);
            
            const articleIntro = document.querySelector('.article-intro');
            if (articleIntro) {
                articleIntro.after(tocContainer);
            }
        }
    };

    // Reading Progress Indicator
    const setupReadingProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.setAttribute('aria-hidden', 'true');
        
        const progressFill = document.createElement('div');
        progressFill.className = 'reading-progress-fill';
        progressBar.appendChild(progressFill);
        
        document.body.prepend(progressBar);
        
        window.addEventListener('scroll', () => {
            const article = document.querySelector('.blog-article');
            if (article) {
                const articleHeight = article.offsetHeight;
                const articleTop = article.offsetTop;
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                
                if (scrollPosition >= articleTop) {
                    const progress = Math.min(
                        ((scrollPosition - articleTop) / (articleHeight - windowHeight)) * 100,
                        100
                    );
                    progressFill.style.width = `${progress}%`;
                } else {
                    progressFill.style.width = '0%';
                }
            }
        });
    };

    // Interactive Elements
    const setupInteractiveElements = () => {
        // Make tables responsive
        document.querySelectorAll('table').forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });

        // Add copy buttons to code blocks
        document.querySelectorAll('pre code').forEach(codeBlock => {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-code';
            copyButton.innerHTML = '<i class="far fa-copy"></i>';
            copyButton.setAttribute('aria-label', 'Copy code');
            
            const pre = codeBlock.parentNode;
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
            
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(codeBlock.textContent)
                    .then(() => {
                        copyButton.innerHTML = '<i class="fas fa-check"></i>';
                        setTimeout(() => {
                            copyButton.innerHTML = '<i class="far fa-copy"></i>';
                        }, 2000);
                    });
            });
        });
    };

    // Initialize all features
    generateTOC();
    setupReadingProgress();
    setupInteractiveElements();
});
