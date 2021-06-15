<template>
  <div class="ecommerce-page" style="margin-top: 30px">
    <div class="row mb-n3">
      <div
        class="d-flex col-sm-6 col-md-4 col-lg-2 col-12"
        v-for="(i, index) in selectList"
        :key="index"
      >
        <selfSelect
          :values="i.values"
          :items="i.items"
          :label="i.label"
          v-bind="$attrs"
          :index="index"
          @updateValue="updateValue"
        ></selfSelect>
      </div>
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
import selfSelect from '../components/selfSelect'
import productCard from '../components/productCard'
export default {
  components: {
    selfSelect,
    productCard,
  },
  data() {
    return {
      selectList: [
        {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          values: 'foo',
          label: 'Standard',
        },
        {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          values: 'foo',
          label: 'Standard',
        },
        {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          values: 'foo',
          label: 'Standard',
        },
        {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          values: 'foo',
          label: 'Standard',
        },
        {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          values: 'foo',
          label: 'Standard',
        },
        {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          values: 'foo',
          label: 'Standard',
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
        {
          img:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/5.c70fd61d.png',
          title: 'Trainers',
          subsTitle: 'Trainers in white',
          money: '78',
          star: '4.6',
          chip: 'New',
          chipColor: '#536dfe',
        },
        {
          img:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/6.88f081e4.png',
          title: 'Trainers',
          subsTitle: 'Trainers in white',
          money: '78',
          star: '4.6',
          chip: 'Sale',
          chipColor: '#ff699b',
        },
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
      ],
    }
  },
  created() {
    // console.log(this.$router.push('/dashboard'))
  },
  methods: {
    updateValue(val, index) {
      this.$set(this.selectList, index, {
        ...this.selectList[index],
        values: val,
      })
    },
  },
}
</script>

<style scoped>
</style>