<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <picka-logo
      class="w-[91px] h-8 text-[#1E1E1E] hover:cursor-pointer mx-auto"
    />

    <div class="w-[640px] rounded-2xl border border-[#DFDFDF] p-12 mt-10">
      <router-view />
    </div>
  </div>

  <footer
    class="fixed right-8 left-8 bottom-8 flex justify-between items-center"
  >
    <span class="text-sm leading-[150%] tracking-[0%] text-[#4F4D55]"
      >©2024 Zipkod.ng</span
    >
    <span class="text-sm leading-[150%] tracking-[0%] text-[#4F4D55]"
      >Privacy policy</span
    >
  </footer>
</template>

<script setup lang="ts">
import PickaLogo from "@/components/shared/picka-logo.vue";
</script>

<style scoped></style>
