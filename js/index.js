import Vue from '/web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'
import axios from "/web_modules/axios/dist/axios.js"
import VueRouter from '/web_modules/vue-router/dist/vue-router.esm.browser.js'

Vue.use(httpVueLoader);
Vue.use(VueRouter)

Vue.prototype.$http = axios;

const Foo = { template: '<div>foo hardcoded data</div>' }

const routes = [
    { path: '/foo', component: Foo, props: true },
    { path: '/page2', component: httpVueLoader('/components/page2.vue'), props: true },
    { path: '/', component: httpVueLoader('/components/home.vue'), props: true }
  ]
  
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    el: '#app',
    components: {
        'app': 'url:./components/app.vue'
    },
    template: '<app></app>',
    router
});