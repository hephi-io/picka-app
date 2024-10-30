<script setup lang="ts">
import ChevronLeft from "@/assets/svgs/chevron-down-sharp.svg";
import ArrowForward from "@/assets/svgs/arrow-forward.svg";
import DotsVertical from "@/assets/svgs/dots-vertical.svg";
import UploadIcon from "@/assets/svgs/upload-03.svg";

import { Button } from '@/components/ui/button';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
</script>

<template>
  <div>

    <header class="flex justify-between mb-8">

      <section>

        <button
          class="w-11 h-11 rounded-md border border-[#E5E5E5] p-[14px] transition-all duration-75 ease-in hover:bg-[#E5E5E5] mr-4"
        >
          <ChevronLeft />
        </button>

        <span
          class="font-semibold text-xl leading-5 tracking-[-0.03em] text-[#060E1F] text-left"
        >
          Create bulk shipment
        </span>

      </section>

      <section>

        <Button variant="outline" class="mr-4">
          <span
            class="font-medium text-sm leading-[16.94px] text-left text-[#404D61]"
          >
            Cancel
          </span>
        </Button>

        <Button disabled>
          Submit
          <ArrowForward class="ml-2" />
        </Button>

      </section>

    </header>

    <main>

      <section class="rounded-xl border border-[#E4E7EC] shadow-sm shadow-[#1018280D] mb-4">

        <section class="px-6 py-4">
          <span class="font-semibold text-base leading-7 text-[#101828]">
            Sender Info
          </span>
        </section>

        <section class="flex justify-between items-center px-6 pt-2 pb-6">

          <section class="w-[32.54%]">

            <Label
              class="font-normal text-xs leading-[14.4px] mb-2"
              for="pickup-address"
            >
              Pickup Address <span class="text-red-600">*</span>
            </Label>

            <Input 
              id="pickup-address"
              class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
              type="text"
              placeholder="e.g. 17, Ogunyemi strt, Magodo."
            />

          </section>

          <section class="w-[32.54%]">

            <Label
              class="font-normal text-xs leading-[14.4px] mb-2"
              for="booking-notes"
            >
              Booking Notes <span class="text-red-600">*</span>
            </Label>

            <Input 
              id="booking-notes"
              class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
              type="text"
              placeholder="e.g. Kindly pickup from the gateman"
            />

          </section>

          <section class="w-[32.54%]">

            <Label
              class="font-normal text-xs leading-[14.4px] mb-2"
              for="pickup-option"
            >
              Pickup Option <span class="text-red-600">*</span>
            </Label>

            <Select>

              <SelectTrigger>
                <SelectValue 
                  class="font-normal text-sm leading-[18.2px] text-[#999999] focus:outline"
                  placeholder="Choose an option" 
                />
              </SelectTrigger>

              <SelectContent>
                <!-- <SelectGroup>

                  <SelectLabel>Fruits</SelectLabel>

                  <SelectItem value="apple">
                    Apple
                  </SelectItem>

                </SelectGroup> -->
              </SelectContent>

            </Select>

          </section>

        </section>

      </section>

      <section class="flex justify-between items-center rounded-lg border border-[#E4E7EC] px-6 py-3 mb-4">

        <span class="font-semibold text-base leading-7 text-[#101828]">
          Select Number of parcel
        </span>

        <NumberField :default-value="10" :min="0">
          <NumberFieldContent class="w-[83px]">

            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />

          </NumberFieldContent>
        </NumberField>

      </section>

      <Tabs 
        default-value="account"
        class="rounded-xl border border-[#E4E7EC] shadow-sm shadow-[#1018280D]"
      >

        <div class="px-6 pt-4">

          <span class="font-semibold text-base leading-7 text-[#101828]">
            Bulk Shipment Info
          </span>

          <div class="flex justify-between items-center mt-2">

            <TabsList class="w-[373.99px] h-[42px] rounded-lg p-[5px] bg-[#F5F7FA]">

              <TabsTrigger
                class="" 
                value="account"
              >
                Account
              </TabsTrigger>

              <TabsTrigger
                class="" 
                value="password"
              >
                Password
              </TabsTrigger>

            </TabsList>

            <div class="flex gap-x-4 items-center">

              <Button 
                class="border border-[#E4E4E4EE] px-3 py-2 gap-x-2 bg-white"
                variant="secondary"
              >
                <UploadIcon />
                <span>Upload csv</span>
              </Button>

              <DropdownMenu>

                <DropdownMenuTrigger>
                  <Button
                    class="p-0 rounded-full" 
                    variant="ghost"
                  >
                    <DotsVertical />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>

                  <!-- <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem> -->

                </DropdownMenuContent>

              </DropdownMenu>

            </div>

          </div>

        </div>

        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>

        <TabsContent value="password">
          Change your password here.
        </TabsContent>

      </Tabs>
      
    </main>

  </div>
</template>

<style lang="css" scoped>
/* 
box-shadow: 0px 3px 1px 0px #0000000A;

box-shadow: 0px 3px 8px 0px #0000001F;

*/
</style>
