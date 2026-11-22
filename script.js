const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll(".animation-card").forEach((card) => {
  const media = card.querySelector("video");
  if (!media) return;

  media.controls = true;
  media.playsInline = true;

  const actions = card.querySelector(".animation-body");
  const fullscreenButton = document.createElement("button");
  fullscreenButton.type = "button";
  fullscreenButton.className = "download-button";
  fullscreenButton.textContent = "Fullscreen";
  fullscreenButton.addEventListener("click", async () => {
    try {
      await media.requestFullscreen();
    } catch {
      fullscreenButton.textContent = "Fullscreen unavailable";
    }
  });
  actions.append(fullscreenButton);
});
