<template>
  <div>
    <section id="autocomplete-container">
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
    };
  },
  props: {
    isFetching: {
      type: Boolean,
      required: true,
    },
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
      this.$emit('update:isFetching', true);
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
            this.$emit('update:isFetching', false);
          } else {
            // Routes found in browser Database
            this.routes = val;
            this.$emit('update:isFetching', false);
          }
        });
      } catch (error) {
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
</style>


