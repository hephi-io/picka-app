<template>
  <div
    class="w-full h-full flex rounded border border-[#D4D4D4] overflow-hidden"
  >
    <div class="w-9 h-full flex justify-center items-center shrink-0">
      <SearchIcon />
    </div>
    <!-- <Input placeholder="Search..." class="filson-pro w-full pl-[34px]" /> -->
    <input
      type="search"
      placeholder="Search..."
      class="w-full h-full text-sm leading-[14px] -tracking-[3%] text-[#C9C8CF] focus:text-black outline-none"
    />
    <div class="w-9 h-full flex justify-center items-center shrink-0 md:hidden">
      <funnel-icon />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from "@/components/shared/search.vue";
import FunnelIcon from "@/assets/svgs/funnel-icon.svg"
</script>

<style scoped></style>
