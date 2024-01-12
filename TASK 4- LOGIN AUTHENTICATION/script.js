const togglePasswordVisibility = (passwordInputId, eyeIconId) => {
    const input = document.getElementById(passwordInputId);
    const iconEye = document.getElementById(eyeIconId);

    iconEye.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        iconEye.classList.toggle('ri-eye-line');
        iconEye.classList.toggle('ri-eye-off-line');
    });
}

const showPasswordButton = document.getElementById('login-eye');
showPasswordButton.addEventListener('click', () => {
    const passwordInput = document.getElementById('login-pass');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});

const showRegisterPasswordButton = document.getElementById('register-eye');
showRegisterPasswordButton.addEventListener('click', () => {
    const passwordInput = document.getElementById('register-pass');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');

const switchForm = (showLoginForm) => {
    loginForm.style.display = showLoginForm ? 'block' : 'none';
    registerForm.style.display = showLoginForm ? 'none' : 'block';
};

// Initial setup
switchForm(true);

loginToggle.addEventListener('click', (event) => {
    event.preventDefault();
    switchForm(true);
});

registerToggle.addEventListener('click', (event) => {
    event.preventDefault();
    switchForm(false);
});

togglePasswordVisibility('login-pass', 'login-eye');
togglePasswordVisibility('register-pass', 'register-eye');

// Function to handle login
const handleLogin = () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    // For demo purposes
    if (email === "saharsh@testing.com" && password === "password@123") {
        // Successful login
        loginForm.classList.remove('error');
        loginForm.classList.add('success');
        setTimeout(() => {
            loginForm.classList.remove('success');
        }, 2000); // 2000 milliseconds (2 seconds) delay
    } else {
        // Wrong login
        loginForm.classList.remove('success');
        loginForm.classList.add('error');
        setTimeout(() => {
            loginForm.classList.remove('error');
        }, 2000); // 2000 milliseconds (2 seconds) delay
    }
};

// Function to handle registration (dummy function for now)
const handleRegistration = () => {
    // You can implement registration logic here
};

