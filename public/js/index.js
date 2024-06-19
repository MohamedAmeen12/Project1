const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const roleAdmin = document.getElementById('adminRadiobox');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const roleValue = roleAdmin.checked ? roleAdmin.value : '';

    let usernameError = true;
    let passwordError = true;

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
        usernameError = false;
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
        passwordError = false;
    }

    if (!(usernameError || passwordError) && usernameValue === 'admin' && passwordValue === '1234' && roleValue === 'admin') {
        window.location.href = "admin.html";
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error-message');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
