export class Bat{
    constructor(name='', wings=true, guano = 0){
        this.name = name
        this.wings=wings
        this.guano=guano
    }
    chat(){`Yo I'm ${this.name} and I'm a freakin bat!`}

}