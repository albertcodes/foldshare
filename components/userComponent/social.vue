<template>
  <v-card>
    <div class="row justify-center">
      <div class="col-md-6 col-12">
        <v-form ref="form">
          <p class="text-h5">Social</p>
          <v-text-field
            v-model="form.faceBook"
            label="FaceBook"
            outlined
            clearable
            dense
            hint="Please enter your Facebook link"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.twitter"
            label="Twitter"
            clearable
            outlined
            dense
            hint="Please enter your Twitter link"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-text-field
            v-model="form.instagram"
            label="Instagram"
            clearable
            outlined
            dense
            hint="Please enter your Instagram link"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-text-field
            v-model="form.gitHub"
            label="GitHub"
            outlined
            dense
            clearable
            hint="Please enter your GitHub link"
            persistent-hint
            class="mb-4"
            color="yellow"
          ></v-text-field>
          <v-text-field
            v-model="form.other"
            label="Other social links"
            outlined
            dense
            clearable
            hint="Please enter any custom link"
            persistent-hint
            class="mb-4"
            color="yellow"
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
        faceBook: '',
        twitter: '',
        instagram: '',
        gitHub: '',
        other: '',
        slack: '',
      },
      items: ['Admin', 'User'],
    }
  },
}
</script>

<style scoped>
</style>