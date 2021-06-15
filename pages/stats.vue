<template>
  <div class="core-page mt-4">
    <div class="row">
      <div
        class="col-md-6 col-lg-3 col-12"
        v-for="item in fourArray"
        :key="item.names"
      >
        <v-card class="mt-4" rounded>
          <v-card-title class="align-start d-flex justify-space-between">
            <div
              class="overflow-hidden mt-n9 transition-swing rounded"
              style="
                width: 100px;
                height: 100px;
                max-width: 100%;
                background-color: rgb(253, 154, 19);
                border-color: rgb(253, 154, 19);
              "
              :style="{ backgroundColor: item.color, borderColor: item.color }"
            >
              <div class="pa-8" style="text-align: center">
                <v-icon>mdi-{{ item.titleIcon }}</v-icon>
              </div>
            </div>
            <div
              class="pl-4"
              style="text-align: right; font-size: 0.8rem; color: #999"
            >
              {{ item.name }}
              <div class="text-subtitle-1 mb-n2">
                <div class="text-right" style="color: #3c4858">
                  {{ item.nums }}
                </div>
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions class="px-4 text-caption grey--text">
            <v-icon class="mr-2" style="font-size: 16px">
              mdi-{{ item.actionsIcon }}</v-icon
            >
            <div>{{ item.actionsText }}</div>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div class="row mt-6">
      <div class="col-md-4 col-12" v-for="(i, index) in 3" :key="index">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div>
              <h3 class="display-1 font-weight-light orange--text mb-2">
                QW cooking utensils
              </h3>
              <div class="font-weight-light title mb-2" style="color: #999">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fourArray: [
        {
          color: 'rgb(253, 154, 19)',
          titleIcon: 'sofa-single',
          name: 'Booking',
          nums: '184',
          actionsIcon: 'alert',
          actionsText: 'Get More Space...',
        },
        {
          color: '#e91e63',
          titleIcon: 'chart-bar',
          name: 'Website Visits',
          nums: '75.521',
          actionsIcon: 'tag',
          actionsText: 'Tracked from Google Analytics',
        },
        {
          color: '#4caf50',
          titleIcon: 'store',
          name: 'Revenue',
          nums: '$34,245',
          actionsIcon: 'calendar-range',
          actionsText: 'Last 24 Hours',
        },
        {
          color: '#00cae3',
          titleIcon: 'twitter',
          name: 'Followers',
          nums: '+245',
          actionsIcon: 'history',
          actionsText: 'Just Updated',
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>