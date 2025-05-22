<script setup>
import PickaLogo from "@/components/landing-page/navbar/picka-logo.vue";
import NavbarLinks from "@/components/landing-page/navbar/navbar-links.vue";
import Buttons from "@/components/landing-page/navbar/buttons.vue";
</script>

<template>
  <div
    class="fixed top-12 right-0 left-0 z-20 max-w-[1112px] h-[58px] rounded-[9px] flex justify-between items-center pr-1 pl-4 py-1 bg-[#202020] mx-auto"
  >
    <PickaLogo />
    <NavbarLinks />
    <Buttons />
  </div>
</template>

<style scoped></style>
