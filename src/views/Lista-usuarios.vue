<template>
  <body>
    <!-- Loading -->
    <div id="containerUserLod" class="loading">
      <div class="loading__user"></div>
    </div>
    <header>
      <img class="logo" src="../assets/img/logo-uppersoft.svg" />
    </header>
    <main id="usuarios" class="usuarios">
      <div class="usuarios__admUsuarios">
        <h1 class="usuarios__admUsuarios__text">Administrar Usuários</h1>
        <template v-if="loading">
          <h1>Carrengando</h1>
        </template>
        <template v-else-if="listaUsuarios">
          <div 
            id="userCard" 
            class="usuarios__admUsuarios__card"
          >
            <!-- Popular com usuários -->
            <div
              v-for="(usuario, index) in listaUsuarios"
              :key="index"
              class="usuarios__admUsuarios__card__form"
            >
              <div class="usuarios__admUsuarios__card__form__button">
                <button
                  type="submit"
                  style="
                    background-color: transparent;
                    border-color: transparent;
                    cursor: pointer;
                  "
                >
                  <SvgElement name="Edit" />
                </button>
              </div>
              <div class="usuarios__admUsuarios__card__form__info">
                <div class="usuarios__admUsuarios__card__form__info__img">
                  <img id="imgAvatar" :src="usuario.avatar" />
                </div>
                <h2
                  id="user1-nome"
                  class="usuarios__admUsuarios__card__form__info__text"
                >
                  {{ usuario.first_name }} {{ usuario.last_name }}
                </h2>
                <h2 class="usuarios__admUsuarios__card__form__info__subText">
                  {{ usuario.email }}
                </h2>
              </div>
            </div>
          </div>
        </template>

        <!-- Paginação -->
        <div class="usuarios__admUsuarios__indice">
          <h2 class="usuarios__admUsuarios__indice__text">
            mostrando
            <span id="users_per_page">{{ usuariosPorPagina }}</span> de
            <span id="users_total">{{ usuariosTotal }}</span>
          </h2>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
// import apiUsers from "../api/users";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.getUsersData();
  },
  beforeMount() {
    this.$nextTick(function () {
      setTimeout(this.hideLoading, 2000);
    });
  },
  computed: {
    ...mapGetters({
      listaUsuarios: "getListaUsuarios",
      usuariosPorPagina: "getUsuariosPorPagina",
      usuariosTotal: "getUsuariosTotal",
    }),
  },
  methods: {
    ...mapActions(["getUsers"]),
    hideLoading() {
      document.getElementById("containerUserLod").style.display = "none";
      let mainUser = document.getElementById("usuarios").style;
      mainUser.display = "flex";
    },
    async getUsersData() {
      // Populando listagem de usuários
      this.loading = true;
      try {
        await this.getUsers();
      } catch (error) {
        alert("Erro na requisição");
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss">
#usuarios {
  display: none;
}

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__user {
    animation: loadRotate 1s infinite;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 6px solid var(--color-white);
    border-top-color: var(--color-primary);
  }

  @keyframes loadRotate {
    0% {
      transform: rotate(360deg);
    }
  }
}

.usuarios {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  &__admUsuarios {
    width: 50rem;

    &__text {
      font-size: 32px;
      display: inline-block;
    }

    &__card {
      display: grid;
      grid-template: 1fr 1fr / 1fr 1fr 1fr;
      grid-gap: 25px;

      &__form {
        background-color: white;
        border-radius: 10px;
        height: 11rem;

        &__button {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        &__info {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          &__img {
            border-radius: 100%;
            background-color: var(--color-gray);
            box-sizing: border-box;

            #imgAvatar {
              width: 60px;
              border-radius: 50%;
            }
          }

          &__text {
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 20px;
          }

          &__subText {
            color: var(--color-dark);
            font-size: 12px;
          }
        }
      }
    }

    &__indice {
      display: flex;
      justify-content: end;
      align-items: center;
      margin-top: 15px;
      width: 100%;

      &__text {
        color: var(--color-dark);
        font-size: 12px;
      }
    }
  }
}
</style>