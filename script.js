// Update this value to change the WhatsApp contact number.
// Use country code + number without spaces or symbols, e.g. 91XXXXXXXXXX.
const WHATSAPP_NUMBER = "918428321877";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

function makeWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const whatsappContact = document.getElementById("whatsappContact");
whatsappContact.href = makeWhatsAppUrl("Hi! I visited your website and would like to discuss a project.");

document.getElementById("ideaForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const type = document.getElementById("projectType").value;
  const details = document.getElementById("ideaDetails").value.trim();
  const budget = document.getElementById("budget").value;
  const status = document.getElementById("formStatus");

  if (!name || !type || details.length < 10) {
    status.textContent = "Please complete the required fields and describe your idea in at least 10 characters.";
    return;
  }

  const message = [
    "Hi! I want to share a project idea.",
    `Name: ${name}`,
    `Project type: ${type}`,
    `Idea: ${details}`,
    `Budget: ${budget || "Not specified"}`
  ].join("\n");

  status.textContent = "Opening WhatsApp. Review your message and press Send to submit it.";
  window.open(makeWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
