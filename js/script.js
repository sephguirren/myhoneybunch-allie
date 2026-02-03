// ================= ELEMENTS =================
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const flowers = document.querySelector(".flowers");
const text = document.getElementById("typeText");
const message = document.querySelector(".valentine-text");
const hearts = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");

// ================= LOVE MESSAGE =================
const loveMessage =
  "Every moment with you feels like magic. You are my favorite person, my happiness, my forever.";

let i = 0;
let heartInterval = null;

// ================= UNFREEZE ANIMATIONS =================
window.addEventListener("load", () => {
  document.body.classList.remove("not-loaded");
});

// ================= TYPEWRITER =================
function typeWriter() {
  if (i < loveMessage.length) {
    text.textContent += loveMessage.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// ================= HEARTS =================
function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.animationDuration = "4s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

// ================= MAIN SEQUENCE =================
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  music.play();

  // Start hearts
  heartInterval = setInterval(createHeart, 300);

  // Show letter
  setTimeout(() => {
    envelope.style.display = "none";
    letter.classList.remove("hidden");
    typeWriter();
  }, 900);

  // Show flowers
  setTimeout(() => {
    letter.style.display = "none";
    flowers.classList.remove("hidden");
  }, 5200);

  // Show Valentine message
  setTimeout(() => {
    message.classList.add("show-message");
    clearInterval(heartInterval);
  }, 9500);
});
