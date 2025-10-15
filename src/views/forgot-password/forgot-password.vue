<template>
  <div>
    <h1
      class="font-bold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B] text-center"
    >
      Forgot Password
    </h1>
    <p
      class="text-base leading-5 tracking-[0%] text-[#1E1E1E] text-center mt-4"
    >
      Enter your email address linked to your account to reset password
    </p>

    <form @submit.prevent="handleSubmit" class="mt-[60px]">
      <label
        for="email"
        class="block font-medium text-base leading-[100%] tracking-[0%] text-[#26203B]"
      >
        Email Address
      </label>

      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        placeholder="Your Email"
        :class="[
          'block w-full h-12 rounded-lg border text-sm leading-[100%] tracking-[0%] px-4 py-2 mt-2',
          errors.email ? 'border-red-500' : 'border-[#0F0F0F66]',
          'input-shadow',
        ]"
      />

      <div v-if="errors.email" class="text-red-500 text-sm mt-1">
        {{ errors.email }}
      </div>
      <div v-if="errors.general" class="text-red-500 text-sm mt-2">
        {{ errors.general }}
      </div>

      <Button
        type="submit"
        :class="[
          'w-full h-[42px] rounded-md bg-[#1E1E1E] mt-[60px]',
          loading || !form.email ? 'opacity-50 cursor-not-allowed' : '',
        ]"
        @click="loading || !form.email ? $event.preventDefault() : null"
      >
        <span
          class="font-bold text-base leading-[100%] tracking-[0%] text-white"
        >
          {{ loading ? "Sending..." : "Continue" }}
        </span>
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { forgotPassword } from "@/services";

const router = useRouter();

const form = reactive({
  email: "",
});

const errors = reactive({
  email: "",
  general: "",
});

const loading = ref(false);

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmit = async () => {
  // Reset errors
  errors.email = "";
  errors.general = "";

  // Validate email
  if (!form.email) {
    errors.email = "Email is required";
    return;
  }

  if (!validateEmail(form.email)) {
    errors.email = "Please enter a valid email address";
    return;
  }

  loading.value = true;

  try {
    await forgotPassword(form.email);

    // Navigate to verification page with email in query
    router.push({
      name: "password-verification",
      query: { email: form.email },
    });
  } catch (error: any) {
    console.error("Forgot password error:", error);
    errors.general = "Failed to send reset email. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.input-shadow {
  box-shadow: 0px 4px 8px 0px #465ff11a;
}
</style>
