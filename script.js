// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }
  
  // Mobile menu toggle
  document.getElementById("mobile-menu-toggle").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("show");
  });
  
  // Contact form handling
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting Pinnacle Business Consulting!");
    this.reset();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const navbar = document.getElementById("navbar");
  
    toggleBtn.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  });
  