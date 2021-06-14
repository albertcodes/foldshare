<template>
  <div class="col col-12" style="padding-left: 12px">
    <v-card class="folder-card ma-1" min-height="282px">
      <v-card-title class="pa-5 pb-3">Folders</v-card-title>
      <v-card-text class="pa-5 pt-0">
        <v-tabs v-model="tab">
          <v-tabs-slider color="#ff4081"></v-tabs-slider>
          <v-tab v-for="fold in folderList" :key="fold.name">
            {{ fold.name }}
          </v-tab>
        </v-tabs>
        <v-divider horizontal></v-divider>
        <v-tabs-items v-model="tab" class="d-flex overflow-hidden">
          <v-tab-item>
            <div
              class="row d-flex flex-nowrap overflow-x-auto pa-4 pt-5 justify-start"
            >
              <div v-for="img in tabOneList" :key="img.src">
                <v-img
                  class="folder-image mr-3"
                  style="height: 106px; width: 141px"
                  contain
                  :src="img.src"
                  responsive
                >
                  <p class="folder-title">{{ img.title }}</p>
                  <p class="folder-subtitle-1 font-weight-medium">
                    {{ img.subtitle }}
                  </p></v-img
                >
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div
              class="row d-flex flex-nowrap overflow-x-auto pa-4 pt-5 justify-start"
            >
              <div v-for="img in tabTwoList" :key="img.src">
                <v-img
                  class="folder-image mr-3"
                  style="height: 106px; width: 141px"
                  contain
                  :src="img.src"
                  responsive
                >
                  <p class="folder-title">{{ img.title }}</p>
                  <p class="folder-subtitle-1 font-weight-medium">
                    {{ img.subtitle }}
                  </p></v-img
                >
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div
              class="row d-flex flex-nowrap overflow-x-auto pa-4 pt-5 justify-start"
            >
              <div v-for="img in tabThreeList" :key="img.src">
                <v-img
                  class="folder-image mr-3"
                  style="height: 106px; width: 141px"
                  contain
                  :src="img.src"
                  responsive
                >
                  <p class="folder-title">{{ img.title }}</p>
                  <p class="folder-subtitle-1 font-weight-medium">
                    {{ img.subtitle }}
                  </p></v-img
                >
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: '0',
      tabModel: '0',
      folderList: [
        {
          name: 'Recents',
        },
        {
          name: 'Work',
        },
        {
          name: 'Social',
        },
      ],
      tabOneList: [
        {
          src:
            'folder-pink.svg',
          title: 'Vacation',
          subtitle: '57 files',
        },
        {
          src:
            'folder-blue.svg',
          title: 'Web',
          subtitle: '82 files',
        },
        {
          src:
            'folder-pink.svg',
          title: 'Design',
          subtitle: '109 files',
        },
        {
          src:
            'folder.svg',
          title: 'UX',
          subtitle: '15files',
        },
      ],
      tabTwoList: [
        {
          src:
            'folder-blue.svg',
          title: 'Web',
          subtitle: '82 files',
        },
        {
          src:
            'folder-pink.svg',
          title: 'Design',
          subtitle: '109 files',
        },
        {
          src:
            'folder.svg',
          title: 'UX',
          subtitle: '15files',
        },
        {
          src:
            'folder-green.svg',
          title: 'Illustrations',
          subtitle: '36 files',
        },
      ],
      tabThreeList: [
        {
          src:
            'folder-pink.svg',
          title: 'Vacation',
          subtitle: '57 files',
        },
        {
          src:
            'folder-green.svg',
          title: 'Instagram',
          subtitle: '120 files',
        },
        {
          src:
            'folder.svg',
          title: 'Family',
          subtitle: '63 files',
        },
        {
          src:
            'folder-green.svg',
          title: 'Facebook',
          subtitle: '24 files',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.folder-card {
  & .v-image {
    position: relative;
    & p {
      position: absolute;
      left: 14px;
      color: #000;
      font-weight: 600;
      &.folder-title {
        font-size: 18px;
        bottom: 10px;
      }
      &.folder-subtitle-1 {
        bottom: -10px;
        font-size: 13px;
      }
    }
  }
}
</style>