<template>
  <v-flex xs5 sm5 md5 lg5 class="offset-md-1 offset-sm-1 offset-xs-1">
    <v-card elevation="1" height="120" min-width="100" max-width="160" style="margin-bottom: 90px">
      <v-img
        contain
        :src="getImageSrc"
        class="grey lighten-4"
        style="height: 100%; width: 100%;"
      ></v-img>
      <v-card-actions style="flex-direction: column;" class="py-0">
        <p class="text-uppercase grey--text">
          <strong>{{ category }}</strong>
        </p>
        <p class="truncate">
          <strong>{{ name }}</strong>
        </p>
        <p class="pink--text">
          <strong>${{ price }}</strong>
        </p>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ["name", "category", "price", "image"],
  data: () => ({}),
  computed: {
    getImageSrc() {
      const root = process.env.VUE_APP_ROOT_API;
      return root + this.image;
    }
  }
}
</script>
<style scoped>
p {
  margin-bottom: 0px !important;
  text-align: left;
}
</style>