<script setup>
import { ref } from 'vue';
import ZipkodLogo from "@/assets/svgs/ZipkodLogo.vue";

const height = ref('27.62');
const width = ref('100%')
</script>

<template>

  <div class="p-6">

    <div>

      <header class="h-16 mb-2 rounded-lg border border-[#E4E9EE] pr-8 pl-6 py-3 bg-white">

        <div class="h-full flex justify-between items-center">

          <section class="w-[6.7%] flex justify-start">
            <ZipkodLogo :height="height" :width="width" />
          </section>

          <section class="flex">
            
            <!-- Notification -->
            <section class="mr-6">
              <div class="w-10 h-10 flex justify-center items-center rounded-full bg-[#F8F8F8]">
                <img src="/src/assets/svgs/notification.svg" alt="notification">
              </div>
            </section>

            <section class="flex">

              <!-- Avatar -->
              <section class="flex mr-[19px]">

                <section class="mr-4">
                  <div class="h-[38.8px] w-[38.8px] bg-[#D9D9D9] rounded-full border-2 border-[#34A9FF]">
                    <img src="/src/assets/svgs/memoji.svg">
                  </div>
                </section>

                <section class="h-full flex items-center">
                  <span class="inter-normal font-normal text-sm leading-[21px] tracking-[-3%] text-[#433F52]">Ezeani Melodie</span>
                </section>

              </section>

              <!-- Icon -->
              <section class="h-full flex items-center">
                <img src="/src/assets/svgs/Arrow---Down-2.svg">
              </section>

            </section>

          </section>

        </div>

      </header>

      <div class="flex justify-between">

        <aside class="w-[6.61%] h-[850px] rounded-lg border border-[#E5E5E5] bg-white p-6">

          <section class="h-[26.5%] mb-4">

            <section class="mb-4">

              <section class="flex justify-center mb-2">
                <span class="inter-medium font-medium text-[10px] leading-3 tracking-[0.4px] text-[#757575]">
                  MAIN
                </span>
              </section>

              <section>
                <button class="rounded-lg border border-[#F1C49B] p-3 bg-[#FFF5EC]">
                  <img src="/src/assets/svgs/Category.svg">
                </button>
              </section>

            </section>

            <section class="mb-4">
              <button class="p-3">
                <img src="/src/assets/svgs/wallet-02.svg">
              </button>
            </section>

            <section class="mb-4">
              <button class="p-3">
                <img src="/src/assets/svgs/creative-market.svg">
              </button>
            </section>

            <section>
              <button class="p-3">
                <img src="/src/assets/svgs/package-open.svg">
              </button>
            </section>

          </section>

          <div class="border-b border-b-[#E5E5E5] mb-4"></div>

          <section class="h-[55%]">

            <section class="flex justify-center mb-2">
              <span class="inter-medium font-medium text-[10px] leading-3 tracking-[0.4px] text-[#757575]">
                SETTINGS
              </span>
            </section>

            <section>
              <button class="rounded-lg p-3">
                <img src="/src/assets/svgs/setting-01.svg">
              </button>
            </section>

          </section>

          <section class="h-[12.24%] mt-4">

            <section class="mb-[26px]">
              <button class="rounded-lg p-3">
                <img src="/src/assets/svgs/message-question.svg">
              </button>
            </section>

            <section>
              <button class="rounded-lg p-3">
                <img src="/src/assets/svgs/logout-03.svg">
              </button>
            </section>

          </section>

        </aside>

        <main class="w-[92.81%] pt-[45.38px] pl-[24px]">

          <div>
            <header class="flex justify-between mb-[52px]">

              <section>

                <section class="mb-2">
                  <span class="inter-medium font-medium text-sm leading-[14px] tracking-[-3%] text-[#676767]">
                    Hello Melodie,
                  </span>
                </section>

                <section>
                  <span class="tt-firs-neue-semibold font-semibold text-[26px] leading-[26px] tracking-[-3%] text-[#242424]">
                    Good Morning
                  </span>
                </section>

              </section>

              <section class="flex">

                <section class="flex mr-4">

                  <button class="h-[59px] flex rounded-md border border-[#D8D8D8] px-4 py-3">

                    <section class="flex h-full items-center mr-2">
                      <img src="/src/assets/svgs/Arrow---Down-2.svg">
                    </section>

                    <section class="h-full flex items-center">
                      <span class="inter-medium font-medium text-[15px] leading-[18.15px] text-[#404D61]">
                        Week
                      </span>
                    </section>

                  </button>

                </section>

                <section>

                  <button class="h-[59px] flex rounded-md border border-[#D8D8D8] px-4 py-3 bg-[#FF7830]">

                    <section class="flex h-full items-center mr-2">
                      <img src="/src/assets/svgs/plus-sign.svg">
                    </section>

                    <section class="h-full flex items-center">
                      <span class="inter-medium font-medium text-[15px] leading-[18.15px] text-white">
                        Create New Order
                      </span>
                    </section>

                  </button>

                </section>

              </section>

            </header>

            <section>

              <section class="h-[142px] flex justify-between">

                <section class="w-[23.58%] rounded-lg px-5 py-[22px] bg-[#F9F9F9]">
                  <div>

                    <section class="mb-[30px]">
                      <img src="/src/assets/svgs/package.svg">
                    </section>

                    <section class="flex">

                      <section class="mr-[15px]">

                        <section class="mb-2">
                          <span class="inter-medium font-medium text-xs leading-3 tracking-[-3%] text-[#8B9293]">
                            Total shipment
                          </span>
                        </section>

                        <section>
                          <span class="tt-firs-neue-bold font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
                            19,329
                          </span>
                        </section>

                      </section>

                      <section class="flex items-end pb-[3px]">

                        <section class="h-[45%] flex items-center mr-[6px]">
                          <img src="/src/assets/svgs/arrow-up.svg">
                        </section>

                        <section class="flex items-center">
                          <div>
                            <span class="inter-semibold font-semibold text-xs leading-3 text-[#307AE4]">
                              758
                            </span>
                            <span class="inter-normal font-normal text-[11px] leading-[11px] text-[#8B9293]">
                              Items
                            </span>
                          </div>
                        </section>

                      </section>

                    </section>

                  </div>
                </section>

                <section class="w-[23.58%] rounded-lg px-5 py-[22px] bg-[#F9F9F9]">
                  <div>

                    <section class="mb-[30px]">
                      <img src="/src/assets/svgs/delivery-truck-01.svg">
                    </section>

                    <section class="mr-[15px]">

                      <section class="mb-2">
                        <span class="inter-medium font-medium text-xs leading-3 tracking-[-3%] text-[#8B9293]">
                          In transit
                        </span>
                      </section>

                      <section>
                        <span class="tt-firs-neue-bold font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
                          12,000
                        </span>
                      </section>

                    </section>

                  </div>
                </section>

                <section class="w-[23.58%] rounded-lg px-5 py-[22px] bg-[#F9F9F9]">
                  <div>

                    <section class="mb-[30px]">
                      <img src="/src/assets/svgs/package-process.svg">
                    </section>

                    <section class="mr-[15px]">

                      <section class="mb-2">
                        <span class="inter-medium font-medium text-xs leading-3 tracking-[-3%] text-[#8B9293]">
                          Pending packages
                        </span>
                      </section>

                      <section>
                        <span class="tt-firs-neue-bold font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
                          800
                        </span>
                      </section>

                    </section>

                  </div>
                </section>

                <section class="w-[23.58%] rounded-lg px-5 py-[22px] bg-[#F9F9F9]">
                  <div>

                    <section class="mb-[30px]">
                      <img src="/src/assets/svgs/delivery-box-02.svg">
                    </section>

                    <section class="mr-[15px]">

                      <section class="mb-2">
                        <span class="inter-medium font-medium text-xs leading-3 tracking-[-3%] text-[#8B9293]">
                          Delivered
                        </span>
                      </section>

                      <section>
                        <span class="tt-firs-neue-bold font-bold text-2xl leading-6 tracking-[-3%] text-[#242424]">
                          657
                        </span>
                      </section>

                    </section>

                  </div>
                </section>

              </section>

              <section>
                
              </section>

            </section>

          </div>

        </main>

      </div>

    </div>

  </div>

</template>

<style scoped></style>