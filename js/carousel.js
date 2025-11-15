document.addEventListener('DOMContentLoaded', function() {
    // Initialize Services Carousel
    const servicesCarousel = document.getElementById('services-carousel');
    const servicesContainer = servicesCarousel.querySelector('.carousel-container');
    const prevServiceBtn = document.getElementById('prev-service');
    const nextServiceBtn = document.getElementById('next-service');
    
    // Initialize Projects Carousel
    const projectsCarousel = document.getElementById('projects-carousel');
    const projectsContainer = projectsCarousel ? projectsCarousel.querySelector('.carousel-container') : null;
    const prevProjectBtn = document.getElementById('prev-project');
    const nextProjectBtn = document.getElementById('next-project');

    // Function to initialize carousel
    function initCarousel(carousel, container, prevBtn, nextBtn) {
        if (!carousel || !container) return;
        
        const cardWidth = 320; // Width of each card + gap
        let isDragging = false;
        let startX, scrollLeft, timeoutId;

        // Mouse drag functionality
        const startDragging = (e) => {
            isDragging = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.scrollBehavior = 'auto';
            container.style.cursor = 'grabbing';
        };

        const stopDragging = () => {
            isDragging = false;
            container.style.scrollBehavior = 'smooth';
            container.style.cursor = 'grab';
        };

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            container.scrollLeft = scrollLeft - walk;
        };

        // Navigation buttons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });
        }

        // Touch events for mobile
        container.addEventListener('touchstart', (e) => {
            startDragging(e.touches[0]);
        });

        container.addEventListener('touchmove', (e) => {
            dragging(e.touches[0]);
        });

        container.addEventListener('touchend', stopDragging);

        // Mouse events for desktop
        container.addEventListener('mousedown', startDragging);
        container.addEventListener('mousemove', dragging);
        container.addEventListener('mouseup', stopDragging);
        container.addEventListener('mouseleave', stopDragging);

        // Show/hide navigation buttons on hover
        carousel.addEventListener('mouseenter', () => {
            if (prevBtn) prevBtn.style.opacity = '1';
            if (nextBtn) nextBtn.style.opacity = '1';
        });

        carousel.addEventListener('mouseleave', () => {
            if (prevBtn) prevBtn.style.opacity = '0';
            if (nextBtn) nextBtn.style.opacity = '0';
        });
    }

    // Initialize both carousels
    initCarousel(servicesCarousel, servicesContainer, prevServiceBtn, nextServiceBtn);
    
    if (projectsCarousel && projectsContainer) {
        initCarousel(projectsCarousel, projectsContainer, prevProjectBtn, nextProjectBtn);
    }
});
