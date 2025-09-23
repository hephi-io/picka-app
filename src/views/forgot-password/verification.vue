<template>
  <div>
    <h1
      class="font-bold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B] text-center"
    >
      Verification
    </h1>
    <p
      class="text-base leading-5 tracking-[0%] text-[#1E1E1E] text-center mt-4"
    >
      An OTP has been sent to the email address linked to your account.
    </p>
    <div class="h-[62px] grid grid-cols-6 gap-4 mt-[60px]">
      <input
        type="number"
        class="rounded-lg bg-[#F1F0EF] text-center align-middle outline-none focus:border focus:border-[#E3573E] focus:bg-white"
      />
      <input
        type="number"
        class="rounded-lg bg-[#F1F0EF] text-center align-middle outline-none focus:border focus:border-[#E3573E] focus:bg-white"
      />
      <input
        type="number"
        class="rounded-lg bg-[#F1F0EF] text-center align-middle outline-none focus:border focus:border-[#E3573E] focus:bg-white"
      />
      <input
        type="number"
        class="rounded-lg bg-[#F1F0EF] text-center align-middle outline-none focus:border focus:border-[#E3573E] focus:bg-white"
      />
      <input
        type="number"
        class="rounded-lg bg-[#F1F0EF] text-center align-middle outline-none focus:border focus:border-[#E3573E] focus:bg-white"
      />
      <input
        type="number"
        class="rounded-lg bg-[#F1F0EF] text-center align-middle outline-none focus:border focus:border-[#E3573E] focus:bg-white"
      />
    </div>
    <div class="flex justify-between items-center mt-[60px]">
      <Button
        variant="secondary" 
        class="h-6 gap-x-1 rounded-full bg-[#F4F4F4] px-2"
      >
        <refresh />
        <span class="text-xs leading-[100%] tracking-[0%] text-[#26203B]">
          Resend code
        </span>
      </Button>
      <span class="font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#FA3507]">
        00.30s
      </span>
    </div>
    <Button 
      class="w-full h-[42px] rounded-md bg-[#1E1E1E] mt-[60px]"
      @click="$router.push('/forgot-password/reset-password')"
    >
      <span class="font-bold text-base leading-[100%] tracking-[0%] text-white">
        Verify account
      </span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Refresh from "@/assets/svgs/refresh-circle-outline.svg"
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
