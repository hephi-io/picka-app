<template>
  <div>
    <h1
      class="font-bold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B] text-center"
    >
      Verification Status
    </h1>
    <p
      class="text-base leading-5 tracking-[0%] text-[#1E1E1E] text-center mt-4"
    >
      Verification successful. Experience the efficiency of Zipkod. Click
      'Login' to access your dashboard.
    </p>
    <div class="w-[166px] h-[183.63px] mx-auto mt-[60px]">
      <img :src="success" alt="success" class="w-full h-full object-cover" />
    </div>
    <Button
      class="w-full h-[42px] rounded-md bg-[#1E1E1E] mt-[60px]"
      @click="$router.push('/')"
    >
      <span class="font-bold text-base leading-[100%] tracking-[0%] text-white">
        Go to Dashboard
      </span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import success from "@/assets/gifs/success.gif";
import { Button } from "@/components/ui/button";
</script>

<style scoped></style>
