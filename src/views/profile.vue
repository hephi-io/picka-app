<template>
    <div class=" max-w-6xl ">
        <section class=" mt-2  w-[880px]">

            <header class=" ">
                <section class="flex items-center justify-between  pb-[16px]">
                    <span class="font-bold font-inter  text-xl leading-5 tracking-[120%] text-[#060E1F] text-left">
                        Profile settings
                    </span>
                    <button
                        class="bg-gray-900 hover:bg-gray-800 disabled:opacity-50 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2">
                        Save
                    </button>
                </section>
            </header>
            <div class="border-b border-b-[#E5E5E5] mt-2"></div>
        </section>

        <div class="">

            <!-- Profile Picture Section -->
            <div class="pr-[24px] w-[963px] mt-[4rem] mb-10   flex">
                <div class="flex  gap-[12px] items-center w-[210px]">
                    <div class="h-[50.2px] w-[50.2px] rounded-full  flex items-center justify-center">
                        <memoji />
                    </div>

                    <div>
                        <h2 class="text-xl font-semibold text-gray-900">{{ user.first_name }} {{ user.last_name }}
                        </h2>
                    </div>
                </div>
                <div class="w-[191px] h-[48px] py-[9px] px-[16px] flex justify-between items-center  border rounded-md">
                    <elements class="w-[20px] h-[20px]" />
                    <span class="text-sm font-inter font-medium text-[#404D61]">Upload new picture</span>
                </div>
            </div>


            <section class="w-[963px]">
                <div class="w-[880px] ">
                    <h3 class="font-semibold text-sm leading-[120%] text-[#232323]">Personal Information</h3>
                    <div class="border-b border-b-[#E4E4E4] mt-5"></div>
                </div>


                <!-- Personal Information -->
                <div class=" mt-9">
                    <div class="mb-6">
                        <h4 class="text-sm font-medium text-[#101828] mb-1">Basic Information</h4>
                        <p class="text-sm  leading-[150%] tracking-normal font-normal text-[#475467]">Manage your
                            identity information</p>
                    </div>

                    <!-- Basic Information -->
                    <div class="mb-8 ">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 ">
                            <div class="">
                                <label class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">First
                                    name</label>
                                <div class="flex items-center border border-gray-300 rounded-lg">
                                    <div
                                        class=" flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <userSquare class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="user.first_name" type="text"
                                        class="w-full  px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter first name">
                                </div>
                            </div>
                            <div>
                                <label class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">Last
                                    name</label>
                                <div class="flex items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <userSquare class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="user.last_name" type="text"
                                        class="w-full  px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter last name">
                                </div>
                            </div>
                            <div class="">

                                <label class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">Business
                                    Name</label>
                                <div class="flex items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <phoneBook class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="orgs.name" type="text"
                                        class="w-full  px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter business name">
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">Location</label>
                                <div class="flex items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <storeLocation class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="orgs.address" type="text"
                                        class="w-full  px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter location name">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Information -->
                    <div class="mb-8 ">
                        <div class="mb-6">
                            <h4 class="text-sm font-medium text-[#101828] mb-1">Contact number</h4>
                            <p class="text-sm  leading-[150%] tracking-normal font-normal text-[#475467]">Manage your
                                account phone number for updates</p>
                        </div>
                        <div class="">
                            <label class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">Phone
                                number</label>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 ">
                                <div class="flex items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <phone class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="orgs.phone_no" type="text"
                                        class="w-full  text-[#999999] px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter phone no">
                                </div>
                                <button
                                    class=" w-[185px] py-[12px] px-[16px] h-[48px]  text-sm font-medium border  rounded-md">
                                    Change phone number
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Email -->
                    <div class="mb-8 ">
                        <div class="mb-6">
                            <h4 class="text-sm font-medium text-[#101828] mb-1">Contact email</h4>
                            <p class="text-sm  leading-[150%] tracking-normal font-normal text-[#475467]">Manage your
                                accounts email address for the invoices</p>
                        </div>
                        <div>
                            <label
                                class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">Email</label>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 ">
                                <div class="flex items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <mail class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="user.email" type="email"
                                        class="w-full  text-[#999999] px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter first name">
                                </div>
                                <button
                                    class=" w-[185px] py-[12px] px-[16px] h-[48px]  text-sm font-medium border  rounded-md">
                                    Change email
                                </button>
                            </div>
                        </div>
                    </div>




                    <!-- Password -->
                    <div>

                        <div class="mb-8">
                            <h4 class="text-sm font-medium text-[#101828] mb-1">Password</h4>
                            <p class="text-sm  leading-[150%] tracking-normal font-normal text-[#475467]">Modify your
                                current password</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 ">
                            <div>
                                <label class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">Current
                                    Password</label>

                                <div class="flex relative items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <ailock class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="form.currentPassword"
                                        :type="showCurrentPassword ? 'text' : 'password'"
                                        class="w-full  px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter current password">
                                    <div class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                                        <eyeOff class="w-[20px] h-[20px]" />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <label class="block text-[13px] leading-[100%] font-medium text-[#26202B] mb-2">New
                                    Password</label>
                                <div class="flex relative items-center border border-gray-300 rounded-lg">
                                    <div
                                        class="flex items-center justify-center py-[10px] pr-[12px] pl-[14px]  h-[48px] border-r-2 border-[#E5E5E5] rounded-tl-lg rounded-bl-lg">
                                        <ailock class="w-[20px] h-[20px]" />
                                    </div>
                                    <input v-model="form.currentPassword" :type="showNewPassword ? 'text' : 'password'"
                                        class="w-full  px-[14px] py-[8px] font-normal text-sm tracking-normal  border-gray-300 rounded-lg focus:border-none focus:outline-none transition-colors"
                                        placeholder="Enter new password">
                                    <div class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                                        <eyeOff class="w-[20px] h-[20px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref,  onMounted } from "vue";

const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
import Memoji from "@/assets/svgs/memoji.svg";
import elements from "@/assets/svgs/elements.svg";
import userSquare from "@/assets/svgs/user-square.svg";
import phoneBook from "@/assets/svgs/phone-book.svg";
import storeLocation from "@/assets/svgs/store-location-01.svg";
import phone from "@/assets/svgs/phone.svg";
import mail from "@/assets/svgs/mail.svg";
import ailock from "@/assets/svgs/ai-lock.svg";
import eyeOff from "@/assets/svgs/eye-off.svg"
import { getUserProfile } from "@/services";
import { getRootUserOrg } from "@/services/orgs";



const user = ref({});
const orgs = ref({})

onMounted(async () => {
    const {data: userResponse} = await getUserProfile();
    const {data: orgResponse } = await getRootUserOrg()
    user.value = userResponse.data;
    orgs.value = orgResponse.data;
});

// const form = reactive({
//     firstName: 'Melody',
//     lastName: 'Ezeani',
//     businessName: 'Kinco LLC',
//     location: '19th, California street',
//     phoneNumber: '+23140123456789',
//     email: 'ezeanimelody@email.com',
//     currentPassword: 'picka2024.ng',
//     newPassword: ''
// });




</script>
