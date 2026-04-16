<FILE filename="script.js">
// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Close mobile menu
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Message sent successfully! (Frontend demo — real backend coming soon 🔥)");
  this.reset();
});

console.log("%cPortfolio loaded successfully 🚀", "color: #3b82f6; font-size: 14px; font-weight: bold");
</FILE>