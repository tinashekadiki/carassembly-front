<template>
  <div class="card">
    <div class="card-header">Job Cards</div>
    <div class="card-body">
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
        <tr>
          <th>Part Name</th>
          <th>Price</th>
          <th>Labour</th>
          <th>QoH</th>
          <th>Average Purchase Price</th>
          <th>Stock Quantity</th>
        </tr>
        </thead>
        <tbody v-if="stockParts ? stockParts.length : 0">
        <tr v-for="stockPart in stockParts" :key="stockPart.id">
          <td>{{ stockPart.partName }}</td>
          <td>{{ stockPart.price }}</td>
          <td>{{ stockPart.partOrLabour }}</td>
          <td><span class="badge badge-success">{{ stockPart.qoH }}</span></td>
          <td>{{ stockPart.averagePurchasePrice }}</td>
          <td>{{ stockPart.quantity }}</td>
        </tr>
        </tbody>
        <p v-else>No Job Cards Available</p>
      </table>
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Prev</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StocksTable",
  props: ['stockParts']
}
</script>

<style scoped>

</style>