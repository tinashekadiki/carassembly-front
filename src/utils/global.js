import {http} from "./http-base";

export default {
    data() {
        return {
            globalLoadingState: false,
            statusList: [],
            globalBaseUrl: 'http://localhost:8081/api/'
        }
    },
    methods: {
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
        formatDate(dateString) {
            return new Date(dateString).toLocaleDateString();
        }
    }
}
