// classes
class Character {
    name?: string;
    strength: number;
    skill: number;

    constructor(strength: number, skill: number){
        this.strength = strength;
        this.skill = skill;
    }

    attack() :void{
        console.log(`Attack with ${this.strength} points`);
    }
}

const p1 = new Character(10, 98);
p1.attack();