<template>
  <div class="detail-page mt-6 px-2">
    <v-card>
      <div class="row no-gutters">
        <div class="col-md-6 col-12">
          <v-img :src="url" height="475px"></v-img>
        </div>
        <div class="col-md-6 col-12">
          <div class="pa-3">
            <v-card-title primary-title class="d-flex align-center mb-3">
              <h2 class="mb-0">
                {{ title }}
              </h2>
              <span class="warning--text fs-lg ml-5">{{ star }}</span>
              <v-icon icon color="yellow">mdi-star</v-icon>
            </v-card-title>
            <v-card-subtitle>{{ subsTitle }}</v-card-subtitle>
            <v-card-text>
              <h3 style="font-size: 1.64rem; margin-bottom: 16px">
                {{ views }}
                <v-icon icon color="yellow">mdi-eye</v-icon>
              </h3>
              <div class="row">
                <div class="col-md-6 col-12">
                  <v-btn depressed block color="primary">
                    Move to folders
                    <v-icon right class="ml-3"> mdi-folder </v-icon>
                  </v-btn>
                </div>
                <div class="col-md-6 col-12">
                  <v-btn depressed block color="#ff4a87">
                    Add to favourites
                    <v-icon right class="ml-3"> mdi-heart </v-icon>
                  </v-btn>
                </div>
              </div>
              <p class="mt-4">Folder size limit:</p>
              <div class="row" style="margin-top: 10px">
                <div class="col col-6">
                  <v-select
                    v-model="size"
                    :items="sizeItems"
                    label="Select Size"
                    outlined
                  ></v-select>
                </div>
                <div class="col col-6">
                  <v-form ref="form">
                    <v-text-field
                      v-model="form.customSize"
                      label="Custom size (GB)"
                      outlined
                      clearable
                      type="number"
                    ></v-text-field>
                  </v-form>
                </div>
              </div>
              <p class="mb-0 mt-2">Help the community with a small donation!</p>
              <div class="row">
                <div class="col mt-2">
                  <v-img src="donate.png" height="68" width="100"></v-img>
                </div>
              </div>
            </v-card-text>
          </div>
        </div>
      </div>
    </v-card>

    <v-card class="mt-10">
      <v-card-title primary-title> Folder Info </v-card-title>
      <v-card-text>
        <div class="row">
          <div class="col-md-4 col-12">
            <h3 style="font-size: 1.64rem" class="mb-2">Folder Description</h3>
            <ul>
              <li class="mt-4">
                A vacation (American English), or holiday (British English), is
                a leave of absence from a regular job, or a specific trip or
                journey, usually for the purpose of recreation or tourism.
                People often take a vacation during specific holiday
                observances, or for specific festivals or celebrations.
                Vacations are often spent with friends or family.
              </li>
            </ul>
          </div>
          <div class="col-md-7 offset-lg-1 col-12">
            <div class="row no-gutters">
              <div class="col-md-6 col-12">
                <h3 style="font-size: 1.64rem" class="mb-2">Folder Code</h3>
                <p style="color: yellow">FC001</p>
              </div>
              <div class="mb-3 col-md-6 col-12">
                <h3 style="font-size: 1.64rem" class="mb-2">Share</h3>
                <p>Share folder with a tag <a href="/blog">#vacation</a></p>
                <v-btn icon class="mr-3">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="mr-3">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon class="mr-3">
                  <v-icon>mdi-bird</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col col-6">
            <v-img
              src="folder-default.png"
              height="120px"
              width="150px">
            </v-img>
              </div>
              <div class="col col-6">
                <h3 class="mb-0">Rating & Reviews</h3>
                <div class="d-flex align-center my-4">
                  <span class="warning--text" style="font-size: 1.5rem">{{
                    star
                  }}</span>
                  <v-icon color="yellow">mdi-star</v-icon>
                </div>
                <p>3 Reviews</p>
                <a href="#"> Read All</a>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import fileCard from '../components/fileCard'
export default {
  components: {
    fileCard,
  },
  data() {
    return {
      url: 'summer-vacation.jpeg',
      title: 'Summer Vacation',
      subsTitle: 'In Vacation folder',
      views: '12 Views',
      star: '4.0',
      size: '2GB',
      sizeItems: ['1GB', '2GB', '3GB', '4GB', 'Unlimited'],
      form: {
        custonSize: '',
      },
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const { query } = this.$route
      if (Object.keys(query).length > 0) {
        const { url, title, subsTitle, money, star } = query
        this.url = url
        this.title = title
        this.subsTitle = subsTitle
        this.money = money
        this.star = star
      }
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #5bc0de;
}
</style>