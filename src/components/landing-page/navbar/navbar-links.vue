<template>
  <div
    class="w-[55.76%] h-[50px] rounded-md px-1 flex justify-between items-center bg-[#2D2D2D]"
  >
    <Button variant="link" class="text-[#E5E4DE]">Home</Button>
    <Seperator />
    <Button variant="link" class="text-[#E5E4DE]">About</Button>
    <Seperator />
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" class="text-[#E5E4DE] gap-x-2">
          Services
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
    <Seperator />
    <Button variant="link" class="text-[#E5E4DE]">How It Works</Button>
    <Seperator />
    <Button variant="link" class="text-[#E5E4DE]">For Business</Button>
    <Seperator />
    <Button variant="link" class="text-[#E5E4DE]">Contact</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Seperator from "@/components/landing-page/navbar/seperator.vue";
import ChevronDown from "@/components/landing-page/navbar/chevron-down.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
</script>

<style scoped></style>
