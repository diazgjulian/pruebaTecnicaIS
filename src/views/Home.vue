<template>
  <main class="O_home">
    <section>
      <router-link class="A_link" to="/people"> People </router-link>
      <router-link class="A_link" to="/starships"> Starships </router-link>
      <router-link class="A_link" to="/planets"> Planets </router-link>
    </section>
  </main>
</template>

<style>
.O_home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
