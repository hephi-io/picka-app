<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  type?: "button" | "submit" | "reset";
  onClick?: (event: any) => void;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  type: "button",
  onClick: () => {},
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="{ ...$attrs, onClick }"
  >
    <slot />
  </Primitive>
</template>
