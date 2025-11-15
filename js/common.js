// whatsapp.js
document.addEventListener('DOMContentLoaded', () => {
    // Create WhatsApp floating button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/919952402011'; // Replace with your WhatsApp number
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110';
    whatsappBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.499.1-.202.05-.376-.025-.524-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.198 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.27-.198-.57-.345m-5.446 7.443h-.016a9.878 9.878 0 01-5.031-1.378l-.36-.214-3.75.982.998-3.648-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.118 1.03 6.986 2.9a9.825 9.825 0 012.896 6.966c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.773 11.773 0 00-8.415-3.47c-6.555 0-11.894 5.336-11.896 11.892 0 2.189.594 4.315 1.721 6.18l-1.792 6.53 6.733-1.768a11.83 11.83 0 006.233 1.748c6.555 0 11.894-5.336 11.896-11.891a11.77 11.77 0 00-3.479-8.386"/>
        </svg>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-float {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);
    
    // Add to body
    document.body.appendChild(whatsappBtn);
});