<template>
  <div v-if="workout">
    <h1>Viewing log entry for day {{ workout.day }}!</h1>
    <ExerciseDetailComponent v-for="e in workout.exercises" :exerciseRecord="e"></ExerciseDetailComponent>
    <BaseIconComponent></BaseIconComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'
import ExerciseDetailComponent from '@/components/ExerciseDetailComponent.vue'

export default Vue.extend({
  components: {
    ExerciseDetailComponent
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      workout: this.$store.getters.getWorkoutById(this.id) as WorkoutRecord
    }
  }
})
</script>
