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
      <li :class="'c-sidebar-nav-dropdown '+showDropdown" @click="!showDropdown.length ? showDropdown = 'c-show' : showDropdown = ''"><router-link class="c-sidebar-nav-dropdown-toggle"  :to="{ name: 'NewJobCard' }" >
        <i class="fa fa-list"></i> &nbsp; Job Cards</router-link>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><router-link :to="{ name: 'NewJobCard' }" class="c-sidebar-nav-link" >New Estimate</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'JobCardTable' }">Job Cards List</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'StatusesPage' }">Job Cards Statuses</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'ServiceTypePage' }">Service Types</router-link></li>
            <!-- <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'CheckList' }">Check List</router-link></li> -->
        </ul>
      </li>
      <li :class="'c-sidebar-nav-dropdown '+showDropdownPayments" @click="!showDropdownPayments.length ? showDropdownPayments = 'c-show' : showDropdownPayments = ''">
        <a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-credit-card"></i> &nbsp; Payments</a>
        <ul class="c-sidebar-nav-dropdown-items">
<!--          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'BankList'}">Banks</router-link></li>-->
          <li class="c-sidebar-nav-item" @click="showDropdownPayments = 'c-show'"><router-link class="c-sidebar-nav-link" :to="{ name: 'NewBankDetails'}">Banks</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'InvoicesListPage'}"> Invoices</router-link></li>
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'TaxConfigList'}"> Configure Tax</router-link></li>
        </ul>
      </li>
      <li :class="'c-sidebar-nav-dropdown '+showDropdownUsers" @click="!showDropdownUsers.length ? showDropdownUsers = 'c-show' : showDropdownUsers = ''"><a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-users"></i> &nbsp; Users</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link"  :to="{name: 'AdvisorsPage'}"> Advisors</router-link></li>
          <li class="c-sidebar-nav-item"><router-link  :to="{ name: 'CustomersPage'}" class="c-sidebar-nav-link"> Customers</router-link></li>
        </ul>
      </li>
      <li :class="'c-sidebar-nav-dropdown '+showDropdownStock" @click="!showDropdownStock.length ? showDropdownStock = 'c-show' : showDropdownStock = ''"><a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-list"></i> &nbsp; Stock</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" to="/stocks">List Stock</router-link></li>
        </ul>
      </li>
    <li :class="'c-sidebar-nav-dropdown '+showDropdownCheck" @click="!showDropdownCheck.length ? showDropdownCheck = 'c-show' : showDropdownCheck = ''"><a class="c-sidebar-nav-dropdown-toggle" href="#">
        <i class="fa fa-check-circle-o"></i> &nbsp; Check List</a>
        <ul class="c-sidebar-nav-dropdown-items">
    <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'CheckList' }">Create Check List</router-link></li>
    <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" :to="{ name: 'ViewCheckList' }">View Check List</router-link></li>
        </ul>
      </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-unfoldable"></button>
  </div>
</template>

<script>
export default {
  name: "CarNav",
  data(){
    return {
      showDropdown: '',
      showDropdownPayments: '',
      showDropdownUsers: '',
      showDropdownStock: '',
      showDropdownCheck: '',
    }
  },
  methods: {
    showOptions(){
      var el = document.getElementsByClassName('c-sidebar-nav-dropdown-items');
      console.log(el)
      return el;
    }
  }
}
</script>

<style scoped>
  .fa{
    font-size: 20px !important;
  }
</style>
