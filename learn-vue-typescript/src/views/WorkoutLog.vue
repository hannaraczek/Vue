<template>
  <div>
    <h1>This is the full log!</h1>
    <WorkoutRecordComponent v-for="workout in workouts" :workout="workout"></WorkoutRecordComponent>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import WorkoutRecordComponent from '@/components/WorkoutSummaryComponent.vue';
  import { ExerciseType } from '@/data/WorkoutRecord.interface';

  export default Vue.extend({
    name: "WorkoutLog",
    components: {
      WorkoutRecordComponent
    },
    data() {
      return {
        workouts: [
          {
            day: 1,
            exercises: [
              {
                type: ExerciseType.ARM,
                firstTapOutTime: 1.02,
                tapOutNumber: 5,
                notes: 'It was really hard this time around :('
              },
              {
                type: ExerciseType.LEG,
                firstTapOutTime: undefined,
                tapOutNumber: 0,
                notes: "It felt really good this time!"
              }
            ]
          }
        ]
      }
    }
  });
</script>
