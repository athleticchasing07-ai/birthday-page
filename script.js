// SET BIRTHDAY DATE
const target = new Date("2025-01-09 00:00:00").getTime();
const timer = document.getElementById("timer");
const lock = document.getElementById("lock");
const content = document.getElementById("content");

// COUNTDOWN
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    lock.style.display = "none";
    content.classList.remove("hidden");
  } else {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }
}, 1000);

// MODAL POPUP
function openModal(date, text) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  modal.classList.add("show");
  document.getElementById("modalDate").innerText = date;
  document.getElementById("modalText").innerText = text;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 400); // smooth hide
}

// MUSIC BUTTON
function playMusic() {
  document.getElementById("music").play();
}

// FLOATING HEARTS EFFECT
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);
