import { User, UserSerivce } from '@/services/User.service'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'
import { AxiosError, AxiosResponse } from 'axios';

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
    setUser({ commit, dispatch }, id) {
      // returning these calls then allows the disptcher to listen, too, to do things like display errors
      return userService.getUser(id)
        .then(resp => {
          dispatch('notifySuccess', { message: 'sucess yeah!', response: resp })
          commit('UPDATE_USER', resp.data)
        })
        .catch(error => dispatch('throwError', { message: 'error getting user', error }))
    },
    addUserWorkout({ state, commit, dispatch }, workout: WorkoutRecord) {
      const updatedWorkouts = state.user.workouts.slice().push(workout)
      return userService.updateWorkouts(state.user.id, updatedWorkouts)
        .then(() => commit('ADD_WORKOUT_RECORD', workout))
        .catch(error => dispatch('throwError', { message: 'error adding workout', error }))
    },
    throwError({ dispatch }, thing: { message: string, error: Error }) {
      dispatch('notifications/create', { type: 'error', message: thing.message }, { root: true })
      throw thing.error;
    },
    notifySuccess({ dispatch }, thing: { message: string, response: AxiosResponse }) {
      dispatch('notifications/create', { type: 'success', message: thing.message }, { root: true })
    },
  },
  getters: {
    getWorkoutById: state => (id: string) => state.user.workouts.find(w => w.id === id)

  }

}
