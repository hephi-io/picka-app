<script setup>
import { ref } from "vue";
import { Loader2 } from "lucide-vue-next";
import VueGoogleAutocomplete from "vue-google-autocomplete";

import CheckIcon from "@/assets/svgs/CheckIcon.vue";
import UncheckedIcon from "@/assets/svgs/UncheckedIcon.vue";
import ArrowDown from "@/assets/svgs/ArrowDown.vue";

import { useRouter } from "vue-router";

// Define business options for the select dropdown
import { businessOptions } from "@/services";
import { createOrg } from "@/services/orgs";

const router = useRouter();


let isSubmitting = ref(false);
let errorMessage = ref("");


// RADIO BUTTONS
const handleClickForBusiness = () => {
  isBusinessAccount.value = true;
  isPersonalAccount.value = false;
};

const handleClickForPersonal = () => {
  isPersonalAccount.value = true;
  isBusinessAccount.value = false;
};

let isBusinessAccount = ref(true);
let isPersonalAccount = ref(false);

const checkedStyle =
  "w-[48.88%] flex gap-x-2 items-center rounded-md border border-[#E3573E] hover:cursor-pointer md:w-[48.53%] md:gap-x-4 lg:w-[48.2%] lg:rounded-xl p-2 md:px-4 md:py-3";
const uncheckedStyle =
  "w-[48.88%] flex gap-x-2 items-center rounded-md border border-[#9F9F9F] hover:cursor-pointer md:w-[48.53%] md:gap-x-4 lg:w-[48.2%] lg:rounded-xl p-2 md:px-4 md:py-3";
//******************************************* */

// longitude and latitude
const latitude = ref("");
const longitude = ref("");
const address = ref("");

// FLAG DROPDOWN
const toggleDropdown = () => {
  isDropDownOpen.value = !isDropDownOpen.value;
};

const selectOptionAndCloseDropdown = (option) => {
  selectedOptionIcon.value = option.icon;
  selectedOptionNumber.value = option.number;
  isDropDownOpen.value = false;
};

const closeDropdownOnScreenClick = () => {
  isDropDownOpen.value = false;
};

const isDropDownOpen = ref(false);
const selectedOptionIcon = ref(null);
const selectedOptionNumber = ref(null);
const options = ref([
  { icon: "/src/assets/svgs/nigerian-flag.svg", number: "+234" },
]);
//***************************************************** */

// FOR SELECT BUSINESS TYPE
const selectedBusinessType = ref("");

function getAddressData(addressData, placeResultData, id) {
  address.value = placeResultData.formatted_address || addressData;
  latitude.value = placeResultData.geometry.location.lat().toString();
  longitude.value = placeResultData.geometry.location.lng().toString();
}

const organizations = ref({
  address,
  business_type: selectedBusinessType,
  email: "",
  latitude,
  longitude,
  name: "",
  phone_no: "",
});

