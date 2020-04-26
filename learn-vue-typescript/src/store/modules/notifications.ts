import { AxiosResponse } from 'axios'
import { Notification } from '@/models/Notification.interface'

let id = 1

export default {
  namespaced: true, // so now all actions, mutations, and getters will be namespaced

  state: {
    notifications: [] as Notification[]
  },
  mutations: {
    PUSH(state, notification) {
      state.notifications.push(notification)
    },
    DELETE(state, id) {
      state.notifications = state.notifications.filter((n: Notification) => n.id !== id)
    }
  },
  actions: {
    add({ commit }, notification) {
      commit('PUSH', notification)
    },
    remove({ commit }, id) {
      commit('DELETE', id)
    },

    // TODO: replace thing with meaningful name everywhere
    create({ commit, dispatch }, thing: { type: string; message: string; response: AxiosResponse }) {
      const notification: Notification = {
        id: id++,
        type: thing.type,
        message: thing.message,
        status: thing.response?.status,
        statusText: thing.response?.statusText
      }
      commit('PUSH', notification)
    }
  }
}
