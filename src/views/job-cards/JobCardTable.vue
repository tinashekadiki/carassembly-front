<template>
  <div class="card">
    {{jobCardList}}
    <div class="card-header">Job Cards</div>
    <div class="card-body">
      <table class="table table-responsive-sm table-striped table-bordered">
        <thead>
        <tr>
          <th>Customer Name</th>
          <th>Vehicle Registration Number</th>
          <th>Service Type</th>
          <th>Status</th>
          <th>Vehicle</th>
          <th>Arrival Date</th>
          <th>Insurance</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Tinashe Kadiki</td>
          <td>ADE5700</td>
          <td>Spray Painting</td>
          <td><span class="badge badge-success">Active</span></td>
          <td>Honda Fit</td>
          <td>22/03/2021</td>
          <td>Nicoz Diamond</td>
        </tr>

        </tbody>
      </table>
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Prev</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jobCardList"],
  name: "JobCardTable"
}
</script>

<style scoped>

</style>