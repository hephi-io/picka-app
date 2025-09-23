<template>
  <div class="max-w-[880px]">
    <header class="flex justify-between items-center md:items-start">
			<back-button />
			<h2 :class="h2Class">
				Profile settings
			</h2>
			<Button :class="saveButton">
				<button-text>
					Save
				</button-text>
			</Button>
		</header>
		<Separator class="hidden md:block mt-4" />
		<!-- Profile pic -->
		<div class="flex justify-between items-center md:gap-x-9 md:justify-start mt-6 md:mt-12">
			<div class="flex gap-x-3 items-center">
				<div
					class="w-[50.2px] h-[50.2px] flex items-center justify-center rounded-full"
				>
					<memoji />
				</div>
				<h2 class="text-xl font-semibold text-gray-900">
					{{ user.first_name }} {{ user.last_name }}
				</h2>
			</div>
			<Button
				variant="outline"
				class="w-[191px] h-[48px] gap-x-2 rounded-md border border-[#D8D8D8]"
			>
				<elements class="w-[20px] h-[20px]" />
				<span class="text-sm font-inter font-medium text-[#404D61]"
					>Upload new picture</span
				>
			</Button>
		</div>
		<!-- Personal info -->
		<h3 class="hidden md:block mt-12" :class="h3Class">
			Personal Information
		</h3>
		<Separator class="hidden md:block mt-4" />
		<!-- Basic Info -->
		<h4 class="mt-9 mb-1" :class="h4Class">
			Basic Information
		</h4>
		<Text>
			Manage your identity information
		</Text>
		<!-- Grid -->
		<div class="grid grid-cols-2 gap-4 mt-6">
			<div>
				<label
					class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
				>
					First name
				</label>
				<div
					class="flex items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<userSquare class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="user.first_name"
						type="text"
						class="w-full px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter first name"
					/>
				</div>
			</div>
			<div>
				<label
					class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
				>
					Last name
				</label>
				<div
					class="flex items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<userSquare class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="user.last_name"
						type="text"
						class="w-full px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter last name"
					/>
				</div>
			</div>
			<div>
				<label
					class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
				>
					Business Name
				</label>
				<div
					class="flex items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<phoneBook class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="orgs.name"
						type="text"
						class="w-full px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter business name"
					/>
				</div>
			</div>
			<div>
				<label
					class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
				>
					Location
				</label>
				<div
					class="flex items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<storeLocation class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="orgs.address"
						type="text"
						class="w-full px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter location name"
					/>
				</div>
			</div>
		</div>
		<!-- Contact number -->
		<h4 class="mt-9 mb-1" :class="h4Class">
			Contact number
		</h4>
		<Text>
			Manage your account phone number for updates
		</Text>
		<!-- Phone number  -->
		<div class="mt-6">
			<label
				class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
			>
				Phone number
			</label>
			<div class="flex gap-x-4 justify-between items-center md:grid md:grid-cols-2">
				<div
					class="w-full flex items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<phone class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="orgs.phone_no"
						type="text"
						class="w-full text-[#999999] px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter phone no"
					/>
				</div>
				<button
					class="w-[185px] py-[12px] px-[16px] h-[48px] text-sm font-medium border rounded-md shrink-0"
				>
					Change phone number
				</button>
			</div>
		</div>
		<!-- Contact email -->
		<h4 class="mt-9 mb-1" :class="h4Class">
			Contact email
		</h4>
		<Text>
			Manage your accounts email address for the invoices
		</Text>
		<!-- Email input -->
		<div class="mt-6">
			<label
				class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
			>
				Email
			</label>
			<div class="flex gap-x-4 justify-between items-center md:grid md:grid-cols-2">
				<div
					class="w-full flex items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<mail class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="user.email"
						type="email"
						class="w-full text-[#999999] px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter first name"
					/>
				</div>
				<button
					class="w-[185px] py-[12px] px-[16px] h-[48px] text-sm font-medium border rounded-md shrink-0"
				>
					Change email
				</button>
			</div>
		</div>
		<!-- Password -->
		<h4 class="mt-9 mb-1" :class="h4Class">
			Password
		</h4>
		<Text>
			Modify your current password
		</Text>
		<!-- Password input -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-6">
			<div>
				<label
					class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
				>
					Current Password
				</label>
				<div
					class="flex relative items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<ailock class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="form.currentPassword"
						:type="showCurrentPassword ? 'text' : 'password'"
						class="w-full px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter current password"
					/>
					<div
						class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
					>
						<eyeOff class="w-[20px] h-[20px]" />
					</div>
				</div>
			</div>
			<div class="mt-3 md:mt-0">
				<label
					class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2"
				>
					New Password
				</label>
				<div
					class="flex relative items-center border border-gray-300 rounded-lg"
				>
					<div
						class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px] h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg"
					>
						<ailock class="w-[20px] h-[20px]" />
					</div>
					<input
						v-model="form.currentPassword"
						:type="showNewPassword ? 'text' : 'password'"
						class="w-full px-[14px] py-[8px] font-normal text-sm tracking-normal border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
						placeholder="Enter new password"
					/>
					<div
						class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
					>
						<eyeOff class="w-[20px] h-[20px]" />
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getUserProfile } from "@/services";
import { getRootUserOrg } from "@/services/orgs";
import Button from "@/components/ui/button/Button.vue";
import ButtonText from "@/components/appsetting/button-text.vue";
import Separator from "@/components/appsetting/separator.vue";
import Text from "@/components/appsetting/text.vue";
import BackButton from "@/components/shared/back-button.vue";
import { h2Class, h3Class, h4Class, saveButton } from "@/views/appsetting.vue";
import Memoji from "@/components/dashboard/memoji.vue";
import elements from "@/assets/svgs/elements.svg";
import userSquare from "@/assets/svgs/user-square.svg";
import phoneBook from "@/assets/svgs/phone-book.svg";
import storeLocation from "@/assets/svgs/store-location-01.svg";
import phone from "@/assets/svgs/phone.svg";
import mail from "@/assets/svgs/mail.svg";
import ailock from "@/assets/svgs/ai-lock.svg";
import eyeOff from "@/assets/svgs/eye-off.svg";

const showCurrentPassword = ref(false);
const showNewPassword = ref(false);

const user = ref({});
const orgs = ref({});

const form = reactive({
  // firstName: 'Melody',
  // lastName: 'Ezeani',
  // businessName: 'Kinco LLC',
  // location: '19th, California street',
  // phoneNumber: '+23140123456789',
  // email: 'ezeanimelody@email.com',
  currentPassword: "picka2024.ng",
  newPassword: "",
});

onMounted(async () => {
  const { data: userResponse } = await getUserProfile();
  const { data: orgResponse } = await getRootUserOrg();
  user.value = userResponse.data;
  orgs.value = orgResponse.data;
});
</script>
