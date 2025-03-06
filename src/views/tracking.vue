<script setup>
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import MagnifyingGlassIcon from '@/assets/svgs/magnifying-glass-icon.svg';
import ArrowDataTransfer from '@/assets/svgs/arrow-data-transfer-vertical-round.svg';
import ChevronDown from '@/assets/svgs/chevron-down-sharp.svg';
import FunnelSimple from '@/assets/svgs/FunnelSimple.svg';
import LocationShare from '@/assets/svgs/location-share-02.svg';
import Copy from '@/assets/svgs/copy-01.svg';
import Navigation from '@/assets/svgs/navigation-01.svg';
import PinLocation from '@/assets/svgs/pin-location-03.svg';
import VerticalDivider from '@/assets/svgs/vertical-divider.svg';
import LocationIcon from '@/assets/svgs/location-icon.svg';
import Ellipse from '@/assets/svgs/ellipse-icon.svg';

const people = [
  { value: "coco", name: "Coco's Bespoke" },
  { value: "damien-01", name: "Damien Smith" },
  { value: "damien-02", name: "Damien Smith" },
  { value: "damien-03", name: "Damien Smith" }
];
</script>

<template>
  <div>

    <header class="py-3 mb-9 hidden md:block">
      <span class="space-mono font-semibold text-2xl leading-6 tracking-[-0.03em] text-[#060E1F]">
        Tracking
      </span>
    </header>

    <section class="lg:flex gap-x-6 lg:items-start">
      <section>

        <section class=" hidden md:flex gap-x-2 items-center mb-4 ">

          <div class="relative w-[129px] items-center">

            <Input id="search" type="text" placeholder="Search..."
              class="rounded border border-[#D4D4D4] pl-8 pr-[10px] py-[10px] font-normal text-sm leading-[14px] tracking-[-0.03em] text-[#C9C8CF]" />

            <span class="absolute start-0 inset-y-0 flex items-center justify-center pl-2">
              <MagnifyingGlassIcon class="text-muted-foreground" />
            </span>

          </div>

          <DropdownMenu>

            <DropdownMenuTrigger>
              <Button variant="outline" class="rounded border border-[#D4D4D4] px-3 py-2 gap-x-2 bg-white">

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
              <Button variant="outline" class="rounded border border-[#D4D4D4] px-3 py-2 bg-white">
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

        <section class="flex justify-between   gap-x-2 items-center mb-4 md:hidden">
       
          <header class="py-3">
            <span class="space-mono font-semibold text-lg  tracking-[-0.03em] text-[#060E1F]">
              Tracking
            </span>
          </header>
          <section class="flex  gap-x-2">
          <div class="relative w-[129px] items-center">
            <Input id="search" type="text" placeholder="Search..."
              class="rounded border border-[#D4D4D4] pl-8 pr-[10px] py-[10px] font-normal text-sm leading-[14px] tracking-[-0.03em] text-[#C9C8CF]" />

            <span class="absolute start-0 inset-y-0 flex items-center justify-center pl-2">
              <MagnifyingGlassIcon class="text-muted-foreground" />
            </span>

          </div>


          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" class="rounded border border-[#D4D4D4] px-3 py-2 bg-white">
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
        </section> 
        <!-- border-[#E4E7EC] inline-block w-[100%] overflow-x-auto  md:block -->
        <ToggleGroup type="single" class="flex gap-5 w-full justify-start overflow-x-scroll lg:overflow-x-hidden scroll-snap-x mandatory  lg:block hide-scrollbar" >
          <ToggleGroupItem :value="person.value"
            class="lg:w-full h-[200px] rounded-lg border border-[#E4E7EC] p-4 mb-6 toggle   scroll-snap-center box-border   flex-shrink-0 w-[300px]"
            v-for="(person, index) in people" :key="index">
            <div class="w-full h-full">

              <section class="flex justify-between items-center mb-2  text-cen">

                <div class="rounded border border-[#E4E7EC] p-1 bg-[#F9FAFB] flex gap-x-2 items-center tag">
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
                      <span class="font-normal text-xs leading-[15.6px] text-[#475467]">
                        17, Ogunyemi strt, Magodo.
                      </span>
                    </div>

                    <VerticalDivider class="mb-1" />

                    <div class="flex gap-x-2 items-center mb-1">
                      <LocationIcon />
                      <span class="font-normal text-xs leading-[15.6px] text-[#475467]">
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

      <section class="min-w-[74.67%]"></section>

    </section>

  </div>
</template>

<style lang="css" scoped>
.toggle:focus {
  background: #FFFBF8;
  border-color: #F1C49B;

  .tag {
    background: white;
  }

  .icon {
    stroke: #FF7830;
  }
}



/* #757575 */
</style>