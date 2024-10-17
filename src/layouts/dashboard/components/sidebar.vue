<template>
  <aside
    class="w-[92px] h-[850px] rounded-lg border border-[#E5E5E5] bg-white p-6"
  >
    <section class="mb-4">
      <section class="mb-4">
        <section class="flex justify-center mb-2">
          <span
            class="inter-medium font-medium text-[10px] leading-3 tracking-[0.4px] text-[#757575]"
          >
            MAIN
          </span>
        </section>
      </section>

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
    </section>

    <div class="border-b border-b-[#E5E5E5] mb-4" v-if="false"></div>

    <div class="flex flex-col justify-between border flex-grow" v-if="false">
      <section>
        <section class="flex justify-center mb-2">
          <span
            class="inter-medium font-medium text-[10px] leading-3 tracking-[0.4px] text-[#757575]"
          >
            SETTINGS
          </span>
        </section>

        <section>
          <button class="rounded-lg p-3">
            <img src="/src/assets/svgs/setting-01.svg" />
          </button>
        </section>
      </section>

      <section>
        <section class="mb-[26px]">
          <button class="rounded-lg p-3">
            <img src="/src/assets/svgs/message-question.svg" />
          </button>
        </section>

        <section>
          <button class="rounded-lg p-3">
            <img src="/src/assets/svgs/logout-03.svg" />
          </button>
        </section>
      </section>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Category from "@/assets/svgs/Category.svg";
import Wallet from "@/assets/svgs/wallet-02.svg";
import Shipments from "@/assets/svgs/shipments.svg";

const selectedNavItemOffset = ref(0);

const mainNavItems = [
  { name: "Dashboard", icon: Category, href: "/", offset: 0 },
  { name: "Wallet", icon: Wallet, href: "/wallets", offset: 56 },
  { name: "Shipments", icon: Shipments, href: "/shipments", offset: 112 },
];
</script>

<style scoped></style>
