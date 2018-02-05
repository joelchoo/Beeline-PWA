<template>
  <gmap-map :center="center"
            :zoom="11"
            id="map">
    <gmap-marker :key="index"
                 v-for="(m, index) in markers"
                 :position="m.position"
                 :clickable="true"
                 :draggable="true"
                 @click="center=m.position"></gmap-marker>
  </gmap-map>
</template>
<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import variables from '../../config/variables';

Vue.use(VueGoogleMaps, {
  load: {
    key: variables.googleMapsApiToken,
    libraries: 'places',
  },
});
export default {
  name: 'google-maps',
  data() {
    return {
      center: { lat: 1.03, lng: 103.0 },
      markers: [{
        position: { lat: 1.03, lng: 103.0 },
      }, {
        position: { lat: 1.03, lng: 103.0 },
      }],
    };
  },
};
</script>
<style scoped>
#map {
  height: 100vh;
}
</style>
