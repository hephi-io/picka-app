<script setup lang="ts">
import { ref } from "vue";

import ChevronLeft from "@/assets/svgs/chevron-down-sharp.svg";
import ArrowForward from "@/assets/svgs/arrow-forward.svg";
import Delete from "@/assets/svgs/delete-03.svg";

import OrderSummary from "@/components/shared/order-summary.vue";
import CreateNewShipment from "@/components/shared/create-new-shipment.vue";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

import { DeliveryInfo } from "./components/delivery-info";
import { ItemDetails } from "./components/item-details";
import { TabsEnum } from "./types";
import { useShipmentForm } from "./composables/use-shipment-form";

const defaultValueTab = ref<string | number>(TabsEnum.DELIVERY_INFO);

const {
  clearForm,
  deliveryInfoForm,
  itemDetailsForm,
  deliveryInfoErrors,
  itemDetailsErrors,
  recipientName,
  pickupLocationAddress,
  pickupLocationLongitude,
  pickupLocationLatitude,
  pickupOption,
  bookingNotes,
  dropOffLocationAddress,
  dropOffLocationLongitude,
  dropOffLocationLatitude,
  deliveryNotes,
  recipientEmail,
  recipientPhone,
  category,
  weight,
  length,
  width,
  height,
} = useShipmentForm();

const handleNext = deliveryInfoForm.handleSubmit(() => {
  defaultValueTab.value = TabsEnum.ITEM_DETAILS;
});

const handleSubmit = async () => {
  try {
    const { valid: deliveryInfoValid } = await deliveryInfoForm.validate();
    const { valid: itemDetailsValid } = await itemDetailsForm.validate();

    if (!deliveryInfoValid || !itemDetailsValid) {
      return;
    }

    const payload = {
      category: itemDetailsForm.values.category,
      drop_off_location: deliveryInfoForm.values.drop_off_location_address,
      drop_off_location_longitude:
        deliveryInfoForm.values.drop_off_location_longitude,
      drop_off_location_latitude:
        deliveryInfoForm.values.drop_off_location_latitude,
      pickup_location: deliveryInfoForm.values.pickup_location_address,
      pickup_option: deliveryInfoForm.values.pickup_option,
      pickup_location_longitude:
        deliveryInfoForm.values.pickup_location_longitude,
      pickup_location_latitude:
        deliveryInfoForm.values.pickup_location_latitude,
      recipient_email: deliveryInfoForm.values.recipient_email,
      recipient_name: deliveryInfoForm.values.recipient_name,
      recipient_phone: deliveryInfoForm.values.recipient_phone,
      weight: itemDetailsForm.values.weight,
      length: itemDetailsForm.values.length,
      width: itemDetailsForm.values.width,
      height: itemDetailsForm.values.height,
    };

    console.log(payload);

    // await createShipment(payload)
  } catch (error) {}
};
</script>

