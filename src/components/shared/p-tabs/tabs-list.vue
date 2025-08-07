<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  tabs: any[];
  activeTab: string;
}>();
</script>

<template>
  <div
    class="bg-[#F5F7FA] h-[42px] rounded-lg flex items-center px-1.5 relative"
  >
    <slot />

    <span
      class="absolute active-tab h-[32px] top-1/2 -translate-y-1/2 bg-white w-[calc(50%-5px)] transition-all duration-300"
      :class="[
        activeTab === 'signup' ? 'left-[5px]' : 'left-[171px] xl:left-[250px]',
      ]"
    ></span>
  </div>
</template>

<style scoped>
.active-tab {
  background-color: #ffffff;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
</style>
