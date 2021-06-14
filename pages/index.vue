<template>
  <div class="profile-page">
    <div class="row">
      <div
        class="col-sm-6 col-md-5 col-12"
        style="padding: 16px; padding-top: 50px"
      >
        <div class="row">
          <userInfo />
          <mediaInfo />
          <startInfo />
        </div>
      </div>
      <div class="pt-0 pt-sm-3 col-sm-6 col-md-7 col-12">
        <div class="row">
          <div class="col col-12" style="padding: 16px; padding-top: 50px">
            <div class="row">
              <folderInfo></folderInfo>
            </div>
            <div class="row">
              <div class="col-md-7 col-12">
                <tableTaskInfo />
              </div>
              <div class="col-md-5 col-12" style="padding-top: 18px">
                <div class="row no-gutters">
                  <pickerInfo />
                  <viewInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userInfo from '../components/profileComponent/userInfo'
import mediaInfo from '../components/profileComponent/mediaInfo'
import folderInfo from '../components/profileComponent/folderInfo'
import startInfo from '../components/profileComponent/startInfo'
import tableTaskInfo from '../components/profileComponent/tableTaskInfo'
import pickerInfo from '../components/profileComponent/pickerInfo'
import viewInfo from '../components/profileComponent/viewInfo'
export default {
  components: {
    userInfo,
    mediaInfo,
    folderInfo,
    startInfo,
    tableTaskInfo,
    pickerInfo,
    viewInfo,
  },
}
</script>

<style lang="scss" scoped>
</style>