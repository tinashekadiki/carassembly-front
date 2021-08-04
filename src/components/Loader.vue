<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <Circle10></Circle10>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
<script>
import Circle10 from "vue-loading-spinner/src/components/Circle10"

export default {
  name: 'Loader',
  components: {Circle10}
}
</script>
