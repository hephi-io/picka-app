<script setup>
import { ScrollArea } from '@/components/ui/scroll-area';
import { ref } from 'vue';


const props = defineProps({
  customerinfo: Object
});

const orderInfo = ref({})

if (orderInfo) {
  orderInfo.value = props.customerinfo || {};

}





</script>

<template>
  <ScrollArea class="w-full md:w-[321px] h-[248px] ">

    <section class="">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Order ID
      </div>

      <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
        {{ orderInfo.id || 'N/A' }}
      </span>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Pickup address:
      </div>

      <span class="break-words font-normal text-[13px] md:text-sm leading-[16.8px] text-[#101828]">
        {{ orderInfo.pickup_location || 'N/A' }}
      </span>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Drop-off address:
      </div>

      <span class="font-normal text-[13px] md:text-sm leading-[16.8px] text-[#101828]">
        {{ orderInfo.drop_off_location || 'N/A' }}
      </span>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Item category:
      </div>

      <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
        {{ orderInfo.category || 'N/A' }}
      </span>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Weight of items:
      </div>

      <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
        {{ orderInfo.weight || 'N/A' }}
      </span>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Weight of items:
      </div>

      <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
        {{ orderInfo.weight || 'N/A' }}
      </span>

    </section>

    <section class="mt-6">

      <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
        Drop-Off Notes
      </div>

      <span class=" break-words font-normal text-sm leading-[16.8px] text-[#101828]">
        <!-- Kindly leave package with the gateman -->
        {{ orderInfo.description || 'N/A' }}
      </span>

    </section>

  </ScrollArea>
</template>