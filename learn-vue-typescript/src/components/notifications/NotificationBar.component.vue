<template>
  <div>
    <p :class="notification.type">{{ notification.message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Notification } from '@/models/Notification.interface'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'NotificationBar',
  props: {
    notification: {
      type: Object as () => Notification,
      required: true
    }
  },
  mounted(): void {
    this.timeout = setTimeout(() => this.remove(this.notification.id), 5000)
  },
  beforeDestroy(): void {
    clearTimeout(this.timeout)
  },
  data() {
    return {
      // we use a variable to store/start seTimeout so we can clear it before destroy
      timeout: -1
    }
  },
  methods: mapActions('notifications', ['remove'])
})
</script>

<style scoped>

</style>
