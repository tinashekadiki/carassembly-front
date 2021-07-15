<template>
  <JobCardLayout title="Job Cards" new-route="create">
    <div class="card">
      <div class="card-header"><strong>New Job Card</strong> <small>Form</small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Arrival Date</label>
              <input v-if="!editing" class="form-control" type="date" placeholder="Input date" v-model="jobCard.arrivalDate">
              <p v-else>{{ formatDate(jobCard.arrivalDate)}}</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Estimated Date of Delivery</label>
              <input v-if="!editing" class="form-control" type="date" v-model="jobCard.estimatedDeliveryDate">
              <p v-else>{{ formatDate(jobCard.estimatedDeliveryDate)}}</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Insurance Type</label>
              <select class="form-control"  v-model="jobCard.insurance">
                <option>Third Party</option>
                <option>Comprehensive</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6" v-if="editing">
            <div class="form-group">
              <label>Job Card Status</label>
              <select class="form-control" v-model="jobCard.status">
                <option value="null">Select Status</option>
                <option v-for="status in statusList" :key="status.id" :value="status">{{status.statusName}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-header"><strong>Vehicle</strong> <small>Details</small></div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Vehicle Reg. Number</label>
                <input class="form-control" type="text" placeholder="Input registration number"
                       v-model="jobCard.vehicle.regNumber">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Model</label>
                <input class="form-control" type="text" placeholder="Input Model"
                       v-model="jobCard.vehicle.carType.model">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Make</label>
                <input class="form-control" type="text" placeholder="Input Make" v-model="jobCard.vehicle.carType.make">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Year</label>
                <input class="form-control" type="text" placeholder="Input Year" v-model="jobCard.vehicle.carType.year">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Type</label>
                <input class="form-control" type="text" placeholder="Input Type" v-model="jobCard.vehicle.carType.type">
              </div>
            </div>
          </div>
        </div>
        <div class="card-header"><strong>Vehicle</strong> <small>Attributes</small></div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Color</label>
                <select class="form-control" v-model="jobCard.vehicle.attribute.hexColor">
                  <option value="">Select Color</option>
                  <option>Black</option>
                  <option>Silver</option>
                  <option>White</option>
                  <option>Gold</option>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Blue</option>
                  <option>Pink</option>
                  <option>Yellow</option>
                  <option>Orange</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Fuel Type</label>
                <input class="form-control" type="text" placeholder="Input Fuel Type"
                       v-model="jobCard.vehicle.attribute.fuelType">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Service Type</label>
                <input class="form-control" type="text" placeholder="Input Service Type"
                       v-model="jobCard.vehicle.attribute.serviceType.serviceTypeName">
              </div>
            </div>
          </div>
        </div>

        <div class="card-header"><strong>Advisor</strong> <small>Details</small></div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Name</label>
                <input class="form-control" type="text" placeholder="Input Name"
                       v-model="jobCard.vehicle.attribute.advisor.name">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Surname</label>
                <input class="form-control" type="text" placeholder="Input Surname"
                       v-model="jobCard.vehicle.attribute.advisor.surname">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Post/ Role</label>
                <input class="form-control" type="text" placeholder="Input Post/ Role"
                       v-model="jobCard.vehicle.attribute.advisor.advisorPost.postName">
              </div>
            </div>
          </div>
        </div>

        <div class="card-header"><strong>Customer</strong> <small>Details</small></div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Customer Name</label>
                <input class="form-control" type="text" placeholder="Input Name"
                       v-model="jobCard.customer.customerName">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Corporate</label>
                <input class="form-control" type="text" placeholder="Input Corporate"
                       v-model="jobCard.customer.corporate">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>ID / License Number</label>
                <input class="form-control" type="text" placeholder="Input ID number"
                       v-model="jobCard.customer.idNumber">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Mobile Number</label>
                <input class="form-control" type="text" placeholder="Input Mobile Number"
                       v-model="jobCard.customer.mobileNumber">
              </div>
            </div>
          </div>

          <div class="col-md-3">
              <div class="form-group">
                <label>Alternative Mobile Number</label>
                <input class="form-control" type="text" placeholder="Input Mobile Number"
                       v-model="jobCard.customer.alternativeMobileNumber">
              </div>
            </div>
          </div>

        <div class="order-parts" v-if="editing">
          <div class="card-header"><strong>Add Order Parts</strong> <small>Details</small></div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <label>Customer Name</label>
                  <input class="form-control" type="text" placeholder="Input Name"
                         v-model="jobCard.customer.customerName">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Corporate</label>
                  <input class="form-control" type="text" placeholder="Input Corporate"
                         v-model="jobCard.customer.corporate">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>ID / License Number</label>
                  <input class="form-control" type="text" placeholder="Input ID number"
                         v-model="jobCard.customer.idNumber">
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <label>Mobile Number</label>
                  <input class="form-control" type="text" placeholder="Input Mobile Number"
                         v-model="jobCard.customer.mobileNumber">
                </div>
              </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Alternative Mobile Number</label>
                <input class="form-control" type="text" placeholder="Input Mobile Number"
                       v-model="jobCard.customer.alternativeMobileNumber">
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>

        <div class="card-body">
          <div class="row" v-if="!globalLoadingState">
            <button class="btn btn-primary" @click="saveJobCard()">Save Job Card</button>
          </div>
          <Circle10 v-else></Circle10>
        </div>
      </div>
    </JobCardLayout>

</template>

<script>
import {http} from "../../utils/http-base";
import global from "../../utils/global";

import Circle10 from "vue-loading-spinner/src/components/Circle10";
import JobCardLayout from "../../layouts/JobCardLayout";

export default {
  name: "NewJobCard",
  mixins: [global],
  mounted() {
    this.setEditing();
    this.getAllStatuses();
  },
  components: {
    JobCardLayout,
    Circle10
  },
  data() {
    return {
      editing: false,
      jobCard: {
        jobCardNumber: Date.now().toString(),
        arrivalDate: "",
        deliveryDate: "",
        estimatedDeliveryDate: "",
        insurance: "",
        customer: {
          corporate: "",
          customerName: "",
          mobileNumber: "",
          alternativeMobileNumber: "",
          idNumber: ""
        },
        vehicle: {
          regNumber: "",
          carType: {
            model: "",
            make: "",
            year: 1,
            type: "",
            variant: ""
          },
          attribute: {
            hexColor: "",
            fuelType: "",
            serviceType: {
              serviceTypeName: ""
            },
            advisor: {
              name: "",
              surname: "",
              advisorPost: {
                postName: ""
              }
            }
          }
        },
        status: {
          statusName: '',
          id: ''
        },
        invoice: {},
        orderParts: []
      }
    }
  },
  methods: {
    setEditing(){
      if(this.$route.params.id){
        this.editing = true;
        this.globalLoadingState = true;
        http.get(`/job-cards/view/${this.$route.params.id}`).then(resp => {
          this.jobCard = resp.data;
        }).catch(err => {
              console.log(err)
            }
        ).finally(() => {
          this.globalLoadingState = false;
        })
      }
    },
    saveJobCard() {
      this.globalLoadingState = true;
      if(this.jobCard.id){
        http.put(`/job-cards/edit/${this.jobCard.id}`, this.jobCard).then(() => {
          this.$router.push('/')
        }).catch(err => {
              console.log(err)
            }
        ).finally(() => {
          this.globalLoadingState = false;
        })
      }else{
        delete this.jobCard.status;
        http.post('/job-cards/create', this.jobCard).then(() => {
          this.$router.push('/')
        }).catch(err => {
              console.log(err)
            }
        ).finally(() => {
          this.globalLoadingState = false;
        })
      }
    }
  }
}
</script>

<style scoped>

</style>