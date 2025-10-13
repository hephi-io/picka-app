<template>
  <div>
    <h1
      class="font-bold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B] text-center"
    >
      Reset Password
    </h1>
    <p
      class="text-base leading-5 tracking-[0%] text-[#1E1E1E] text-center mt-4"
    >
      Enter your new password
    </p>
    <label
      for="create password"
      class="block font-medium text-base leading-[100%] tracking-[0%] text-[#26203B] mt-[60px]"
    >
      Create new password
    </label>
    <div class="relative h-12 input-shadow overflow-hidden mt-2">
      <input
        type="text"
        placeholder="Create Password"
        name="create password"
        class="w-full h-full rounded-lg border border-[#0F0F0F66] text-sm leading-[100%] tracking-[0%] pl-4 pr-8 py-2"
      />
      <eye-off class="absolute top-4 bottom-4 right-4" />
    </div>
    <label
      for="re-enter password"
      class="block font-medium text-base leading-[100%] tracking-[0%] text-[#26203B] mt-8"
    >
      Re-enter new password
    </label>
    <div class="relative h-12 input-shadow overflow-hidden mt-2">
      <input
        type="text"
        placeholder="Create Password"
        name="re-enter password"
        class="w-full h-full rounded-lg border border-[#0F0F0F66] text-sm leading-[100%] tracking-[0%] pl-4 pr-8 py-2"
      />
      <eye-off class="absolute top-4 bottom-4 right-4" />
    </div>
    <div class="flex gap-x-[9px] items-center mt-2">
      <check />
      <span
        class="text-xs leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]"
      >
        Password Strength : Weak
      </span>
    </div>
    <div class="flex gap-x-[9px] items-center mt-2">
      <check />
      <span
        class="text-xs leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]"
      >
        At least 8 characters
      </span>
    </div>
    <div class="flex gap-x-[9px] items-center mt-2">
      <check />
      <span
        class="text-xs leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]"
      >
        Contains a number or symbol
      </span>
    </div>
    <Button
      class="w-full h-[42px] rounded-md bg-[#1E1E1E] mt-[60px]"
      @click="$router.push('/forgot-password/verification-status')"
    >
      <span class="font-bold text-base leading-[100%] tracking-[0%] text-white">
        Continue
      </span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import check from "@/assets/svgs/orange-check.svg";
import eyeOff from "@/assets/svgs/eye-off.svg";
import { Button } from "@/components/ui/button";
</script>

<style scoped></style>
