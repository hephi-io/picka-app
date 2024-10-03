<script setup>
import { ref } from "vue";
import ZipkodLogo from "@/assets/svgs/ZipkodLogo.vue";

const handleSubmit = (event) => {
  event.preventDefault();
};
</script>

<template>
  <div class="p-8">

    <main class="flex justify-center">
      <section class="w-[36.3%]">

        <header class="flex justify-center mb-[60px]">
          <ZipkodLogo />
        </header>

        <form
          class="rounded-2xl border border-[#DFDFDF] p-6"
          @submit="handleSubmit"
        >
          <header class="mb-10">

            <h1
              class="space-mono-bold font-semibold text-2xl leading-[32.25px] text-[#1B1B1B] mb-1"
            >
              Verification
            </h1>

            <p
              class="outfit-normal font-normal text-base leading-[19.36px] text-[#26203B]"
            >
              Verification successful. Experience the efficiency of Zipkod. Click 'Login' to access your dashboard.
            </p>

          </header>

          <section class="h-[183.63px] flex justify-center mb-10">
            <div class="w-[36.7%] h-full flex justify-center items-center">
              <img src="/src/assets/svgs/success.svg" alt="Success">
            </div>
          </section>

          <button
            type="submit"
            class="w-full h-12 rounded-full px-5 py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105]"
          >
            <span
              class="outfit-bold font-bold text-base leading-[19.36px] text-white"
              >Login</span
            >
          </button>
        </form>

      </section>
    </main>

    <footer class="h-[53px] mt-5 flex justify-between items-end">
      <div>
        <span
          class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]"
          >©2024 Zipkod.ng</span
        >
      </div>

      <div>
        <a
          href="#"
          class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]"
          >Privacy policy</a
        >
      </div>
    </footer>
    
  </div>
</template>

<style scoped></style>
