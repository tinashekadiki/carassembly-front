<template>
    <JobCardLayout title="Stocks">
      <NewStock></NewStock>
      <StocksTable></StocksTable>
    </JobCardLayout>
</template>

<script>
import global from "../utils/global";
import JobCardLayout from "../layouts/JobCardLayout";
import NewStock from "./stocks/NewStock";
import StocksTable from "./stocks/StocksTable";

export default {
  name: "StockPage",
  mixins: [global],
  components: {StocksTable, NewStock, JobCardLayout},
}
</script>

<style scoped>

</style>