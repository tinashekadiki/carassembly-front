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
            <div
              class="col-6 row"
              v-for="checkListItem in checkListItems"
              :key="checkListItem.name"
            >
            
            
              <!-- <div class="row"> -->
              <div class="col-4">
                <input
                  type="checkbox"
                  id="seatCoversCheckbox"
                  name="seatCoversCheckbox"
                  value="seatCovers"
                  @change="saveItem(checkListItem.value)"
                />
              </div>
              <div class="col-4">
                <label> {{ checkListItem.name }}</label>
              </div>
              <div class="col-4">
                <img :src="checkListItem.imgSrc" width="100" height="100" />
                <!-- </div> -->
              </div>
            </div>
          </div>
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
      checkListItems: [
        {
          name: "Antenna",
          value: "Antenna",
          imgSrc: require("../assets/antenna.jpeg"),
        },
        {
          name: "Ashtray",
          value: "Ashtray",
          imgSrc: require("../assets/ashtray.jpeg"),
        },
        {
          name: "Aux Cable",
          value: "Aux Cable",
          imgSrc: require("../assets/aux-cable.jpeg"),
        },
        {
          name: "Battery",
          value: "Battery",
          imgSrc: require("../assets/battery.png"),
        },
        {
          name: "Bonnet",
          value: "Bonnet",
          imgSrc: require("../assets/bonnet.jpg"),
        },
        {
          name: "Boot",
          value: "Boot",
          imgSrc: require("../assets/boot.jpg"),
        },
        {
          name: "Badges",
          value: "Badges",
          imgSrc: require("../assets/battery.png"),
        },
        {
          name: "Bumper Front",
          value: "Bumper Front",
          imgSrc: require("../assets/bumper-front.jpg"),
        },
        {
          name: "Bumper Rear",
          value: "Bumper Rear",
          imgSrc: require("../assets/bumper-rear.jpg"),
        },
        {
          name: "CD",
          value: "CD",
          imgSrc: require("../assets/cd.png"),
        },
        {
          name: "Charger",
          value: "Charger",
          imgSrc: require("../assets/charger.jpeg"),
        },
        {
          name: "Dashboard Idol",
          value: "Dashboard Idol",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Door Front Left",
          value: "Door Front Left",
          imgSrc: require("../assets/door-front-left.jpg"),
        },
        {
          name: "Door Front Right",
          value: "Door Front Right",
          imgSrc: require("../assets/door-front-right.jpg"),
        },
        {
          name: "Door Rear Left",
          value: "Door Rear Left",
          imgSrc: require("../assets/door-rear-left.jpg"),
        },
        {
          name: "Door Rear Right",
          value: "Door Rear Right",
          imgSrc: require("../assets/door-rear-right.jpg"),
        },
        {
          name: "Exhaust",
          value: "Exhaust",
          imgSrc: require("../assets/exhaust.jpg"),
        },
        {
          name: "Fender Front Left",
          value: "Fender Front Left",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Fender Front Right",
          value: "Fender Front Right",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Fender Rear Left",
          value: "Fender Rear Left",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Fender Rear Right",
          value: "Fender Rear Right",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Grill/val",
          value: "Grill/val",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Hub Caps",
          value: "Hub Caps",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Keys",
          value: "Keys",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Lighter",
          value: "Lighter",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Lights Front",
          value: "Lights Front",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Lights Rear",
          value: "Lights Rear",
          imgSrc: require("../assets/dashboard-idol.jpg"),
        },
        {
          name: "Mats",
          value: "Mats",
          imgSrc: require("../assets/mats.jpeg"),
        },
        {
          name: "Pendrive",
          value: "Pendrive",
          imgSrc: require("../assets/pendrive.jpeg"),
        },
        {
          name: "Perfume",
          value: "Perfume",
          imgSrc: require("../assets/perfume.jpg"),
        },
        {
          name: "Petrol Cap",
          value: "Petrol Cap",
          imgSrc: require("../assets/perfume.jpg"),
        },
        {
          name: "Reflector",
          value: "Reflector",
          imgSrc: require("../assets/reflector.jpg"),
        },
        {
          name: "Rear Window",
          value: "Rear Window",
          imgSrc: require("../assets/reflector.jpg"),
        },
        {
          name: "Roof",
          value: "Roof",
          imgSrc: require("../assets/reflector.jpg"),
        },
        {
          name: "Seat Covers",
          value: "Seat Covers",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
        {
          name: "Speakers",
          value: "Speakers",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
        {
          name: "Wheel Tyres",
          value: "Wheel Tyres",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
        {
          name: "Wheels Spares",
          value: "Wheels Spares",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
        {
          name: "Windscreen",
          value: "Windscreen",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
        {
          name: "Wing Mirrors",
          value: "Wing Mirrors",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
        {
          name: "Wipers",
          value: "Wipers",
          imgSrc: require("../assets/seat-covers.jpg"),
        },
      ],
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
