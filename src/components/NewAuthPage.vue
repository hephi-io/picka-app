<script setup>
import ZipkodLogo from '@/assets/svgs/ZipkodLogo.vue';
import CheckIcon from '@/assets/svgs/CheckIcon.vue';
import UncheckedIcon from '@/assets/svgs/UncheckedIcon.vue';
</script>

<template>

  <div class="p-8">

    <main class="flex justify-center">

      <section class="w-[36.3%]">

        <header class="flex justify-center mb-[60px]">
          <ZipkodLogo />
        </header>

        <form class="rounded-2xl border border-[#DFDFDF] p-6">

          <header class="mb-[60px]">

            <h1 class="tt-firs-neue-semibold font-semibold text-2xl leading-[32.25px] text-[#1B1B1B] mb-1">
              Account setup
            </h1>

            <p class="inter-normal font-normal text-base leading-[19.36px] text-[#26203B]">
              To proceed with your account setup, we require additional information to complete the verification process.
            </p>

          </header>

          <section class="mb-[60px]">

            <section class="flex justify-between mb-8">

              <button class="w-[48.2%] flex rounded-xl border border-[#E3573E] px-4 py-3">
                <CheckIcon class="mr-4"></CheckIcon>
                <span class="inter-medium font-medium text-sm leading-[22px] text-[#262626]">Business account</span>
              </button>

              <button class="w-[48.2%] flex rounded-xl border border-[#9F9F9F] px-4 py-3">
                <UncheckedIcon class="mr-4"></UncheckedIcon>
                <span>Personal account</span>
              </button>

            </section>

            <section class="flex justify-between mb-8">

              <section class="w-[48.2%] outline outline-1">
                <div>
                  <label for="first-name">First name</label>
                </div>  
                <input type="text" name="first-name">
              </section>
              
              <section class="w-[48.2%] outline outline-1">
                <div>
                  <label for="last-name">Last name</label>
                </div>
                <input type="text" name="last-name">
              </section>
            
            </section>

            <section class="mb-8"></section>
            <section class="mb-8"></section>
            <section class="mb-8"></section>

          </section>

          <button>

          </button>

        </form>

      </section>

    </main>

    <footer>

    </footer>

  </div>

</template>

<style scoped>
</style>