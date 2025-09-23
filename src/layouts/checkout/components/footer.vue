<template>
  <footer class="fixed right-0 left-0 bottom-0 flex flex-col items-center border-[0.4px] border-t-[#DAD8D9] bg-white md:hidden pt-2">
    <AlertDialog>
      <AlertDialogTrigger class="w-full">
        <Button class="w-[81.54%] h-[37px] rounded-md bg-[#1E1E1E]">
          <span class="font-medium text-sm leading-[100%] tracking-[0%] text-white">
            Pay $340.80
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent class="w-[358px] rounded border border-[#DFDFDF] bg-white p-6">
        <AlertDialogHeader>
          <AlertDialogTitle class="font-semibold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B]">
            Shipment Confirmed!
          </AlertDialogTitle>
          <AlertDialogDescription class="text-base leading-[100%] tracking-[0%] text-center text-[#26203BCC] mt-4">
            Your order has been successfully shipped. You’ll receive tracking details shortly. Thank you for choosing us!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div class="w-[166px] h-[105px] mx-auto mt-4">
          <img 
            :src="success" 
            alt="success"
            class="w-full h-full object-cover"
          >
        </div>
        <AlertDialogFooter class="mt-4">
          <AlertDialogCancel 
            class="gap-x-2 rounded border border-[#E5E5E5] bg-white mt-1"
            @click="$router.push('/')"
          >
            <span class="font-medium text-base leading-[100%] tracking-[0%] text-[#1E1E1E]">
              Go Home
            </span>
            <arrow-forward />
          </AlertDialogCancel>
          <AlertDialogAction class="rounded bg-[#1E1E1E]">
            <span class="font-medium text-base leading-[100%] tracking-[0%] text-white">
              Track your shipment
            </span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <Button variant="ghost" class="w-[81.54%] h-[37px] gap-x-2 rounded-md mt-2">
      <ai-lock />
      <span class="font-semibold text-sm leading-[120%] tracking-[0%] text-[#999999]">
        Payments are secured and encrypted
      </span>
    </Button>
  </footer>
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
import arrowForward from "@/assets/svgs/arrow-forward-2.svg"
</script>

<style scoped></style>