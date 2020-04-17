import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ExerciseLog from '../views/workout-log/WorkoutLog.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Log',
    component: ExerciseLog
  },
  {
    path: '/log/:id',
    name: 'View Log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/workout-log/workout-record/WorkoutRecordView.vue'),
    props: true
  },
  {
    path: '/add',
    name: 'Create Log',
    component: () => import('../views/workout-log/workout-record/WorkoutRecordAdd.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
