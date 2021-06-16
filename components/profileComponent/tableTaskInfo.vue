<template>
  <v-card class="tasks-card ma-1">
    <v-card-title
      primary-title
      class="pa-5 pb-3 d-flex flex-nowrap justify-space-between"
    >
      <p style="margin: 0">Tasker</p>
      <!-- <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            color="blue-grey"
            style="width: 100px"
          >
            {{ showTitle }}
            <v-icon tile>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in titleList" :key="i">
            <v-list-item-title @click="changMedia(item.title)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-card-title>
    <v-card-text class="pa-5 pt-0 pb-2">
      <div class="row no-gutters">
        <v-tabs v-model="tab">
          <v-tabs-slider color="#5bc0de"></v-tabs-slider>
          <v-tab v-for="tasks in tasksList" :key="tasks.name" style="color: #5bc0de">
            {{ tasks.name }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" style="width: 100%">
          <v-tab-item v-for="(item, index) in 3" :key="index">
            <div
              v-for="(today, index) in todayList"
              :key="index"
              class="row flex-column flex-nowrap overflow-hidden pr-0 no-gutters"
              style="margin-top: 0; width: 100%; cursor: pointer"
            >
              <v-divider horizontal></v-divider>
              <div
                class="d-flex justify-space-between align-center py-3 col col-12"
              >
                <div class="d-flex align-center">
                  <!-- <p
                    class="task-time mb-0"
                    style="font-size: 10px"
                    :style="{
                      textDecoration:
                        today.color === 'gray' ? 'line-through' : '',
                      color: today.color === 'gray' ? '#9b9b9b' : '',
                    }"
                  >
                    {{ today.time }}
                  </p> -->
                  <v-icon :color="today.color">mdi-circle-medium</v-icon>
                  <p
                    class="task-text greyBold--text mb-0 font-weight-medium"
                    :style="{
                      textDecoration:
                        today.color === 'gray' ? 'line-through' : '',
                      color: today.color === 'gray' ? '#9b9b9b' : '',
                    }"
                  >
                    {{ today.conten }}
                  </p>
                </div>
                <v-menu bottom left>
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon tile>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, i) in listOperat" :key="i">
                      <v-list-item-title @click="itemOperat(item.name)">{{
                        item.name
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-tab-item>
          <!-- <v-tab-item> 2 </v-tab-item>
            <v-tab-item> 3 </v-tab-item> -->
        </v-tabs-items>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showTitle: 'All Tasks',
      titleList: [
        {
          title: 'All Tasks',
        },
        {
          title: 'Done',
        },
        {
          title: 'In Progress',
        },
      ],
      tab: '0',
      tasksList: [
        {
          name: 'Today',
        },
        {
          name: 'This Week',
        },
        {
          name: 'This Month',
        },
      ],
      listOperat: [
        {
          name: 'Edit',
        },
        {
          name: 'Copy',
        },
        {
          name: 'Delete',
        },
        {
          name: 'Share',
        },
      ],
      todayList: [
        {
          time: '00:00',
          conten: 'Upload new photos to vacation folder',
          color: 'green',
        },
        {
          time: '00:00',
          conten: 'Share uploaded photos with family',
          color: 'red',
        },
        {
          time: '00:00',
          conten: 'Add cool pictures in blog profile',
          color: 'red',
        },
        {
          time: '00:00',
          conten: 'Re-arrange files alphabetically',
          color: 'red',
        },
        {
          time: '00:00',
          conten: 'Group folders according to share options',
          color: 'red',
        },
        {
          time: '00:00',
          conten: 'Backup old files and folders to cloud',
          color: 'red',
        },
        {
          time: '00:00',
          conten: 'Add more users in my foldshare groups',
          color: 'red',
        },
        {
          time: '00:00',
          conten: 'View statistics for the week',
          color: 'red',
        },
      ],
    }
  },
  methods: {
    changMedia(title) {
      this.showTitle = title
    },
    itemOperat() {},
  },
}
</script>

<style lang="scss">
.task-card {
  .done {
    .d-flex {
      .task-time {
        text-decoration: line-through;
      }
    }
  }
}
</style>