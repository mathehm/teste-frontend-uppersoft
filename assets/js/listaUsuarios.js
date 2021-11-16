// Populando listagem de usuários
axios.get('https://reqres.in/api/users')
  .then(function (response) {
    var listaUsuarios = response.data.data;
    var usuariosPorPagina = response.data.per_page;
    var usuariosTotal = response.data.total;

    var divUsuarios = document.getElementById("userCard");
    var spanPerPage = document.getElementById("users_per_page");
    var spanTotal = document.getElementById("users_total");

    spanTotal.innerHTML = usuariosTotal;
    spanPerPage.innerHTML = usuariosPorPagina;

    listaUsuarios.forEach(usuario => {
      divUsuarios.innerHTML += `
        <div class="usuarios__admUsuarios__card--form">
          <div  class="usuarios__admUsuarios__card--form--button">
              <button type="submit" style="background-color:transparent; border-color:transparent; cursor:pointer;"> 
                  <img src="./assets/img/icon-edit.svg" height="23"/>
          </div>
          <div class="usuarios__admUsuarios__card--form--info">
              <div class="usuarios__admUsuarios__card--form--info--img">
                  <img id="imgAvatar" src="${usuario.avatar}"/>
              </div>
              <h2 id="user1-nome" class="usuarios__admUsuarios__card--form--info--text">${usuario.first_name} ${usuario.last_name}</h2>
              <h2 class="usuarios__admUsuarios__card--form--info--subText">${usuario.email}</h2>
          </div>
        </div>
      `
    });
    hideLoading();
  })
  .catch(function (error) {
    alert("Erro na requisição!");
  });