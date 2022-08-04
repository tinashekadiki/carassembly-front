<template>
  <MainLayout>
    <div class="card">
      <div v-If="jobCard"></div>
      <div class="card-header">
        Job Card Number <strong>{{ jobCard.jobCardNumber }}</strong>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Part Name</label>
              <select class="form-control" v-model="partId">
                <option selected disabled>Select part name</option>
                <option :value="stockPart.id" v-for="stockPart in stockParts" :key="stockPart.id">{{stockPart.partName}} </option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="search"
                ><strong>Quantity</strong> 
              </label>
              <input class="form-control" type="text" v-model="quantity" placeholder="Quantity" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label><strong>Service</strong> / <strong>Labour</strong></label>
              <select class="form-control" v-model="service_labour">
                <option selected disabled>Service / labour</option>
                <option value="service">Service</option>
                <option value="labour" >Labour</option>
              </select>
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-group mt-4">
              <button class="btn bg-primary text-white" @click="addStockParts">Add</button>
            </div>
          </div>
        </div>
        <table class="table table-responsive-sm table-striped table-bordered">
          <thead>
            <tr>
              <th>Part Name</th>
              <th>Part / Labour</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Material Type</th>
              <th>Depreciation</th>
              <th>Salvage</th>
              <th>Insurance payable</th>
              <th>Customer payable</th>
              <th>Tax %</th>
              <th>Tax $</th>
              <th>Total $</th>
            </tr>
          </thead>
          <tbody  v-if="addedStockParts.length > 0">
            <tr v-for="stock in addedStockParts" :key="stock.id">
              <td>{{stock.partName}}</td>
              <td>{{stock.service_labour}}</td>
              <td>{{stock.quantity}}</td>
              <td>{{stock.price}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>5%</td>
              <td></td>
              <td>{{(stock.price * stock.quantity) + stock.price * stock.quantity * 0.05}}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <!-- <button class="btn btn-primary" :to="`/`">
            Close JobCard
          </button> -->
          
           <router-link
            :to="`/`"
            class="btn btn-primary"
            >Close Job Card</router-link>
           <router-link
            :to="`/invoices/${this.jobCard.invoice.id}`"
            class="btn btn-facebook"
            >Generate Invoice</router-link>

        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
import { http } from "../utils/http-base";

export default {
  components: { MainLayout },
  name: "JobCardTable",
  mounted() {
    this.getJobCard();
    this.getStockParts()
  },
  methods: {
    getJobCard() {
      if (this.$route.params.id) {
        this.globalLoadingState = true;
        http
          .get(`/job-cards/view/${this.$route.params.id}`)
          .then((resp) => {
            console.log(resp.data);
            this.jobCard.arrivalDate = resp.data.arrivalDate;
            this.jobCard = resp.data;
            console.log("JobCard", this.jobCard);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.globalLoadingState = false;
          });
      }
    },

    getStockParts(){
       this.globalLoadingState = true;
        http
          .get(`/stock/list`)
          .then((resp) => {
            console.log(resp.data);
            this.stockParts = resp.data;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.globalLoadingState = false;
          });
    },
      
    addStockParts(){
      this.newStockPart.quantity = this.quantity
      this.newStockPart.service_labour = this.service_labour
      console.log(this.partId)
      const selectedStock = this.stockParts.find((stock)=> stock.id == this.partId)
      this.newStockPart = {...this.newStockPart, ...selectedStock}
      console.log(this.newStockPart)
      
      this.addedStockParts.push(this.newStockPart)
      this.quantity = ""
      this.service_labour = ""
      this.partId = ""
    }
  },
  data() {
    return {
      
      newStockPart: {},
      partName: '',
      partId: '',
      quantity: '',
      service_labour: '',
      addedStockParts:[],
      stockParts: [],
      jobCard: {
        id: 0,
        jobCardNumber: "",
        vehicle: {
          id: "",
          regNumber: "",
          carType: {
            id: "",
            type: "",
            make: "",
            model: "",
            year: "",
            variant: null,
          },
          attribute: {
            id: "",
            hexColor: "",
            fuelType: "",
            serviceType: {
              id: "",
              serviceTypeName: "",
            },
            advisor: {
              id: "",
              advisorName: "",
              surname: "",
              advisorPost: {
                id: "",
                postName: "",
              },
            },
          },
          checkLists: [],
        },
        invoice: {
          id: "",
          // orderParts: [],
          payments: [],
        },
        arrivalDate: "",
        deliveryDate: "",
        estimatedDeliveryDate: "",
        jobCardStatus: "",
        insurance: "",
        customer: {
          id: 0,
          corporate: "",
          customerName: "",
          mobileNumber: "",
          alternativeMobileNumber: "",
        },
      },
    };
  },
};
</script>

<style scoped>
.fa {
  font-size: 16px;
}
</style>
