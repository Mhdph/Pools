<template>
  <div class="h-screen w-full bg-hero-patern font-dana bg-cover">
    <div class="h-28 bg-[#e6e9ec] opacity-90 flex justify-around">
      <div class="flex justify-between items-center">
        <div
          class="flex gap-4 items-center text-[#616161] mr-2 text-xs sm:text-base"
        >
          <img
            src="../assets/Screenshot_from_2022-08-31_13-26-27-removebg-preview.png"
            class="h-6 w-6 sm:hidden lg:inline lg:h-[72px] lg:w-[72px]"
            alt=""
          />
          <a class="text-blue-800">پارک آبی</a>
          <a>استخرها</a>
          <a>ثبت نام در کلاس</a>
          <a>مقاله ها</a>
          <a> دانلود اپلیکیشن</a>
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
            <img src="../assets/search-normal.png" alt="" />
          </div>
        </div>
        <button
          type="button"
          class="text-white border-solid font-dana border-2 border-[#5C7FFE] bg-[#1548fe] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2 text-center mr-2"
        >
          <div class="flex items-center">
            <img src="../assets/security-user.png" class="" alt="" />
            ثبت نام/ورود
          </div>
        </button>
      </div>
    </div>
    <div>
      <p
        class="flex justify-center items-center mt-[15rem] text-white text-2xl xl:text-4xl font-extrabold"
      >
        آی پولز رویای شیــــریـــن یک شناگر
      </p>
    </div>
    <div
      class="bg-white rounded-full xs:mr-24 lg:mr-96 2xl:mr-[500px] xl:w-[42%] xs:w-[80%] w-full flex gap-12 justify-center items-center h-12"
    >
      <div>
        <select
          class="focus:ring-gray-500 font-dana border-solid py-2 px-4 focus:border-gray-500 h-full pl-2 pr-7 border-[#ebebeb] bg-transparent text-gray-500 sm:text-sm rounded-full"
        >
          <option>مشهد</option>
        </select>
      </div>
      <div>
        <div class="">
          <input
            placeholder="نام استخر و یا پارک آبی"
            type="text"
            id="base-input"
            class="bg-gray-50 border-[#ebebeb] font-dana border-solid text-gray-900 text-sm rounded-full w-full p-1.5"
          />
        </div>
      </div>
      <div
        class="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600"
      >
        <img
          class="w-6 h-6"
          src="../assets/vuesaxlinearsearchnormal.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeHero",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
