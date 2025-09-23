<script setup>
import { ScrollArea } from '@/components/ui/scroll-area';
import CopyTwo from "@/assets/svgs/copy-02.svg";
import { Button } from "@/components/ui/button";
</script>

<template>
    <ScrollArea class="w-full md:w-[321px] h-[248px]">

        <section>

            <span class="font-normal text-sm leading-[16.8px] text-[#999999]">
                Driver’s Name:
            </span>

            <div class="flex gap-x-3 items-center mt-2">
                <img src="../assets/pngs/baker-avatar.png"
                    class="rounded-full border-[0.75px] border-[#000000] border-opacity-[0.08]">
                <span class="font-medium text-sm text-[#101828]">
                    Phoenix Baker
                </span>
            </div>

        </section>

        <section class="mt-6">

            <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
                Experience
            </div>

            <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                12 years
            </span>

        </section>

        <section class="flex gap-x-[10px] items-end mt-6">

            <div>

                <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
                    Phone Number
                </div>

                <span class="font-normal text-xs sm:text-sm leading-[16.8px] text-[#101828]">
                    +2348023456789
                </span>

            </div>

            <Button variant="outline" class="w-7 h-7 rounded-md border-[1.5px] border-[#3FA0FB] bg-white copy m-0 p-0">
                <copy-two />
            </Button>

        </section>

        <section class="mt-6">

            <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
                ID Number
            </div>

            <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                24156-65-0096
            </span>

        </section>

        <section class="mt-6">

            <div class="font-normal text-sm leading-[16.8px] text-[#999999] mb-2">
                License Plate
            </div>

            <span class="font-normal text-sm leading-[16.8px] text-[#101828]">
                TY9096
            </span>

        </section>

    </ScrollArea>
</template>