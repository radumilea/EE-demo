import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hero: {
      maxHP: 1200,
      HP: 300,
      attack: 150,
    },
    enemy: {
      maxHP: 600,
      HP: 600,
      attack: 200,
    },
  },
  mutations: {
    heroAttack() {
      this.state.enemy.HP = this.state.enemy.HP - this.state.hero.attack;
      this.commit('enemyAttackHero');
      if (this.state.enemy.HP <= 0) {
        router.push({ name: 'victory' });
      }
    },
    enemyAttackHero() {
      this.state.hero.HP = this.state.hero.HP - this.state.enemy.attack;
      if (this.state.hero.HP <= 0) {
        router.push({ name: 'failed' });
      }
    },
    reset() {
      this.state.enemy.HP = 600;
      this.state.hero.HP = 800;
    },
  },
  actions: {},
});
