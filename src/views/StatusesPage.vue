<template>
<div>
  <div class="row">
    <div class="col-md-8">
      <label>Status Name</label>
      <input class="form-control" v-model="status.statusName" placeholder="Status Name">
    </div>
    <div class="col-md-2">
      <label>Status Color Code</label>
      <input class="form-control" type="color" v-model="status.hexColor" placeholder="Status Name">
    </div>
    <div class="col-md-2 mt-30">
      <button class="btn btn-facebook" @click="saveStatus()">Save Status</button>
    </div>
  </div>

  <div class="row">
    <table class="table table-responsive-sm table-striped table-bordered">
      <thead>
      <tr>
        <th>Status Name</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="status in statusList" :key="status.id">
        <td>{{ status.statusName }}</td>
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
      <p>No Status Available</p>
    </table>
  </div>
</div>
</template>

<script>
import {http} from "../utils/http-base";
import global from "../utils/global";

export default {
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

<style scoped>
  .mt-30{
    margin-top: 30px;
  }

  .fa {
    font-size: 16px;
  }

  .btn{
    margin-right: 10px;
  }
</style>