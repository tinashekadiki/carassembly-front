<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <label>Advisor Name</label>
        <input class="form-control" v-model="advisor.name" placeholder="Advisor Name">
      </div>
      <div class="col-md-6">
        <label>Advisor Surname</label>
        <input class="form-control" v-model="advisor.surname" placeholder="Advisor Surname">
      </div>

      <div class="col-md-6">
        <label>Advisor Post</label>
        <input class="form-control" v-model="advisor.advisorPost.postName" placeholder="Advisor Post">
      </div>

        <div class="col-md-4 mt-4" v-if="!globalLoadingState">
          <button class="btn btn-facebook" @click="createAdvisor()">Save Advisor</button>
        </div>
        <Circle10 v-else></Circle10>


    </div>

    <div class="row mt-5">
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
        <tr>
          <th>Advisor Name</th>
          <th>Advisor Surname</th>
          <th>Advisor Post</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody v-if="advisorsList.length">
        <tr v-for="advisor in advisorsList" :key="advisor.id">
          <td>{{ advisor.name }}</td>
          <td>{{ advisor.surname }}</td>
          <td>{{ advisor.advisorPost.postName }}</td>
          <td>
            <button class="btn btn-success mt-30 " @click="setEditingMode(advisor)">
              <i class="fa fa-edit"></i>
            </button>
          </td>

        </tr>
        </tbody>
        <p v-else>No Advisors Available</p>
      </table>
    </div>

  </div>

</template>

<script>

import {http} from "../utils/http-base";
import Circle10 from "vue-loading-spinner/src/components/Circle10";
import global from "../utils/global";

export default {
  name: "AdvisorsPage",
  mixins: [global],
  components: {
    Circle10,
  },
  mounted() {
    this.fetchAdvisors();
  },
  data() {
    return {
      advisor: {
        id: '',
        name: '',
        surname: '',
        advisorPost: {
          postName: ''
        }
      },
      advisorsList: [],
      editing: false
    }
  },
  methods: {
    createAdvisor() {

      if (this.editing) {
        this.globalLoadingState = true;
        http.put(`advisor/edit/${this.advisor.id}`, this.advisor).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
              this.globalLoadingState = false;
              this.editing = false;
              this.advisor = {
                id: '',
                name: '',
                surname: '',
                advisorPost: {
                  postName: ''
                }

              };
              this.fetchCustomers();
            }
        );
      } else {
        this.globalLoadingState = true;
        http.post('/advisor/create', this.advisor).then(res => {
          console.log(res.data);
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          this.globalLoadingState = false;
              this.fetchAdvisors()
            }
        );
      }

    },
    fetchAdvisors() {
      this.globalLoadingState = true;
      http.get('/advisor/list').then(res => {
        this.advisorsList = res.data;

      }).catch(err => {
        console.log(err)
      }).finally( ()=>{
        this.globalLoadingState = false;
          }

      );
    },
    setEditingMode(advisor) {
      this.editing = true;
      this.advisor = advisor;
    }
  }
}
</script>

<style scoped>

.mt-30 {
  margin-top: 30px;
}

.fa {
  font-size: 16px;
}

.btn {
  margin-right: 10px;
}

</style>