// === GameObject ===


function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.name = attributes.name;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}


// === CharacterStats ===


function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}


// === Humanoid (Having an appearance or character resembling that of a human.) ===

function Humanoid(attributes) {
  CharacterStats.call(this, attributes)
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
};

function Villain(attributes) {
  Humanoid.call(this, attributes)
}

Villain.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}

function Hero(attributes) {
  Humanoid.call(this, attributes)
}

/**/
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 7,
    },
    healthPoints: 50,
    name: 'Superman',
    team: 'Good',
    weapons: [
      'Fists',
      'Lazer Eyes',
    ],
    language: 'English',
  });

  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    healthPoints: 50,
    name: 'Lex',
    team: 'Bad',
    weapons: [
      'Brains',
      'Tech',
    ],
    language: 'English',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
