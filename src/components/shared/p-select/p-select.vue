<template>
  <div class="flex flex-col gap-y-1">
    <Label class="font-normal text-xs">
      {{ label }}<span v-if="required" class="text-red-600"> *</span>
    </Label>

    <Select
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="handleSelect"
      class="outline-none"
    >
      <SelectTrigger
        class="border-[#D9D9D9] h-[42px]"
        :class="{ 'border-red-500': hasError }"
      >
        <SelectValue
          :placeholder="placeholder || 'Select an Option'"
          class="font-normal text-sm text-[#999999]"
        />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

defineProps<{
  label: string;
  name?: string;
  modelValue: string;
  options: { value: string; name: string }[];
  required?: boolean;
  hasError?: boolean;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleSelect = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<style scoped></style>
