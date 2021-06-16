<template>
  <div class="pb-0 pb-sm-3 col col-12" style="padding-top: 20px">
    <v-card class="article-card">
      <v-card-title primary-title class="pa-5 pb-3" style="padding: 12px">
        Get more with pro
      </v-card-title>
      <v-card-text class="pa-5 pt-0">
        <div class="row">
          <div class="col col-5">
            <v-img
              src="subscribe.png"
            ></v-img>
          </div>
          <div class="col col-7" style="padding: 12px">
            <p class="article-text greyBold--text">
              A FoldShare Pro subscription includes a lifetime backup to your
              folders and files, plus renewable yearly access to new features,
              software updates and support.
            </p>
            <v-btn color="yellow" type="button" style="color: black">
              <v-icon right class="mr-2"> mdi-star </v-icon>
              Subscribe Now!
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.article-card {
  & .article-writer {
    font-weight: 500;
    font-size: 12px;
  }
  & .article-text {
    font-weight: 500;
    font-size: 14px;
  }
  & .article-info {
    font-weight: 500;
    font-size: 12px;
  }
}
</style>
