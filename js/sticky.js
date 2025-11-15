// sticky.js
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".openCallbackModal").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // prevent going to contact.html
            openModal(); // your modal function
        });
    });
    // document.getElementById('close-modal').addEventListener('click', function () {
    //     const modal = document.getElementById('contact-modal');
    //     if (modal) {
    //         modal.classList.remove('show');
    //         modal.classList.add('hidden');
    //         document.body.style.overflow = 'auto'; // Allow scrolling when modal is closed
    //     }
    // });
});
function openModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        modal.classList.remove('hidden');
        modal.classList.add('show');
    }
}
// Function to open the modal
function closeModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        document.body.style.overflow = 'auto'; // Prevent scrolling when modal is open
        modal.classList.remove('show');
        modal.classList.add('hidden');
    }
};
document.addEventListener('DOMContentLoaded', () => {
    // Create and append the modal HTML
    const modalHTML = `<div class="popup-content bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative">
            <button type="button" id="close-modal" onclick="closeModal()"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-300"
                aria-label="Close modal">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
            <h3 class="text-3xl font-bold mb-4 text-blue-600">Start Your Consultation</h3>
            <p class="mb-6 text-gray-600">Tell us about your investment goals, and one of our experts will contact you
                Soon.</p>

            <form id="contact-form" class="space-y-4">
                <input type="text" name="name" placeholder="Your Name" required
                    class="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                <input type="email" name="email" placeholder="Email Address" required
                    class="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                <input type="tel" name="mobile" placeholder="Phone Number" required
                    class="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                <textarea name="message" placeholder="What are you looking for?" rows="3" required
                    class="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200"></textarea>
                <button id="contact_form_btn" type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300 transform hover:shadow-lg">
                    Send Request
                </button>
                <div id="success_message_col" class='mt-2'>

                </div>
                <div id="error_message" class='error'>

                </div>
                <!-- <div id="form-message" class="text-center mt-3 hidden text-sm"></div> -->
            </form>
        </div>`;

    // Add modal to body if not already present
 document.getElementById('contact-modal').innerHTML = modalHTML;
    // Create sticky callback button
    const stickyBtn = document.createElement('div');
    stickyBtn.className = 'sticky-callback-btn';
    stickyBtn.innerHTML = `
        <button onclick="openModal()" type="button" class="openCallbackModal">
            <i class="bi bi-telephone-fill"></i>
            <span>Request Callback</span>
        </button>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .sticky-callback-btn {
            position: fixed;
            bottom: 30px;
            left: 30px;
            z-index: 1050;
        }
        
        .sticky-callback-btn .openCallbackModal {
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 50px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
        }
        
        .sticky-callback-btn .openCallbackModal:hover {
            background: #1d4ed8;
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }
        
        .sticky-callback-btn .openCallbackModal i {
            font-size: 18px;
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
        
        @media (max-width: 576px) {
            .sticky-callback-btn {
                bottom: 20px;
                left: 20px;
                right: auto;
            }
            
            .sticky-callback-btn .openCallbackModal {
                padding: 10px 16px;
                font-size: 14px;
            }
            
            .sticky-callback-btn .openCallbackModal i {
                display: block;
                margin: 0 auto 4px;
            }
            
            .sticky-callback-btn .openCallbackModal span {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to body
    document.body.appendChild(stickyBtn);

     // Function to open the contact modal (used by inline button click handlers)


    // Initialize modal
    // const callbackModal = new bootstrap.Modal(document.getElementById('callbackModal'));
    
    // // Add click handler
    // document.querySelector('.openCallbackModal').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     const form = document.getElementById('callbackForm');
    //     if (form) {
    //         form.reset();
    //         document.getElementById('callbackError')?.classList.add('d-none');
    //         document.getElementById('callbackSuccess')?.classList.add('d-none');
    //     }
    //     callbackModal.show();
    // });

    // // Form submission
    // const callbackForm = document.getElementById('callbackForm');
    // if (callbackForm) {
    //     callbackForm.addEventListener('submit', async (e) => {
    //         e.preventDefault();
            
    //         const submitBtn = document.getElementById('callbackSubmit');
    //         if (!submitBtn) return;
            
    //         const spinner = submitBtn.querySelector('.spinner-border');
    //         const submitText = submitBtn.querySelector('span:not(.spinner-border)');
            
    //         // Show loading state
    //         submitBtn.disabled = true;
    //         if (spinner) spinner.classList.remove('d-none');
    //         if (submitText) submitText.textContent = 'Submitting...';
            
    //         try {
    //             const formData = {
    //                 name: document.getElementById('callbackName').value.trim(),
    //                 email: document.getElementById('callbackEmail').value.trim(),
    //                 mobile: document.getElementById('callbackMobile').value.trim(),
    //                 message: document.getElementById('callbackMessage').value.trim(),
    //                 source: 'callback_modal'
    //             };
                
    //             // Show success message
    //             const successEl = document.getElementById('callbackSuccess');
    //             const errorEl = document.getElementById('callbackError');
                
    //             if (successEl) {
    //                 successEl.textContent = 'Thank you! We will contact you shortly.';
    //                 successEl.classList.remove('d-none');
    //                 errorEl?.classList.add('d-none');
    //             }
                
    //             // Reset form and close modal after delay
    //             setTimeout(() => {
    //                 callbackModal.hide();
    //                 if (callbackForm) callbackForm.reset();
    //             }, 2000);
                
    //         } catch (error) {
    //             // Show error message
    //             const errorEl = document.getElementById('callbackError');
    //             if (errorEl) {
    //                 errorEl.textContent = error.message || 'Failed to submit. Please try again.';
    //                 errorEl.classList.remove('d-none');
    //             }
    //         } finally {
    //             // Reset button state
    //             if (submitBtn) {
    //                 submitBtn.disabled = false;
    //                 if (spinner) spinner.classList.add('d-none');
    //                 if (submitText) submitText.textContent = 'Submit';
    //             }
    //         }
    //     });
    // }
});
