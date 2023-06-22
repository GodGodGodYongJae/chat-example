const ActorStatus = require('./ActorStatus');

class Trooper {
  constructor(level, exp, moral, characterClass, priority, id, name, status) {
    this.level = level;
    this.exp = exp;
    this.moral = moral;
    this.characterClass = characterClass;
    this.priority = priority;
    this.id = id;
    this.name = name;
    this.status = status;
  }
}

module.exports = Trooper;