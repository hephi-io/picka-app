<template>
  <div class="py-5 px-5">
    <app-bar />

    <div class="flex mt-4">
      <side-bar />
      <settings />
      

      <div class="md:flex-grow lg:pl-6 w-full ">
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
