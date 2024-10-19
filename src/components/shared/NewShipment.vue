<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { ChevronRightIcon } from "lucide-vue-next";
import Package from "@/assets/svgs/package-black.svg";
import PackageAdd from "@/assets/svgs/package-add.svg";
import PlusSign from "@/assets/svgs/plus-sign.svg";

const radioGroupValue = ref("single-shipment");
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button class="px-4 py-3 gap-x-2">
        <!-- <PlusSign /> -->
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00033 2.86979V13.5365M13.3337 8.20312H2.66699"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div>
          <span
            class="outfit-medium font-medium text-[15px] leading-[18.15px] text-white"
          >
            New Shipments
          </span>
        </div>
      </Button>
    </DialogTrigger>

    <DialogContent class="w-[448px]">
      <DialogHeader class="mb-9">
        <DialogTitle
          class="font-semibold text-xl leading-[26px] text-[#101828] text-left"
        >
          Select Your Preferred Order Type
        </DialogTitle>

        <DialogDescription
          class="font-medium text-sm leading-[16.8px] text-[#475467] text-left"
        >
          Choose "Single" for one item or "Bulk" for multiple items.
        </DialogDescription>
      </DialogHeader>

      <div>
        <RadioGroup
          default-value="single-shipment"
          class="mb-12"
          v-model="radioGroupValue"
        >
          <section class="mb-2">
            <Button
              :variant="
                radioGroupValue === 'single-shipment' ? 'outline' : 'ghost'
              "
              class="w-full justify-between"
            >
              <div class="flex items-center gap-x-4">
                <RadioGroupItem id="single-shipment" value="single-shipment" />

                <div class="flex gap-x-2 items-center">
                  <Package class="w-6 h-6 text-[#09090B]" />

                  <Label
                    for="single-shipment"
                    class="font-medium text-sm leading-[14px] text-[#09090B] text-left"
                  >
                    Single shipment
                  </Label>
                </div>
              </div>

              <ChevronRightIcon class="w-4 h-4 text-[#737373]" />
            </Button>
          </section>

          <section>
            <Button
              :variant="
                radioGroupValue === 'bulk-shipment' ? 'outline' : 'ghost'
              "
              class="w-full justify-between"
            >
              <div class="flex items-center gap-x-4">
                <RadioGroupItem id="bulk-shipment" value="bulk-shipment" />

                <div class="flex gap-x-2 items-center">
                  <PackageAdd class="w-6 h-6" />

                  <Label
                    for="bulk-shipment"
                    class="font-medium text-sm leading-[14px] text-[#09090B] text-left"
                  >
                    Bulk shipment
                  </Label>
                </div>
              </div>

              <ChevronRightIcon class="w-4 h-4 text-[#737373]" />
            </Button>
          </section>
        </RadioGroup>

        <Button class="w-full">
          <span class="font-medium text-[15px] leading-[18.15px] text-left">
            Continue
          </span>
        </Button>
      </div>

      <DialogFooter>
        <DialogClose as-child class="w-full">
          <Button type="button" variant="ghost">
            <span
              class="font-medium text-[15px] leading-[18.15px] text-left text-[#09090B]"
            >
              Cancel
            </span>
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style lang="css" scoped></style>
