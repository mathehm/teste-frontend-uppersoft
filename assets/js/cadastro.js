function redirectLogin(event) {
    event.preventDefault();

    let nome = document.getElementById("nome")
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let senhaConfirm = document.getElementById("senhaConfirm");

    sessionStorage.setItem("nome", nome.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("senha", senha.value);
    sessionStorage.setItem("senhaConfirm", senhaConfirm.value);

    window.location.href = "index.html";
}

document.getElementById("formCadastro").addEventListener("submit", redirectLogin);