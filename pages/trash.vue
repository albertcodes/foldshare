<template>
  <v-row>
    <v-card class="ma-1 my-8" style="width: 100%">
      <v-card-text>
        <div class="row no-gutters">
          <div
            class="
              d-flex
              justify-space-between justify-md-start
              col-md-10 col-12
            "
          >
            <v-btn outlined color="pink">
              <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
              Empty trash
            </v-btn>
          </div>
          <div class="d-flex justify-end mt-3 mt-md-0 col-md-2 col-12">
            <v-btn outlined color="yellow">
              <v-icon class="mr-2">mdi-restore</v-icon>
              Restore
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-col class="text-center">
      <img
        src="/trash.png"
        alt="trash"
        class="mb-5 rounded-lg"
        height="250"
        width="250"
      />
      <blockquote class="blockquote">
        No items in trash
        <footer>
          <small>
            <em>FoldShare Inc.</em>
          </small>
        </footer>
        <v-btn
          color="blue"
          type="submit"
          style="color: black"
          href="/"
          class="my-12"
        >
          <v-icon right class="mr-2"> mdi-arrow-left-circle </v-icon>
          Back to FoldShare
        </v-btn>
      </blockquote>
    </v-col>
  </v-row>
</template>
