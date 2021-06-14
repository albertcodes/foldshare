<template>
  <v-card
    :to="{ path: '/dashboard', query: { url, title, subsTitle, money, star } }"
  >
    <v-img :src="url" height="200px">
      <v-chip v-if="chip" class="ma-2" :color="chipColor"> {{ chip }} </v-chip>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle> {{ subsTitle }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange lighten-2" text> ${{ money }} </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon style="width: 64px">
        {{ star }}
        <v-icon color="yellow">mdi-star</v-icon>
      </v-btn>
    </v-card-actions>
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
    money: {
      type: String,
      default: '',
    },
    star: {
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