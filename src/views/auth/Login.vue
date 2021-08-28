<template>
  <div class="row">
    <div class="col-2"></div>
      <div class="col-8">
    <div class="card-group">
      <div class="card p-4">
        <div class="card-body">
          <h1>Login</h1>
          <p class="text-muted">Sign In to your account</p>
          <div class="input-group mb-3">
            <div class="input-group-prepend"><span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
            </div>
            <input v-model="login.username" class="form-control" type="text" placeholder="Username">
          </div>
          <div class="input-group mb-4">
            <div class="input-group-prepend"><span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
            </div>
            <input v-model="login.password" class="form-control" type="password" placeholder="Password">
          </div>
          <div class="row">
            <div class="col-6">
              <button v-if="!globalLoadingState" class="btn btn-primary px-4 text-white" @click="processLogin" type="button">Login</button>
              <Loader v-if="globalLoadingState"></Loader>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-link px-0" type="button">Forgot password?</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
        <div class="card-body text-center">
          <div>
            <h2>Sign up</h2>
            <p>This is the Login Screen for the automotive garage management system. Please enter your credentials to proceed.</p>
            <button class="btn btn-lg btn-outline-light mt-3" type="button">Get Started Now!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import {httpNoAuth} from "../../utils/http-base";
import global from "../../utils/global";
import Loader from "../../components/Loader";

export default {
  name: "Login",
  components: {Loader},
  mixins: [global],
  mounted() {
    if(localStorage.getItem('token').length){
      this.$router.push('dashboard')
    }
  },
  data(){
    return {
      login: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    processLogin(){
      this.globalLoadingState = true;
      httpNoAuth.post('user/login', this.login).then(res=>{
        localStorage.setItem('token', res.data.authToken);
        this.showSuccessMessage()
        this.$router.push('/dashboard')
      }).catch(() => {
        this.showErrorMessage()
      }).finally(() =>{
        this.globalLoadingState = false;
      })
    }
  }
}
</script>

<style scoped>
.row{
  margin: 20px;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%) translateX(30%);
}

.fa{
  font-size: 12px !important;
}
</style>