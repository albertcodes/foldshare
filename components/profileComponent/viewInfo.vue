<template>
  <div class="mb-6 col col-12">
    <v-card class="pb-3">
      <v-card-title
        primary-title
        class="pa-5 pb-3 d-flex flex-nowrap justify-space-between"
      >
        <p style="margin: 0">Memory Usage</p>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" color="blue-grey">
              <v-icon tile>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in titleList" :key="i">
              <v-list-item-title @click="changMedia(item.title)">{{
                item.name
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text class="pa-5 pt-0">
        <div class="row no-gutters">
          <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3 col-5">
            <div class="views-value greyBold--text text-h6 mb-0">Used: 506MB</div><br>
            <div class="views-percent error--text mb-4">49.3% of 999MB left</div>
            <v-btn class="ma-2" small outlined color="green">Buy More</v-btn>
          </div>
          <div
            class="d-flex align-end col-sm-6 col-md-5 col-lg-5 col-xl-8 offset-sm-0 offset-md-2 offset-lg-2 offset-xl-1 col-6 offset-1"
            style="position: relative"
          >
            <v-sparkline
              :value="value"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  data() {
    return {
      titleList: [
        {
          name: '↺ Clean',
        },
        {
          name: '★ Upgrade',
        },
        {
          name: '⊘ Lock',
        },
        {
          name: '➤ Share',
        },
      ],
      width: 1,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }
  },
  methods: {
    changMedia(title) {},
  },
}
</script>

<style scoped>
</style>