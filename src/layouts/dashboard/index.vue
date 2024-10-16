<template>
  <div class="py-5 px-5">
    <app-bar />

    <div class="flex mt-4">
      <side-bar />

      <div class="flex-grow pl-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBar from "./components/appbar.vue";
import SideBar from "./components/sidebar.vue";
</script>

<style scoped></style>
