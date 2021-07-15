<template>
    <JobCardLayout title="Stocks">

      <StocksTable :stockParts="stockParts"></StocksTable>
    </JobCardLayout>
</template>

<script>
import StocksTable from "./stocks/StocksTable";
import {http} from "../utils/http-base";
import global from "../utils/global";
import JobCardLayout from "../layouts/JobCardLayout";

export default {
  name: "StockPage",
  mixins: [global],
  components: {JobCardLayout, StocksTable},
  mounted() {
    this.fetchStockParts();
  },
  data(){
    return {
      stockParts: []
    }
  },
  methods: {
    fetchStockParts(){
      this.globalLoadingState = true;
      http.get('/stock/list').then(resp => {
        this.stockParts = resp.data;
      }).catch(err => {
            console.log(err)
          }
      ).finally(() => {
        this.globalLoadingState = false;
      });
    }
  }
}
</script>

<style scoped>

</style>