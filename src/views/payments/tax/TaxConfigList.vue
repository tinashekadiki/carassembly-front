<template>
  <JobCardLayout title="Taxes">
      <div class="card">
        <div class="card-header">
          Create New Tax Conguration
        </div>
        <div class="card-body">
          <div class="row">
          <div class="col-md-4">
            <label>Tax Title</label>
            <input class="form-control" v-model="taxData.taxName" placeholder="Tax Title">
          </div>
          <div class="col-md-4">
            <label>Tax Type</label>
            <input class="form-control" v-model="taxData.taxType" placeholder="Tax Type">
          </div>
          <div class="col-md-4">
            <label>Tax Percentage</label>
            <input class="form-control" v-model="taxData.taxPercentage" placeholder="Tax Percentage">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-3 mt-30">
            <button class="btn btn-facebook" @click="saveTax()">Save Tax Configuration</button>
          </div>
        </div>
        </div>

      </div>


    <div class="card">
      <div class="card-header">
        List of Taxes
      </div>
      <div class="card-body">
        <table class="table table-responsive-sm table-striped table-bordered">
          <thead>
          <tr>
            <th>Tax Name</th>
            <th>Tax Type</th>
            <th>Tax %ge</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="tax in taxList" :key="tax.id">
            <td>{{ tax.taxName }}</td>
            <td>{{ tax.taxType }}</td>
            <td>{{ tax.taxPercentage }}</td>
            <td>
              <button class="btn btn-success">
                <i class="fa fa-edit"></i>
              </button>
              <button class="btn btn-danger">
                <i class="fa fa-remove"></i>
              </button>
            </td>
          </tr>
          </tbody>
          <p>No Tax Available</p>
        </table>
      </div>

    </div>
  </JobCardLayout>
</template>

<script>
import global from "../../../utils/global";
import {http} from "../../../utils/http-base";
import JobCardLayout from "../../../layouts/JobCardLayout";

export default {
  components: {JobCardLayout},
  mixins: [global],
  mounted() {
    this.retrieveTaxList()
  },
  name: "TaxConfigList",
  data(){
    return {
      taxData: {
        taxType: "",
        taxName: "",
        taxPercentage: ""
      }
    }
  },
  methods: {
    saveTax(){
      this.globalLoadingState = true;
      http.post(`tax/create`, this.taxData).then(res => {
        console.log(res)
        this.retrieveTaxList()
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.globalLoadingState = false;
      })
    }
  }
}
</script>

<style scoped>
  .fa {
    font-size: 16px;
  }

  .btn {
    margin: 10px;
  }
</style>