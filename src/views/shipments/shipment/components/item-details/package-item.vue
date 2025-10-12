<template>
  <div
    class="h-[178.01px] rounded-xl border border-[#D9D9D9] bg-[#F7F8FA] py-4 cursor-pointer"
    :class="{ 'bg-[#FFFBF8] border-[#F1C49B]': selected }"
    @click="$emit('click', value)"
  >
    <p
      class="font-semibold text-xs leading-[15.6px] text-center text-[#101828]"
    >
      {{ label }}
    </p>

    <p class="font-normal text-center text-xs text-[#101828]">
      {{ dimensions }}
    </p>

    <div class="flex justify-center items-center mt-7">
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
  dimensions: string;
  selected: boolean;
}>();

const emit = defineEmits<{
  (e: "click", value: string): void;
}>();
</script>

<style scoped></style>
