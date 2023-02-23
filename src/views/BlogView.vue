<template>
  <Header />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Home/Footer.vue";
import Header from "@/components/Home/Header.vue";

export default defineComponent({
  name: "BlogView",
  components: {
    Header,
    Footer,
  },
});
</script>
