const app = Vue.createApp({
  data() {
    return {
      hpUser: 100,
      hpMonster: 100,
      currentRound: 0,
    };
  },
  methods: {
    calculateDamage(max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    attackMonster() {
      this.currentRound++;
      const damage = this.calculateDamage(12, 5);
      this.hpMonster = this.hpMonster - damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = this.calculateDamage(15, 8);
      this.hpUser = this.hpUser - damage;
    },
    specialAttackMonster() {
      this.currentRound++;
      const damage = this.calculateDamage(10, 25);
      this.hpMonster = this.hpMonster - damage;
      this.attackPlayer();
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.hpMonster + "%" };
    },
    userBarStyles() {
      return { width: this.hpUser + "%" };
    },
    useSpecialAttack() {
      return this.currentRound === 0 || this.currentRound % 3 !== 0;
    },
  },
}).mount("#game");
