<script setup lang="ts">
import AppBar from "@/layouts/components/appbar.vue";
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
