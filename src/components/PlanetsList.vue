<template>
  <section class="O_home">
    <ul class="A_list_item">
      <li v-for="planet in planets" v-bind:key="planet.name">
        <h3 class="A_link" @click="show = !show" v-bind:key="planet.name">{{ planet.name }}</h3>
        <transition
          name="staggered-fade"
          tag="ul"
          appear
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <ul v-show="show" class="-detail">
            <li>Climate: {{ planet.climate }}</li>
            <li>Terrain: {{ planet.terrain }}</li>
            <li>Gravity: {{ planet.gravity }}</li>
            <li>Population: {{ planet.population }}</li>
          </ul>
        </transition>
      </li>
    </ul>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "PlanetList",
  data() {
    return {
      planets: {},
      show: false,
    };
  },
  methods: {
    loadPlanet() {
      axios
        .get("https://swapi.dev/api/planets/")
        .then((response) => {
          this.planets = response.data.results;
          console.log(this.planets);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 1, height: "100%" }, { complete: done });
      }, delay);
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
  mounted() {
    this.loadPlanet();
  },
};
</script>

<style>
</style>