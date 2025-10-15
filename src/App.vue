<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { Toaster } from "./components/ui/toast";
import { ShipmentLayout } from "@/layouts/shipment-layout";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { DefaultLayout } from "@/layouts";
import { ForgotPasswordLayout } from "@/layouts/forgot-password-layout";

const authStore = useAuthStore();
const route = useRoute();

const layouts = {
  ShipmentLayout,
  DashboardLayout,
  DefaultLayout,
  ForgotPasswordLayout,
};

const layout = computed(
  () => layouts[route.meta.layout as keyof typeof layouts] || DefaultLayout
);

onMounted(() => {
  authStore.authenticateUser();
});
</script>

<template>
  <Toaster />

  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
