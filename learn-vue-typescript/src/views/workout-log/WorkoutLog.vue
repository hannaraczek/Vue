<template>
  <div>
    <h1>This is the full log for {{ user.name }}</h1> <!--  moduleName.stateInsideTheModule.prop  -->
    <WorkoutRecord v-for="workout in workouts" :workout="workout"></WorkoutRecord>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WorkoutRecord from '@/components/WorkoutRecord.component.vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  name: 'WorkoutLog',
  created(): void {
    // TODO: refactor so that only the exercise ID is referenced in the workouts
    // TODO: create a vue where the user must be defined
    this.setUser(1)
      .then(() => this.setUserWorkouts())
      .catch(error => console.log('error in view!', error))
    this.setAvailableExercises()
  },
  components: {
    WorkoutRecord
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      workouts: state => state.workouts.userWorkouts
    })
  },
  methods: {
    // user is the namespace, and setUser the method
    // the exercises syntax could also be used --> ['user/setUser']
    ...mapActions('user', ['setUser']),
    ...mapActions('workouts', ['setUserWorkouts']),
    ...mapActions(['setAvailableExercises'])
  }

})
</script>
