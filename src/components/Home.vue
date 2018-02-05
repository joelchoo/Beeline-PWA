<template>
  <div class="home">
    <div class="columns is-gapless">
      <div class="column">
        <autocomplete></autocomplete>
      </div>
      <div class="column is-two-thirds">
        <google-maps></google-maps>
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from './Autocomplete';
import GoogleMaps from './GoogleMaps';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
  components: {
    GoogleMaps,
    Autocomplete,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
