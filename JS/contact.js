// contact
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const statusBox = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Reset Errors
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        
        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const message = document.getElementById('userMessage').value.trim();
        
        let isValid = true;

        // Validation Logic
        if (name.length < 2) {
            document.getElementById('nameError').textContent = "Please enter your full name.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (message.length < 10) {
            document.getElementById('messageError').textContent = "Message must be at least 10 characters.";
            isValid = false;
        }

        if (isValid) {
            // ✅ FIXED LINE
            statusBox.innerHTML = `<p class="status-success">✨ Thank you, ${name}! Your message has been sent successfully.</p>`;
            
            form.reset();
            
            // Auto-hide message after 5 seconds
            setTimeout(() => { 
                statusBox.innerHTML = ''; 
            }, 5000);
        }
    });
});