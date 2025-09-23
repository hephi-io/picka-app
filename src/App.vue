<script setup>
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";
import { Toaster } from "./components/ui/toast";

const authStore = useAuthStore();

onMounted(() => {
  authStore.authenticateUser();
});
</script>

<template>
  <Toaster />

  <RouterView></RouterView>
</template>

<style scoped></style>
