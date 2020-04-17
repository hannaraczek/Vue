<template>
  <div>
    <h1>This is the full log!</h1>
    <WorkoutRecordComponent v-for="workout in user.workouts" :workout="workout"></WorkoutRecordComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WorkoutRecordComponent from '@/components/WorkoutRecordComponent.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'WorkoutLog',
  created(): void {
    // TODO: refactor so that only the exercise ID is referenced in the workouts
    this.$store.dispatch('setUser', 1)
    this.$store.dispatch('setAvailableExercises')
  },
  components: {
    WorkoutRecordComponent
  },
  computed: {
    ...mapState(['user'])
  }

})
</script>
