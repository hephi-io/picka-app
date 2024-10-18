<script setup lang="ts">
import { onMounted, ref } from "vue";
import { animate, stagger } from "motion";

import { columns } from "@/components/dashboard/column";
import { type Shipping, shippings } from "@/services/index";
import DataTable from "@/components/dashboard/data-table.vue";
import WeekButton from "@/components/dashboard-components/shipments-components/week-button.vue";
import NewShipment from "@/components/shared/NewShipment.vue";
import ShipmentCard from "@/components/dashboard-components/shipments-components/shipment-card.vue";
import ZPagination from "@/components/shared/z-pagination.vue";

const data = ref<Shipping[]>([]);

async function getData(): Promise<Shipping[]> {
  return shippings;
}

onMounted(async () => {
  data.value = await getData();

  animate(
    ".animation-slide-up",
    { y: [20, 0], opacity: [0, 1] },
    { duration: 0.5, delay: stagger(0.1) }
  );
});
</script>

<template>
  <main>
    <header
      class="flex justify-between items-center mb-10 pt-4 animation-slide-up"
    >
      <h1
        class="space-mono font-semibold text-[26px] leading-[26px] tracking-[-3%] text-[#242424]"
      >
        Shipments
      </h1>

      <section class="flex gap-x-4">
        <WeekButton />

        <NewShipment />
      </section>
    </header>

    <section class="flex justify-between mb-10 animation-slide-up">
      <shipment-card
        image-url="/src/assets/svgs/package.svg"
        title="Total shipment"
      >
        <div class="flex">
          <section class="mr-[15px]">
            <span
              class="font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]"
            >
              19,329
            </span>
          </section>

          <section class="flex items-center">
            <section class="h-[41%] flex items-center mr-[6px]">
              <img src="/src/assets/svgs/arrow-up.svg" />
            </section>

            <section class="flex items-center">
              <div>
                <span class="font-semibold text-xs leading-3 text-[#307AE4]">
                  758
                </span>
                <span
                  class="font-normal text-[11px] leading-[11px] text-[#8B9293]"
                >
                  Items
                </span>
              </div>
            </section>
          </section>
        </div>
      </shipment-card>

      <shipment-card
        image-url="/src/assets/svgs/delivery-truck-01.svg"
        title="In transit"
      >
        <span
          class="font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]"
        >
          12,000
        </span>
      </shipment-card>

      <shipment-card
        image-url="/src/assets/svgs/package-process.svg"
        title="Pending packages"
      >
        <span
          class="font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]"
        >
          800
        </span>
      </shipment-card>

      <shipment-card
        image-url="/src/assets/svgs/delivery-box-02.svg"
        title="Delivered"
      >
        <span
          class="font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]"
        >
          657
        </span>
      </shipment-card>
    </section>

    <section class="rounded-xl border border-[#E4E7EC] animation-slide-up">
      <section class="px-6 py-6 flex items-center">
        <div class="font-semibold">Recent Orders</div>
      </section>

      <section>
        <DataTable :columns="columns" :data="data" />
      </section>

      <section class="h-[68px] flex items-center justify-center border-t px-4">
        <z-pagination />
      </section>
    </section>
  </main>
</template>

<style scoped></style>
