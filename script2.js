let stickerInterval = setInterval(createSticker, 100);
let clickCount = 0; // compteur des clics sur Sorry

// 🟡 OLD stickers system (running before click)
function createSticker() {
  const sticker = document.createElement("img");

  sticker.src = "stiker_mad1.gif";
  sticker.classList.add("flying-sticker");

  sticker.style.left = Math.random() * window.innerWidth + "px";
  sticker.style.top = Math.random() * window.innerHeight + "px";

  sticker.style.animationDuration = (3 + Math.random() * 4) + "s";
  sticker.style.width = (40 + Math.random() * 40) + "px";

  document.body.appendChild(sticker);

  setTimeout(() => {
    sticker.remove();
  }, 7000);
}


// 💥 NEW stickers (ALL 4 appear together)
function showNewStickers() {

  const stickers = [
    "sorry.gif",
    "sorry2.gif",
    "sad-sorry.gif",
    "cat-kitty.gif"
  ];

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 40; i++) {

    const sticker = document.createElement("img");

    // 🎯 random sticker
    sticker.src = stickers[Math.floor(Math.random() * stickers.length)];

    sticker.classList.add("flying-sticker");

    // 📍 start position
    sticker.style.left = centerX + "px";
    sticker.style.top = centerY + "px";

    // 🎯 spread movement
    const x = (Math.random() * 600 - 300);
    const y = (Math.random() * 600 - 300);

    sticker.style.setProperty("--x", x + "px");
    sticker.style.setProperty("--y", y + "px");

    sticker.style.animation = "explodeMove 2s ease-out forwards";

    // ⭐ visible size
    sticker.style.width = (100 + Math.random() * 30) + "px";

    // ⭐ visible
    sticker.style.opacity = "1";

    document.body.appendChild(sticker);

    setTimeout(() => {
      sticker.remove();
    }, 30000);
  }
}


// 🔥 MAIN LOGIC
document.addEventListener("DOMContentLoaded", () => {

  const backBtn = document.getElementById("backBtn");
  const sorryBtn = document.getElementById("sorryBtn");

  // 🔙 BACK
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // 💔 SORRY
  if (sorryBtn) {
    sorryBtn.addEventListener("click", () => {

      // ➕ ajouter 1 clic
      clickCount++;

      // ❌ STOP OLD stickers
      clearInterval(stickerInterval);

      // 💥 SHOW NEW stickers
      showNewStickers();

      // ❤️ après 20 clics → Page 3
      if (clickCount >= 10) {
        window.location.href = "page3.html";
      }
    });
  }

});