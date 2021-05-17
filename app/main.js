import { Alligator } from './models/Alligator.js'
import { Bat } from './models/Bat.js'

let zoo = []
let alligators = []
let bats = []



function checkZoo(){
    
    let animals = ''
    zoo.forEach(animal => animals += animal.constructor.name + ` named ${animal.name}, `);
    console.log(`My zoo contains ${zoo.length>0 ? 'these animals:' : ''} ${animals} ${zoo.length<1 ? 'no animals.' : 'and that\'s all!'}`);
}

function addAlligator(){
    let myAlligator = new Alligator(prompt('name?'),prompt('color?'),prompt('gender?'))
    alligators.push(myAlligator)
    console.log(alligators);
    myAlligator.chat
    zoo.push(myAlligator)
}

function addBat(){
    let myBat = new Bat(prompt('name?'),prompt('wings?'),prompt('guano?'))
    bats.push(myBat)
    zoo.push(myBat)
    console.log(bats);
    myBat.chat
}

addAlligator()
addBat()
window.addAlligator = addAlligator
window.addBat = addBat
window.checkZoo = checkZoo