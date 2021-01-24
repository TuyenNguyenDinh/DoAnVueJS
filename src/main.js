import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';
import Productshot from "./components/Body/Product/products_hot";
import NewProduct from "./components/Body/Product/products_new.vue";
import Category from "./components/category.vue";
import Body from "./components/Body/body.vue";
import Register from './components/register.vue';
import Login from './components/login.vue';
// import Search from './components/Header/search.vue';
import Filter from './components/Body/filtersearch.vue';
import Details from './components/details.vue';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/api';
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'body',
            component: Body,
            children: [{
                    path: '/',
                    name: 'hotproduct',
                    component: Productshot
                },
                {
                    path: 'newproduct',
                    name: 'newproduct',
                    component: NewProduct
                }
            ]
        },
        {
            path: '/category/:id',
            name: 'category',
            component: Category
        },
        {
            path: '/search',
            name: 'filtersearch',
            component: Filter
        }, {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false
            }
        }, {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: false
            }
        }, {
            path: '/details/:id',
            name: 'details',
            component: Details,
        }
    ]
})
Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/src/drivers/auth/bearer'),
    http: require('@websanova/vue-auth/src/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/src/drivers/router/vue-router.2.x.js'),
});

App.router = Vue.router
new Vue(App).$mount('#app');