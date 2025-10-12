import { createRouter, createWebHistory } from "vue-router";
import NewAuthPage from "@/components/NewAuthPage.vue";
import OTPVerification from "@/components/OTPVerification.vue";
import OTPVerificationStatus from "@/components/OTPVerificationStatus.vue";
import DashboardPage from "@/views/dashboard.vue";
import Shipments from "@/views/shipments.vue";
import Wallets from "@/views/wallets.vue";
import Tracking from "@/views/tracking.vue";
import PaymentLayout from "@/layouts/payment/index.vue";
import BulkShipment from "@/views/bulk-shipment.vue";
import CheckoutComponent from "@/views/checkout-component.vue";
import settings from "@/layouts/settings/index.vue";
import profile from "@/views/profile.vue";
import appsetting from "@/views/appsetting.vue";
import integrations from "@/views/integrations.vue";
import notification from "@/views/notification.vue";
import billing from "@/views/billing.vue";
import { token } from "@/utils";
import danger from "@/views/danger.vue";
import Auth from "@/views/auth/index.vue";
import BulkShipmentCheckout from "@/views/bulk-shipment-checkout.vue";
import OrderSummaryView from "@/views/order-summary-view.vue";
import ForgotPassword from "@/views/forgot-password/forgot-password.vue";
import PasswordVerification from "@/views/forgot-password/verification.vue";
import ResetPassword from "@/views/forgot-password/reset-password.vue";
import PasswordVerificationStatus from "@/views/forgot-password/verification-status.vue";
import { Shipment } from "@/views/shipments";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: Auth,
    },
    {
      path: "/auth/onboarding",
      name: "onboarding",
      component: NewAuthPage,
    },
    {
      path: "/auth/otp-verification",
      name: "otp-verification",
      component: OTPVerification,
    },
    {
      path: "/auth/otp-verification/otp-status",
      name: "otp-status",
      component: OTPVerificationStatus,
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
      name: "forgot-password",
    },
    {
      path: "/forgot-password/verification",
      component: PasswordVerification,
      name: "password-verification",
    },
    {
      path: "/forgot-password/reset-password",
      component: ResetPassword,
      name: "reset-password",
    },
    {
      path: "/forgot-password/verification-status",
      component: PasswordVerificationStatus,
      name: "password-verification-status",
    },
    {
      path: "/",
      meta: { requiresAuth: true, layout: "DashboardLayout" },
      children: [
        { name: "dashboard", path: "", component: DashboardPage },
        { name: "shipments", path: "shipments", component: Shipments },
        { name: "wallets", path: "wallets", component: Wallets },
        { name: "tracking", path: "tracking", component: Tracking },
        {
          name: "settings",
          path: "settings",
          component: settings,
          redirect: { name: "profile" },
          children: [
            { name: "profile", path: "profile", component: profile },
            { name: "appsetting", path: "appsetting", component: appsetting },
            {
              name: "integrations",
              path: "integrations",
              component: integrations,
            },
            { name: "billing", path: "billing", component: billing },
            {
              name: "notifcation",
              path: "notification",
              component: notification,
            },
            { name: "danger", path: "danger", component: danger },
          ],
        },
      ],
    },
    {
      path: "/shipments/create-shipment",
      component: Shipment,
      name: "create-shipment",
      meta: { requiresAuth: true, layout: "ShipmentLayout" },
    },
    {
      path: "/shipments/shipment-type",
      component: PaymentLayout,
      name: "payment",
      meta: { requiresAuth: true },
      children: [
        {
          path: "single-shipment/order-summary",
          component: OrderSummaryView,
          name: "order-summary",
        },

        {
          name: "single-shipment-checkout",
          path: "single-shipment/checkout",
          component: CheckoutComponent,
        },

        {
          name: "bulk-shipment",
          path: "bulk-shipment",
          component: BulkShipment,
        },

        {
          path: "bulk-shipment/checkout",
          component: BulkShipmentCheckout,
          name: "bulk-shipment-checkout",
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !token.isAuthenticated()) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
