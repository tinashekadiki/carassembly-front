<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <label>Bank Name</label>
        <input class="form-control" v-model="bank.bankName" placeholder="Bank Name">
      </div>
      <div class="col-md-4 mt-4" v-if="!globalLoadingState">
        <button class="btn btn-facebook" @click="crateBank()">Save Bank</button>
      </div>
      <Circle10 v-else></Circle10>
    </div>
    <div class="row mt-5">
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
        <tr>
          <th>Bank Name</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody v-if="banks.length">
        <tr v-for="bank in banks" :key="bank.id">
          <td>{{ bank.bankName }}</td>
          <td>
            <button class="btn btn-success mt-30" @click="setEditingMode(bank)">
              <i class="fa fa-edit"></i>
            </button>
          </td>
        </tr>
        </tbody>
        <p v-else>No Banks Available</p>
      </table>
    </div>
  </div>
</template>

<script>
import {http} from "../../../utils/http-base";
import global from "../../../utils/global";
import Circle10 from "vue-loading-spinner/src/components/Circle10";

export default {
  name: "NewBankDetails",
  mixins:[global],
  components: {
    Circle10,
  },
  mounted() {
    this.fetchAllBanks();
  },
  data() {
    return {
      bank: {
        id: '',
        bankName: ''
      },
      banks: [],
      editing:false,
    }
  },
  methods: {
    crateBank() {
      if (this.editing){
        this.globalLoadingState = true;
        http.put(`bank/edit/${this.bank.id}`, this.bank).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
              this.globalLoadingState = false;
              this.editing = false;
              this.bank = {
                id: '',
                bankName: ''
              };
              this.fetchAllBanks();
            }
        );
      }else{
        this.globalLoadingState = false;
        http.post('/bank/create', this.bank).then(res => {
          console.log(res.data);
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.globalLoadingState = false;
              this.fetchAllBanks();
            }
        );
      }

    },
    fetchAllBanks() {
      http.get('/bank/list').then(res => {
            this.banks = res.data;
          }
      ).catch(err => {
        console.log(err);
      }).finally()
    },
    setEditingMode(bank) {
      this.editing = true;
      this.bank = bank;
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