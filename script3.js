document.addEventListener("DOMContentLoaded", () => {

const buttons = document.querySelectorAll(".cute-btn");
const imagePanel = document.getElementById("image_jrada");
const finalBtn = document.getElementById("finalBtn");

const data = [
  { text: "jarda", images: ["jrada.png"] },
  { text: "Chajra", images: ["tree_fanny.jpg"] },
  { text: "Chkilita", images: ["chkilita.jpg"] },
  { text: "9ri9irty", images: ["frog.jpg"] },

  {
    text: "Eating & sleeping under people 😂",
    images: ["eatinng.jpg"],
    video: "hobby.mp4"
  },

  { text: "dima kahdraaa", images: ["raja.jpg"] },
  { text: "A777 my type ", images: ["my_type.jpeg"] },
  { text: "my Doll", images: ["hellokity.jpg"] }
];

let clicked = new Set();

buttons.forEach((btn, index) => {

  btn.addEventListener("click", () => {

    btn.classList.remove("clicked");
    void btn.offsetWidth;
    btn.classList.add("clicked");

    const checkItem = document.getElementById("c" + (index + 1));

    if (checkItem && !clicked.has(index)) {
      checkItem.classList.add("done");
      checkItem.innerHTML = "✔ " + checkItem.innerText.replace("⬜ ", "");
      clicked.add(index);
    }

    imagePanel.innerHTML = "";

    const title = document.createElement("h3");
    title.innerText = data[index].text;
    title.classList.add("comic-title");
    imagePanel.appendChild(title);

    if (data[index].images) {
      data[index].images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("panel-img");
        imagePanel.appendChild(img);
      });
    }

    if (data[index].video) {
      const video = document.createElement("video");
      video.src = data[index].video;
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.classList.add("panel-video");
      imagePanel.appendChild(video);
    }

    if (clicked.size === buttons.length) {
      finalBtn.classList.add("active");
      finalBtn.disabled = false;
      finalBtn.innerText = "✔ All completed 💖 Click to continue";
    }

  });

});

finalBtn.addEventListener("click", () => {
  if (clicked.size !== buttons.length) return;
  window.location.href = "page4.html";
});
const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "page2.html"; // ⚠️ vérifie le nom exact de ta page 2
  });
}
});