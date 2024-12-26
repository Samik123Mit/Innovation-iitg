document.addEventListener('DOMContentLoaded', function() {
    const passwordToggleIcon = document.getElementById('passwordToggleIcon');
    const passwordInput = document.getElementById('password');

    passwordToggleIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggleIcon.src = 'show.png';
        } else {
            passwordInput.type = 'password';
            passwordToggleIcon.src = 'hide.png';
        }
    });
});

function handleSignIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const incorrectPasswordError = document.getElementById('incorrectPasswordError');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    incorrectPasswordError.style.display = 'none';

    if (email === "") {
        emailError.style.display = 'block';
    } else if (password === "") {
        passwordError.style.display = 'block';
    } else {
        // Simulate Firebase login
        if (password === 'correctpassword') {
            alert('Login successful');
            window.location.href = 'dashboard.html';
        } else {
            incorrectPasswordError.style.display = 'block';
        }
    }
}