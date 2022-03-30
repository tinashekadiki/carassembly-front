<template>
  <MainLayout title="Check List" new-route="create">
    <div class="card">
      <div class="card-header"><strong>Vehicle</strong> <small></small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              <label
                >Vehicle Registration Number<span class="mandatory"
                  >*</span
                ></label
              >
              <select class="form-control" @change="onChange($event)">
                <option value="">Select Vehicle</option>
                <option v-for="vehicle in vehiclesList" :key="vehicle">
                  {{ vehicle.regNumber }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="card-header">
        <strong>Vehicle</strong> <small>Attributes</small>
      </div>
      <div class="card-body">
        <div class="column">
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="antennaCheckbox"
                name="antennaCheckbox"
                value="Antenna"
                @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Antenna"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Antenna</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="auxcableCheckbox"
                name="auxcableCheckbox"
                value="Aux Cable"
                @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Aux Cable"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Aux Cable</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="batteryCheckbox"
                name="batteryCheckbox"
                value="Battery"
                @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Battery"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Battery</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="cdCheckbox"
                name="cdCheckbox"
                value="CD"
                @change="saveItem()"
               v-model="item.checkedPart"
               true-value="CD"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> CD</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="chargerCheckbox"
                name="chargerCheckbox"
                value="Charger"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Charger"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Charger</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="dashboardIdolCheckbox"
                name="dashboardIdolCheckbox"
                value="Dashboard idol"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Dashboard idol"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Dashboard idol</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="matsCheckbox"
                name="matsCheckbox"
                value="Mats"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Mats"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Mats</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="pendriveCheckbox"
                name="pendriveCheckbox"
                value="Pendrive"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Pendrive"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Pendrive</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="perfumeCheckbox"
                name="perfumeCheckbox"
                value="Perfume"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Perfume"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Perfume</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="reflectorCheckbox"
                name="reflectorCheckbox"
                value="Reflector"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Reflector"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Reflector</label><br />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <input
                type="checkbox"
                id="seatCoversCheckbox"
                name="seatCoversCheckbox"
                value="Seat covers"
                 @change="saveItem()"
               v-model="item.checkedPart"
               true-value="Seat covers"
              />
              <span style="white-space: pre"> &nbsp;</span>
              <label> Seat covers</label><br />
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
              <select class="form-control">
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
        <button class="btn btn-primary" @click="saveCheckList()">
          Save CheckList
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { http } from "../utils/http-base";
import MainLayout from "../layouts/MainLayout";
import global from "../utils/global";

export default {
  name: "CheckList",
  mixins: [global],
  mounted() {
    this.getAllStatuses();
    this.getAllServiceTypes();
    this.fetchAdvisors();
    this.fetchStockParts();
    this.retrieveTaxList();
    this.getVehicles();
    console.log("hie");
    console.log("chino"+this.y);
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      item: {
        "checkedPart": ""
      },
      x : '',
      onChange(e) {
        
              console.log(e.target.value);
              this.x = e.target.value;
          },
      editing: false,
      vehiclesList: [],
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
    getVehicles() {
      this.globalLoadingState = true;
      http
        .get("/vehicles/list")
        .then((res) => {
          this.vehiclesList = res.data;
          console.log(this.vehiclesList);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.globalLoadingState = false;
          console.log("ndeipi");
        });
    },

    saveVehicle() {
      console.log("mota ino");
      console.log(this.x);
      // console.log(e.target.value)
    },
    saveItem() {
      
      http
        .post(`/checklist/item/check/${this.x}`, this.item)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(console.log("zvaita"));
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