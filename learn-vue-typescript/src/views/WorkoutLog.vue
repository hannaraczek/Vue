<template>
  <div>
    <h1>This is the full log!</h1>
    <WorkoutRecordComponent v-for="workout in workouts" :workout="workout"></WorkoutRecordComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WorkoutRecordComponent from '@/components/WorkoutSummaryComponent.vue'
import { WorkoutService } from '@/services/Workout.service'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface';

const workoutService: WorkoutService = new WorkoutService()
export default Vue.extend({
  name: 'WorkoutLog',
  created(): void {
    workoutService.getEvents()
      .then(data => { this.workouts = data })
      .catch(err => console.log('error!', err))
  },
  components: {
    WorkoutRecordComponent
  },
  data() {
    return {
      workouts: [] as WorkoutRecord[]
    }
  }
})
</script>
