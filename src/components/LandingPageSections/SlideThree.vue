<script setup>
import { ref } from 'vue'

let id = ref(0)

const serviceWindows = ref(
  [
    {
      id: id++,
      src: "/bike-man.png",
      alt: "Bike man",
      heading: "Last-Mile Delivery",
      paragraph: `
        At Zipkod, we understand that the last mile is a critical phase in moving goods. That's why we ensure that your items reach their final destination quickly and securely.
      `
    },

    {
      id: id++,
      src: "/guy-on-keyboard.png",
      alt: "Guy on keyboard",
      heading: "Business Integrations",
      paragraph: `
        We offer API integrations for businesses, allowing them to concentrate on generating revenue while we handle the logistics
      `
    },

    {
      id: id++,
      src: "/real-time-tracking.png",
      alt: "Real time tracking",
      heading: "Real-time Tracking",
      paragraph: `
        With real-time tracking, individuals and businesses can stay informed about their order's location every step of the way.
      `
    },

    {
      id: id++,
      src: "/warehouse.png",
      alt: "Warehouse",
      heading: "Bulk Ordering",
      paragraph: `
        At Zipkod, our bulk order feature streamlines the creation of multiple orders and offers discounted rates, saving businesses time and money
      `
    }
  ]
)

</script>

<template>
  <div class="py-16 md:py-20 lg:pt-20 lg:pb-[120px]">

    <div class="flex justify-center mb-4">

      <div class="w-[95%] md:w-[90%] lg:w-[75%]">

        <div class="flex justify-start items-center tt-firs-neue-semibold font-semibold text-[13px] leading-[16.77px] text-[#444444] md:text-base md:leading-[20.64px]">
          OUR SERVICES
        </div>

    	</div>

    </div>

    <div class="flex justify-center">

      <div class="w-[95%] md:w-[90%] lg:w-[75%] grid grid-cols-1 gap-12 md:grid-cols-2">

        <div class="rounded-[40px] px-4 pt-4 pb-6 shadow-2xl box-border md:px-6 md:pt-6 md:pb-8" v-for="serviceWindow in serviceWindows" :key="serviceWindow.id">

          <div class="mb-[10px]">
            <img
              :src="serviceWindow.src"
              :alt="serviceWindow.alt"
              class="w-full h-[426px]"
            >
          </div>

          <div class="tt-firs-neue-bold font-bold text-[#444444] mb-4 text-xl leading-[25.8px] lg:text-2xl lg:leading-[30.96px]">
            {{ serviceWindow.heading }}
          </div>

          <div class="tt-firs-neue-medium font-medium text-[#737373] text-base leading-[20.8px] md:text-lg md:leading-[23.4px]">
            {{ serviceWindow.paragraph }}
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
</style>