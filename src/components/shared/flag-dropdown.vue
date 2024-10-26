<script setup>
import { ref } from "vue";
import ArrowDown from "@/assets/svgs/ArrowDown.vue";

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
</script>

<template>
  <div class="w-[26.76%] relative">

    <div 
      tabindex="0" 
      class="h-full pr-2 pl-4 py-[10px] flex justify-center items-center rounded-lg rounded-e-none border border-[#E4E7EC] border-e-0 focus:border-black focus:border-2 cursor-pointer" 
      @click="toggleDropdown"
    >
      <div class="w-full flex justify-between items-center">

        <div class="w-[74.24%] flex mr-2 items-center gap-x-1">

          <img 
            class="w-[29.17px] h-5"
            v-if="selectedOptionIcon" 
            :src="selectedOptionIcon"
          >

          <span class="font-normal text-sm leading-[21px] text-[#ABAFB1]">
            {{ selectedOptionNumber || '' }}
          </span>

        </div>

        <ArrowDown class="w-[17.17%]" />

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

  </div>
</template>

<style lang="css" scoped></style>