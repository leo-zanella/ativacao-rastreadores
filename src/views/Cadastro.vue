<template>
    <v-container>
      <!-- Aqui você pode adicionar o formulário de cadastro -->
      <v-btn @click="cadastrar">Cadastrar</v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'CadastroForm',
    methods: {
      cadastrar() {
        // Lógica de cadastro
        // Se o cadastro for bem-sucedido, redirecione para '/visitas-agendadas'
        this.$router.push('/visitas-agendadas');
      }
    }
  }
  </script>
  