import Vue from 'vue'
import Vuex from 'vuex'
import { Exercise, ExerciseArea } from '@/data/WorkoutRecord.interface'
import { User, UserSerivce } from '@/services/User.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {} as User,
    selectedExerciseIds: [] as string[],
    // TODO: fetch exercises from the database with an action
    availableExercises: [
      {
        id: 'arm1',
        type: ExerciseArea.ARM,
        videoUrl: 'https://www.youtube.com/watch?v=UyTR2EjTAXU',
        exerciseLength: '7:00'
      },
      {
        id: 'leg1',
        type: ExerciseArea.LEG,
        videoUrl: 'https://www.youtube.com/watch?v=zLBFQ_mFl2E',
        exerciseLength: '15:00'
      }
    ] as Exercise[]
  },

  // synchronus
  mutations: {
    PUSH_EXERCISE_ID(state, id) {
      state.selectedExerciseIds.push(id)
    },
    UPDATE_USER(state, user: User) {
      state.user = user
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
    }
  },
  getters: {
    selectedExercisesLength: state => state.selectedExerciseIds.length,
    getExerciseById: state => (id: string) => state.availableExercises.find(e => e.id === id),
    getWorkoutById: state => (id: string) => state.user.workouts.find(w => w.id === id)
  },
  modules: {}
})
