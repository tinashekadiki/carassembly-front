<template>
  <div id="app">
    <CarNav v-if="currentRoute !== 'Login'"></CarNav>
    <div class="home">
      <section class="main_content dashboard_part large_header_bg">
        <Header />
          <router-view/>
      </section>
    </div>
    <Footer />
  </div>
</template>

<style>

</style>
<script>

import CarNav from "./components/CarNav";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {Footer, Header, CarNav},
  computed: {
    currentRoute(){
      return this.$route.name;
    }
  }
}
</script>
