const posts = [
  {
    id: 1,
    category: "Blog Post",
    title: "Understanding Inflation",
    date: "2025-06-01",
    excerpt: "Inflation impacts everything from prices to wages. Let's explore its causes and consequences in this simple guide.",
    url: "#"
  },
  {
    id: 2,
    category: "Blog Post",
    title: "How to Stay Creative",
    date: "2025-05-15",
    excerpt: "Some tips and tricks to keep your creativity flowing whether you’re writing poems or working on economics research.",
    url: "#"
  },
  {
    id: 3,
    category: "Story",
    title: "A Walk in the Pink Garden",
    date: "2025-04-20",
    excerpt: "A short story about finding beauty in unexpected places and embracing the softness of life.",
    url: "#"
  },
  {
    id: 4,
    category: "Poem",
    title: "Blush of Dawn",
    date: "2025-03-10",
    excerpt: "A poem celebrating the gentle pink hues of morning and new beginnings.",
    url: "#"
  },
  {
    id: 5,
    category: "Research",
    title: "Market Trends Q2 2025",
    date: "2025-06-05",
    excerpt: "An analysis of market trends and economic indicators for the second quarter of 2025.",
    url: "#"
  }
];

function loadPosts() {
  const container = document.getElementById('posts-container');
  
  posts.forEach(post => {
    const postEl = document.createElement('article');
    postEl.classList.add('post');
    
    postEl.innerHTML = `
      <h3>${post.title} <small style="font-weight: 400; font-size: 0.8rem; color: #FF9CAC;">[${post.category}]</small></h3>
      <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(undefined, {year:'numeric', month:'long', day:'numeric'})}</time>
      <p>${post.excerpt}</p>
      <a href="${post.url}">Read More</a>
    `;

    container.appendChild(postEl);
  });
}

// Load posts on page load
document.addEventListener('DOMContentLoaded', loadPosts);
