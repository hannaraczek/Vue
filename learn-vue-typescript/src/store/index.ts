import Vue from 'vue'
import Vuex from 'vuex'
import { Exercise, ExerciseArea } from '@/data/WorkoutRecord.interface'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'helloid', name: 'Jane Doe' },
    // TODO: fetch exercises from the database with an action
    exercises: [
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
  mutations: {},
  actions: {},
  getters: {
    exerciseAreaLength: state => state.exercises.length,
    getExerciseById: state => (id: string) => state.exercises.find(e => e.id === id)
  },
  modules: {}
})
