<template>
  <div class="pb-0 pb-sm-3 col col-12" style="padding-top: 20px">
    <v-card class="article-card mb-10">
      <v-card-text class="pa-5 pt-0">
        <div class="row">
          <div class="col col-3">
            <v-img
              src="error-triangle.png"
              height="102px"
              width="102px"
            ></v-img>
          </div>
          <div class="col col-10" style="padding: 6px">
            <p class="article-text greyBold--text error-text">
              ! Sorry for the inconvinience. App cannot be exited at the moment.
            </p>
            <v-btn color="blue" type="submit" style="color: black" href="/"
              >⇦ Back to FoldShare</v-btn
            >
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="article-card">
      <v-card-title primary-title class="pa-5 pb-3" style="padding: 12px">
        Get more with pro
      </v-card-title>
      <v-card-text class="pa-5 pt-0">
        <div class="row">
          <div class="col col-5">
            <v-img src="subscribe.png"></v-img>
          </div>
          <div class="col col-7" style="padding: 12px">
            <p class="article-text greyBold--text">
              A FoldShare Pro subscription includes a lifetime backup to your
              folders and files, plus renewable yearly access to new features,
              software updates and support.
            </p>
            <v-btn
              color="yellow"
              type="submit"
              style="color: black"
              class="mt-6"
              href="https://avid.secure.force.com/pkb/articles/en_US/Troubleshooting/Open-PT-session-by-default"
              target="_blank"
              >★ Subscribe Now!</v-btn
            >
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
  & .error-text {
    color: red;
  }
  & .article-info {
    font-weight: 500;
    font-size: 12px;
  }
}
</style>