import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

  import App from './views/App'
  import Welcome from './views/Welcome'
  import About from './views/About'

  const router = new VueRouter({
      mode: 'history',
      routes: [
          {
              path: '/',
              name: 'home',
              component: Welcome
          },
          {
              path: '/about',
              name: 'about',
              component: About
          },
      ],
  });

  const app = new Vue({
      el: '#app',
      components: { App },
      router,
  });
