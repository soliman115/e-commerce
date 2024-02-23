import {createRouter, createWebHistory} from 'vue-router' ;
  //import main_component from '../main_component.vue'
  import home_component from '../components/home_component.vue' ;
  import blog_component from '../components/blog_component.vue' ;

import mens from "../views/mens.vue"
import womens from "../views/womens.vue"
import Shoses from "../views/Shoses.vue"
import Bags from "../views/Bags.vue"
import Proudcts from "../views/Proudcts.vue"
import cart from "../views/cart.vue"

import jacketsmens from "../components/jacketsmens.vue";
import Tshirtsmens from "../components/Tshirtsmens.vue";
import jeansMens from "../components/jeansMens.vue";
import teaDress from "../components/teaDress.vue";
import mixedClosesWomen from "../components/mixedClosesWomen.vue";
import sowaraDreses from "../components/sowaraDreses.vue";
import womensShoses from "../components/womensShoses";
import healsShose from "../components/healsShose";
import mensShose from "../components/mensShose";



const routes = [
    {
        path: '/',
        component: home_component,
    },


    {
        path:'/blog',
        component: blog_component,
    },
    {
      path : '/cart',
      name : 'cart',
      component : cart
    },
    {
      path: "/Proudcts",
      component: 
      Proudcts
    },

    {
        path: "/men",
        name: "mens",
        component: 
          mens
      },
      
      {
        path:'/womens',
        component: womens,
    },
    {
      path:'/Shoses',
      component: Shoses,
   },
   {
    path:'/Bags',
    component: Bags,
   },
      {
        path: "/jacketsmens",
        name: "jacketsmens",
        component: 
        jacketsmens
      },
      {
        path: "/Tshirtsmens",
        name: "Tshirtsmens",
        component: 
        Tshirtsmens
      },
      {
        path: "/jeansMens",
        name: "jeansMens",
        component: 
        jeansMens
      },
      {
        path: "/teaDress",
        name: "teaDress",
        component: 
        teaDress
      },
      {
        path: "/mixedClosesWomen",
        name: "mixedClosesWomen",
        component: 
        mixedClosesWomen
      },
      {
        path: "/sowaraDreses",
        name: "sowaraDreses",
        component: 
        sowaraDreses
      },
      {
        path:'/healsShose',
        component: healsShose,
    },
    {
      path:'/womensShoses',
      component: womensShoses,
    },
    {
      path:'/mensShose',
      component: mensShose,
    },


];



const router = createRouter(
    {
        routes,
        history: createWebHistory() 
    });
    export default router;