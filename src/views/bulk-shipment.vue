<script setup lang="ts">
import { useRouter } from "vue-router";

import ChevronLeft from "@/assets/svgs/chevron-down-sharp.svg";
import ArrowForward from "@/assets/svgs/arrow-forward.svg";
import DotsVertical from "@/assets/svgs/dots-vertical.svg";
import UploadIcon from "@/assets/svgs/upload-03.svg";
import TwoDotsVertical from "@/assets/svgs/two-dots-vertical.svg";
import Link from "@/assets/svgs/link-02.svg";
import Trash from "@/assets/svgs/trash-01.svg";
import ParcelBox from "@/assets/svgs/parcel-box-package-icon.svg";
import MediumBox from "@/assets/svgs/medium-size-box.svg";
import MiniBox from "@/assets/svgs/mini-size-box.svg";

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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const recipientInfos = [

  {
    recipientName: "Olivia Rhye",
    deliveryEmail: "olivia@untitledui.com",
  },

  {
    recipientName: "Phoenix Baker",
    deliveryEmail: "phoenix@untitledui.com",
  },

  {
    recipientName: "Lana Steiner",
    deliveryEmail: "lana@untitledui.com",
  },

  {
    recipientName: "Phoenix Baker",
    deliveryEmail: "phoenix@untitledui.com",
  },

  {
    recipientName: "Lana Steiner",
    deliveryEmail: "lana@untitledui.com",
  },

];

const router = useRouter();

const handleSubmit = () => {
  router.push(
    {
      name: "checkout",
      params: { name: "bulk" },
    },
  );
}
</script>

