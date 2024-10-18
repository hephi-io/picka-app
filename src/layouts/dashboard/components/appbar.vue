<template>
  <header
    class="h-16 flex justify-between items-center rounded-lg border border-[#E4E9EE] pr-7 pl-5 py-3 bg-white"
  >

    <section class="flex justify-start items-center">
      <ZipkodLogo :height="height" :width="width" />
    </section>

    <section class="h-full flex justify-center items-center">

      <DropdownMenu>

        <DropdownMenuTrigger>
          <!-- Notification -->
          <button class="w-10 h-10 flex justify-center items-center rounded-full bg-[#F8F8F8] mr-6">
            <NotificationsIcon />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
        </DropdownMenuContent>

      </DropdownMenu>

      
      <DropdownMenu>

        <DropdownMenuTrigger>
          <button class="h-full flex items-center m-0 p-0 hover:bg-gray-100 rounded-md">

            <section class="h-full flex justify-center items-center bg-[#D9D9D9] rounded-full border-2 border-[#34A9FF] mr-4">
              <Memoji />
            </section>

            <section class="h-full flex items-center mr-[19px]">
              <span
                class="font-normal text-sm leading-[21px] tracking-[-3%] text-[#433F52]"
                >Ezeani Melodie</span
              >
            </section>

            <!-- Icon -->
            <section class="h-full flex items-center">
              <ArrowDown />
            </section>

          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
        </DropdownMenuContent>

      </DropdownMenu>

    </section>

  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import ZipkodLogo from "@/assets/svgs/ZipkodLogo.vue"
import NotificationsIcon from "@/assets/svgs/notification.svg"
import Memoji from "@/assets/svgs/memoji.svg"
import ArrowDown from "@/assets/svgs/Arrow---Down-2.svg"

const height = ref("27.62");
const width = ref("100%");
</script>

<style scoped></style>
