<template>
  <MainLayout title="Invoices">
    <div class="row">
      <div class="col-md-6">
        <div class="card row custom">
          <div class="card-header">Add More Stock Parts</div>
          <div class="card-body">
            <div class="col-md-12">
              <div class="form-group">
                <label>Stock Part</label>
                <select class="form-control" v-model="orderPart.stockPart">
                  <option value="">Select Stock Part</option>
                  <option
                    v-for="stockPart in stockPartsList"
                    :key="stockPart.id"
                    :value="stockPart"
                  >
                    {{ `${stockPart.partName} - ${stockPart.brand}` }}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <label>Tax</label>
                <select class="form-control" v-model="orderPart.tax">
                  <option value="">Select Applicable Tax</option>
                  <option v-for="tax in taxList" :key="tax.id" :value="tax">
                    {{
                      `${tax.taxName} - ${tax.taxType} - ${tax.taxPercentage}`
                    }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Order Quantity</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Quantity"
                  v-model="orderPart.orderQuantity"
                />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button @click="saveOrderPart()" class="btn btn-facebook">
              Add Part <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="card row custom">
          <div class="card-header">Record Payment</div>
          <div class="card-body">
            <div class="col-md-12">
              <div class="form-group">
                <label>Reference/Cheque Number</label>
                <input class="form-control" v-model="payment.chequeNumber" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Bank</label>
                <select class="form-control" v-model="payment.bank">
                  <option value="">Select Bank</option>
                  <option v-for="bank in banks" :key="bank.id" :value="bank">
                    {{ `${bank.bankName}` }}
                  </option>
                  <option :value="{ bankName: 'Cash' }">Cash</option>
                </select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Amount Paid</label>
                <input class="form-control" v-model="payment.amountPaid" />
              </div>
            </div>
          </div>

          <div class="card-footer">
            <button @click="savePayment()" class="btn btn-facebook">
              Save Payment <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div id="invoice">
          <div class="row card-header custom">
            <div class="col-md-12">
              <h3 class="align-content-center">TAX INVOICE</h3>
            </div>
            <div class="col-md-6">
              <h6>Invoice Number: INV{{ invoice.id }}</h6>
              <span class="space"></span>
              <h6>Invoice Total: ${{ calculateInvoiceTotal(invoice) }}</h6>
              <h6>Invoice Due Amount: ${{ calculateAmountDue(invoice) }}</h6>
              <h6>Amount Paid: ${{ calculateAmountPaid(invoice) }}</h6>
            </div>
            <div class="col-md-6">
              <img
                class="invoice-logo"
                width="100px"
                height="auto"
                src="/icons/logo.png"
              />
            </div>
          </div>

          <div class="row card-header custom">
            <div class="col-md-6">
              <h6>From: SprayTech Zimbabwe</h6>
              <h6>Address: 123 Main Street, Harare</h6>
              <h6>Phone: 0778191521</h6>
            </div>
            <div class="col-md-6">
              <h6>To: Adrian Mutize</h6>
              <h6>Address: 3 Spruit Rd, Hatfied</h6>
              <h6>Phone: 0783347616</h6>
            </div>
          </div>

          <div class="card-header custom">
            <strong>Invoice Order Parts</strong> <small>Details</small>
          </div>
          <div class="card-body">
            <table
              v-if="orderParts.length"
              class="table table-responsive-sm table-bordered"
            >
              <thead>
                <tr>
                  <th>Part Name</th>
                  <th>Price</th>
                  <th>Order Quantity</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="orderPart in orderParts" :key="orderPart.id">
                  <td>{{ orderPart.stockPart.partName }}</td>
                  <td>{{ orderPart.stockPart.price }}</td>
                  <td>{{ orderPart.orderQuantity }}</td>
                  <td>
                    ${{ orderPart.orderQuantity * orderPart.stockPart.price }}
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Total:</td>
                  <td>
                    {{ calculateInvoiceTotal(invoice) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row custom-btn">
          <button class="btn btn-facebook pl-5 pr-5" @click="download()">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import { http } from "../utils/http-base";
import global from "../utils/global";
import { saveAs } from "file-saver";
// import jsPDF from "jspdf";

export default {
  name: "InvoicesEditPage",
  mixins: [global],
  components: { MainLayout },
  data() {
    return {
      invoice: {},
      orderParts: [],
      payments: [],
      orderPart: {
        stockPart: {
          price: "",
          partName: "",
          partOrLabour: "",
          brand: "",
          qoH: "",
          averagePurchasePrice: "",
          quantity: "",
        },
        discount: "",
        tax: {
          taxType: "",
          taxName: "",
          taxPercentage: "",
        },
        orderQuantity: "",
      },
      payment: {
        chequeNumber: "",
        bank: {
          bankName: "",
        },
        amountPaid: "",
      },
    };
  },
  mounted() {
    this.fetchStockParts();
    this.retrieveTaxList();
    this.getInvoice();
    this.fetchAllBanks();
  },
  methods: {
    getInvoice() {
      this.globalLoadingState = true;
      if (this.$route.params.id) {
        this.editing = true;
        this.globalLoadingState = true;
        http
          .get(`/invoice/get-one/${this.$route.params.id}`)
          .then((resp) => {
            this.invoice = resp.data;
            this.orderParts = this.invoice.orderParts;
            this.showSuccessMessage();
          })
          .catch((err) => {
            console.log(err);
            this.showErrorMessage();
          })
          .finally(() => {
            this.globalLoadingState = false;
            this.orderPart = {
              stockPart: {
                price: "",
                partName: "",
                partOrLabour: "",
                brand: "",
                qoH: "",
                averagePurchasePrice: "",
                quantity: "",
              },
              discount: "",
              tax: {
                taxType: "",
                taxName: "",
                taxPercentage: "",
              },
              orderQuantity: "",
            };
          });
      }
    },
    saveOrderPart() {
      this.globalLoadingState = true;
      this.orderParts.push(this.orderPart);
      this.invoice.orderParts = this.orderParts;
      http
        .post("/order-part/create", {
          invoice: this.invoice,
          ...this.orderPart,
        })
        .then((res) => {
          console.log(res);
          this.getInvoice();
          this.showSuccessMessage();
        })
        .catch((err) => {
          this.showErrorMessage();
          console.log(err);
        })
        .finally(() => {
          this.globalLoadingState = false;
        });
    },
    savePayment() {
      this.globalLoadingState = true;
      this.payments.push(this.payment);
      this.invoice.payments = this.payments;
      http
        .put("/invoice/edit/" + this.invoice.id, this.invoice)
        .then((res) => {
          console.log(res);
          this.getInvoice();
          this.showSuccessMessage();
        })
        .catch((err) => {
          this.showErrorMessage();
          console.log(err);
        })
        .finally(() => {
          this.globalLoadingState = false;
        });
    },
    download() {
      http
        .get("/job-cards/users/export/pdf", { responseType: "blob" })
        .then((response) => {
          saveAs(response.data, "job-card.pdf");
        });

      // var pdf = new jsPDF("p", "pt", "a4");
      // pdf.html(document.getElementById("invoice"), {
      //   callback: function (pdf) {
      //     pdf.save("a4.pdf");
      //   },
      // });
    },
  },
};
</script>


<style scoped>
#invoice {
  width: 600px;
  padding: 1em;
}

.custom {
  margin: 1em;
}

.custom-btn {
  margin-left: 2em;
  margin-bottom: 2em;
}

.space {
  width: 2em;
}

.invoice-logo {
  float: right;
}
</style>