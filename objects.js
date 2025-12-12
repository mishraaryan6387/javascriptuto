//object literals

const aryan_mishra = "hello world";

const mySym = Symbol("Key1");
let myObject = {
    Name : "Aryan Mishra",
    // initialization of key
    [mySym]: "Simpel",
    age: 29,
    location: "Sitapur",
    email: "aryan@google.com",
    isloggedoin : false,
    
}

console.log(myObject);
// calling of key 
console.log(myObject[mySym]);


// function declaration
myObject.greeting = function(){
    console.log("Hello Aryan");
}

console.log(myObject.greeting)


// non singelton object 

const tinder_user = {
  emai_id : "mishraaryan@gmail.com",
  fullName :{
    userName :{
        userName : "Aryan mishra"
    }
  }
}

const source1 = {  A : "Aryan mishra", B: "Mummy mishra"};
const source2 = { C: "BAbu mishra", D : " DAdi mishra"};

const obj3 = {...source1,...source2};

console.log(obj3);

console.log(myObject.hasOwnProperty(`isloggedIn`));

const course = {
  courseName : " js in hindi",
  price  : 999,
  courseInstrucctor : " hitesh chaudhary"
}
 const {courseName} =course;


 



