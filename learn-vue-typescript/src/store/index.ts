import Vue from 'vue'
import Vuex from 'vuex'
import { Exercise, WorkoutRecord } from '@/data/WorkoutRecord.interface'
import { User, UserSerivce } from '@/services/User.service'
import { ExerciseService } from '@/services/Exercise.service'

Vue.use(Vuex)
const userService = new UserSerivce()

export default new Vuex.Store({
  state: {
    user: {} as User,
    selectedExerciseIds: [] as string[],
    availableExercises: [] as Exercise[]
  },

  mutations: {
    PUSH_EXERCISE_ID(state, id) {
      state.selectedExerciseIds.push(id)
    },
    UPDATE_USER(state, user: User) {
      state.user = user
    },
    UPDATE_AVAILABLE_EXERCISES(state, exercises: Exercise[]) {
      state.availableExercises = exercises
    },
    ADD_WORKOUT_RECORD(state, workout: WorkoutRecord) {
      state.user.workouts.push(workout)
    }
  },

  // async
  actions: {
    addExercise({ state, commit }, exerciseId) {
      if (state.user) {
        commit('PUSH_EXERCISE_ID', exerciseId)
      }
    },
    setUser({ commit }, id) {
      // returning these calls then allows the disptcher to listen, too, to do things like display errors
      return userService.getUser(id).then(resp => commit('UPDATE_USER', resp.data))
    },
    setAvailableExercises({ commit }) {
      const exerciseService: ExerciseService = new ExerciseService()
      return exerciseService.getExercises().then(resp => commit('UPDATE_AVAILABLE_EXERCISES', resp.data))
    },
    createWorkoutRecord({ commit }, workout: WorkoutRecord) {
      // TODO patch the workout, .then
      commit('ADD_WORKOUT_RECORD', workout)
    }
  },
  getters: {
    selectedExercisesLength: state => state.selectedExerciseIds.length,
    getWorkoutById: state => (id: string) => state.user.workouts.find(w => w.id === id)
  },
  modules: {}
})
