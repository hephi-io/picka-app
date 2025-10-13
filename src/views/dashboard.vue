<script setup lang="ts">
import { animate, stagger } from "motion";
import Paystack from "@paystack/inline-js";
import { AxiosError } from "axios";

import NewShipment from "@/components/shared/NewShipment.vue";

import { Button } from "@/components/ui/button";
import { onMounted, ref } from "vue";
import { columns } from "@/components/dashboard/column";
import { getUserProfile, type Shipping, shippings } from "@/services/index";
import DataTable from "@/components/dashboard/data-table.vue";
import ZPagination from "@/components/shared/z-pagination.vue";
import Money from "@/assets/svgs/money-02.svg";
import Wallet from "@/assets/svgs/wallet-02.svg";
import Plus from "@/assets/svgs/plus-sign-1.svg";
import Withdraw from "@/assets/svgs/withdraw.svg";
import AddCard from "@/assets/svgs/add-card.svg";
import WalletTrend from "@/assets/svgs/wallet-trend.svg";
import RevealingEye from "@/assets/svgs/revealing-eye.svg";
import NotificationsIcon from "@/assets/svgs/notification.svg";
import Meme from "@/assets/svgs/memoji.svg";
import ZSearchInput from "@/components/shared/z-search-input.vue";

import { useAuthStore } from "@/stores/auth";
import { getRootUserOrg } from "@/services/orgs";
import { getShipmentOrgs } from "@/services/shipment";
import { addCard, initializeTransaction } from "@/services/payments";
import { useToast } from "@/components/ui/toast";
import { getWallets } from "@/services/wallets";

const authStore = useAuthStore();
const { toast } = useToast();

const popup = new Paystack();

const data = ref<Shipping[]>([]);
const userBalance = ref("");

onMounted(async () => {
  const { data: orgResponse } = await getRootUserOrg();

  const { data: shipmentOrgsResponse } = await getShipmentOrgs(
    orgResponse.data.id
  );

  // console.log(shipmentOrgsResponse.data, 'shipmentOrgsResponse');

  // Ensure data exists and map only required fields
  if (shipmentOrgsResponse.data && shipmentOrgsResponse.data.length > 0) {
    data.value = shipmentOrgsResponse.data.map((item: Shipping) => {
      const {
        id,
        recipient_name,
        recipient_email,
        category,
        weight,
        amount,
        status,
        created_at,
      } = item;

      return {
        id,
        recipient_name,
        recipient_email,
        category,
        weight,
        amount,
        status,
        created_at,
      };
    });
  } else {
    // console.warn("No shipment data found.");
  }

  // Check if the response contains at least one item

  // Ensure data exists and map only required fields
  if (shipmentOrgsResponse.data && shipmentOrgsResponse.data.length > 0) {
    data.value = shipmentOrgsResponse.data.map((item: Shipping) => {
      const {
        id,
        recipient_name,
        recipient_email,
        category,
        weight,
        amount,
        status,
        created_at,
      } = item;

      return {
        id,
        recipient_name,
        recipient_email,
        category,
        weight,
        amount,
        status,
        created_at,
      };
    });
  } else {
    // console.warn("No shipment data found.");
  }

  // Check if the response contains at least one item

  animate(
    ".animation-slide-up",
    { y: [20, 0], opacity: [0, 1] },
    { duration: 0.5, delay: stagger(0.1) }
  );
  const user = await getUserProfile();
  const response = await getWallets(user.data.data.id);

  const walletData = response.data?.data?.wallet;

  if (walletData) {
    userBalance.value = walletData.balance;
  }
});

const resumePaystackTransaction = (access_code: string) => {
  return new Promise<void>((resolve, reject) => {
    popup.resumeTransaction(access_code, {
      onSuccess: () => resolve(),
      onCancel: () => reject(new Error("Transaction cancelled")),
      onError: (err: any) => reject(err),
    });
  });
};

const handleAddCard = async () => {
  try {
    const { data: response } = await initializeTransaction();

    const { access_code, reference } = response.data;

    await resumePaystackTransaction(access_code);

    await addCard(reference);
  } catch (error) {
    if (error instanceof AxiosError) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: error.response?.data.error,
        variant: "destructive",
      });
    }
  }
};
</script>

