<template>
  <v-toolbar 
    elevation="1"
    color="accent"
    dark
    dense 
    fixed
    class="mb-1">
    <v-toolbar-title class="primary--text animated bounceInLeft toolbar-text">{{ getEmprendedoraName }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon color="primary" :href="`tel:${getEmprendedoraPhone}`">
      <v-icon>mdi-phone</v-icon>
    </v-btn>
    <v-btn icon color="primary">
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters(['getEmprendedoraName', 'getEmprendedoraPhone'])
  }
}
</script>