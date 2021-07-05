<template>
  <div class="fade-in">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-gradient-primary">
          <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div class="text-value-lg">9.823</div>
              <div>Estimate</div>
            </div>
            <div class="btn-group">
              <button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-sort"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
            </div>
          </div>
          <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <canvas class="chart chartjs-render-monitor" id="card-chart1" height="70" style="display: block;" width="342"></canvas>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-gradient-info">
          <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div class="text-value-lg">9.823</div>
              <div>Work In Progress</div>
            </div>
            <div class="btn-group">
              <button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-car"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
            </div>
          </div>
          <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <canvas class="chart chartjs-render-monitor" id="card-chart2" height="70" width="342" style="display: block;"></canvas>
            <div id="card-chart2-tooltip" class="c-chartjs-tooltip top" style="opacity: 0; left: 132.779px; top: 127.516px;"><div class="c-tooltip-header"><div class="c-tooltip-header-item">March</div></div><div class="c-tooltip-body"><div class="c-tooltip-body-item"><span class="c-tooltip-body-item-color" style="background-color: rgb(51, 153, 255);"></span><span class="c-tooltip-body-item-label">My First dataset</span><span class="c-tooltip-body-item-value">9</span></div></div></div></div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-gradient-warning">
          <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div class="text-value-lg">9.823</div>
              <div>Invoice</div>
            </div>
            <div class="btn-group">
              <button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-dollar"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
            </div>
          </div>
          <div class="c-chart-wrapper mt-3" style="height:70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <canvas class="chart chartjs-render-monitor" id="card-chart3" height="70" width="374" style="display: block;"></canvas>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-gradient-danger">
          <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div class="text-value-lg">9.823</div>
              <div>Spares Pending</div>
            </div>
            <div class="btn-group">
              <button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-table"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>
            </div>
          </div>
          <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <canvas class="chart chartjs-render-monitor" id="card-chart4" height="70" width="342" style="display: block;"></canvas>
            <div id="card-chart4-tooltip" class="c-chartjs-tooltip top bottom" style="opacity: 0; left: 197.688px; top: 112.5px;"><div class="c-tooltip-header"><div class="c-tooltip-header-item">September</div></div><div class="c-tooltip-body"><div class="c-tooltip-body-item"><span class="c-tooltip-body-item-color" style="background-color: rgba(255, 255, 255, 0.2);"></span><span class="c-tooltip-body-item-label">My First dataset</span><span class="c-tooltip-body-item-value">65</span></div></div></div></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Highlights"
}
</script>

<style scoped>

</style>