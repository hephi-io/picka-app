<template>
  <div class="max-w-[880px]">
    <div class="flex justify-between items-center md:items-start">
      <back-button />
      <h2 :class="h2Class">Notification settings</h2>
      <Button :class="saveButton">
        <button-text>
          Save
        </button-text>
      </Button>
    </div>
    <Separator class="hidden mt-4 md:block" />
    <div 
      v-for="setting in settings" 
      :key=setting.id 
      class="mt-12"
    >
      <h3 :class="h3Class">{{ setting.header }}</h3>
      <Separator class="mt-4" />
      <div
        v-for="option in setting.options"
        :key="option.id" 
        class="flex justify-between items-center"
        :class="[(option.id === 1) ? 'mt-6' : 'mt-9']"
      >
        <div class="w-[80%]">
          <h4 class="mb-1" :class="h4Class">
            {{ option.subHeading }}
          </h4>
          <Text>
            {{ option.text }}
          </Text>
        </div>
        <Switch />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Switch from '@/components/appsetting/switch.vue';
import ButtonText from '@/components/appsetting/button-text.vue';
import Separator from '@/components/appsetting/separator.vue';
import Text from '@/components/appsetting/text.vue';
import BackButton from '@/components/shared/back-button.vue';
import { h2Class, h3Class, h4Class, saveButton } from '@/views/appsetting.vue';

const settings = [
  {
    id: 1,
    header: "Email notifications",
    options: [
      {
        id: 1,
        subHeading: "News and Updates",
        text: "News about product and feature updates",
      },
      {
        id: 2,
        subHeading: "Tips and Tutorials",
        text: "Tips on getting more out of Picka",
      },
      {
        id: 3,
        subHeading: "User Research",
        text: "Get involve in our beta testing program or participate in paid product user research.",
      },
    ],
  },
  {
    id: 2,
    header: "Push notifications",
    options: [
      {
        id: 1,
        subHeading: "Reminders",
        text: "These are notifications to remind you of updates you might have missed.",
      },
    ],
  },
]
</script>