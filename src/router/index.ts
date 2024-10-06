import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import NewAuthPage from "@/components/NewAuthPage.vue";
import OTPVerification from "@/components/OTPVerification.vue";
import OTPVerificationStatus from "@/components/OTPVerificationStatus.vue";
import DashboardPage from "@/components/DashboardPage.vue";
import AuthPage from "@/components/AuthPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthPage,
    },
    {
      path: "/auth",
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
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DashboardPage,
    },
  ],
});

export default router;
