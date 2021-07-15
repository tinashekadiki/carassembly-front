<template>
  <JobCardLayout title="Customers">
    <div class="row">
      <div class="col-md-6">
        <label>Customer Name</label>
        <input class="form-control" v-model="customer.customerName" placeholder="Customer Name">
      </div>
      <div class="col-md-6">
        <label>Cooporate/Organisation Name</label>
        <input class="form-control" type="text" v-model="customer.corporate" placeholder="Cooporate/Organisation Name">
      </div>

      <div class="col-md-6">
        <label>Phone Number</label>
        <input class="form-control" type="text" v-model="customer.mobileNumber" placeholder="Phone Number">
      </div>

      <div class="col-md-6">
        <label>Alternative Mobile Number</label>
        <input class="form-control" type="text" v-model="customer.alternativeMobileNumber" placeholder="Alternative Mobile Number">
      </div>

      <div class="col-md-6">
        <label>Id Number/Licence Number</label>
        <input class="form-control" type="text" v-model="customer.idNumber" placeholder="Id Number/Licence Number">
      </div>

    </div>
    <div class="row">
      <div class="col-md-2 mt-3" v-if="!globalLoadingState">
        <button class="btn btn-facebook" @click="saveCustomer()">Save Customer</button>
      </div>
      <Circle10 v-else></Circle10>
    </div>

    <div>
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
        <tr>
          <th>Customer Name</th>
          <th>Organisation</th>
          <th>Phone Number</th>
          <th>Alternative Phone Number</th>
          <th>Licence/ Id Number</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customersList" :key="customer.id">
          <td>{{ customer.customerName}}</td>
          <td>{{ customer.corporate}}</td>
          <td>{{ customer.mobileNumber}}</td>
          <td>{{ customer.alternativeMobileNumber}}</td>
          <td>{{ customer.idNumber}}</td>
          <td>
            <button @click="setEditingMode(customer)" class="btn btn-success">
              <i class="fa fa-edit"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </JobCardLayout>
</template>

<script>
import {http} from "../utils/http-base";
import global from "../utils/global";
import Circle10 from "vue-loading-spinner/src/components/Circle10";
import JobCardLayout from "../layouts/JobCardLayout";
export default {
  name: "CustomersPage",
  components: {
    JobCardLayout,
    Circle10,
  },
  mounted() {
    console.log(this.customersList)
    this.fetchCustomers();
  },
  mixins:[global],
  data(){
    return {
      customer: {
        id:"",
        corporate: "",
        customerName: "",
        mobileNumber: "",
        alternativeMobileNumber: "",
        idNumber: ""
      },
      customersList:[],
      editing: false
    }
  },

  methods: {
    saveCustomer(){
      if (this.editing){
        this.globalLoadingState = true;
        http.put(`customer/edit/${this.customer.id}`, this.customer).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        }).finally(()=>{
              this.globalLoadingState = false;
              this.editing = false;
              this.customer = {
                id:"",
                corporate: "",
                customerName: "",
                mobileNumber: "",
                alternativeMobileNumber: "",
                idNumber: ""
              };
              this.fetchCustomers();
            }
        );
      }
      else {
        this.globalLoadingState = true;
        http.post('customer/create', this.customer).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        }).finally(()=>{
              this.globalLoadingState = false;
          this.fetchCustomers();
            }
        );
      }

    } ,
    fetchCustomers(){
      this.globalLoadingState = true;
      http.get('customer/list').then(res=>{
       this.customersList = res.data;
        console.log(this.customersList)
      }).catch(err=>{
        console.log(err)
      }).finally(()=>{
             this.globalLoadingState = false;
          }
      );
    },
    setEditingMode(customer){
      this.editing = true;
      this.customer = customer;
    }
  }
}
</script>

<style scoped>
.fa {
  font-size: 16px;
}
</style>