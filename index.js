// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      // Scroll to target
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Add animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".product-card, .floating");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
    }
  });
}

// Set initial opacity for animated elements
document.querySelectorAll(".product-card, .floating").forEach((el) => {
  el.style.opacity = "0";
  el.style.transition = "opacity 0.6s ease-out, transform 0.3s ease";
});

// Run animations when page loads and on scroll
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
