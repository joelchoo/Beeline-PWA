<template>
  <nav class="panel">
    <p class="panel-heading">
      Routes
    </p>
    <div class="card" v-for="route in routes" :key="route.id">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-gapless">
            <div class="column is-11">
              <p>{{route.from}}</p>
              <p>{{route.to}}</p>
              <br>
              <p>{{route.schedule}}</p>
            </div>
            <div class="column">
              <a href="#"
                 class="card-header-icon"
                 aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down"
                     aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'panel',
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.content {
  justify-content: center;
}
.content .is-11 {
  text-align: left;
}
nav .panel {
  max-height: 100%;
}
</style>


