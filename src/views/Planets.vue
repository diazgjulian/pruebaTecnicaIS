<template>
  <main class="O_home">
    <PlanetsList />
    <router-link class="A_link -back" to="/">Back</router-link>
  </main>
</template>

<script>
import PlanetsList from "@/components/PlanetsList.vue";

export default {
  name: "Planets",
  components: {
    PlanetsList,
  },
};
</script>

<style>
</style>