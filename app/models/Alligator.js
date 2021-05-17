export class Alligator{
    constructor(name= '', color = '', gender = ''){
        this.name = name
        this.color=color
        this.gender=gender
        
    }
    chat(){
        console.log(`${this.name} is a ${this.color} Alligator.`);
    }

}

