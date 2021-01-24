<template>
  <div id="app">
    <div class="container-flud">
    <header>
      <Header></Header>
    </header>
    <section id="body">
      <router-view class="view" />
    </section>
    <footer class="site-footer">
      <div class="container">
        <Footer></Footer>
      </div>
    </footer>
  </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/footer.vue";
//css
import("@/assets/css/animate.css");
import("@/assets/css/app.css");
import("@/assets/css/email.css");
import("@/assets/css/frontend/cart.css");
import("@/assets/css/frontend/category.css");
import("@/assets/css/frontend/complete.css");
import("@/assets/css/frontend/details.css");
import("@/assets/css/frontend/footer.css");
import("@/assets/css/frontend/home.css");
import("@/assets/css/frontend/search.css");
import("@/assets/css/frontend/bootstrap.min.css");
import("@/assets/css/font-awesome.min.css");
import("@/assets/css/all.css");
import("@/assets/css/frontend/details.css");
//js
// import("./assets/js/frontend/bootstrap.min.js");

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  metaInfo: {
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js",
        async: true,
        defer: true,
      },
      {
        src: "https://code.jquery.com/jquery-3.5.1.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js",
        async: true,
        defer: true,
      },
    ],
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container-flud{
  position: relative;
}
</style>
