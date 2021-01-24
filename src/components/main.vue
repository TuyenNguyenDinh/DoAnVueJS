<template>
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
</template>
<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/footer.vue";
export default {
    components: {
    Header,
    Footer,
  },
}
</script>