<template>
  <div class="c-wrapper c-wrapper-fluid">
    <AppTitle :title="title" :link="newRoute"></AppTitle>
    <div class="c-body">
      <main class="c-main">
        <div class="container-fluid">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppTitle from "../components/AppTitle";
export default {
  props: ['title', 'newRoute'],
  name: "JobCardLayout",
  components: {AppTitle}
}
</script>

<style scoped>

</style>