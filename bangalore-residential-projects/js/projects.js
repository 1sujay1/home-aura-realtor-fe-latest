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
    const viewMoreBtn = document.getElementById('view-more-btn');
    let currentPage = 1;
    const projectsPerPage = 12;
    let visibleProjects = 0;
    let isLoading = false;

    // Add CSS styles
    const style = document.createElement('style');
    style.textContent = `
        /* Project Card Styles */
        .project-card {
            display: flex;
            flex-direction: column;
            height: 100%;
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            transition: all 0.3s ease;
            will-change: transform, box-shadow;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .project-card .p-6 {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
        }
        
        .project-card .mt-auto {
            margin-top: auto;
        }
        
        .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        /* Load More Button Styles */
        #view-more-btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #B49B11 0%, #d4af37 100%);
            border: none;
            color: white;
            padding: 0.75rem 2rem;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(180, 155, 17, 0.4);
            transition: all 0.3s ease;
            transform: translateY(0);
            animation: float 3s ease-in-out infinite;
            letter-spacing: 0.5px;
            min-width: 220px;
            margin: 2rem auto;
        }
        
        #view-more-btn:hover {
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 8px 25px rgba(180, 155, 17, 0.6);
            animation: none;
        }
        
        #view-more-btn:active {
            transform: translateY(1px);
            box-shadow: 0 2px 10px rgba(180, 155, 17, 0.6);
        }
        
        #view-more-btn.loading {
            pointer-events: none;
            opacity: 0.8;
        }
        
        .pulse {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.8);
            margin: 0 2px;
            animation: pulse 1.5s infinite;
        }
        
        .pulse:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .pulse:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-8px);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(0.8);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.2);
                opacity: 1;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .scroll-reveal {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Loading Spinner */
        .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 0.8s ease-in-out infinite;
            margin-left: 10px;
            vertical-align: middle;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Create project card HTML
    function createProjectCard(project) {
        return `
            <div class="project-card rounded-xl shadow-lg scroll-reveal overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1" 
                 style="animation-delay: ${project.animationDelay};" 
                 data-project-id="${project.id}">
                <div class="relative h-56 overflow-hidden group">
                    <img src="${project.image}" alt="${project.title}" 
                         class="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 transition-all duration-300 group-hover:bg-opacity-50">
                        <span class="text-white text-sm font-semibold ${project.builderClass} px-3 py-1 rounded-full transform transition-transform duration-300 group-hover:scale-105">
                            ${project.builder}
                        </span>
                    </div>
                </div>
                <div class="p-6 flex flex-col" style="min-height: 280px;">
                    <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2" style="min-height: 3.5rem;">${project.title}</h3>
                    <p style="color:coral" class="text-gray-500 text-sm mb-2 line-clamp-1">${project.type}</p>
                    <p class="text-gray-500 text-sm mb-4 line-clamp-1">${project.location}</p>
                    <p class="text-2xl font-extrabold text-blue-600 mb-5">${project.price}</p>
                    <div class="mt-auto">
                        <a href="${project.detailsUrl}" 
                           class="block w-full text-center bg-[#B49B11] hover:bg-[#9a8310] text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Update view more button state
    function updateViewMoreButton(loading = false) {
        if (visibleProjects >= projects.length) {
            viewMoreBtn.style.display = 'none';
            return;
        }

        if (loading) {
            viewMoreBtn.classList.add('loading');
            viewMoreBtn.innerHTML = `Loading <span class="spinner"></span>`;
        } else {
            viewMoreBtn.classList.remove('loading');
            viewMoreBtn.innerHTML = `Load More Projects 
                <span class="pulse"></span>
                <span class="pulse"></span>
                <span class="pulse"></span>`;
        }
    }

    // Render projects
    async function renderProjects() {
        if (isLoading) return;
        
        const startIndex = visibleProjects;
        const endIndex = Math.min(visibleProjects + projectsPerPage, projects.length);
        
        if (startIndex >= endIndex) {
            updateViewMoreButton(false);
            return;
        }

        isLoading = true;
        updateViewMoreButton(true);

        // Simulate loading (remove in production)
        await new Promise(resolve => setTimeout(resolve, 800));

        // Create document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        // Add projects to fragment
        for (let i = startIndex; i < endIndex; i++) {
            if (projects[i]) {
                const div = document.createElement('div');
                div.innerHTML = createProjectCard(projects[i]);
                fragment.appendChild(div.firstElementChild);
            }
        }

        // Append all at once
        projectsContainer.appendChild(fragment);
        
        visibleProjects = endIndex;
        isLoading = false;
        
        updateViewMoreButton(false);
        initScrollReveal();
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

    // Event listeners
    viewMoreBtn.addEventListener('click', renderProjects);

    // Initial render
    renderProjects();

    // Infinite scroll (optional)
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (isScrolling || isLoading || visibleProjects >= projects.length) return;
        
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 600;
        
        if (scrolledToBottom) {
            isScrolling = true;
            renderProjects().then(() => {
                isScrolling = false;
            });
        }
    });
});
// Export the array if using modules
// export default projects;