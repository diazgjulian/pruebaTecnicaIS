<template>
  <main class="O_home">
    <PeopleList />
    <router-link class="A_link -back" to="/">Back</router-link>
  </main>
</template>

<script>
import PeopleList from "@/components/PeopleList.vue";

export default {
  name: "People",
  components: {
    PeopleList,
  },
};
</script>

<style>
</style>