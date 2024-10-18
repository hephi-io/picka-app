<script setup lang="ts">
import { onMounted, ref } from "vue";
import { columns } from "@/components/dashboard/column";
import { type Shipping, shippings } from "@/services/index";
import DataTable from "@/components/dashboard/data-table.vue";
import WeekButton from "@/components/dashboard-components/shipments-components/week-button.vue";
import NewShipment from "@/components/dashboard-components/mainsection-components/NewShipment.vue";
import ShipmentCard from "@/components/dashboard-components/shipments-components/shipment-card.vue";
import ZPagination from "@/components/shared/z-pagination.vue";

const data = ref<Shipping[]>([]);

async function getData(): Promise<Shipping[]> {
  return shippings;
}

onMounted(async () => {
  data.value = await getData();
});
</script>

<template>
  <main class="">
    <div>
      <header class="flex justify-between items-center mb-[52px]">
        <h1 class="space-mono font-semibold text-2xl">Shippings</h1>

        <section class="flex">
          <section class="flex mr-4">
            <WeekButton />
          </section>

          <section>
            <NewShipment />
          </section>
        </section>
      </header>

      <section>
        <section class="flex justify-between mb-6">
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
                    <span
                      class="font-semibold text-xs leading-3 text-[#307AE4]"
                    >
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

        <section
          class="rounded-xl rounded-b-none border border-[#E4E7EC] bg-white"
        >
          <section>
            <div class="h-[79px] px-6 py-5">
              <div class="flex h-full">
                <section class="w-[45.67%] h-full flex items-center mr-4">
                  <span
                    class="inter-semibold font-semibold text-lg text-[#101828]"
                  >
                    Recent Orders
                  </span>
                </section>

                <section class="flex w-[46.44%] mr-4">
                  <section class="w-[45.33%] mr-[53px]">
                    <!-- <input type="search" placeholder="Search..." class="h-[38px] w-full rounded border border-[#D4D4D4] p-[10px]"> -->
                  </section>

                  <section class="flex">
                    <button
                      class="flex rounded border border-[#E4E4E4EE] mr-4 px-3 py-2"
                    >
                      <section class="h-full flex items-center mr-2">
                        <img src="/src/assets/svgs/FunnelSimple.svg" />
                      </section>

                      <section
                        class="inter-medium font-medium text-sm leading-[21px] text-[#404D61]"
                      >
                        <span> Sort By </span>
                      </section>
                    </button>

                    <button
                      class="flex rounded border border-[#E4E4E4EE] px-3 py-2"
                    >
                      <section class="h-full flex items-center mr-2">
                        <img src="/src/assets/svgs/upload-03.svg" />
                      </section>

                      <section
                        class="inter-medium font-medium text-sm leading-[21px] text-[#404D61]"
                      >
                        <span> Export csv </span>
                      </section>
                    </button>
                  </section>
                </section>

                <button class="h-full flex items-center">
                  <img src="/src/assets/svgs/dots-vertical.svg" />
                </button>
              </div>
            </div>
          </section>

          <section>
            <DataTable :columns="columns" :data="data" />
            <z-pagination />
          </section>
        </section>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
