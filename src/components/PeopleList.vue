<template>
  <section class="">
    <ul class="A_list_item">
      <li v-for="person in people" v-bind:key="person.name">
        <h3 class="A_link" @click="show = !show" v-bind:key="person.name">
          {{ person.name }}
        </h3>
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
            <li>Height: {{ person.height }}</li>
            <li>Hair color: {{ person.hair_color }}</li>
            <li>Eye color: {{ person.eye_color }}</li>
            <li>Birth year: {{ person.birth_year }}</li>
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
  name: "PeopleList",
  data() {
    return {
      people: {},
      show: false,
    };
  },
  methods: {
    loadPeople() {
      axios
        .get("https://swapi.dev/api/people/")
        .then((response) => {
          this.people = response.data.results;
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
  created() {
    this.loadPeople();
  },
};
</script>

<style>

</style>