<script setup>
import { ref, onMounted } from "vue";

import { Loader2 } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { activateAccount } from "@/services";

const isSubmitting = ref(false);
let ErrMessage = ref(null);

const router = useRouter();

// Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    inputs.value.forEach((input) => input && input.blur());

    isSubmitting.value = true;

    const code = Activiation_code.value.join("");

    if (code.length !== 6) {
      ErrMessage.value = "Please enter a valid 6-digit activation code";
      isSubmitting.value = false;
      return;
    }

    if (code) {
      ErrMessage.value = null;
      await activateAccount(code);
      router.push("/auth/otp-verification/otp-status");
    } else {
      ErrMessage.value = "Invalid activation code. Please try again.";
    }
  } catch (error) {
    console.log(error);
    ErrMessage.value = error.response?.data?.message || "An error occurred";
  } finally {
    isSubmitting.value = false;
  }
};

const Activiation_code = ref(Array(6).fill(""));
const inputs = ref([]);

const moveToNext = (index) => {
  if (
    Activiation_code.value[index].length === 1 &&
    index < Activiation_code.value.length - 1
  ) {
    inputs.value[index + 1].focus();
  }
};

onMounted(() => {
  inputs.value[0]?.focus();
});
</script>

<template>
  <div class="p-8">
    <main class="flex justify-center">
      <section class="w-[36.3%]">
        <header class="flex justify-center mb-[60px]">
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
          class="rounded-2xl md:border border-[#DFDFDF] p-6"
          @submit="handleSubmit"
        >
          <header class="mb-[60px]">
            <h1
              class="space-mono-bold font-semibold text-2xl leading-[32.25px] text-[#1B1B1B] mb-1"
            >
              Verification
            </h1>

            <p
              class="text-center outfit-normal font-normal text-base leading-[19.36px] text-[#26203B]"
            >
              An OTP has been sent to the phone number linked to your account.
            </p>
          </header>

          <section
            class="h-[62px] flex justify-between items-center gap-2 mb-[60px]"
          >
            <input
              v-for="(__, index) in Activiation_code"
              :key="index"
              v-model="Activiation_code[index]"
              type="text"
              maxlength="1"
              @input="moveToNext(index)"
              ref="inputs"
              class="w-[13.72%] h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none"
            />

            <!-- <div class="w-[13.72%]">
              <input type="text" maxlength="1" class="w-full h-full rounded-xl bg-[#F1F0EF] text-center appearance-none focus:bg-white focus:border focus:border-[#E3573E] focus:shadow outline-none" />
            </div> -->
          </section>

          <section class="flex justify-between mb-[60px]">
            <section>
              <button class="h-5 flex rounded-full px-2 py-1 bg-[#F4F4F4]">
                <section class="h-full flex items-center mr-1">
                  <img src="../../src/assets/svgs/refresh-circle-outline.svg" />
                </section>

                <section class="h-full flex items-center">
                  <span
                    class="outfit-normal font-normal text-sm leading-[16.94px] text-[#26203B]"
                  >
                    Resend code
                  </span>
                </section>
              </button>
            </section>

            <section>
              <span
                class="outfit-normal font-normal text-[10px] leading-[12.1px]"
                >in
              </span>
              <span
                class="outfit-semibold font-semibold text-[10px] leading-[12.1px] text-[#FA3105]"
                >00.30s</span
              >
            </section>
          </section>

          <button
            type="submit"
            class="w-full h-12 rounded-full px-5 py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105] flex items-center justify-center"
          >
            <Loader2
              v-if="isSubmitting"
              class="w-5 h-5 mr-2 animate-spin text-white"
            />
            <span
              class="outfit-bold font-bold text-base leading-[19.36px] text-white"
              >Verify account</span
            >
          </button>
        </form>

        <!-- <div v-if="ErrMessage" class="my-4 text-center">
          <span class="font-normal text-sm leading-[21px] text-red-500">
            {{ ErrMessage }}
          </span>
        </div> -->
      </section>
    </main>

    <footer class="h-[53px] mt-5 flex justify-between items-end">
      <section>
        <span
          class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]"
          >©2024 Picka.ng</span
        >
      </section>

      <section>
        <a
          href="#"
          class="outfit-normal font-normal text-sm leading-[21px] text-[#4F4D55]"
          >Privacy policy</a
        >
      </section>
    </footer>
  </div>
</template>

<style scoped></style>
