import Vue from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import Vuetify from 'vuetify'; // Importe o Vuetify corretamente
import store from './store'
import router from './router/index'
import SignaturePad from 'signature_pad';
import VueTheMask from 'vue-the-mask';

Vue.config.productionTip = false
Vue.prototype.$signaturePad = SignaturePad;
Vue.use(VueTheMask);

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#43A047', // Define a cor primária como verde
      },
    },
  },


});

new Vue({
  vuetify, // Use a instância criada
  store,
  router,
  render: h => h(App),
}).$mount('#app');