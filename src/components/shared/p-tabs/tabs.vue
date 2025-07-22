<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  tabs: any[];
}>();
</script>

<template>
  <slot />
</template>
