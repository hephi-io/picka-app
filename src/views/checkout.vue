<script setup lang="js">
import ChevronLeft from "@/assets/svgs/chevron-down-sharp.svg";
import Lock from "@/assets/svgs/ai-lock.svg";
import View from "@/assets/svgs/view.svg";

import OrderSummary from "@/components/shared/order-summary.vue";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
</script>

<template>

  <header class="mb-8">

    <button
      class="w-11 h-11 rounded-md border border-[#E5E5E5] p-[14px] transition-all duration-75 ease-in hover:bg-[#E5E5E5] mr-4"
    >
      <ChevronLeft />
    </button>

    <span
      class="font-semibold text-xl leading-5 tracking-[-0.03em] text-[#060E1F] text-left"
    >
      Checkout
    </span>

  </header>

  <div class="flex justify-between">

    <div class="w-[70%]">
      <div class="shadow-sm shadow-[#1018280D]">

        <Tabs 
          class="w-full rounded-xl rounded-b-none border border-b-0 border-[#E4E7EC]"
          default-value="wallet" 
        >

          <div class="px-6 py-4">

            <div class="mb-4">

              <div class="mb-1">
                <span class="font-semibold text-base leading-7 text-[#101828]">
                  Payment Detail
                </span>
              </div>

              <span class="font-normal text-[13px] leading-[15.6px] text-[#404D61]">
                Complete your shipment by filing your payment detail
              </span>

            </div>

            <TabsList class="w-[373.99px] h-[42px] rounded-lg p-[5px] text-[#F5F7FA]">

              <TabsTrigger 
                class="w-[181.99px] rounded-[3px] px-3 py-[6px] font-medium text-sm text-[#878FA1] tab-trigger"
                value="wallet"
              >
                Wallet
              </TabsTrigger>

              <TabsTrigger 
                class="w-[181.99px] rounded-[3px] px-3 py-[6px] font-medium text-sm text-[#878FA1] tab-trigger"
                value="card"
              >
                Card
              </TabsTrigger>

            </TabsList>

          </div>

          <TabsContent
            class="p-6" 
            value="wallet"
          >
            <div class="mb-20">

              <div class="w-[373px] rounded-lg border border-[#E5E5E5] px-5 py-[22px] bg-gradient-to-r from-[#423631] to-[#3B5DB3] mb-[16.12px] flex justify-between">

                <section class="w-[299px]">

                  <section class="mb-[51px]">
                    <span class="font-medium text-xs leading-3 tracking-[-0.03em] text-[#FFFFFFCC]">
                      Main Wallet
                    </span>
                  </section>

                  <section class="flex gap-x-2">

                    <span class="font-bold text-2xl leading-6 tracking-[-0.03em] text-white">
                      40,000
                    </span>

                    <div class="flex justify-center items-end">
                      <span class="font-medium text-xs leading-3 tracking-[-0.03em] text-[#D6D6D6]">
                        NGN
                      </span>
                    </div>

                  </section>

                </section>

                <section class="w-6 flex items-end">
                  <View />
                </section>

              </div>
              
              <div class="w-[373px] flex justify-between items-center">

                <span class="font-medium text-[14.11px] leading-[18.34px] text-[#373B41]">
                  1/3
                </span>

                <div class="w-[56.43px] h-[28.21px] flex">

                  <button 
                    class="rounded-[6.05px] rounded-e-none border-[1.01px] border-[#D9D9D9] p-[6px] transition-all duration-150 ease-in hover:bg-[#D9D9D9]"
                    variant="outline"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    class="rounded-[6.05px] rounded-s-none border-[1.01px] border-s-0 border-[#D9D9D9] p-[6px] transition-all duration-150 hover:bg-[#D9D9D9]"
                    variant="outline"
                  >
                    <ChevronLeft class="rotate-180" />
                  </button>

                </div>

              </div>

            </div>
          </TabsContent>

          <TabsContent value="card">
            Change your password here.
          </TabsContent>

        </Tabs>

        <div class="rounded-xl rounded-t-none border border-t-0 border-[#E4E7EC] px-6 pb-6">

          <Button class="w-full rounded-md border border-[#D8D8D8] px-4 py-3 bg-[#1E1E1E] mb-4">
            <span class="font-semibold text-sm leading-[16.8px] text-white">
              Pay $340.80
            </span>
          </Button>

          <div class="flex justify-center gap-x-2 items-center px-4 py-3">

            <Lock />

            <span class="font-semibold text-sm leading-[16.8px] text-[#999999]">
              Payments are secured and encrypted
            </span>

          </div>

        </div>

      </div>
    </div>

    <order-summary />

  </div>

</template>

<style lang="css" scoped>
.tab-trigger:focus {
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 3px 8px 0px #0000001F;
  box-shadow: 0px 3px 1px 0px #0000000A;
  color: #0F172A;
}
</style>