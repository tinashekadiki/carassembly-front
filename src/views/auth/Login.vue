<template>
  <div class="vertical-center">
    <div class="flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
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
                    <input class="form-control" type="text" placeholder="Username">
                  </div>
                  <div class="input-group mb-4">
                    <div class="input-group-prepend"><span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                    </div>
                    <input class="form-control" type="password" placeholder="Password">
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <router-link class="btn btn-primary px-4 text-white" to="/" type="button">Login</router-link>
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
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
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