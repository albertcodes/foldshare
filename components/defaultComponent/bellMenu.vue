<template>
  <div>
    <div v-if="bellMsg">
      <div class="text-h5 grey--text text--darken-3 px-4 pt-4">
        New Notifications
      </div>
      <div
        class="subtitle-2 error--text font-weight-regular px-4 pb-2 link-item"
      >
        {{ bellMsg }} New Notifications
      </div>
    </div>
    <!-- <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          class="pd-5"
          v-for="(bell, index) in bellList"
          :key="index"
        >
          <v-list-item-icon class="mr-4 mb-1">
            <v-btn icon :color="bell.color">
              <v-icon>mdi-{{ bell.icon }}</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content style="width: 150px">
            <v-list-item-title v-text="bell.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
  </div>
</template>

<script>
export default {
  props: {
    bellMsg: {
      type: Number,
      default: 0,
    },
  },
  // data() {
  //   return {
  //     selectedItem: '',
  //     bellList: [
  //       {
  //         icon: 'thumb-up-outline',
  //         title: 'Hey!How is it going?',
  //         color: this.common.randomColor(),
  //       },
  //       {
  //         icon: 'share-circle',
  //         title: 'Hey!How is it going?',
  //         color: this.common.randomColor(),
  //       },
  //       {
  //         icon: 'heart-multiple',
  //         title: 'Hey!How is it going?',
  //         color: this.common.randomColor(),
  //       },
  //     ],
  //   }
  // },
}
</script>

<style scoped>
</style>