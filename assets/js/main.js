/*
  Mahendra Portfolio — main.js

  Features:
  - Light/Dark mode toggle with localStorage persistence and smooth transitions
  - Mobile navigation (hamburger)
  - Active link highlighting on scroll
  - Reveal-on-scroll animations via IntersectionObserver
  - Contact form submission to Google Sheets Apps Script endpoint

  IMPORTANT: Replace GOOGLE_SCRIPT_URL with your existing Apps Script web app URL from your repo.
*/

// ---------- Theme Toggle ----------
const THEME_KEY = "mahendra-theme";
const body = document.body;
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// initialize theme ASAP (avoid FOUC)
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || (!saved && prefersDark)) {
    body.classList.add("dark");
  }
})();

const modeToggle = document.getElementById("modeToggle");
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem(THEME_KEY, body.classList.contains("dark") ? "dark" : "light");
  });
}

// ---------- Mobile Navigation ----------
const navToggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("primary-nav");

function setNav(open) {
  if (!navList || !navToggle) return;
  navList.style.display = open ? "flex" : "none";
  navToggle.setAttribute("aria-expanded", String(open));
}

if (navToggle && navList) {
  setNav(false);
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNav(!isOpen);
  });

  // close menu on link click (mobile)
  navList.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setNav(false))
  );
}

// ---------- Active Link on Scroll ----------
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScrollHighlight() {
  let current = "";
  const scrollY = window.scrollY + 120; // offset for sticky header
  sections.forEach((section) => {
    const top = section.offsetTop;
    if (scrollY >= top) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", onScrollHighlight);
onScrollHighlight();

// ---------- Reveal on Scroll ----------
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// ---------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// ---------- Contact Form (Google Sheets) ----------
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");
const submitBtn = document.getElementById("contact-submit");

// TODO: Paste your existing published Apps Script URL here
// Example: const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfyc.../exec";
const GOOGLE_SCRIPT_URL = ""; // <-- REQUIRED

async function handleSubmit(e) {
  e.preventDefault();
  if (!form || !statusEl || !submitBtn) return;

  // Basic validation
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    statusEl.textContent = "Please fill in all required fields.";
    statusEl.className = "form-status error";
    return;
  }

  if (!GOOGLE_SCRIPT_URL) {
    statusEl.textContent = "Setup required: Paste your Google Apps Script URL in assets/js/main.js.";
    statusEl.className = "form-status error";
    return;
  }

  try {
    submitBtn.disabled = true;
    statusEl.textContent = "Sending...";
    statusEl.className = "form-status";

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Apps Script often requires no-cors for simple POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // With no-cors we can't inspect status; treat as success if no exception
    form.reset();
    statusEl.textContent = "Message sent successfully!";
    statusEl.className = "form-status success";
  } catch (err) {
    statusEl.textContent = "Something went wrong. Please try again or email me directly.";
    statusEl.className = "form-status error";
    console.error("[contact] error:", err);
  } finally {
    submitBtn.disabled = false;
  }
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}