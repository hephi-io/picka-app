<template>
  <div>
    <header class="hidden py-[12px] md:block">
      <h3 class="font-semibold text-2xl leading-[100%] tracking-[-3%] text-[#060E1F]">
        Settings
      </h3>
    </header>
    <div class="md:flex md:mt-9">
      <div class="hidden w-[248px] min-h-screen shrink-0 md:block">
        <side-bar />
      </div>
      <div class="w-full md:pl-8 md:py-4 lg:pl-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/sidebar.vue";
</script>

<style scoped></style>
