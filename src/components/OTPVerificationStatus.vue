<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Loader2 } from "lucide-vue-next";

const handleSubmit = (event) => {
  event.preventDefault();
};

const router = useRouter();
const isSubmitting = ref(false);
</script>

<template>
  <div class="relative h-screen md:p-8">
    <main class="h-full flex justify-center md:h-[88.57%] lg:items-center">
      <section class="md:w-[88.12%] lg:w-[36.3%]">
        <header class="hidden justify-center mb-[60px] md:flex lg:mb-10">
          <svg width="91" height="33" viewBox="0 0 91 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.1146 6.88656C32.337 6.88656 34.1215 5.53611 34.4491 3.71152C34.7767 1.85045 33.5746 0.5 31.2804 0.5C28.9862 0.5 27.2735 1.85045 26.9459 3.71152C26.6183 5.53611 27.8568 6.88656 30.1146 6.88656ZM16.3352 7.98074C13.676 7.98074 11.6366 9.14883 10.1069 10.9734L10.5437 8.38194H4.27896L0 32.5H6.2647L7.62875 24.8062C8.50332 26.5214 10.3971 27.6894 12.8742 27.6894C18.4109 27.6894 22.7454 23.3828 23.6928 17.908C24.6766 12.2874 21.7626 7.98074 16.3352 7.98074ZM17.3917 17.8716C16.9185 20.5725 14.951 22.7618 12.2918 22.7618C9.63269 22.7618 8.21212 20.7548 8.75812 17.6882C9.26773 14.6956 11.4901 12.9439 13.9672 12.9439C16.6264 12.9439 17.8649 15.1332 17.3908 17.8706L17.3917 17.8716ZM71.1321 8.3829H64.1739L59.2895 15.043C59.9342 12.7481 60.2647 10.5358 60.5061 8.79946C60.6938 7.44901 61.1766 3.38806 61.1766 3.38806H54.9167C54.9167 3.38806 54.4521 7.3991 54.2375 8.72748C53.2049 15.14 51.2086 22.1408 44.2255 22.1408C41.2043 22.1408 38.6831 20.5552 39.1572 17.8543C39.6304 15.1534 41.962 13.2558 44.8395 13.2558C45.7122 13.2558 47.4345 13.707 48.1864 15.0123L52.2863 10.4455C50.016 8.54031 47.5609 7.99994 45.4229 7.99994C38.9752 7.99994 33.905 11.8804 33.0228 17.8361C32.1559 23.6938 36.9895 27.7086 43.4372 27.7086C51.5698 27.7086 55.7012 23.5517 57.9121 18.817L58.0739 18.8218L61.3739 27.2892H68.3321L64.3128 17.4512L71.1331 8.38386L71.1321 8.3829ZM84.7363 8.3829L84.2995 10.9014C83.4249 9.14979 81.5311 7.9817 79.054 7.9817C73.5173 7.9817 69.2192 12.3248 68.2354 17.7996C67.2516 23.3837 70.1656 27.6904 75.5931 27.6904C78.2522 27.6904 80.328 26.5588 81.8578 24.6977L81.421 27.2892H87.6857L91 8.38386H84.7353L84.7363 8.3829ZM83.1701 17.981C82.6241 20.9737 80.4381 22.7618 77.961 22.7618C75.3019 22.7618 74.0633 20.5725 74.5375 17.7977C75.0107 15.1332 76.9782 12.9439 79.6373 12.9439C82.2965 12.9439 83.717 14.9509 83.171 17.98L83.1701 17.981ZM26.6901 8.3829L23.3758 27.2882H29.6404L32.9548 8.3829H26.6901Z"
              fill="#1E1E1E" 
            />
          </svg>
        </header>
        <form class="h-full rounded-2xl border-[#DFDFDF] md:h-fit md:border py-4 md:py-12" @submit="handleSubmit">
          <div class="w-[91.80%] h-full md:w-[85%] mx-auto">
            <header class="mb-9 md:mb-10">
              <h1 class="font-semibold text-xl leading-[134%] tracking-[0%] text-center text-[#1B1B1B] mb-4">
                Verification
              </h1>
              <p class="font-normal text-sm leading-[100%] tracking-[0%] text-center text-[#26203BCC] md:text-base">
                Verification successful. Experience the efficiency of Picka. Click 'Login' to access your dashboard.
              </p>
            </header>
            <div class="h-[82.45%] md:h-fit">
              <div class="h-[93.22%] flex items-center md:h-fit md:block">
                <div class="w-[81.56%] h-[292px] flex justify-center items-center md:w-[30.51%] md:h-[183.63px] mb-10 mx-auto">
                  <img 
                    class="object-cover"
                    src="../assets/gifs/success.gif" 
                    alt="Success"
                  >
                </div>
              </div>
              <button type="submit"
                class="w-full h-9 flex justify-center items-center rounded-md bg-[#1E1E1E] md:h-[42px] md:rounded"
                @click="router.push('/auth')"
              >
                <Loader2 class="w-5 h-5 mr-2 animate-spin text-white" v-if="isSubmitting" />
                <span class="font-bold text-sm leading-[100%] tracking-[0%] text-white md:text-base">
                  Go to Dashboard
                </span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
    <footer class="hidden absolute right-0 left-0 bottom-8 w-[92.33%] h-[53px] md:flex justify-between items-end lg:w-[95.56%] mx-auto">
      <span class="font-normal text-sm leading-[150%] tracking-[0%] text-[#4F4D55]">© 2024 Picka.ng</span>
      <a href="#" class="font-normal text-sm leading-[150%] tracking-[0%] text-[#4F4D55]">Privacy policy</a>
    </footer>
  </div>
</template>

<style scoped></style>
