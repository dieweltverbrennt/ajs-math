export default class ImbalanceFix {
  constructor() {
    this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(state) {
    this.stoned = Boolean(state);
  }

  getAttack() {
    return this.attack;
  }

  setAttack(distance) {
    let totalAttack = this.attack * (1 - (distance - 1) * 0.1);

    if (this.getStoned()) {
      totalAttack -= Math.log2(distance) * 5;
    }

    this.attack = Math.round(totalAttack);

    return this.attack;
  }
}
