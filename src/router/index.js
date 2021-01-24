import Vue from 'vue'
import VueRouter from 'vue-router';

import Productshot from "../components/Body/Product/products_hot";
import NewProduct from "../components/Body/Product/products_new.vue";
import Category from "../components/category.vue";
import Body from "../components/Body/body.vue";
import Register from '../components/register.vue';
import Login from '../components/login.vue';
import Search from '../components/Header/search.vue';
import Details from '../components/details.vue';

Vue.use(VueRouter);

const routes = new VueRouter({
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
            path: '/search?q=key',
            name: 'search',
            component: Search
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
const router = new VueRouter({
    mode: 'history',
    routes
})

export default new VueRouter({ router });