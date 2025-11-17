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

    // Function to create project card HTML
    function createProjectCard(project) {
        return `
            <div class="project-card rounded-xl shadow-lg scroll-reveal" 
                 style="animation-delay: ${project.animationDelay};" 
                 data-project-id="${project.id}">
                <div class="relative overflow-hidden h-56 rounded-t-xl">
                    <img src="${project.image}" alt="${project.title}" class="project-image w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                        <span class="text-white text-sm font-semibold ${project.builderClass} px-3 py-1 rounded-full">
                            ${project.builder}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${project.title}</h3>
                    <p style="color:coral" class="text-gray-500 text-sm mb-4">${project.type}</p>
                    <p class="text-gray-500 text-sm mb-4">${project.location}</p>
                    <p class="text-2xl font-extrabold text-blue-600 mb-4">${project.price}</p>
                    <a style="background-color: #B49B11;" href="${project.detailsUrl}" 
                       class="w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
                        View Details
                    </a>
                </div>
            </div>
        `;
    }

    // Function to render projects
    function renderProjects() {
        const startIndex = 0; // Always start from the beginning
        const endIndex = Math.min(visibleProjects + projectsPerPage, projects.length);
        
        // Clear container if it's the first page
        if (visibleProjects === 0) {
            projectsContainer.innerHTML = '';
        }

        // Add projects to container
        for (let i = visibleProjects; i < endIndex; i++) {
            if (projects[i]) {
                projectsContainer.innerHTML += createProjectCard(projects[i]);
            }
        }

        visibleProjects = endIndex;

        // Update button visibility
        if (visibleProjects >= projects.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'inline-block';
            // viewMoreBtn.textContent = `Load More (${projects.length - visibleProjects} remaining)`;
            viewMoreBtn.textContent = `Load More Projects`;
        }

        // Initialize scroll reveal for new elements
        initScrollReveal();
    }

    // Function to initialize scroll reveal
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Event listener for View More button
    viewMoreBtn.addEventListener('click', () => {
        renderProjects();
    });

    // Initial render
    renderProjects();
});
// Export the array if using modules
// export default projects;