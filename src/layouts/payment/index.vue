<script setup lang="ts">
import { ref } from "vue";

import { useRoute, useRouter } from "vue-router";
import AppBar from '@/layouts/dashboard/components/appbar.vue';

const route = useRoute();
const router = useRouter();
const path = ref(route.params.name);

if (path.value === "single") {
  router.push("/single-shipment");
} else if (path.value === "bulk") {
  router.push("/bulk-shipment");
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