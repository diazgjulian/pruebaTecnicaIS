<template>
  <div class="O_people">
    <PeopleList />
    <router-link class="A_link_back" to="/" >Back</router-link>
  </div>
</template>

<script>
import PeopleList from '@/components/PeopleList.vue'

export default {
  name: 'People',
  components: {
    PeopleList
  }
}
</script>

<style scoped>
 
</style>
