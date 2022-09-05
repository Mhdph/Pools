<template lang="">
  <!-- application -->
  <div class="flex flex-col sm:flex-row w-full font-dana justify-between my-10">
    <div
      class="sm:w-[50%] w-full text-center sm:text-right flex flex-col justify-center sm:mr-32"
    >
      <p class="text-2xl flex mr-2 sm:mr-0 sm:inline-block font-bold">
        اپلیکیشن
        <span class="text-[#ff7e03] mr-2 sm:mr-0 text-2xl">آیپولـــز</span>
      </p>
      <p
        class="text-[#454548] text-base sm:w-full w-[95%] sm:text-lg sm:mx-0 leading-10 xs:w-[80%] mt-4"
      >
        فعالیت آیپولز در سال 1397 شروع به کارکرد که در ابتدا به معرفی استخرها و
        پارک های آبی و امکانات موجود در مجموعه ها پرداخت که این امر باعث شد تا
        همراهان عزیز انتخابی بهتر و دسترسی راحت تر به مجموعه ها داشته باشند
      </p>
    </div>
    <div class="xs:mr-40 mr-14">
      <img class="w-4/5" src="../../assets/group-36875@2x.png" />
    </div>
  </div>

  <!-- footer -->
  <div class="bg-[#E8E8E8] w-full">
    <div
      class="flex bg-[#E8E8E8] text-[#616161] text-sm flex-col font-dana mr-4 sm:mr-28"
    >
      <div class="flex flex-col lg:flex-row justify-between pt-10 w-full">
        <div class="flex flex-1 flex-col">
          <div><p class="font-bold text-sm p-0">دسترسی سریع</p></div>

          <hr
            class="w-[70%] border border-gray-500 border-opacity-5 my-4 ml-40"
          />
          <div>
            <ul class="p-0 mr-3 font-normal text-sm">
              <li class="text-blue mb-3">تماس با آیپولز</li>
              <li class="mb-3">صفحات مجازی</li>
              <li class="mb-3">سوالات متداول</li>
              <li class="mb-3">مقالات</li>
              <li class="mb-3">درباره ما</li>
              <li class="mb-3">تماس با ما</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-1 flex-col">
          <div><p class="font-bold text-sm">آیپولز</p></div>
          <hr class="w-[90%] border border-gray-500 border-opacity-5 my-4" />
          <ul class="p-0 mr-3">
            <li>
              فعالیت آیپولز در سال 1397 شروع به کارکرد که در ابتدا به معرفی
              استخرها و پارک های آبی و امکانات موجود در مجموعه ها پرداخت که این
              امر باعث شد تا همراهان عزیز انتخابی بهتر و دسترسی راحت تر به
              مجموعه ها داشته باشند
            </li>
          </ul>
        </div>
        <div class="flex flex-[1.5] lg:mr-40 ml-4 flex-col">
          <div>
            <p class="font-bold text-sm">نمادها</p>
          </div>
          <hr
            class="w-[70%] border border-gray-500 border-opacity-5 sm:ml-40 my-5"
          />
          <div class="flex gap-8">
            <div>
              <img src="/" class="w-[120px] bg-white h-[140px]" alt="" />
            </div>
            <div>
              <img src="/" class="w-[120px] bg-white h-[140px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr
        class="w-[90%] border border-gray-500 border-opacity-5 my-4 sm:mr-10"
      />

      <div class="flex flex-col lg:flex-row gap-2 lg:gap-40 2xl:gap-60">
        <div class="flex items-center">
          <img
            class="w-[24px] h-[24px] ml-2"
            src="../../assets/vuesaxboldrouting.svg"
          />
          <p>مشهد _ بلوار صیاد شیرازی _ صیاد شیرازی 19 - پلاک 39</p>
        </div>
        <div class="flex items-center">
          <img
            class="w-[24px] h-[24px] ml-2"
            src="../../assets/vuesaxlinearsms.svg"
          />
          <p>info@ipools.ir</p>
        </div>
        <div class="flex items-center">
          <img
            class="w-[24px] h-[24px] ml-2"
            src="../../assets/vuesaxboldcall.svg"
          />
          <p>38946785-051</p>
        </div>
        <div class="flex items-center ml-4">
          <img
            class="w-[24px] h-[24px] ml-2"
            src="../../assets/vuesaxboldcall.svg"
          />
          <p>09155027810</p>
        </div>
      </div>
      <hr class="w-[80%] border border-gray-500 border-opacity-5 my-4 mr-10" />
      <div class="flex items-center justify-center pb-4">
        ۲۰۲۰ تمام حقوق محفوظ است برای آیپولز
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer",
});
</script>
<style lang=""></style>
