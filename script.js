const posts = [
  {
    title: "Understanding Inflation 📊",
    time: "2025-06-01",
    icon: "📈",
    message: "Inflation impacts prices and wages. Here's a breakdown of its root causes and why central banks care so much.",
    side: "left"
  },
  {
    title: "A Walk in the Pink Garden 🌸",
    time: "2025-05-22",
    icon: "🌷",
    message: "A short story about finding softness and joy in the smallest moments of life.",
    side: "right"
  },
  {
    title: "Blush of Dawn — A Poem ✨",
    time: "2025-05-10",
    icon: "📝",
    message: "The sun rose pink, shy and slow / Draping light in pastel glow. 🌅",
    side: "left"
  },
  {
    title: "Market Trends Q2 Report 💼",
    time: "2025-04-30",
    icon: "📊",
    message: "Economics research into Q2's GDP trends, labor shifts, and consumer sentiment metrics.",
    side: "right"
  },
  {
    title: "How to Stay Creative 🎨",
    time: "2025-04-05",
    icon: "💡",
    message: "Tips to stay inspired while balancing artistic work and academic research.",
    side: "left"
  }
];

function loadChat() {
  const container = document.getElementById('chat-feed');

  posts.forEach(post => {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', post.side);

    bubble.innerHTML = `
      <div class="chat-icon">${post.icon}</div>
      <div class="chat-content">
        <div class="chat-title">${post.title}</div>
        <div class="chat-time">${new Date(post.time).toLocaleDateString()}</div>
        <div class="chat-text">${post.message}</div>
      </div>
    `;

    container.appendChild(bubble);
  });
}

document.addEventListener('DOMContentLoaded', loadChat);
