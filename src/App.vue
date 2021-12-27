<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    style() {
      return `background-color: #${this.color}`;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/sass/_variables.scss";

* {
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
}

body {
  background-color: var(--color-gray);

  header {
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }

  @media screen and (max-width: 40rem) {
    .cadastro {
      overflow: auto;
    }

    .cadastro__cadastrar__form {
      width: auto;
    }

    .usuarios {
      overflow: auto;
    }

    .usuarios__admUsuarios {
      padding: 1rem;
      padding-top: 35rem;
    }

    .usuarios__admUsuarios__card {
      display: flex;
      flex-direction: column;
    }
  }
}

input,
select {
  border-color: var(--color-primary);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 10px;
  width: 100%;
}

input[type="submit"] {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  margin-top: 20px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
  transition: 0.5s;
}

input:focus {
  outline: none !important;
  border-color: var(--color-primary);
  box-shadow: 0 0 2px var(--color-primary);
}

select:focus {
  outline: none !important;
  border-color: var(--color-primary);
  box-shadow: 0 0 2px var(--color-primary);
}

h1 {
  color: var(--color-primary);
  font-size: 22px;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  text-align: left;
}
</style>
