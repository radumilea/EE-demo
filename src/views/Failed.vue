<template>
  <div class="about">
    <h1>Ai pierdut!</h1>
    <button @click="retry">Retry</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Failed",
  methods: {
    retry() {
      console.log("retry");
      this.$store.commit("reset");
      router.push({ name: "home" });
    }
  }
};
</script>
