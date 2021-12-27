<template>
  <body>
    <header class="l-header">
      <img class="logo" src="../assets/img/logo-uppersoft.svg" />
    </header>
    <main class="cadastro">
      <div class="cadastro__cadastrar">
        <h1>Cadastrar</h1>
        <form
          id="formCadastro"
          class="cadastro__cadastrar__form"
          autocomplete="on"
        >
          <div class="cadastro__cadastrar__form__bloco">
            <h2>Nome Completo</h2>
            <input id="nome" name="nome" type="text" v-model="nome" required />
          </div>
          <div class="cadastro__cadastrar__form__bloco">
            <h2>E-mail</h2>
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              required
            />
          </div>
          <div class="cadastro__cadastrar__form__bloco">
            <h2>Estado</h2>
            <select id="estado" name="estado" required>
              <option value="es">ES</option>
              <option value="mg">MG</option>
              <option value="rj">RJ</option>
              <option value="sp">SP</option>
              <option value="pr">PR</option>
              <option value="sc">SC</option>
              <option value="rgs">RGS</option>
              <option value="mt">MT</option>
              <option value="go">GO</option>
              <option value="mgs">MGS</option>
            </select>
          </div>
          <div class="cadastro__cadastrar__form__bloco">
            <h2>Sexo</h2>
            <input
              class="cadastro__cadastrar__form__bloco__radio"
              type="radio"
              id="sexo1"
              name="sexo"
              value="female"
              required
            />
            <label
              class="cadastro__cadastrar__form__bloco__labelRadio"
              for="sexo1"
              >Feminino</label
            >

            <input
              class="cadastro__cadastrar__form__bloco__radio"
              type="radio"
              id="sexo2"
              name="sexo"
              value="male"
            />
            <label
              class="cadastro__cadastrar__form__bloco__labelRadio"
              for="sexo2"
              >Masculino</label
            >

            <input
              class="cadastro__cadastrar__form__bloco__radio"
              type="radio"
              id="sexo3"
              name="sexo"
              value="other"
            />
            <label
              class="cadastro__cadastrar__form__bloco__labelRadio"
              for="sexo3"
              >Outro</label
            >
          </div>
          <div class="cadastro__cadastrar__form__bloco">
            <h2>Senha</h2>
            <input
              id="senha"
              name="senha"
              type="password"
              v-model="senha"
              required
            />
            <p class="cadastro__cadastrar__form__bloco__senha">
              A senha deve ter pelo menos 6 caracteres
            </p>
          </div>
          <div class="cadastro__cadastrar__form__bloco">
            <h2>Confirmar Senha</h2>
            <input
              id="senhaConfirm"
              name="senhaConfirm"
              type="password"
              v-model="senhaConfirm"
              required
            />
          </div>
          <input
            class="cadastro__cadastrar__form__button"
            type="submit"
            value="CADASTRAR"
            @click.prevent.stop="cadastrar()"
          />
        </form>
        <div class="cadastro__cadastrar__sub">
          <p class="cadastro__cadastrar__sub__text">Já possui conta?&nbsp;</p>
          <router-link class="cadastro__cadastrar__sub__link" to="/"
            >Entre aqui</router-link
          >
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  name: "Cadastro",
  data: function () {
    return {
      nome: "",
      email: "",
      senha: "",
      senhaConfirm: "",
    };
  },
  methods: {
    validateEmail(email) {
      var expression = /\S+@\S+\.\S+/;
      return expression.test(email);
    },
    cadastrar() {
      if (!this.validateEmail(this.email)) {
        alert("E-mail Inválido!");
        return;
      }
      if (this.senha != this.senhaConfirm) {
        alert("As senhas não correspondem!");
        return;
      }
      if (this.senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres");
        return;
      }

      sessionStorage.setItem("nome", this.nome);
      sessionStorage.setItem("email", this.email);
      sessionStorage.setItem("senha", this.senha);
      sessionStorage.setItem("senhaConfirm", this.senhaConfirm);

      return this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.cadastro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  &__cadastrar {
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 5px;

    &__form {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 600px;

      &__bloco {
        width: 18rem;
        text-align: center;

        &__radio {
          max-width: 1rem;
          margin-top: 1rem;
        }

        &__labelRadio {
          font-size: 12px;
          color: var(--color-primary);
          margin-right: 5px;
        }

        &__senha {
          font-size: 12px;
          color: var(--color-dark);
        }
      }

      &__button {
        width: 18rem;
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