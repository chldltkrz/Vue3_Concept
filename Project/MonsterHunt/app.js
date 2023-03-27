const app = Vue.createApp({
  data() {
    return {
      hpUser: 100,
      hpMonster: 100,
      currentRound: 0,
      winner: null,
    };
  },
  watch: {
    hpMonster(value) {
      if (value <= 0 && this.hpUser <= 0) {
        //Draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Monster Lost
        this.winner = "player";
      }
    },
    hpUser(value) {
      if (value <= 0 && this.hpMonster <= 0) {
        //Draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Player Lost
        this.winner = "monster";
      }
    },
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
    healUser() {
      this.currentRound++;
      this.attackPlayer();
      const healValue = this.calculateDamage(8, 20);
      if (this.hpUser + healValue > 100) return 100;
      this.hpUser += healValue;
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
