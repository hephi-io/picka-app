<script setup>
import { ref, onMounted } from 'vue';

import ZipkodLogo from '@/assets/svgs/ZipkodLogo.vue';
import CheckIcon from '@/assets/svgs/CheckIcon.vue';
import UncheckedIcon from '@/assets/svgs/UncheckedIcon.vue';
import ArrowDown from '@/assets/svgs/ArrowDown.vue';
import { Button } from './ui/button';

// RADIO BUTTONS
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

// FLAG DROPDOWN
const isDropDownOpen = ref(false);
const selectedOptionIcon = ref(null);
const selectedOptionNumber = ref(null);
const options = ref([{icon: '/src/assets/svgs/nigerian-flag.svg', number: '+234'}]);

const toggleDropdown = () => {
  isDropDownOpen.value = !isDropDownOpen.value
};

const selectOptionAndCloseDropdown = (option) => {
  selectedOptionIcon.value = option.icon;
  selectedOptionNumber.value = option.number;
  isDropDownOpen.value = false;
};

const closeDropdownOnScreenClick = () => {
  isDropDownOpen.value = false;
};

// FOR SELECT BUSINESS TYPE
const selectedBusinessType = ref("");

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

            <h1 class="space-mono-bold font-semibold text-2xl leading-[32.25px] text-[#1B1B1B] mb-1">
              Account setup
            </h1>

            <p class="outfit-normal font-normal text-base leading-[19.36px] text-[#26203B]">
              To proceed with your account setup, we require additional information to complete the verification process.
            </p>

          </header>

          <section class="mb-[60px]">

            <section class="flex justify-between mb-8">

              <button :class="[ isBusinessAccount ? checkedStyle : uncheckedStyle]" @click="handleClickForBusiness">
                <CheckIcon class="mr-4" v-if="isBusinessAccount"></CheckIcon>
                <UncheckedIcon class="mr-4" v-else></UncheckedIcon>
                <span class="outfit-medium font-medium text-sm leading-[22px] text-[#262626]">Business account</span>
              </button>

              <button :class="[ isPersonalAccount ? checkedStyle : uncheckedStyle]" @click="handleClickForPersonal">
                <CheckIcon class="mr-4" v-if="isPersonalAccount"></CheckIcon>
                <UncheckedIcon class="mr-4" v-else></UncheckedIcon>
                <span class="outfit-medium font-medium text-sm leading-[22px] text-[#262626]">Personal account</span>
              </button>

            </section>

            <section class="flex justify-between mb-8">

              <section class="w-[48.2%]">

                <div>
                  <label for="first-name" class="outfit-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">First name</label>
                </div>  

                <input type="text" name="first-name" class="w-full h-12 rounded-xl border border-[#9F9F9F] outline-none focus:border-[#E3573E] px-4 py-2 outfit-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
              </section>
              
              <section class="w-[48.2%]">
                <div>
                  <label for="last-name" class="outfit-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Last name</label>
                </div>
                <input type="text" name="last-name" class="w-full h-12 rounded-xl border border-[#9F9F9F] outline-none focus:border-[#E3573E] px-4 py-2 outfit-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
              </section>
            
            </section>

            <section :class="[isBusinessAccount ? 'mb-8' : 'hidden']">
              <div>
                <label for="business-name" class="outfit-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Business name</label>
              </div>
              <input type="text" name="business-name" placeholder="Enter business name" class="w-full h-12 rounded-xl border border-[#9F9F9F] outline-none focus:border-[#E3573E] px-4 py-2 outfit-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
            </section>

            <section :class="[isBusinessAccount ? 'mb-8' : 'hidden']">
              <div>
                <label for="business-type" class="outfit-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Type of business</label>
              </div>
              <select name="business-type" class="w-full h-12 rounded-xl border border-[#9F9F9F] outline-none focus:border-[#E3573E] px-4 py-2 outfit-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5] appearance-none" v-model="selectedBusinessType">
                <option disabled value="">Select an option</option>
              </select>
            </section>

            <section class="mb-8">

              <section>
                <label for="phone-number" class="outfit-medium font-medium text-base leading-[19.36px] text-[#26203B] mb-2">Phone Number</label>
              </section>

              <section class="flex justify-between">

                <section class="w-[31.4%] relative">

                  <div tabindex="0" class="h-full px-4 py-[10px] rounded-lg border border-[#9F9F9F] outline-none focus:border-[#E3573E] cursor-pointer" @click="toggleDropdown">
                    <div class="flex items-center justify-between">

                      <img v-if="selectedOptionIcon" :src="selectedOptionIcon">

                      <section>
                        <span class="outfit-normal font-normal text-sm leading-[21px] text-[#ABAFB1]">
                          {{ selectedOptionNumber || '' }}
                        </span>
                      </section>

                      <ArrowDown :class="{'mt-1' : !selectedOptionIcon}" />

                    </div>
                  </div>

                  <ul v-if="isDropDownOpen" class="bg-white w-full px-4 py-[10px] absolute z-10 list-none border border-[#9F9F9F] rounded-lg">
                    <li v-for="(option, index) in options" :key="index" class="cursor-pointer hover:bg-[#F0F0F0] flex" @click="selectOptionAndCloseDropdown(option)">
                      <img :src="option.icon" class="mr-1"> 
                      <span class="outfit-normal font-normal text-sm leading-[21px] text-[#ABAFB1]">
                        {{ option.number }}
                      </span>
                    </li>
                  </ul>

                </section>

                <section class="w-[67.3%]">
                  <input type="number" name="phone-number" placeholder="1234567890" class="w-full h-12 rounded-xl border border-[#9F9F9F] outline-none focus:border-[#E3573E] px-4 py-2 outfit-normal font-normal text-sm leading-[16.94px] text-[#9C9AA5]">
                </section>

              </section>
      
            </section>

          </section>

          <button type="submit" class="w-full h-12 rounded-full px-5 py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105]">
            <span class="outfit-bold font-bold text-base leading-[19.36px] text-white">Finish Setup</span>
          </button>

        </form>

      </section>
    </main>

    <footer class="h-[53px] mt-5 flex justify-between items-end">

      <div>
        <span class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]">©2024 Zipkod.ng</span>
      </div>

      <div>
        <a href="#" class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]">Privacy policy</a>
      </div>

    </footer>

  </div>
</template>

<style scoped>
</style>