const handleSubmit = async () => {
  // Validation
  if (
    !organizations.value.name ||
    !selectedBusinessType.value ||
    !organizations.value.email ||
    !organizations.value.phone_no ||
    !latitude.value ||
    !longitude.value ||
    !organizations.value.address
  ) {
    if (!organizations.value.name) {
      errorMessage.value = "Business name is required.";
    } else if (!selectedBusinessType.value) {
      errorMessage.value = "Business type is required.";
    } else if (!organizations.value.email) {
      errorMessage.value = "Business email is required.";
    } else if (!organizations.value.phone_no) {
      errorMessage.value = "Phone number is required.";
    } else if (!latitude.value || !longitude.value) {
      errorMessage.value = "Business address is required.";
    }
    console.error("Validation failed:", errorMessage.value);
    return;
  }
  console.log("Form data before submission:", organizations.value);
  try {
    isSubmitting.value = true;
    await createOrg(organizations.value);
    orgStore

    router.push("/");
  } catch (error) {
    console.error("Error submitting form:", error);
    errorMessage.value =
      "An error occurred while submitting the form. Please try again.";
  } finally {
    // Reset the form
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="p-4 md:p-8">
    <main class="md:flex md:justify-center">
      <section class="md:w-[83.12%] lg:w-[36.3%]">
        <header class="hidden md:flex md:justify-center md:mb-[60px]">
          <svg
            width="91"
            height="33"
            viewBox="0 0 91 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1146 6.88656C32.337 6.88656 34.1215 5.53611 34.4491 3.71152C34.7767 1.85045 33.5746 0.5 31.2804 0.5C28.9862 0.5 27.2735 1.85045 26.9459 3.71152C26.6183 5.53611 27.8568 6.88656 30.1146 6.88656ZM16.3352 7.98074C13.676 7.98074 11.6366 9.14883 10.1069 10.9734L10.5437 8.38194H4.27896L0 32.5H6.2647L7.62875 24.8062C8.50332 26.5214 10.3971 27.6894 12.8742 27.6894C18.4109 27.6894 22.7454 23.3828 23.6928 17.908C24.6766 12.2874 21.7626 7.98074 16.3352 7.98074ZM17.3917 17.8716C16.9185 20.5725 14.951 22.7618 12.2918 22.7618C9.63269 22.7618 8.21212 20.7548 8.75812 17.6882C9.26773 14.6956 11.4901 12.9439 13.9672 12.9439C16.6264 12.9439 17.8649 15.1332 17.3908 17.8706L17.3917 17.8716ZM71.1321 8.3829H64.1739L59.2895 15.043C59.9342 12.7481 60.2647 10.5358 60.5061 8.79946C60.6938 7.44901 61.1766 3.38806 61.1766 3.38806H54.9167C54.9167 3.38806 54.4521 7.3991 54.2375 8.72748C53.2049 15.14 51.2086 22.1408 44.2255 22.1408C41.2043 22.1408 38.6831 20.5552 39.1572 17.8543C39.6304 15.1534 41.962 13.2558 44.8395 13.2558C45.7122 13.2558 47.4345 13.707 48.1864 15.0123L52.2863 10.4455C50.016 8.54031 47.5609 7.99994 45.4229 7.99994C38.9752 7.99994 33.905 11.8804 33.0228 17.8361C32.1559 23.6938 36.9895 27.7086 43.4372 27.7086C51.5698 27.7086 55.7012 23.5517 57.9121 18.817L58.0739 18.8218L61.3739 27.2892H68.3321L64.3128 17.4512L71.1331 8.38386L71.1321 8.3829ZM84.7363 8.3829L84.2995 10.9014C83.4249 9.14979 81.5311 7.9817 79.054 7.9817C73.5173 7.9817 69.2192 12.3248 68.2354 17.7996C67.2516 23.3837 70.1656 27.6904 75.5931 27.6904C78.2522 27.6904 80.328 26.5588 81.8578 24.6977L81.421 27.2892H87.6857L91 8.38386H84.7353L84.7363 8.3829ZM83.1701 17.981C82.6241 20.9737 80.4381 22.7618 77.961 22.7618C75.3019 22.7618 74.0633 20.5725 74.5375 17.7977C75.0107 15.1332 76.9782 12.9439 79.6373 12.9439C82.2965 12.9439 83.717 14.9509 83.171 17.98L83.1701 17.981ZM26.6901 8.3829L23.3758 27.2882H29.6404L32.9548 8.3829H26.6901Z"
              fill="#1E1E1E"
            />
          </svg>
        </header>
        <form
          class="md:rounded-2xl md:border md:border-[#DFDFDF] md:p-12 lg:p-6"
          @submit.prevent="handleSubmit"
        >
          <header class="mb-9 md:mb-10 lg:mb-[60px]">
            <h1
              class="font-semibold text-lg leading-[134%] tracking-[0%] text-center text-[#1B1B1B] md:text-xl lg:text-2xl lg:leading-[32.25px] mb-4 lg:mb-1"
            >
              Account setup
            </h1>
            <p
              class="text-sm leading-[100%] tracking-[0%] text-center text-[#26203B] lg:text-base lg:leading-[19.36px]"
            >
              To proceed with your account setup, we require additional information.
            </p>
          </header>
          <section class="mb-[102px] md:mb-10 lg:mb-[60px]">
            <section class="mb-4 md:mb-8">
              <div class="mb-[10px] lg:mb-2">
                <label
                  for="account-type"
                  class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[19.36px]"
                >
                  Select account type
                </label>
              </div>
              <div class="flex justify-between">
                <button
                  :class="[isBusinessAccount ? checkedStyle : uncheckedStyle]"
                  @click="handleClickForBusiness"
                >
                  <CheckIcon v-if="isBusinessAccount"></CheckIcon>
                  <UncheckedIcon v-else></UncheckedIcon>
                  <span
                    class="outfit-medium font-medium text-sm leading-[22px] tracking-[0%] text-[#262626]"
                    >Business account</span
                  >
                </button>
                <button
                  disabled
                  :class="[isPersonalAccount ? checkedStyle : uncheckedStyle]"
                  @click="handleClickForPersonal"
                >
                  <CheckIcon v-if="isPersonalAccount"></CheckIcon>
                  <UncheckedIcon v-else></UncheckedIcon>
                  <span
                    class="outfit-medium font-medium text-sm leading-[22px] tracking-[0%] text-[#262626]"
                    >Personal account</span
                  >
                </button>
              </div>
            </section>
            <section class="flex justify-between mb-4 md:mb-8">
              <div class="w-[48.88%] md:w-[48.53%]">
                <div>
                  <label 
                    for="first-name"
                    class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[16.94px]"
                  >
                    First name
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    class="w-full h-10 rounded-md border border-[#9F9F9F] outline-none outfit-normal text-sm leading-[100%] tracking-[0%] text-[#9C9AA5] focus:border-[#E3573E] md:h-12 lg:rounded-xl lg:leading-[16.94px] px-3 md:px-4" 
                    type="text" 
                    name="first-name"
                  >
                </div>
              </div>
              <div class="w-[48.88%] md:w-[48.53%]">
                <div>
                  <label 
                    for="last-name"
                    class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[16.94px]"
                  >
                    Last name
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    class="w-full h-10 rounded-md border border-[#9F9F9F] outline-none outfit-normal text-sm leading-[100%] tracking-[0%] text-[#9C9AA5] focus:border-[#E3573E] md:h-12 lg:rounded-xl lg:leading-[16.94px] px-4" 
                    type="text" 
                    name="last-name"
                  >
                </div>
              </div>
            </section>
            <section :class="[isBusinessAccount ? 'mb-4 md:mb-8' : 'hidden']">
              <div class="mb-2">
                <label
                  for="business-name"
                  class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[19.36px]"
                  >Business name</label
                >
              </div>
              <input
                type="text"
                name="business-name"
                placeholder="Enter name"
                v-model="organizations.name"
                class="w-full h-10 rounded-md border border-[#0F0F0F66] outline-none outfit-normal text-sm leading-[100%] tracking-[0px] text-[#9C9AA5] focus:border-[#E3573E] md:h-12 md:border-[#9F9F9F] lg:rounded-xl lg:leading-[16.94px] px-3 md:px-4"
              />
            </section>
            <section :class="[isBusinessAccount ? 'mb-4 md:mb-8' : 'hidden']">
              <div class="mb-2">
                <label
                  for="business-type"
                  class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[19.36px]"
                >
                  Type of business
                </label>
              </div>
              <select
                id="business-type"
                class="w-full h-10 rounded-md border border-[#0F0F0F66] outline-none outfit-normal text-sm leading-[100%] tracking-[0%] text-[#9C9AA5] appearance-none focus:border-[#E3573E] md:h-12 lg:rounded-xl lg:border-[#9F9F9F] lg:leading-[16.94px] lg:text-[#26203B] px-3 md:px-4"
                v-model="selectedBusinessType"
              >
                <option disabled value="">Select an option</option>
                <option
                  v-for="option in businessOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </section>
            <section class="mb-4 md:mb-8">
              <div class="mb-2">
                <label
                  for="business-address"
                  class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[19.36px]"
                >
                  Business address
                </label>
              </div>
              <vue-google-autocomplete 
                id="map" 
                classname="w-full h-10 rounded-md border border-[#0F0F0F66] outline-none outfit-normal text-sm leading-[100%] tracking-[0px] text-[#9C9AA5] focus:border-[#E3573E] md:h-12 md:border-[#9F9F9F] lg:rounded-xl lg:leading-[16.94px] px-3 md:px-4" 
                placeholder="Enter address" 
                v-on:placechanged="getAddressData"
              >
              </vue-google-autocomplete>
            </section>
            <section class="mb-4 md:mb-8">
              <div class="mb-2">
                <label
                  for="business-email"
                  class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base lg:leading-[19.36px]"
                >
                  Business email
                </label>
              </div>
              <input
                type="text"
                name="business-email"
                placeholder="Enter email"
                v-model="organizations.email"
                class="w-full h-10 rounded-md border border-[#0F0F0F66] outline-none outfit-normal text-sm leading-[100%] tracking-[0px] text-[#9C9AA5] focus:border-[#E3573E] md:h-12 md:border-[#9F9F9F] lg:rounded-xl lg:leading-[16.94px] px-3 md:px-4"
              />
            </section>
            <section class="mb-4 md:mb-8">
              <section class="mb-1.5 lg:mb-2">
                <label
                  for="phone-number"
                  class="outfit-medium font-medium text-sm leading-[100%] tracking-[0%] text-[#26203B] md:text-base md:leading-6 lg:leading-[19.36px]"
                  >Phone Number</label
                >
              </section>
              <section class="flex justify-between">
                <section class="w-[39.66%] md:w-[26.10%] relative lg:w-[31.4%]">
                  <div
                    tabindex="0"
                    class="h-10 md:h-full rounded-md border border-[#9F9F9F] outline-none cursor-pointer focus:border-[#E3573E] lg:rounded-xl px-3 py-1.5 md:px-4 md:py-[10px]"
                    @click="toggleDropdown"
                  >
                    <div class="flex justify-between items-center">
                      <div class="flex gap-x-2 items-center">
                        <img
                          v-if="selectedOptionIcon"
                          :src="selectedOptionIcon"
                        />
                        <section>
                          <span
                            class="outfit-normal text-sm leading-[150%] tracking-[0%] text-[#ABAFB1] lg:leading-[21px]"
                          >
                            {{ selectedOptionNumber || "" }}
                          </span>
                        </section>
                      </div>
                      <ArrowDown :class="{ 'mt-1': !selectedOptionIcon }" />
                    </div>
                  </div>
                  <ul
                    v-if="isDropDownOpen" 
                    class="absolute z-10 w-full bg-white list-none border border-[#9F9F9F] rounded-lg px-4 py-[10px]"
                  >
                    <li
                      v-for="(option, index) in options"
                      :key="index"
                      class="flex gap-x-2 items-center cursor-pointer hover:bg-[#F0F0F0]"
                      @click="selectOptionAndCloseDropdown(option)"
                    >
                      <img :src="option.icon" class="mr-1" />
                      <span
                        class="outfit-normal text-sm leading-[150%] tracking-[0%] text-[#ABAFB1] lg:leading-[21px]"
                      >
                        {{ option.number }}
                      </span>
                    </li>
                  </ul>
                </section>
                <section class="w-[58.66%] md:w-[72.79%] lg:w-[67.3%]">
                  <input
                    type="text"
                    name="phone-number"
                    placeholder="1234567890"
                    v-model="organizations.phone_no"
                    class="w-full h-10 md:h-12 rounded-md border border-[#9F9F9F] outline-none outfit-normal text-sm leading-[150%] tracking-[0%] text-[#9C9AA5] focus:border-[#E3573E] lg:rounded-xl lg:leading-[16.94px] px-3 md:px-4"
                  />
                </section>
              </section>
            </section>
          </section>
          <button
            type="submit"
            class="w-full h-9 flex justify-center items-center rounded-md bg-[#1E1E1E] md:h-12 lg:rounded-full"
          >
            <Loader2
              class="w-5 h-5 mr-2 inline-flex animate-spin text-white"
              v-if="isSubmitting"
            />
            <span
              class="outfit-bold font-bold text-sm leading-[100%] tracking-[0%] text-white  md:text-base lg:leading-[19.36px]"
              >Finish Setup</span
            >
          </button>
        </form>
      </section>
    </main>
    <footer class="hidden md:h-[53px] md:flex md:justify-between md:items-end">
      <div>
        <span
          class="outfit-normal font-normal text-sm leading-[150%] tracking-normal text-[#4F4D55] lg:leading-[21px]"
          >©2024 Picka.ng</span
        >
      </div>
      <div>
        <a
          href="#"
          class="filson-pro text-sm leading-[150%] tracking-normal text-[#4F4D55] lg:leading-[21px]"
          >Privacy policy</a
        >
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
