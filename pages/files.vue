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
        v-for="(i, index) in fileCardList"
        :key="index"
      >
        <fileCard
          :url="i.img"
          :title="i.title"
          :subsTitle="i.subsTitle"
          :chip="i.chip"
          :chipColor="i.chipColor"
        ></fileCard>
      </div>
    </div>
  </div>
</template>

<script>
import selfSelect from '../components/selfSelect'
import fileCard from '../components/fileCard'
export default {
  components: {
    selfSelect,
    fileCard,
  },
  data() {
    return {
      selectList: [
        {
          items: ['All', 'Images', 'Documents', 'Audio', 'Video'],
          values: 'All',
          label: 'Category',
        },
        {
          items: ['None', 'Recent', 'Starred'],
          values: 'None',
          label: 'Tags',
        },
      ],
      fileCardList: [
        {
          img: 'image.jpeg',
          title: 'Beach',
          subsTitle: 'Social/Vacation',
          chip: 'Recent',
          chipColor: '#536dfe',
        },
        {
          img: 'document.jpeg',
          title: 'Template',
          subsTitle: 'Work/Web',
          chip: 'Starred',
          chipColor: '#ff699b',
        },
        {
          img: 'image.png',
          title: 'Cousins',
          subsTitle: 'Social/Family',
        },
        {
          img: 'audio.png',
          title: 'Tides',
          subsTitle: 'Social/Vacation',
          chip: 'Recent',
          chipColor: '#536dfe',
        },
        {
          img: 'document.jpeg',
          title: 'Template',
          subsTitle: 'Work/UX',
          chip: 'Recent',
          chipColor: '#536dfe',
        },
        {
          img: 'image.png',
          title: 'Profile',
          subsTitle: 'Social/Facebook',
        },
        {
          img: 'image.jpeg',
          title: 'Mockup',
          subsTitle: 'Work/Design',
          chip: 'Starred',
          chipColor: '#ff699b',
        },
        {
          img: 'video.png',
          title: 'Tutorial',
          subsTitle: 'Work/Illustrations',
        },
      ],
    }
  },
  created() {
    // console.log(this.$router.push('/'))
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