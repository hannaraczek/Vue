import { User, UserSerivce } from '@/services/User.service'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'

const userService = new UserSerivce()

export default {
  namespaced: true, // so now all actions, mutations, and getters will be namespaced
  state: {
    user: { name: 'hullo' }
  },
  mutations: {
    UPDATE_USER(state, user: User) {
      state.user = user
    },
    ADD_WORKOUT_RECORD(state, workout: WorkoutRecord) {
      state.user.workouts.push(workout)
    }
  },
  actions: {
    setUser({ commit }, id) {
      // returning these calls then allows the disptcher to listen, too, to do things like display errors
      return userService.getUser(id).then(resp => commit('UPDATE_USER', resp.data))
    },
    createWorkoutRecord({ commit }, workout: WorkoutRecord) {
      // TODO patch the workout, .then
      commit('ADD_WORKOUT_RECORD', workout)
    }
  },
  getters: {
    getWorkoutById: state => (id: string) => state.user.workouts.find(w => w.id === id)

  }

}
