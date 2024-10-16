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

        <section>
          <button
            class="rounded-lg border border-[#F1C49B] p-3 bg-[#FFF5EC]"
            @click="$router.push('/')"
          >
            <img src="/src/assets/svgs/Category.svg" />
          </button>
        </section>
      </section>

      <section class="mb-4">
        <button class="p-3" @click="$router.push('/wallets')">
          <img src="/src/assets/svgs/wallet-02.svg" />
        </button>
      </section>

      <section class="mb-4">
        <button class="p-3" @click="$router.push('/shipments')">
          <img src="/src/assets/svgs/creative-market.svg" />
        </button>
      </section>

      <section>
        <button class="p-3">
          <img src="/src/assets/svgs/package-open.svg" />
        </button>
      </section>
    </section>

    <div class="border-b border-b-[#E5E5E5] mb-4"></div>

    <section class="h-[55%]">
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

    <section class="h-[12.24%] mt-4">
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
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
