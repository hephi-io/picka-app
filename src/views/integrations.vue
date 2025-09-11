<template>
  <div class="max-w-[880px]">
    <div class="flex justify-between items-center md:items-start">
      <back-button />
      <h2 :class="h2Class">Integrations</h2>
      <Button :class="saveButton">
        <button-text> Save </button-text>
      </Button>
    </div>
    <Separator class="hidden md:block mt-4" />
    <h3 class="mt-12" :class="h3Class">API Configuration - Live mode</h3>
    <Separator class="mt-4" />
    <div class="md:flex md:justify-between mt-6 md:mt-9">
      <div class="md:w-[48.65%] lg:w-[40%]">
        <h4 class="mb-1" :class="h4Class">Live Secret Key</h4>
        <Text>Private key for secure API authentication.</Text>
      </div>
      <div
        class="flex h-12 rounded-lg border border-[#D0D5DD] md:w-[48.65%] md:max-w-[410px] lg:w-[46.59%] mt-4 md:mt-0"
      >
        <div class="w-[46px] flex justify-center items-center shrink-0">
          <lock-key />
        </div>
        <div class="border-l border-l-[#D0D5DD]"></div>
        <div class="w-full flex gap-x-2 items-center px-[14px]">
          <input type="password" class="w-full outline-none" />
          <eye-off class="shrink-0" />
        </div>
      </div>
    </div>
    <div class="md:flex md:justify-between mt-9">
      <div class="md:w-[48.65%] lg:w-[40%]">
        <h4 class="mb-1" :class="h4Class">Live Public Key</h4>
        <Text>Public key for API request identification.</Text>
      </div>
      <div class="h-12 md:w-[48.65%] md:max-w-[410px] lg:w-[46.59%] mt-4 md:mt-0">
        <button-input
          :button-icon="computerPhoneSync"
          :placeholder="'pk_live_podh009tegghTTTYo098JJHFsyTiO'"
        />
      </div>
    </div>
    <div class="md:flex md:justify-between mt-9">
      <div class="md:w-[48.65%] lg:w-[40%]">
        <h4 class="mb-1" :class="h4Class">IP Whitelist</h4>
        <Text>Approved IPs allowed to interact with the API.</Text>
      </div>
      <Button
        variant="outline"
        class="w-full h-[46px] gap-x-2 rounded-md border border-[#D8D8D8] bg-[#F9F9F9] md:w-[48.65%] md:max-w-[410px] lg:w-[46.59%] mt-4 md:mt-0"
      >
        <plus-sign-circle />
        <span
          class="font-medium text-[15px] leading-[100%] tracking-[0%] text-[#101828]"
          >Add IP adresses</span
        >
      </Button>
    </div>
    <div class="md:flex md:justify-between mt-9">
      <div class="md:w-[48.65%] lg:w-[40%]">
        <h4 class="mb-1" :class="h4Class">Live Callback URL</h4>
        <Text>URL for receiving real-time updates from Zipkod.</Text>
      </div>
      <div class="h-12 md:w-[48.65%] md:max-w-[410px] lg:w-[46.59%] mt-4 md:mt-0">
        <button-input
          :button-icon="link04"
          :placeholder="'https://webhook.site/ 9tegghTT-TYo-098JO'"
        />
      </div>
    </div>
    <div class="md:flex md:justify-between mt-9">
      <div class="md:w-[48.65%] lg:w-[40%]">
        <h4 class="mb-1" :class="h4Class">Live Webhook URL</h4>
        <Text>URL for receiving event notifications via webhooks.</Text>
      </div>
      <div class="h-12 md:w-[48.65%] md:max-w-[410px] lg:w-[46.59%] mt-4 md:mt-0">
        <button-input
          :button-icon="link04"
          :placeholder="'https://webhook.site/ 9tegghTT-TYo-098JO'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import ButtonText from "@/components/appsetting/button-text.vue";
import Separator from "@/components/appsetting/separator.vue";
import Text from "@/components/appsetting/text.vue";
import ButtonInput from "@/components/shared/button-input.vue";
import BackButton from "@/components/shared/back-button.vue";
import { saveButton, h2Class, h3Class, h4Class } from "@/views/appsetting.vue";
import lockKey from "@/assets/svgs/lock-key.svg";
import eyeOff from "@/assets/svgs/eye-off.svg";
import computerPhoneSync from "@/assets/svgs/computer-phone-sync.svg";
import plusSignCircle from "@/assets/svgs/plus-sign-circle.svg";
import link04 from "@/assets/svgs/link-04.svg";
</script>
