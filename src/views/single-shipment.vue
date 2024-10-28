<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ChevronLeft from "@/assets/svgs/chevron-down-sharp.svg";
import ArrowForward from "@/assets/svgs/arrow-forward.svg";
import Delete from "@/assets/svgs/delete-03.svg";
import OrderSummary from '@/components/shared/order-summary.vue';

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
} from '@/components/ui/number-field';
import FlagDropdown from '@/components/shared/flag-dropdown.vue';
import { Checkbox } from '@/components/ui/checkbox';
</script>

<template>
  <div>

    <header class="flex justify-between mb-8">

      <section>

        <button
          class="w-11 h-11 rounded-md border border-[#E5E5E5] p-[14px] hover:bg-[#E5E5E5] mr-4"
        >
          <ChevronLeft />
        </button>

        <span class="font-semibold text-xl leading-5 tracking-[-0.03em] text-[#060E1F] text-left">
          Create a new shipment
        </span>

      </section>

      <section>

        <Button 
          variant="outline" 
          class="mr-4"
        >
          <span class="font-medium text-sm leading-[16.94px] text-left text-[#404D61]">
            Cancel
          </span>
        </Button>

        <Button>
          Submit
          <ArrowForward class="ml-2" />
        </Button>

      </section>

    </header>

    <main class="flex justify-between">

      <section class="w-[70%] rounded-xl border border-[#E4E7EC] shadow-sm shadow-[#1018280D]">

        <Tabs default-value="delivery-info">

          <div class="p-6 pt-4">

            <div class="mb-4">
              <span class="font-semibold text-base leading-7 text-[#101828] text-left">
                Shipment item 1
              </span>
            </div>

            <TabsList class="w-[373.99px] justify-start rounded-lg p-[5px] bg-[#F5F7FA]">
              
              <TabsTrigger value="delivery-info" class="w-1/2">
                Delivery Info
              </TabsTrigger>

              <TabsTrigger value="item-details" class="w-1/2">
                Item details
              </TabsTrigger>

            </TabsList>

          </div>

          <TabsContent value="delivery-info">

            <section class="p-6 pt-2 flex justify-between">

              <section class="w-[46.71%]">

                <section class="mb-4">

                  <Label
                    for="pickup-address" 
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Pickup Address <span class="text-red-600">*</span>
                  </Label>

                  <Input 
                    id="pickup-address" 
                    type="text" 
                    placeholder="e.g. 17, Ogunyemi strt, Magodo."
                    class="font-normal text-sm leading-[18.2px]" 
                  />

                </section>

                <section>

                  <Label 
                    for="booking-notes"
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Booking Notes <span class="text-red-600">*</span>
                  </Label>

                  <Input 
                    id="booking-notes" 
                    type="text" 
                    placeholder="e.g. Kindly pickup from the gateman"
                    class="font-normal text-sm leading-[18.2px]" 
                  />

                </section>

              </section>

              <section class="w-[46.71%]">

                  <Label
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Pickup Option <span class="text-red-600">*</span>
                  </Label>

                  <Select>

                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" class="placeholder:text-[#999999]" />
                    </SelectTrigger>

                    <SelectContent>
                    </SelectContent>

                  </Select>

              </section>

            </section>

            <section class="p-6 pt-2 flex justify-between">

              <section class="w-[46.71%]">

                <section class="mb-4">

                  <Label
                    for="receiver-name" 
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Receiver's Name <span class="text-red-600">*</span>
                  </Label>

                  <Input 
                    id="receiver-name" 
                    type="text" 
                    placeholder="e.g. John"
                    class="font-normal text-sm leading-[18.2px]" 
                  />

                </section>

                <section class="mb-4">

                  <Label 
                    for="drop-off"
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Drop-Off <span class="text-red-600">*</span>
                  </Label>

                  <Input 
                    id="drop-off" 
                    type="text" 
                    placeholder="e.g. 17, Ogunyemi strt, Magodo."
                    class="font-normal text-sm leading-[18.2px]" 
                  />

                </section>

                <section>

                  <Label 
                    for="delivery-notes"
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Delivery Notes <span class="text-red-600">*</span>
                  </Label>

                  <Input 
                    id="delivery-notes" 
                    type="text" 
                    placeholder="e.g. Kindly pickup from the gateman"
                    class="font-normal text-sm leading-[18.2px]" 
                  />

                </section>

              </section>

              <section class="w-[46.71%]">

                <section class="mb-4">

                  <Label 
                    for="delivery-email"
                    class="font-normal text-xs leading-[14.4px] mb-1"
                  >
                    Delivery Email <span class="text-red-600">*</span>
                  </Label>

                  <Input 
                    id="delivery-email" 
                    type="email" 
                    placeholder="e.g. Johndoe@email.com"
                    class="font-normal text-sm leading-[18.2px]" 
                  />

                </section>

                <Label class="font-normal text-xs leading-[14.4px] mb-1">
                  Phone Number <span class="text-red-600">*</span>
                </Label>

                <div class="flex">

                  <!-- <Select>

                    <SelectTrigger class="w-[26.76%] rounded-e-none">
                      <SelectValue placeholder="+234" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                      </SelectGroup>
                    </SelectContent>

                  </Select> -->

                  <FlagDropdown />

                  <NumberField :default-value="8023456789" class="w-[73.24%]">
                    <NumberFieldContent>
                      <NumberFieldInput class="rounded-s-none px-2 py-6 text-left" />
                    </NumberFieldContent>
                  </NumberField>

                </div>

              </section>

            </section>

            <section class="px-6 pb-6">
              <a href="#">
                <span class="font-semibold text-[11px] leading-[11px] tracking-[-0.03em] text-[#2778FF]">
                  ADDITIONAL INFORMATION
                </span>
              </a>
            </section>

          </TabsContent>

          <TabsContent value="item-details">
          </TabsContent>

        </Tabs>

        <div class="border-t border-t-[#E4E7EC] px-6 pt-3 pb-4 flex justify-between items-center">

          <section class="flex gap-x-2 items-center">

            <Checkbox id="save" />

            <Label
              for="save"
              class="font-normal text-xs leading-5 text-[#8E9798]"
            >
              Save This Contact Info.
            </Label>

          </section>

          <section class="flex gap-x-2 items-center">

            <Button 
              variant="ghost"
              class="gap-x-1"
            >

              <Delete />

              <span class="font-semibold text-[13px] leading-5 text-[#FA3105]">
                Clear form
              </span>

            </Button>

            <Button 
              variant="secondary"
              class="px-6 py-2 bg-[#E8EAEA] border border-[#D0D5DD] shadow-sm shadow-[#1018280D]"  
            >
              <span class="font-semibold text-[13px] leading-5 text-[#344054]">
                Next
              </span>
            </Button>

          </section>

        </div>

      </section>

      <order-summary />

    </main>

  </div>
</template>

<style lang="css" scoped>
/*  
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 28px;
text-align: left;
*/
</style>