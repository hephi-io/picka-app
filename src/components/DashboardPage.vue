<script setup lang="ts">
import { ref } from 'vue'
import ZipkodLogo from "@/assets/svgs/ZipkodLogo.vue"
import MainSection from '@/components/dashboard-components/MainSection.vue'


const height = ref('27.62')
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

        <MainSection />

      </div>

    </div>
  </div>
</template>

<style scoped></style>