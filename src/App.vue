<template>
  <div id="app">
    <div v-if="currentRoute !== 'Login'">
      <CarNav></CarNav>
      <router-view></router-view>
      <Footer></Footer>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .c-body{
    margin-top: 90px;
  }

  .fa{
    font-size: 40px;
  }

  .btn-group{
    right: 0;
  }
  .mt-30{
    margin-top: 30px;
  }

  .fa {
    font-size: 16px;
  }

  .btn{
    margin-right: 10px;
  }

  .color{
    height: 50px;
    width: 50px;
  }
</style>
<script>

import CarNav from "./components/CarNav";
import Footer from "./components/Footer";
export default {
  components: {Footer, CarNav},
  computed: {
    currentRoute(){
      return this.$route.name;
    }
  }
}
</script>
