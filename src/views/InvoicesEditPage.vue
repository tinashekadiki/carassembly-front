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
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Create Stock Part

                </button>
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

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-header">
                <strong>Stock Part</strong> <small>Details</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Part Name</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Input Name"
                        v-model="stockPart.partName"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Price</label>
                      <input
                        class="form-control"
                        type="number"
                        v-model="stockPart.price"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Labour</label>
                      <select
                        v-model="stockPart.partOrLabour"
                        class="form-control"
                      >
                        <option selected>Select true if Labour</option>
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>QoH</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="stockPart.qoH"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Average Purchase Price</label>
                      <input
                        class="form-control"
                        type="number"
                        v-model="stockPart.averagePurchasePrice"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Stock Quantity</label>
                      <input
                        class="form-control"
                        type="number"
                        v-model="stockPart.quantity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              id="dismiss"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button @click="saveStockPart()" class="btn btn-facebook">
              Save Stock Part
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import { http } from "../utils/http-base";
import global from "../utils/global";
// import jsPDF from "jspdf";
import { saveAs } from "file-saver";

export default {
  name: "InvoicesEditPage",
  mixins: [global],
  components: { MainLayout },
  data() {
    return {
      stockPart: {
        price: "",
        partName: "",
        partOrLabour: "",
        brand: "",
        qoH: "",
        averagePurchasePrice: "",
        quantity: "",
      },
      showModal: false,
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
    this.getJobCards();
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
      console.log(this.jobCardsList);
      let jc = [];
      jc = this.jobCardsList.data;
      let acId = 0;
      console.log("invoice", this.invoice);
      let id = jc.filter((el) => {
        if (el.invoice.id === this.invoice.id) {
          acId = el.id;
          return el.id;
        }
      });
      console.log(id);
      console.log(acId);

      http
        .get(`/job-cards/view/pdf/${acId}`, { responseType: "blob" })
        .then((response) => {
          saveAs(response.data, `invoice - ${this.invoice.id}.pdf`);
        });
    },
    saveStockPart() {
      this.globalLoadingState = true;
      http
        .post(`/stock/create`, this.stockPart)
        .then(() => {
          this.$root.$emit("stockAdded");
          this.showSuccessMessage();
          document.getElementById("exampleModal").style.display = "none";
          // console.log(funny);
          let btn = document.getElementById("dismiss");
          btn.click();
           this.fetchStockParts();
        })
        .catch((err) => {
          console.log(err);
          this.showErrorMessage();
        })
        .finally(() => {
          this.globalLoadingState = false;
          this.stockPart = {
            price: "",
            partName: "",
            partOrLabour: "",
            brand: "",
            qoH: "",
            averagePurchasePrice: "",
            quantity: "",
          };
        });
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