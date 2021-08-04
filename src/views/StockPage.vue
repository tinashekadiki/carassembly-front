<template>
    <MainLayout title="Stocks">
      <NewStock></NewStock>
      <StocksTable></StocksTable>
    </MainLayout>
</template>

<script>
import global from "../utils/global";
import MainLayout from "../layouts/MainLayout";
import NewStock from "./stocks/NewStock";
import StocksTable from "./stocks/StocksTable";

export default {
  name: "StockPage",
  mixins: [global],
  components: {StocksTable, NewStock, MainLayout},
}
</script>

<style scoped>

</style>