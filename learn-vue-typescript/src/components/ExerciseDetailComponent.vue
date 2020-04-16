<template>
    <div>
        <h2>{{ exercise.type }}</h2>
        <h3>Tapouts: {{ exercise.tapOutNumber }}</h3>
        <h3 v-if="exercise.tapOutNumber">First tapout: {{ exercise.firstTapOutTime }}</h3>
        <h3>Notes</h3>
        <h4>{{ exercise.notes }}</h4>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ExerciseRecord } from '@/data/WorkoutRecord.interface';

    export default Vue.extend({
        props: {
            exercise: {
                type: Object as () => ExerciseRecord,
                default: null
            }
        }
    });
</script>

<style scoped>

</style>
