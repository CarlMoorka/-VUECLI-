import {createRouter, createWebHashHistory} from 'vue-router';

import HeadLogin from "./components/HeadLogin.vue"
import NowAcc from "./components/NowAcc.vue";
import NowPass from "./components/NowPass.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/Head', component: HeadLogin, alias:'/'},
        { path: '/NowPass', component: NowPass },
        { path: '/NowAcc', component: NowAcc },
    ]
})

// Что бы переходить по ссылкам без перезагрузки страницы