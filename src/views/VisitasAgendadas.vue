<template>
  <v-container>
    <h2 class="d-flex justify-center mt-5 mb-7">
      Visitas agendadas
    </h2>

    <v-container>
      <div v-for="(group, day) in groupedCards" :key="day">
        <v-row>
          <v-col>
        <v-card-title class="mb-3">{{ formatData(day) }}</v-card-title>

        <v-card
          v-for="item in group"
          :key="item.os"
          width="100%"
          height="150"
          class="mb-5 pt-3 pl-3 align-center justify-center flex-column"
          @click="redirectToInformacoesOrdem"
          elevation="1"
          color="grey lighten-3"
        >
          <v-card-title>
            <v-chip label>OS.{{ item.os }}</v-chip>
            <v-spacer></v-spacer>
            <v-chip class="mr-3">{{ item.horario }}</v-chip>

          </v-card-title>

          <v-card-subtitle class="mt-2 subtitle-1">
            Tipo: {{ item.tipo }}
          </v-card-subtitle>

          <v-card-text class=" subtitle-1">
            Empresa: {{ item.cliente }}
          </v-card-text>

          <v-card-text></v-card-text>
        </v-card>
        </v-col>
      </v-row>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default {
  data() {
    return {
      listaOs: [
        {
          os: '00001',
          tipo: 'Instalação',
          data: '2023-08-01',
          cliente: 'Selbetti',
          horario: '16:30',
        },
        {
          os: '00002',
          tipo: 'Instalação',
          data: '2023-07-25',
          cliente: 'FVB Locadora',
          horario: '08:00',
        },
        {
          os: '00003',
          tipo: 'Instalação',
          data: '2023-09-29',
          cliente: 'Tinto Max',
          horario: '18:00',
        },
        {
          os: '00004',
          tipo: 'Instalação',
          data: '2023-05-29',
          cliente: 'Selbetti',
          horario: '14:00',
        },
        {
          os: '00005',
          tipo: 'Instalação',
          data: '2023-05-29',
          cliente: 'Selbetti',
          horario: '15:00',
        },
      ],
      today: new Date(),
    };
  },
  name: 'VisitasAgendadas',
  computed: {
    groupedCards() {
      return this.groupCardsByDay();
    },
  },
  methods: {
    groupCardsByDay() {
    const sortedList = this.listaOs.sort((a, b) => {
      const dateA = parseISO(a.data);
      const dateB = parseISO(b.data);
      return dateA - dateB;
    });

    const groupedCards = {};

    sortedList.forEach((item) => {
      const date = item.data;
      if (!groupedCards[date]) {
        groupedCards[date] = [];
      }
      groupedCards[date].push(item);
    });

    return groupedCards;
  },

    redirectToInformacoesOrdem() {
      this.$router.push('/informacoes');
    },

    formatData(date) {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, 'dd/MM/yyyy', { locale: ptBR });
    return formattedDate;
  },
  },
};
</script>


<style>
</style>
