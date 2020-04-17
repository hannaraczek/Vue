<template>
  <div v-if="workout">
    <h1>Viewing log entry for day {{ workout.day }}!</h1>
    <ExerciseDetailComponent v-for="exercise in workout.exercises" :exercise="exercise"></ExerciseDetailComponent>
    <BaseIconComponent></BaseIconComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'
import ExerciseDetailComponent from '@/components/ExerciseDetailComponent.vue'
import { WorkoutService } from '@/services/Workout.service'

const workoutService: WorkoutService = new WorkoutService()

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
      workout: {} as WorkoutRecord
    }
  },
  created(): void {
    workoutService.getEvent(this.id)
      .then(resp => { this.workout = resp })
      .catch(err => console.log(err))
  }
})
</script>
