 const roles = ["Jhelky Walliya","Web Developer", "UI/UX Designer"];
    let currentIndex = 0;
    const textElement = document.getElementById("animated-text");

    function changeText() {
        textElement.classList.add("opacity-0"); // mulai fade out

        setTimeout(() => {
            textElement.textContent = roles[currentIndex]; // ganti teks
            textElement.classList.remove("opacity-0");     // fade in lagi
            currentIndex = (currentIndex + 1) % roles.length; // loop ke teks berikutnya
        }, 500);
    }

    changeText(); // tampilkan pertama kali
    setInterval(changeText, 3000); // ganti tiap 3 detik

  document.addEventListener('DOMContentLoaded', function () {
        const toggleBtn = document.querySelector('.lg\\:hidden a');
        const navLinks = document.querySelector('nav > div:nth-child(3)');
        
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });
    });






