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
      <!-- <div class="navbar-start">
        <a class="navbar-item"
           href="https://bulma.io/">
          Home
        </a>
      </div> -->
    </div>
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
.navbar {
  position: absolute;
  width: 33.3333%;
  z-index: 5;
}
.navbar-brand a .subtitle {
  color: #ffffff;
}
@media (min-width: 320px) and (max-width: 480px) {
  .navbar {
    width: 100%;
  }
}
</style>
