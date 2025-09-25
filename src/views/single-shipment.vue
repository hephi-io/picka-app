<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import ChevronLeft from "@/assets/svgs/chevron-down-sharp.svg";
import ArrowForward from "@/assets/svgs/arrow-forward.svg";
import Delete from "@/assets/svgs/delete-03.svg";
import ParcelBox from "@/assets/svgs/parcel-box-package-icon.svg";
import MediumBox from "@/assets/svgs/medium-size-box.svg";
import MiniBox from "@/assets/svgs/mini-size-box.svg";

import OrderSummary from "@/components/shared/order-summary.vue";
import FlagDropdown from "@/components/shared/flag-dropdown.vue";
import CreateNewShipment from "@/components/shared/create-new-shipment.vue";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";

const defaultValueTab = ref("delivery-info");
const handleActiveTab = () => {
  defaultValueTab.value = "item-details";
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { createShipment } from "@/services/shipment";
const router = useRouter();
const singleshipment = ref({
  amount: 300,
  category: "",
  description: "",
  drop_off_location: "",
  pickup_location: "",
  pickup_option: "",
  recipient_address: "",
  recipient_email: "",
  recipient_name: "",
  recipient_phone: "",
  weight: 0,
});

const isInvalid = computed(() => {
  return (
    !singleshipment.value.category ||
    !singleshipment.value.description ||
    !singleshipment.value.drop_off_location ||
    !singleshipment.value.pickup_location ||
    !singleshipment.value.pickup_option ||
    !singleshipment.value.recipient_email ||
    !singleshipment.value.recipient_name ||
    !singleshipment.value.recipient_phone ||
    singleshipment.value.weight <= 0
  );
});

const handleSubmit = async () => {
  const shipment = singleshipment.value;

  const payload = {
    amount: shipment.amount,
    category: shipment.category,
    description: shipment.description,
    drop_off_location: shipment.drop_off_location,
    pickup_location: shipment.pickup_location,
    pickup_option: shipment.pickup_option,
    recipient_address: shipment.pickup_location,
    recipient_email: shipment.recipient_email,
    recipient_name: shipment.recipient_name,
    recipient_phone: shipment.recipient_phone,
    weight: shipment.weight,
  };

  try {
    await createShipment(payload);

    router.push("/shipments/shipment-type/single-shipment/checkout");
  } catch (error) {
    console.error("Error creating shipment:", error);
  }
};
</script>

<template>
  <div>
    <header class="flex justify-between">
      <section>
        <button
          class="w-11 h-11 rounded-md border border-[#E5E5E5] p-[14px] transition-all duration-75 ease-in hover:bg-[#E5E5E5] mr-4"
          @click="$router.go(-1)">
          <ChevronLeft />
        </button>
        <span class="font-semibold text-xl leading-5 tracking-[-0.03em] text-[#060E1F] text-left">
          Create a new shipment
        </span>
      </section>
      <section class="hidden md:flex gap-x-4 items-center">
        <Button variant="outline">
          <span class="font-medium text-sm leading-[16.94px] text-left text-[#404D61] px-3">
            Cancel
          </span>
        </Button>
        <Button @click="handleSubmit" class="px-3 py-2" :disabled="isInvalid">
          Submit
          <ArrowForward class="ml-2" />
        </Button>
      </section>
    </header>
    <main class="md:flex md:justify-between md:items-start mt-8 mb-20 md:mb-0">
      <div
        class="rounded-xl border border-[#E4E7EC] bg-white shadow-sm shadow-[#1018280D] md:w-[53.31%] lg:w-[70%] py-4">
        <Accordion type="single" default-value="item-1" :collapsible="false" class="p-0 m-0">
          <AccordionItem value="item-1" class="px-6 pb-6 m-0">
            <AccordionTrigger class="p-0 m-0">
              <h2 class="font-semibold text-base leading-7 text-[#101828] text-left">
                Shipment item 1
              </h2>
            </AccordionTrigger>
            <AccordionContent class="p-0 mt-4">
              <Tabs :default-value="defaultValueTab" v-model="defaultValueTab">
                <TabsList class="w-full lg:w-[373.99px] justify-start rounded-lg p-[5px] bg-[#F5F7FA]">
                  <TabsTrigger value="delivery-info" class="w-1/2">
                    Delivery Info
                  </TabsTrigger>
                  <TabsTrigger value="item-details" class="w-1/2">
                    Item details
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="delivery-info" class="px-1 mt-8">
                  <section class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    <section>
                      <section>
                        <Label for="pickup-address" class="font-normal text-xs leading-[14.4px] mb-1">
                          Pickup Address <span class="text-red-600">*</span>
                        </Label>
                        <Input v-model="singleshipment.pickup_location" id="pickup-address" type="text"
                          placeholder="e.g. 17, Ogunyemi strt, Magodo."
                          class="font-normal text-sm leading-[18.2px] mt-2" />
                      </section>
                      <section class="mt-4">
                        <Label for="booking-notes" class="font-normal text-xs leading-[14.4px] mb-1">
                          Booking Notes <span class="text-red-600">*</span>
                        </Label>
                        <Input id="booking-notes" type="text" placeholder="e.g. Kindly pickup from the gateman"
                          class="mb-4 font-normal text-sm leading-[18.2px] lg:mb-0 mt-2" />
                      </section>
                    </section>
                    <section>
                      <Label class="font-normal text-xs leading-[14.4px] mb-1">
                        Pickup Option <span class="text-red-600">*</span>
                      </Label>
                      <Select v-model="singleshipment.category">
                        <SelectTrigger class="mt-2">
                          <SelectValue placeholder="Choose an option" class="text-[#999999]" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fragile"> fragile </SelectItem>
                        </SelectContent>
                      </Select>
                    </section>
                  </section>
                  <section class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 mt-8">
                    <section>
                      <section>
                        <Label for="receiver-name" class="font-normal text-xs leading-[14.4px] mb-1">
                          Receiver's Name <span class="text-red-600">*</span>
                        </Label>
                        <Input v-model="singleshipment.recipient_name" id="receiver-name" type="text"
                          placeholder="e.g. John" class="font-normal text-sm leading-[18.2px] mt-2" />
                      </section>
                      <section class="mt-4">
                        <Label for="drop-off" class="font-normal text-xs leading-[14.4px] mb-1">
                          Drop-Off <span class="text-red-600">*</span>
                        </Label>
                        <Input v-model="singleshipment.drop_off_location" id="drop-off" type="text"
                          placeholder="e.g. 17, Ogunyemi strt, Magodo."
                          class="font-normal text-sm leading-[18.2px] mt-2" />
                      </section>
                      <section class="mt-4">
                        <Label for="delivery-notes" class="font-normal text-xs leading-[14.4px] mb-1">
                          Delivery Notes <span class="text-red-600">*</span>
                        </Label>
                        <Input id="delivery-notes" v-model="singleshipment.description" type="text"
                          placeholder="e.g. Kindly pickup from the gateman"
                          class="mb-4 font-normal text-sm leading-[18.2px] lg:mb-0 mt-2" />
                      </section>
                    </section>
                    <section>
                      <section>
                        <Label for="delivery-email" class="font-normal text-xs leading-[14.4px] mb-1">
                          Delivery Email <span class="text-red-600">*</span>
                        </Label>
                        <Input v-model="singleshipment.recipient_email" id="delivery-email" type="email"
                          placeholder="e.g. Johndoe@email.com" class="font-normal text-sm leading-[18.2px] mt-2" />
                      </section>
                      <section class="mt-4">
                        <Label class="font-normal text-xs leading-[14.4px] mb-1">
                          Phone Number <span class="text-red-600">*</span>
                        </Label>
                        <div class="h-[42px] flex mt-2">
                          <FlagDropdown />
                          <Input placeholder="8023456789" v-model="singleshipment.recipient_phone" type="text"
                            class="h-full font-normal text-sm leading-[18.2px] w-[73.24%] rounded-s-none px-2 text-left" />
                        </div>
                      </section>
                    </section>
                  </section>
                  <section class="mt-8">
                    <a href="#" class="font-semibold text-[11px] leading-[11px] tracking-[-0.03em] text-[#2778FF]">
                      ADDITIONAL INFORMATION
                    </a>
                  </section>
                </TabsContent>
                <TabsContent value="item-details" class="px-1 pb-1 mt-8">
                  <section class="flex justify-between items-center">
                    <section class="w-[49.14%]">
                      <Label class="font-normal text-xs leading-[14.4px]">
                        Item Category<span class="text-red-600"> *</span>
                      </Label>
                      <Select v-model="singleshipment.pickup_option">
                        <SelectTrigger class="mt-2">
                          <SelectValue placeholder="Select an Option"
                            class="font-normal text-sm leading-[18.2px] placeholder:text-[#999999]" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <!-- <SelectLabel>Fruits</SelectLabel> -->
                            <SelectItem value="dropoff"> drop off </SelectItem>
                            <SelectItem value="pickup"> pick up </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </section>
                    <section class="w-[49.14%]">
                      <Label for="package-weight" class="font-normal text-xs leading-[14.4px]">
                        Package Weight (kg)<span class="text-red-600"> *</span>
                      </Label>
                      <Input v-model="singleshipment.weight" id="package-weight"
                        class="font-normal text-sm leading-[18.2px] text-[#999999] mt-2" type="number"
                        placeholder="2" />
                    </section>
                  </section>
                  <section class="mt-4">
                    <Label class="font-normal text-xs leading-[14.4px] text-[#313644]">
                      Choose your package size or type your package size in the
                      L x W x H custom field below
                    </Label>
                    <ToggleGroup type="single" class="grid grid-cols-2 gap-6 lg:w-[87.18%] lg:grid-cols-3 mt-4">
                      <ToggleGroupItem value="standard-size"
                        class="h-[178.01px] rounded-xl border border-[#D9D9D9] bg-[#F7F8FA] py-4 data-[state=on]:bg-[#FFFBF8] data-[state=on]:border-[#F1C49B]">
                        <div>
                          <section>
                            <div>
                              <span class="font-semibold text-xs leading-[15.6px] text-center text-[#101828]">
                                Standard size
                              </span>
                            </div>
                            <span class="font-normal text-xs leading-[15.6px] text-[#101828]">
                              38cm x 33cm x 20cm
                            </span>
                          </section>
                          <section class="flex justify-center items-center mt-7">
                            <parcel-box />
                          </section>
                        </div>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="medium-size"
                        class="h-[178.01px] rounded-xl border border-[#D9D9D9] bg-[#F7F8FA] py-4 data-[state=on]:bg-[#FFFBF8] data-[state=on]:border-[#F1C49B]">
                        <div>
                          <section>
                            <div>
                              <span class="font-semibold text-xs leading-[15.6px] text-center text-[#101828]">
                                Medium size
                              </span>
                            </div>
                            <span class="font-normal text-xs leading-[15.6px] text-[#101828]">
                              32cm x 24cm x 16cm
                            </span>
                          </section>
                          <section class="flex justify-center items-center mt-7">
                            <medium-box />
                          </section>
                        </div>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mini-size"
                        class="h-[178.01px] rounded-xl border border-[#D9D9D9] bg-[#F7F8FA] py-4 data-[state=on]:bg-[#FFFBF8] data-[state=on]:border-[#F1C49B]">
                        <div>
                          <section>
                            <div>
                              <span class="font-semibold text-xs leading-[15.6px] text-center text-[#101828]">
                                Mini size
                              </span>
                            </div>
                            <span class="font-normal text-xs leading-[15.6px] text-[#101828]">
                              12 cm x 24cm x 16cm
                            </span>
                          </section>
                          <section class="flex justify-center items-center mt-7">
                            <mini-box />
                          </section>
                        </div>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </section>
                  <section class="flex justify-between items-center mt-4">
                    <section class="w-[32.18%]">
                      <Label for="length" class="font-normal text-xs leading-[14.4px]">
                        Length(cm) <span class="text-red-600">*</span>
                      </Label>
                      <Input id="length" class="font-normal text-sm leading-[18.2px] text-[#999999] mt-2" type="text"
                        placeholder="38" />
                    </section>
                    <section class="w-[32.18%]">
                      <Label for="width" class="font-normal text-xs leading-[14.4px]">
                        Width(cm) <span class="text-red-600">*</span>
                      </Label>
                      <Input id="length" class="font-normal text-sm leading-[18.2px] text-[#999999] mt-2" type="text"
                        placeholder="33" />
                    </section>
                    <section class="w-[32.18%]">
                      <Label for="length" class="font-normal text-xs leading-[14.4px]">
                        Height(cm) <span class="text-red-600">*</span>
                      </Label>
                      <Input id="height" class="font-normal text-sm leading-[18.2px] text-[#999999] mt-2" type="text"
                        placeholder="12" />
                    </section>
                  </section>
                  <section class="mt-4">
                    <Label for="booking-notes-1" class="font-normal text-xs leading-[14.4px]">
                      Booking Notes <span class="text-red-600">*</span>
                    </Label>
                    <Input id="booking-notes-1" class="font-normal text-sm leading-[18.2px] text-[#999999] mt-2"
                      type="text" placeholder="e.g. Kindly drop-off with the gateman" />
                  </section>
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div class="flex justify-between items-center px-6 mt-3">
          <section class="flex gap-x-2 items-center">
            <Checkbox id="save" class="border border-[#DEE1E1]" />
            <Label for="save" class="font-normal text-xs leading-5 text-[#8E9798]">
              Save This Contact Info.
            </Label>
          </section>
          <section class="flex gap-x-2 items-center">
            <Button variant="ghost" class="gap-x-1">
              <Delete />
              <span class="font-semibold text-[13px] leading-5 text-[#FA3105]">
                Clear form
              </span>
            </Button>
            <Button @click="handleActiveTab" variant="secondary"
              class="px-6 py-2 bg-[#E8EAEA] border border-[#D0D5DD] shadow-sm shadow-[#1018280D]">
              <span class="font-semibold text-[13px] leading-5 text-[#344054]">
                Next
              </span>
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
      class="fixed right-0 left-0 bottom-0 flex justify-center border-t-[0.4px] border-t-[#DAD8D9] bg-white md:hidden py-2">
      <Button class="w-[81.52%] rounded-md bg-[#1E1E1E] mx-auto" @click="$router.push({ name: 'order-summary' })">
        <span class="font-semibold text-sm leading-[16.8px] text-white">
          Continue
        </span>
      </Button>
    </footer>
  </div>
</template>

<style lang="css" scoped></style>

<!-- {

  amount: 300.8,

  category: 'fragile',

  description: 'from me to you ',

  drop_off_location: '15 Adeola Odeku Street, ikorodu Island, Lagos',

  pickup_location: 'ojota',

  pickup_option: '15 Adeola Odeku Street, ikorodu Island, Lagos',

  recipient_address: 'ojota',

  recipient_email: 'paulolutosoye@gmail.com',

  recipient_name: 'john',
  
  recipient_phone: '',

  weight: '7'

} -->
