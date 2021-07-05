<template>
  <div class="c-wrapper c-wrapper-fluid">
    <AppTitle title="Profile" />
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
  name: "ProfileLayout",
  components: {AppTitle}
}
</script>

<style scoped>

</style>