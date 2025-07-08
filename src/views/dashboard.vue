<script setup lang="ts">
import { animate, stagger } from "motion";
import NewShipment from "@/components/shared/NewShipment.vue";

import { Button } from "@/components/ui/button";
import { onMounted, ref } from "vue";
import { columns } from "@/components/dashboard/column";
import { type Shipping, shippings } from "@/services/index";
import DataTable from "@/components/dashboard/data-table.vue";
import ZPagination from "@/components/shared/z-pagination.vue";
import Money from "@/assets/svgs/money-02.svg";
import Wallet from "@/assets/svgs/wallet-02.svg";
import Plus from "@/assets/svgs/plus-sign-1.svg";
import Withdraw from "@/assets/svgs/withdraw.svg";
import AddCard from "@/assets/svgs/add-card.svg";
import WalletTrend from "@/assets/svgs/wallet-trend.svg";
import ZSearchInput from "@/components/shared/z-search-input.vue";

import { useAuthStore } from "@/stores/auth";
import { getRootUserOrg } from "@/services/orgs";
import { getShipmentOrgs } from "@/services/shipment";
const authStore = useAuthStore();

const data = ref<Shipping[]>([]);

onMounted(async () => {
const { data: orgResponse } = await getRootUserOrg();

const { data: shipmentOrgsResponse } = await getShipmentOrgs(orgResponse.data.id);

// console.log(shipmentOrgsResponse.data, 'shipmentOrgsResponse');

// Ensure data exists and map only required fields
if (shipmentOrgsResponse.data && shipmentOrgsResponse.data.length > 0) {
  data.value = shipmentOrgsResponse.data.map((item: Shipping) => {
    const {
      id,
      recipient_name,
      recipient_email,
      category,
      weight,
      amount,
      status,
      created_at
    } = item;

    return {
      id,
      recipient_name,
      recipient_email,
      category,
      weight,
      amount,
      status,
      created_at
    };
  });


} else {
  // console.warn("No shipment data found.");
}


// Check if the response contains at least one item




  animate(
    ".animation-slide-up",
    { y: [20, 0], opacity: [0, 1] },
    { duration: 0.5, delay: stagger(0.1) }
  );
});
</script>

<template>
  <main>
    <header class="hidden md:flex justify-between mb-10 pt-6 animation-slide-up">
      <div class="">
        <div class="text-sm leading-[14px] tracking-[-3%] text-[#676767] mb-2.5">
          Hello {{ authStore.user?.first_name }},
        </div>

        <h1 class="space-mono font-semibold text-[26px] leading-[26px] tracking-[-3%] text-[#242424]">
          Good Morning
        </h1>
      </div>
      <NewShipment />
    </header>

    <section class="w-full lg:w-[420px] animation-slide-up ">
      <section class="flex flex-col rounded-lg border border-[#E5E5E5] px-5 pt-4 pb-5 bg-[#F9F9F9]">
        <section class="mb-[30px] flex items-center justify-between">
          <Money />

          <WalletTrend />
        </section>

        <div class="text-xs text-[#475467] text-opacity-80 mb-0.5">
          Available balance
        </div>

        <div class="space-mono font-bold text-2xl text-[#101828]">
          40,000 <span class="text-[#9098A3] font-medium text-xs">NGN</span>
        </div>
      </section>

      <section class="flex gap-x-2 md:gap-x-3.5 mt-4">
        <Button
          class="flex-grow  bg-[#F9F9F9] text-[##101828] border border-[#D8D8D8] hover:bg-black hover:border-black hover:text-white">
          <Plus />

          <span class="ml-1.5">Top up</span>
        </Button>

        <Button
          class="flex-grow bg-[#F9F9F9] text-[##101828] border border-[#D8D8D8] hover:bg-black hover:border-black hover:text-white">
          <Withdraw />

          <span class="ml-1.5">Withdraw</span>
        </Button>

        <Button
          class="flex-grow bg-[#F9F9F9] text-[##101828] border border-[#D8D8D8] hover:bg-black hover:border-black hover:text-white">
          <AddCard />

          <span class=" ml-1.5">Add new card</span>
        </Button>
      </section>
    </section>
    <section class="">
      <section class="mt-9   rounded-xl border border-[#E4E7EC] animation-slide-up">
        <section class="px-2 lg:px-6 py-5 flex items-center justify-between ">
          <div class="font-semibold  text-sm md:text-lg">Recent Shipments</div>
          <z-search-input />
        </section>

        <section class="">
          <DataTable :columns="columns" :data="data" />
        </section>

        <section class="hidden h-[68px] md:flex items-center justify-center border-t px-6">
          <z-pagination />
        </section>
      </section>
      <section class="hidden">
        <NewShipment class="" />
      </section>

    </section>
  </main>
</template>

<style scoped></style>
