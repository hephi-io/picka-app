<script setup>
import { ref } from 'vue'

const isSignup = ref(true)
const isSignin = ref(false)

const activeButtonStyle = ref("w-1/2 rounded-lg py-2 bg-[#FF7C33]")
const inactiveButtonStyle = ref("w-1/2 rounded-lg py-2")

const activeSpanStyle = ref("font-medium text-base leading-[19.36px] text-center text-white")
const inactiveSpanStyle = ref("font-normal text-base leading-[19.36px] text-center text-[#A59F9A]")

function handleSignupClick() {
  isSignup.value = true
  isSignin.value = false
}

function handleSigninClick() {
  isSignin.value = true
  isSignup.value = false
}

const imageList = ref(
  [
    "/pngs/first-slide-image.png",
    "/pngs/second-slide-image.png",
    "/pngs/third-slide-image.png"
  ]
)

const imageUrl = imageList.value[2]

</script>

<template>

  <div class="flex justify-center pt-6 pb-16 lg:block lg:p-8">
    
    <div class="w-[90%] lg:w-full">

      <div class="lg:w-[96.5%] lg:flex lg:justify-between lg:gap-x-40">

        <!-- Image -->
        <div class="hidden lg:block lg:w-full">
          <img 
            :src="imageUrl" 
            alt="Image"
            class="lg:h-full"
          >
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
                  <img
                    src="/svgs/zipkod-authpage-logo.svg"
                    alt="Zipkod logo"
                  >
                </div>

                <!-- Sign In buttons -->
                <div class="flex rounded-xl p-1 bg-[#FFEFEC]">

                  <button :class="[isSignup ? activeButtonStyle : inactiveButtonStyle]" @click="handleSignupClick">
                    <span :class="[isSignup ? activeSpanStyle : inactiveSpanStyle]">
                      Sign Up
                    </span>
                  </button>

                  <button :class="[isSignin ? activeButtonStyle : inactiveButtonStyle]" @click="handleSigninClick">
                    <span :class="[isSignin ? activeSpanStyle : inactiveSpanStyle]">
                      Sign In
                    </span>
                  </button>

                </div>

              </div>

              <!-- Email and password -->
              <div>

                <!-- Email -->
                <div class="mb-8">

                  <!-- Label -->
                  <div class="mb-2">

                    <label for="email">
                      <span class="font-medium text-base leading-[19.36px] text-[#26203B]">
                        Email Address
                      </span>
                    </label>

                  </div>

                  <!-- Field -->
                  <div>

                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email"
                      class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
                    >

                  </div>

                </div>

                <!-- Password -->
                <div>

                  <!-- Label and field -->
                  <div class="mb-2">

                    <!-- Label -->
                    <div class="mb-2">

                      <label for="password">
                        <span class="font-medium text-base leading-[19.36px] text-[#26203B]">
                          Password
                        </span>
                      </label>

                    </div>

                    <!-- Field -->
                    <div>

                      <input 
                        type="password" 
                        name="password"
                        placeholder="Enter Password"
                        class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"  
                      >

                    </div>

                  </div>

                  <!-- Password strength indicators -->
                  <div>

                    <div class="flex gap-x-[9px] items-center mb-2">

                      <div>
                        <img
                          src="/svgs/check.svg"
                          alt="Check mark"
                        >
                      </div>

                      <div>
                        <span class="font-normal text-xs leading-3 text-[#5A5A5A]">
                          Password Strength : Weak
                        </span>
                      </div>

                    </div>

                    <div class="flex gap-x-[9px] items-center mb-2">

                      <div>
                        <img
                          src="/svgs/check.svg"
                          alt="Check mark"
                        >
                      </div>

                      <div>
                        <span class="font-normal text-xs leading-3 text-[#5A5A5A]">
                          At least 8 characters
                        </span>
                      </div>

                    </div>

                    <div class="flex gap-x-[9px] items-center">

                      <div>
                        <img
                          src="/svgs/check.svg"
                          alt="Check mark"
                        >
                      </div>

                      <div>
                        <span class="font-normal text-xs leading-3 text-[#5A5A5A]">
                          Contains a number or symbol
                        </span>
                      </div>

                    </div>

                  </div>
                  
                </div>

              </div>

            </div>

            <!-- Create Account Buttons -->
            <div>

              <!-- Buttons -->
              <div class="mb-9">

                <!-- Create account -->
                <div class="mb-4">
                  <button class="w-full rounded-full py-[10px] bg-gradient-to-r from-[#FF7C33] to-[#FA3105]">
                    <span class="font-bold text-base leading-[19.36px] text-white text-center">
                      {{ isSignup ? "Create Account" : "Login" }}
                    </span>
                  </button>
                </div>

                <!-- OR -->
                <div class="flex justify-center mb-4">

                  <div class="w-1/2 flex gap-x-1 items-center">

                    <div class="w-full border-t border-[#9C9AA530]"></div>

                    <div>
                      <span class="font-medium text-xs leading-3 text-[#9C9AA530]">
                        OR
                      </span>
                    </div>

                    <div class="w-full border-t border-[#9C9AA530]"></div>

                  </div>

                </div>

                <!-- Google -->
                <div>

                  <button class="w-full flex justify-center rounded-xl border py-4 border-[#E6E8E7] shadow-sm">

                    <div class="flex gap-x-2">

                      <div>
                        <span class="font-semibold text-lg leading-[21.6px] tracking-[-0.01em] text-[#232323]">
                          Continue with Google
                        </span>
                      </div>

                      <div>
                        <img
                          src="/svgs/plus.svg"
                          alt="Google"
                        >
                      </div>

                    </div>
                    
                  </button>

                </div>

              </div>

              <!-- Terms and conditions -->
              <div>

                <div class="flex justify-center">
                  <span class="font-normal text-[13px] leading-[15.73px] text-[#9C9AA5] text-justify">
                    By signing up to create an account I accept Company’s
                  </span>
                </div>

                <div class="flex justify-center">
                  <span class="font-medium text-[13px] leading-[15.73px] text-[#26203B]">
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
          ©2024 Zipkod.ng
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

<style scoped>
</style>