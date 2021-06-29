<template>
  <div class="container-fluid no-gutters">
    <div class="row">
      <div class="col-lg-12 p-0 ">
        <div class="header_iner d-flex justify-content-between align-items-center">
          <div class="sidebar_icon d-lg-none">
            <i class="ti-menu"></i>
          </div>
          <div class="line_icon open_miniSide d-none d-lg-block">
            <img src="img/line_img.png" alt="">
          </div>
          <div class="header_right d-flex justify-content-between align-items-center">
            <div class="header_notification_warp d-flex align-items-center">
              <li>
                <a class="CHATBOX_open nav-link-notify" href="#"> <img src="img/icon/msg.svg" alt="">   </a>
              </li>
              <li>
                <a class="bell_notification_clicker nav-link-notify" href="#"> <img src="img/icon/bell.svg" alt="">
                  <!-- <span>2</span> -->
                </a>
              </li>

            </div>
            <div class="profile_info d-flex align-items-center">
              <div class="profile_thumb mr_20">
                <img src="img/transfer/4.png" alt="#">
              </div>
              <div class="author_name">
                <h4 class="f_s_15 f_w_500 mb-0">Jiue Anderson</h4>
                <p class="f_s_12 f_w_400">Manager</p>
              </div>
              <div class="profile_info_iner">
                <div class="profile_author_name">
                  <p>Manager</p>
                  <h5>Jiue Anderson</h5>
                </div>
                <div class="profile_info_details">
                  <a href="#">My Profile </a>
                  <a href="#">Settings</a>
                  <a href="#">Log Out </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>