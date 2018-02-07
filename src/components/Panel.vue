<template>
  <nav class="panel">
    <p class="panel-heading">
      AVAILABLE ROUTES
    </p>
    <div class="card"
         v-for="route in routes"
         :key="route.id"
         @click="viewRouteDetails(route.label)">
      <div class="card-header-label left">
        <p>{{route.label}}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="left">
            <div class="flex-container">
              <div class="flex-item">
                <span>8:00 am</span>
              </div>
              <div class="flex-item">
                <span class="start-icon">
                  <span class="line"></span>
                </span>
              </div>
              <div class="flex-item">
                <span v-html="$options.filters.highlight(route.from, input)">{{route.from}}</span>
              </div>
            </div>
            <div class="flex-container">
              <div class="flex-item">
                <span>9:00 am</span>
              </div>
              <div class="flex-item">
                <span class="stop-icon"></span>
              </div>
              <div class="flex-item">
                <span v-html="$options.filters.highlight(route.to, input)">{{route.to}}</span>
              </div>
            </div>
            <p>{{route.schedule}}</p>
          </div>
          <a href="#"
             class="card-header-arrow right"
             aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-right"
                 aria-hidden="true"></i>
            </span>
          </a>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <p>Can't find a suitable route?</p>
    <a href="https://app.beeline.sg/#">Suggest a new route</a>
  </nav>
</template>
<script>
import _ from 'lodash';

export default {
  name: 'panel',
  props: {
    routes: {
      type: Array,
      required: true,
    },
    input: {
      type: String,
      required: true,
    },
  },
  methods: {
    viewRouteDetails(label) {
      this.$router.push({ path: `/route/${label}` });
    },
  },
  filters: {
    highlight(value, query) {
      if (_.isEmpty(query)) {
        return value;
      }
      const check = new RegExp(query, 'ig');
      return value.toString().replace(check, matchedText => (`<strong>${matchedText}</strong>`));
    },
  },
};
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.flex-container .flex-item {
  justify-content: center;
}
.flex-container .flex-item:first-child {
  white-space: nowrap;
}
.content {
  text-align: left;
}
nav.panel {
  height: calc(100% - 52px);
  overflow-y: scroll;
}
a:last-child {
  color: #483960;
  text-decoration: underline;
}
.left {
  float: left;
}
.right {
  position: absolute;
  right: 11px;
}
.clear {
  clear: both;
}
.content,
.card-header-label {
  font-size: 0.8rem;
}
.content .left {
  max-width: 90%;
}
.card-header-label {
  background-color: #483960;
  color: #ffffff;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  margin: 5px 0 0 20px;
  padding: 0 3px;
}
.card-header-arrow {
  padding-top: 20px;
}
.card-header-icon {
  background-color: #483960;
  color: #ffffff;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
}
.start-icon,
.stop-icon {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 21px;
}
.start-icon {
  background: url("https://app.beeline.sg/img/RoutePairSmallStart.svg") center
    5px no-repeat;
}
.start-icon .line {
  width: 2px;
  height: 100%;
  background: url("https://app.beeline.sg/img/RoutePairSmallLine.svg") 50%;
  top: 14px;
  left: 6.5px;
  position: absolute;
  display: block;
}
.stop-icon {
  background: url("https://app.beeline.sg/img/RoutePairSmallEnd.svg") center 5px
    no-repeat;
}
</style>


