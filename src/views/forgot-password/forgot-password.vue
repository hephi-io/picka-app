<template>
  <div>
    <h1
      class="font-bold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B] text-center"
    >
      Forget Password
    </h1>
    <p
      class="text-base leading-5 tracking-[0%] text-[#1E1E1E] text-center mt-4"
    >
      Enter your email address linked to your account to reset password
    </p>
    <label
      for="email or password"
      class="block font-medium text-base leading-[100%] tracking-[0%] text-[#26203B] mt-[60px]"
    >
      Email Address
    </label>
    <input
      type="text"
      placeholder="Your Email / phone number"
      name="email or password"
      class="block w-full h-12 rounded-lg border border-[#0F0F0F66] input-shadow text-sm leading-[100%] tracking-[0%] px-4 py-2 mt-2"
    />
    <Button 
      class="w-full h-[42px] rounded-md bg-[#1E1E1E] mt-[60px]"
      @click="$router.push('/forgot-password/verification')"
    >
      <span class="font-bold text-base leading-[100%] tracking-[0%] text-white">
        Continue
      </span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
</script>

<style scoped>
.input-shadow {
  box-shadow: 0px 4px 8px 0px #465ff11a;
}
</style>
