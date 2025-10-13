<script setup lang="ts">
import { ref } from "vue";
import { Label } from "@/components/ui/label";
import PackageItem from "./package-item.vue";
import ParcelBox from "@/assets/svgs/parcel-box-package-icon.svg";
import MediumBox from "@/assets/svgs/medium-size-box.svg";
import MiniBox from "@/assets/svgs/mini-size-box.svg";
import { PSelect } from "@/components/shared/p-select";
import { PInput } from "@/components/shared/p-input";
import { ITEM_CATEGORY_OPTIONS } from "./constants";
import { PFormErrorMessage } from "@/components/shared/p-form-error-message";

const PACKAGE_SIZE_OPTIONS = [
  {
    value: "standard-size",
    name: "Standard size",
    dimensions: "38cm x 33cm x 20cm",
    icon: ParcelBox,
  },
  {
    value: "medium-size",
    name: "Medium size",
    dimensions: "32cm x 24cm x 16cm",
    icon: MediumBox,
  },
  {
    value: "mini-size",
    name: "Mini size",
    dimensions: "12cm x 24cm x 16cm",
    icon: MiniBox,
  },
];

const category = defineModel<string>("category");
const weight = defineModel<number>("weight");
const length = defineModel<number>("length");
const width = defineModel<number>("width");
const height = defineModel<number>("height");
const packageSize = ref<string>("");

defineProps<{
  errors: Record<string, any>;
}>();

const emit = defineEmits<{
  (e: "update:length", value: number): void;
  (e: "update:width", value: number): void;
  (e: "update:height", value: number): void;
}>();

const handlePackageSizeUpdate = (dimensions: string, value: string) => {
  const [length, width, height] = dimensions.split("x");

  emit("update:length", parseInt(length));
  emit("update:width", parseInt(width));
  emit("update:height", parseInt(height));

  packageSize.value = value;
};
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div>
      <p-select
        required
        label="Item Category"
        v-model="category"
        :options="ITEM_CATEGORY_OPTIONS"
        :hasError="!!errors.category"
      />

      <PFormErrorMessage :errorMessage="errors.category" />
    </div>

    <div>
      <p-input
        required
        label="Package Weight"
        v-model="weight as number"
        type="number"
        placeholder="2"
        :hasError="!!errors.weight"
      />

      <PFormErrorMessage :errorMessage="errors.weight" />
    </div>
  </section>

  <section class="mt-4">
    <Label class="font-normal text-xs leading-[14.4px] text-[#313644]">
      Choose your package size or type your package size in the L x W x H custom
      field below
    </Label>

    <div class="flex justify-start gap-x-6 mt-4">
      <package-item
        v-for="option in PACKAGE_SIZE_OPTIONS"
        :key="option.value"
        :label="option.name"
        :value="option.value"
        :dimensions="option.dimensions"
        :selected="packageSize === option.value"
        class="w-full max-w-[253px]"
        @click="handlePackageSizeUpdate(option.dimensions, option.value)"
      >
        <template #icon>
          <component :is="option.icon" />
        </template>
      </package-item>
    </div>
  </section>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
    <div>
      <p-input
        required
        label="Length (cm)"
        v-model="length as number"
        name="length"
        type="number"
        placeholder="38"
        :hasError="!!errors.length"
      />

      <PFormErrorMessage :errorMessage="errors.length" />
    </div>

    <div>
      <p-input
        required
        label="Width (cm)"
        v-model="width as number"
        name="width"
        type="number"
        placeholder="33"
        :hasError="!!errors.width"
      />

      <PFormErrorMessage :errorMessage="errors.width" />
    </div>

    <div>
      <p-input
        required
        label="Height (cm)"
        v-model="height as number"
        name="height"
        type="number"
        placeholder="12"
        :hasError="!!errors.height"
      />

      <PFormErrorMessage :errorMessage="errors.height" />
    </div>
  </div>
</template>

<style scoped></style>
