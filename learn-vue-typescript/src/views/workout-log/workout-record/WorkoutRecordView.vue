<template>
  <div v-if="workout">
    <h1>Viewing log entry for day {{ workout.day }}!</h1>
    <ExerciseDetailComponent v-for="e in workout.exercises" :exerciseRecord="e"></ExerciseDetailComponent>
    <BaseIconComponent></BaseIconComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExerciseDetailComponent from '@/components/ExerciseDetail.component.vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  // TODO: Redirect if user doesn't exist or workout doesn't exist.
  // Ideally there would be some centralized location to contain the logic to redirect of certain things in the route don't exist.
  mounted(): void {
    this.getWorkoutById({ userId: this.user, workoutId: this.id })
  },
  components: {
    ExerciseDetailComponent
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    user: String
  },
  methods: {
    ...mapActions('workouts', ['getWorkoutById'])
  },
  computed: {
    ...mapState('workouts', ['workout'])
  }
})
</script>
