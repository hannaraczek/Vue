import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ExerciseLog from '../views/ExerciseLog.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Log',
    component: ExerciseLog
  },
  {
    path: '/log',
    name: 'View Log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ExerciseLogView.vue')
  },
  {
    path: '/add',
    name: 'Create Log',
    component: () => import('../views/ExerciseLogAdd.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
