import { UserSerivce } from '@/services/User.service'
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
    setUser({ commit, dispatch }, id: string) {
      // returning these calls then allows the disptcher to listen, too, to do things like display errors
      return userService.getUser(id)
        .then(resp => {
          dispatch('notifications/create', { type: 'success', message: 'success woo!' }, { root: true })
          commit('UPDATE_USER', resp.data)
        })
        .catch(error => dispatch('notifications/create', { type: 'error', message: 'error getting user', error }, { root: true }))
    }
  }
}
