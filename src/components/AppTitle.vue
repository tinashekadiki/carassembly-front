<template>
  <div class="overly_inner ">
    <div class="container-fluid p-0 ">
      <!-- page title  -->
      <div class="row">
        <div class="col-12">
          <div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
            <div class="page_title_left">
              <h3 class="mb-0">{{ title }}</h3>
            </div>
            <div class="monitor_list_widget">
              <router-link :to="link" class="btn_1 w-100">{{ buttonName }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'link'],
  name: "AppTitle",
  computed: {
    buttonName(){
      return this.title.split(' ').length === 1 ? `New ${this.title}` : this.title;
    }
  }
}
</script>

<style scoped>

</style>