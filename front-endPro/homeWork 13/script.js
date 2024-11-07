const form = document.querySelector('form');

function validateField(input) {
    switch (input.name) {
        case "name":
            if (input.value.trim() === '') {
                showError(input, 'Name is required');
            } else {
                clearError(input);
            }
            break;

        case "message":
            if (input.value.trim().length < 5) {
                showError(input, 'Message must be at least 5 characters');
            } else {
                clearError(input);
            }
            break;

        case "tel":
            const phonePattern = /^\+380\d{9}$/;
            if (!phonePattern.test(input.value.trim())) {
                showError(input, 'Phone number must start with +380 and contain 12 digits');
            } else {
                clearError(input);
            }
            break;

        case "e-mail":
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value.trim())) {
                showError(input, 'Email must contain "@" and a domain (e.g., example@domain.com)');
            } else {
                clearError(input);
            }
            break;

        default:
            break;
    }
}

form.addEventListener('submit', event => {
    let isValid = true;
    form.querySelectorAll('input, textarea').forEach(input => {
        validateField(input);
        if (input.parentElement.querySelector('.error-message')) {
            isValid = false;
        }
    });
    if (!isValid) {
        event.preventDefault();
    }
});

form.addEventListener('input', event => {
    validateField(event.target);
});

function showError(input, message) {
    clearError(input);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

function clearError(input) {
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}