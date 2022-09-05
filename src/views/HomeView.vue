<template>
  <HomeHero />
  <MpoolsWhy />
  <ShenaSection />
  <NewPool />
  <Testimonial />
  <Panel />
  <MatalebBargozide />
  <City />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/Home/HomeHero.vue";
import MpoolsWhy from "@/components/Home/MpoolsWhy.vue";
import ShenaSection from "@/components/Home/ShenaSection.vue";
import NewPool from "@/components/Home/NewPool.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import Panel from "@/components/Home/Panel.vue";
import Footer from "@/components/Home/Footer.vue";
import City from "@/components/Home/City.vue";
import MatalebBargozide from "@/components/Home/MatalebBargozide.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeHero,
    MpoolsWhy,
    ShenaSection,
    NewPool,
    Testimonial,
    Panel,
    Footer,
    City,
    MatalebBargozide,
  },
});
</script>
