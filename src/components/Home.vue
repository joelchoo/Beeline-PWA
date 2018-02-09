<template>
  <div class="home">
    <navbar></navbar>
    <div class="columns is-gapless">
      <div class="column router-container">
        <transition name="fade">
          <div v-if="isFetching"
               class="spinner-container">
            <div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
          </div>
        </transition>
        <router-view :isFetching.sync="isFetching"></router-view>
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
      isFetching: false,
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

.spinner-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.spinner {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: rgb(153, 153, 153);

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
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
