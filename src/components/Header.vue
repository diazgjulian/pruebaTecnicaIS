<template>
  <header class="O_header">
    <figure class="A_header_img">
      <img
        src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
        alt="Logotipo Star Wars"
      />
    </figure>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.O_header {
  display: flex;
  justify-content: center;
  margin: 3vw 0;
}

.A_header_img {
  width: 50vw;
}

.A_header_img img {
  width: 100%;
}
</style>