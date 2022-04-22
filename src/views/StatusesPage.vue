<template>
<MainLayout title="Job Card Statuses">
  <Loader v-if="globalLoadingState"></Loader>
  <div v-else>
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
            <input class="form-control" type="color" v-model="status.hexColor" placeholder="Status Color">
          </div>

          <div class="col-md-5">
            <label>Status Code</label>
            <input class="form-control" type="text" v-model="status.statusCode" placeholder="Status Code">
          </div>

          <div class="col-md-5">
            <label>Status Icon</label>
            <!-- <input class="form-control" type="text" v-model="status.icon" placeholder="Status Icon"> -->
            <select v-model="status.icon" class="form-control">
              <option :value="icon.code" v-for="icon in icons" :key="icon.code">
              {{icon.name}}
            </option>
            </select>
            
          </div>

          <div class="col-md-2 mt-30">
            <button class="btn btn-facebook btn-block" @click="saveStatus()">Save Status</button>
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
            <th>Status Code</th>
            <th>Status Color</th>
            <th>Status Icon</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="status in statusList" :key="status.id">
            <td>{{ status.statusName }}</td>
            <td>{{ status.statusCode }}</td>
            <td>
              <div class="color" :style="`background-color: ${status.hexColor};`">
              </div>
            </td>

            <td>
              <i :class="status.icon"></i>
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
  </div>
</MainLayout>
</template>

<script>
import {http} from "../utils/http-base";
import global from "../utils/global";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";

export default {
  components: {Loader, MainLayout},
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
      },
      icons: [
        {
          name: 'New',
          code: 'fa fa-plus'
        },
        {
          name: 'Pending',
          code: 'fa fa-history'
        },        
        {
          name: 'Done',
          code: 'fa fa-check'
        },
        {
          name: 'Estimate',
          code: 'fa fa-hourglass-start'
        },
        {
          name: 'Invoice',
          code: 'fa fa-file'
        },
      ]
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
          this.status = {
            id: '',
                statusName: '',
                statusCode: '',
                icon: '',
                hexColor: ''
          }

        });
      }else{
        http.post('status/create', this.status).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          this.getAllStatuses();
          this.status = {
            id: '',
            statusName: '',
            statusCode: '',
            icon: '',
            hexColor: ''
          }
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