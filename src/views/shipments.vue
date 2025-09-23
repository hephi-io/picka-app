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
import ArrowUp from "@/assets/svgs/arrow-up.svg";
import FunnelSimple from "@/assets/svgs/FunnelSimple.svg";
import Upload from "@/assets/svgs/upload-03.svg";
import VerticalDots from "@/assets/svgs/dots-vertical.svg";
import ZSearchInput from "@/components/shared/z-search-input.vue";
import Package from "@/assets/svgs/package.svg";
import DeliveryTruck from "@/assets/svgs/delivery-truck-01.svg";
import PackageProcess from "@/assets/svgs/delivery-box-02.svg";
import DeliveryBox from "@/assets/svgs/delivery-box-02.svg";
import FilterDropdown from "@/components/shipments/filter-dropdown.vue";
import { getRootUserOrg } from "@/services/orgs";
import { getShipmentOrgs } from "@/services/shipment";

const data = ref<Shipping[]>([]);

onMounted(async () => {
  const { data: orgResponse } = await getRootUserOrg();
  const { data: shipmentOrgsResponse } = await getShipmentOrgs(
    orgResponse.data.id
  );
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
        created_at,
      } = item;

      return {
        id,
        recipient_name,
        recipient_email,
        category,
        weight,
        amount,
        status,
        created_at,
      };
    });
  }
  animate(
    ".animation-slide-up",
    { y: [20, 0], opacity: [0, 1] },
    { duration: 0.5, delay: stagger(0.1) }
  );
});
</script>

<template>
  <main>
    <header class="flex justify-between items-center animation-slide-up">
      <h1
        class="font-semibold text-lg leading-[100%] tracking-[-3%] text-[#060E1F] md:text-2xl"
      >
        Shipments
      </h1>
      <section class="hidden gap-x-4 md:flex">
        <WeekButton />
        <NewShipment />
      </section>
      <div class="md:hidden">
        <filter-dropdown />
      </div>
    </header>
    <section
      class="grid grid-cols-2 gap-2 animation-slide-up md:grid-cols-4 md:gap-4 mt-6 md:mt-9"
    >
      <shipment-card :icon="Package" title="Total shipment">
        <div class="flex gap-x-[15px] items-end">
          <span
            class="font-bold text-2xl leading-[100%] tracking-[-3%] text-[#242424]"
          >
            19,329
          </span>
          <div class="flex gap-x-1.5 items-end">
            <ArrowUp class="relative bottom-1.5" />
            <div>
              <span
                class="font-semibold text-xs leading-[100%] -tracking-[3%] text-[#307AE4]"
              >
                758
              </span>
              <span
                class="text-[11px] leading-[100%] -tracking-[3%] text-[#8B9293]"
              >
                Items
              </span>
            </div>
          </div>
        </div>
      </shipment-card>
      <shipment-card :icon="DeliveryTruck" title="In transit">
        <span
          class="font-bold text-2xl leading-[100%] tracking-[-3%] text-[#242424]"
        >
          12,000
        </span>
      </shipment-card>
      <shipment-card :icon="PackageProcess" title="Pending packages">
        <span
          class="font-bold text-2xl leading-[100%] tracking-[-3%] text-[#242424]"
        >
          800
        </span>
      </shipment-card>
      <shipment-card :icon="DeliveryBox" title="Delivered">
        <span
          class="font-bold text-2xl leading-[100%] tracking-[-3%] text-[#242424]"
        >
          657
        </span>
      </shipment-card>
    </section>
    <section
      class="rounded-xl border border-[#E4E7EC] animation-slide-up mt-4 md:mt-9"
    >
      <section
        class="flex items-center justify-between border-b border-b-[#E4E7EC] px-6 py-5"
      >
        <div
          class="hubot-sans font-semibold text-base leading-7 tracking-[0%] text-[#101828]"
        >
          Recent Shipments
        </div>
        <z-search-input />
      </section>
      <section>
        <DataTable :columns="columns" :data="data" />
      </section>
      <section
        class="h-[68px] flex items-center justify-center border-t border-t-[#E4E7EC] px-1 md:px-6"
      >
        <z-pagination />
      </section>
    </section>
    <section
      class="h-[54px] flex justify-center items-center border-t-[0.4px] border-t-[#DAD8D9] md:hidden mt-2"
    >
      <NewShipment />
    </section>
  </main>
</template>

<style scoped></style>
