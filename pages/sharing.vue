<template>
  <div class="user-list mt-3">
    <div class="row ma-0">
      <v-card class="ma-1" style="width: 100%">
        <v-card-text>
          <div class="row no-gutters">
            <div
              class="
                d-flex
                justify-space-between justify-md-start
                col-md-10 col-12
              "
            >
              <v-btn outlined color="yellow">
                <v-icon class="mr-2">mdi-filter-variant</v-icon>
                Filters
              </v-btn>
              <div class="ml-8">
                <v-file-input
                  placeholder="Upload file"
                  accept="image/*"
                  single-line
                  filled
                  rounded
                  dense
                  append-icon="mdi-upload"
                  clear-icon="mdi-close-circle"
                  clearable
                  color="white"
                  hide-details
                ></v-file-input>
              </div>
              <div class="ml-8">
                <v-text-field
                  placeholder="Search file"
                  single-line
                  filled
                  rounded
                  dense
                  append-icon="mdi-magnify"
                  clear-icon="mdi-close-circle"
                  clearable
                  color="white"
                  hide-details
                ></v-text-field>
              </div>
            </div>
            <div class="d-flex justify-end mt-3 mt-md-0 col-md-2 col-12">
              <v-btn outlined color="pink">
                <v-icon class="mr-2">mdi-download</v-icon>
                Download
              </v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div class="row">
      <div class="col col-12">
        <v-card class="ma-1">
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="tableList"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :loading="tableLoading"
              class="elevation-1"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: 'fat',
      sortDesc: false,
      headers: [
        {
          text: 'Filename',
          align: 'start',
          value: 'name',
        },
        { text: 'Shares', value: 'shares' },
        { text: 'Size (MB)', value: 'size' },
        { text: 'Folders', value: 'folders' },
        { text: 'Usage (%)', value: 'usage' },
      ],
      tableList: [],
      tableLoading: true,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      setTimeout(() => {
        this.tableLoading = false
        this.tableList = [
          {
            name: 'IMG_vacation99852.jpg',
            shares: 9,
            size: 6.1,
            folders: 1,
            usage: '0.61%',
          },
          {
            name: 'IMG_2020yearhasbeen.jpg',
            shares: 5,
            size: 7.2,
            folders: 0,
            usage: '0.72%',
          },
          {
            name: 'Design_elements.doc',
            shares: 3,
            size: 12.9,
            folders: 2,
            usage: '1.29%',
          },
          {
            name: 'IMG_3237821_43270.jpg',
            shares: 0,
            size: 2.3,
            folders: 0,
            usage: '0.23%',
          },
          {
            name: 'Tutorial_document.pdf',
            shares: 4,
            size: 9.0,
            folders: 2,
            usage: '0.90%',
          },
          {
            name: 'Tutorial_video.mp4',
            shares: 4,
            size: 166.7,
            folders: 2,
            usage: '16.7%',
          },
          {
            name: 'Summer_on_the_beach.mp4',
            shares: 3,
            size: 301.0,
            folders: 1,
            usage: '30.1%',
          },
          {
            name: 'IMG_1236821_23213.jpg',
            shares: 1,
            size: 6.0,
            folders: 0,
            usage: '0.60%',
          },
          {
            name: 'End_of_month_meeting.mp3',
            shares: 2,
            size: 48.4,
            folders: 3,
            usage: '4.84%',
          },
          {
            name: 'IMG_4236821_43252.jpg',
            shares: 1,
            size: 6.8,
            folders: 1,
            usage: '0.68%',
          },
        ]
      }, 2000)
    },
  },
}
</script>

<style scoped>
.v-file-input__control {
  display: none;
}
</style>