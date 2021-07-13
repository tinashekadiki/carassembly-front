<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <label>Tax Title</label>
        <input class="form-control" v-model="taxData.taxName" placeholder="Status Name">
      </div>
      <div class="col-md-4">
        <label>Tax Type</label>
        <input class="form-control" v-model="taxData.taxType" placeholder="Status Name">
      </div>
      <div class="col-md-4">
        <label>Tax Percentage</label>
        <input class="form-control" v-model="taxData.taxPercentage" placeholder="Status Name">
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-3 mt-30">
        <button class="btn btn-facebook" @click="saveTax()">Save Tax Configuration</button>
      </div>
    </div>

    <div class="row">
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
        <tr>
          <th>Status Name</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="tax in taxList" :key="tax.id">
          <td>{{ tax.statusName }}</td>
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
</template>

<script>
import global from "../../../utils/global";
import {http} from "../../../utils/http-base";

export default {
  mixins: [global],
  name: "TaxConfigList",
  data(){
    return {
      taxList: [],
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
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.globalLoadingState = false;
      })
    },
    retrieveTaxList(){
      http.get(`tax/list`).then().catch().finally()
    }
  }
}
</script>

<style scoped>

</style>