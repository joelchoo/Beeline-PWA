<template>
  <div id="autocomplete">
    <navbar></navbar>
    <section>
      <b-field>
        <b-autocomplete v-model="name"
                        :data="data"
                        placeholder="Search Routes"
                        field="title"
                        :loading="isFetching"
                        @input="getAsyncData"
                        @select="option => selected = option">

          <template slot-scope="props">
            <div class="media">
              <div class="media-left">
                <img width="32"
                     :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
              </div>
              <div class="media-content">
                {{ props.option.title }}
                <br>
                <small>
                  Released at {{ props.option.release_date }}, rated
                  <b>{{ props.option.vote_average }}</b>
                </small>
              </div>
            </div>
          </template>
        </b-autocomplete>
      </b-field>
      <!-- <p class="content">
        <b>Selected:</b> {{ selected }}
        </p> -->
        <panel :routes="this.routes"></panel>
    </section>
  </div>
</template>
<script>
import debounce from 'lodash/debounce';
import Navbar from './Navbar';
import Panel from './Panel';

export default {
  name: 'autocomplete',
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
    Navbar,
    Panel,
  },
  methods: {
    getRoutesdata() {
      this.$http.get('https://api.beeline.sg/routes?includeIndicative=false&includePath=false&limitTrips=5')
        .then(({ data }) => {
          data.forEach(item => this.routes.push(item));
        })
        .catch((error) => {
          throw error;
        });
    },
    getAsyncData: debounce(function getMovieData() {
      this.data = [];
      this.isFetching = true;
      console.log(this.$http);
      this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
        .then(({ data }) => {
          data.results.forEach(item => this.data.push(item));
          this.isFetching = false;
        })
        .catch((error) => {
          this.isFetching = false;
          throw error;
        });
    }, 500),
  },
  created() {
    this.getRoutesdata();
    console.log(this.routes);
  },
};
</script>
<style>
/* Suggestion menu width length */
.autocomplete .dropdown-menu {
  max-width: 100% !important;
}
#autocomplete {
  height: 100vh;
  overflow: scroll;
}
</style>


