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
        }
    }
}
