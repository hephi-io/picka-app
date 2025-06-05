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
            <svg width="91" height="33" viewBox="0 0 91 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.1146 6.88656C32.337 6.88656 34.1215 5.53611 34.4491 3.71152C34.7767 1.85045 33.5746 0.5 31.2804 0.5C28.9862 0.5 27.2735 1.85045 26.9459 3.71152C26.6183 5.53611 27.8568 6.88656 30.1146 6.88656ZM16.3352 7.98074C13.676 7.98074 11.6366 9.14883 10.1069 10.9734L10.5437 8.38194H4.27896L0 32.5H6.2647L7.62875 24.8062C8.50332 26.5214 10.3971 27.6894 12.8742 27.6894C18.4109 27.6894 22.7454 23.3828 23.6928 17.908C24.6766 12.2874 21.7626 7.98074 16.3352 7.98074ZM17.3917 17.8716C16.9185 20.5725 14.951 22.7618 12.2918 22.7618C9.63269 22.7618 8.21212 20.7548 8.75812 17.6882C9.26773 14.6956 11.4901 12.9439 13.9672 12.9439C16.6264 12.9439 17.8649 15.1332 17.3908 17.8706L17.3917 17.8716ZM71.1321 8.3829H64.1739L59.2895 15.043C59.9342 12.7481 60.2647 10.5358 60.5061 8.79946C60.6938 7.44901 61.1766 3.38806 61.1766 3.38806H54.9167C54.9167 3.38806 54.4521 7.3991 54.2375 8.72748C53.2049 15.14 51.2086 22.1408 44.2255 22.1408C41.2043 22.1408 38.6831 20.5552 39.1572 17.8543C39.6304 15.1534 41.962 13.2558 44.8395 13.2558C45.7122 13.2558 47.4345 13.707 48.1864 15.0123L52.2863 10.4455C50.016 8.54031 47.5609 7.99994 45.4229 7.99994C38.9752 7.99994 33.905 11.8804 33.0228 17.8361C32.1559 23.6938 36.9895 27.7086 43.4372 27.7086C51.5698 27.7086 55.7012 23.5517 57.9121 18.817L58.0739 18.8218L61.3739 27.2892H68.3321L64.3128 17.4512L71.1331 8.38386L71.1321 8.3829ZM84.7363 8.3829L84.2995 10.9014C83.4249 9.14979 81.5311 7.9817 79.054 7.9817C73.5173 7.9817 69.2192 12.3248 68.2354 17.7996C67.2516 23.3837 70.1656 27.6904 75.5931 27.6904C78.2522 27.6904 80.328 26.5588 81.8578 24.6977L81.421 27.2892H87.6857L91 8.38386H84.7353L84.7363 8.3829ZM83.1701 17.981C82.6241 20.9737 80.4381 22.7618 77.961 22.7618C75.3019 22.7618 74.0633 20.5725 74.5375 17.7977C75.0107 15.1332 76.9782 12.9439 79.6373 12.9439C82.2965 12.9439 83.717 14.9509 83.171 17.98L83.1701 17.981ZM26.6901 8.3829L23.3758 27.2882H29.6404L32.9548 8.3829H26.6901Z"
                fill="#1E1E1E" />
            </svg>

          </div>

          <div class="w-12 h-12 rounded-full p-3 bg-[#1E1E1E]">
            <img src="/menu-collapse.svg" alt="Cancel" @click="handleChange">
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
              <img src="/facebook-logo.svg" alt="Facebook Logo">
            </div>
            <div>
              <img src="/instagram-logo.svg" alt="Instagram Logo">
            </div>
            <div>
              <img src="/youtube-logo.svg" alt="Youtube Logo">
            </div>
            <div>
              <img src="/twitter-logo.svg" alt="Twitter Logo">
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
            <svg width="91" height="33" viewBox="0 0 91 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.1146 6.88656C32.337 6.88656 34.1215 5.53611 34.4491 3.71152C34.7767 1.85045 33.5746 0.5 31.2804 0.5C28.9862 0.5 27.2735 1.85045 26.9459 3.71152C26.6183 5.53611 27.8568 6.88656 30.1146 6.88656ZM16.3352 7.98074C13.676 7.98074 11.6366 9.14883 10.1069 10.9734L10.5437 8.38194H4.27896L0 32.5H6.2647L7.62875 24.8062C8.50332 26.5214 10.3971 27.6894 12.8742 27.6894C18.4109 27.6894 22.7454 23.3828 23.6928 17.908C24.6766 12.2874 21.7626 7.98074 16.3352 7.98074ZM17.3917 17.8716C16.9185 20.5725 14.951 22.7618 12.2918 22.7618C9.63269 22.7618 8.21212 20.7548 8.75812 17.6882C9.26773 14.6956 11.4901 12.9439 13.9672 12.9439C16.6264 12.9439 17.8649 15.1332 17.3908 17.8706L17.3917 17.8716ZM71.1321 8.3829H64.1739L59.2895 15.043C59.9342 12.7481 60.2647 10.5358 60.5061 8.79946C60.6938 7.44901 61.1766 3.38806 61.1766 3.38806H54.9167C54.9167 3.38806 54.4521 7.3991 54.2375 8.72748C53.2049 15.14 51.2086 22.1408 44.2255 22.1408C41.2043 22.1408 38.6831 20.5552 39.1572 17.8543C39.6304 15.1534 41.962 13.2558 44.8395 13.2558C45.7122 13.2558 47.4345 13.707 48.1864 15.0123L52.2863 10.4455C50.016 8.54031 47.5609 7.99994 45.4229 7.99994C38.9752 7.99994 33.905 11.8804 33.0228 17.8361C32.1559 23.6938 36.9895 27.7086 43.4372 27.7086C51.5698 27.7086 55.7012 23.5517 57.9121 18.817L58.0739 18.8218L61.3739 27.2892H68.3321L64.3128 17.4512L71.1331 8.38386L71.1321 8.3829ZM84.7363 8.3829L84.2995 10.9014C83.4249 9.14979 81.5311 7.9817 79.054 7.9817C73.5173 7.9817 69.2192 12.3248 68.2354 17.7996C67.2516 23.3837 70.1656 27.6904 75.5931 27.6904C78.2522 27.6904 80.328 26.5588 81.8578 24.6977L81.421 27.2892H87.6857L91 8.38386H84.7353L84.7363 8.3829ZM83.1701 17.981C82.6241 20.9737 80.4381 22.7618 77.961 22.7618C75.3019 22.7618 74.0633 20.5725 74.5375 17.7977C75.0107 15.1332 76.9782 12.9439 79.6373 12.9439C82.2965 12.9439 83.717 14.9509 83.171 17.98L83.1701 17.981ZM26.6901 8.3829L23.3758 27.2882H29.6404L32.9548 8.3829H26.6901Z"
                fill="#1E1E1E" />
            </svg>

          </div>

          <div class="w-12 h-12 rounded-full p-3 bg-[#1E1E1E]">
            <img src="/hamburger-menu.svg" alt="Hamburger menu" @click="handleChange">
          </div>

        </div>

        <!-- NAV -->
        <div class="hidden md:flex md:justify-center md:mb-16">

          <div
            class="lg:w-[90%] lg:h-[75px] md:w-full md:h-[81px] flex justify-between items-center px-6 rounded-full border border-[#EEEEEE] shadow-sm">

            <div><svg width="91" height="33" viewBox="0 0 91 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.1146 6.88656C32.337 6.88656 34.1215 5.53611 34.4491 3.71152C34.7767 1.85045 33.5746 0.5 31.2804 0.5C28.9862 0.5 27.2735 1.85045 26.9459 3.71152C26.6183 5.53611 27.8568 6.88656 30.1146 6.88656ZM16.3352 7.98074C13.676 7.98074 11.6366 9.14883 10.1069 10.9734L10.5437 8.38194H4.27896L0 32.5H6.2647L7.62875 24.8062C8.50332 26.5214 10.3971 27.6894 12.8742 27.6894C18.4109 27.6894 22.7454 23.3828 23.6928 17.908C24.6766 12.2874 21.7626 7.98074 16.3352 7.98074ZM17.3917 17.8716C16.9185 20.5725 14.951 22.7618 12.2918 22.7618C9.63269 22.7618 8.21212 20.7548 8.75812 17.6882C9.26773 14.6956 11.4901 12.9439 13.9672 12.9439C16.6264 12.9439 17.8649 15.1332 17.3908 17.8706L17.3917 17.8716ZM71.1321 8.3829H64.1739L59.2895 15.043C59.9342 12.7481 60.2647 10.5358 60.5061 8.79946C60.6938 7.44901 61.1766 3.38806 61.1766 3.38806H54.9167C54.9167 3.38806 54.4521 7.3991 54.2375 8.72748C53.2049 15.14 51.2086 22.1408 44.2255 22.1408C41.2043 22.1408 38.6831 20.5552 39.1572 17.8543C39.6304 15.1534 41.962 13.2558 44.8395 13.2558C45.7122 13.2558 47.4345 13.707 48.1864 15.0123L52.2863 10.4455C50.016 8.54031 47.5609 7.99994 45.4229 7.99994C38.9752 7.99994 33.905 11.8804 33.0228 17.8361C32.1559 23.6938 36.9895 27.7086 43.4372 27.7086C51.5698 27.7086 55.7012 23.5517 57.9121 18.817L58.0739 18.8218L61.3739 27.2892H68.3321L64.3128 17.4512L71.1331 8.38386L71.1321 8.3829ZM84.7363 8.3829L84.2995 10.9014C83.4249 9.14979 81.5311 7.9817 79.054 7.9817C73.5173 7.9817 69.2192 12.3248 68.2354 17.7996C67.2516 23.3837 70.1656 27.6904 75.5931 27.6904C78.2522 27.6904 80.328 26.5588 81.8578 24.6977L81.421 27.2892H87.6857L91 8.38386H84.7353L84.7363 8.3829ZM83.1701 17.981C82.6241 20.9737 80.4381 22.7618 77.961 22.7618C75.3019 22.7618 74.0633 20.5725 74.5375 17.7977C75.0107 15.1332 76.9782 12.9439 79.6373 12.9439C82.2965 12.9439 83.717 14.9509 83.171 17.98L83.1701 17.981ZM26.6901 8.3829L23.3758 27.2882H29.6404L32.9548 8.3829H26.6901Z"
                  fill="#1E1E1E" />
              </svg>
            </div>

            <div class="flex justify-between items-center gap-x-8">

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">Home</div>

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">Services</div>

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">FAQs</div>

              <div class="tt-firs-neue-medium font-medium text-[15px] leading-[19.35px] text-[#1E1E1E]">Support</div>

            </div>

            <div
              class="bg-gradient-to-r from-[#FF7C33] to-[#FA3105] tt-firs-neue-semibold font-semibold text-[15px] leading-[19.35px] text-[#FFFAF8] rounded-full py-3 px-6">
              Get Started</div>

          </div>

        </div>

        <!-- HEADING -->
        <div class="flex justify-center mb-[60px] md:mb-9">

          <div class="md:w-[68%]">

            <div class="flex justify-center mb-3 md:mb-4">
              <div
                class="tt-firs-neue-black text-center font-black text-[32px] leading-[41.28px] text-[#1E1E1E] md:w-3/4 md:text-5xl md:leading-[61.92px]">
                Your <span class="text-[#FF7830]">Ultimate</span> Logistics Partner
              </div>
            </div>

            <div class="mb-3 text-center">
              <span
                class="tt-firs-neue-medium font-medium text-base leading-[20.64px] text-[#737373] md:text-lg md:leading-[23.33px]">Experience
                the future of logistics with Picka -- delivering excellence, one mile at a time.</span>
            </div>

            <div class="flex justify-center md:hidden">
              <button class="rounded-full px-6 py-3 bg-gradient-to-r from-[#FF7C33] to-[#FA3105]">
                <span class="tt-firs-neue-semibold font-semibold text-[15px] leading-[19.35px] text-[#FFFAF8]">Get
                  Started</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="flex md:hidden">

      <div class="w-[3.5%]"></div>

      <div class="mb-2">
        <img src="/small-bike-only.png" alt="Small bike">
      </div>

    </div>

    <div class="flex justify-center">

      <div class="w-[95%] md:w-[90%] lg:w-[75%]">

        <!-- MOBILE PIC -->
        <div class="md:hidden">

          <div>
            <img src="/map.png" alt="Map">
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

<style scoped></style>