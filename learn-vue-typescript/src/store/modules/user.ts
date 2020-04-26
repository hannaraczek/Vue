import { UserSerivce } from '@/services/User.service'
import { AxiosResponse } from 'axios'
import { User } from '@/models/User.interface'

const userService = new UserSerivce()

export default {
  namespaced: true, // so now all actions, mutations, and getters will be namespaced
  state: {
    user: {} as User
  },
  mutations: {
    UPDATE_USER(state, user: User) {
      state.user = user
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

    // TODO: put these in a shared space to be used by all API calls
    throwError({ dispatch }, thing: { message: string; error: Error }) {
      dispatch('notifications/create', { type: 'error', message: thing.message }, { root: true })
      throw thing.error
    },
    notifySuccess({ dispatch }, thing: { message: string; response: AxiosResponse }) {
      dispatch('notifications/create', { type: 'success', message: thing.message }, { root: true })
    }
  }
}
