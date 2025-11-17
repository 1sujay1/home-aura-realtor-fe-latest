const projects = [
  {
    id: 1,
    title: "Paradise On Earth",
    type: "4BHK, 4.5BHK, 5BHK Villas",
    location: "Kanakapura Road, Bangalore",
    price: "₹3.17 Cr Onwards",
    image: "/image/urbanrise.jpg",
    builder: "URBANRISE",
    builderClass: "bg-blue-600",
    detailsUrl: "/urbanrise-paradise-on-earth-luxury-villa",
    animationDelay: "0.1s"
  },
  {
    id: 2,
    title: "Lakeside Orchard",
    type: "3BHK, 3.5BHK, 4BHK Flats",
    location: "Sarjapur Road, Bangalore",
    price: "₹2.25 Cr Onwards",
    image: "/image/godrejlakeside.jpg",
    builder: "GODREJ",
    builderClass: "bg-green-600",
    detailsUrl: "/godrej-lakeside-orchard",
    animationDelay: "0.2s"
  },
  {
    id: 3,
    title: "Sunworth City",
    type: "2BHK, 3BHK Apartments",
    location: "RR Nagar, Mysore Road, Bangalore",
    price: "₹62 L Onwards",
    image: "/image/sunworthcity.jpg",
    builder: "PROVIDENT",
    builderClass: "bg-yellow-600",
    detailsUrl: "/provident-sunworthcity-apartment",
    animationDelay: "0.3s"
  },
  {
    id: 4,
    title: "Simplicity",
    type: "1BHK, 2BHK Apartments",
    location: "BHEL Layout, RR Nagar, Mysore Road",
    price: "₹42 L Onwards",
    image: "/image/simplicity.jpg",
    builder: "SATTVA",
    builderClass: "bg-red-600",
    detailsUrl: "/project",
    animationDelay: "0.4s"
  },
  {
    id: 5,
    title: "Carnatica",
    type: "3BHK Apartments",
    location: "Shettigere, Bangalore",
    price: "₹1.80 Cr Onwards",
    image: "/image/tatacarnatica.jpg",
    builder: "TATA",
    builderClass: "bg-blue-600",
    detailsUrl: "/project",
    animationDelay: "0.5s"
  },
  {
    id: 6,
    title: "Codename BLISS",
    type: "3BHK, 3.5BHK, 4BHK Apartments",
    location: "Hebbagodi, Bangalore",
    price: "₹2.50 Cr Onwards",
    image: "/image/codenamebliss.jpg",
    builder: "PURAVANKARA - New Launch",
    builderClass: "bg-green-600",
    detailsUrl: "/project",
    animationDelay: "0.6s"
  },
  {
    id: 7,
    title: "Evara",
    type: "3BHK, 4BHK Apartments",
    location: "Sarjapur Road, Bangalore",
    price: "₹71 L Onwards",
    image: "/image/birlaevara.jpg",
    builder: "BIRLA",
    builderClass: "bg-yellow-600",
    detailsUrl: "/project",
    animationDelay: "0.7s"
  },
  {
    id: 8,
    title: "Atmosphere",
    type: "3BHK Apartments",
    location: "Thanisandra, Bangalore",
    price: "₹2.85 Cr Onwards",
    image: "/image/atmosphere.jpg",
    builder: "PURAVANKARA",
    builderClass: "bg-red-600",
    detailsUrl: "/project",
    animationDelay: "0.8s"
  },
  {
    id: 9,
    title: "Deansgate",
    type: "3BHK Duplex Villa",
    location: "IVC Road, Bangalore",
    price: "₹2.9 Cr Onwards",
    image: "/image/Deansgate.jpg",
    builder: "PROVIDENT",
    builderClass: "bg-blue-600",
    detailsUrl: "/project",
    animationDelay: "0.9s"
  },
  {
    id: 10,
    title: "Avani Villa",
    type: "4BHK Villa",
    location: "Kammasandra, Bengaluru",
    price: "₹4 Cr Onwards",
    image: "/image/allureavani.jpg",
    builder: "ALLURE",
    builderClass: "bg-green-600",
    detailsUrl: "/project",
    animationDelay: "1.0s"
  },
  {
    id: 11,
    title: "Trees & Tandem",
    type: "3BHK Luxury Apartments",
    location: "Off Sarjapur Road, Bengaluru",
    price: "₹2.02 Cr Onwards",
    image: "/image/assetztrees.jpg",
    builder: "Assetz",
    builderClass: "bg-yellow-600",
    detailsUrl: "/project",
    animationDelay: "1.1s"
  },
  {
    id: 12,
    title: "Melodies of Life",
    type: "Luxury Villa Plots",
    location: "Off Hosa Road, Bengaluru",
    price: "₹2.83 Cr Onwards",
    image: "/image/Melodiesoflife.jpg",
    builder: "Assetz",
    builderClass: "bg-red-600",
    detailsUrl: "/project",
    animationDelay: "1.2s"
  },
  {
    id: 13,
    title: "Aaria",
    type: "2BHK, 3BHK, 4.5BHK Apartments",
    location: "Gunjur Lake, Bangalore",
    price: "₹1.42 Cr Onwards",
    image: "/image/aaria.webp",
    builder: "ABHEE",
    builderClass: "bg-blue-600",
    detailsUrl: "/project",
    animationDelay: "0.9s"
  },
  {
    id: 14,
    title: "Serenity Springs",
    type: "2BHK, 3BHK Apartments",
    location: "Bommasandra, Bengaluru",
    price: "₹78 L Onwards",
    image: "/image/celestialcity.jpg",
    builder: "ABHEE",
    builderClass: "bg-green-600",
    detailsUrl: "/project",
    animationDelay: "1.0s"
  },
  {
    id: 15,
    title: "Emerald Auralis",
    type: "2BHK, 3BHK Apartments",
    location: "Thanisandra Main Road, Bengaluru",
    price: "₹1.14 Cr Onwards",
    image: "/image/tvsproject.jpg",
    builder: "TVS",
    builderClass: "bg-yellow-600",
    detailsUrl: "/project",
    animationDelay: "1.1s"
  },
  {
    id: 16,
    title: "Botanico",
    type: "Luxury Villa Plots",
    location: "Soukya Road, Whitefield, Bengaluru",
    price: "₹94 L Onwards",
    image: "/image/ProvidentBotanico.jpg",
    builder: "PROVIDENT",
    builderClass: "bg-red-600",
    detailsUrl: "/project",
    animationDelay: "1.2s"
  },
  {
    id: 17,
    title: "Vasanta Sky",
    type: "1, 2, 3, 4 BHK Apartments",
    location: "Bellary Road, Bangalore",
    price: "₹78 L Onwards",
    image: "/image/sattvavasanta.jpg",
    builder: "SATTVA",
    builderClass: "bg-blue-600",
    detailsUrl: "/project",
    animationDelay: "1.3s"
  },
  {
    id: 18,
    title: "Park Cubix",
    type: "1, 2, 3 BHK Apartments",
    location: "At Devanahalli, Bengaluru",
    price: "₹48 L Onwards",
    image: "/image/parkcubix.jpg",
    builder: "SATTVA",
    builderClass: "bg-green-600",
    detailsUrl: "/project",
    animationDelay: "1.4s"
  },
  {
    id: 19,
    title: "La Vita",
    type: "4BHK Villa",
    location: "Off Hennur Main Road, Bengaluru",
    price: "₹5.26 Cr Onwards",
    image: "/image/lavita.jpg",
    builder: "SATTVA",
    builderClass: "bg-yellow-600",
    detailsUrl: "/project",
    animationDelay: "1.5s"
  },
  {
    id: 20,
    title: "Celestial City",
    type: "2BHK, 3BHK Apartments",
    location: "At Sarjapur Road, Bangalore",
    price: "₹1.52 Cr Onwards",
    image: "/image/celestialcity.jpg",
    builder: "ABHEE",
    builderClass: "bg-red-600",
    detailsUrl: "/project",
    animationDelay: "1.6s"
  }
];

