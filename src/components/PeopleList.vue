<template>
    <div class="people">
        <div v-for="peoples in people" v-bind:key="peoples.name">
            <h3 class="">{{peoples.name}}</h3>
            <p class="">Height : {{peoples.height}} cm</p>
            <p class="">Hair color : {{peoples.hair_color}}</p>
            <p class="">Eye color :  ({{peoples.eye_color}})</p>
            <p class="">Birth year : {{peoples.birth_year}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PeopleList',
  data () {
    return {
      people: {}
    }
  },
  methods: {
    loadPeople() {
      axios.get('https://swapi.dev/api/people/')
        .then((response) => {
          this.people = response.data.results;
        })
        .catch(error => {
            console.log(error);
        });
    }
  },
  mounted() {
    this.loadPeople();
  },
}
</script>