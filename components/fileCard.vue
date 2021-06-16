<template>
  <v-card
    :to="{ path: '/dashboard', query: { url, title, subsTitle } }"
  >
    <v-img :src="url" height="200px">
      <v-chip v-if="chip" class="ma-2" :color="chipColor"> {{ chip }} </v-chip>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle> {{ subsTitle }} </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subsTitle: {
      type: String,
      default: '',
    },
    chip: {
      type: String,
      default: '',
    },
    chipColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style scoped>
</style>