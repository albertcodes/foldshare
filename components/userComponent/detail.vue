<template>
  <v-card>
    <div class="row justify-center">
      <div class="col-md-6 col-12">
        <v-form ref="form">
          <p class="text-h5">Create User Details</p>
          <v-text-field
            v-model="form.firstName"
            label="First name"
            outlined
            clearable
            dense
            hint="Please enter your user first name"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-text-field
            v-model="form.lastName"
            label="Last name"
            clearable
            outlined
            dense
            hint="Please enter your user last name"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-text-field
            v-model="form.address"
            label="Address"
            clearable
            outlined
            dense
            hint="Please enter your user address"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Password"
            outlined
            dense
            clearable
            hint="Please enter your user password"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-select
            :items="items"
            label="Role"
            outlined
            dense
            clearable
            hint="Please select your user role"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-select>
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
        firstName: '',
        lastName: '',
        address: '',
        password: '',
        role: '',
      },
      items: ['Admin', 'User'],
    }
  },
}
</script>

<style scoped>
</style>