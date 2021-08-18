<template>
  <header class="c-header c-header-light c-header-fixed">
    <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar"
            data-class="c-sidebar-show">
      <i class="lni lni-menu"></i>
    </button>
    <a class="c-header-brand d-lg-none c-header-brand-sm-up-center" href="#">
      <i class="lni lni-menu"></i>
    </a>
    <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar"
            data-class="c-sidebar-lg-show" responsive="true">
      <i class="lni lni-menu"></i>
    </button>
    <ul class="c-header-nav d-md-down-none">
      <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Dashboard</a></li>
      <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">{{ title }}</a></li>
    </ul>
    <ul class="c-header-nav mfs-auto">
      <li class="c-header-nav-item px-3 c-d-legacy-none">
        <button class="c-class-toggler c-header-nav-btn" type="button" id="header-tooltip" data-target="body"
                data-class="c-dark-theme" data-toggle="c-tooltip" data-placement="bottom"
                title="Toggle Light/Dark Mode">
          <i class="lni lni-night"></i>
        </button>
      </li>
      <li class="c-header-nav-item px-3 c-d-legacy-none">
        <button @click="logOut()" class="c-header-nav-btn">
          <i  class="fa fa-user"></i>
        </button>
      </li>
    </ul>

    <div class="c-subheader justify-content-between px-3">

      <ol class="breadcrumb border-0 m-0 px-0 px-md-3">
        <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">{{ title }}</li>
      </ol>
      <div v-if="link !== undefined" class="c-subheader-nav d-md-down-none mfe-2">

        <router-link :to="link" class="c-subheader-nav-link">
          <i class="fa fa-add"></i> &nbsp;New Job Card
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import global from "../utils/global";
export default {
  props: ['title', 'link'],
  name: "AppTitle",
  mixins: [global],
  computed: {
    buttonName() {
      return this.title.split(' ').length === 1 ? `New ${this.title}` : this.title;
    }
  }
}
</script>

<style scoped>
.fa {
  font-size: 30px !important;
}

.lni {
  font-size: 30px;
}
</style>