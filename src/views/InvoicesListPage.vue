<template>
  <MainLayout title="Invoices">
    <div class="card">
      <div class="card-header">Job Cards</div>
      <div class="card-body">
        <table class="table table-responsive-sm table-striped table-bordered">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoice in invoicesList" :key="invoice.id">
              <td>{{ invoice.id }}</td>
              <td>{{ calculateInvoiceTotal(invoice) }}</td>
              <td>
                <router-link
                  :to="`/invoices/${invoice.id}`"
                  class="btn btn-success"
                >
                  <i class="fa fa-edit"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import global from "../utils/global";
import MainLayout from "../layouts/MainLayout";
import { http } from "../utils/http-base";
export default {
  mixins: [global],
  name: "InvoicesListPage",
  components: { MainLayout },
  mounted() {
    this.getAllInvoices();
  },
  data() {
    return {
      invoicesList: [],
    };
  },
  methods: {
    getAllInvoices() {
      this.globalLoadingState = true;
      http
        .get("/invoice/list")
        .then((res) => {
          this.invoicesList = res.data;
          this.showSuccessMessage();
        })
        .catch(() => {
          this.showErrorMessage();
        })
        .finally(() => {
          this.globalLoadingState = false;
        });
    },
  },
};
</script>

<style scoped>
</style>