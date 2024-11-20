<script setup>
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

import MagnifyingGlassIcon from "@/assets/svgs/magnifying-glass-icon.svg";
import ArrowDataTransfer from "@/assets/svgs/arrow-data-transfer-vertical-round.svg";
import ChevronDown from "@/assets/svgs/chevron-down-sharp.svg";
import FunnelSimple from "@/assets/svgs/FunnelSimple.svg";
import LocationShare from "@/assets/svgs/location-share-02.svg";
import Copy from "@/assets/svgs/copy-01.svg";
import Navigation from "@/assets/svgs/navigation-01.svg";
import PinLocation from "@/assets/svgs/pin-location-03.svg";
import VerticalDivider from "@/assets/svgs/vertical-divider.svg";
import LocationIcon from "@/assets/svgs/location-icon.svg";
import Ellipse from "@/assets/svgs/ellipse-icon.svg";

const people = [
  { value: "coco", name: "Coco's Bespoke" },
  { value: "damien-01", name: "Damien Smith" },
  { value: "damien-02", name: "Damien Smith" },
  { value: "damien-03", name: "Damien Smith" },
];
</script>

<template>
  <div>
    <header class="py-3 mb-9">
      <span
        class="space-mono font-semibold text-2xl leading-6 tracking-[-0.03em] text-[#060E1F]"
      >
        Tracking
      </span>
    </header>

    <section class="flex gap-x-6 items-start">

      <section class="w-[299px]">
        <section class="flex gap-x-2 items-center mb-4">
          <div class="relative w-[129px] items-center">
            <Input
              id="search"
              type="text"
              placeholder="Search..."
              class="rounded border border-[#D4D4D4] pl-8 pr-[10px] py-[10px] font-normal text-sm leading-[14px] tracking-[-0.03em] text-[#C9C8CF]"
            />

            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center pl-2"
            >
              <MagnifyingGlassIcon class="text-muted-foreground" />
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="outline"
                class="rounded border border-[#D4D4D4] px-3 py-2 gap-x-2 bg-white"
              >
                <ArrowDataTransfer />

                <span class="font-medium text-sm leading-[21px] text-[#404D61]">
                  Status
                </span>

                <ChevronDown class="-rotate-90" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="outline"
                class="rounded border border-[#D4D4D4] px-3 py-2 bg-white"
              >
                <FunnelSimple />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        <ToggleGroup type="single" class="block">
          <ToggleGroupItem
            :value="person.value"
            class="w-full h-[200px] rounded-lg border border-[#E4E7EC] p-4 mb-6 toggle"
            v-for="(person, index) in people"
            :key="index"
          >
            <div class="w-full h-full">
              <section class="flex justify-between items-center mb-2">
                <div
                  class="rounded border border-[#E4E7EC] p-1 bg-[#F9FAFB] flex gap-x-2 items-center tag"
                >
                  <span class="font-normal text-xs leading-5 text-[#475467]">
                    #DR3E4478
                  </span>
                  <copy />
                </div>

                <LocationShare class="icon" />
              </section>

              <section>
                <section class="mb-4">
                  <section class="flex justify-between items-center mb-4">
                    <div class="flex gap-x-2 items-center">
                      <Navigation />

                      <span class="font-medium text-sm text-[#475467]">
                        {{ person.name }}
                      </span>
                    </div>

                    <span class="font-normal text-xs leading-5 text-[#475467]">
                      91km
                    </span>
                  </section>

                  <section>
                    <div class="flex gap-x-2 items-center mb-1">
                      <PinLocation />
                      <span
                        class="font-normal text-xs leading-[15.6px] text-[#475467]"
                      >
                        17, Ogunyemi strt, Magodo.
                      </span>
                    </div>

                    <VerticalDivider class="mb-1" />

                    <div class="flex gap-x-2 items-center mb-1">
                      <LocationIcon />
                      <span
                        class="font-normal text-xs leading-[15.6px] text-[#475467]"
                      >
                        Shop 10/644 GorgerSt, Sydney NSW 2000
                      </span>
                    </div>
                  </section>
                </section>

                <section class="flex gap-x-2 items-center">
                  <span class="font-normal text-xs leading-5 text-[#37404D80]">
                    2h 23m
                  </span>

                  <Ellipse />

                  <span class="font-normal text-xs leading-5 text-[#37404D80]">
                    34km
                  </span>
                </section>
              </section>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section class="min-w-[74.67%]">
        <Tabs default-value="account">

          <div class="rounded-t-lg px-6 py-5 border border-[#E4E7EC]">

            <section class="flex justify-between items-center mb-4">

              <div class="font-semibold text-base leading-7 text-[#101828]">
                Order Number: <span class="font-normal">#DR3E4478</span>
              </div>

              <Badge 
                variant="secondary"
                class="rounded-md border border-[#E8F4FF] px-4 py-2 bg-[#F0F4F9] shadow-sm shadow-[#1018280D]"
              >
                <span class="font-medium text-sm leading-[18px] text-center text-[#309BFF]">
                  In transit
                </span>
              </Badge>

            </section>

            <TabsList class="w-[373.99px] rounded-lg p-[5px] bg-[#F5F7FA]">

              <TabsTrigger 
                value="account"
                class="w-[181.99px] rounded px-3 py-[6px] tabs-trigger"
              >
                <span class="font-medium text-sm text-[#878FA1]">
                  Map-Based Tracking
                </span>
              </TabsTrigger>

              <TabsTrigger 
                value="password"
                class="w-[181.99px] rounded px-3 py-[6px] tabs-trigger"
              >
                <span class="font-medium text-sm text-[#878FA1]">
                  Status-Based Tracking
                </span>
              </TabsTrigger>

            </TabsList>

          </div>

          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>

          <TabsContent value="password">
            Change your password here.
          </TabsContent>

        </Tabs>
      </section>

    </section>
  </div>
</template>

<style lang="css" scoped>
.toggle:focus {
  background: #fffbf8;
  border-color: #f1c49b;

  .tag {
    background: white;
  }

  .icon {
    stroke: #ff7830;
  }
}

.tabs-trigger:focus {
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 3px 1px 0px #0000000A;
  box-shadow: 0px 3px 8px 0px #0000001F;

  span {
    color: #0F172A;
  }
}
/* 
 
*/
</style>
