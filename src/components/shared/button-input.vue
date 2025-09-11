<template>
  <div class="w-full h-full flex rounded-lg border border-[#D0D5DD]">
    <div class="w-[46px] flex justify-center items-center shrink-0">
      <component :is="buttonIcon" />
    </div>
    <div class="border-l border-l-[#D0D5DD]"></div>
    <div class="w-full flex gap-x-2 items-center px-[14px]">
      <input
        type="text"
        :placeholder="placeholder"
        class="w-full text-sm leading-[120%] tracking-[0%] text-[#56616B] outline-none focus:text-black"
      />
      <copy01 class="shrink-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import copy01 from "@/assets/svgs/copy-01.svg";

defineProps<{
  buttonIcon: any;
  placeholder: string;
}>();
</script>
