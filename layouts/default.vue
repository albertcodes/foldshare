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
          color="yellow"
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
      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
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
      <v-menu offset-y rounded="lg" transition="fab-transition">
        <template v-slot:activator="{ on, attrs }">
          <span style="margin-left: 5px">Hello, {{ username }}</span>
          <v-avatar dark v-bind="attrs" v-on="on" height="25" width="25">
            <img src="foldshare-avatar.png" alt="avatar" />
          </v-avatar>
        </template>
        <v-list rounded dense>
          <v-list-item
            v-for="item in avatarLinks"
            :key="item.text"
            :to="item.link"
            color="yellow"
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
      <v-footer sheet class="footer px-0 mt-2 transparent">
        <div class="row no-gutters d-flex justify-space-between">
          <div>
            <v-btn class="primary--text transparent" :to="'#'"></v-btn>
            <v-btn icon class="greyTint--text transparent mb-2">
              Made with&nbsp;
              <v-icon color="yellow">mdi-heart</v-icon>
            </v-btn>
          </div>
          <div>
            <h6>Copyright &copy; {{ currentYear() }}&nbsp;FoldShare Inc.</h6>
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
        { icon: 'folder', text: 'Main', link: '/' },
        { icon: 'file', text: 'Files', link: '/files' },
        { icon: 'post-outline', text: 'Blog', link: '/blog' },
        { icon: 'chart-tree', text: 'Statistics', link: '/stats' },
        {
          icon: 'account-switch',
          text: 'Sharing',
          link: '/sharing',
        },
        { icon: 'delete', text: 'Trash', link: '/trash' },
        { icon: 'power', text: 'Exit App', link: '/exit' },
      ],
      avatarLinks: [
        { icon: 'account', text: 'Register', link: '/user' },
        { icon: 'alert', text: 'Report Problem', link: '/report' },
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
      username: 'Guest',
      emailMsg: 1,
      bellMsg: 3,
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
  // Get current year
  methods: {
    currentYear() {
      const current = new Date()
      const date = `${current.getFullYear()}`
      return date
    },
  },
}
</script>
