const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {
  if (!music) return;

  music.volume = 0.5;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log("Autoplay bloqué → click requis");
    });
  }
});

// 🔥 fallback (très important)
document.addEventListener("click", () => {
  if (music && music.paused) {
    music.play();
  }
}, { once: true });