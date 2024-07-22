<script setup>
import { ref } from 'vue'

let id = ref(0)

const faqWindows = ref(
  [
    {
      id: id++,
      heading: "How do I track my package?"
    },

    {
      id: id++,
      heading: "Can I schedule deliveries at specific times?"
    },
    
    {
      id: id++,
      heading: "What technology integrations are available?"
    },
    
    {
      id: id++,
      heading: "How do I place an order?"
    },
    
    {
      id: id++,
      heading: "How can I track my deliveries?"
    }
  ]
)
</script>

<template>
  <div class="flex justify-center py-16 md:py-20 lg:pt-20 lg:pb-[120px]">

    <div class="w-[95%] md:w-[90%] lg:w-[75%]">

      <div class="tt-firs-neue-semibold font-semibold text-[13px] leading-[16.77px] text-[#444444] mb-5 md:mb-6 md:text-base md:leading-[20.64px]">
        FAQS
      </div>

      <div>

        <div class="rounded-2xl shadow-md p-4 md:px-[29px] md:py-10 md:rounded-3xl">

          <div class="flex justify-between mb-9">

            <div class="flex items-center tt-firs-neue-bold font-bold text-lg text-[#FF7830] md:text-xl">
              How do I sign up for ZipKod’s services?
            </div>

            <div>
              <img
                src="/minimize-button.svg"
                alt="Minimize button"
              >
            </div>

          </div>

          <div class="tt-firs-neue-medium font-medium text-lg leading-[23.4px] text-[#737373]">
          Signing up with ZipKod is easy. Simply visit our website and fill out the registration form under the "Sign Up" section. Our team will then guide you through the setup process to integrate our logistics platform into your business operations.
          </div>

        </div>

        <div>
          <div class="flex justify-between rounded-2xl p-4 mt-4 shadow-md md:mt-[10px] md:px-[29px] md:py-10 md:rounded-3xl" v-for="faqWindow in faqWindows" :key="faqWindow.id">
            <div class="tt-firs-neue-bold font-bold text-lg text-[#444444] md:text-xl">
              {{ faqWindow.heading }}
            </div>
            <div>
              <img
                src="/maximize-button.svg"
                alt="Maximize button"
              >
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
</style>