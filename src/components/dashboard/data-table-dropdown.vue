<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { cancelShipment } from '@/services/shipment';

defineProps<{
  shipping: {
    id: string
  }
}>()

defineEmits<{
  (e: 'expand'): void
}>()

async function  cancel (shipmentId: string) {
   const response = cancelShipment(shipmentId)
   console.log(response)
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

      <DropdownMenuItem @click="cancel(shipping.id)">
        Cancel
      </DropdownMenuItem>

      <!-- <DropdownMenuItem @click="$emit('expand')">
        Expand
      </DropdownMenuItem>

      <DropdownMenuSeparator />
      <DropdownMenuItem>View customer</DropdownMenuItem>
      <DropdownMenuItem>View payment details</DropdownMenuItem> -->

    </DropdownMenuContent>

  </DropdownMenu>
</template>

<style scoped>
</style>