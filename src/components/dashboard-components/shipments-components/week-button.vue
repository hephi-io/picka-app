<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button class="gap-x-2 rounded-md border border-[#D8D8D8] bg-white hover:bg-[#D8D8D8] px-4">
          <img src="../../../assets/svgs/Arrow---Down-2.svg">
          <span class="font-medium text-[15px] leading-[100%] tracking-[0%] text-[#404D61]">
            Week
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style lang="css" scoped>
</style>