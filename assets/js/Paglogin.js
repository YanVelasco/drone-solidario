// assets/js/PagLogin.js
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const loginError = document.getElementById('login-error');

    // Mostrar/ocultar senha
    document.getElementById('togglePassword').addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Validação em tempo real do e-mail
    usernameInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.classList.add('is-invalid');
            emailError.classList.remove('d-none');
        } else {
            this.classList.remove('is-invalid');
            emailError.classList.add('d-none');
        }
    });

    // Validação em tempo real da senha
    passwordInput.addEventListener('input', function() {
        if (this.value.length > 0 && this.value.length < 6) {
            this.classList.add('is-invalid');
            passwordError.classList.remove('d-none');
        } else {
            this.classList.remove('is-invalid');
            passwordError.classList.add('d-none');
        }
    });

    // Submissão do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        loginError.classList.add('d-none');

        // Validação final antes de enviar
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(usernameInput.value)) {
            usernameInput.classList.add('is-invalid');
            emailError.classList.remove('d-none');
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            passwordInput.classList.add('is-invalid');
            passwordError.classList.remove('d-none');
            isValid = false;
        }

        if (isValid) {
            // Simulação de envio para o servidor (substitua por AJAX/fetch)
            console.log('Dados válidos. Enviando:', {
                username: usernameInput.value,
                password: passwordInput.value,
                remember: document.getElementById('remember').checked
            });

            // Redirecionamento (simulado)
            window.location.href = '#'; // Altere para sua página de destino
        } else {
            loginError.textContent = 'Por favor, corrija os erros antes de enviar.';
            loginError.classList.remove('d-none');
        }
    });
});