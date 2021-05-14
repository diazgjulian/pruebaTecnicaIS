<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>


<style>
body {
  background-color: #000;
  background: url(./assets/star-bg.jpg) no-repeat center center fixed;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
main {
  margin: 0 0 5vw 0;
}
.A_link {
  cursor: pointer;
  width: 50vw;
  display: block;
  padding: 10px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(73, 205, 253, 1) 40%,
    rgba(73, 205, 253, 1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  margin: 15px 0;
  border: 5px solid;
  border-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 3%,
      rgba(58, 85, 214, 1) 40%,
      rgba(58, 85, 214, 1) 60%,
      rgba(0, 0, 0, 0) 97%
    )
    1;
  text-decoration: none;
  color: #060821;
  font-weight: 800;
  box-shadow: 0px 0px 10px 2px #000000;
}
.-back {
  width: 30vw;
}
.-detail {
  display: block;
  height: fit-content;
  padding: 10px;
  color: #dba90d;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(58, 85, 214, 1) 40%,
    rgba(58, 85, 214, 1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  margin: 15px 0;
  border: 5px solid;
  border-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 3%,
      rgba(73, 205, 253, 1) 40%,
      rgba(73, 205, 253, 1) 60%,
      rgba(0, 0, 0, 0) 97%
    )
    1;
  box-shadow: 0px 0px 10px 2px #000000;
}
.-detail li {
  font-weight: 500;
}
</style>
