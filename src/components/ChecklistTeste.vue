<template>
  <v-container class="justify-center">
    <v-card-text class="align-center d-flex">Selecione apenas o que está funcionando no veículo:</v-card-text>
    <v-checkbox
      :label="`Faróis`"
      v-model="checkboxes[0].value"
      color="green lighten-1"
    ></v-checkbox>
    <v-checkbox
      :label="`Limpador de para-brisa`"
      v-model="checkboxes[1].value"
      color="green lighten-1"
    ></v-checkbox>
    <v-checkbox
      :label="`Vidro elétrico`"
      v-model="checkboxes[2].value"
      color="green lighten-1"
    ></v-checkbox>
    <v-checkbox
      :label="`Tranca elétrica`"
      v-model="checkboxes[3].value"
      color="green lighten-1"
    ></v-checkbox>
    <v-checkbox
      :label="`Rádio`"
      v-model="checkboxes[4].value"
      color="green lighten-1"
    ></v-checkbox>

    <v-checkbox
      :label="`Alarme`"
      v-model="checkboxes[5].value"
      color="green lighten-1"
    ></v-checkbox>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: [
        { label: "Faróis", value: false },
        { label: "Limpador de para-brisa", value: false },
        { label: "Vidro elétrico", value: false },
        { label: "Tranca elétrica", value: false },
        { label: "Rádio", value: false },
        { label: "Alarme", value: false },
      ],
    };
  },

  props: {
    exibirOverlay: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    emitirDadosCheckbox() {
      this.$emit("dados-checkbox", this.checkboxes);
    },
    mounted() {
      this.emitirDadosCheckbox();
  },
  },
  watch: {
    checkboxes: {
      deep: true,
      handler() {
        this.emitirDadosCheckbox();
      },
    },
  },
};
</script>