<template>
  <main>
    <header
      class="flex justify-between items-center animation-slide-up mb-6 md:mb-9 lg:mb-10"
    >
      <div class="flex gap-x-2 items-center">
        <div
          class="w-[37.87px] h-[37.87px] rounded-full border-2 border-[#34A9FF] overflow-hidden md:hidden"
        >
          <Meme />
        </div>
        <div>
          <div
            class="filson-pro text-[13px] leading-[130%] tracking-[-3%] text-[#676767] md:font-medium md:text-sm md:leading-[100%] lg:leading-[14px] mb-1 md:mb-2 lg:mb-2.5"
          >
            Hello {{ authStore.user?.first_name }},
          </div>
          <h1
            class="font-semibold text-base leading-[130%] tracking-[-3%] text-[#676767] md:text-[26px] md:leading-[100%] md:text-[#242424] lg:leading-[26px]"
          >
            Good Morning
          </h1>
        </div>
      </div>
      <div class="hidden md:block">
        <NewShipment />
      </div>
      <div
        class="w-10 h-10 flex justify-center items-center rounded-lg bg-[#F8F8F8] hover:cursor-pointer md:hidden"
      >
        <NotificationsIcon />
      </div>
    </header>
    <section class="w-full lg:w-[420px] animation-slide-up">
      <section
        class="h-[148px] md:h-[218px] rounded-lg border border-[#E5E5E5] bg-gradient-to-br from-[#43352A] to-[#3B5EB9] py-[22px]"
      >
        <div
          class="w-[88.83%] h-full flex flex-col justify-between md:w-[94.91%] lg:w-[90.48%] mx-auto"
        >
          <section class="flex items-center justify-between">
            <Money class="text-white" />
            <div
              class="w-[62px] h-6 flex justify-center items-center rounded-full bg-[#FFFFFF14]"
            >
              <WalletTrend class="text-white" />
            </div>
          </section>
          <div class="flex justify-between items-end">
            <div>
              <div
                class="filson-pro font-medium text-xs leading-[100%] -tracking-[3%] text-[#FFFFFFCC] md:font-normal mb-2 lg:mb-0.5"
              >
                Available balance
              </div>
              <div class="flex gap-x-2 items-end">
                <div
                  class="hubot-sans font-bold text-2xl leading-[100%] -tracking-[3%] text-white"
                >
                  {{ userBalance }}
                </div>
                <span
                  class="font-medium text-xs leading-[100%] -tracking-[3%] text-white"
                >
                  NGN
                </span>
              </div>
            </div>
            <div>
              <revealing-eye />
            </div>
          </div>
        </div>
      </section>
      <section class="h-[42px] flex gap-x-2 md:gap-x-4 lg:gap-x-2 mt-4">
        <Button
          class="flex-grow rounded-md border border-[#D8D8D8] bg-[#F9F9F9] text-[#101828] hover:border-black hover:bg-black hover:text-white"
        >
          <Plus />

          <span class="ml-1.5">Top up</span>
        </Button>

        <!-- <Button
          class="flex-grow bg-[#F9F9F9] text-[##101828] border border-[#D8D8D8] hover:bg-black hover:border-black hover:text-white"
        >
          <Withdraw />

          <span class="ml-1.5">Withdraw</span>
        </Button> -->

        <Button
          class="flex-grow rounded-md border border-[#D8D8D8] bg-[#F9F9F9] text-[#101828] hover:border-black hover:bg-black hover:text-white"
        >
          <AddCard />
          <span
            class="font-medium text-[15px] leading-[100%] tracking-[0%] ml-2 lg:ml-1.5"
            >Add new card</span
          >
        </Button>
      </section>
    </section>
    <section
      class="rounded-xl border border-[#E4E7EC] animation-slide-up mt-4 md:mt-9"
    >
      <section class="py-5">
        <div class="w-[93.89%] flex justify-between items-center mx-auto">
          <div
            class="hubot-sans font-semibold text-sm leading-7 tracking-[0%] text-[#101828] md:text-base"
          >
            Recent Shipments
          </div>
          <z-search-input />
        </div>
      </section>
      <section>
        <DataTable :columns="columns" :data="data" />
      </section>
      <section
        class="hidden h-[68px] md:flex justify-center items-center border-t px-6"
      >
        <z-pagination />
      </section>
    </section>
    <section
      class="h-[54px] flex justify-center items-center border-t-[0.4px] border-t-[#DAD8D9] md:hidden mt-2"
    >
      <NewShipment />
    </section>
  </main>
</template>

<style scoped></style>
