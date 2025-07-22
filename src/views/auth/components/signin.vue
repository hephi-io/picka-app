<script setup lang="ts">
import { ref } from "vue";
import * as yup from "yup";
import { Field, Form, ErrorMessage } from "vee-validate";
import { login } from "@/services";
import { Loader2 } from "lucide-vue-next";
import { token } from "@/utils";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const isSubmitting = ref(false);

const user = ref({
  email: "",
  password: "",
});

const loginSchema = yup.object({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().label("Password"),
});

const handleLogin = async (values: any) => {
  try {
    isSubmitting.value = true;
    const payload = { email: values.email, password: values.password };
    const response = await login(payload);

    token.login(response.data.data.token);
    authStore.setUser(response.data.data);

    if (!response.data.data.has_onboarded) {
      return router.push({
        name: "onboarding",
      });
    }

    return router.push({
      name: "dashboard",
    });
  } catch (error) {
    console.log(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <Form
    @submit="handleLogin"
    :validation-schema="loginSchema"
    v-slot="{ errors }"
  >
    <div>
      <div class="mb-5">
        <label
          for="email"
          class="font-medium text-sm leading-[19.36px] text-[#26203B] mb-1.5 inline-block"
        >
          Email Address
        </label>

        <div>
          <Field
            name="email"
            type="email"
            placeholder="Your Email"
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
          class="font-medium leading-[19.36px] text-[#26203B] inline-block text-sm mb-1.5"
        >
          Password
        </label>

        <div>
          <Field
            name="password"
            type="password"
            placeholder="Enter Password"
            v-model="user.password"
            class="w-full rounded-lg px-4 py-2 h-[42px] border border-[#0F0F0F40] shadow-sm"
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
          Login
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
    </div>
  </Form>
</template>
