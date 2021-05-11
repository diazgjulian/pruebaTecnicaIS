<template>
    <div class="O_starships">
        <StarshipsList />
        <router-link class="A_link_back" to="/" >Back</router-link>
    </div>
</template>

<script>
import StarshipsList from '@/components/StarshipsList.vue'

export default {
  name: 'Starships',
  components: {
    StarshipsList
  }
}
</script>

<style scoped>
 
</style>