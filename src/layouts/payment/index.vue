<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import AppBar from '@/layouts/dashboard/components/appbar.vue';

const route = useRoute();
const router = useRouter();
const path = route.params.name;

if (path === "single") {
  router.push("/single-shipment")
} else if (path === "bulk") {
  router.push("/bulk-shipment")
} else if (path === "checkout") {
  router.push("/checkout")
}
</script>

<template>
  <div class="p-6">

    <app-bar />

    <main class="mt-4">
      <router-view />
    </main>

  </div>
</template>

<style lang="css" scoped></style>