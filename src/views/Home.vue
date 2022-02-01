<template>
  <div>
    <header>
      <img src="../assets/img/logo-uppersoft.svg" />
    </header>
    <main class="home">
      <div class="home__acessar">
        <h1>Acessar</h1>
        <form id="formLogin" class="home__acessar__form">
          <h2>E-mail</h2>
          <input
            id="email"
            name="email"
            type="email"
            placeholder=""
            v-model="email"
            required
          />
          <h2>Senha</h2>
          <span class="home__acessar__form__key" id="containerSenha">
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder=""
              v-model="senha"
              required
            />
            <SvgElement
              name="Eye"
              id="eyePassword"
              height="2.5rem"
              v-if="!visible"
              @click="eye"
            />
            <SvgElement
              name="Eye-off"
              id="eyePassword"
              height="2.5rem"
              v-if="visible"
              @click="eye"
            />
          </span>
          <input type="submit" value="ENTRAR" @click.prevent.stop="entrar()" />
        </form>
        <div class="home__acessar__sub">
          <p class="home__acessar__sub__text">Não possui conta?&nbsp;</p>
          <router-link class="home__acessar__sub__link" to="/cadastro"
            >Cadastre-se aqui</router-link
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      email: "",
      senha: "",
      visible: false,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    add(){
      this.$store.mutation.increment
    },
    entrar() {
      if (
        this.email == sessionStorage.getItem("email") &&
        this.senha == sessionStorage.getItem("senha")
      ) {
        alert("Login Efetuado");
        this.$router.push("/lista-usuarios");
      } else {
        alert("Usuário Não Cadastrado");
      }
    },
    eye() {
      let inputSenha = document.getElementById("senha");

      if (inputSenha.type == "password") {
        this.visible = true;
        inputSenha.type = "text";
      } else {
        this.visible = false;
        inputSenha.type = "password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  &__acessar {
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 5px;

    &__form {
      width: var(--homeWidth);

      #eyePassword {
        cursor: pointer;
        width: 2rem;
        margin: 0.313rem 0rem 0.313rem 0.313rem;
        border-radius: 0.313rem;
        padding: 0rem 0.5rem 0rem 0.5rem;
        background-color: var(--color-primary);
      }

      &__key {
        display: flex;
      }
    }

    &__sub {
      display: flex;
      margin-top: 0.5rem;

      &__text {
        color: var(--color-dark);
        font-size: 12px;
      }

      &__link {
        color: var(--color-primary);
        font-size: 12px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}
</style>