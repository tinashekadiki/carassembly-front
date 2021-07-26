<template>
  <div class="fade-in">
    <div class="row">
      <div v-for="highlight in statusList" :key="highlight.id" class="col-sm-6 col-lg-3">
        <div class="card text-white" :style="`background-color: ${highlight.status.hexColor}`">
          <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div class="text-value-lg">{{ highlight.number }}</div>
              <div>{{ highlight.status.statusName }}</div>
            </div>
            <div class="btn-group">
              <button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i :class="highlight.status.icon"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
            </div>
          </div>
          <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <canvas class="chart chartjs-render-monitor" id="card-chart1" height="70" style="display: block;" width="342"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "../utils/global";
import {http} from "../utils/http-base";
export default {
  name: "Highlights",
  mixins: [global],
  mounted() {
    this.getHighlightedResults();
  },
  methods: {
    getHighlightedResults(){
      this.globalLoadingState = true;
      http.get('status/list/highlights').then(res => {
        this.statusList = res.data;
        console.log(this.statusList)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.globalLoadingState = false;
      });
    }
  }
}
</script>

<style scoped>
  .fa{
    font-size: 36px;
  }
</style>