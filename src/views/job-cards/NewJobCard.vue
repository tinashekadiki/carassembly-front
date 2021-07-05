<template>
  <div>
    <div class="card">
      <div class="card-header"><strong>New Job Card</strong> <small>Form</small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Arrival Date</label>
              <input class="form-control" type="date" placeholder="Input date" v-model="jobCard.arrivalDate">
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Estimated Date of Delivery</label>
              <input class="form-control" type="date" v-model="jobCard.estimatedDeliveryDate">
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Insurance</label>
              <input class="form-control" type="text" v-model="jobCard.insurance">
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Job Card Status</label>
              <input class="form-control" type="text" v-model="jobCard.status.statusName">
            </div>
          </div>
        </div>
        <div class="card-header"><strong>Vehicle</strong> <small>Details</small></div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Vehicle Reg. Number</label>
                <input class="form-control" type="text" placeholder="Input registration number" v-model="jobCard.vehicle.regNumber">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Model</label>
                <input class="form-control" type="text" placeholder="Input Model" v-model="jobCard.vehicle.carType.model">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Make</label>
                <input class="form-control" type="text" placeholder="Input Make" v-model="jobCard.vehicle.carType.make">
              </div>
            </div> <div class="col-md-3">
              <div class="form-group">
                <label>Year</label>
                <input class="form-control" type="text" placeholder="Input Year" v-model="jobCard.vehicle.carType.year">
              </div>
            </div> <div class="col-md-3">
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
                <input class="form-control" type="color" placeholder="Input Color" v-model="jobCard.vehicle.attribute.hexColor">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Fuel Type</label>
                <input class="form-control" type="text" placeholder="Input Fuel Type" v-model="jobCard.vehicle.attribute.fuelType">
              </div>
            </div> <div class="col-md-3">
            <div class="form-group">
              <label>Service Type</label>
              <input class="form-control" type="text" placeholder="Input Service Type" v-model="jobCard.vehicle.attribute.serviceType.serviceTypeName">
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
                <input class="form-control" type="text" placeholder="Input Name" v-model="jobCard.vehicle.attribute.advisor.name">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Surname</label>
                <input class="form-control" type="text" placeholder="Input Surname" v-model="jobCard.vehicle.attribute.advisor.surname">
              </div>
            </div> <div class="col-md-3">
            <div class="form-group">
              <label>Post/ Role</label>
              <input class="form-control" type="text" placeholder="Input Post/ Role" v-model="jobCard.vehicle.attribute.advisor.advisorPost.postName">
            </div>
          </div>
          </div>
        </div>

        <div class="card-body">
          <div class="row">
            <button class="btn btn-primary" @click="saveJobCard()">Save Job Card</button>
          </div>
        </div>
        </div>
      </div>
    </div>

</template>

<script>
import { http } from "../../utils/http-base";

export default {
  name: "NewJobCard",
  data() {
    return {
      jobCard: {
      jobCardNumber: "",
        arrivalDate: "",
        deliveryDate: "",
        estimatedDeliveryDate: "",
        insurance: "",
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
      invoice: {

    },
      status: {
      statusName: ""
    },
      orderParts: [

    ]
    }
      }
    },
  methods: {
    saveJobCard(){
      console.log(this.jobCard)
      http.post('/jobcards/create', this.jobCard).then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
          }
      ).finally(() => {
        console.log('Done')
      })
    }
  }
}
</script>

<style scoped>

</style>