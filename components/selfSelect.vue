<template>
  <v-select
    :value="values"
    :items="items"
    :label="label"
    dense
    outlined
    @input="updateValue(values)"
  ></v-select>
</template>

<script>
export default {
  props: {
    values: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: [],
    },
    label: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: '',
    },
  },
  methods: {
    updateValue(val, index) {
      this.$emit(val, index)
    },
  },
}
</script>

<style scoped>
</style>