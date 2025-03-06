<template>
  <header class="h-16 flex justify-between items-center rounded-lg border border-[#E4E9EE] px-2 md:pr-7 md:pl-5 py-3 bg-white">

    <section class="flex justify-start items-center">
      <ZipkodLogo :height="height" :width="width" />
    </section>

    <section class="hidden h-full md:flex justify-center items-center ">

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

            <section
              class="h-full flex justify-center items-center bg-[#D9D9D9] rounded-full border-2 border-[#34A9FF] mr-4">
              <Memoji />
            </section>

            <section class="h-full flex items-center mr-[19px]">
              <span class="font-normal text-sm leading-[21px] tracking-[-3%] text-[#433F52]">Ezeani Melodie</span>
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
    <section class="md:hidden flex justify-start items-center">
      <Menu class="cursor-pointer" />
    </section>

  </header>


  <section class="md:hidden h-full flex justify-between items-center py-3 mt-4 md:mt-0 ">

    <DropdownMenu>
      <DropdownMenuTrigger>
        <button class="h-full flex  items-center m-0  p-0 md:hover:bg-gray-100 rounded-md">
          <section class="h-full flex justify-center items-center  rounded-full border-2 border-[#34A9FF] mr-4">
            <Memoji />           
          </section>
          <div class="text-left">
            <h1 class="font-normal text-[13px]  text-[#242424]">
              Good Morning,
            </h1>
            <div class="font-semibold  text-[17px]  tracking-[-3%] text-[#433F52]">
              Melody Ezeani
            </div>
          </div>
        </button>
      </DropdownMenuTrigger>
      <!-- Notification -->
      <button class=" w-10 h-10 flex justify-center items-center rounded-lg bg-[#F8F8F8]">
        <NotificationsIcon />
      </button>



    </DropdownMenu>

  </section>
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
import Memoji_02 from "@/assets/svgs/memoji_.svg"
import ArrowDown from "@/assets/svgs/Arrow---Down-2.svg"
import Menu from "@/assets/svgs/menu.svg"

const height = ref("27.62");
const width = ref("100%");
</script>

<style scoped></style>
