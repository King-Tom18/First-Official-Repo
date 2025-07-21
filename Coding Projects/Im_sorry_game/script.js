const forgiveBtn = document.getElementById("forgiveBtn");
const notYetBtn = document.getElementById("notYetBtn");
const noBtnWrapper = document.getElementById("noBtnWrapper");
const response = document.getElementById("response");
const heartContainer = document.getElementById("heart-container");

// 💚 Forgiveness logic
forgiveBtn.addEventListener("click", function () {
  response.textContent = "Thank you, Dad. I promise to be better. From the bottom of my heart. ❤";
  launchHearts();
});

// 😅 Teasing logic when trying to click "No"
notYetBtn.addEventListener("click", function () {
  response.textContent = "Nice try 😏... but forgiveness is your destiny.";
});

// 🖱 Mouse move = No button dodges
document.addEventListener("mousemove", function (e) {
  handleButtonEvade(e.clientX, e.clientY);
});

// 📱 Touch = No button dodges (mobile)
document.addEventListener("touchstart", function (e) {
  const touch = e.touches[0];
  if (touch) {
    handleButtonEvade(touch.clientX, touch.clientY);
  }
});

// 🏃 Evade logic
function handleButtonEvade(x, y) {
  const btnRect = notYetBtn.getBoundingClientRect();
  const distance = Math.hypot(
    x - (btnRect.left + btnRect.width / 2),
    y - (btnRect.top + btnRect.height / 2)
  );

  if (distance < 100) {
    const xPos = Math.random() * (window.innerWidth - 150);
    const yPos = Math.random() * (window.innerHeight - 80);

    noBtnWrapper.style.position = "absolute";
    noBtnWrapper.style.left = xPos + "px";
    noBtnWrapper.style.top = yPos + "px";
  }
}

// 💕 Hearts animation
function launchHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.innerHTML = "❤";
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}