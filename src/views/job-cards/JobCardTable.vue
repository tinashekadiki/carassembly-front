<template>
  <div class="card">
    <div class="card-header">Job Cards</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="search">Filter Results by <strong>Customer</strong> / <strong>Vehicle</strong> details</label>
            <input
              class="form-control"
              type="text"
              placeholder="Search..."
              v-model.trim="searchText"
              @keyup="search($event)"
            />
          </div>
        </div>
      </div>
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Vehicle Registration Number</th>
            <th>Service Type</th>
            <th>Status</th>
            <th>Vehicle</th>
            <th>Arrival Date</th>
            <th>Insurance</th>
            <th>Edit</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody v-if="updatedJobCardList ? updatedJobCardList.length : 0">
          <tr v-for="jobCard in updatedJobCardList" :key="jobCard.id">
            <td>{{ jobCard.customer ? jobCard.customer.customerName : "" }}</td>
            <td>{{ jobCard.vehicle ? jobCard.vehicle.regNumber : "" }}</td>
            <td>
              {{
                jobCard.vehicle.attribute.serviceType
                  ? jobCard.vehicle.attribute.serviceType.serviceTypeName
                  : "No Service Type"
              }}
            </td>
            <td v-if="jobCard.jobCardStatus">
              <span
                class="badge text-white"
                :style="`background-color: ${jobCard.jobCardStatus.hexColor}`"
                >{{ jobCard.jobCardStatus.statusName }}</span
              >
            </td>
            <td v-else><span class="badge badge-success">Pending</span></td>
            <td>{{ jobCard.vehicle.carType.model }}</td>
            <td>{{ jobCard.arrivalDate }}</td>
            <td>
              {{
                jobCard.insurance.length ? jobCard.insurance : "No Insurance"
              }}
            </td>
            <td>
              <router-link :to="`/edit/${jobCard.id}`" class="btn btn-success">
                <i class="fa fa-edit"></i>
              </router-link>
            </td>
            <td>
              <router-link
                :to="`/DownloadJobCard/${jobCard.id}`"
                class="btn btn-success"
              >
                <i class="fa fa-download"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
        <p v-else>No Job Cards Available</p>
      </table>
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Prev</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jobCardList"],
  name: "JobCardTable",
  mounted(){
    console.log(this.jobCardList)
    this.updatedJobCardList = this.jobCardList
  },
  methods: {
    search(searchText){
      this.updatedJobCardList = this.jobCardList.filter((jobCard)=> {
          return(
             ((jobCard.customer.customerName).toLowerCase()).includes(((searchText.target.value).toLowerCase())) ||
             ((jobCard.vehicle.regNumber).toLowerCase()).includes(((searchText.target.value).toLowerCase())) ||
             ((jobCard.vehicle.carType.make).toLowerCase()).includes(((searchText.target.value).toLowerCase())) ||
             ((jobCard.vehicle.carType.model).toLowerCase()).includes(((searchText.target.value).toLowerCase())) 

          )
      })
      console.log(this.updatedJobCardList)
    }
  },
  data(){
    return {
      updatedJobCardList: [],
      searchText: ''
    }
  }
};
</script>

<style scoped>
.fa {
  font-size: 16px;
}
</style>