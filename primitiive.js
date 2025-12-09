// primitive
// 7 types: String, Number, Boolean, Null, underdefined, Symbol, BigInt



// reference (Non primitive)

// array, Objects, Funtions

const heroes = ["shaktimman", "naagraj", "doga"];


let myObj = {
    name : "Aryan mishra",
    age : 22

}
const name = "aryan mmishra";
const age = 22;
console.log( `hello ny name is ${name} and my age is ${age}`);
const gameName =  new String ("hieshhc");
console.log(gameName[0]);
console.log(gameName.__proto__);

// game length
console.log(gameName.length);

// upper case 
console.log(gameName.toUpperCase());

// char at
console.log(gameName.charAt(2));

// index of
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);

console. log(newString);
// slice
console.log(newString.slice(-4,1));

const newString2 = newString;
// trim 

console.log(newString2.trim());

const url = " https"


// memory
// stack ( primative), Heap (Non - Primitive) 
