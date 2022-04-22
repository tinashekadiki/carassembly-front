<template>
    <div class="card">
      <div class="card-header">
        <strong>Stock Part</strong> <small>Details</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Part Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Input Name"
                v-model="stockPart.partName"
              />
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Price</label>
              <input
                class="form-control"
                type="number"
                v-model="stockPart.price"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>Labour</label>
              <select v-model="stockPart.partOrLabour" class="form-control">
                <option selected>Select true if Labour</option>
                <option>True</option>
                <option>False</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>QoH</label>
              <input class="form-control" type="text" v-model="stockPart.qoH" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>Average Purchase Price</label>
              <input
                class="form-control"
                type="number"
                v-model="stockPart.averagePurchasePrice"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>Stock Quantity</label>
              <input
                class="form-control"
                type="number"
                v-model="stockPart.quantity"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <button @click="saveStockPart()" class="btn btn-facebook">
            Save Stock Part
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import { http } from "../../utils/http-base";
import global from "../../utils/global";

export default {
  components: {  },
  mixins: [global],
  name: "NewStock",
  data() {
    return {
      stockPart: {
        price: "",
        partName: "",
        partOrLabour: "",
        brand: "",
        qoH: "",
        averagePurchasePrice: "",
        quantity: "",
      },
    };
  },
  methods: {
    saveStockPart() {
      this.globalLoadingState = true;
      http
        .post(`/stock/create`, this.stockPart)
        .then(() => {
          this.$root.$emit("stockAdded");
          this.showSuccessMessage();
        })
        .catch((err) => {
          console.log(err);
          this.showErrorMessage();
        })
        .finally(() => {
          this.globalLoadingState = false;
          this.stockPart = {
            price: "",
            partName: "",
            partOrLabour: "",
            brand: "",
            qoH: "",
            averagePurchasePrice: "",
            quantity: "",
          };
        });
    },
  },
};
</script>

<style scoped>
</style>