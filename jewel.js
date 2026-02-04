// Toggle Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Toggle Search Bar
const searchBtn = document.getElementById("search-btn");
const searchContainer = document.getElementById("search-container");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchContainer.classList.toggle("active");
});

// Close search when clicking outside
document.addEventListener("click", (e) => {
  if (!searchBtn.contains(e.target) && !searchContainer.contains(e.target)) {
    searchContainer.classList.remove("active");
  }
});

// Mobile dropdown toggle
document.querySelectorAll(".nav-item").forEach(item => {
  if (item.querySelector(".dropdown")) {
    item.addEventListener("click", function (e) {
      if (window.innerWidth < 968) {
        if (e.target.classList.contains("nav-link")) {
          e.preventDefault();
          const dropdown = this.querySelector(".dropdown");
          dropdown.classList.toggle("active");
        }
      }
    });
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 2rem";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "0.8rem 2rem";
    navbar.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
  }
});







        // Simple animation for elements when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeIn 1.5s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe product cards
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.opacity = '0';
                observer.observe(card);
            });
            
            // Observe testimonial cards
            document.querySelectorAll('.testimonial-card').forEach(card => {
                card.style.opacity = '0';
                observer.observe(card);
            });
        });