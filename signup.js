// document.addEventListener('DOMContentLoaded', function() {
//     const signInBtn = document.getElementById('signInBtn');
//     const signUpBtn = document.getElementById('signUpBtn');
//     const signInForm = document.getElementById('signInForm');
//     const signUpForm = document.getElementById('signUpForm');

//     signInBtn.addEventListener('click', function() {
//         signInForm.classList.add('active');
//         signUpForm.classList.remove('active');
//         signInBtn.classList.add('active');
//         signUpBtn.classList.remove('active');
//     });

//     signUpBtn.addEventListener('click', function() {
//         signUpForm.classList.add('active');
//         signInForm.classList.remove('active');
//         signUpBtn.classList.add('active');
//         signInBtn.classList.remove('active');
//     });
// });

// function sendOTP(phoneId) {
//     const phone = document.getElementById(phoneId).value;
//     // Here you would typically call your backend API to send the OTP
//     alert('OTP sent to ' + phone);
// }

// function showSignIn() {
//     const signInForm = document.getElementById('signInForm');
//     const signUpForm = document.getElementById('signUpForm');
//     const signInBtn = document.getElementById('signInBtn');
//     const signUpBtn = document.getElementById('signUpBtn');
//     signInForm.classList.add('active');
//     signUpForm.classList.remove('active');
//     signInBtn.classList.add('active');
//     signUpBtn.classList.remove('active');
// }

function sendOTP(phoneId) {
    const phone = document.getElementById(phoneId).value;
    // Here you would typically call your backend API to send the OTP
    alert('OTP sent to ' + phone);
}

function showSignIn() {
    // Redirect to sign-in page
    window.location.href = 'index.html';
}