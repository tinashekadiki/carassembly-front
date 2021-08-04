<template>
  <MainLayout title="Service Types">
    <div class="card">
      <div class="card-header">Create Service Types</div>
      <div class="card-body">
        <form class="row">
          <div class="col-md-8">
            <label>Service Type Name</label>
            <input class="form-control" v-model="serviceType.serviceTypeName" placeholder="Service Type Name" required>
          </div>
          <div class="col-md-2 mt-30">
            <button class="btn btn-facebook" @click="saveServiceType()">Save Service Type</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-header">Service Types</div>
      <div class="card-body">
        <table class="table table-responsive-sm table-striped table-bordered">
          <thead>
          <tr>
            <th>Service Type Name</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="serviceType in serviceTypes" :key="serviceType.id">
            <td>{{ serviceType.serviceTypeName }}</td>
            <td>
              <button class="btn btn-success" @click="setEditing(serviceType)">
                <i class="fa fa-edit"></i>
              </button>

              <button class="btn btn-danger" @click="deleteServiceType(serviceType.id)">
                <i class="fa fa-remove"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import global from "../utils/global";
import {http} from "../utils/http-base";
export default {
name: "ServiceTypePage",
  components: {MainLayout},
  mixins:[global],
  data(){
    return {
      serviceType: {
        serviceTypeName: '',
        id: ''
      }
    }
  },
  mounted() {
   this.getAllServiceTypes();
  },
  methods: {
    setEditing(serviceType){
      this.serviceType = serviceType;
    },
    saveServiceType(){
      if (!this.serviceType.serviceTypeName){
        this.showErrorMessage();
        return;
      }
      this.globalLoadingState = true;
      if(this.serviceType.id){
        http.put(`service-types/edit/${this.serviceType.id}`, this.serviceType).then(res => {
          console.log(res)
          this.showSuccessMessage()
        }).catch(err => {
          console.log(err)
          this.showErrorMessage()
        }).finally(() => {
          this.getAllServiceTypes();
        });
      }else{
        http.post('service-types/create', this.serviceType).then(res => {
          console.log(res)
         this.showSuccessMessage()
        }).catch(err => {
          this.showErrorMessage()
          console.log(err)
        }).finally(() => {
          this.getAllServiceTypes();
        });
      }
    },
    deleteServiceType(serviceTypeId){
      this.globalLoadingState = true;
      http.delete(`service-types/delete/${serviceTypeId}`).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.getAllServiceTypes();
      });
    }
  },

}
</script>

<style scoped>

</style>