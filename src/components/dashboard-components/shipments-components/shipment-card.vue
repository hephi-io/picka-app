<script setup lang="ts">
defineProps<{imageUrl: string; title: string}>()

</script>

<template>
  <div class="w-[23.58%] rounded-lg px-5 py-[22px] bg-[#F9F9F9] border border-[#E4E7EC]">

    <section class="mb-[30px]">
      <img :src="imageUrl" />
    </section>

    <section>
      
      <section class="mb-2">
        <span
          class="font-medium text-xs leading-3 tracking-[-3%] text-[#8B9293]"
        >
          {{ title }}
        </span>
      </section>

      <slot />
      
    </section>

  </div>
</template>

<style lang="css" scoped></style>