<script setup>
import { ref } from "vue";
import { Loader2 } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import { login, signup } from "@/services";
import { token } from "@/utils";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();

const isSignup = ref(false);
const isSignin = ref(true);
let ErrMessage = ref(null);

const user = ref({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});

const isSubmitting = ref(false);

const activeButtonStyle = ref("w-1/2 rounded-lg py-2 bg-[#FF7C33]");
const inactiveButtonStyle = ref("w-1/2 rounded-lg py-2");

const activeSpanStyle = ref(
  "font-medium text-base leading-[19.36px] text-center text-white"
);
const inactiveSpanStyle = ref(
  "font-normal text-base leading-[19.36px] text-center text-[#A59F9A]"
);

function handleSignupClick() {
  isSignup.value = true;
  isSignin.value = false;
}

function handleSigninClick() {
  isSignin.value = true;
  isSignup.value = false;
}

const imageList = ref([
  "/pngs/first-slide-image.png",
  "/pngs/second-slide-image.png",
  "/pngs/third-slide-image.png",
]);

const imageUrl = imageList.value[2];

//Authstore
const authStore = useAuthStore();

// Validation schemas
const loginSchema = yup.object({
  email: yup.string().required().email().label("Email"),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/,
      "Password must contain at least one letter and one number"
    )
    .label("Password"),
});

