import {http} from "./http-base";

export default {
    data() {
        return {
            taxList: [],
            globalLoadingState: false,
            statusList: [],
            advisorsList: [],
            stockPartsList: [],
            orderParts: [],
            serviceTypes: [],
            banks: []
        }
    },
    methods: {
        fetchStockParts(){
            this.globalLoadingState = true;
            http.get('/stock/list').then(resp => {
                this.stockPartsList = resp.data;
            }).catch(err => {
                    console.log(err)
                }
            ).finally(() => {
                this.globalLoadingState = false;
            });
        },
        logOut(){
            console.log('log out wangu')
          localStorage.clear()
          this.$router.push('/')
        },
        getAllStatuses() {
            this.globalLoadingState = true;
            http.get('status/list').then(res => {
                this.statusList = res.data;
                console.log(this.statusList)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                this.globalLoadingState = false;
            });
        },
        getAllServiceTypes() {
            this.globalLoadingState = true;
            http.get('service-types/list').then(res => {
                this.serviceTypes = res.data;
                console.log(this.serviceTypes)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                this.globalLoadingState = false;
            });
        },
        formatDate(dateString) {
            return new Date(dateString).toLocaleDateString();
        },
        fetchAdvisors() {
            this.globalLoadingState = true;
            http.get('/advisor/list').then(res => {
                this.advisorsList = res.data;

            }).catch(err => {
                console.log(err)
            }).finally( ()=>{
                    this.globalLoadingState = false;
                }

            );
        },
        retrieveTaxList(){
            this.globalLoadingState = false;
            http.get(`tax/list`).then(resp =>{
                    this.taxList = resp.data;
                }
            ).catch(err => {
                console.log(err)
            }).finally(() => {
                this.globalLoadingState = false;
            })
        },
        calculateInvoiceTotal(invoice){
            let total = 0;
            if(invoice.orderParts){
                invoice.orderParts.forEach(element => {
                    total+=(element.stockPart.price * element.orderQuantity);
                });
            }
            return total;
        },
        calculateAmountPaid(invoice){
            let total = 0;
            if(invoice.payments){
                invoice.payments.forEach(element => {
                    total+=(element.amountPaid)
                });
            }
            return total;
        },
        calculateAmountDue(invoice){
            return this.calculateInvoiceTotal(invoice) - this.calculateAmountPaid(invoice);
        },
        fetchAllBanks() {
            http.get('/bank/list').then(res => {
                    this.banks = res.data;
                }
            ).catch(err => {
                console.log(err);
            }).finally()
        },
        setEditingMode(bank) {
            this.editing = true;
            this.bank = bank;
        }
    },
    notifications: {
        showSuccessMessage: { // You can have any name you want instead of 'showLoginError'
            title: 'Success',
            message: 'Your request was successful',
            type: 'success' // You also can use 'VueNotifications.types.error' instead of 'error'
        },
        showErrorMessage: { // You can have any name you want instead of 'showLoginError'
            title: 'Something went wrong.',
            message: 'Unexpected Error Occurred',
            type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
        },
    }
}
