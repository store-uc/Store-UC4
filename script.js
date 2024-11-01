document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closesignupModal = document.getElementById('closesignupModal');

    // فتح نافذة تسجيل الدخول
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // فتح نافذة التسجيل
    signupButton.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // إغلاق نافذة تسجيل الدخول
    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // إغلاق نافذة التسجيل
    closesignupModal.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    // إغلاق النافذة عند النقر خارج المحتوى
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    });
});
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of the modal
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
document.querySelector('form').addEventListener('submit', function (event) {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    if (!email.includes('@') || password.length < 8) {
        event.preventDefault();
        alert("Please enter a valid email and a password with at least 8 characters.");
    }
});
