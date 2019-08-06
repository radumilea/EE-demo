<template>
  <div class="hello">
    <button class="heroAttack" @click="heroAttack">Attack</button>
    <div class="hero">
      <img class="hero__avatar" src="@/assets/hero.png" alt />
      <progress
        class="hero__hp"
        v-bind:value="this.$store.state.hero.HP"
        v-bind:max="this.$store.state.hero.maxHP"
      ></progress>
    </div>
    <div class="enemy">
      <img class="enemy__avatar" src="@/assets/enemy.png" alt />
      <progress
        class="enemy__hp"
        v-bind:value="this.$store.state.enemy.HP"
        v-bind:max="this.$store.state.enemy.maxHP"
      ></progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    heroAttack() {
      this.$store.commit("heroAttack");
    }
  }
};
</script>

<style>
.hello {
  background-image: url("./../assets/background.jpg");
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  background-size: cover;
}

.hero {
  position: absolute;
  left: 40px;
  bottom: -4px;
}
.hero__avatar {
  max-width: 240px;
}

.hero__hp {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
}
.enemy {
  position: absolute;
  bottom: -4px;
  right: 40px;
}
.enemy__avatar {
  max-width: 240px;
}
.enemy__hp {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
}
.heroAttack {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
