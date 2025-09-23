<template>
  <Button 
    variant="outline" 
    class="w-11 h-11 rounded-md border border-[#E5E5E5]"
    @click="$router.go(-1)"
  >
    <chevron-down-sharp />
  </Button>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import chevronDownSharp from "@/assets/svgs/chevron-down-sharp.svg"
</script>

<style scoped></style>
