<!-- LoginForm.vue -->
<template>
  <div>
    <v-form>
      <v-text-field v-model="username" label="Nome de Usuário" required></v-text-field>
      <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
      <v-btn @click="login" color="primary">Login</v-btn>
    </v-form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Implemente a lógica de autenticação aqui, por exemplo, fazendo uma requisição para o servidor
      // Verifique se as credenciais são válidas e defina a variável isLoggedIn como true se o login for bem-sucedido
      if (this.username === 'usuário' && this.password === 'senha') {
        this.$emit('loginSuccess'); // Emita um evento para notificar o App.vue que o login foi bem-sucedido
      } else {
        // Trate o caso de login inválido
        alert('Credenciais inválidas. Tente novamente.');
      }
    },
  },

};
</script>
