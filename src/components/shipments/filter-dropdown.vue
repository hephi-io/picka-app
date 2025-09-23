<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button 
        variant="outline"
        class="gap-x-2 rounded border border-[#E4E4E7] bg-white px-3 py-2"
      >
        <filter-dropdown-icon />
        <span class="font-medium text-sm leading-[150%] tracking-[0%] text-[#09090B]">
          Filter
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Button from '../ui/button/Button.vue';
import FilterDropdownIcon from "@/assets/svgs/filter-dropdown.svg";
</script>

<style scoped></style>
