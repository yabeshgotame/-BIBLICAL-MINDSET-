// Blog Data - Add new posts here
const blogs = [
  {
    id: 1,
    title: "Faith Over Fear",
    image: "images/faith-over-fear.jpg",
    date: "March 27, 2025",
    excerpt: "Biblical strategies for overcoming anxiety in modern life",
    file: "faith-over-fear.html",
    tags: ["faith", "fear", "anxiety"],
    metaDesc: "Learn biblical strategies to overcome fear and anxiety in your daily life"
  },
  {
    id: 2,
    title: "The Parables of Jesus",
    image: "images/parable-jesus.jpg",
    date: "March 25, 2025",
    excerpt: "Timeless lessons from Jesus' teachings",
    file: "parable-jesus.html",
    tags: ["jesus", "parables", "teachings"],
    metaDesc: "Explore the deep wisdom in Jesus' parables for modern application"
  }
  // Add new blogs below this line
];

// Render Blogs to HTML
function renderBlogs() {
  const container = document.getElementById('blog-container');
  
  // Sort by date (newest first)
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  sortedBlogs.forEach(blog => {
    container.innerHTML += `
      <article class="blog-card" data-tags="${blog.tags.join(',')}">
        <a href="blogs/${blog.file}" class="blog-link">
          <div class="blog-image">
            <img src="${blog.image}" alt="${blog.title}" loading="lazy">
          </div>
          <div class="blog-content">
            <time datetime="${new Date(blog.date).toISOString()}">${blog.date}</time>
            <h2>${blog.title}</h2>
            <p>${blog.excerpt}</p>
            <span class="read-more">Read Article →</span>
          </div>
        </a>
      </article>
    `;
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderBlogs();
  document.getElementById('year').textContent = new Date().getFullYear();
});
