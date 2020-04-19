import Vue from 'vue'
import Vuex from 'vuex'
import { Exercise } from '@/data/WorkoutRecord.interface'
import { ExerciseService } from '@/services/Exercise.service'
import user from '@/store/modules/user'
import notifications from '@/store/modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedExerciseIds: [] as string[],
    availableExercises: [] as Exercise[]
  },

  mutations: {
    PUSH_EXERCISE_ID(state, id) {
      state.selectedExerciseIds.push(id)
    },
    UPDATE_AVAILABLE_EXERCISES(state, exercises: Exercise[]) {
      state.availableExercises = exercises
    }
  },

  // async
  actions: {
    addExercise({ state, commit, dispatch }, exerciseId) {
      // since the state passed into a module's action is scoped to that module,
      // if you need to access a different module's state, you need to use rootState instead of state so it starts at the root
      console.log(state.user.user.name)
      commit('PUSH_EXERCISE_ID', exerciseId)

      // we can call other module's actions, too. Since actions, mutations, and getters are globa,
      // they can be called as-is
      // but here, user module is namespaced, so we have to make the module explicit
      dispatch('user/setUser', 2)
    },
    setAvailableExercises({ commit }) {
      const exerciseService: ExerciseService = new ExerciseService()
      return exerciseService.getExercises().then(resp => commit('UPDATE_AVAILABLE_EXERCISES', resp.data))
    }
  },
  getters: {
    selectedExercisesLength: state => state.selectedExerciseIds.length
  },
  modules: {
    user,
    notifications
  }
})
