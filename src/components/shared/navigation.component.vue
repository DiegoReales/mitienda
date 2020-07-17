<template>
  <v-bottom-navigation :value="enabled" color="primary" height="56" grow fixed>
    <v-btn :to="{ name: 'Categories' }">
      <span>Categories</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Catalogo</span>
      <v-icon>mdi-account-badge-outline</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Cart' }">
      <span>Carrito</span>
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({
    enabled: true
  })
};
</script>