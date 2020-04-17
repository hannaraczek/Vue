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

export default Vue.extend({
  // eventually there should be an api call made to fetch this info
  props: {
    workout: {
      type: Object as () => WorkoutRecord
    }
  },
  components: {
    ExerciseDetailComponent
  }
});
</script>
