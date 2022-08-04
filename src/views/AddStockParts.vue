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
                <input class="form-control" type="text" v-model="orderPart.stockPart.partName" placeholder="Part Name" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="search"
                ><strong>Price</strong> 
              </label>
              <input class="form-control" type="number" min="0" v-model="orderPart.stockPart.price" placeholder="Quantity" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="search"
                ><strong>Quantity</strong> 
              </label>
              <input class="form-control" type="text" v-model="orderPart.stockPart.quantity" placeholder="Quantity" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label><strong>Part</strong> / <strong>Labour</strong></label>
              <select class="form-control" v-model="orderPart.stockPart.partOrLabour">
                <option selected disabled>Part / labour</option>
                <option value="part">Part</option>
                <option value="labour" >Labour</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group mt-4">
              <button class="btn bg-primary text-white" @click="saveOrderPart">Add <i class="fa fa-plus"></i></button>
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
          <tbody  v-if="orderParts.length > 0">
            <tr v-for="orderPart in orderParts" :key="orderPart.id">
              <td>{{orderPart.stockPart.partName}}</td>
              <td>{{orderPart.stockPart.partOrLabour}}</td>
              <td>{{orderPart.stockPart.quantity}}</td>
              <td>{{orderPart.stockPart.price}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{(orderPart.stockPart.price * orderPart.stockPart.quantity) + orderPart.stockPart.price * orderPart.stockPart.quantity }}</td>
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
            this.invoice = resp.data.invoice;
            this.orderParts = this.invoice.orderParts;
            console.log("parts", this.orderParts)
            
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

      
    saveOrderPart(){
     

      this.globalLoadingState = true;
      this.orderParts.push(this.orderPart);
      this.invoice.orderParts = this.orderParts;

      http
        .post("/order-part/create", {
          invoice: this.invoice,
          ...this.orderPart,
        })
        .then((res) => {
          console.log(res);
          this.getInvoice();
          this.showSuccessMessage();
        })
        .catch((err) => {
          this.showErrorMessage();
          console.log(err);
        })
        .finally(() => {
          this.globalLoadingState = false;
          this.orderPart= {
        id:56,
        stockPart: {
          price: "",
          partName: "",
          partOrLabour: "",
          brand: "",
          qoH: "",
          averagePurchasePrice: "",
          quantity: "",
        },
        discount: "",
        tax: {
          taxType: "",
          taxName: "",
          taxPercentage: "",
        },
        orderQuantity: "",
      }
        });
    }
  },
  data() {
    return {
      orderParts: [],
      invoice: {},
      orderPart: {
        id:56,
        stockPart: {
          price: "",
          partName: "",
          partOrLabour: "",
          brand: "",
          qoH: "",
          averagePurchasePrice: "",
          quantity: "",
        },
        discount: "",
        tax: {
          taxType: "",
          taxName: "",
          taxPercentage: "",
        },
        orderQuantity: "",
      },
      newStockPart: {},
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
