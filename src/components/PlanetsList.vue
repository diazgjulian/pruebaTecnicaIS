<template>
    <div class="">
        <div class="" v-for="planets in planet" v-bind:key="planets.name">
            <h3 class="">{{planets.name}}</h3>
            <p class="">Climate : {{planets.climate}}</p>
            <p class="">Created : {{planets.created}}</p>
            <p class="">Gravity : {{planets.gravity}}</p>
            <p class="">Population : {{planets.population}} person(s)</p>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'PlanetList',
    data () {
      return {
        planet: {}
      }
    },
    methods: {
      loadPlanet() {
        axios.get('https://swapi.dev/api/planets/')
          .then((response) => {
            this.planet = response.data.results;
            console.log(this.planet)
          })
          .catch(error => {
            console.log(error);
        });
      }
    },
    mounted() {
      this.loadPlanet();
    },
  }
</script>