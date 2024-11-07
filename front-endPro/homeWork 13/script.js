const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const phoneInput = form.querySelector('input[name="tel"]');
    const emailInput = form.querySelector('input[name="e-mail"]');

    let isValid = true;

    form.querySelectorAll('.error-message').forEach(error => error.remove());

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    }

    if (messageInput.value.trim().length < 5) {
        showError(messageInput, 'Message must be at least 5 characters');
        isValid = false;
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Phone number must start with +380 and contain 12 digits');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Email must contain "@" and a domain (e.g., example@domain.com)');
        isValid = false;
    }

    if (isValid) {
        const formData = new FormData(event.target);
        const formObj = {};

        formData.forEach((value, key) => formObj[key] = value);
        console.log(formObj);
    }
});

function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.style.marginTop = '5px';
    error.textContent = message;
    input.parentElement.appendChild(error);
}
