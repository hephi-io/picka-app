<template>
  <Button
    class="w-full gap-x-2 rounded-md border border-[#D8D8D8] px-4 py-[14px]" 
    variant="outline"
  >
    <plus-sign />
    <span class="font-medium text-sm leading-[16.94px] text-[#404D61]">
      Create Another Shipment
    </span>
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import PlusSign from "@/assets/svgs/plus-sign-(1).svg";
</script>

<style scoped></style>
