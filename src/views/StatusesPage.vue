<template>
<MainLayout title="Job Card Statuses">
  <div class="card">
    <div class="card-header">Create New Status</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-10">
          <label>Status Name</label>
          <input class="form-control" v-model="status.statusName" placeholder="Status Name">
        </div>
        <div class="col-md-2">
          <label>Status Color Code</label>
          <input class="form-control" type="color" v-model="status.hexColor" placeholder="Status Name">
        </div>

        <div class="col-md-5">
          <label>Status Code</label>
          <input class="form-control" type="text" v-model="status.statusCode" placeholder="Status Name">
        </div>

        <div class="col-md-5">
          <label>Status Icon</label>
          <input class="form-control" type="text" v-model="status.icon" placeholder="Status Name">
        </div>

        <div class="col-md-2 mt-30">
          <button class="btn btn-facebook" @click="saveStatus()">Save Status</button>
        </div>
      </div>
    </div>
  </div>

    <div class="card">
      <div class="card-header">Job Cards</div>
      <div class="card-body">
        <table class="table table-responsive-sm table-striped table-bordered">
          <thead>
          <tr>
            <th>Status Name</th>
            <th>Status Color</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="status in statusList" :key="status.id">
            <td>{{ status.statusName }}</td>
            <td>{{ status.statusCode }}</td>
            <td>
              <i :class="status.icon"></i>
            </td>
            <td>
              <div class="color" :style="`background-color: ${status.hexColor};`">
              </div>
            </td>
            <td>
              <button class="btn btn-success" @click="setEditing(status)">
                <i class="fa fa-edit"></i>
              </button>

              <button class="btn btn-danger" @click="deleteStatus(status.id)">
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
import {http} from "../utils/http-base";
import global from "../utils/global";
import MainLayout from "../layouts/MainLayout";

export default {
  components: {MainLayout},
  mixins: [global],
  mounted() {
    this.getAllStatuses();
  },
  name: "StatusesPage",
  data(){
    return {
      status: {
        id: '',
        statusName: '',
        statusCode: '',
        icon: '',
        hexColor: ''
      }
    }
  },
  methods: {
    setEditing(status){
      this.status = status;
    },
    saveStatus(){
      this.globalLoadingState = true;
      if(this.status.id){
        http.put(`status/edit/${this.status.id}`, this.status).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          this.getAllStatuses();
        });
      }else{
        http.post('status/create', this.status).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          this.getAllStatuses();
        });
      }
    },
    deleteStatus(statusId){
      this.globalLoadingState = true;
      http.delete(`status/delete/${statusId}`).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.getAllStatuses();
      });
    },
    editStatus(status){
      http.post(`status/edit/${status.id}`, {
         status
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.getAllStatuses();
      });
    }
  }
}
</script>

<style>

</style>