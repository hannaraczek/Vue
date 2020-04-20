<template>
    <div v-if="exerciseRecord">
        <h2>{{ exerciseRecord.exercise.type }}</h2>
        <h3>Tapouts: {{ exerciseRecord.tapOutNumber }}</h3>
        <h3 v-if="exerciseRecord.tapOutNumber">First tapout: {{ exerciseRecord.firstTapOutTime }}</h3>
        <h3>Notes</h3>
        <h4>{{ exerciseRecord.notes }}</h4>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExerciseRecord } from '@/data/WorkoutRecord.interface'

export default Vue.extend({
  props: {
    exerciseRecord: {
      type: Object as () => ExerciseRecord,
      default: null
    }
  }
})
</script>

<style scoped>

</style>
