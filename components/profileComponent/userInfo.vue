<template>
  <div class="col col-12">
    <v-card class="user-card ma-1" min-height="282px">
      <v-card-text class="pa-5 pt-9 fill-height">
        <div class="row fill-height no-gutters">
          <div
            class="d-flex justify-center align-center flex-column col-sm-5 col-xl-6 col-12"
          >
            <div class="avatar-wrapper">
              <v-img
                class="user-avatar"
                src="foldshare-avatar.png"
                contain
              ></v-img>
            </div>
            <v-chip
              class="mr-2 mt-4 mb-4 mb-sm-0"
              small
              color="#ff0000"
              text-color="white"
              style="padding: 0 12px"
            >
              Free Trial
            </v-chip>
          </div>
          <div
            class="pl-0 pl-sm-4 d-flex flex-column align-center align-sm-start col-sm-7 col-xl-6 col-12"
          >
            <p class="user-name greyMedium--text font-weight-regular">
              Guest User
            </p>
            <p class="user-work greyTint--text ma-0">FoldShare Preview</p>
            <div class="d-flex justify-center justify-sm-start flex-wrap mt-5">
              <v-chip
                class="primaryConst--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2"
                label
                small
                v-for="chip in chipList"
                :key="chip.name"
                :color="chip.color"
              >
                {{ chip.name }}
              </v-chip>
            </div>
            <div class="mt-5">
              <v-btn icon v-for="item in iconList" :key="item.icon">
                <v-icon>mdi-{{ item.icon }}</v-icon></v-btn
              >
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipList: [
        {
          name: 'UI/UX',
          color: '#4456be',
        },
        {
          name: 'Mobile',
          color: '#284644',
        },
        {
          name: 'Web',
          color: '#ff72y4',
        },
        {
          name: 'Design',
          color: '#4f2e41',
        },
        {
          name: 'Illustrator',
          color: '#808080',
        },
        {
          name: 'Art',
          color: '#4f4337',
        },
      ],
      iconList: [
        {
          icon: 'facebook',
        },
        {
          icon: 'instagram',
        },
        {
          icon: 'github',
        },
        {
          icon: 'basketball',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25%;
  border: 3px dotted $v-app-base;
}
.user-card {
  .user-name {
    font-size: 25px;
  }
}
</style>