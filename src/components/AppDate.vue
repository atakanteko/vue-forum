<template>
  <span :title="humanFriendlyDate()">
    {{diffForHumans()}}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizeDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizeDate)
dayjs.extend(relativeTime)

export default {
  name: "AppDate",
  inject: ['dateFormatter'],
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
  },
  methods: {
    diffForHumans() {
      return dayjs.unix(this.timestamp).fromNow();
    },
    humanFriendlyDate() {
      return dayjs.unix(this.timestamp).format('llll')
    }
  },
}
</script>

<style scoped>

</style>