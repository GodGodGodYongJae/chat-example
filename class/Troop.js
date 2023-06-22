const Trooper = require('./Trooper');

class Troop {
    constructor(item) {
      this.id = item.id;
      this.owner = item.owner || 'Unknown Owner';
      this.name = item.name || 'Unnamed Troop';
      // 나머지 프로퍼티들은 동일하게 설정합니다.
      this.troopers = item.troopers;
      this.thp = item.thp;
      this.tcurhp = item.tcurhp;
      this.tsp = item.tsp;
      this.tcursp = item.tcursp;
      this.tcon = item.tcon;
      this.tcp = item.tcp;
      this.tmoral = item.tmoral;
      this.tspd = item.tspd;
      this.getTroopers = item.getTroopers;
    }
  }

module.exports = Troop;