let containerSenha = document.getElementById("containerSenha");
let inputSenha = document.getElementById("senha");
let eyeSenha = document.getElementById("eyePassword");

eyeSenha.addEventListener("click", function() {
  containerSenha.classList.toggle("visible");
  if (containerSenha.classList.contains("visible")) {
    eyeSenha.src = "./assets/img/eye-off.svg";
    inputSenha.type = "text";
  } else {
    eyeSenha.src = "./assets/img/eye.svg";
    inputSenha.type = "password";
  }
})

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