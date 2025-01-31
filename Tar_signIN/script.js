document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');

    // Tab switching with smooth transitions
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => {
                f.classList.remove('active');
                f.style.display = 'none';
            });

            // Add active class to clicked tab and corresponding form
            tab.classList.add('active');
            const formId = tab.getAttribute('data-tab') + 'Form';
            const targetForm = document.getElementById(formId);
            targetForm.style.display = 'block';
            setTimeout(() => {
                targetForm.classList.add('active');
            }, 50);
        });
    });

    // Form submission handling
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        const formData = new FormData(loginForm);
        console.log('Login attempt:', Object.fromEntries(formData));
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your signup logic here
        const formData = new FormData(signupForm);
        console.log('Signup attempt:', Object.fromEntries(formData));
    });

    // Add input focus effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});