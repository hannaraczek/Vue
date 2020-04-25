import { WorkoutService } from '@/services/Workout.service'
import { WorkoutRecord } from '@/data/WorkoutLog.interface'

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
        .catch(error => dispatch('throwError', { message: 'error adding workout', error }))
    },
    setUserWorkouts({ rootState, commit }) {
      console.log('THING', rootState.user.user.id)
      return workoutService.getWorkoutLogs(rootState.user.user.id)
        .then(resp => {
          console.log(resp)
          commit('SET_WORKOUTS', resp.data[0].workouts)
        })
    },
    getWorkoutById({ state, rootState, commit, dispatch }, id: string): Promise<WorkoutRecord> {
      const workout: WorkoutRecord = state.user?.workouts?.find((w: WorkoutRecord) => w.id === id)
      const promise: Promise<WorkoutRecord> = workout
        ? Promise.resolve(workout)
        : workoutService.getWorkoutLogs(rootState.user.user.id)
          .then(resp => {
            // TODOD: Implement method and just plain implement fetching an individual workout log.
            // We only have one/user right now, so we don't have that at the moment.
            const workout = resp.data[0].workouts.find(w => w.id === id)
            if (!workout) {
              throw new Error(`Workout with ID ${id} not found`)
            }
            commit('ADD_WORKOUT_RECORD', workout)
            return workout
          })
          .catch(error => dispatch('user/throwError', { message: 'error getting workout', error }, { root: true }))
      return promise.then(workout => commit('SET_WORKOUT', workout))
    }
  }
}
