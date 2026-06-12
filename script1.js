const videoPage = document.getElementById("videoPage");
const mainPage = document.getElementById("mainPage");
const introVideo = document.getElementById("introVideo");

const noBtn = document.getElementById("no");
const heart = document.getElementById("heart");

const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");
const container = document.getElementById("container");


// ❌ NO BUTTON
noBtn.addEventListener("click", () => {

    // ❤️ heart animation
    heart.style.display = "block";
    heart.style.animation = "none";
    void heart.offsetWidth;
    heart.style.animation =
        "splitLeft 1s forwards, splitRight 1s forwards";

    setTimeout(() => {
        heart.style.display = "none";
    }, 1000);

    // 🎬 show video
    videoPage.style.display = "flex";
    mainPage.style.display = "none";

    introVideo.currentTime = 0;
    introVideo.play();

    // 🎯 video ends → redirect to page2.html
    introVideo.onended = function () {
        window.location.href = "page2.html";
    };
});


// 😏 YES MOVE
const messages = [
    "ay ay ay don't touch me 😤",
    "ayy stoppp 😳",
    "ayyyy leave me alone 😭",
    "nooo nooo stooppp 😂",
    "you can't catch me hahaha 😆"
];

function updateMsg(){
    const i = Math.floor(Math.random() * messages.length);
    msg.textContent = messages[i];
}

function move(){

    const maxX = window.innerWidth - 250;
    const minX = 20;

    const minY = 180;
    const maxY = window.innerHeight - 250;

    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;

    container.style.left = x + "px";
    container.style.top = y + "px";

    updateMsg();
}

yesBtn.addEventListener("mouseover", move);
yesBtn.addEventListener("click", move);
