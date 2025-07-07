const btn = document.getElementById('magicBtn');
const msg = document.getElementById('message');

const messages = [
  "You're awesome! 💫",
  "Believe in yourself 🌟",
  "Magic is real 🧙",
  "You can do anything 🚀",
  "You're a star! ⭐"
];

btn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * messages.length);
  msg.textContent = messages[random];
});
