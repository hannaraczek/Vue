import { Notification } from '@/models/Notification.interface'

let id = 1

export default {
  namespaced: true, // so now all actions, mutations, and getters will be namespaced
  state: {
    notifications: [] as Notification[]
  },
  mutations: {
    PUSH(state, notification: Notification) {
      state.notifications.push(notification)
    },
    DELETE(state, id: number) {
      state.notifications = state.notifications.filter((n: Notification) => n.id !== id)
    }
  },
  actions: {
    add({ commit }, notification: Notification) {
      commit('PUSH', notification)
    },
    remove({ commit }, id: number) {
      commit('DELETE', id)
    },

    // TODO: replace thing with meaningful name everywhere
    create({ commit, dispatch }, thing: { type: string; message: string }) {
      const notification: Notification = {
        id: id++,
        type: thing.type,
        message: thing.message
      }
      commit('PUSH', notification)
      if (thing.type === 'error') {
        throw new Error(thing.message)
      }
    }
  }
}
