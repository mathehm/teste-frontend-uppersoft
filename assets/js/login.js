function redirectUser(event) {
    event.preventDefault();

    let login = document.getElementById("email");
    let senhaLogin = document.getElementById("senha");

    if (login.value == sessionStorage.getItem("email") && senhaLogin.value == sessionStorage.getItem("senha")) {
        alert("Login Efetuado");
        window.location.href = "lista-usuarios.html";
    }
    else {
        alert("Usuário Não Cadastrado");
    }
}

document.getElementById("formLogin").addEventListener("submit", redirectUser);