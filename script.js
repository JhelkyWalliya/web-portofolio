//  const roles = ["Jhelky Walliya","Web Developer", "UI/UX Designer"];
//     let currentIndex = 0;
//     const textElement = document.getElementById("animated-text");

//     function changeText() {
//         textElement.classList.add("opacity-0"); // mulai fade out

//         setTimeout(() => {
//             textElement.textContent = roles[currentIndex]; // ganti teks
//             textElement.classList.remove("opacity-0");     // fade in lagi
//             currentIndex = (currentIndex + 1) % roles.length; // loop ke teks berikutnya
//         }, 500);
//     }




    // Slider Text Animation
const texts = ["Web Developer", "UI/UX Designer", "Freelancer"];
let currentIndex = 0;
let currentChar = 0;
let isDeleting = false;
const speed = 100; // kecepatan ketik per huruf
const pause = 2000; // jeda sebelum ganti teks
const typewriter = document.getElementById("typewriterText");

function typeEffect() {
  const currentText = texts[currentIndex];
  if (isDeleting) {
    currentChar--;
    typewriter.textContent = currentText.substring(0, currentChar);
    if (currentChar === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, speed / 2);
    }
  } else {
    currentChar++;
    typewriter.textContent = currentText.substring(0, currentChar);
    if (currentChar === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, pause);
    } else {
      setTimeout(typeEffect, speed);
    }
  }
}

// Mulai animasi
typeEffect();




document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');

        // Update ARIA attributes
        hamburgerBtn.setAttribute('aria-expanded', isHidden);
        mobileMenu.setAttribute('aria-hidden', !isHidden);
    }

    // Event Listeners
    hamburgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (
            !event.target.closest('nav') &&
            !mobileMenu.classList.contains('hidden')
        ) {
            toggleMenu();
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function () {
        if (
            window.innerWidth >= 1024 &&
            !mobileMenu.classList.contains('hidden')
        ) {
            toggleMenu();
        }
    });

    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Close mobile menu after click
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });
});




