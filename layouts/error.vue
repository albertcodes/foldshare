<template>
  <v-app dark>
    <div class="col-12 d-flex flex-nowrap justify-space-between">
      <div class="col-2"></div>
      <div class="col-8">
        <v-img src="404.png"> </v-img>
      </div>
      <div class="col-2"></div>
    </div>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <!-- <NuxtLink to="/"> Home page </NuxtLink> -->
    <div class="home col-12 d-flex flex-nowrap justify-space-between">
      <div class="col-4"></div>
      <div class="col-4 d-flex justify-center">
        <v-btn
          class="mt-4"
          color="transparent"
          type="button"
          style="color: info"
          href="/"
        >
          <v-icon right class="mr-2"> mdi-home </v-icon>
          Back to safety
        </v-btn>
      </div>
      <div class="col-4"></div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Oops! Page Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: yellow;
  text-align: center;
}
</style>
