<script setup lang="ts">
import * as yup from "yup";
import { ref } from "vue";
import { signup } from "@/services";
import { useRouter } from "vue-router";
import { Field, Form, ErrorMessage } from "vee-validate";
import { Loader2 } from "lucide-vue-next";

const router = useRouter();

const isSubmitting = ref(false);

const user = ref({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});

const signupSchema = yup.object({
  first_name: yup.string().required().label("First Name"),
  last_name: yup.string().required().label("Last Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

const signupHandler = async (values: any) => {
  try {
    isSubmitting.value = true;

    await signup(values);

    router.push("/auth/otp-verification");
  } catch (error) {
    console.log(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <Form
    @submit="signupHandler"
    :validation-schema="signupSchema"
    v-slot="{ errors }"
  >
    <div class="mb-5">
      <label
        for="first_name"
        class="font-medium text-sm leading-[19.36px] text-[#26203B] mb-1.5 inline-block"
      >
        First Name
      </label>

      <div>
        <Field
          name="first_name"
          v-bind="{ type: 'text', placeholder: 'Your First Name' }"
          v-model="user.first_name"
          class="w-full rounded-lg px-4 h-[42px] border border-[#0F0F0F40] shadow-sm"
          :class="{ 'border-red-500': errors.first_name }"
        />

        <ErrorMessage name="first_name" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <div class="mb-5">
      <label
        for="last_name"
        class="font-medium text-sm leading-[19.36px] text-[#26203B] mb-1.5 inline-block"
      >
        Last Name
      </label>

      <div>
        <Field
          name="last_name"
          v-bind="{ type: 'text', placeholder: 'Your Last Name' }"
          v-model="user.last_name"
          class="w-full rounded-lg px-4 h-[42px] border border-[#0F0F0F40] shadow-sm"
          :class="{ 'border-red-500': errors.last_name }"
        />

        <ErrorMessage name="last_name" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <div class="mb-5">
      <label
        for="email"
        class="font-medium text-sm leading-[19.36px] text-[#26203B] mb-1.5 inline-block"
      >
        Email
      </label>

      <div>
        <Field
          name="email"
          v-bind="{ type: 'email', placeholder: 'Your Email' }"
          v-model="user.email"
          class="w-full rounded-lg px-4 h-[42px] border border-[#0F0F0F40] shadow-sm"
          :class="{ 'border-red-500': errors.email }"
        />

        <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <div class="mb-10">
      <label
        for="password"
        class="font-medium text-sm leading-[19.36px] text-[#26203B] mb-1.5 inline-block"
      >
        Password
      </label>

      <div>
        <Field
          name="password"
          v-bind="{ type: 'password', placeholder: 'Enter Password' }"
          v-model="user.password"
          class="w-full rounded-lg px-4 h-[42px] border border-[#0F0F0F40] shadow-sm"
          :class="{ 'border-red-500': errors.password }"
        />

        <ErrorMessage name="password" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <button
      type="submit"
      class="w-full rounded-md py-[10px] bg-[#1E1E1E] flex items-center justify-center"
    >
      <Loader2
        class="w-5 h-5 mr-2 animate-spin text-white"
        v-if="isSubmitting"
      />

      <span class="font-bold text-base leading-[19.36px] text-white">
        Create Account
      </span>
    </button>

    <div class="w-1/2 flex gap-x-1 items-center my-4 mx-auto">
      <div class="w-full border-t border-[#9C9AA530]"></div>

      <span class="font-medium text-xs leading-3 text-[#9C9AA530]"> OR </span>

      <div class="w-full border-t border-[#9C9AA530]"></div>
    </div>

    <!-- Google -->
    <button
      class="w-full flex items-center justify-center rounded-md border h-[42px] border-[#E6E8E7] shadow-sm gap-x-2"
    >
      <span
        class="font-semibold leading-[21.6px] tracking-[-0.01em] text-[#232323]"
      >
        Continue with Google
      </span>

      <div>
        <img src="/svgs/plus.svg" alt="Google" />
      </div>
    </button>
  </Form>
</template>
