<template lang="">
  <div class="h-28 bg-[#e6e9ec] font-dana opacity-90 flex justify-around">
    <div class="flex justify-between items-center">
      <div
        class="flex gap-4 items-center text-[#616161] mr-2 text-xs sm:text-base"
      >
        <img
          src="../../assets/Screenshot_from_2022-08-31_13-26-27-removebg-preview.png"
          class="h-6 w-6 sm:hidden lg:inline lg:h-[72px] lg:w-[72px]"
          alt=""
        />
        <router-link to="" class="text-blue-800 cursor-pointer">
          پارک آبی
        </router-link>
        <router-link to="" class="cursor-pointer">استخرها</router-link>
        <router-link to="" class="cursor-pointer">ثبت نام در کلاس</router-link>
        <router-link to="" class="cursor-pointer">مقاله ها</router-link>
        <router-link to="" class="cursor-pointer"> دانلود اپلیکیشن</router-link>
      </div>
    </div>
    <div class="hidden sm:flex items-center gap-4">
      <div class="relative">
        <input
          class="bg-transparent font-dana placeholder:text-center border-solid rounded-lg p-2 border text-[#B3B3B3] border-[#CCCCCC]"
          placeholder="جست و جو"
          type="text"
        />
        <div
          class="flex absolute inset-y-0 left-36 items-center pl-3 pointer-events-none"
        >
          <img src="../../assets/search-normal.png" alt="" />
        </div>
      </div>
      <button
        type="button"
        class="text-white border-solid font-dana border-2 border-[#5C7FFE] bg-[#1548fe] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2 text-center mr-2"
      >
        <div class="flex items-center">
          <img src="../../assets/security-user.png" class="" alt="" />
          ثبت نام/ورود
        </div>
      </button>
    </div>
  </div>
  ;
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
