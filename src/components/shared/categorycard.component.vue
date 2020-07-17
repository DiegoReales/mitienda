<template>
  <v-flex x12>
    <v-card flat elevation="0">
      <v-img contain height="165px" :src="getImageSrc">
        <template v-slot:default>
          <v-btn rounded top right dark small>VER MÁS</v-btn>
        </template>
      </v-img>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ["image"],
  data: () => ({}),
  computed: {
    getImageSrc() {
      const root = process.env.VUE_APP_ROOT_API;
      return root + this.image;
    }
  }
};
</script>
<style scope>
.v-btn--top {
    top: 122px;
    left: 66px;
}
</style>