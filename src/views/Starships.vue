<template>
  <main class="O_home">
    <StarshipsList />
    <router-link class="A_link -back" to="/">Back</router-link>
  </main>
</template>

<script>
import StarshipsList from "@/components/StarshipsList.vue";

export default {
  name: "Starships",
  components: {
    StarshipsList,
  },
};
</script>

<style>
</style>