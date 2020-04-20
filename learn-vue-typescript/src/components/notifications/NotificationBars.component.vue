<template>
  <div>
    <notification-bar v-for="notification in notifications" :notification="notification"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import NotificationBar from './NotificationBar.component.vue'

export default Vue.extend({
  name: 'NotificationBars',
  computed: {
    ...mapState('notifications', ['notifications'])
  },
  components: {
    NotificationBar
  }
})
</script>

<style scoped>

</style>
