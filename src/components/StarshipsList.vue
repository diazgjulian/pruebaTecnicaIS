<template>
    <div class="people">
        <div v-for="starships in starship" v-bind:key="starships.name">
            <h3 class="">{{starships.name}}</h3>
            <p class="">Model: {{starships.model}}</p>
            <p class="">Manufacturer: {{starships.manufacturer}}</p>
            <p class="">Price: {{starships.cost_in_credits}}</p>
            <p class="">Class: {{starships.starship_class}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StarshipsList',
  data () {
    return {
      starship: {}
    }
  },
  methods: {
    loadStarship() {
      axios.get('https://swapi.dev/api/starships/')
        .then((response) => {
          this.starship = response.data.results;
        })
        .catch(error => {
            console.log(error);
        });
    }
  },
  mounted() {
    this.loadStarship();
  },
}
</script>