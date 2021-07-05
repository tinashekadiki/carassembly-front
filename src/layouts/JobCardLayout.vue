<template>
  <div class="c-wrapper c-wrapper-fluid">
    <AppTitle title="Job Cards"></AppTitle>
    <div class="c-body">
      <main class="c-main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppTitle from "../components/AppTitle";
export default {
  name: "JobCardLayout",
  components: {AppTitle}
}
</script>

<style scoped>

</style>