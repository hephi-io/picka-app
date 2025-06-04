<script setup>
import { ref, onMounted } from 'vue';

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
          <svg width="91" height="33" viewBox="0 0 91 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1146 6.88656C32.337 6.88656 34.1215 5.53611 34.4491 3.71152C34.7767 1.85045 33.5746 0.5 31.2804 0.5C28.9862 0.5 27.2735 1.85045 26.9459 3.71152C26.6183 5.53611 27.8568 6.88656 30.1146 6.88656ZM16.3352 7.98074C13.676 7.98074 11.6366 9.14883 10.1069 10.9734L10.5437 8.38194H4.27896L0 32.5H6.2647L7.62875 24.8062C8.50332 26.5214 10.3971 27.6894 12.8742 27.6894C18.4109 27.6894 22.7454 23.3828 23.6928 17.908C24.6766 12.2874 21.7626 7.98074 16.3352 7.98074ZM17.3917 17.8716C16.9185 20.5725 14.951 22.7618 12.2918 22.7618C9.63269 22.7618 8.21212 20.7548 8.75812 17.6882C9.26773 14.6956 11.4901 12.9439 13.9672 12.9439C16.6264 12.9439 17.8649 15.1332 17.3908 17.8706L17.3917 17.8716ZM71.1321 8.3829H64.1739L59.2895 15.043C59.9342 12.7481 60.2647 10.5358 60.5061 8.79946C60.6938 7.44901 61.1766 3.38806 61.1766 3.38806H54.9167C54.9167 3.38806 54.4521 7.3991 54.2375 8.72748C53.2049 15.14 51.2086 22.1408 44.2255 22.1408C41.2043 22.1408 38.6831 20.5552 39.1572 17.8543C39.6304 15.1534 41.962 13.2558 44.8395 13.2558C45.7122 13.2558 47.4345 13.707 48.1864 15.0123L52.2863 10.4455C50.016 8.54031 47.5609 7.99994 45.4229 7.99994C38.9752 7.99994 33.905 11.8804 33.0228 17.8361C32.1559 23.6938 36.9895 27.7086 43.4372 27.7086C51.5698 27.7086 55.7012 23.5517 57.9121 18.817L58.0739 18.8218L61.3739 27.2892H68.3321L64.3128 17.4512L71.1331 8.38386L71.1321 8.3829ZM84.7363 8.3829L84.2995 10.9014C83.4249 9.14979 81.5311 7.9817 79.054 7.9817C73.5173 7.9817 69.2192 12.3248 68.2354 17.7996C67.2516 23.3837 70.1656 27.6904 75.5931 27.6904C78.2522 27.6904 80.328 26.5588 81.8578 24.6977L81.421 27.2892H87.6857L91 8.38386H84.7353L84.7363 8.3829ZM83.1701 17.981C82.6241 20.9737 80.4381 22.7618 77.961 22.7618C75.3019 22.7618 74.0633 20.5725 74.5375 17.7977C75.0107 15.1332 76.9782 12.9439 79.6373 12.9439C82.2965 12.9439 83.717 14.9509 83.171 17.98L83.1701 17.981ZM26.6901 8.3829L23.3758 27.2882H29.6404L32.9548 8.3829H26.6901Z" fill="#1E1E1E"/>
</svg>

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
        <span class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]">©2024 Picka.ng</span>
      </div>

      <div>
        <a href="#" class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]">Privacy policy</a>
      </div>

    </footer>

  </div>
</template>

<style scoped>
</style>