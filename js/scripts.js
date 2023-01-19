const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("preencha o seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("preencha o seu email");
        return;
    }

    // Verificar se está preenchido
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos.");
        return;
    }

    if (jobSelect.value === "") {
        alert("Selecione a sua situação");
        return;
    }

    if (messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

    // se estiver tudo preenchido envie o form
    form.submit();
});

// função que valida email 
function isEmailValid(email) {

    //usando uma regex pra validar
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// função que valida a senha 
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }

    return false;
}