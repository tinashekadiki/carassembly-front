<template>
  <div class="c-wrapper c-wrapper-fluid">
    <AppTitle :title="title"></AppTitle>
    <div class="c-body">
      <main class="c-main">
        <div class="container-fluid">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppTitle from "../components/AppTitle";
export default {
  props: ['title'],
  name: "PaymentsLayout",
  components: {AppTitle}
}
</script>

<style scoped>

</style>