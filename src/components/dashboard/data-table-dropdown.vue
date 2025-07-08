<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '@/components/ui/button'

defineProps<{
  shipping: {
    id: string
  }
}>()

defineEmits<{
  (e: 'expand'): void
}>()

function copy(id: string) {
  // console.log('Copying payment ID:', id)
  navigator.clipboard.writeText(id)
}
</script>

<template>
  <DropdownMenu>

    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">

        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />

      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">

      <DropdownMenuLabel>Actions</DropdownMenuLabel>

      <DropdownMenuItem @click="copy(shipping.id)">
        Copy payment ID
      </DropdownMenuItem>

      <DropdownMenuItem @click="$emit('expand')">
        Expand
      </DropdownMenuItem>

      <DropdownMenuSeparator />
      <DropdownMenuItem>View customer</DropdownMenuItem>
      <DropdownMenuItem>View payment details</DropdownMenuItem>

    </DropdownMenuContent>

  </DropdownMenu>
</template>

<style scoped>
</style>