<template>
  <div class="p-4 md:p-6 lg:p-5">
    <app-bar />
    <div class="flex mt-7 lg:mt-4">
      <side-bar />
      <div class="lg:pl-6 w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBar from "./components/appbar.vue";
import SideBar from "./components/sidebar.vue";
//md:flex-grow
</script>

<style scoped></style>
