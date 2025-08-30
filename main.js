
  const loader = document.getElementById("loader");
  const start = Date.now();

  window.addEventListener("load", () => {
    const elapsed = Date.now() - start;
    const delay = Math.max(0, 2000 - elapsed);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, delay);
  });

    const carousel = document.getElementById('carousel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let index = 0;

    function showSlide() {
        const itemWidth = carousel.children[0].offsetWidth + 30;
        const offset = -index * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : carousel.children.length - 5;
        showSlide();
    });

    next.addEventListener('click', () => {
        index = (index < carousel.children.length - 5) ? index + 1 : 0;
        showSlide();
    });

    window.addEventListener('resize', showSlide);

    showSlide();

    // =================================
// HAMBURGER MENU FUNCTIONALITY
// =================================

// Add this to your main.js file

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;

    // Toggle mobile menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        body.classList.toggle('mobile-menu-open');
        
        // Toggle display
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.style.display = 'flex';
            mobileMenuOverlay.style.display = 'block';
        } else {
            setTimeout(() => {
                mobileMenu.style.display = 'none';
                mobileMenuOverlay.style.display = 'none';
            }, 400); // Wait for animation to complete
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('mobile-menu-open');
        
        setTimeout(() => {
            mobileMenu.style.display = 'none';
            mobileMenuOverlay.style.display = 'none';
        }, 400);
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on menu links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            closeMobileMenu();
        }
    });

    // Prevent body scroll when menu is open
    mobileMenu.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
});

// Make closeMobileMenu globally accessible for onclick attributes
function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.classList.remove('mobile-menu-open');
    
    setTimeout(() => {
        mobileMenu.style.display = 'none';
        mobileMenuOverlay.style.display = 'none';
    }, 400);
}