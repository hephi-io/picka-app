<template>
  
    <div class="flex flex-col ">
       <header class="py-[12px]  mb-[32px]">
        <h3 class="font-inter font-semibold text-2xl  leading-6 tracking-[-0.03em] text-[#060E1F]">
            Settings
        </h3>
    </header>
    <div class="flex max-w-[1275px] h-[1161.2px] mt-2">


        <side-bar />
      <!-- </div> -->
      

      <div class="md:flex-grow lg:pl-6 w-full  ">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/sidebar.vue";
</script>

<style scoped></style>
