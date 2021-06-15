<template>
  <div class="user-list mt-3">
    <div class="row ma-0">
      <v-card class="ma-1" style="width: 100%">
        <v-card-text>
          <div class="row no-gutters">
            <div
              class="d-flex justify-space-between justify-md-start col-md-6 col-12"
            >
              <v-btn color="success" class="mr-2" @click="toAddUser">
                <v-icon left dark> mdi-plus </v-icon>
                ADD
              </v-btn>
              <v-btn outlined color="indigo">
                <v-icon>mdi-filter-variant</v-icon>
                Filters
              </v-btn>
            </div>
            <div class="d-flex justify-end mt-3 mt-md-0 col-md-6 col-12">
              <v-btn outlined color="#ff5c93">
                <v-icon>mdi-download</v-icon>
                Download
              </v-btn>
            </div>
            <div class="d-flex justify-end mt-3 col col-12">
              <div style="width: 250px">
                <v-text-field
                  solo
                  label="Search"
                  hide-details="false"
                  prepend-inner-icon="mdi-magnify"
                ></v-text-field>
              </div>
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
          text: 'Dessert (100g serving)',
          align: 'start',
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
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
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ]
      }, 2000)
    },
    toAddUser() {
      this.$router.push('/user')
    }
  },
}
</script>

<style scoped>
</style>