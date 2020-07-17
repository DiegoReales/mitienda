<template>
  <div>
    <ToolbarComponent />
    <v-content>
      <v-layout class="layout justify-center">
        <v-flex xs12 sm8 md5 lg4>
          <v-card flat>
            <v-container class="pb-0">
              <v-img 
                contain
                src="https://mitienda.moda/img/productos-de-entrega-inmediata.e07d1e57.png" 
                class="mb-2">
                <template v-slot:default>
                  <v-btn rounded top right dark small>VER MÁS</v-btn>
                </template>
              </v-img>
              <v-container grid-list-md fluid class="pt-0 pa-1 text-xs-center">
                <v-layout row wrap>
                  <v-subheader class="grey--text pl-0" style="font-size: 1.5em;">LÍNEAS</v-subheader>
                  <CategoryCardComponent
                    v-for="(item, i) in categories"
                    :key="i"
                    :image="item.image"
                  ></CategoryCardComponent>
                </v-layout>
              </v-container>
              <SectionMainComponent 
                v-for="(item, i) in sections" 
                :key="i" 
                :banner="item.image"
                :products="item.products"
              ></SectionMainComponent>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    <NavigationComponent />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import NavigationComponent from "@/components/shared/navigation.component.vue";
import ToolbarComponent from "@/components/shared/toolbar.component.vue";
import CategoryCardComponent from "@/components/shared/categorycard.component.vue";
import SectionMainComponent from "@/components/section/sectionmain.component.vue";

export default {
  name: "Categories",
  data: () => ({}),
  components: {
    NavigationComponent,
    ToolbarComponent,
    CategoryCardComponent,
    SectionMainComponent
  },
  computed: {
    ...mapState(["categories", "sections"])
  },
  methods: {
    ...mapActions(["getCategories", "getSections"])
  },
  created() {
    this.getCategories();
    this.getSections();
  }
};
</script>
<style>
.v-responsive__content {
  margin-left: 0% !important;
}
</style>