// All blog data in one place for easy management
const blogs = [
    {
        id: 1,
        title: "The Parables of Jesus",
        image: "images/parable-jesus.png",
        date: "March 25, 2025",
        excerpt: "Timeless wisdom from Jesus' teachings",
        file: "parable-jesus.html",
        tags: ["Jesus", "teachings", "wisdom"]
    },
    {
        id: 2,
        title: "Faith Over Fear",
        image: "images/faith-over-fear.png",
        date: "March 27, 2025",
        excerpt: "Biblical strategies to overcome anxiety",
        file: "faith-over-fear.html",
        tags: ["faith", "fear", "anxiety"]
    }
    // Add new blogs here following the same format
];

// Function to render blogs
function renderBlogs() {
    const container = document.getElementById('blog-container');
    
    // Sort by date (newest first)
    const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedBlogs.forEach(blog => {
        container.innerHTML += `
            <article class="neon-blog-card">
                <a href="blogs/${blog.file}">
                    <div class="blog-image-container">
                        <img src="${blog.image}" alt="${blog.title}" class="blog-image" loading="lazy">
                        <div class="neon-overlay"></div>
                    </div>
                    <div class="blog-content">
                        <time datetime="${new Date(blog.date).toISOString()}">${blog.date}</time>
                        <h2>${blog.title}</h2>
                        <p>${blog.excerpt}</p>
                        <span class="neon-read-more">Read More <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>
            </article>
        `;
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderBlogs();
    document.getElementById('year').textContent = new Date().getFullYear();
});
