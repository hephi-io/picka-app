<template>
  <div class="p-4">
    <appbar />
    <div class="mt-7 md:mt-4 lg:mt-6">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Appbar from "@/layouts/dashboard/components/appbar.vue";
import Footer from "@/layouts/checkout/components/footer.vue";
</script>

<style scoped></style>