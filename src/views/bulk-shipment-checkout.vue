<template>
  <div>
    <div class="flex justify-between items-center md:justify-start md:gap-x-4">
      <back-button />
      <h1
        class="font-semibold text-lg leading-[100%] -tracking-[3%] text-[#060E1F] md:text-xl"
      >
        Checkout
      </h1>
      <div class="w-11 h-11" />
    </div>
    <div class="rounded-xl border border-[#E4E7EC] card-shadow md:w-[418px] p-4 mt-6 mb-20 md:p-6 md:mx-auto">
      <h2
        class="font-semibold text-base leading-[120%] tracking-[0%] text-[#101828] md:leading-7 mb-1"
      >
        Payment Detail
      </h2>
      <span
        class="text-[13px] leading-[120%] tracking-[0%] align-middle text-[#404D61]"
      >
        Complete your shipment by filing your payment detail
      </span>
      <Tabs default-value="wallet" class="mt-4">
        <TabsList class="w-full rounded-lg bg-[#F5F7FA] p-[5px]">
          <TabsTrigger value="wallet" class="w-full" @click="hideCardForm">
            <span class="font-medium text-sm leading-5 tracking-[0%]">
              Wallet
            </span>
          </TabsTrigger>
          <TabsTrigger value="card" class="w-full">
            <span class="font-medium text-sm leading-5 tracking-[0%]">
              Card
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="wallet" class="mt-4 md:mt-10">
          <card-wallet />
          <card-pagination class="mt-4" />
          <dialog-buttons class="hidden md:block mt-20" />
        </TabsContent>
        <TabsContent value="card" class="mt-8 md:mt-10">
          <div :class="{ hidden: cardForm }">
            <div class="h-[218px]">
              <card />
            </div>
            <card-pagination class="mt-4" />
            <Button
              variant="outline"
              class="w-full h-[42px] gap-x-2 rounded-md border border-[#D8D8D8] bg-[#F9F9F9] mt-[16.12px]"
              @click="showCardForm"
            >
              <credit-card-add />
              <span
                class="font-medium text-[15px] leading-[100%] tracking-[0%] text-[#101828]"
              >
                Add new card
              </span>
            </Button>
          </div>
          <form :class="[cardForm ? 'block' : 'hidden']">
            <div class="md:grid md:grid-cols-2 gap-4">
              <div
                v-for="formField in formFields"
                :key="formField.id"
                :class="[formField.id === 1 ? '' : 'mt-2 md:mt-0']"
              >
                <label :for="formField.inputAttributes.name" :class="labelStyle">
                  {{ formField.label }}
                </label>
                <div class="relative h-[42px] mt-1">
                  <input v-bind="formField.inputAttributes" />
                  <div
                    class="absolute top-0 bottom-0 right-3 w-[40px] h-[25px] flex justify-center items-center rounded-[5.53px] border-[0.92px] border-[#D9D9D9] bg-white card-type-shadow my-auto"
                    :class="[formField.id === 1 ? '' : 'hidden']"
                  >
                    <mastercard />
                  </div>
                </div>
              </div>
            </div>
            <div class="h-[218px] mt-6 md:mt-12">
              <card />
            </div>
            <div class="flex gap-x-2 items-center mt-4">
              <input
                type="checkbox"
                name="save-card-info"
                id="save-card-info"
                class="w-4 h-4 rounded border border-[#DEE1E1]"
              />
              <label
                for="save-card-info"
                class="text-[13px] leading-5 tracking-[0%] align-middle text-[#8E9798]"
              >
                Save card Info
              </label>
            </div>
          </form>
          <dialog-buttons class="hidden md:block mt-[60px]" />
        </TabsContent>
      </Tabs>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardWallet from "@/components/bulk-shipment-checkout/card-wallet.vue";
import Card from "@/components/wallet/card.vue";
import CardPagination from "@/components/bulk-shipment-checkout/card-pagination.vue";
import DialogButtons from "@/components/bulk-shipment-checkout/dialog-buttons.vue";
import Button from "@/components/ui/button/Button.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import chevronDownSharp from "@/assets/svgs/chevron-down-sharp.svg";
import creditCardAdd from "@/assets/svgs/credit-card-add.svg";
import mastercard from "@/assets/svgs/mastercard.svg";
import BackButton from "@/components/shared/back-button.vue";
import Footer from "@/layouts/checkout/components/footer.vue";

/* Card form functionality */
const hideCardForm = () => {
  cardForm.value = false;
};

const showCardForm = () => {
  cardForm.value = true;
};

const cardForm = ref(false);
/**/

const labelStyle =
  "text-xs leading-[120%] tracking-[0%] align-middle text-[#313644]";

const inputStyle =
  "w-full h-full rounded-md outline-none border border-[#E4E7EC] focus:border-[#2778FF] text-sm leading-[130%] tracking-[0%] align-middle text-[#999999] focus:text-black pl-4 pr-3 py-3";

const formFields = [
  {
    id: 1,
    label: "Card Number",
    inputAttributes: {
      type: "number",
      name: "card-number",
      id: "card-number",
      placeholder: "0000 0000 0000 0000",
      class: inputStyle.replace("pr-3", "pr-14"),
    },
  },
  {
    id: 2,
    label: "Card Name",
    inputAttributes: {
      type: "text",
      name: "card-name",
      id: "card-name",
      placeholder: "Enter name",
      class: inputStyle,
    },
  },
  {
    id: 3,
    label: "Expiration Date",
    inputAttributes: {
      type: "text",
      name: "expiration-date",
      id: "expiration-date",
      placeholder: "MM / YY",
      class: inputStyle,
    },
  },
  {
    id: 4,
    label: "Security Code",
    inputAttributes: {
      type: "number",
      name: "security-code",
      id: "security-code",
      placeholder: "CVV",
      class: inputStyle,
    },
  },
];
</script>

<style scoped>
.card-shadow {
  box-shadow: 0px 1px 2px 0px #1018280d;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.card-type-shadow {
  box-shadow: 0px 0px 20px 0px #00000012;
}
</style>
