<template>
  <HomeHero />
  <MpoolsWhy />
  <ShenaSection />
  <NewPool />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "../components/Home/HomeHero.vue";
import MpoolsWhy from "../components/Home/MpoolsWhy.vue";
import ShenaSection from "../components/Home/ShenaSection.vue";
import NewPool from "@/components/Home/NewPool.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeHero,
    MpoolsWhy,
    ShenaSection,
    NewPool,
  },
});
</script>
