// Smooth Scrolling for Internal Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Scroll to the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error(`Element with ID '${targetId}' not found.`);
        }
    });
});

// Carousel Auto-Cycle
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#mainCarousel');
    if (carousel) {
        const bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000, // Change slide every 5 seconds
            ride: 'carousel'
        });
    }
});

// Back-to-Top Button
(function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerText = "↑ Top";
    backToTop.className = "btn btn-success back-to-top";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "1000";

    document.body.appendChild(backToTop);

    // Scroll to the top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
})();