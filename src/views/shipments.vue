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
import { getRootUserOrg } from "@/services/orgs";
import { getShipmentOrgs } from "@/services/shipment";

const data = ref<Shipping[]>([]);


onMounted(async () => {
  const { data: orgResponse } = await getRootUserOrg();
  const { data: shipmentOrgsResponse } = await getShipmentOrgs(orgResponse.data.id);
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
    <header class="flex justify-between items-center mb-10 pt-4 animation-slide-up">
      <h1 class="space-mono font-semibold text-[26px] leading-[26px] tracking-[-3%] text-[#242424]">
        Shipments
      </h1>

      <section class=" hidden md:flex gap-x-4">
        <WeekButton />

        <NewShipment />
      </section>
    </header>

    <section class="flex justify-between  mb-10 animation-slide-up  gap-3.5 md:gap-4 flex-wrap md:flex-nowrap">
      <shipment-card :icon="Package" title="Total shipment" class=" flex-1 shrink-0 relative">
        <div class="flex">
          <section class="mr-[15px]">
            <span class="space-mono font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
              19,329
            </span>
          </section>

          <section class="flex items-center absolute top-5 right-2  md:relative md:top-0 md:right-0 ">
            <section class="h-[41%] flex items-center mr-[6px]">
              <ArrowUp />
            </section>

            <section class="flex items-center ">
              <div>
                <span class="space-mono font-semibold text-xs leading-3 text-[#307AE4]">
                  758
                </span>
                <span class="font-normal text-[11px] leading-[11px] text-[#8B9293]">
                  Items
                </span>
              </div>
            </section>
          </section>
        </div>
      </shipment-card>

      <shipment-card :icon="DeliveryTruck" title="In transit" class=" flex-1 shrink-0">
        <span class="space-mono font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
          12,000
        </span>
      </shipment-card>

      <shipment-card :icon="PackageProcess" title="Pending packages" class="flex-1 shrink-0">
        <span class="space-mono font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
          800
        </span>
      </shipment-card>

      <shipment-card :icon="DeliveryBox" title="Delivered" class="flex-1 shrink-0 ">
        <span class="space-mono font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
          657
        </span>
      </shipment-card>
    </section>

    <section class="rounded-xl border border-[#E4E7EC] animation-slide-up">
      <section class="px-6 py-5 flex items-center justify-between">
        <div class="font-semibold text-lg text-[#101828]">Recent Shipments</div>

        <z-search-input />
      </section>

      <section>
        <DataTable :columns="columns" :data="data" />
      </section>

      <section class=" hidden h-[68px] md:flex items-center justify-center border-t px-6">
        <z-pagination />
      </section>
    </section>

  </main>
</template>

<style scoped></style>
