<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useId } from "vue";

const inputId = useId();

defineProps<{
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  modelValue: string | number;
  required?: boolean;
  hasError?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const handleInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label :for="inputId" class="text-[#26203B] text-xs"
      >{{ label }} <span v-if="required" class="text-red-600">*</span></label
    >

    <input
      :name="name"
      :id="inputId"
      :value="modelValue"
      @input="handleInput"
      :class="
        cn(
          'w-full rounded-md px-4 border border-[#D9D9D9] h-[42px] placeholder:text-[#999999]',
          { 'border-red-500': hasError }
        )
      "
      :type="type"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>
