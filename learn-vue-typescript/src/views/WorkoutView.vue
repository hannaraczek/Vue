<template>
  <div>
    <h1>Viewing log entry for day {{ workout.day }}!</h1>
    <ExerciseDetailComponent v-for="exercise in workout.exercises" :exercise="exercise"></ExerciseDetailComponent>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { WorkoutRecord } from '@/data/WorkoutRecord.interface';
  import ExerciseDetailComponent from '@/components/ExerciseDetailComponent.vue';

  export default Vue.extend({
    props: {
      workout: {
        type: Object as () => WorkoutRecord,
        default: null
      }
    },

    components: {
      ExerciseDetailComponent
    }
  });
</script>