<template>
  <div>
    <header class="flex justify-between">
      <section>
        <button
          class="w-11 h-11 rounded-md border border-[#E5E5E5] p-[14px] transition-all duration-75 ease-in hover:bg-[#E5E5E5] mr-4"
          @click="$router.go(-1)"
        >
          <ChevronLeft />
        </button>

        <span
          class="font-semibold text-xl leading-5 tracking-[-0.03em] text-[#060E1F] text-left"
        >
          Create a new shipment
        </span>
      </section>

      <section class="hidden md:flex gap-x-4 items-center">
        <Button variant="outline">
          <span
            class="font-medium text-sm leading-[16.94px] text-left text-[#404D61] px-3"
          >
            Cancel
          </span>
        </Button>

        <Button
          v-bind="{ type: 'submit', onClick: handleSubmit }"
          class="px-3 py-2"
        >
          Submit
          <ArrowForward class="ml-2" />
        </Button>
      </section>
    </header>

    <main class="md:flex md:justify-between md:items-start mt-8 mb-20 md:mb-0">
      <div
        class="rounded-xl border border-[#E4E7EC] bg-white shadow-sm shadow-[#1018280D] md:w-[53.31%] lg:w-[70%] py-4"
      >
        <Accordion
          type="single"
          default-value="item-1"
          :collapsible="false"
          class="p-0 m-0"
        >
          <AccordionItem value="item-1" class="px-6 pb-6 m-0">
            <AccordionTrigger class="p-0 m-0">
              <h2
                class="font-semibold text-base leading-7 text-[#101828] text-left"
              >
                Shipment item 1
              </h2>
            </AccordionTrigger>

            <AccordionContent class="p-0 mt-4">
              <Tabs
                :default-value="TabsEnum.DELIVERY_INFO"
                v-model="defaultValueTab"
              >
                <TabsList
                  class="w-full lg:w-[373.99px] justify-start rounded-lg p-[5px] bg-[#F5F7FA]"
                >
                  <TabsTrigger :value="TabsEnum.DELIVERY_INFO" class="w-1/2">
                    Delivery Info
                  </TabsTrigger>

                  <TabsTrigger :value="TabsEnum.ITEM_DETAILS" class="w-1/2">
                    Item details
                  </TabsTrigger>
                </TabsList>

                <TabsContent :value="TabsEnum.DELIVERY_INFO" class="px-1 mt-8">
                  <delivery-info
                    v-model:recipientName="recipientName"
                    v-model:pickupLocationAddress="pickupLocationAddress"
                    v-model:pickupLocationLongitude="pickupLocationLongitude"
                    v-model:pickupLocationLatitude="pickupLocationLatitude"
                    v-model:pickupOption="pickupOption"
                    v-model:bookingNotes="bookingNotes"
                    v-model:dropOffLocationAddress="dropOffLocationAddress"
                    v-model:dropOffLocationLongitude="dropOffLocationLongitude"
                    v-model:dropOffLocationLatitude="dropOffLocationLatitude"
                    v-model:deliveryNotes="deliveryNotes"
                    v-model:recipientEmail="recipientEmail"
                    v-model:recipientPhone="recipientPhone"
                    :errors="deliveryInfoErrors"
                  />
                </TabsContent>

                <TabsContent
                  :value="TabsEnum.ITEM_DETAILS"
                  class="px-1 pb-1 mt-8"
                >
                  <item-details
                    v-model:category="category"
                    v-model:weight="weight"
                    v-model:length="length"
                    v-model:width="width"
                    v-model:height="height"
                    :errors="itemDetailsErrors"
                  />
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div class="flex justify-between items-center px-6 mt-3">
          <section class="flex gap-x-2 items-center">
            <Checkbox id="save" class="border border-[#DEE1E1]" />

            <Label
              for="save"
              class="font-normal text-xs leading-5 text-[#8E9798]"
            >
              Save This Contact Info.
            </Label>
          </section>

          <section class="flex gap-x-2 items-center">
            <Button variant="ghost" class="gap-x-1" as-child>
              <button @click="clearForm">
                <Delete />

                <span
                  class="font-semibold text-[13px] leading-5 text-[#FA3105]"
                >
                  Clear form
                </span>
              </button>
            </Button>

            <Button
              v-if="defaultValueTab !== TabsEnum.ITEM_DETAILS"
              as-child
              variant="secondary"
              class="px-6 py-2 bg-[#E8EAEA] border border-[#D0D5DD] shadow-sm shadow-[#1018280D]"
            >
              <button @click="handleNext">
                <span
                  class="font-semibold text-[13px] leading-5 text-[#344054]"
                >
                  Next
                </span>
              </button>
            </Button>
          </section>
        </div>
      </div>

      <div class="hidden md:block md:w-[44.66%] lg:w-[28.85%]">
        <order-summary />

        <create-new-shipment class="mt-4" />
      </div>
    </main>

    <footer
      class="fixed right-0 left-0 bottom-0 flex justify-center border-t-[0.4px] border-t-[#DAD8D9] bg-white md:hidden py-2"
    >
      <Button class="w-[81.52%] rounded-md bg-[#1E1E1E] mx-auto" as-child>
        <button @click="$router.push({ name: 'order-summary' })">
          <span class="font-semibold text-sm leading-[16.8px] text-white">
            Continue
          </span>
        </button>
      </Button>
    </footer>
  </div>
</template>

<style lang="css" scoped></style>
