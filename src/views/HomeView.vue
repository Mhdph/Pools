<template>
  <HomeHero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/HomeHero.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HomeHero,
  },
});
</script>
