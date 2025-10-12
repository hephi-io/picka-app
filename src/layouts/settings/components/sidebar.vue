<template>
  <aside class="h-full gap-8 border-r border-[#E5E5E5] py-4">
    <section class="h-[153px] gap-3 pr-4">
      <div class="mb-2 gap-12">
        <h2 class="font-inter font-medium leading-[140%] text-[#727272]">
          GENERAL SETTINGS
        </h2>
      </div>
      <div class="relative flex flex-col">
        <button
          @click="$router.push(item.href)"
          v-for="item in mainNavItems"
          :key="item.name"
          :class="
            isActive(item.href)
              ? 'w-full border border-[#E5E5E5] bg-[#e5e5e5]  transition-all duration-300  z-10 h-[44px] flex items-center gap-4 p-[8px] rounded-md cursor-pointer'
              : 'z-10 h-[44px] flex items-center gap-4 p-[8px] rounded-md cursor-pointer'
          "
        >
          <component
            :is="item.icon"
            :class="[isActive(item.href) ? 'text-[#757575]' : 'text-[#FF7830]']"
          />
          <span class="text-sm font-medium text-[#101828]">{{
            item.name
          }}</span>
        </button>
      </div>
    </section>
    <div class="border-b border-b-[#E5E5E5] mb-5 mt-5"></div>
    <section class="h-[153px] pr-4">
      <h2 class="font-inter font-medium leading-[140%] text-[#727272] my-4">
        BUSINESS SETTINGS
      </h2>
      <div class="relative flex flex-col">
        <button
          @click="$router.push(item.href)"
          v-for="item in Business_settings"
          :key="item.name"
          :class="
            isActive(item.href)
              ? 'w-full border border-[#E5E5E5] bg-[#e5e5e5]  transition-all duration-300  z-10 h-[44px] flex items-center gap-4 p-[8px] rounded-md cursor-pointer'
              : 'z-10 h-[44px] flex items-center gap-4 p-[8px] rounded-md cursor-pointer'
          "
        >
          <component
            :is="item.icon"
            :class="[isActive(item.href) ? 'text-[#757575]' : 'text-[#FF7830]']"
          />
          <span class="text-sm font-medium text-[#101828]">{{
            item.name
          }}</span>
        </button>
      </div>
    </section>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

import UserCircleGear from "@/assets/svgs/UserCircleGear.svg";
import Wrench from "@/assets/svgs/Wrench.svg";
import BellRinging from "@/assets/svgs/BellRinging.svg";
import connect from "@/assets/svgs/connect.svg";
import danger from "@/assets/svgs/danger.svg";

const route = useRoute();

const isActive = (href) => route.path === href;

const mainNavItems = [
  {
    name: "Profile",
    icon: UserCircleGear,
    href: "/settings/Profile",
    offset: 0,
  },
  { name: "App", icon: Wrench, href: "/settings/appsetting", offset: 56 },
  {
    name: "Notification",
    icon: BellRinging,
    href: "/settings/notification",
    offset: 112,
  },
];

//business settings
const Business_settings = [
  {
    name: "Biling",
    icon: UserCircleGear,
    href: "/settings/billing",
    offset: 0,
  },
  {
    name: "Integration",
    icon: connect,
    href: "/settings/integrations",
    offset: 0,
  },
  { name: "Danger", icon: danger, href: "/settings/danger", offset: 0 },
];
</script>
