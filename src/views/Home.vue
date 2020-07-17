<template>
  <v-layout class="background align-center justify-center column fill-height"
    :style="`background-image: url('${require('@/assets/login-desktop.0a0cacb5.jpg')}')`">
    <v-card flat class="transparent">
      <v-card-title class="mt-5">
        <div class="text-center mt-5">
          <img width="60%" :src="require('../assets/logo.png')" />
          <h3 class="mt-3 white--text">
            Ingresa el número de teléfono
            <br />de tu asesora independiente.
          </h3>
        </div>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            background-color="transparent"
            label="Teléfono"
            outlined
            dark
            v-model="mobilephone"
            @keypress="valid"
            @input="login()"
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card flat class="transparent">
      <v-card-actions>
        <v-overlay opacity="0" absolute :value="overlay">
          <v-progress-circular indeterminate size="32"></v-progress-circular>
        </v-overlay>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex';
import httpClient from "@/services/HttpClient.js";

export default {
  name: "Home",
  data: () => ({
    mobilephone: "",
    overlay: false,
  }),
  components: {
  },
  methods: {
    ...mapMutations(["setEmprendedora"]),
    valid($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) || this.mobilephone.length >= 10) { // 46 is dot
        $event.preventDefault();
      }
    },
    login() {
      if (this.mobilephone.length > 9) {
        this.overlay = true;
        httpClient
          .post('/api/v1/login/client', { 
            mobilephone: this.mobilephone 
          }).then(response => {
            this.overlay = false;
            const  { data } = response;
            if (typeof data.customer.error !== 'undefined') {
              alert(data.customer.error.message);
              this.mobilephone = "";
            } else {
              this.setEmprendedora(data.customer);
              this.$router.push({ name: 'Categories' });
            }
          }).catch(error => {
            alert("Fallo login, intente de nuevo");
            this.mobilephone = "";
            this.overlay = false;
          });
      }
    }
  }
};
</script>
<style scoped>
@media (min-width: 475px) {
  .background[data-v-300f51ea] {
    /*background: url("./asset/login-desktop.0a0cacb5.jpg");*/
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
  }
}
.background {
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
