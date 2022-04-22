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
              <select
                v-model="vehicle"
                class="form-control"
                @change="clearItemsList()"
              >
                <option value="">Select Vehicle</option>
                <option
                  v-for="vehicle in vehiclesList"
                  :key="vehicle.id"
                  :value="vehicle"
                >
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
        <div class="form-group">
          <div class="row">
            <div class="row">
              <div class="col-4">
                <input
                  type="checkbox"
                  id="antennaCheckbox"
                  name="antennaCheckbox"
                  value="Antenna"
                  @change="saveItem('Antenna')"
                />
              </div>
              <div class="col-4"><label> Antenna</label></div>
              <div class="col-4">
                <img
                  @click="saveItem('Antenna')"
                  src="../assets/antenna.jpeg"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <input
            type="checkbox"
            id="auxcableCheckbox"
            name="auxcableCheckbox"
            value="Aux Cable"
            @change="saveItem('Aux Cable')"
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
            @change="saveItem('Battery')"
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
            @change="saveItem('CD')"
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
            @change="saveItem('Charger')"
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
            value="dashboardIdol"
            @change="saveItem('Dashboard Idol')"
          />
          <span style="white-space: pre"> &nbsp;</span>
          <label> Dashboard Idol</label><br />
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <input
            type="checkbox"
            id="matsCheckbox"
            name="matsCheckbox"
            value="mats"
            @change="saveItem('Mats')"
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
            @change="saveItem('Pendrive')"
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
            @change="saveItem('Perfume')"
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
            @change="saveItem('Reflector')"
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
            value="seatCovers"
            @change="saveItem('Seat Covers')"
          />
          <span style="white-space: pre"> &nbsp;</span>
          <label> Seat Covers</label><br />
        </div>
      </div>
    </div>

    <div class="card-body row">
      <div class="col-md-2" v-if="!globalLoadingState">
        <button class="btn btn-primary" @click="saveAll()">
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
    this.getCheckedItemsbyRegNumber();
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      vehicle: {},
      itemsList: [],
      item: {
        checkedPart: "",
      },
      x: "",
      g: "",
      onChange(e) {
        console.log(e.target.value);
        this.x = e.target.value;
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
        .post(`/checklist/item/save/${this.vehicle.id}`, this.itemsList)
        // this.$router.go()
        .then((res) => {
          console.log(res);
          this.$router.push("viewchecklist");
          this.showSuccessMessage();
        })
        .catch((error) => {
          console.log(error);
          this.showErrorMessage();
        });
    },
    // getCheckedItemsbyRegNumber() {
    //   http
    //     .get(`/checklist/all/${this.x}`)
    //     .then(() => {
    //       this.showSuccessMessage();
    //     })
    //     .catch(() => {
    //       this.showErrorMessage();
    //     })
    //     .finally(console.log("checked items endpont"));
    // },
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