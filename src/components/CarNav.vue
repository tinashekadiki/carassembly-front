<template>
  <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-md-down-none">
      <img width="60" src="/icons/logo.png">
    </div>
    <ul class="c-sidebar-nav ps ps--active-y">
      <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="/">
        <i class="fa fa-home"></i> &nbsp; Dashboard</a>
      </li>
      <li class="c-sidebar-nav-title">Components</li>
      <li class="c-sidebar-nav-dropdown"><a class="c-sidebar-nav-dropdown-toggle" href="/">
        <i class="fa fa-list"></i> &nbsp; Job Cards</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><router-link :to="{name: 'NewJobCard'}" class="c-sidebar-nav-link" >New Job Card</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'JobCardTable' }">Job Cards List</router-link></li>
        </ul>
      </li>
      <li class="c-sidebar-nav-dropdown"><a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-credit-card"></i> &nbsp; Payments</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'BankList'}">Banks</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'InvoiceList'}"> Invoices</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'EstimateList'}"> Estimates/Quotes</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'OrderList'}"> Orders</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'TaxConfigList'}"> Configure Tax</router-link></li>
        </ul>
      </li>
      <li class="c-sidebar-nav-dropdown"><a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-users"></i> &nbsp; Users</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/buttons.html"> Advisors</a></li>
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/brand-buttons.html"> Customers</a></li>
        </ul>
      </li>
      <li class="c-sidebar-nav-dropdown"><a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-list"></i> &nbsp; Stock</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/buttons.html"> Upload Stock</a></li>
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/brand-buttons.html"> Stock Parts</a></li>
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/brand-buttons.html"> Products</a></li>
        </ul>
      </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-unfoldable"></button>
  </div>
</template>

<script>
export default {
  name: "CarNav"
}
</script>

<style scoped>
  .fa{
    font-size: 20px !important;
  }
</style>
