<script setup>
import { useAuthStore } from "@/stores/auth";


const authStore = useAuthStore();
</script>

<template>
  <div>

    <section class="mb-2">
      <!-- <span>{{ `Hi ${person.firstName}` }}</span> -->
      <span class="space-mono font-medium text-sm leading-[14px] tracking-[-3%] text-[#676767]">
        Hi {{ authStore.user?.first_name }},
      </span>
    </section>

    <section>
      <!-- <span>{{ `Good ${timeOfDay}` }}</span> -->
      <span class="space-mono font-semibold text-[26px] leading-[26px] tracking-[-3%] text-[#242424]">
        Good Morning
      </span>
    </section>

  </div>
</template>

<style scoped>
</style>