<script setup>
import { ref } from 'vue';

import ZipkodLogo from '@/assets/svgs/ZipkodLogo.vue';
import CheckIcon from '@/assets/svgs/CheckIcon.vue';
import UncheckedIcon from '@/assets/svgs/UncheckedIcon.vue';

let isBusinessAccount = ref(true);
let isPersonalAccount = ref(false);

const checkedStyle = "w-[48.2%] flex rounded-xl border border-[#E3573E] px-4 py-3";
const uncheckedStyle = "w-[48.2%] flex rounded-xl border border-[#9F9F9F] px-4 py-3";

const handleClickForBusiness = () => {
  isBusinessAccount.value = true;
  isPersonalAccount.value = false;
}

const handleClickForPersonal = () => {
  isPersonalAccount.value = true;
  isBusinessAccount.value = false;
}

const handleSubmit = (event) => {
  event.preventDefault();
}

</script>

<template>

  <div class="p-8">

    <main class="flex justify-center">

      <section class="w-[36.3%]">

        <header class="flex justify-center mb-[60px]">
          <ZipkodLogo />
        </header>

        <form class="rounded-2xl border border-[#DFDFDF] p-6" @submit="handleSubmit">

          <header class="mb-[60px]">

            <h1 class="tt-firs-neue-semibold font-semibold text-2xl leading-[32.25px] text-[#1B1B1B] mb-1">
              Account setup
            </h1>

            <p class="inter-normal font-normal text-base leading-[19.36px] text-[#26203B]">
              To proceed with your account setup, we require additional information to complete the verification process.
            </p>

          </header>

          <section class="mb-[60px]">

            <section class="flex justify-between mb-8">

              <button :class="[ isBusinessAccount ? checkedStyle : uncheckedStyle]" @click="handleClickForBusiness">
                <CheckIcon class="mr-4" v-if="isBusinessAccount"></CheckIcon>
                <UncheckedIcon class="mr-4" v-else></UncheckedIcon>
                <span class="inter-medium font-medium text-sm leading-[22px] text-[#262626]">Business account</span>
              </button>

              <button :class="[ isPersonalAccount ? checkedStyle : uncheckedStyle]" @click="handleClickForPersonal">
                <CheckIcon class="mr-4" v-if="isPersonalAccount"></CheckIcon>
                <UncheckedIcon class="mr-4" v-else></UncheckedIcon>
                <span class="inter-medium font-medium text-sm leading-[22px] text-[#262626]">Personal account</span>
              </button>

            </section>

            <section class="flex justify-between mb-8">

              <section class="w-[48.2%]">
                <div>
                  <label for="first-name" class="inter-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">First name</label>
                </div>  
                <input type="text" name="first-name" class="w-full h-12 rounded-xl border border-[#9F9F9F] px-4 py-2 inter-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
              </section>
              
              <section class="w-[48.2%]">
                <div>
                  <label for="last-name" class="inter-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Last name</label>
                </div>
                <input type="text" name="last-name" class="w-full h-12 rounded-xl border border-[#9F9F9F] px-4 py-2 inter-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
              </section>
            
            </section>

            <section :class="[isBusinessAccount ? 'mb-8' : 'hidden']">
              <div>
                <label for="business-name" class="inter-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Business name</label>
              </div>
              <input type="text" name="business-name" placeholder="Enter business name" class="w-full h-12 rounded-xl border border-[#9F9F9F] px-4 py-2 inter-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
            </section>

            <section :class="[isBusinessAccount ? 'mb-8' : 'hidden']">
              <div>
                <label for="business-type" class="inter-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Type of business</label>
              </div>
              <input type="text" name="business-type" placeholder="Select an option" class="w-full h-12 rounded-xl border border-[#9F9F9F] px-4 py-2 inter-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
            </section>

            <section class="mb-8">

              <section>
                <label for="phone-number" class="inter-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Phone Number</label>
              </section>

              <section class="flex justify-between">

                <section class="w-[31.4%]">
                  <div class="h-12 rounded-xl border border-[#9F9F9F]"></div>
                </section>

                <section class="w-[67.3%]">
                  <input type="number" name="phone-number" placeholder="1234567890" class="w-full h-12 rounded-xl border border-[#9F9F9F] px-4 py-2 inter-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
                </section>

              </section>
      
            </section>

          </section>

          <button type="submit" class="w-full h-12 rounded-full px-5 py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105]">
            <span class="inter-bold font-bold text-base leading-[19.36px] text-white">Finish Setup</span>
          </button>

        </form>

      </section>

    </main>

    <footer class="h-[53px] mt-5 flex justify-between items-end">

      <div>
        <span class="inter-normal font-normal text-sm leading-[21px] text-[#4F4D55]">©2024 Zipkod.ng</span>
      </div>

      <div>
        <a href="#" class="inter-normal font-normal text-sm leading-[21px] text-[#4F4D55]">Privacy policy</a>
      </div>

    </footer>

  </div>

</template>

<style scoped>
</style>