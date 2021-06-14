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
                ${{ money }}
              </h3>
              <p>Size guide</p>
              <div class="row" style="margin-top: 15px">
                <div class="col col-6">
                  <v-select
                    v-model="size"
                    :items="sizeItems"
                    label="Select Size"
                    outlined
                  ></v-select>
                </div>
                <div class="col col-6">
                  <v-select
                    v-model="nums"
                    :items="numsItems"
                    label="Number Size"
                    outlined
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-12">
                  <v-btn depressed block color="primary">
                    Add to bag <v-icon right class="ml-3"> mdi-cart </v-icon>
                  </v-btn>
                </div>
                <div class="col-md-6 col-12">
                  <v-btn depressed block color="#ff4a87">
                    Add to bag <v-icon right class="ml-3"> mdi-heart </v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <v-img
                    v-for="imgs in imgLists"
                    :key="imgs.src"
                    :src="imgs.src"
                    height="30px"
                    width="50px"
                    class="d-inline-block mr-2"
                  ></v-img>
                </div>
              </div>
              <p class="mb-0 mt-5">FREE Delivery & Returns</p>
            </v-card-text>
          </div>
        </div>
      </div>
    </v-card>

    <v-card class="mt-10">
      <v-card-title primary-title> Product Info </v-card-title>
      <v-card-text>
        <div class="row">
          <div class="col-md-4 col-12">
            <h3 style="font-size: 1.64rem" class="mb-2">Product Description</h3>
            <ul>
              <li>
                Sneakers (also known as athletic shoes, tennis shoes,gym shoes,
                runners, takkies, or trainers) are shoes primarily designed for
                sports or other forms of physical exercise, but which are now
                also often used for everyday wear.
              </li>
              <li>
                The term generally describes a type of footwear with a flexible
                sole made of rubber or synthetic material and an upper part made
                of leather or synthetic materials.
              </li>
            </ul>
          </div>
          <div class="col-md-7 offset-lg-1 col-12">
            <div class="row no-gutters">
              <div class="col-md-6 col-12">
                <h3 style="font-size: 1.64rem" class="mb-2">Product Code</h3>
                <p>123456</p>
              </div>
              <div class="mb-3 col-md-6 col-12">
                <h3 style="font-size: 1.64rem" class="mb-2">Share</h3>
                <p>Share photo with a tag <a href="#">#whitetrainers</a></p>
                <v-btn icon class="mr-3">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="mr-3">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon class="mr-3">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col col-6">
                <h3 style="font-size: 1.64rem" class="mb-2">Technology</h3>
                <ul>
                  <li>Ollie patch</li>
                  <li>Ollie patch</li>
                  <li>Ollie patch</li>
                </ul>
              </div>
              <div class="col col-6">
                <h3 class="mb-0">Rating & Reviews</h3>
                <div class="d-flex align-center my-4">
                  <span class="warning--text" style="font-size: 1.5rem">{{
                    star
                  }}</span>
                  <v-icon color="yellow">mdi-star</v-icon>
                </div>
                <p>32 Reviews</p>
                <a href="#"> Read All</a>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <div class="row d-flex mt-12 mb-0 no-gutters">
      <h3 class="greyTint--text">You may also like</h3>
    </div>

    <div class="row">
      <div
        class="col-md-6 col-lg-3 col-12"
        v-for="(i, index) in productCardList"
        :key="index"
      >
        <productCard
          :url="i.img"
          :title="i.title"
          :subsTitle="i.subsTitle"
          :money="i.money"
          :star="i.star"
          :chip="i.chip"
          :chipColor="i.chipColor"
        ></productCard>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from '../components/productCard'
export default {
  components: {
    productCard,
  },
  data() {
    return {
      url:
        'https://templates-flatlogic.herokuapp.com/vue-material/img/1.13cff83e.png',
      title: 'Trainers',
      subsTitle: 'Trainers in white',
      money: '78',
      star: '4.6',
      size: '4',
      nums: '1',
      sizeItems: ['2', '4', '6', '8'],
      numsItems: ['1', '2', '3', '4'],
      imgLists: [
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/mastercard.c9d5e09e.png',
        },
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/visa.e6a05e38.png',
        },
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/paypal.125fa367.png',
        },
      ],
      productCardList: [
        {
          img:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/1.d374b7a3.png',
          title: 'Trainers',
          subsTitle: 'Trainers in white',
          money: '78',
          star: '4.6',
          chip: 'New',
          chipColor: '#536dfe',
        },
        {
          img:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/2.e73e87dc.png',
          title: 'Trainers',
          subsTitle: 'Trainers in white',
          money: '78',
          star: '4.6',
        },
        {
          img:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/3.5a0325cf.png',
          title: 'Trainers',
          subsTitle: 'Trainers in white',
          money: '78',
          star: '4.6',
          chip: 'New',
          chipColor: '#536dfe',
        },
        {
          img:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/4.024cd005.png',
          title: 'Trainers',
          subsTitle: 'Trainers in white',
          money: '78',
          star: '4.6',
        },
      ],
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
</style>