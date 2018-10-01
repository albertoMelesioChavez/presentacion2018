// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false



// Firebase Init

  // const config = {
  //   apiKey: "AIzaSyAIZi1u6ukdMJitiujyksUkM1SlByikc2I",
  //   authDomain: "portafolio-2018-37f53.firebaseapp.com",
  //   databaseURL: "https://portafolio-2018-37f53.firebaseio.com",
  //   projectId: "portafolio-2018-37f53",
  //   storageBucket: "portafolio-2018-37f53.appspot.com",
  //   messagingSenderId: "801255467585"
  // };
  // firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
