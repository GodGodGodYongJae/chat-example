class ActorStatus {
    constructor(currentMP, currentST, dead, currentHP, hp, atk, mr, antiMR, antiDEF, st, mp, ap, moveMent, avd, def, acc) {
      this.currentMP = currentMP;
      this.currentST = currentST;
      this.dead = dead;
      this.currentHP = currentHP;
      this.hp = hp;
      this.atk = atk;
      this.mr = mr;
      this.antiMR = antiMR;
      this.antiDEF = antiDEF;
      this.st = st;
      this.mp = mp;
      this.ap = ap;
      this.moveMent = moveMent;
      this.avd = avd;
      this.def = def;
      this.acc = acc;
    }
  }
  
  module.exports = ActorStatus;