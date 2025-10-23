<template>
  <div class="flex flex-col gap-y-1">
    <label :for="inputId" class="text-[#26203B] text-xs"
      >{{ label }} <span v-if="required" class="text-red-600">*</span></label
    >

    <GoogleAddressAutocomplete
      :id="inputId"
      :type="type"
      :class="
        cn(
          'w-full rounded-md px-4 border border-[#D9D9D9] h-[42px] placeholder:text-[#999999]',
          { 'border-red-500': hasError }
        )
      "
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @callback="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { useId } from "vue";
import { cn } from "@/lib/utils";
import GoogleAddressAutocomplete from "vue3-google-address-autocomplete";

const emit = defineEmits<{
  (e: "update:modelValue", place: any): void;
}>();

const handleInput = (place: any) => {
  emit("update:modelValue", place);
};

defineProps<{
  name?: string;
  type?: string;
  label?: string;
  modelValue: string | number;
  required?: boolean;
  hasError?: boolean;
  placeholder?: string;
}>();

const inputId = useId();
</script>

<style lang="scss" scoped></style>
