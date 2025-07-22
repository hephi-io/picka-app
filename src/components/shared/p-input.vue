<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps<{
  name: string;
  type: string;
  placeholder: string;
  label: string;
  modelValue: string;
  errors: any;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div>
    <label
      :for="name"
      class="font-medium text-base leading-[19.36px] text-[#26203B]"
      >{{ label }}</label
    >

    <Field
      :name="name"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      class="w-full rounded-xl px-4 py-2 border border-[#0F0F0F40] shadow-sm"
      :class="{ 'border-red-500': errors.name }"
    />

    <ErrorMessage name="name" class="text-red-500 text-sm mt-1" />
  </div>
</template>
