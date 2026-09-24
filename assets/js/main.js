document.querySelectorAll(".media-load").forEach((button) => {
  button.addEventListener("click", () => {
    const { embedSrc, embedTitle } = button.dataset;

    if (!embedSrc || !embedTitle) {
      return;
    }

    const player = document.createElement("iframe");
    player.className = "media-embed";
    player.src = embedSrc;
    player.title = embedTitle;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;

    button.replaceWith(player);
    player.focus();
  });
});

const contactForm = document.querySelector(".contact-form");
const contactButton = contactForm?.querySelector('button[type="submit"]');
const contactAddress = document
  .querySelector('.contact a[href^="mailto:"]')
  ?.getAttribute("href");

if (contactForm && contactButton && contactAddress) {
  contactButton.disabled = false;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = new FormData(contactForm);
    const name = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const message = String(fields.get("message") || "").trim();

    const subject = encodeURIComponent(`Waking Johnny inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `${contactAddress}?subject=${subject}&body=${body}`;
  });
}
