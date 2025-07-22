<template>
  <div class="relative h-full">
    <motion.div
      v-if="activeSlide === 1"
      class="w-full h-full"
      :initial="{ x: '10px' }"
      :animate="{ x: '0' }"
    >
      <img
        src="../../../assets/images/login-slider-1.jpg"
        alt="login-slider-image"
        class="h-full w-full object-cover rounded-[20px]"
      />
    </motion.div>

    <motion.div
      v-if="activeSlide === 2"
      class="w-full h-full"
      :initial="{ x: '10px' }"
      :animate="{ x: '0' }"
    >
      <img
        src="../../../assets/images/login-slider-2.jpg"
        alt="login-slider-image"
        class="h-full w-full object-cover rounded-[20px]"
      />
    </motion.div>

    <motion.div
      v-if="activeSlide === 3"
      class="w-full h-full"
      :initial="{ x: '10px' }"
      :animate="{ x: '0' }"
    >
      <img
        src="../../../assets/images/login-slider-3.jpg"
        alt="login-slider-image"
        class="h-full w-full object-cover rounded-[20px]"
      />
    </motion.div>

    <div
      class="linear-gradient h-full absolute z-10 w-full top-0 flex items-end justify-center pb-20"
    >
      <div>
        <h1 class="text-[32px] text-center text-white font-bold mb-2">
          {{ (slideContent as any)[activeSlide].title }}
        </h1>

        <p class="text-xl text-center text-white w-[349px] mx-auto">
          {{ (slideContent as any)[activeSlide].content }}
        </p>

        <div class="flex justify-center gap-x-[4px] mx-auto mt-12">
          <span
            v-for="i in 3"
            :key="i"
            class="h-2 rounded-[10px] cursor-pointer transition-width duration-300"
            :class="[i === activeSlide ? 'w-6 bg-white' : 'w-2 bg-[#FFBC96]']"
            @click="activeSlide = i"
          >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { motion } from "motion-v";

const activeSlide = ref(1);

setInterval(() => {
  if (activeSlide.value !== 3) {
    activeSlide.value++;
  } else {
    activeSlide.value = 1;
  }
}, 4000);

const slideContent = {
  1: {
    title: "Reliable and Timely Deliveries",
    content: "Count on fast, dependable deliveries every time.",
  },
  2: {
    title: "Scalable Solutions",
    content: "Easily scale your operations with flexible fleet management.",
  },
  3: {
    title: "Real-Time Tracking",
    content: "Monitor deliveries in real-time for full transparency.",
  },
};
</script>

<style scoped>
.linear-gradient {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.37) 80.05%,
    rgba(241, 111, 70, 0.7) 100%
  );
  /* url("../../../assets/images/login-slider-1.jpg"), #e3e3e3; */
  border-radius: 20px;
}
</style>
