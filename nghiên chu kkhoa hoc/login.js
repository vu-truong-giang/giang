function togglePasswordVisibility() {
    var passwordInput = document.getElementById('passwordInput');
    var passwordToggle = document.querySelector('.password-toggle i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.classList.add('fa-eye');
        passwordToggle.classList.remove('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordToggle.classList.add('fa-eye-slash');
        passwordToggle.classList.remove('fa-eye');
    }
}

const inputElementPassword = document.getElementById('passwordInput');

inputElementPassword.addEventListener('input', function() {
            if (inputElementPassword.value.trim() !== '') {
                inputElementPassword.parentNode.classList.add('has-value');
            } else {
                inputElementPassword.parentNode.classList.remove('has-value');
            }
        });
const inputElementUsername = document.getElementById('usernameInput');

inputElementUsername.addEventListener('input', function() {
            if (inputElementUsername.value.trim() !== '') {
                inputElementUsername.parentNode.classList.add('has-value');
            } else {
                inputElementUsername.parentNode.classList.remove('has-value');
            }
        });
        
const inputElementButton = document.getElementById('button_login');

function updateButtonState() {
    if (inputElementUsername.value.trim() !== '' && inputElementPassword.value.trim() !== '') {
        inputElementButton.classList.add('button-value');
    } else {
        inputElementButton.classList.remove('button-value');
    }
}

inputElementPassword.addEventListener('input', function() {
    updateButtonState();
});

inputElementUsername.addEventListener('input', function() {
    updateButtonState();
});

// Optional: Trigger the function on page load to set initial state
updateButtonState();

        
        
           