document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');
    const paginationContainer = document.getElementById('pagination');
    const itemsPerPage = 8;
    let currentPage = 1;
    let totalPages = Math.ceil(projects.length / itemsPerPage);

    // Add loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <div class="loading-text">Loading Projects...</div>
        </div>
    `;
    document.body.appendChild(loadingOverlay);

    // Add CSS styles for pagination, cards and loading states
    const styles = document.createElement('style');
    styles.textContent = `
        .project-card {
            display: flex;
            flex-direction: column;
            height: 100%;
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .project-image-container {
            position: relative;
            height: 200px;
            overflow: hidden;
        }
        
        .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image {
            transform: scale(1.05);
        }
        
        .project-badge {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            color: white;
        }
        
        .project-content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        
        .project-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #1f2937;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 3.5rem;
        }
        
        .project-type {
            color: #f97316;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .project-location {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .project-price {
            font-size: 1.25rem;
            font-weight: 800;
            color: #3b82f6;
            margin-bottom: 1.25rem;
        }
        
        .view-details-btn {
            display: block;
            width: 100%;
            text-align: center;
            background-color: #B49B11;
            color: white;
            font-weight: 600;
            padding: 0.625rem 1rem;
            border-radius: 0.5rem;
            transition: all 0.2s;
            margin-top: auto;
        }
        
        .view-details-btn:hover {
            background-color: #9a8310;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            margin: 3rem 0;
            flex-wrap: wrap;
        }
        
        .page-btn, .pagination button {
            padding: 0.5rem 1rem;
            border: 1px solid #e5e7eb;
            background: white;
            color: #4b5563;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 500;
            min-width: 2.5rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .page-btn:hover:not(:disabled), 
        .pagination button:not(:disabled):hover {
            background: #f3f4f6;
            border-color: #d1d5db;
        }
        
        .page-btn.active {
            background: #B49B11;
            color: white;
            border-color: #B49B11;
        }
        
        .page-btn:disabled, 
        .pagination button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .pagination-ellipsis {
            padding: 0.5rem;
            color: #6b7280;
        }
        
        @media (max-width: 640px) {
            .page-btn, .pagination button {
                padding: 0.4rem 0.8rem;
                min-width: 2rem;
                font-size: 0.875rem;
            }
            
            .project-card {
                max-width: 100%;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .scroll-reveal {
            opacity: 0;
            animation: fadeIn 0.6s ease-out forwards;
            transition: opacity 0.3s ease-in-out;
        }
        
        /* Loading overlay styles */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.95);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: opacity;
            pointer-events: none;
        }
        
        .loading-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        .loading-spinner {
            text-align: center;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #B49B11;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        .loading-text {
            color: #333;
            font-weight: 600;
            font-size: 1.1rem;
            margin-top: 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styles);

    // Create project card HTML
    function createProjectCard(project) {
        return `
            <div class="project-card scroll-reveal" style="animation-delay: ${project.animationDelay}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <span class="project-badge ${project.builderClass}">${project.builder}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-type">${project.type}</p>
                    <p class="project-location">${project.location}</p>
                    <p class="project-price">${project.price}</p>
                    <a href="${project.detailsUrl}" class="view-details-btn">View Details</a>
                </div>
            </div>
        `;
    }

    // Initialize scroll reveal
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Show loading state
    function showLoading() {
        // Force reflow to ensure the display change is applied
        void loadingOverlay.offsetHeight;
        loadingOverlay.style.display = 'flex';
        // Small delay to ensure display:flex is applied before adding active class
        setTimeout(() => {
            loadingOverlay.classList.add('active');
            projectsContainer.style.opacity = '0.7';
            projectsContainer.style.transition = 'opacity 0.2s ease';
        }, 20);
    }
    
    // Hide loading state
    function hideLoading() {
        loadingOverlay.classList.remove('active');
        projectsContainer.style.opacity = '1';
        
        // Slightly delay hiding the overlay to ensure smooth transition
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 300);
    }

    // Function to render projects for the current page
    function renderProjects() {
        showLoading();
        
        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, projects.length);
            
            // Create a document fragment for better performance
            const fragment = document.createDocumentFragment();
            
            // Add projects for current page to fragment
            for (let i = startIndex; i < endIndex; i++) {
                if (projects[i]) {
                    const temp = document.createElement('div');
                    temp.innerHTML = createProjectCard(projects[i]);
                    while (temp.firstChild) {
                        fragment.appendChild(temp.firstChild);
                    }
                }
            }
            
            // Clear container and append new content
            projectsContainer.innerHTML = '';
            projectsContainer.appendChild(fragment);
            
            // Update pagination
            renderPagination();
            
            // Initialize scroll reveal for new elements
            initScrollReveal();
            
            // Scroll to top of projects
            window.scrollTo({
                top: projectsContainer.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Hide loading state after a minimum duration to prevent flicker
            const minLoadingTime = 500; // Minimum loading time in ms
            const renderStart = performance.now();
            
            const hideLoadingAfterMinTime = () => {
                const elapsed = performance.now() - renderStart;
                if (elapsed >= minLoadingTime) {
                    hideLoading();
                } else {
                    setTimeout(hideLoadingAfterMinTime, minLoadingTime - elapsed);
                }
            };
            
            // Start the minimum loading time check
            hideLoadingAfterMinTime();
        });
    }

    // Function to create pagination controls
    function renderPagination() {
        if (totalPages <= 1) {
            paginationContainer.style.display = 'none';
            return;
        }
        
        paginationContainer.style.display = 'flex';
        paginationContainer.innerHTML = '';
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&larr; Prev';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProjects();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // First page
        if (currentPage > 3) {
            const firstPageBtn = createPageButton(1);
            paginationContainer.appendChild(firstPageBtn);
            
            if (currentPage > 4) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-ellipsis';
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }
        }
        
        // Page numbers
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = createPageButton(i);
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            paginationContainer.appendChild(pageBtn);
        }
        
        // Last page
        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-ellipsis';
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }
            const lastPageBtn = createPageButton(totalPages);
            paginationContainer.appendChild(lastPageBtn);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Next &rarr;';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProjects();
            }
        });
        paginationContainer.appendChild(nextButton);
    }
    
    // Helper function to create page number buttons
    function createPageButton(pageNumber) {
        const button = document.createElement('button');
        button.className = 'page-btn';
        button.textContent = pageNumber;
        if (pageNumber === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = pageNumber;
            renderProjects();
        });
        return button;
    }

    // Initial render
    renderProjects();
});

// Keep your existing createProjectCard and initScrollReveal functions
// Export the array if using modules
// export default projects;