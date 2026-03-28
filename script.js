// script.js - Minimal interactions for artist portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: add a subtle fade-in effect to artworks on scroll
    const artworks = document.querySelectorAll('.artwork');
    
    // Initial setup
    artworks.forEach(artwork => {
        artwork.style.opacity = '0';
        artwork.style.transform = 'translateY(20px)';
        artwork.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    artworks.forEach(artwork => {
        observer.observe(artwork);
    });
});
