<template>
  <div>
    Hi {{user.name}}! Add exercises to create a workout log from the {{exerciseAreaLength}} areas below.
    <ul>
      <li v-for="e in exercises" :key="e.id">{{getExerciseById(e.id)}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    exerciseAreaLength() {
      return this.$store.getters.exerciseAreaLength
    },
    ...mapGetters(['getExerciseById']),
    ...mapState(['user', 'exercises'])
  }
})
</script>

<style scoped>

</style>
