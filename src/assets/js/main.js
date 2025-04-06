document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamic content updates can be added here
    console.log("JavaScript loaded successfully!");
});

document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('[data-video-container]');
    
    if (videoContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const iframe = entry.target.querySelector('iframe');
                const currentSrc = iframe.src;
                
                if (entry.isIntersecting) {
                    if (!currentSrc.includes('autoplay=1')) {
                        iframe.src = `${currentSrc}&autoplay=1`;
                    }
                } else {
                    iframe.src = currentSrc.replace('&autoplay=1', '');
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(videoContainer);
    }
});