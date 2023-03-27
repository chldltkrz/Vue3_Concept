const app = Vue.createApp({
  data() {
    return {
      hpUser: 100,
      hpMonster: 100,
    };
  },
  methods: {
    calculateDamage(max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    attackMonster() {
      const damage = this.calculateDamage(12, 5);
      this.hpMonster = this.hpMonster - damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = this.calculateDamage(15, 8);
      this.hpUser = this.hpUser - damage;
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.hpMonster + "%" };
    },
    userBarStyles() {
      return { width: this.hpUser + "%" };
    },
  },
}).mount("#game");
