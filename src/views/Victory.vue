<template>
  <div class="about">
    <h1>Ai castigat!</h1>
    <button @click="retry">Retry</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Victory",
  methods: {
    retry() {
      this.$store.commit("reset");
      router.push({ name: "home" });
    }
  }
};
</script>
