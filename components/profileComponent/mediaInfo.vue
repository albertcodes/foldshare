<template>
  <div class="pb-0 pb-sm-3 col col-12" style="padding-top: 20px">
    <v-card class="media-card v-sheet ma-1" style="min-height: 296px">
      <v-card-title
        primary-title
        class="pa-5 pb-3 d-flex flex-nowrap justify-space-between"
      >
        <p style="margin: 0">Media Statistics</p>
        <!-- <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue-grey"
              style="width: 100px"
            >
              {{ showTitle }}
              <v-icon tile>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item-group v-model="showTitle" color="primary">
              <v-list-item v-for="(item, i) in titleList" :key="i">
                <v-list-item-title @click="changMedia(item.title)">
                  {{item.title}}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu> -->
      </v-card-title>
      <v-card-text class="pa-5 pb-0 pt-1">
        <div class="row pb-2 no-gutters">
          <div
            class="icon-list d-flex align-center flex-column col col-6 pb-4"
            v-for="item in iconList"
            :key="item.icon"
          >
            <v-icon class="icons" :color="item.color">mdi-{{ item.icon }}</v-icon>
            <p class="nums"><span>{{ item.nums }}</span> {{ item.name }}</p>
            <p></p>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitle: 'Daily',
      titleList: [
        {
          title: 'Daily',
        },
        {
          title: 'Weekly',
        },
        {
          title: 'Monthly',
        },
      ],
      iconList: [
        {
          icon: 'account-group-outline',
          nums: '1.4k',
          name: 'Shared',
          color: 'pink',
        },
        {
          icon: 'account-multiple-plus-outline',
          nums: '3',
          name: 'Groups',
          color: 'pink',
        },
        {
          icon: 'animation',
          nums: '506',
          name: 'Files',
          color: 'pink',
        },
        {
          icon: 'arrange-send-backward',
          nums: '8',
          name: 'Projects',
          color: 'pink',
        },
      ],
    }
  },
  methods: {
    changMedia(title) {
      this.showTitle = title
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-list {
  & p {
    &.nums {
      margin: 0;
      margin-top: 6px;
      font-weight: 500;
    }
    &.nums span {
      font-weight: 900;
    }
  }
}
.icons {
  background: yellow;
  opacity: 0.8;
  padding: 10px;
  border-radius: 50%;
  border: 3px dotted $v-app-base;
}
</style>