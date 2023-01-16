import ImbalanceFix from './app';

export default class Daemon extends ImbalanceFix {
  constructor() {
    super();
    this.attack = 100;
  }
}
