<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
    <div>
      <p-google-autocomplete-input
        required
        label="Pickup Address"
        name="pickup_location_address"
        type="text"
        placeholder="e.g. 17, Ogunyemi strt, Magodo."
        :modelValue="pickupLocationAddress"
        @update:modelValue="getPickupAddressData"
        :hasError="!!errors.pickup_location_address"
      />

      <PFormErrorMessage :errorMessage="errors.pickup_location_address" />
    </div>

    <div>
      <p-input
        required
        label="Booking Notes"
        name="booking_notes"
        type="text"
        placeholder="e.g. Kindly pickup from the gateman"
        v-model="bookingNotes as string"
        :hasError="!!errors.booking_notes"
      />

      <PFormErrorMessage :errorMessage="errors.booking_notes" />
    </div>

    <div>
      <p-select
        required
        label="Pickup Option"
        v-model="pickupOption as string"
        :options="PICKUP_OPTION_OPTIONS"
        :hasError="!!errors.pickup_option"
      />

      <PFormErrorMessage :errorMessage="errors.pickup_option" />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 mt-8">
    <div>
      <p-input
        required
        label="Receiver's Name"
        type="text"
        placeholder="e.g. John"
        v-model="recipientName as string"
        :hasError="!!errors.recipient_name"
      />

      <PFormErrorMessage :errorMessage="errors.recipient_name" />
    </div>

    <div>
      <p-google-autocomplete-input
        required
        label="Drop-Off"
        type="text"
        placeholder="e.g. 17, Ogunyemi strt, Magodo."
        :modelValue="dropOffLocationAddress"
        @update:modelValue="getDropOffAddressData"
        :hasError="!!errors.drop_off_location_address"
      />

      <PFormErrorMessage :errorMessage="errors.drop_off_location_address" />
    </div>

    <div>
      <p-input
        required
        label="Delivery Notes"
        type="text"
        placeholder="e.g. Kindly pickup from the gateman"
        v-model="deliveryNotes as string"
        :hasError="!!errors.delivery_notes"
      />

      <PFormErrorMessage :errorMessage="errors.delivery_notes" />
    </div>

    <div>
      <p-input
        required
        label="Delivery Email"
        type="email"
        placeholder="e.g. Johndoe@email.com"
        v-model="recipientEmail as string"
        :hasError="!!errors.recipient_email"
      />

      <PFormErrorMessage :errorMessage="errors.recipient_email" />
    </div>

    <div>
      <p-input
        required
        label="Phone Number"
        type="text"
        placeholder="8023456789"
        v-model="recipientPhone as string"
        :hasError="!!errors.recipient_phone"
      />

      <PFormErrorMessage :errorMessage="errors.recipient_phone" />
    </div>
  </div>

  <section class="mt-8">
    <a
      href="#"
      class="font-semibold text-[11px] leading-[11px] tracking-[-0.03em] text-[#2778FF]"
    >
      ADDITIONAL INFORMATION
    </a>
  </section>
</template>

<script setup lang="ts">
import { PInput } from "@/components/shared/p-input";
import { PSelect } from "@/components/shared/p-select";
import { PGoogleAutocompleteInput } from "@/components/shared/p-google-autocomplete-input";
import { PICKUP_OPTION_OPTIONS } from "./constants";
import { PFormErrorMessage } from "@/components/shared/p-form-error-message";

const pickupLocationAddress = defineModel<string>("pickupLocationAddress");
const pickupLocationLongitude = defineModel<number>("pickupLocationLongitude");
const pickupLocationLatitude = defineModel<number>("pickupLocationLatitude");
const pickupOption = defineModel<string>("pickupOption");
const bookingNotes = defineModel<string>("bookingNotes");
const dropOffLocationAddress = defineModel<string>("dropOffLocationAddress");
const dropOffLocationLongitude = defineModel<number>(
  "dropOffLocationLongitude"
);
const dropOffLocationLatitude = defineModel<number>("dropOffLocationLatitude");
const deliveryNotes = defineModel<string>("deliveryNotes");
const recipientName = defineModel<string>("recipientName");
const recipientEmail = defineModel<string>("recipientEmail");
const recipientPhone = defineModel<string>("recipientPhone");

defineProps<{
  errors: Record<string, any>;
}>();

const getPickupAddressData = (place: any) => {
  pickupLocationAddress.value = place.formatted_address;
  pickupLocationLongitude.value = place.geometry.location.lng();
  pickupLocationLatitude.value = place.geometry.location.lat();
};

const getDropOffAddressData = (place: any) => {
  dropOffLocationAddress.value = place.formatted_address;
  dropOffLocationLongitude.value = place.geometry.location.lng();
  dropOffLocationLatitude.value = place.geometry.location.lat();
};
</script>

<style scoped></style>
