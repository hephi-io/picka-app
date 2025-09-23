<template>
  <aside
    class="hidden sticky top-[100px] w-[92px] h-[80vh] rounded-lg border border-[#E5E5E5] bg-white py-6 lg:flex flex-col justify-between shrink-0"
  >
    <section class="mb-2 flex flex-col items-center">
      <div
        class="font-medium text-[10px] leading-3 tracking-[0.4px] text-[#757575] text-center mb-2"
      >
        MAIN
      </div>

      <div class="relative flex flex-col gap-y-3">
        <div
          :class="`absolute h-[44px] w-[44px] border border-[#F1C49B] bg-[#FFF5EC] rounded-lg transition-all duration-300`"
          :style="`top: ${selectedNavItemOffset}px`"
        ></div>

        <button
          @click="
            $router.push(item.href);
            selectedNavItemOffset = item.offset;
          "
          v-for="item in mainNavItems"
          :key="item.name"
          class="z-10 h-[44px] w-[44px] flex items-center justify-center"
        >
          <!-- <Category class="text-blue-500" /> -->
          <component
            :is="item.icon"
            :class="[
              selectedNavItemOffset !== item.offset
                ? 'text-[#757575]'
                : 'text-[#FF7830]',
            ]"
          />
        </button>
      </div>

      <div class="border-b border-b-[#E5E5E5] mb-5 mt-10 w-[44px]"></div>

      <div
        class="font-medium text-[10px] tracking-[0.4px] text-[#757575] text-center mb-2"
      >
        SETTINGS
      </div>

      <button
        @click="
          $router.push('/settings');
          selectedNavItemOffset = 297;
        "
        class="z-10 h-[44px] w-[44px] flex items-center justify-center"
        :class="
          selectedNavItemOffset === 297 ? 'text-[#FF7830]' : 'text-[#757575]'
        "
      >
        <Settings />
      </button>
    </section>

    <section class="flex flex-col items-center">
      <button
        class="z-10 h-[44px] w-[44px] flex items-center justify-center text-[#757575] hover:text-[#FF7830] mb-3"
      >
        <MessageQuestion />
      </button>

      <button
        class="z-10 h-[44px] w-[44px] flex items-center justify-center text-[#757575] hover:text-[#FF7830]"
        @click="handleLogout"
      >
        <Logout />
      </button>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import Category from "@/assets/svgs/Category.svg";
import Wallet from "@/assets/svgs/wallet-02.svg";
import Shipments from "@/assets/svgs/shipments.svg";
import Tracking from "@/assets/svgs/delivery-tracking-01.svg";
import Settings from "@/assets/svgs/setting-01.svg";
import Logout from "@/assets/svgs/logout-03.svg";
import MessageQuestion from "@/assets/svgs/message-question.svg";
import { token } from "@/utils";

const router = useRouter();

const selectedNavItemOffset = ref(0);

const mainNavItems = [
  { name: "Dashboard", icon: Category, href: "/", offset: 0 },
  { name: "Wallet", icon: Wallet, href: "/wallets", offset: 56 },
  { name: "Shipments", icon: Shipments, href: "/shipments", offset: 112 },
  { name: "Tracking", icon: Tracking, href: "/tracking", offset: 168 },
  // { name: "settings", icon: Settings, href: "/settings", offset: 168 },
];

const handleLogout = () => {
  token.logout();
  router.push("/auth");
};
</script>

<style scoped></style>
