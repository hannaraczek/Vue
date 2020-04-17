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

// TODO create a workout record in a record create method and then call this.$store.dispatch('createWorkoutRecord', workoutRecord)
export default Vue.extend({
  data() {
    // fyi, you can fill data here before returning it, like having a constant array that you fill with initial data before returning it.
    // it's just a function, after all.

    // probably create an empty workout record object here and bind inputs when you use them.
    // Then when you create the object, it's already there and ready to send off.
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
