import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/auth/Login.vue'
import SellProductsPage from "../views/SellProductsPage";
import PartsPage from "../views/PartsPage";
import StockPage from "../views/StockPage";
import ProfileLayout from "../layouts/ProfileLayout";
import ViewProfile from "../views/profile/ViewProfile";
import NewJobCard from "../views/job-cards/NewJobCard";
import PaymentsLayout from "../layouts/PaymentsLayout";
import BankList from "../views/payments/banks/BankList";
import NewBankDetails from "../views/payments/banks/NewBankDetails";
import InvoiceList from "../views/payments/invoices/InvoiceList";
import EstimateList from "../views/payments/invoices/EstimateList";
import OrderList from "../views/payments/orders/OrderList";
import TaxConfigList from "../views/payments/tax/TaxConfigList";
import NewTax from "../views/payments/tax/NewTax";
import JobCardsPage from "../views/JobCardsPage";
import StatusesPage from "../views/StatusesPage";
import NewStock from "../views/stocks/NewStock";
import CustomersPage from "../views/CustomersPage";
import AdvisorsPage from "../views/AdvisorsPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: "JobCardTable",
        component: JobCardsPage
    },
    {
        path: '/edit/:id',
        name: "EditJobCard",
        component: NewJobCard
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
        path: '/payments/',
        component: PaymentsLayout,
        children: [
            {
                path: 'banks',
                name: "BankList",
                component: BankList
            },
            {
                path: 'banks/new',
                name: "NewBankDetails",
                component: NewBankDetails
            },
            {
                path: '/invoices',
                name: "InvoiceList",
                component: InvoiceList
            },
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
                path: '/tax',
                name: "TaxConfigList",
                component: TaxConfigList
            },
            {
                path: '/orders',
                name: "NewTax",
                component: NewTax
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/profile',
        component: ProfileLayout,
        children: [
            {
                path: '',
                name: 'ViewProfile',
                component: ViewProfile,
            }
        ]
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
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
