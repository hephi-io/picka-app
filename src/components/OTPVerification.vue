<script setup>
// import { ref } from "vue";
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

          <header class="mb-[60px]">

            <h1
              class="space-mono-bold font-semibold text-2xl leading-[32.25px] text-[#1B1B1B] mb-1"
            >
              Verification
            </h1>

            <p
              class="outfit-normal font-normal text-base leading-[19.36px] text-[#26203B]"
            >
              An OTP has been sent to the phone number linked to your account.
            </p>

          </header>

          <section class="h-[62px] flex justify-between mb-[60px]">

            <div class="w-[13.72%]">
              <input type="number" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div>

            <div class="w-[13.72%]">
              <input type="number" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div>

            <div class="w-[13.72%]">
              <input type="number" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div>

            <div class="w-[13.72%]">
              <input type="number" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div>

            <div class="w-[13.72%]">
              <input type="number" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div>

            <div class="w-[13.72%]">
              <input type="number" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div>

          </section>

          <section class="flex justify-between mb-[60px]">

            <section>
              <button class="h-5 flex rounded-full px-2 py-1 bg-[#F4F4F4]">

                <section class="h-full flex items-center mr-1">
                  <img src="/src/assets/svgs/refresh-circle-outline.svg">
                </section>

                <section class="h-full flex items-center">
                  <span class="outfit-normal font-normal text-sm leading-[16.94px] text-[#26203B]">
                    Resend code
                  </span>
                </section>

              </button>
            </section>

            <section>

              <span class="outfit-normal font-normal text-[10px] leading-[12.1px]">in </span>
              <span class="outfit-semibold font-semibold text-[10px] leading-[12.1px] text-[#FA3105]">00.30s</span>

            </section>

          </section>

          <button
            type="submit"
            class="w-full h-12 rounded-full px-5 py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105]"
          >
            <span
              class="outfit-bold font-bold text-base leading-[19.36px] text-white"
              >Verify account</span
            >
          </button>

        </form>

      </section>
    </main>

    <footer class="h-[53px] mt-5 flex justify-between items-end">

      <section>
        <span
          class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]"
          >©2024 Zipkod.ng</span
        >
      </section>

      <section>
        <a
          href="#"
          class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]"
          >Privacy policy</a
        >
      </section>

    </footer>

  </div>
</template>

<style scoped></style>
