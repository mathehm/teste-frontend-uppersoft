// Populando listagem de usuários
axios.get('https://reqres.in/api/users')
  .then(function (response) {
    let listaUsuarios = response.data.data;
    let usuariosPorPagina = response.data.per_page;
    let usuariosTotal = response.data.total;

    let divUsuarios = document.getElementById("userCard");
    let spanPerPage = document.getElementById("users_per_page");
    let spanTotal = document.getElementById("users_total");

    spanTotal.innerHTML = usuariosTotal;
    spanPerPage.innerHTML = usuariosPorPagina;

    listaUsuarios.forEach(usuario => {
      divUsuarios.innerHTML += `
        <div class="usuarios__admUsuarios__card__form">
          <div  class="usuarios__admUsuarios__card__form__button">
              <button type="submit" style="background-color:transparent; border-color:transparent; cursor:pointer;"> 
                  <img src="./assets/img/icon-edit.svg" height="23"/>
          </div>
          <div class="usuarios__admUsuarios__card__form__info">
              <div class="usuarios__admUsuarios__card__form__info__img">
                  <img id="imgAvatar" src="${usuario.avatar}"/>
              </div>
              <h2 id="user1-nome" class="usuarios__admUsuarios__card__form__info__text">${usuario.first_name} ${usuario.last_name}</h2>
              <h2 class="usuarios__admUsuarios__card__form__info__subText">${usuario.email}</h2>
          </div>
        </div>
      `
    });
    hideLoading();
  })
  .catch(function (error) {
    alert("Erro na requisição!");
  });