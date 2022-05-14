import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/auth/Login.vue'
import SellProductsPage from "../views/SellProductsPage";
import PartsPage from "../views/PartsPage";
import StockPage from "../views/StockPage";
import ProfileLayout from "../layouts/ProfileLayout";
import ViewProfile from "../views/profile/ViewProfile";
import NewJobCard from "../views/job-cards/NewJobCard";
import EditJobCard from "../views/job-cards/EditJobCard";
import PaymentsLayout from "../layouts/PaymentsLayout";
import NewBankDetails from "../views/payments/banks/NewBankDetails";
import EstimateList from "../views/payments/invoices/EstimateList";
import OrderList from "../views/payments/orders/OrderList";
import TaxConfigList from "../views/payments/tax/TaxConfigList";
import NewTax from "../views/payments/tax/NewTax";
import JobCardsPage from "../views/JobCardsPage";
import StatusesPage from "../views/StatusesPage";
import NewStock from "../views/stocks/NewStock";
import CustomersPage from "../views/CustomersPage";
import AdvisorsPage from "../views/AdvisorsPage";
import ServiceTypePage from "../views/ServiceTypesPage";
import InvoicesListPage from "../views/InvoicesListPage";
import InvoicesEditPage from "../views/InvoicesEditPage";
import CheckListPage from "../views/CheckListPage.vue";
import ViewCheckListPage from "../views/ViewCheckList.vue";
import DownloadJobCardPage from "../views/DownloadJobCardPage.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/dashboard',
    name: "JobCardTable",
    component: JobCardsPage
},
{
    path: '/edit/:id',
    name: "EditJobCard",
    component: EditJobCard
},
{
    path: '/create',
    name: "NewJobCard",
    component: NewJobCard
},

{
    path: '/statuses/',
    name: "StatusesPage",
    component: StatusesPage
},
{
    path: '/stocks',
    name: "StockPage",
    component: StockPage
},
{
    path: '/stocks/create',
    name: "NewStock",
    component: NewStock
},
{
    path: '/customers',
    name: "CustomersPage",
    component: CustomersPage
},
{
    path: '/users',
    name: "AdvisorsPage",
    component: AdvisorsPage
},
{
    path: '/jobCards/serviceTypes',
    name: "ServiceTypePage",
    component: ServiceTypePage
},
{
    path: '/tax',
    name: "TaxConfigList",
    component: TaxConfigList
},
{
    path: '/invoices',
    name: "InvoicesListPage",
    component: InvoicesListPage
},
{
    path: '/invoices/:id',
    name: "InvoicesEditPage",
    component: InvoicesEditPage
},
{
    path: 'banks',
    name: "NewBankDetails",
    component: NewBankDetails
},
{
    path: '/payments/',
    component: PaymentsLayout,
    children: [


        {
            path: '/estimates',
            name: "EstimateList",
            component: EstimateList
        },
        {
            path: '/orders',
            name: "OrderList",
            component: OrderList
        },
        {
            path: '/orders',
            name: "NewTax",
            component: NewTax
        }
    ]
},
{
    path: '/',
    name: 'Login',
    component: LoginPage
},
{
    path: '/profile',
    component: ProfileLayout,
    children: [{
        path: '',
        name: 'ViewProfile',
        component: ViewProfile,
    }]
},
{
    path: '/sell',
    name: 'SellProducts',
    component: SellProductsPage
},

{
    path: '/parts',
    name: 'Parts',
    component: PartsPage
},
{
    path: '/checklist',
    name: 'CheckList',
    component: CheckListPage
},
{
    path: '/viewchecklist',
    name: 'ViewCheckList',
    component: ViewCheckListPage
},
{
    path: '/DownloadJobCard/:id',
    name: 'DownloadJobCard',
    component: DownloadJobCardPage
}
]

const router = new VueRouter({
    routes,
    mode: "hash"
})

export default router