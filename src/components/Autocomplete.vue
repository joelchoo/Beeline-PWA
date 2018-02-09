<template>
  <div>
    <transition name="fade">
      <section id="autocomplete-container"
               v-if="!isFetching">
        <p class="control has-icons-left">
          <input class="input"
                 type="text"
                 placeholder="Search Routes"
                 @input="filterRouteSearch($event.target.value)">
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
        <panel :input="name"
               :routes="data.length === 0 ? this.routes.slice(0, 20) : data.slice(0, 5)"></panel>
      </section>
    </transition>
    <div class="spinner"
         v-if="isFetching">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import LocalStorage from 'localforage';
import Panel from './Panel';
import * as beelineApi from '../specs/sessions/beeline';

export default {
  name: 'autocomplete-container',
  data() {
    return {
      routes: [],
      data: [],
      name: '',
      selected: null,
      isFetching: false,
    };
  },
  components: {
    Panel,
  },
  methods: {
    filterRouteSearch(input) {
      this.name = input;
      if (_.isEmpty(input)) {
        this.data = [];
        return;
      }
      this.data = this.routes.filter(option => (
        option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option.from.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option.to.toLowerCase().indexOf(input.toLowerCase()) >= 0));
    },
    async getRoutesdata() {
      this.isFetching = true;
      const date = Date.now();
      const limitTrips = 5;
      try {
        await LocalStorage.getItem('routes', async (err, val) => {
          if (val === null) {
            // Routes cannot be found in browser storage
            // Fetch data from Beeline routes API
            const { data } = await beelineApi.default(`includePath=true&includeTrips=true&startDate=${date}&limitTrips=${limitTrips}`);
            data.forEach(route => this.routes.push(route));
            const { error } = await LocalStorage.setItem('routes', data);
            if (typeof (error) !== 'undefined') {
              throw error;
            }
            this.isFetching = false;
          } else {
            // Routes found in browser Database
            this.routes = val;
            this.isFetching = false;
          }
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  created() {
    this.getRoutesdata();
  },
};
</script>
<style scoped>
/* Suggestion menu width length */
.autocomplete-container .dropdown-menu {
  max-width: 100% !important;
}
.autocomplete-container .dropdown-menu .media-content {
  overflow: hidden;
}
#autocomplete-container {
  /* Height: column - navbar - search field */
  height: calc(100vh - 52px);
  background-color: #ffffff;
}
.field:not(:last-child) {
  margin-bottom: 0 !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.spinner {
  margin: 100px auto;
  width: 100%;
  text-align: center;
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
</style>


