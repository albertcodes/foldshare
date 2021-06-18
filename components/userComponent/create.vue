<template>
  <v-card class="h-full">
    <div class="row justify-center">
      <div class="col-md-6 col-12">
        <v-form ref="form" class="row justify-center">
          <img src="/welcome.png" alt="welcome" class="my-12 rounded" />
          <img src="/foldshare-text.png" alt="welcome" class="my-12 rounded" />
        </v-form>
        <div class="d-flex justify-center my-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model: 'Foobar',
      items: ['Admin', 'User'],
    }
  },
}
</script>

<style scoped>
</style>