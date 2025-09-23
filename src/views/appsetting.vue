<template>
  <div class="max-w-[880px]">
    <div class="flex justify-between items-center md:items-start">
      <back-button />
      <h2 :class="h2Class">
        App settings
      </h2>
      <Button class="w-20 h-[42px] rounded-md">
        <button-text>
          Save
        </button-text>
      </Button>
    </div>
    <Separator class="hidden mt-4 md:block" />
    <h3 class="mt-12" :class="h3Class">Date and Time</h3>
    <Separator class="mt-4" />
    <div class="flex justify-between items-center mt-6">
      <div>
        <h4 class="mb-1" :class="h4Class">
          Set timezone automatically using your location
        </h4>
        <Text>
          Reminders, notifications and emails are delivered based on your time
          zone.
        </Text>
      </div>
      <Switch />
    </div>
    <div class="flex justify-between items-center mt-9">
      <div>
        <h4 class="mb-1" :class="h4Class">Time zone</h4>
        <Text>Current time zone setting.</Text>
      </div>
      <div class="w-[264px] h-[41px]">
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="(GMT-07:00) US/Arizona (MST)" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div class="flex justify-between items-center mt-9">
      <div>
        <h4 class="mb-1" :class="h4Class">Time zone</h4>
        <Text>Choose your preferred time display.</Text>
      </div>
      <div class="w-[113px] h-[41px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="24 hours" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <h3 class="mt-12" :class="h3Class">Language and Region</h3>
    <Separator class="mt-4" />
    <div class="flex justify-between items-center mt-6">
      <div>
        <h4 class="mb-1" :class="h4Class">Customize Language</h4>
        <Text>Set your preferred language and region.</Text>
      </div>
      <div class="w-[100px] h-[41px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <h3 class="mt-12" :class="h3Class">Privacy</h3>
		<Separator class="mt-4" />
    <div class="flex justify-between items-center mt-6">
      <div>
        <h4 class="mb-1" :class="h4Class">Cookie Settings</h4>
        <Text>Customize cookies. See Cookies Notice for details.</Text>
      </div>
      <div class="w-[122px] h-[41px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Customize" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Switch from "@/components/appsetting/switch.vue";
import Text from "@/components/appsetting/text.vue";
import ButtonText from "@/components/appsetting/button-text.vue";
import Separator from "@/components/appsetting/separator.vue";
import BackButton from "@/components/shared/back-button.vue";
</script>

<script lang="ts">
export const h2Class = "font-semibold text-lg leading-[100%] -tracking-[3%] text-[#060E1F] md:font-bold md:text-xl md:leading-[120%] md:tracking-[0%] md:text-[#101828]"
export const h3Class =
  "font-semibold text-sm leading-[120%] tracking-[0%] text-[#101828]";
export const h4Class =
  "font-medium text-sm leading-[150%] tracking-[0%] text-[#101828]";
export const saveButton = "w-20 h-[42px] rounded-md"
</script>

<style scoped></style>