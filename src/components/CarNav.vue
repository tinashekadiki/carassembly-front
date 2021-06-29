<template>
  <!-- sidebar  -->
  <nav class="sidebar dark_sidebar">
    <div class="logo d-flex justify-content-between">
      <a class="large_logo" href=""><img src="img/logo_white.png" alt=""></a>
      <a class="small_logo" href=""><img src="img/mini_logo.png" alt=""></a>
      <div class="sidebar_close_icon d-lg-none">
        <i class="ti-close"></i>
      </div>
    </div>
    <ul id="sidebar_menu">
      <li class="">
        <router-link class="has-arrow" to="/" aria-expanded="false">
          <div class="nav_icon_small">
            <img src="img/menu-icon/1.svg" alt="">
          </div>
          <div class="nav_title">
            <span>Job Cards</span>
          </div>
        </router-link>
      </li>
      <li class="">
        <router-link to="/sell" aria-expanded="false">
          <div class="nav_icon_small">
            <img src="img/menu-icon/2.svg" alt="">
          </div>
          <div class="nav_title">
            <span>Sell Products</span>
          </div>
        </router-link>
      </li>
      <li class="">
        <router-link to="stock" aria-expanded="false">
          <div class="nav_icon_small">
            <img src="img/menu-icon/3.svg" alt="">
          </div>
          <div class="nav_title">
            <span>Stock</span>
          </div>
        </router-link>
      </li>
      <li class="">
        <router-link to="/parts" aria-expanded="false">
          <div class="nav_icon_small">
            <img src="img/menu-icon/4.svg" alt="">
          </div>
          <div class="nav_title">
            <span>Parts</span>
          </div>
        </router-link>
      </li>
      <li class="">
        <router-link  to="/labour" aria-expanded="false">
          <div class="nav_icon_small">
            <img src="img/menu-icon/5.svg" alt="">
          </div>
          <div class="nav_title">
            <span>Labour</span>
          </div>
        </router-link>
      </li>
      <li class="">
        <router-link class="has-arrow" to="/reports" aria-expanded="false">
          <div class="nav_icon_small">
            <img src="img/menu-icon/6.svg" alt="">
          </div>
          <div class="nav_title">
            <span>Reports</span>
          </div>
        </router-link>

      </li>

    </ul>
  </nav>
  <!--/ sidebar  -->
</template>

<script>
export default {
  name: "CarNav"
}
</script>

<style scoped>

</style>
