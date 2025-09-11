<template>
  <div class="max-w-[880px]">
    <div class="flex justify-between items-center md:items-start">
      <back-button />
      <h2 :class="h2Class">Billing settings</h2>
      <Button :class="saveButton">
        <button-text>Save</button-text>
      </Button>
    </div>
    <Separator class="hidden mt-4 md:block" />
    <h3 class="mt-12" :class="h3Class">Payment Method</h3>
    <Separator class="mt-4" />
    <div class="md:flex md:justify-between mt-6">
      <div>
        <h4 class="mb-1" :class="h4Class">Card details</h4>
        <Text>Set default payment method</Text>
      </div>
      <div class="md:w-[46.59%] md:max-w-[410px] mt-6 md:mt-0">
        <ToggleGroup type="single" class="w-full block">
          <ToggleGroupItem
            v-for="card in cards"
            :key="card.id"
            class="w-full h-fit p-0"
            :class="[card.id === 1 ? '' : 'mt-4']"
            :value="card.value"
            @click="selectCard(card.value)"
          >
            <div
              class="w-full flex gap-x-8 rounded-lg border lg:gap-x-4 px-4"
              :class="[
                selectedCard === card.value
                  ? 'border-[#F1C49B] bg-[#FFFDFB]'
                  : 'border-[#E4E4E4] bg-white',
              ]"
            >
              <div
                class="w-[50.5px] h-8 flex justify-center items-center rounded-[7.78px] border bg-white shrink-0 mt-4"
                :class="[
                  selectedCard === card.value
                    ? 'border-[#F1C49B]'
                    : 'border-[#D9D9D9]',
                ]"
              >
                <component :is="card.icon" />
              </div>
              <div
                class="hidden border lg:block"
                :class="[
                  selectedCard === card.value
                    ? 'border-l-[#F1C49B]'
                    : 'border-l-[#E4E4E4]',
                ]"
              />
              <div class="w-full flex justify-between my-4">
                <div class="w-[73.81%] flex flex-col items-start">
                  <h4 class="text-start mb-1" :class="h4Class">{{ card.header }}</h4>
                  <Text class="text-start">Expiry 06/2024</Text>
                  <div class="w-full flex gap-x-2 items-center md:justify-between lg:gap-x-2 lg:justify-start mt-2">
                    <Text class="text-start">Set as default</Text>
                    <a
                      class="font-semibold text-sm leading-[150%] tracking-[0%] text-[#3E3FAD]"
                    >
                      Edit
                    </a>
                  </div>
                </div>
                <div
                  class="w-[16.67px] h-[16.67px] flex justify-center items-center rounded-full border-[1.5px] shrink-0"
                  :class="[
                    selectedCard === card.value
                      ? 'border-[#475467]'
                      : 'border-[#BABABA]',
                  ]"
                >
                  <Check v-if="selectedCard === card.value" />
                </div>
              </div>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
        <Button
          variant="outline"
          class="w-full h-[42px] gap-x-2 rounded-md border border-[#D8D8D8] bg-[#F9F9F9] md:max-w-[410px] mt-4"
        >
          <credit-card-add />
          <span class="font-medium text-[15px] leading-[100%] text-[#101828]">
            Add new card
          </span>
        </Button>
      </div>
    </div>
    <div class="md:flex md:justify-between mt-12">
      <div>
        <h4 class="mb-1" :class="h4Class">Contact email</h4>
        <Text> Where should invoices be sent? </Text>
      </div>
      <div class="md:w-[46.59%] md:max-w-[410px] mt-6 md:mt-0">
        <div class="flex gap-x-4 items-start">
          <input class="w-6 h-6" type="radio" checked />
          <div>
            <h4 class="mb-1" :class="h4Class">Send to my account email</h4>
            <Text>ezeanimelody@email.com</Text>
          </div>
        </div>
        <div class="flex gap-x-4 items-start mt-7">
          <input class="w-6 h-6" type="radio" name="" id="" />
          <div class="w-full">
            <h4 class="mb-1" :class="h4Class">Send to an alternative email</h4>
            <div
              class="w-full h-10 flex rounded-lg border border-[#D0D5DD] overflow-hidden"
            >
              <div class="w-[46px] h-full flex justify-center items-center">
                <mail-at-sign />
              </div>
              <div class="border-l border-l-[#D0D5DD]"></div>
              <input
                class="w-full outline-none text-sm leading-6 tracking-[0%] text-[#667085] focus:text-black px-[14px]"
                type="text"
                placeholder="billing@hephi.io"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-[963px] rounded-xl border border-[#E4E7EC] mt-12">
    <div class="flex justify-between items-center px-6 py-5">
      <h2
        class="font-semibold text-base leading-7 tracking-[0%] text-[#101828]"
      >
        Billing History
      </h2>
      <div class="w-[50.28%] md:w-[62.40%] md:flex md:gap-x-4 md:items-center lg:w-[60%]">
        <div class="w-full flex justify-between items-center md:w-[90.29%] md:gap-x-4 lg:w-[93.76%] lg:justify-between">
          <div class="w-[75.56%] h-[38px] shrink-0 md:w-[47.61%] lg:w-[44%]">
            <search-input />
          </div>
          <div class="w-[20%] md:w-[40.64%] flex justify-between items-center lg:w-[46.21%]">
            <Button
              variant="outline"
              class="hidden w-[39.20%] gap-x-2 rounded border border-[#E4E4E4EE] bg-white px-3 py-2 lg:flex"
            >
              <funnel-simple />
              <span
                class="font-medium font-size leading-[150%] tracking-[0%] text-[#404D61]"
                >Sort By</span
              >
            </Button>
            <Button
              variant="outline"
              class="w-full gap-x-2 rounded border border-[#E4E4E4EE] bg-white lg:w-[54.40%] px-3 py-2"
            >
              <cloud-download />
              <span
                class="hidden font-medium font-size leading-[150%] tracking-[0%] text-[#404D61] md:inline"
                >Download All</span
              >
            </Button>
          </div>
        </div>
        <Button variant="ghost" class="hidden rounded-full md:flex">
          <dots-vertical />
        </Button>
      </div>
    </div>
    <hr class="border-t border-t-[#E4E7EC]" />
    <div>
      <DataTable :columns="columns" :data="data" />
    </div>
    <div class="border-t border-t-[#E4E7EC] px-1 py-3 md:px-6">
      <z-pagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { columns } from "@/components/dashboard/column";
import { type Shipping } from "@/services/index";
import DataTable from "@/components/dashboard/data-table.vue";
import Button from "@/components/ui/button/Button.vue";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ButtonText from "@/components/appsetting/button-text.vue";
import Separator from "@/components/appsetting/separator.vue";
import Text from "@/components/appsetting/text.vue";
import { h2Class, h3Class, h4Class, saveButton } from "@/views/appsetting.vue";
import SearchInput from "@/components/shared/search-input.vue";
import ZPagination from "@/components/shared/z-pagination.vue";
import BackButton from "@/components/shared/back-button.vue";
import CreditCardAdd from "@/assets/svgs/credit-card-add.svg";
import Mastercard from "@/assets/svgs/mastercard.svg";
import VisaLogo from "@/assets/svgs/visa-logo.svg";
import Check from "@/assets/svgs/check.svg";
import MailAtSign from "@/assets/svgs/mail-at-sign.svg";
import DotsVertical from "@/assets/svgs/dots-vertical.svg";
import FunnelSimple from "@/assets/svgs/FunnelSimple.svg";
import CloudDownload from "@/assets/svgs/cloud-download.svg";

const selectCard = (card: string) => {
  selectedCard.value = card;
};

const selectedCard = ref("card-one");

const cards = [
  {
    id: 1,
    header: "Mastercard ending in 1234",
    icon: Mastercard,
    value: "card-one",
  },
  {
    id: 2,
    header: "Visa ending in 1234",
    icon: VisaLogo,
    value: "card-two",
  },
];

const data = ref<Shipping[]>([]);
</script>

<style scoped>
.font-size {
  font-size: min(12px, 0.97vw);
}
</style>
