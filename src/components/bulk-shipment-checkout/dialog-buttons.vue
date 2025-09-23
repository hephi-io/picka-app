<template>
  <div>
    <AlertDialog>
      <AlertDialogTrigger class="w-full">
        <Button class="w-full h-[42px] rounded-md bg-[#1E1E1E]">
          <span
            class="font-semibold text-sm leading-[120%] tracking-[0%] text-white"
          >
            Pay $340.80
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        class="w-[358px] rounded border border-[#DFDFDF] bg-white md:w-[384px] md:rounded-lg lg:w-[400px] p-6"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>
            <h1 class="lg:hidden" :class="headingStyle">Shipment Confirmed!</h1>
            <h1 class="hidden lg:block" :class="headingStyle">Bulk Shipment Confirmed!</h1>
          </AlertDialogTitle>
          <AlertDialogDescription
            class="text-base leading-[100%] tracking-[0%] text-center text-[#26203BCC] mt-4"
          >
            Your order has been successfully shipped. You’ll receive tracking
            details shortly. Thank you for choosing us!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div
          class="w-[166px] h-[105px] lg:h-[183.63px] mx-auto mt-4 md:mt-6"
        >
          <img
            :src="success"
            alt="success"
            class="w-full h-full object-cover"
          />
        </div>
        <AlertDialogFooter class="block mt-4 md:mt-6">
          <AlertDialogAction
            class="block w-full h-[39px] rounded bg-[#1E1E1E] lg:h-[42px] mb-1"
          >
            <span
              class="font-medium text-base leading-[100%] tracking-[0%] text-white"
            >
              Track your shipment
            </span>
          </AlertDialogAction>
          <AlertDialogCancel
            class="w-full h-[39px] gap-x-2 rounded border border-[#E5E5E5] bg-white lg:h-12"
          >
            <span
              class="font-medium text-base leading-[100%] tracking-[0%] text-[#1E1E1E]"
            >
              Go Home
            </span>
            <arrow-forward />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <Button variant="ghost" class="w-full h-[42px] gap-x-2 rounded-md mt-4">
      <ai-lock />
      <span
        class="font-semibold text-sm leading-[120%] tracking-[0%] text-[#999999]"
      >
        Payments are secured and encrypted
      </span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import aiLock from "@/assets/svgs/ai-lock.svg";
import success from "@/assets/gifs/success.gif";
import arrowForward from "@/assets/svgs/arrow-forward-2.svg";

const headingStyle = "font-semibold text-xl leading-[134%] tracking-[0%] text-center text-[#1B1B1B]";
</script>

<style scoped></style>
