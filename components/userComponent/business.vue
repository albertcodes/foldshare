<template>
  <v-card>
    <div class="row justify-center">
      <div class="col-md-6 col-12">
        <v-form ref="form">
          <p class="text-h5">Business Details</p>
          <v-text-field
            v-model="form.company"
            label="Company name"
            outlined
            clearable
            dense
            hint="Please enter your company name"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.registeredId"
            label="Company Registered ID"
            clearable
            outlined
            dense
            hint="Please enter your company registered ID"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Company Email"
            clearable
            outlined
            dense
            hint="Please enter your company email"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.contact"
            label="Company Contact"
            outlined
            dense
            clearable
            hint="Enter your company contact"
            persistent-hint
            class="mb-4"
          ></v-text-field>
        </v-form>
        <div class="d-flex justify-space-between">
          <slot></slot>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model: 'Foobar',
      form: {
        company: '',
        registeredId: '',
        email: '',
        contact: '',
      },
      items: ['Admin', 'Tourist'],
    }
  },
}
</script>

<style scoped>
</style>