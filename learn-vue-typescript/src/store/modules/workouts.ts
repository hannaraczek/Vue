import { WorkoutService } from '@/services/Workout.service'
import { WorkoutRecord } from '@/data/WorkoutLog.interface'
import { isNil } from 'lodash'
const workoutService = new WorkoutService()

export default {
  namespaced: true, // so now all actions, mutations, and getters will be namespaced
  state: {
    userWorkouts: [] as WorkoutRecord[],
    workout: {} as WorkoutRecord
  },
  mutations: {
    SET_WORKOUTS(state, workouts: WorkoutRecord[]) {
      state.userWorkouts = workouts
    },
    SET_WORKOUT(state, workout: WorkoutRecord) {
      state.workout = workout
    },
    ADD_WORKOUT_RECORD(state, workout: WorkoutRecord) {
      state.userWorkouts.push(workout)
    }
  },
  actions: {
    addUserWorkout({ state, rootState, commit, dispatch }, workout: WorkoutRecord) {
      const updatedWorkouts = state.userWorkouts.slice().push(workout)
      workoutService.updateWorkouts(rootState.user.user.id, updatedWorkouts)
        .then(() => commit('ADD_WORKOUT_RECORD', workout))
        .catch(error => dispatch('notifications/create', { type: 'error', message: 'error adding workout', error }, { root: true }))
    },
    setUserWorkouts({ rootState, commit }) {
      return workoutService.getWorkoutLogs(rootState.user.user.id)
        .then(resp => commit('SET_WORKOUTS', resp.data[0].workouts))
    },
    async getWorkoutById({ state, rootState, commit, dispatch }, thing: { userId: string; workoutId: string }): Promise<WorkoutRecord> {
      if (isNil(rootState.user.user.id)) {
        await dispatch('user/setUser', thing.userId, { root: true })
      }

      const workout: WorkoutRecord = state.workouts?.find((w: WorkoutRecord) => w.id === thing.workoutId)
      const promise: Promise<WorkoutRecord> = workout
        ? Promise.resolve(workout)
        : dispatch('setUserWorkouts')
          .then(() => {
            const workout = state.userWorkouts.find((w: WorkoutRecord) => w.id === thing.workoutId)
            if (!workout) {
              throw new Error(`Workout with ID ${thing.workoutId} not found`)
            }
            commit('ADD_WORKOUT_RECORD', workout)
            return workout
          })
          .catch(() => dispatch('notifications/create', { type: 'error', message: 'error getting workout' }, { root: true }))
      return promise.then(workout => commit('SET_WORKOUT', workout))
    }
  }
}
