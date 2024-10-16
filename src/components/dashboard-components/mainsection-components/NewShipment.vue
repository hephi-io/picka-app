<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog>

    <DialogTrigger>
      <Button class="px-4 py-3">

        <section class="mr-2">
          <i><img src="../../../assets/svgs/plus-sign.svg"></i>
        </section>

        <section>
          <span class="outfit-medium font-medium text-[15px] leading-[18.15px] text-white">
            New Shipments
          </span>
        </section>

      </Button>
    </DialogTrigger>

    <DialogContent>

      <DialogHeader>

        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>

      </DialogHeader>

      <DialogFooter>
        Save changes
      </DialogFooter>

    </DialogContent>

  </Dialog>
</template>

<style lang="css" scoped>
</style>