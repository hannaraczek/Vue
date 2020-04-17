<template>
  <div>
    Hi {{user.name}}! How did you do today?
    Add the exercises you completed to create a workout log from the list below.
    You have selected {{selectedExercisesLength}} exercises.
    <ul>
      <li v-for="e in availableExercises" :key="e.id"><button @click="addExercise(e.id)">{{e.type}}</button></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    // fyi, you can fill data here before returning it, like having a constant array that you fill with initial data before returning it.
    // it's just a function, after all.
    return {
      selectedExerciseId: undefined
    }
  },
  computed: {
    ...mapGetters(['selectedExercisesLength']),
    ...mapState(['user', 'availableExercises'])
  },
  methods: {
    addExercise() {
      this.$store.dispatch('addExercise')
    }
  }
})
</script>

<style scoped>

</style>
