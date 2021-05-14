<template>
  <section class="O_home">
    <ul class="A_list_item">
      <li v-for="starship in starships" v-bind:key="starship.name">
        <h3 class="A_link" @click="show = !show" v-bind:key="starship.name">{{ starship.name }}</h3>
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
            <li>Model: {{ starship.model }}</li>
            <li>Manufacturer: {{ starship.manufacturer }}</li>
            <li>Price: {{ starship.cost_in_credits }}</li>
            <li>Class: {{ starship.starship_class }}</li>
          </ul>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import Velocity from "velocity-animate";
export default {
  name: "StarshipsList",
  data() {
    return {
      starships: {},
      show: false,
    };
  },
  methods: {
    loadStarship() {
      axios
        .get("https://swapi.dev/api/starships/")
        .then((response) => {
          this.starships = response.data.results;
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
    this.loadStarship();
  },
};
</script>

<style>
</style>