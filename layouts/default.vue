<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      width="220"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.link"
          color="primary"
        >
          <v-list-item-action>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-subheader class="mt-4 grey--text text--darken-1">{{
          miniVariant ? 'TEMPL' : 'TEMPLATE'
        }}</v-subheader>
        <v-list-item
          v-for="tem in templateItems"
          :key="tem.text"
          :to="tem.link"
          color="primary"
        >
          <v-list-item-action>
            <v-icon>mdi-{{ tem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ tem.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item class="mt-4" @click="isShowLoginForm = true">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Login</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-spacer />
      <v-row class="mx-1" style="max-width: 15vw" v-if="isShowSearch">
        <v-text-field
          v-model="searchMessage"
          placeholder="Search..."
          single-line
          filled
          rounded
          dense
          append-icon="mdi-magnify"
          clear-icon="mdi-close-circle"
          clearable
          color="white"
          hide-details
          @click:append="sendMessage"
          @click:clear="clearMessage"
        ></v-text-field>
      </v-row>
      <v-btn class="mx-0" icon fab v-else @click="isShowSearch = !isShowSearch">
        <v-icon medium color="gray"> mdi-magnify </v-icon>
      </v-btn>
      <v-menu offset-y transition="fab-transition">
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="mx-0" icon fab v-bind="attrs" v-on="on">
            <v-badge overlap :content="bellMsg" color="red">
              <v-icon medium color="gray"> mdi-bell </v-icon>
            </v-badge>
          </v-btn>
        </template>
        <bellMenu :bellMsg="bellMsg" />
      </v-menu>

      <!-- email -->
      <v-menu offset-y rounded="lg" transition="fab-transition">
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="mx-1" icon fab v-bind="attrs" v-on="on">
            <v-badge overlap :content="emailMsg" color="red">
              <v-icon medium color="gray"> mdi-email </v-icon>
            </v-badge>
          </v-btn>
        </template>
        <emailMenu :emailMsg="emailMsg" />
      </v-menu>

      <v-btn fab dark small v-if="isLogin" @click="toLogin">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-menu offset-y rounded="lg" transition="fab-transition" v-else>
        <template v-slot:activator="{ on, attrs }">
          <span style="margin-left: 5px">Hi,{{ username }}</span>
          <v-avatar dark v-bind="attrs" v-on="on">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </template>
        <v-list rounded>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(avatar, index) in avatarList"
              :key="index"
              @click="handleAvatar(index)"
            >
              <v-list-item-icon>
                <v-icon v-text="avatar.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="avatar.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main style="padding-right: 30px">
      <!-- <v-card>
        <v-breadcrumbs :items="breadcrumbs" class="mt-8 px-4 py-2">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-card> -->
      <v-container class="px-0 px-md-1 container--fluid">
        <nuxt />
      </v-container>
      <v-footer sheet class="px-0 mt-2 transparent">
        <div class="row no-gutters d-flex justify-space-between">
          <div>
            <v-btn class="primary--text transparent" :to="'#'"></v-btn>
            <v-btn icon class="greyTint--text">
              Made with&nbsp;
              <v-icon color="yellow">mdi-heart</v-icon>
            </v-btn>
          </div>
          <div>
            <h6>Copyright &copy; <script>document.write(new Date().getFullYear());</script>&nbsp;FoldShare Inc.</h6>
          </div>
        </div>
      </v-footer>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-sheet v-model="isShowLoginForm" inset overlay-color="pink">
      <v-form class="pa-4" @submit.prevent="login">
        <v-text-field
          v-model="loginModel.username"
          label="Username"
        ></v-text-field>

        <v-text-field
          v-model="loginModel.password"
          label="Password"
          type="password"
          autocomplete="new-password"
        ></v-text-field>

        <v-btn color="yellow" type="submit" style="color: black">Login</v-btn>
      </v-form>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
import emailMenu from '../components/defaultComponent/emailMenu'
import bellMenu from '../components/defaultComponent/bellMenu'
export default {
  components: {
    emailMenu,
    bellMenu,
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      isShowLoginForm: false,
      loginModel: {
        username: '',
        password: '',
      },
      isLogin: false,
      items: [
        { icon: 'account-circle', text: 'Profile', link: '/' },
        { icon: 'home', text: 'Dashboard', link: '/dashboard' },
        { icon: 'cart', text: 'E-commerce', link: '/eCommerce' },
        { icon: 'stamper', text: 'User', link: '/user' },
        {
          icon: 'script-text-outline',
          text: 'Documentation',
          link: '/documentation',
        },
      ],
      templateItems: [
        { icon: 'checkerboard', text: 'Core', link: '/core' },
        { icon: 'table', text: 'Tables', link: '/tables' },
        {
          icon: 'checkbox-multiple-blank-outline',
          text: 'UI Elements',
          link: '/uiElements',
        },
        { icon: 'clipboard-text-outline', text: 'Forms', link: '/forms' },
        { icon: 'chart-bar', text: 'Charts', link: '/charts' },
        { icon: 'map', text: 'Maps', link: '/maps' },
        { icon: 'hexagram', text: 'Extra', link: '/extra' },
        { icon: 'folder', text: 'Menu Levels', link: '/menuLevels' },
      ],
      avatarList: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      breadcrumbs: [
        {
          text: 'App',
          disabled: true,
          href: '#',
        },
        {
          text: 'User',
          disabled: true,
          href: '#',
        },
        {
          text: 'Profile',
          disabled: false,
          href: '#',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      username: 'Guest User',
      emailMsg: 6,
      bellMsg: 4,
      selectedItem: '',
      isShowSearch: false,
      searchMessage: '',
    }
  },
  created() {
    // token
    // if (token) {

    // }
    this.isLogin = true
    this.$vuetify.theme.dark = true
  },
  methods: {
    async login() {
      // await this.$auth.loginWith('local', {
      //   data: this.loginModel,
      // })
      this.isLogin = false
      this.isShowLoginForm = false
    },
    handleAvatar(index) {
      console.log(index)
    },
    toLogin() {
      this.isShowLoginForm = true
    },
    clearMessage() {
      this.searchMessage = ''
    },
    sendMessage() {
      this.clearMessage()
      this.isShowSearch = false
    },
  },
}
</script>