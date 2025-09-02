<script setup>
import { ref } from "vue";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from "@/components/ui/button";
import OrderInfoIcon from "@/assets/svgs/order-info-icon.svg";
import DriverInfoIcon from "@/assets/svgs/driver-info-icon.svg";
import CustomerInfoIcon from "@/assets/svgs/customer-info-icon.svg";
import CopyTwo from "@/assets/svgs/copy-02.svg";
import CustomerInfo from "@/views/customer-info.vue";
import DriverInfo from "@/views/driver-info.vue";
import OrderInfo from "@/views/Order-Info.vue";



const props = defineProps({
  currentShipment: Object
});



const customerinfo = props.currentShipment

const selectedVerticalTab = ref("order-info");
const verticalTabValues = ["order-info", "driver-info", "customer-info"];
const [verticalTabValue1, verticalTabValue2, verticalTabValue3] = verticalTabValues;
const selectedVerticalTabStyle = "w-full block rounded p-2 mt-4 info";
const notSelectedVerticalTabStyle = "w-full block rounded p-2 mt-4";


const selectVerticalTab = (value) => {
  selectedVerticalTab.value = value;
}


</script>

<template>
  <Tabs :default-value="verticalTabValue1"
    class=" w-full bottom-0 md:left-4  absolute  md:bottom-4   md:w-[500px] lg:w-[528px] ml-0  h-[280px] flex gap-x-4 p-4  rounded-lg  bg-white"
    orientation="vertical">

    <TabsList class="md:w-[159px] block bg-white md:pr-4 border-r rounded-none ">

      <TabsTrigger :value="verticalTabValue1"
        :class="selectedVerticalTab === verticalTabValue1 ? selectedVerticalTabStyle : notSelectedVerticalTabStyle"
        @click="selectVerticalTab(verticalTabValue1)">
        <div class="flex gap-x-2 items-center">
          <order-info-icon />
          <span class="font-medium text-sm text-[#757575]">
            Order Info
          </span>
        </div>
      </TabsTrigger>

      <TabsTrigger :value="verticalTabValue2"
        :class="selectedVerticalTab === verticalTabValue2 ? selectedVerticalTabStyle : notSelectedVerticalTabStyle"
        @click="selectVerticalTab(verticalTabValue2)">
        <div class="flex gap-x-2 items-center">
          <driver-info-icon />
          <span class="font-medium text-sm text-[#757575]">
            Driver Info
          </span>
        </div>
      </TabsTrigger>

      <TabsTrigger :value="verticalTabValue3"
        :class="selectedVerticalTab === verticalTabValue3 ? selectedVerticalTabStyle : notSelectedVerticalTabStyle"
        @click="selectVerticalTab(verticalTabValue3)">
        <div class="flex gap-x-2 items-center">
          <customer-info-icon />
          <span class="font-medium text-sm text-[#757575]">
            Customer Info
          </span>
        </div>
      </TabsTrigger>

    </TabsList>

    <TabsContent value="order-info" class="m-0">
      <OrderInfo  :customerinfo="customerinfo" />
    </TabsContent>

    <TabsContent value="driver-info" class="m-0 p-0 w-full lg:w-auto">
      <DriverInfo />
    </TabsContent>

    <TabsContent value="customer-info" class="m-0 p-0 w-full lg:w-auto">
      <CustomerInfo :customerinfo="customerinfo" />
    </TabsContent>

  </Tabs>
</template>

<style scoped>
.info {
  background-color: #F0F0F0;

  span {
    color: #060E1F;
  }
}
</style>