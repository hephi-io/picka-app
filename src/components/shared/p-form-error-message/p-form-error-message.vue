<template>
  <div class="text-red-500 text-xs mt-1">
    {{ errorMessage }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  errorMessage: string | undefined;
}>();
</script>

<style scoped></style>
