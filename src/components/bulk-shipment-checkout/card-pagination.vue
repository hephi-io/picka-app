<template>
  <div class="flex justify-between items-center">
    <span class="font-medium text-[14.11px] leading-[130%] tracking-[0%] align-middle text-[#373B41]">
      1/3
    </span>
    <div class="w-[56.43px] h-[28.21px] flex rounded-[6.05px] border-[1.01px] border-[#D9D9D9] overflow-hidden">
      <Button variant="ghost" class="w-full h-full rounded-none">
        <chevron-down-sharp />
      </Button>
      <div class="border-l-[1.01px] border-l-[#D9D9D9]" />
      <Button variant="ghost" class="w-full h-full rounded-none">
        <chevron-down-sharp class="rotate-180" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import chevronDownSharp from "@/assets/svgs/chevron-down-sharp.svg"
</script>

<style scoped></style>
