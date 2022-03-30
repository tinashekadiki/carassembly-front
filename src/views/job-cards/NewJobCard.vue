<template>
  <MainLayout title="Job Cards" new-route="create">
    <div class="card">
      <div class="card-header">
        <strong>New Estimate</strong> <small>Form</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Arrival Date</label>
              <input
                v-if="!editing"
                class="form-control"
                type="date"
                placeholder="Input date"
                v-model="jobCard.arrivalDate"
              />
              <p v-else>{{ formatDate(jobCard.arrivalDate) }}</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label
                >Estimated Date of Delivery<span class="mandatory"
                  >*</span
                ></label
              >
              <input
                v-if="!editing"
                class="form-control"
                type="date"
                v-model="jobCard.estimatedDeliveryDate"
              />
              <p v-else>{{ formatDate(jobCard.estimatedDeliveryDate) }}</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Insurance Type</label>
              <select class="form-control" v-model="jobCard.insurance">
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
                <option
                  v-for="status in statusList"
                  :key="status.id"
                  :value="status"
                >
                  {{ status.statusName }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-header">
          <strong>Vehicle</strong> <small>Details</small>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label
                  >Vehicle Reg. Number <span class="mandatory">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input registration number"
                  v-model="jobCard.vehicle.regNumber"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>VIN<span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input VIN"
                  v-model="jobCard.vehicle.vin"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Engine Number</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Engine Number"
                  v-model="jobCard.vehicle.engineNumber"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Variant <span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Variant"
                  v-model="jobCard.vehicle.variant"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Model <span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Model"
                  v-model="jobCard.vehicle.carType.model"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Make <span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Make"
                  v-model="jobCard.vehicle.carType.make"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Year <span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Year"
                  v-model="jobCard.vehicle.carType.year"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Type <span class="mandatory">*</span></label>
                <select
                  class="form-control"
                  v-model="jobCard.vehicle.carType.type"
                >
                  <option value="null">Select Type</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-header">
          <strong>Vehicle</strong> <small>Attributes</small>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Color</label>
                <select
                  class="form-control"
                  v-model="jobCard.vehicle.attribute.hexColor"
                >
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
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Fuel Type <span class="mandatory">*</span></label>
                <select
                  class="form-control"
                  v-model="jobCard.vehicle.attribute.fuelType"
                >
                  <option value="null">Select Fuel Type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                </select>
              </div>
            </div>
            <div class="col-md-3" v-if="editing">
              <div class="form-group">
                <label>Service Type</label>
                <select
                  class="form-control"
                  v-model="jobCard.vehicle.attribute.serviceType"
                >
                  <option
                    v-for="serviceType in serviceTypes"
                    :key="serviceType.id"
                    :value="serviceType"
                  >
                    {{ serviceType.serviceTypeName }}
                  </option>
                </select>
                <!--                <input class="form-control" type="text" placeholder="Input Service Type"-->
                <!--                       v-model="jobCard.vehicle.attribute.serviceType.serviceTypeName">-->
              </div>
            </div>
          </div>
        </div>

        <div v-if="editing" class="card-header">
          <strong>Advisor</strong> <small>Details</small>
        </div>
        <div v-if="editing" class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Assign Advisor</label>
                <select
                  class="form-control"
                  v-model="jobCard.vehicle.attribute.advisor"
                >
                  <option value="null">Select Advisor</option>
                  <option
                    v-for="advisor in advisorsList"
                    :key="advisor.id"
                    :value="advisor"
                  >
                    {{
                      `${advisor.name} - ${advisor.surname} - ${advisor.advisorPost.postName}`
                    }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="card-header">
          <strong>Customer</strong> <small>Details</small>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Customer Name <span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Name"
                  v-model="jobCard.invoice.customer.customerName"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Corporate</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Corporate"
                  v-model="jobCard.invoice.customer.corporate"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Mobile Number <span class="mandatory">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Mobile Number"
                  v-model="jobCard.invoice.customer.mobileNumber"
                />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label>Alternative Mobile Number</label>
              <input
                class="form-control"
                type="text"
                placeholder="Input Mobile Number"
                v-model="jobCard.invoice.customer.alternativeMobileNumber"
              />
            </div>
          </div>
        </div>

        <div class="order-parts" v-if="editing">
          <div class="card-header">
            <strong>Add Order Parts</strong> <small>Details</small>
          </div>
          <div class="card-body">
            <table
              v-if="orderParts.length"
              class="table table-responsive-sm table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Part Name</th>
                  <th>Price</th>
                  <th>Order Quantity</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="orderPart in orderParts" :key="orderPart.id">
                  <td>{{ orderPart.stockPart.partName }}</td>
                  <td>{{ orderPart.stockPart.price }}</td>
                  <td>{{ orderPart.orderQuantity }}</td>
                  <td>
                    ${{ orderPart.orderQuantity * orderPart.stockPart.price }}
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <label>Stock Part</label>
                  <select class="form-control" v-model="orderPart.stockPart">
                    <option value="null">Select Stock Part</option>
                    <option
                      v-for="stockPart in stockPartsList"
                      :key="stockPart.id"
                      :value="stockPart"
                    >
                      {{ `${stockPart.partName} - ${stockPart.brand}` }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <label>Tax</label>
                  <select class="form-control" v-model="orderPart.tax">
                    <option value="null">Select Applicable Tax</option>
                    <option v-for="tax in taxList" :key="tax.id" :value="tax">
                      {{
                        `${tax.taxName} - ${tax.taxType} - ${tax.taxPercentage}`
                      }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Order Quantity</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Input Quantity"
                    v-model="orderPart.orderQuantity"
                  />
                </div>
              </div>
              <div class="col-md-3 mt-4">
                <button @click="saveOrderPart()" class="btn btn-success">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body row">
        <div class="col-md-2" v-if="!globalLoadingState">
          <button class="btn btn-primary" @click="saveJobCard()">
            Save Estimate
          </button>
        </div>

        <div class="col-md-7"></div>

        <div class="col-md-3" v-if="editing && this.jobCard.invoice.id">
          <router-link
            :to="`/invoices/${this.jobCard.invoice.id}`"
            class="btn btn-facebook"
            >Generate Invoice</router-link
          >
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { http } from "../../utils/http-base";
import global from "../../utils/global";
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "NewJobCard",
  mixins: [global],
  mounted() {
    this.setEditing();
    this.getAllStatuses();
    this.getAllServiceTypes();
    this.fetchAdvisors();
    this.fetchStockParts();
    this.retrieveTaxList();
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      editing: false,
      orderParts: [],
      orderPart: {
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
      jobCard: {
        jobCardNumber: Date.now().toString(),
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
            variant: "",
          },
          attribute: {
            hexColor: "",
            fuelType: "",
            serviceType: {
              serviceTypeName: "",
            },
            advisor: {
              name: "",
              surname: "",
              advisorPost: {
                postName: "",
              },
            },
          },
        },
        status: {
          statusName: "",
          id: "",
        },
        invoice: {
          customer: {
            corporate: "",
            customerName: "",
            mobileNumber: "",
            alternativeMobileNumber: "",
            idNumber: "",
          },
        },
      },
    };
  },
  methods: {
    saveOrderPart() {
      this.orderParts.push(this.orderPart);
    },
    setEditing() {
      if (this.$route.params.id) {
        this.editing = true;
        this.globalLoadingState = true;
        http
          .get(`/job-cards/view/${this.$route.params.id}`)
          .then((resp) => {
            this.jobCard = resp.data;
            this.orderParts = this.jobCard.invoice.orderParts;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.globalLoadingState = false;
          });
      }
    },
    saveJobCard() {
      this.globalLoadingState = true;
      if (this.jobCard.id) {
        this.jobCard.invoice.orderParts = this.orderParts;
        http
          .put(`/job-cards/edit/${this.jobCard.id}`, this.jobCard)
          .then(() => {
            this.$router.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.globalLoadingState = false;
          });
      } else {
        delete this.jobCard.status;
        delete this.jobCard.vehicle.attribute.advisor;
        delete this.jobCard.vehicle.attribute.serviceType;
        http
          .post("/job-cards/create", this.jobCard)
          .then(() => {
            this.$router.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.globalLoadingState = false;
          });
      }
    },
  },
};
</script>

<style scoped>
.fa {
  font-size: 16px;
}
.mandatory {
  color: red;
}
</style>