<template>
  <div>

    <header class="flex justify-between mb-8">

      <section>

        <button
          class="w-11 h-11 rounded-md border border-[#E5E5E5] p-[14px] transition-all duration-75 ease-in hover:bg-[#E5E5E5] mr-4">
          <ChevronLeft />
        </button>

        <span class="font-semibold text-xl leading-5 tracking-[-0.03em] text-[#060E1F] text-left">
          Create bulk shipment
        </span>

      </section>

      <section class="hidden md:block">

        <Button variant="outline" class="mr-4">
          <span class="font-medium text-sm leading-[16.94px] text-left text-[#404D61] px-3">
            Cancel
          </span>
        </Button>

        <Button @click="handleSubmit" class="px-3 py-2">
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

        <section class="flex flex-col md:flex-row justify-between items-center px-6 pt-2 pb-6">

          <section class="w-full md:w-[32.54%]">

            <Label class="font-normal text-xs leading-[14.4px] mb-2" for="pickup-address">
              Pickup Address <span class="text-red-600">*</span>
            </Label>

            <Input id="pickup-address"
              class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
              type="text" placeholder="e.g. 17, Ogunyemi strt, Magodo." />

          </section>

          <section class="w-full md:w-[32.54%]">

            <Label class="font-normal text-xs leading-[14.4px] mb-2" for="booking-notes">
              Booking Notes <span class="text-red-600">*</span>
            </Label>

            <Input id="booking-notes"
              class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999] my-2"
              type="text" placeholder="e.g. Kindly pickup from the gateman" />

          </section>

          <section class="w-full md:w-[32.54%]">

            <Label class="font-normal text-xs leading-[14.4px] mb-2" for="pickup-option">
              Pickup Option <span class="text-red-600">*</span>
            </Label>

            <Select>

              <SelectTrigger>
                <SelectValue class="font-normal text-sm leading-[18.2px] text-[#999999] focus:outline"
                  placeholder="Choose an option" />
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

      <Tabs default-value="recipient-info" class="rounded-xl border border-[#E4E7EC] shadow-sm shadow-[#1018280D]">

        <div class="px-6 pt-4 mb-4">
          <div class="flex justify-between items-center mb-4">
            <span class="font-semibold text-base leading-7 text-[#101828]">
              Bulk Shipment Info
            </span>
            <Button class="lg:hidden border border-[#E4E4E4EE] px-3 py-2 gap-x-2 bg-white" variant="secondary">
              <UploadIcon />
              <span>Upload csv</span>
            </Button>
          </div>

          <div class="flex justify-between items-center mt-2">

            <TabsList class="w-full md:w-[373.99px] h-[42px] rounded-lg p-[5px] bg-[#F5F7FA]">

              <TabsTrigger
                class=" w-full md:w-[183.99px] rounded-[3px] px-3 py-[6px] active:bg-white active:shadow-[0px_3px_1px_0px_#0000000A,_0px_3px_8px_0px_#0000001F]"
                value="recipient-info">
                <span class="font-medium text-sm text-[#0F172A]">
                  Recipient Info
                </span>
              </TabsTrigger>

              <TabsTrigger
                class=" w-full md:w-[183.99px] rounded-[3px] px-3 py-[6px] active:bg-white active:shadow-[0px_3px_1px_0px_#0000000A,_0px_3px_8px_0px_#0000001F]"
                value="item-details">
                <span class="font-medium text-sm text-[#0F172A]">
                  Item details
                </span>
              </TabsTrigger>

            </TabsList>

            <div class="flex gap-x-4 items-center">

              <Button class="hidden lg:flex border border-[#E4E4E4EE] px-3 py-2 gap-x-2 bg-white" variant="secondary">
                <UploadIcon />
                <span>Upload csv</span>
              </Button>

              <DropdownMenu>

                <DropdownMenuTrigger>
                  <Button class="hidden md:inline-flex p-0 rounded-full" variant="ghost">
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

        <div class="border-t border-t-[#E4E7EC]"></div>

        <TabsContent value="recipient-info" class="m-0 p-0">
          <Table>

            <TableHeader>
              <TableRow class="bg-[#F9FAFB]">

                <TableHead class="lg:w-[5.18%]"></TableHead>
                <TableHead class="w-[12.72%]">Recipient Name</TableHead>
                <TableHead class="lg:w-[5.75%] py-3 ">Parcel No</TableHead>
                <TableHead class="lg:w-[15.53%] py-3 ">Delivery Email</TableHead>
                <TableHead class="lg:w-[11.14%] py-3 ">Phone Number</TableHead>
                <TableHead class="lg:w-[17.33%] py-3 ">Drop-Off Address</TableHead>
                <TableHead class="lg:w-[22%] py-3 ">Delivery Notes</TableHead>
                <TableHead class="lg:w-[5.18%]  "></TableHead>
                <TableHead class="lg:w-[5.18%] "></TableHead>

              </TableRow>
            </TableHeader>

            <TableBody >

              <TableRow v-for="(recipientInfo, index) in recipientInfos" :key="index">

                <TableCell>
                  <button class="px-4 py-3">
                    <TwoDotsVertical />
                  </button>
                </TableCell>

                <TableCell>
                  <div class="rounded-md border border-[#E4E7EC] px-2 w-[120px] lg:w-auto  md:px-4 py-3">
                    <span class="font-normal text-sm leading-[18.2px] text-[#101828]">{{ recipientInfo.recipientName
                      }}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div class="rounded-md border border-[#E4E7EC] w-[100px] lg:w-auto px-4 py-3">
                    <span class="font-normal text-sm leading-[18.2px] text-[#101828]">2</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div class="rounded-md border border-[#E4E7EC] px-4 py-3">
                    <span class="font-normal text-sm leading-[18.2px] text-[#101828]">{{ recipientInfo.deliveryEmail
                      }}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div class="rounded-md border border-[#E4E7EC] px-4 py-3">
                    <span class="font-normal text-sm leading-[18.2px] text-[#101828]">08136869641</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div class="rounded-md border border-[#E4E7EC] w-[140px] lg:w-auto px-4 py-3">
                    <span class="font-normal text-sm leading-[18.2px] text-[#101828]">17, Ogunyemi strt, Magodo</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div class="rounded-md border border-[#E4E7EC] w-[200px] lg:w-auto px-4 py-3">
                    <span class="font-normal text-sm leading-[18.2px] text-[#101828]">Tell the gateman that package
                      is...</span>
                  </div>
                </TableCell>

                <TableCell>
                  <button class="px-4 py-3">
                    <Link />
                  </button>
                </TableCell>

                <TableCell>
                  <button class="px-4 py-3">
                    <Trash />
                  </button>
                </TableCell>

              </TableRow>

            </TableBody>

          </Table>
        </TabsContent>

        <TabsContent value="item-details" class="p-6">
          <div class="w-full lg:w-[60.09%]">

            <section class="flex justify-between items-center mb-4">

              <section class="w-[49.01%]">

                <Label class="font-normal text-xs leading-[14.4px] mb-1">
                  Item Category <span class="text-red-600">*</span>
                </Label>

                <Select>

                  <SelectTrigger>
                    <SelectValue class="font-normal text-sm leading-[18.2px] text-[#999999] focus:outline"
                      placeholder="Select an option" />
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

              <section class="w-[49.01%]">

                <Label class="font-normal text-xs leading-[14.4px] mb-1">
                  Package Weight (kg) <span class="text-red-600">*</span>
                </Label>

                <Input
                  class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
                  type="text" placeholder="2" />

              </section>

            </section>

            <section class="mb-4">

              <Label class="font-normal text-xs leading-[14.4px] text-[#313644]">
                Choose your package size or type your package size in the L x W x H custom field below
              </Label>

              <ToggleGroup type="single" class="flex-wrap lg:flex-nowrap gap-2 justify-start lg:gap-x-6 mt-4">

                <ToggleGroupItem value="standard-size"
                  class=" w-[130.67px] md:w-[253px] h-[178.01px] rounded-xl border border-[#D9D9D9] py-4 bg-[#F7F8FA] toggle-focus">
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

                    <section class="flex justify-center items-center md:mt-7">
                      <parcel-box />
                    </section>

                  </div>
                </ToggleGroupItem>

                <ToggleGroupItem value="medium-size"
                  class="w-[130.67px] md:w-[253px] h-[178.01px] rounded-xl border border-[#D9D9D9] py-4 bg-[#F7F8FA] toggle-focus">
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

                    <section class="flex justify-center items-center md:mt-7">
                      <medium-box />
                    </section>

                  </div>
                </ToggleGroupItem>

                <ToggleGroupItem value="mini-size"
                  class="w-[130.67px] md:w-[253px] h-[178.01px] rounded-xl border border-[#D9D9D9] py-4 bg-[#F7F8FA] toggle-focus">
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

                    <section class="flex justify-center items-center md:mt-7">
                      <mini-box />
                    </section>

                  </div>
                </ToggleGroupItem>

              </ToggleGroup>

            </section>

            <section class="flex gap-4 justify-between items-center lg:gap-0">

              <section class="w-[32.01]">

                <Label class="font-normal text-xs leading-[14.4px] mb-1">
                  Length(cm) <span class="text-red-600">*</span>
                </Label>

                <Input
                  class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
                  type="text" placeholder="38" />

              </section>

              <section class="w-[32.01]">

                <Label class="font-normal text-xs leading-[14.4px] mb-1">
                  Width(cm) <span class="text-red-600">*</span>
                </Label>

                <Input
                  class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
                  type="text" placeholder="33" />

              </section>

              <section class="w-[32.01]">

                <Label class="font-normal text-xs leading-[14.4px] mb-1">
                  Height(cm) <span class="text-red-600">*</span>
                </Label>

                <Input
                  class="rounded-md border border-[#E4E7EC] px-4 py-3 outline-none font-normal text-sm leading-[18.2px] text-[#999999]"
                  type="text" placeholder="20" />

              </section>

            </section>

          </div>
        </TabsContent>

      </Tabs>
      <Button class="md:hidden w-full rounded-md border border-[#D8D8D8] px-4 py-3 gap-x-2 bg-[#1E1E1E] my-4">
          <span class="font-semibold text-sm leading-[16.8px] text-white">
            Continue
          </span>
        </Button>
    </main>

  </div>
</template>

<style lang="css" scoped>
.toggle-focus:focus {
  background-color: #FFFBF8;
  border-color: #F1C49B;
}
</style>
