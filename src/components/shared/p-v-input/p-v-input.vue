<script setup lang="ts">
import { useField } from "vee-validate";
import { PInput } from "../p-input";

const props = defineProps<{
  name: string;
  type: string;
  placeholder: string;
  label: string;
  required: boolean;
}>();

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div>
    <PInput
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :label="label"
      v-model="value as string"
      :required="required"
      :hasError="!!errorMessage"
    />

    <div v-if="errorMessage">
      <p class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
    </div>
  </div>
</template>
