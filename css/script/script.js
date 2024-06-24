function toggleForm(formType) {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const formTitle = document.getElementById('form-title');
    const toggleSignup = document.getElementById('toggle-signup');
    const toggleSignin = document.getElementById('toggle-signin');

    // Function to clear error messages and styles
    function clearErrors() {
        document.querySelectorAll('.input-group').forEach(inputGroup => {
            inputGroup.classList.remove('error');
            inputGroup.querySelector('.error-message').textContent = '';
        });
    }

    // Function to mark input field as invalid
    function markFieldAsInvalid(inputElement, errorMessage) {
        const inputGroup = inputElement.closest('.input-group');
        inputGroup.classList.add('error');
        inputGroup.querySelector('.error-message').textContent = errorMessage;
    }

    // Function to validate signup form
    function validateSignupForm() {
        const nameInput = document.getElementById('signup-name');
        const emailInput = document.getElementById('signup-email');
        const passwordInput = document.getElementById('signup-password');
        const confirmPasswordInput = document.getElementById('signup-confirm-password');
        const termsCheckbox = document.getElementById('signup-terms');

        let isValid = true;

        // Reset previous error styles and messages
        clearErrors();

        // Validate name field
        if (nameInput.value.trim() === '') {
            isValid = false;
            markFieldAsInvalid(nameInput, 'Name is required.');
        }

        // Validate email field
        if (emailInput.value.trim() === '') {
            isValid = false;
            markFieldAsInvalid(emailInput, 'Email is required.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            markFieldAsInvalid(emailInput, 'Invalid email format.');
        }

        // Validate password field
        if (passwordInput.value.trim() === '') {
            isValid = false;
            markFieldAsInvalid(passwordInput, 'Password is required.');
        } else if (passwordInput.value.trim().length < 8) {
            isValid = false;
            markFieldAsInvalid(passwordInput, 'Password must be at least 8 characters.');
        } else if (!isValidPassword(passwordInput.value.trim())) {
            isValid = false;
            markFieldAsInvalid(passwordInput, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        }

        // Validate confirm password field
        if (confirmPasswordInput.value.trim() === '') {
            isValid = false;
            markFieldAsInvalid(confirmPasswordInput, 'Please confirm your password.');
        } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
            isValid = false;
            markFieldAsInvalid(confirmPasswordInput, 'Passwords do not match.');
        }

        // Validate terms checkbox
        if (!termsCheckbox.checked) {
            isValid = false;
            markFieldAsInvalid(termsCheckbox, 'You must agree to the terms & policy.');
        }

        return isValid;
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate password strength
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    // Toggle forms based on formType parameter
    if (formType === 'signin') {
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
        formTitle.textContent = 'Sign In';
        toggleSignup.style.display = 'none';
        toggleSignin.style.display = 'block';
    } else {
        // Clear previous error messages/styles when toggling to signup form
        clearErrors();

        signupForm.style.display = 'block';
        signinForm.style.display = 'none';
        formTitle.textContent = 'Get Started Now';
        toggleSignup.style.display = 'block';
        toggleSignin.style.display = 'none';
    }
}

// Attach event listeners to signup and signin links/buttons
document.getElementById('toggle-signup').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForm('signup');
});

document.getElementById('toggle-signin').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForm('signin');
});

// Attach validation to signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    if (!validateSignupForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
