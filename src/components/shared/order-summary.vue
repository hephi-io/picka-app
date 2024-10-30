<script setup>
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import PlusSign from "@/assets/svgs/plus-sign-(1).svg";
</script>

<template>
  <div class="w-[28.85%]">

    <div class="rounded-xl border border-[#E4E7EC] shadow-sm shadow-[#1018280D] mb-4 px-6 pt-4 pb-6">

      <div class="mb-6">
        <span class="font-semibold text-base leading-7 text-[#101828]">
          Summary
        </span>
      </div>

      <div class="border-t border-t-[#E8EAEA] mb-6"></div>

      <Accordion 
        type="single" 
        collapsible
        class="mb-6"
      >
        <AccordionItem 
          value="item-1"
          class="rounded border border-[#E4E7EC] p-4"
        >

          <AccordionTrigger class="p-0 m-0">
            <span class="font-semibold text-base leading-[19.2px] text-[#101828]">
              Shipment item 1
            </span>
          </AccordionTrigger>

          <AccordionContent class="p-0 mt-6">

            <ScrollArea class="h-[248px] mb-6">
              
              <section class="mb-6">

                <section class="mb-2">
                  <span class="font-normal text-base leading-[19.2px] text-[#999999]">
                    From address:
                  </span>
                </section>

                <section>
                  <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                    17, Ogunyemi strt, Magodo.
                  </span>
                </section>

              </section>

              <section class="mb-6">

                <section class="mb-2">
                  <span class="font-normal text-base leading-[19.2px] text-[#999999]">
                    Drop-off address:
                  </span>
                </section>

                <section>
                  <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                    50, Champion walkway
                  </span>
                </section>

              </section>

              <section class="mb-6">

                <section class="mb-2">
                  <span class="font-normal text-base leading-[19.2px] text-[#999999]">
                    Number of items:
                  </span>
                </section>

                <section>
                  <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                    5
                  </span>
                </section>

              </section>

              <section>

                <section class="mb-2">
                  <span class="font-normal text-base leading-[19.2px] text-[#999999]">
                    Weight of items:
                  </span>
                </section>

                <section>
                  <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                    2kg
                  </span>
                </section>

              </section>

            </ScrollArea>

            <div class="rounded-md flex justify-between items-center px-2 py-3 opacity-60 bg-[#EFEFEF]">

              <span class="font-semibold text-base leading-[19.2px] text-[#101828]">
                Amount
              </span>

              <span class="font-semibold text-sm leading-[16.8px] text-[#101828]">
                $300.80
              </span>

            </div>

          </AccordionContent>

        </AccordionItem>
      </Accordion>

      <div class="rounded-md flex justify-between items-center px-2 py-3 opacity-60">

        <span class="font-semibold text-base leading-[19.2px] text-[#101828]">
          Total Amount
        </span>

        <span class="font-semibold text-sm leading-[16.8px] text-[#101828]">
          $300.80
        </span>

      </div>

    </div>

    <Button 
      variant="outline"
      class="w-full rounded-md border border-[#D8D8D8] px-4 py-[14px] gap-x-2"
    >

      <plus-sign />

      <span class="font-medium text-sm leading-[16.94px] text-[#404D61]">
        Create Another Shipment
      </span>

    </Button>

  </div>
</template>

<style lang="css"></style>