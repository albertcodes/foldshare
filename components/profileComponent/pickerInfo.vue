<template>
  <div class="mb-6 col col-12">
    <v-date-picker
      v-model="date"
      :event-color="(date) => (date[9] % 2 ? '#d9534f' : '#f0ad4e')"
      :events="functionEvents"
      full-width
      no-title
      color="#5cb85c"
    ></v-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    functionEvents(date) {
      const [, , day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['#d9534f', '#5bc0de']
      return false
    },
  },
}
</script>
