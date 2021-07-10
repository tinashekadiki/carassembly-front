<template>
  <div>
    <StocksTable :stockParts="stockParts"></StocksTable>
<!--    <Circle10 v-else></Circle10>-->
  </div>
</template>

<script>
import StocksTable from "./stocks/StocksTable";
// import Circle10 from "vue-loading-spinner/src/components/Circle10";
import {http} from "../utils/http-base";
import global from "../utils/global";

export default {
  name: "StockPage",
  mixins: [global],
  components: {StocksTable},
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