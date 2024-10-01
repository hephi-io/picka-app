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
                  <span class="inter-normal font-normal text-sm leading-[21px] tracking-[-3%] text-[#433F52]">Ezeani Melody</span>
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
          
        </aside>

        <main class="w-[92.81%]"></main>

      </div>

    </div>

  </div>

</template>

<style scoped></style>