<template>
  <MainLayout title="View Check List" new-route="create">
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
              <select
                v-model="vehicle"
                class="form-control"
                @change="onChange($event)"
              >
                <option value="">Select Vehicle</option>
                <option
                  v-for="vehicle in vehiclesList"
                  :key="vehicle.id"
                  :value="vehicle.regNumber"
                >
                  {{ vehicle.regNumber }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table class="table table-responsive-sm table-striped table-bordered">
          <thead>
            <tr>
              <th>Checked Part</th>
              <th>Is Condition Good?</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="checkedItem in checkedItemsList" :key="checkedItem.id">
              <td>{{ checkedItem.checkedPart }}</td>
              <td>{{ checkedItem.conditionGood ? 'YES': 'NO' }}</td>
              <td>
                <img 
                height="50"
                width="50"
                :src="checkedItem.imageUrl">
              </td>
            </tr>
          </tbody>
         
        </table>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { http } from "../utils/http-base";
import MainLayout from "../layouts/MainLayout";
import global from "../utils/global";

export default {
  name: "ViewCheckList",
  mixins: [global],
  mounted() {
    this.getAllStatuses();
    this.getAllServiceTypes();
    this.fetchAdvisors();
    this.fetchStockParts();
    this.retrieveTaxList();
    this.getVehicles();
    this.getCheckedItemsbyRegNumber();
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      vehicle: {},
      itemsList: [],
      checkedItemsList: [],
      item: {
        checkedPart: "",
      },
      x: "",
      g: "",
      onChange(event) {
        console.log(event.target.value);
        this.x = event.target.value;
        this.getCheckedItemsbyRegNumber(this.x);
      },
      editing: false,
      vehiclesList: [],
    };
  },
  methods: {
    saveVehicle() {
      console.log("mota ino");
      console.log(this.x);
      // console.log(e.target.value)
    },

    clearItemsList(event) {
      console.log("items");
      this.itemsList = [];
      console.log("items");
      console.log(event.target.value);
    },
    saveItem(e) {
      this.itemsList.push({
        checkedPart: e,
        conditionGood: true,
      });
      console.log(e);
      console.log(this.vehicle.id);
      console.table(this.itemsList);
    },
    saveAll() {
      http
        .post("/checklist/item/save/5", this.itemsList)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCheckedItemsbyRegNumber() {
      http
        .get(`/checklist/all/${this.x}`)
        .then((res) => {
          console.log("checked items");
          
          console.log(res);
          this.checkedItemsList = res.data
        })
        .catch((error) => {
          console.log("get checked items error");
          console.log(error);
        })
        .finally(console.log("checked items endpont"));
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