const signupSchema = yup.object({
  first_name: yup.string().required().label("First Name"),
  last_name: yup.string().required().label("Last Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

// Function to handle login
const handleLogin = async (values) => {
  try {
    isSubmitting.value = true;
    const payload = { email: values.email, password: values.password };
    const response = await login(payload);
    console.log(response);
    token.login(response.data.data.token);
    authStore.setUser(response.data.data);

    if (!response.data.data.has_onboarded) {
      return router.push({
        name: "onboarding",
      });
    }

    return router.push({
      name: "home",
    });
  } catch (error) {
    console.log(error);
  } finally {
    isSubmitting.value = false;
  }
};

const signupHandler = async (values) => {
  try {
    isSubmitting.value = true;
    if (
      !user.value.email ||
      !user.value.password ||
      !user.value.first_name ||
      !user.value.last_name
    ) {
      ErrMessage.value = "Email and password are required";
      return;
    }
    await signup(values);

    router.push("/auth/otp-verification");
  } catch (error) {
    console.log(error);
    ErrMessage.value = error.response?.data?.message || "An error occurred";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="flex justify-center pt-6 pb-16 lg:block lg:p-8">
    <div class="w-[90%] lg:w-full">
      <div class="lg:w-[96.5%] lg:flex lg:justify-between lg:gap-x-40">
        <!-- Image -->
        <div class="hidden lg:block lg:w-full">
          <img :src="imageUrl" alt="Image" class="lg:h-full" />
        </div>

        <!-- Mobile view -->
        <div class="lg:w-[70%] lg:flex lg:items-center">
          <div class="lg:w-full">
            <!-- Nav and Form -->
            <div class="mb-[60px]">
              <!-- Logo, Sign In buttons -->
              <div class="mb-6">
                <!-- Logo -->
                <div class="mb-9">
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
                </div>

                <!-- Sign In buttons -->
                <div class="flex rounded-xl p-1 bg-[#FFEFEC]">
                  <button
                    :class="[
                      isSignup ? activeButtonStyle : inactiveButtonStyle,
                    ]"
                    @click="handleSignupClick"
                  >
                    <span
                      :class="[isSignup ? activeSpanStyle : inactiveSpanStyle]"
                    >
                      Sign Up
                    </span>
                  </button>

                  <button
                    :class="[
                      isSignin ? activeButtonStyle : inactiveButtonStyle,
                    ]"
                    @click="handleSigninClick"
                  >
                    <span
                      :class="[isSignin ? activeSpanStyle : inactiveSpanStyle]"
                    >
                      Sign In
                    </span>
                  </button>
                </div>
              </div>

              <!-- Form register -->
              <Form
                v-if="isSignup"
                @submit="signupHandler"
                :validation-schema="signupSchema"
                v-slot="{ errors }"
              >
                <!-- First Name -->
                <div class="mb-8" v-if="isSignup">
                  <!-- Label -->
                  <div class="mb-2">
                    <label for="FirstName">
                      <span
                        class="font-medium text-base leading-[19.36px] text-[#26203B]"
                      >
                        First Name
                      </span>
                    </label>
                  </div>

                  <!-- Field -->
                  <div>
                    <Field
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      v-model="user.first_name"
                      class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                      :class="{ 'border-red-500': errors.first_name }"
                    />
                    <ErrorMessage
                      name="first_name"
                      class="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div class="mb-8" v-if="isSignup">
                  <!-- Label -->
                  <div class="mb-2">
                    <label for="last_name">
                      <span
                        class="font-medium text-base leading-[19.36px] text-[#26203B]"
                      >
                        Last Name
                      </span>
                    </label>
                  </div>

                  <!-- Field -->
                  <div>
                    <Field
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      v-model="user.last_name"
                      class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                      :class="{ 'border-red-500': errors.last_name }"
                    />
                    <ErrorMessage
                      name="last_name"
                      class="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div class="mb-8">
                  <!-- Label -->
                  <div class="mb-2">
                    <label for="email">
                      <span
                        class="font-medium text-base leading-[19.36px] text-[#26203B]"
                      >
                        Email Address
                      </span>
                    </label>
                  </div>

                  <!-- Field -->
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      v-model="user.email"
                      class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                      :class="{ 'border-red-500': errors.email }"
                    />
                    <ErrorMessage
                      name="email"
                      class="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <!-- Password -->
                <div>
                  <!-- Label and field -->
                  <div class="mb-2">
                    <!-- Label -->
                    <div class="mb-2">
                      <label for="password">
                        <span
                          class="font-medium text-base leading-[19.36px] text-[#26203B]"
                        >
                          Password
                        </span>
                      </label>
                    </div>

                    <!-- Field -->
                    <div>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        v-model="user.password"
                        class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                        :class="{ 'border-red-500': errors.password }"
                      />
                      <ErrorMessage
                        name="password"
                        class="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <!-- Password strength indicators -->
                  <div>
                    <div class="flex gap-x-[9px] items-center mb-2">
                      <div>
                        <img src="/svgs/check.svg" alt="Check mark" />
                      </div>

                      <div>
                        <span
                          class="font-normal text-xs leading-3 text-[#5A5A5A]"
                        >
                          Password Strength : Weak
                        </span>
                      </div>
                    </div>

                    <div class="flex gap-x-[9px] items-center mb-2">
                      <div>
                        <img src="/svgs/check.svg" alt="Check mark" />
                      </div>

                      <div>
                        <span
                          class="font-normal text-xs leading-3 text-[#5A5A5A]"
                        >
                          At least 8 characters
                        </span>
                      </div>
                    </div>

                    <div class="flex gap-x-[9px] items-center">
                      <div>
                        <img src="/svgs/check.svg" alt="Check mark" />
                      </div>

                      <div>
                        <span
                          class="font-normal text-xs leading-3 text-[#5A5A5A]"
                        >
                          Contains a number or symbol
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- Create Account Button -->
                  <div class="mt-10">
                    <div class="mb-4">
                      <button
                        type="submit"
                        class="w-full rounded-full py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105] flex items-center justify-center"
                      >
                        <Loader2
                          class="w-5 h-5 mr-2 animate-spin text-white"
                          v-if="isSubmitting"
                        />
                        <span
                          class="font-bold text-base leading-[19.36px] text-white"
                        >
                          Create Account
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Form>

              <!-- Form login -->
              <Form
                v-else
                @submit="handleLogin"
                :validation-schema="loginSchema"
                v-slot="{ errors }"
              >
                <div class="space-y-8">
                  <!-- Email -->
                  <div class="mb-8">
                    <!-- Label -->
                    <div class="mb-2">
                      <label for="email">
                        <span
                          class="font-medium text-base leading-[19.36px] text-[#26203B]"
                        >
                          Email Address
                        </span>
                      </label>
                    </div>

                    <!-- Field -->
                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        v-model="user.email"
                        class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                        :class="{ 'border-red-500': errors.email }"
                      />
                      <ErrorMessage
                        name="email"
                        class="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <!-- Password -->
                  <div>
                    <!-- Label and field -->
                    <div class="mb-2">
                      <!-- Label -->
                      <div class="mb-2">
                        <label for="password">
                          <span
                            class="font-medium text-base leading-[19.36px] text-[#26203B]"
                          >
                            Password
                          </span>
                        </label>
                      </div>

                      <!-- Field -->
                      <div>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          v-model="user.password"
                          class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                          :class="{ 'border-red-500': errors.password }"
                        />
                        <ErrorMessage
                          name="password"
                          class="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Login Button -->
                  <div class="mb-9">
                    <button
                      type="submit"
                      class="w-full rounded-full py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105] flex items-center justify-center"
                    >
                      <Loader2
                        class="w-5 h-5 mr-2 animate-spin text-white"
                        v-if="isSubmitting"
                      />
                      <span
                        class="font-bold text-base leading-[19.36px] text-white"
                      >
                        Login
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            </div>

            <!-- Error Message -->
            <!-- Create Account Buttons -->
            <div>
              <!-- Buttons -->
              <div class="mb-9">
                <!-- OR -->
                <div class="flex justify-center mb-4">
                  <div class="w-1/2 flex gap-x-1 items-center">
                    <div class="w-full border-t border-[#9C9AA530]"></div>

                    <div>
                      <span
                        class="font-medium text-xs leading-3 text-[#9C9AA530]"
                      >
                        OR
                      </span>
                    </div>

                    <div class="w-full border-t border-[#9C9AA530]"></div>
                  </div>
                </div>

                <!-- Google -->
                <div>
                  <button
                    class="w-full flex justify-center rounded-xl border py-4 border-[#E6E8E7] shadow-sm"
                  >
                    <div class="flex gap-x-2">
                      <div>
                        <span
                          class="font-semibold text-lg leading-[21.6px] tracking-[-0.01em] text-[#232323]"
                        >
                          Continue with Google
                        </span>
                      </div>

                      <div>
                        <img src="/svgs/plus.svg" alt="Google" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Terms and conditions -->
              <div>
                <div class="flex justify-center">
                  <span
                    class="font-normal text-[13px] leading-[15.73px] text-[#9C9AA5] text-justify"
                  >
                    By signing up to create an account I accept Company’s
                  </span>
                </div>

                <div class="flex justify-center">
                  <span
                    class="font-medium text-[13px] leading-[15.73px] text-[#26203B]"
                  >
                    Terms of use & Privacy Policy.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex lg:justify-between lg:pt-8">
      <div>
        <span class="font-normal text-sm leading-[21px] text-[#4F4D55]">
          ©2024 Picka.ng
        </span>
      </div>

      <div>
        <span class="font-normal text-sm leading-[21px] text-[#4F4D55]">
          Privacy policy
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
