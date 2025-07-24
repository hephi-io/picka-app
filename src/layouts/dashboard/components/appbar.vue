<template>
  <header
    class="sticky top-[1.25rem] z-10 w-full h-16 flex justify-between items-center rounded-lg border border-[#E4E9EE] px-2 md:pr-7 md:pl-5 py-3 bg-white"
  >
    <section class="flex justify-start items-center">
      <svg
        width="69"
        height="24"
        viewBox="0 0 69 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6308 4.78992C24.3009 4.78992 25.642 3.77708 25.8882 2.40864C26.1344 1.01284 25.231 0 23.5069 0C21.7828 0 20.4957 1.01284 20.2495 2.40864C20.0034 3.77708 20.9341 4.78992 22.6308 4.78992ZM12.2757 5.61056C10.2774 5.61056 8.74481 6.48662 7.5952 7.85507L7.92346 5.91146H3.2156L0 24H4.70786L5.73293 18.2296C6.39016 19.516 7.81332 20.3921 9.67486 20.3921C13.8356 20.3921 17.093 17.1621 17.8049 13.056C18.5442 8.84055 16.3544 5.61056 12.2757 5.61056ZM13.0697 13.0287C12.7141 15.0543 11.2355 16.6963 9.23719 16.6963C7.23887 16.6963 6.17133 15.1911 6.58164 12.8912C6.96461 10.6467 8.63467 9.33293 10.4962 9.33293C12.4945 9.33293 13.4253 10.9749 13.069 13.028L13.0697 13.0287ZM53.4551 5.91218H48.226L44.5555 10.9073C45.04 9.18608 45.2883 7.52681 45.4697 6.2246C45.6108 5.21176 45.9736 2.16605 45.9736 2.16605H41.2693C41.2693 2.16605 40.9202 5.17432 40.759 6.17061C39.983 10.98 38.4828 16.2306 33.235 16.2306C30.9646 16.2306 29.0699 15.0414 29.4263 13.0157C29.7819 10.99 31.534 9.56689 33.6965 9.56689C34.3522 9.56689 35.6465 9.90522 36.2116 10.8842L39.2926 7.45915C37.5866 6.03023 35.7416 5.62495 34.1349 5.62495C29.2895 5.62495 25.4793 8.53533 24.8163 13.002C24.1648 17.3953 27.7972 20.4065 32.6426 20.4065C38.7542 20.4065 41.8589 17.2888 43.5203 13.7377L43.642 13.7413L46.1219 20.0919H51.3509L48.3304 12.7134L53.4558 5.9129L53.4551 5.91218ZM63.6785 5.91218L63.3502 7.80108C62.693 6.48734 61.2698 5.61128 59.4083 5.61128C55.2475 5.61128 52.0175 8.86863 51.2782 12.9747C50.5389 17.1628 52.7287 20.3928 56.8074 20.3928C58.8058 20.3928 60.3657 19.5441 61.5153 18.1483L61.187 20.0919H65.8949L68.3856 5.9129H63.6777L63.6785 5.91218ZM62.5015 13.1107C62.0912 15.3552 60.4485 16.6963 58.5869 16.6963C56.5886 16.6963 55.6578 15.0543 56.0142 12.9732C56.3698 10.9749 57.8484 9.33293 59.8467 9.33293C61.845 9.33293 62.9125 10.8382 62.5022 13.11L62.5015 13.1107ZM20.0573 5.91218L17.5666 20.0912H22.2745L24.7652 5.91218H20.0573Z"
          fill="#1E1E1E"
        />
      </svg>
    </section>

    <section class="hidden h-full md:flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <!-- Notification -->
          <button
            class="w-10 h-10 flex justify-center items-center rounded-full bg-[#F8F8F8] mr-6"
          >
            <NotificationsIcon />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent> </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            class="h-full flex items-center m-0 p-0 hover:bg-gray-100 rounded-md"
          >
            <section
              class="w-[39px] h-[38px] flex justify-center items-center bg-[#D9D9D9] rounded-full border-2 border-[#34A9FF] mr-4"
            >
              <Memoji />
            </section>

            <section class="h-full flex items-center mr-[19px]">
              <span
                class="font-normal text-sm leading-[21px] tracking-[-3%] text-[#433F52]"
              >
                {{ authStore.user?.first_name }}
                {{ authStore.user?.last_name }}</span
              >
            </section>

            <!-- Icon -->
            <section class="h-full flex items-center">
              <ArrowDown />
            </section>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent> </DropdownMenuContent>
      </DropdownMenu>
    </section>

    <section class="md:hidden flex justify-start items-center">
      <Menu class="cursor-pointer" />
    </section>
  </header>

  <section
    class="md:hidden h-full flex justify-between items-center py-3 mt-4 md:mt-0"
  >
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          class="h-full flex items-center m-0 p-0 md:hover:bg-gray-100 rounded-md"
        >
          <section
            class="h-full flex justify-center items-center rounded-full border-2 border-[#34A9FF] mr-4"
          >
            <Memoji />
          </section>
          <div class="text-left">
            <h1 class="font-normal text-[13px] text-[#242424]">
              Good Morning,
            </h1>
            <div
              class="font-semibold text-[17px] tracking-[-3%] text-[#433F52]"
            >
              {{ authStore.user?.first_name }} {{ authStore.user?.last_name }}
            </div>
          </div>
        </button>
      </DropdownMenuTrigger>

      <!-- Notification -->
      <button
        class="w-10 h-10 flex justify-center items-center rounded-lg bg-[#F8F8F8]"
      >
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
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import NotificationsIcon from "@/assets/svgs/notification.svg";
import Memoji from "@/assets/svgs/memoji.svg";
import ArrowDown from "@/assets/svgs/Arrow---Down-2.svg";
import Menu from "@/assets/svgs/menu.svg";
import { useAuthStore } from "@/stores/auth";

const height = ref("27.62");
const width = ref("100%");

const authStore = useAuthStore();
</script>

<style scoped></style>
