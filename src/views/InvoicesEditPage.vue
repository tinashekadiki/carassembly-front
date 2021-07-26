<template>
  <JobCardLayout></JobCardLayout>
</template>

<script>
import JobCardLayout from "../layouts/JobCardLayout";
import {http} from "../utils/http-base";
export default {
  name: "InvoicesEditPage",
  components: {JobCardLayout},
  mounted() {
    if (this.$route.params.id) {
      this.editing = true;
      this.globalLoadingState = true;
      http.get(`/invoice/get-one/${this.$route.params.id}`).then(resp => {
        this.i = resp.data;
        this.orderParts = this.jobCard.invoice.orderParts;
      }).catch(err => {
            console.log(err)
          }
      ).finally(() => {
        this.globalLoadingState = false;
      })
    }
  },

  data(){
    return {
      invoice: {

      }
    }
  }
}
</script>


<style scoped>

</style>