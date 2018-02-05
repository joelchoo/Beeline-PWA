<template>
  <nav class="navbar is-transparent is-primary">
    <div class="navbar-brand">
      <a class="navbar-item"
         href="https://bulma.io">
        <h1 class="subtitle">Beeline</h1>
      </a>
      <div class="navbar-burger burger"
           @click="toggleMenu"
           :class="{'is-active': navIsActive}"
           data-target="mainNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="mainNav"
         class="navbar-menu"
         :class="{'is-active': navIsActive}">
      <div class="navbar-start">
        <a class="navbar-item"
           href="https://bulma.io/">
          Home
        </a>
      </div>
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button"
               data-social-network="Twitter"
               data-social-action="tweet"
               data-social-target="http://localhost:4000"
               target="_blank"
               href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
        </div>
      </div>
    </div> -->
  </nav>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {
        navIsActive: false,
      };
    },
    methods: {
      toggleMenu() {
        this.navIsActive = !this.navIsActive;
      },
    },
  };
</script>
<style scoped>
.navbar-brand a .subtitle {
  color: #ffffff;
}
</style>
