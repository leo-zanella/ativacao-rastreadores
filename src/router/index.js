import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue'
import CadastroForm from '../views/Cadastro.vue';
import VisitasAgendadas from '../views/VisitasAgendadas.vue';
import OrdemDeServico from '../views/OrdemDeServico.vue';
import informacoesOrdem from '../views/informacoesOrdem.vue';
import osNaGarantia from '../views/osNaGarantia.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginForm.vue'),
  },
  {
    path: '/app', 
    name:'app',
    component: App,
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroForm,
  },
  {
    path: '/',
    name: 'visitas-agendadas',
    component: VisitasAgendadas,
  },
  {
    path: '/ordem-de-servico',
    name: 'ordem-de-servico',
    component: OrdemDeServico,
  },
  {
    path: '/informacoes',
    name: 'informacoes-ordem',
    component: informacoesOrdem,
  },
  {
    path: '/garantia',
    name: 'os-na-garantia',
    component: osNaGarantia,
  },

]




const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
});

export default router;