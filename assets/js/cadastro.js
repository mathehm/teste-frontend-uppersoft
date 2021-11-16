function validateEmail(email) {
  var expression = /\S+@\S+\.\S+/;
  return expression.test(email);
}

function redirectLogin(event) {
  event.preventDefault();

  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let senhaConfirm = document.getElementById("senhaConfirm");

  if (!validateEmail(email.value)) {
    alert ("E-mail Inválido!");
    return;
  }
  if (senha.value != senhaConfirm.value) {
    alert("As senhas não correspondem!");
    return;
  }
  if (senha.value.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres");
    return
  }

  sessionStorage.setItem("nome", nome.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("senha", senha.value);
  sessionStorage.setItem("senhaConfirm", senhaConfirm.value);

  window.location.href = "index.html";
}

document.getElementById("formCadastro").addEventListener("submit", redirectLogin);