import Vue from 'vue'
import Vuex from 'vuex'
import { Exercise, ExerciseArea } from '@/data/WorkoutRecord.interface'
import { User, UserSerivce } from '@/services/User.service'
import { ExerciseService } from '@/services/Exercise.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {} as User,
    selectedExerciseIds: [] as string[],
    availableExercises: [] as Exercise[]
  },

  // synchronus
  mutations: {
    PUSH_EXERCISE_ID(state, id) {
      state.selectedExerciseIds.push(id)
    },
    UPDATE_USER(state, user: User) {
      state.user = user
    },
    UPDATE_AVAILABLE_EXERCISES(state, exercises: Exercise[]) {
      state.availableExercises = exercises
    }
  },

  // asynchronus
  actions: {
    addExercise({ state, commit }, exerciseId) {
      if (state.user) {
        commit('PUSH_EXERCISE_ID', exerciseId)
      }
    },
    setUser({ commit }, id) {
      const userService = new UserSerivce()
      userService.getUser(id).then(user => commit('UPDATE_USER', user))
    },
    setAvailableExercises({ commit }) {
      const exerciseService: ExerciseService = new ExerciseService()
      exerciseService.getExercises().then(exercises => commit('UPDATE_AVAILABLE_EXERCISES', exercises))
    }
  },
  getters: {
    selectedExercisesLength: state => state.selectedExerciseIds.length,
    getWorkoutById: state => (id: string) => state.user.workouts.find(w => w.id === id)
  },
  modules: {}
})
