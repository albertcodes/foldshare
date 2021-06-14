<template>
  <div class="user-page mt-3">
    <div class="row">
      <div class="col col-12">
        <v-stepper non-linear class="transparent" v-model="el">
          <v-card class="mb-5">
            <v-stepper-header>
              <v-stepper-step editable :step="1" :complete="el > 1">
                Create Account
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step editable step="2" :complete="el > 2">
                User Details
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" :complete="el > 3" editable>
                Business Details
              </v-stepper-step>
              <v-divider></v-divider>

              <v-stepper-step step="4" editable> Social </v-stepper-step>
            </v-stepper-header>
          </v-card>
          <v-card>
            <v-stepper-items>
              <v-stepper-content step="1">
                <Craete>
                  <v-btn color="primary" @click="next"> Next </v-btn>
                </Craete>
              </v-stepper-content>
              <v-stepper-content step="2">
                <Detail>
                  <v-btn outlined color="primary" @click="back"> Back </v-btn>
                  <v-btn color="primary" @click="next"> Next </v-btn>
                </Detail>
              </v-stepper-content>
              <v-stepper-content step="3">
                <Business>
                  <v-btn outlined color="primary" @click="back"> Back </v-btn>
                  <v-btn color="primary" @click="next"> Next </v-btn>
                </Business>
              </v-stepper-content>
              <v-stepper-content step="4">
                <Social>
                  <v-btn outlined color="primary" @click="back"> Back </v-btn>
                  <v-btn
                    color="primary"
                    @click="finish"
                    :loading="finishLoading"
                  >
                    Finish
                  </v-btn>
                </Social>
              </v-stepper-content>
            </v-stepper-items>
          </v-card>
        </v-stepper>
      </div>
    </div>
  </div>
</template>

<script>
// const Craete = import('../components/userComponent/create')
import Craete from '../components/userComponent/create'
import Detail from '../components/userComponent/detail'
import Business from '../components/userComponent/business'
import Social from '../components/userComponent/social'
export default {
  components: {
    Craete,
    Detail,
    Business,
    Social,
  },
  data() {
    return {
      el: 1,
      finishLoading: false,
    }
  },
  methods: {
    back() {
      this.el -= 1
    },
    next() {
      this.el += 1
    },
    finish() {
      this.finishLoading = true
      setTimeout(() => {
        this.finishLoading = false
        this.$router.push('/documentation')
      }, 2000)
    },
  },
}
</script>

<style scoped>
</style>