// Get form and modal elements
const likesForm = document.getElementById('likesForm');
const popupModal = document.getElementById('popupModal');

// Add event listener to form submission
likesForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(likesForm);
    const username = formData.get('username');
    const postUrl = formData.get('postUrl');
    const comment = formData.get('comment');
    const likesCount = formData.get('likesCount');
    
    // Validate likes count
    if (likesCount > 300) {
        alert('Maximum likes allowed is 300');
        return;
    }
    
    // Clear all form fields
    likesForm.reset();
    
    // Show the popup modal
    showModal();
});

// Function to show modal
function showModal() {
    popupModal.style.display = 'block';
    
    // Add animation class
    const modalContent = popupModal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease-out';
}

// Function to close modal
function closeModal() {
    popupModal.style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    if (e.target === popupModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popupModal.style.display === 'block') {
        closeModal();
    }
});

// Add input validation for likes count
const likesInput = document.getElementById('likesCount');
likesInput.addEventListener('input', function() {
    const value = parseInt(this.value);
    if (value > 300) {
        this.value = 300;
    }
    if (value < 0) {
        this.value = 1;
    }
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to form on page load
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
        formContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    // Add focus effects to form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}); 