<template>
  <div>
    <div v-if="emailMsg">
      <div class="text-h5 grey--text text--darken-3 px-4 pt-4">
        New Messages
      </div>
      <div
        class="subtitle-2 primary--text font-weight-regular px-4 pb-2 link-item"
      >
        {{ emailMsg }} New Messages
      </div>
    </div>
    <!-- <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          class="pd-5"
          v-for="(email, index) in emailList"
          :key="index"
        >
          <v-list-item-icon class="mr-4 mb-1 d-flex flex-column">
            <v-avatar :color="email.color" size="32">
              <span class="white--text headline">{{ email.name }}</span>
            </v-avatar>
            <span>{{ email.time }}</span>
          </v-list-item-icon>
          <v-list-item-content style="width: 150px">
            <v-list-item-title v-text="email.title"></v-list-item-title>
            <v-list-item-subtitle v-text="email.description">
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
  </div>
</template>

<script>
export default {
  props: {
    emailMsg: {
      type: Number,
      default: 0,
    },
  },
  // data() {
  //   return {
  //     selectedItem: '',
  //     emailList: [
  //       {
  //         name: 'JH',
  //         title: 'Jane Hew',
  //         description: 'Hey!How is it going?',
  //         time: '09:32',
  //         color: this.common.randomColor(),
  //       },
  //       {
  //         name: 'JH',
  //         title: 'Lloyd Brown',
  //         description: 'Hey!How is it going?',
  //         time: '09:32',
  //         color: this.common.randomColor(),
  //       },
  //       {
  //         name: 'JH',
  //         title: 'Lloyd Brown',
  //         description: 'Hey!How is it going?',
  //         time: '09:32',
  //         color: this.common.randomColor(),
  //       },
  //     ],
  //   }
  // },
  // methods: {
  //   randomColor() {
  //     return '#' + Math.random().toString(16).slice(-6)
  //   },
  // },
}
</script>

<style scoped>
</style>