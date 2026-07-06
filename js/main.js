// ============================================================
// Swathi & Vyshakh — main.js
// ============================================================

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---------- Countdown to the wedding ----------
// Dec 6, 2026, 11:00 AM IST
const WEDDING_DATE = new Date('2026-12-06T11:00:00+05:30').getTime();

const daysEl = document.getElementById('cd-days');
const hoursEl = document.getElementById('cd-hours');
const minsEl = document.getElementById('cd-mins');
const secsEl = document.getElementById('cd-secs');

function updateCountdown() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minsEl.textContent = '0';
    secsEl.textContent = '0';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minsEl.textContent = mins;
  secsEl.textContent = secs;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- Gallery slider ----------
const gallerySlider = document.getElementById('gallerySlider');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

if (gallerySlider && galleryPrev && galleryNext) {
  const scrollByAmount = () => gallerySlider.clientWidth * 0.8;
  galleryPrev.addEventListener('click', () => {
    gallerySlider.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
  });
  galleryNext.addEventListener('click', () => {
    gallerySlider.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
  });
}

// ---------- RSVP form: AJAX submit to Netlify Forms ----------
const rsvpForm = document.getElementById('rsvpForm');
const formSuccess = document.getElementById('formSuccess');

function encodeFormData(form) {
  const data = new FormData(form);
  return new URLSearchParams(data).toString();
}

if (rsvpForm) {
  rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData(rsvpForm),
    })
      .then(() => {
        rsvpForm.style.display = 'none';
        formSuccess.style.display = 'block';
      })
      .catch(() => {
        alert("Something went wrong submitting your RSVP. Please try again or reach out to us directly.");
      });
  });
}
