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
    </ul>
    <ul class="c-header-nav">
      <li class="c-header-nav-item dropdown d-md-down-none mx-2"><a class="c-header-nav-link" data-toggle="dropdown"
                                                                    href="#" role="button" aria-haspopup="true"
                                                                    aria-expanded="false">
        <i class="lni lni-comments"></i>
        <span class="badge badge-pill badge-danger">5</span></a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0">
          <div class="dropdown-header bg-light"><strong>You have 5 notifications</strong></div>
          <a class="dropdown-item" href="#">
            <svg class="c-icon mfe-2 text-success">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user-follow"></use>
            </svg>
            New user registered</a><a class="dropdown-item" href="#">
          <svg class="c-icon mfe-2 text-danger">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user-unfollow"></use>
          </svg>
          User deleted</a><a class="dropdown-item" href="#">
          <svg class="c-icon mfe-2 text-info">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-chart"></use>
          </svg>
          Sales report is ready</a><a class="dropdown-item" href="#">
          <svg class="c-icon mfe-2 text-success">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-basket"></use>
          </svg>
          New client</a><a class="dropdown-item" href="#">
          <svg class="c-icon mfe-2 text-warning">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
          </svg>
          Server overloaded</a>
          <div class="dropdown-header bg-light"><strong>Server</strong></div>
          <a class="dropdown-item d-block" href="#">
            <div class="text-uppercase mb-1"><small><b>CPU Usage</b></small></div>
            <span class="progress progress-xs">
<div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
     aria-valuemax="100"></div>
</span><small class="text-muted">348 Processes. 1/4 Cores.</small>
          </a><a class="dropdown-item d-block" href="#">
          <div class="text-uppercase mb-1"><small><b>Memory Usage</b></small></div>
          <span class="progress progress-xs">
 <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0"
      aria-valuemax="100"></div>
</span><small class="text-muted">11444GB/16384MB</small>
        </a><a class="dropdown-item d-block" href="#">
          <div class="text-uppercase mb-1"><small><b>SSD 1 Usage</b></small></div>
          <span class="progress progress-xs">
<div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0"
     aria-valuemax="100"></div>
</span><small class="text-muted">243GB/256GB</small>
        </a>
        </div>
      </li>

      <button class="c-header-toggler c-class-toggler mfe-md-3" type="button" data-target="#aside"
              data-class="c-sidebar-show">
        <i class="fa fa-sign-out"></i>
      </button>
    </ul>
    <div class="c-subheader justify-content-between px-3">

      <ol class="breadcrumb border-0 m-0 px-0 px-md-3">
        <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">{{ title }}</li>
      </ol>
      <div class="c-subheader-nav d-md-down-none mfe-2">

        <router-link class="c-subheader-nav-link">
          <i class="fa fa-add"></i> &nbsp;New Job Card
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title', 'link'],
  name: "AppTitle",
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
  font-size: 30;
}
</style>