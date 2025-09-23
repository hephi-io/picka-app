<script setup lang="ts">
defineProps<{ imageUrl?: string; title: string; icon: any }>();
</script>

<template>
  <div
    class="rounded-lg border border-[#E4E7EC] bg-[#F9F9F9] px-3 py-4 lg:px-5 lg:py-[22px]"
  >
    <section class="mb-[30px]">
      <component :is="icon" />
    </section>
    <section class="mb-2">
      <span
        class="font-medium text-xs leading-[100%] tracking-[-3%] text-[#8B9293]"
      >
        {{ title }}
      </span>
    </section>
    <slot />
  </div>
</template>

<style lang="css" scoped></style>
