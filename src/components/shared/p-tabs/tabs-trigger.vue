<script setup lang="ts">
import { ref } from "vue";
import { motion } from "motion-v";

const props = defineProps<{
  tabs: any[];
  label: string;
  isActive: boolean;
}>();
</script>

<template>
  <div class="w-1/2 relative h-full">
    <button class="relative w-full text-sm font-medium z-30 h-full">
      {{ label }}
    </button>
  </div>
</template>
