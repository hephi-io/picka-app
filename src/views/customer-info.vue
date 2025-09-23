<script setup>
import { ScrollArea } from '@/components/ui/scroll-area';
import CopyTwo from "@/assets/svgs/copy-02.svg";
import { Button } from "@/components/ui/button";
import { ref } from 'vue';

const props = defineProps({
  customerinfo: Object
});

const customerinfo = ref({})
if (props.customerinfo) {
  customerinfo.value = props.customerinfo || {};

}

</script>

<template>
  <ScrollArea class="w-full md:w-[321px] h-[248px]">

    <section>

      <span class="font-normal text-sm leading-[16.8px] text-[#999999]">
        Reciever’s Name:
      </span>

      <div class="flex gap-x-2 items-center mt-2">
        <img src="../assets/pngs/baker-avatar.png"
          class="rounded-full border-[0.75px] border-[#000000] border-opacity-[0.08]">
        <span class="font-medium text-sm text-[#101828]">
          {{ customerinfo.recipient_name || 'N/A' }}
        </span>
      </div>

    </section>

    <section class="flex gap-x-[10px] items-end mt-6">

      <div>

        <div class="font-normal text-sm leading-[16.8px] text-[#999999] md:mb-2">
          Reciever’s Number:
        </div>

        <span class="font-normal  text-xs sm:text-sm leading-[16.8px] text-[#101828]">
          {{ customerinfo.recipient_phone || 'N/A' }}
        </span>

      </div>

      <Button variant="outline" class="w-7 h-7 rounded-md border-[1.5px] border-[#3FA0FB] bg-white copy m-0 p-0">
        <copy-two />
      </Button>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Reciever’s Email:
      </div>

      <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
        {{ customerinfo.recipient_email || 'N/A' }}
      </span>

    </section>

  </ScrollArea>
</template>