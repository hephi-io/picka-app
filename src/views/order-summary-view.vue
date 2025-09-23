<template>
  <div>
    <div class="flex justify-between items-center">
      <back-button />
      <h1
        class="font-semibold text-lg leading-[100%] -tracking-[3%] text-[#060E1F]"
      >
        Complete shipment
      </h1>
      <div class="w-11 h-11" />
    </div>
    <order-summary class="mt-6" />
    <create-new-shipment class="mt-4 mb-20" />
    <footer
      class="fixed right-0 left-0 bottom-0 flex justify-center border-t-[0.4px] border-t-[#DAD8D9] bg-white py-2"
    >
      <div class="w-[81.52%]">
        <Button
          class="w-full h-[38px] rounded-md bg-[#1E1E1E]"
          @click="$router.push({ name: 'single-shipment-checkout' })"
        >
          <span
            class="font-medium text-[15px] leading-[100%] tracking-[0%] text-white"
          >
            Submit
          </span>
        </Button>
        <Button
          variant="outline"
          class="w-full h-[38px] rounded-md border border-[#D8D8D8] mt-2"
          @click="$router.push({ name: 'single-shipment' })"
        >
          <span
            class="font-medium text-[15px] leading-[100%] tracking-[0%] text-[#1E1E1E]"
          >
            Create Another Shipment
          </span>
        </Button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import OrderSummary from "@/components/shared/order-summary.vue";
import BackButton from "@/components/shared/back-button.vue";
import CreateNewShipment from "@/components/shared/create-new-shipment.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<style scoped></style>
