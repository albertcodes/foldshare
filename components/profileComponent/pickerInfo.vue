<template>
  <div class="mb-6 col col-12">
    <v-date-picker
      v-model="date"
      :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
      :events="functionEvents"
      full-width
      no-title
      color="#e81607"
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
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    },
  },
}
</script>
