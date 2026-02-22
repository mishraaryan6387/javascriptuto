const descripter =Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descripter);

console.log(Math.PI);


const obj1 = {
    name : "Alice",

}

console.log(Object.getOwnPropertyDescriptor(obj1,"name"));
Object.defineProperties(obj1,{
    name : {
        writable : false,
        enumerable : false,
        configurable : false
    }
});

console.log(Object.getOwnPropertyDescriptor(obj1,"name"));