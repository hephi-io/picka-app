<template>
  <div
    class="w-full h-full rounded-lg bg-gradient-to-br from-[#43352A] to-[#3B5EB9] py-4"
  >
    <div class="w-[90.09%] h-full flex flex-col justify-between mx-auto">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-[15.07px] text-white">Sterling Bank</h1>
        <card-logo />
      </div>
      <span
        class="hubot-sans font-bold text-[22.6px] leading-[30.13px] tracking-normal align-middle text-white"
      >
        **** **** **** 0329
      </span>
      <div class="flex justify-between items-center">
        <div v-for="detail in details" :key="detail.id">
          <h1
            class="text-[9.16px] leading-[13.74px] tracking-normal align-middle text-[#FFFFFFB2]"
          >
            {{ detail.header }}
          </h1>
          <span
            class="font-bold text-[10.68px] leading-[15.26px] tracking-normal align-middle text-white"
          >
            {{ detail.text }}
          </span>
        </div>
        <card-type-logo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardLogo from "@/components/wallet/card-logo.vue";
import CardTypeLogo from "@/components/wallet/card-type-logo.vue";

const details = [
  { id: 1, header: "Card Holder Name", text: "HILLERY NEVELIN" },
  { id: 2, header: "Expired Date", text: "10/28" },
];
</script>

<style scoped></style>
