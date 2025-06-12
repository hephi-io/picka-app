import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import NewAuthPage from "@/components/NewAuthPage.vue";
import OTPVerification from "@/components/OTPVerification.vue";
import OTPVerificationStatus from "@/components/OTPVerificationStatus.vue";
import DashboardPage from "@/views/dashboard.vue";
import AuthPage from "@/components/AuthPage.vue";
import DashboardLayout from "@/layouts/dashboard/index.vue";
import Shipments from "@/views/shipments.vue";
import Wallets from "@/views/wallets.vue";
import Tracking from "@/views/tracking.vue";
import PaymentLayout from "@/layouts/payment/index.vue";
import SingleShipment from "@/views/single-shipment.vue";
import BulkShipment from "@/views/bulk-shipment.vue";
import CheckoutComponent from "@/views/checkout-component.vue";
import settings from "@/layouts/settings/index.vue"
import profile from "@/views/profile.vue";  
import appsetting from "@/views/appsetting.vue";
import integrations from "@/views/integrations.vue";
import notification from "@/views/notification.vue";
import billing from "@/views/billing.vue";
import { token } from "@/utils";
import danger from "@/views/danger.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
    
      component: AuthPage,
    },
    {
      path: "/auth/onboarding",
      name: "onboarding",
      
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NewAuthPage,
    },
    {
      path: "/auth/otp-verification",
      name: "otp-verification",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: OTPVerification,
    },
    {
      path: "/auth/otp-verification/otp-status",
      name: "otp-status",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: OTPVerificationStatus,
    },
    {
      path: "/",
      meta: { requiresAuth: true },
      component: DashboardLayout,
      // meta: { requiresAuth: true },

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        { name: "dashboard", path: "", component: DashboardPage },
        { name: "shipments", path: "shipments", component: Shipments },
        { name: "wallets", path: "wallets", component: Wallets },
        { name: "tracking", path: "tracking", component: Tracking },
        { name: "settings", path: "settings", component: settings, redirect: { name: "profile" },
           children: [
            { name: "profile", path: "profile",  component: profile },
            { name: "appsetting", path: "appsetting", component: appsetting },
            { name: "integrations", path: "integrations", component: integrations },
            { name: "billing", path: "billing", component: billing },
            { name: "notifcation", path: "notification", component: notification },
            { name: "danger", path: "danger", component: danger },
           ]
         },
      ],
    },
    {
      path: "/shipments/order/:name",
      component: PaymentLayout,
      name: "payment",
      meta: { requiresAuth: true },
      children: [

        { 
          name: "single-shipment",
          path: "/single-shipment", 
          component: SingleShipment, 
        },

        { 
          name: "bulk-shipment",
          path: "/bulk-shipment", 
          component: BulkShipment, 
        },

        { 
          name: "checkout",
          path: "/checkout/:name", 
          component: CheckoutComponent, 
        },

      ],
    }, 
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !token.isAuthenticated()) {
    next("/auth"); // Redirect to login if the route requires authentication
  } else {
    next(); // Proceed to route
  }
});

export default router;
