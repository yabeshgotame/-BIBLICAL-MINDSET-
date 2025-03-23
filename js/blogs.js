const blogs = [
  {
    title: "The Parables of Jesus: Timeless Lessons for Today",
    image: "images/parable-jesus.png",
    date: "March 20, 2025",
    link: "blogs/parable.html",
    keywords: ["parable", "Jesus", "sower", "prodigal son", "good samaritan"],
    verses: ["Matthew 13:1-23", "Luke 15:11-32", "Luke 10:25-37"]
  },
  {
    title: "Finding Hope in Difficult Times",
    image: "images/hope.png",
    date: "March 25, 2025",
    link: "blogs/hope.html",
    keywords: ["hope", "difficult times", "trust", "God's plan"],
    verses: ["Romans 15:13", "Jeremiah 29:11"]
  }
];

const blogContainer = document.getElementById('blog-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Function to display blogs
function displayBlogs(filteredBlogs) {
  blogContainer.innerHTML = ''; // Clear existing blogs
  if (filteredBlogs.length === 0) {
    blogContainer.innerHTML = `
      <div class="no-results">
        <p>No blogs found for your search. Try searching for: <strong>parable, hope, faith</strong></p>
      </div>
    `;
  } else {
    filteredBlogs.forEach(blog => {
      const blogCard = document.createElement('div');
      blogCard.classList.add('blog-card');
      blogCard.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <h2>${blog.title}</h2>
        <p>Published on: ${blog.date}</p>
        <a href="${blog.link}">Read More</a>
      `;
      blogContainer.appendChild(blogCard);
    });
  }
}

// Initial display of all blogs
displayBlogs(blogs);

// Search functionality
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm) ||
    blog.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm)) ||
    blog.verses.some(verse => verse.toLowerCase().includes(searchTerm))
  );
  displayBlogs(filteredBlogs);
});

// Allow pressing "Enter" to search
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});
