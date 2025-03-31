document.addEventListener("DOMContentLoaded", function () {
    // 🌙 Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
        });

        // Apply saved theme preference
        if (localStorage.getItem("dark-mode") === "true") {
            document.body.classList.add("dark-mode");
        }
    }

    // 📩 Contact Form Handling
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            formMessage.classList.remove("hidden");
            contactForm.reset();
        });
    }

    // 🏆 Achievement Image Carousel
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel, index) => {
        const images = carousel.querySelectorAll(".image-container img");
        let currentIndex = 0;

        function updateImages() {
            images.forEach(img => img.classList.remove("active"));
            images[currentIndex].classList.add("active");
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImages();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImages();
        }

        carousel.querySelector(".next").addEventListener("click", nextSlide);
        carousel.querySelector(".prev").addEventListener("click", prevSlide);

        updateImages(); // Initialize the first image

        // ⌨️ Add keyboard arrow key functionality
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") nextSlide();
            if (event.key === "ArrowLeft") prevSlide();
        });
    });
});
