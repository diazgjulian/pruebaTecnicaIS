<template>
  <div class="O_home">
    <router-link class="A_home_link" to="/people" >People</router-link>
    <router-link class="A_home_link" to="/starships">Starships</router-link>
    <router-link class="A_home_link" to="/planets">Planets</router-link>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>


<style scoped>
  .O_home{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .A_home_link{
    width: 50vw;
    display: block;
    padding: 10px;
    background-color: #ccc;
    margin: 10px;
  }
</style>
