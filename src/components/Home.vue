<template>
  <div class="home">
    <navbar></navbar>
    <div class="columns is-gapless">
      <div class="column router-container">
        <router-view></router-view>
      </div>
      <div class="column maps-container is-two-thirds">
        <google-maps></google-maps>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
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
    Navbar,
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
.columns {
  display: flex !important;
  flex-direction: row;
}

.router-container {
  height: calc(100vh - 52px);
  margin-top: 52px !important;
}

@media (min-width: 320px) and (max-width: 768px) {
  .columns {
    flex-direction: column;
  }
  .maps-container {
    order: 1;
  }
  .router-container {
    order: 2;
    position: absolute;
    z-index: 6;
  }
}
</style>
