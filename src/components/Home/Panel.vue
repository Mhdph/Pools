<template lang="">
  <!-- panel -->
  <hr class="w-[70%] border border-gray-500 border-opacity-5 my-4 ml-40" />

  <div class="font-dana">
    <div class="w-full flex justify-center my-20">
      <img class="w-full sm:w-[1216px]" src="../../assets/panel.png" alt="" />
    </div>
    <div
      class="sm:relative bg-white sm:bg-transparent rounded-md p-4 sm:p-0 bottom-[360px] xl:bottom-[450px]"
    >
      <div class="w-72 mr-12 xl:mr-20 2xl:mr-96">
        <p
          class="xl:text-3xl text-base w-full font-bold text-black sm:text-white"
        >
          واگذاری پنل سازمانی
        </p>
        <p
          class="text-black sm:text-white xl:w-[400px] font-bold text-sm xl:text-base"
        >
          ما از ابتدا تا انتها در کنار شما هستیم. اگر در هر مرحله از خرید و
          استفاده مشکلی برای شما به وجود آمد خوشحال خواهیم شد تا در رفع این مشکل
          در کنار شما باشیم.
        </p>
        <div
          class="flex items-center border border-solid border-black sm:border-white rounded-md mr-24 xl:mr-44 mt-8 w-[60%] xl:w-[70%] justify-center"
        >
          <p class="text-black sm:text-white text-xs">برای ثبت نام کلیک کنید</p>
          <img
            src="../../assets/vuesaxlineararrowdown.svg"
            class="h-6 w-6"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Panel",
});
</script>
<style lang=""></style>
