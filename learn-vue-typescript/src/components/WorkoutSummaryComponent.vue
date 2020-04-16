<template>
    <div>
      <router-link :to="{ name: 'View Log', params: { id: `day${workout.day}`, workout: workout }}">
        <h1>Day {{ workout.day }}</h1>
      </router-link>
      <h2>Arms: {{ getDescription('arm') }}</h2>
      <h2>Legs: {{ getDescription('leg') }}</h2>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'

export default Vue.extend({
  name: 'WorkoutRecord',
  props: {
    workout: {
      type: Object as () => WorkoutRecord,
      default: null
    }
  },

  methods: {
    getDescription (type: string) {
      const exerciseRecord = this.workout.exercises.find(e => e.type === type)
      if (!exerciseRecord) {
        return
      }

      return exerciseRecord.tapOutNumber ? `${exerciseRecord.tapOutNumber} tapouts. First one was at ${exerciseRecord.firstTapOutTime}. No biggie!` : 'No tapouts! Excellent work!'
    }
  }
})
</script>

<style scoped></style>
