<template>
    <div class="O_planets">
        <PlanetsList />
        <router-link class="A_link_back" to="/" >Back</router-link>
    </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList.vue'

export default {
  name: 'Planets',
  components: {
    PlanetsList
  }
}
</script>

<style scoped>
 
</style>