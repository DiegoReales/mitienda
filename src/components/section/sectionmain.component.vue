<template>
  <div>
    <v-img class="mb-2" :src="getBannerSrc" cover></v-img>
    <v-container fluid class="py-0">
      <v-layout row wrap class="justify-center align-center">
        <SectionCardComponent 
         v-for="(item, i) in products"
         :key="i"
         :name="item.name"
         :category="item.categories.category"
         :price="item.price"
         :image="item.image.url"
        ></SectionCardComponent>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import SectionCardComponent from "@/components/section/sectioncard.component.vue";

export default {
  props: ["banner", "products"],
  data: () => ({}),
  components: {
    SectionCardComponent
  },
  computed: {
    getBannerSrc() {
      const root = process.env.VUE_APP_ROOT_API;
      return root + this.banner;
    }
  }
};
</script>
<style scoped>
</style>
