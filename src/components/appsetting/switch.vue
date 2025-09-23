<template>
  <div 
    class="w-[39.7px] h-[24.13px] flex items-center rounded-full shrink-0 hover:cursor-pointer"
    :class="[(on) ? 'justify-end bg-[#34C759]' : 'justify-start bg-gray-600']"
    @click="handleClick"
  >
    <div class="w-[21.02px] h-[21.02px] rounded-full bg-white toggle-shadow"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const handleClick = () => {
  on.value = !on.value
}

const on = ref(true)
</script>

<style scoped>
.toggle-shadow {
  box-shadow: 0px 2.34px 0.78px 0px #0000000F;
  box-shadow: 0px 2.34px 6.23px 0px #00000026;
}
</style>
