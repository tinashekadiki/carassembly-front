<template>
  <div class="c-wrapper c-wrapper-fluid">
    <AppTitle :title="title" :link="newRoute"></AppTitle>
    <div class="c-body">
      <main class="c-main">
        <div v-if="!globalLoadingState" class="container-fluid">
          <slot />
        </div>
        <div v-if="globalLoadingState" class="container-fluid">
         <Loader></Loader>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import global from "../utils/global";
import AppTitle from "../components/AppTitle";
import Loader from "../components/Loader";
export default {
  props: ['title', 'newRoute'],
  mixins: [global],
  name: "MainLayout",
  components: {Loader, AppTitle}
}
</script>

<style scoped>

</style>