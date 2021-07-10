import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/auth/Login.vue'
import SellProductsPage from "../views/SellProductsPage";
import PartsPage from "../views/PartsPage";
import StockPage from "../views/StockPage";
import ProfileLayout from "../layouts/ProfileLayout";
import ViewProfile from "../views/profile/ViewProfile";
import NewJobCard from "../views/job-cards/NewJobCard";
import JobCardLayout from "../layouts/JobCardLayout";
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
import StocksPageLayout from "../layouts/StocksPageLayout";
import NewStock from "../views/stocks/NewStock";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: JobCardLayout,
        children: [
            {
                path: '',
                name: "JobCardTable",
                component: JobCardsPage
            },
            {
                path: '/edit/:id',
                name: "EditJobCard",
                component: NewJobCard
            }
        ]
    },
    {
        path: 'job-cards',
        component: JobCardLayout,
        children: [
            {
                path: '',
                name: "JobCardTable",
                component: JobCardsPage
            },
            {
                path: '/create',
                name: "NewJobCard",
                component: NewJobCard
            },
            {
                path: '/edit/:id',
                name: "EditJobCard",
                component: NewJobCard
            }
        ]
    },
    {
        path: '/stock',
        name: 'Stock',
        component: StocksPageLayout,
        children: [
            {
                path: '',
                name: "StockPage",
                component: StockPage
            },
            {
                path: 'create',
                name: "NewStock",
                component: NewStock
            },
        ]
    },
    {
        path: 'statuses',
        component: JobCardLayout,
        children: [
            {
                path: '',
                name: "StatusesPage",
                component: StatusesPage
            }
        ]
    },
    {
        path: 'payments',
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
        name: 'Profile',
        component: ProfileLayout,
        children: [
            {
                path: '/',
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
