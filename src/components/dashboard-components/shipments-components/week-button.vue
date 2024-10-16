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
        <Button class="bg-white border border-[#D8D8D8] hover:bg-[#D8D8D8]">

          <div class="mr-2">
            <img src="../../../assets/svgs/Arrow---Down-2.svg">
          </div>

          <span class="font-medium text-[15px] leading-[18.15px] text-[#404D61]">
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