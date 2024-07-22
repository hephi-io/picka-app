<script setup>
import { ref } from 'vue'

let isMenuExpanded = ref(false)

const styleForExpandedMenu = "pb-16 md:pt-10 md:pb-[120px]"

const styleForClosedMenu = "pt-6 pb-16 md:pt-10 md:pb-[120px]"

function handleChange() {
  isMenuExpanded.value = !isMenuExpanded.value
}
</script>

<template>
  <div :class="[isMenuExpanded ? styleForExpandedMenu : styleForClosedMenu]">

    <div v-if="isMenuExpanded" class="absolute w-full z-10 pt-6 bg-[#FF7C33] flex justify-center md:hidden pb-4">

      <div class="w-[95%]">

        <div class="flex justify-between mb-[93px]">

          <div>
            <img
              src="/zipkod-dropdown.svg"
              alt="Zipkod Logo"
            >
          </div>

          <div class="w-12 h-12 rounded-full p-3 bg-[#1E1E1E]">
            <img
              src="/menu-collapse.svg"
              alt="Cancel"
              @click="handleChange"
            >
          </div>

        </div>

        <div class="rounded-3xl bg-white p-6 mb-44">

          <div class="bg-[#1E1E1E] rounded-xl px-6 py-3">
            <span class="tt-firs-neue-medium font-medium text-2xl leading-[30.96px] text-white">Home</span>
          </div>

          <div class="px-6 py-3">
            <span class="tt-firs-neue-medium font-medium text-2xl leading-[30.96px] text-[#444444]">Services</span>
          </div>

          <div class="px-6 py-3">
            <span class="tt-firs-neue-medium font-medium text-2xl leading-[30.96px] text-[#444444]">FAQs</span>
          </div>

          <div class="px-6 py-3">
            <span class="tt-firs-neue-medium font-medium text-2xl leading-[30.96px] text-[#444444]">Support</span>
          </div>

        </div>

        <div class="flex justify-between">

          <div class="flex justify-between gap-x-3">
            <div>
              <img
                src="/facebook-logo.svg"
                alt="Facebook Logo"
              >
            </div>
            <div>
              <img
                src="/instagram-logo.svg"
                alt="Instagram Logo"
              >
            </div>
            <div>
              <img 
                src="/youtube-logo.svg" 
                alt="Youtube Logo"
              >
            </div>
            <div>
              <img
                src="/twitter-logo.svg"
                alt="Twitter Logo"
              >
            </div>
          </div>

          <div class="flex items-end">
            <div class="tt-firs-neue-normal font-normal text-[10px] leading-[14px] text-[#FFFFFF40]">
              © 2024 — Copyright
            </div>
          </div>

        </div>

      </div>

    </div>
  
    <div class="flex justify-center">

      <div class="w-[95%] md:w-[90%] lg:w-[75%]">

        <!-- MOBILE NAV -->
        <div class="flex justify-between mb-[60px] md:hidden">

          <div class="flex justify-start items-center">
            <img 
              src="/zipkod-logo.svg" 
              alt="zipkod-logo"
            >
          </div>

          <div class="w-12 h-12 rounded-full p-3 bg-[#1E1E1E]">
            <img
              src="/hamburger-menu.svg"
              alt="Hamburger menu"
              @click="handleChange"
            >
          </div>

        </div>

        <!-- NAV -->
        <div class="hidden md:flex md:justify-center md:mb-16">

          <div class="lg:w-[90%] lg:h-[75px] md:w-full md:h-[81px] flex justify-between items-center px-6 rounded-full border border-[#EEEEEE] shadow-sm">

            <div><img src="/zipkod-logo.svg" alt="zipkod-logo"/></div>

            <div class="flex justify-between items-center gap-x-8">

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">Home</div>

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">Services</div>

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">FAQs</div>

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">Support</div>

            </div>

            <div class="bg-gradient-to-r from-[#FF7C33] to-[#FA3105] tt-firs-neue-semibold font-semibold text-[15px] leading-[19.35px] text-[#FFFAF8] rounded-full py-3 px-6">Get Started</div>

          </div>

        </div>

        <!-- HEADING -->
        <div class="flex justify-center mb-[60px] md:mb-9">

          <div class="md:w-[68%]">

            <div class="flex justify-center mb-3 md:mb-4">
              <div class="tt-firs-neue-black text-center font-black text-[32px] leading-[41.28px] text-[#1E1E1E] md:w-3/4 md:text-5xl md:leading-[61.92px]">
                Your <span class="text-[#FF7830]">Ultimate</span> Logistics Partner
              </div>
            </div>

            <div class="mb-3 text-center">
              <span class="tt-firs-neue-medium font-medium text-base leading-[20.64px] text-[#737373] md:text-lg md:leading-[23.33px]">Experience the future of logistics with Zipkod -- delivering excellence, one mile at a time.</span>
            </div>

            <div class="flex justify-center md:hidden">
              <button class="rounded-full px-6 py-3 bg-gradient-to-r from-[#FF7C33] to-[#FA3105]">
                <span class="tt-firs-neue-semibold font-semibold text-[15px] leading-[19.35px] text-[#FFFAF8]">Get Started</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="flex md:hidden">

      <div class="w-[3.5%]"></div>

      <div class="mb-2">
        <img
          src="/small-bike-only.png"
          alt="Small bike"
        >
      </div>

    </div>

    <div class="flex justify-center">

      <div class="w-[95%] md:w-[90%] lg:w-[75%]">

        <!-- MOBILE PIC -->
        <div class="md:hidden">

          <div>
            <img
              src="/map.png"
              alt="Map"
            >
          </div>

        </div>

        <!-- PIC -->
        <div class="hidden md:block">
          <img src="/bike2.png" alt="bikes and pics">
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
</style>