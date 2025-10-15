<template>
  <div>
    <h1
      class="font-bold text-xl leading-[134%] tracking-[0%] text-[#1B1B1B] text-center"
    >
      Reset Password
    </h1>
    <p
      class="text-base leading-5 tracking-[0%] text-[#1E1E1E] text-center mt-4"
    >
      {{
        userInfo
          ? `Enter new password for ${userInfo.email}`
          : "Enter your new password"
      }}
    </p>

    <form
      @submit.prevent="handleSubmit"
      class="mt-[60px]"
      v-if="!errors.tokenError"
    >
      <!-- Password Input -->
      <label
        for="password"
        class="block font-medium text-base leading-[100%] tracking-[0%] text-[#26203B]"
      >
        Create new password
      </label>
      <div class="relative h-12 input-shadow overflow-hidden mt-2">
        <input
          id="password"
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          required
          placeholder="Create Password"
          :class="[
            'w-full h-full rounded-lg border text-sm leading-[100%] tracking-[0%] pl-4 pr-12 py-2',
            errors.password ? 'border-red-500' : 'border-[#0F0F0F66]',
          ]"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute top-4 bottom-4 right-4"
        >
          <component :is="showPassword ? eyeIcon : eyeOffIcon" />
        </button>
      </div>
      <div v-if="errors.password" class="text-red-500 text-sm mt-1">
        {{ errors.password }}
      </div>

      <!-- Confirm Password Input -->
      <label
        for="confirmPassword"
        class="block font-medium text-base leading-[100%] tracking-[0%] text-[#26203B] mt-8"
      >
        Re-enter new password
      </label>
      <div class="relative h-12 input-shadow overflow-hidden mt-2">
        <input
          id="confirmPassword"
          v-model="form.confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          required
          placeholder="Confirm Password"
          :class="[
            'w-full h-full rounded-lg border text-sm leading-[100%] tracking-[0%] pl-4 pr-12 py-2',
            errors.confirmPassword ? 'border-red-500' : 'border-[#0F0F0F66]',
          ]"
        />
        <button
          type="button"
          @click="showConfirmPassword = !showConfirmPassword"
          class="absolute top-4 bottom-4 right-4"
        >
          <component :is="showConfirmPassword ? eyeIcon : eyeOffIcon" />
        </button>
      </div>
      <div v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">
        {{ errors.confirmPassword }}
      </div>

      <!-- Password Strength Indicators -->
      <div class="mt-4 space-y-2">
        <div class="flex gap-x-2 items-center">
          <component
            :is="passwordChecks.strength.valid ? checkIcon : xIcon"
            :class="
              passwordChecks.strength.valid ? 'text-green-500' : 'text-gray-400'
            "
          />
          <span
            class="text-xs leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]"
          >
            Password Strength: {{ passwordChecks.strength.level }}
          </span>
        </div>

        <div class="flex gap-x-2 items-center">
          <component
            :is="passwordChecks.length.valid ? checkIcon : xIcon"
            :class="
              passwordChecks.length.valid ? 'text-green-500' : 'text-gray-400'
            "
          />
          <span
            class="text-xs leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]"
          >
            At least 8 characters
          </span>
        </div>

        <div class="flex gap-x-2 items-center">
          <component
            :is="passwordChecks.complexity.valid ? checkIcon : xIcon"
            :class="
              passwordChecks.complexity.valid
                ? 'text-green-500'
                : 'text-gray-400'
            "
          />
          <span
            class="text-xs leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]"
          >
            Contains a number or symbol
          </span>
        </div>
      </div>

      <div v-if="errors.general" class="text-red-500 text-sm mt-4">
        {{ errors.general }}
      </div>

      <Button
        type="submit"
        :class="[
          'w-full h-[42px] rounded-md bg-[#1E1E1E] mt-[60px]',
          loading || !isFormValid ? 'opacity-50 cursor-not-allowed' : '',
        ]"
        @click="loading || !isFormValid ? $event.preventDefault() : null"
      >
        <span
          class="font-bold text-base leading-[100%] tracking-[0%] text-white"
        >
          {{ loading ? "Resetting..." : "Reset Password" }}
        </span>
      </Button>
    </form>

    <!-- Token Error State -->
    <div v-if="errors.tokenError" class="text-center mt-[60px]">
      <div class="text-red-500 text-lg font-semibold mb-4">
        {{ errors.tokenError }}
      </div>
      <Button
        @click="$router.push({ name: 'forgot-password' })"
        class="w-full h-[42px] rounded-md bg-[#1E1E1E]"
      >
        <span
          class="font-bold text-base leading-[100%] tracking-[0%] text-white"
        >
          Request New Reset Link
        </span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Button } from "@/components/ui/button";
import { validateResetToken, resetPassword } from "@/services";
import checkIcon from "@/assets/svgs/orange-check.svg";
import eyeOffIcon from "@/assets/svgs/eye-off.svg";

const router = useRouter();
const route = useRoute();

const token = route.params.token as string;

const form = reactive({
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  password: "",
  confirmPassword: "",
  general: "",
  tokenError: "",
});

const loading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const userInfo = ref<{
  first_name: string;
  last_name: string;
  email: string;
} | null>(null);

// Create placeholder icons for missing ones
const eyeIcon = eyeOffIcon; // Using eye-off as placeholder for eye
const xIcon = checkIcon; // Using check as placeholder for x

// Password validation
const passwordChecks = computed(() => {
  const password = form.password;

  return {
    length: {
      valid: password.length >= 8,
    },
    complexity: {
      valid: /(?=.*[0-9!@#$%^&*])/.test(password),
    },
    strength: {
      valid: password.length >= 8 && /(?=.*[0-9!@#$%^&*])/.test(password),
      level: (() => {
        if (password.length === 0) return "None";
        if (password.length < 8) return "Weak";
        if (!/(?=.*[0-9!@#$%^&*])/.test(password)) return "Fair";
        if (
          password.length >= 12 &&
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)
        )
          return "Strong";
        return "Good";
      })(),
    },
  };
});

const isFormValid = computed(() => {
  return (
    form.password.length >= 8 &&
    form.confirmPassword === form.password &&
    passwordChecks.value.complexity.valid
  );
});

const validateForm = (): boolean => {
  errors.password = "";
  errors.confirmPassword = "";
  errors.general = "";

  if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
    return false;
  }

  if (!passwordChecks.value.complexity.valid) {
    errors.password = "Password must contain at least one number or symbol";
    return false;
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    return false;
  }

  return true;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  loading.value = true;

  try {
    await resetPassword(token, form.password, form.confirmPassword);

    // Navigate to success page
    router.push({ name: "password-verification-status" });
  } catch (error: any) {
    console.error("Reset password error:", error);
    if (error.response?.status === 400) {
      errors.general =
        "Invalid or expired reset link. Please request a new one.";
    } else {
      errors.general = "Failed to reset password. Please try again.";
    }
  } finally {
    loading.value = false;
  }
};

// Validate token on component mount
onMounted(async () => {
  if (!token) {
    router.push({ name: "forgot-password" });
    return;
  }

  try {
    const response = await validateResetToken(token);
    userInfo.value = response.data.data;
  } catch (error: any) {
    console.error("Invalid token:", error);
    errors.tokenError =
      "Invalid or expired reset link. Please request a new one.";
  }
});
</script>

<style scoped>
.input-shadow {
  box-shadow: 0px 4px 8px 0px #465ff11a;
}
</style>
