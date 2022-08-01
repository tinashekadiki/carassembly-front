<template>
<MainLayout>
  <div class="card">
    <div class="card-header">Job Card Number <strong>1659358411975</strong></div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="search"><strong>FIRSTNAME</strong> / <strong>PART NUMBER</strong></label>
            <input
              class="form-control"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="search"><strong>QTY</strong> / <strong>PART PRICE</strong> </label>
            <input
              class="form-control"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="search"><strong>SERVICE</strong> / <strong>LABOUR</strong></label>
            <input
              class="form-control"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>Part Name</th>
            <th>Part / Labour</th>
            <th>Part No. </th>
            <th>Qty / Price</th>
            <th>Discount</th>
            <th>Material Type</th>
            <th>Depreciation</th>
            <th>Salvage</th>
            <th>Insurance payable</th>
            <th>Customer payable</th>
            <th>Tax %</th>
            <th>Tax $</th>
            <th>Total $ </th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
export default {
  components: { MainLayout },
  name: "JobCardTable",
  mounted(){
  },
  methods: {
    
  },
  data(){
    return {
    }
  }
};
</script>

<style scoped>
.fa {
  font-size: 16px;
}
</style>