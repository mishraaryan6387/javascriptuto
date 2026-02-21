// for looop

for(let i = 1; i<=10; i++){
    //console.log("Aryan mishra");
    if(i == 3)
{
   // console.log(  );
    
}
    
}


// array with loop


const myArray = [ "Flash", "Batman", "SuperMan"];
for( let i = 0 ; i< myArray.length ;i++)
{
    const element = myArray[i] ;
    //console.log(element);
    
}
// break nd continue 

for ( let  index = 1 ;index <= 20 ; index++){
    if (index == 5){
        break;
        
    }
    else{
       // console.log(`${index} : print hote raho`);
        
    }
}

// loop with conditiion
for ( let  index = 1 ;index <= 20 ; index++){
    if (index == 5){
        continue;
        
    }
    else{
        //console.log(`${index} : print hote raho`);
        
    }
}

// high order function

const arr = [ 1,2,3,4,4,5,6,7]
// for of
for (const element of arr) {
   // console.log(element);
}

// Maps    // maps are iterable but not using for in loop

const map = new Map()
map.set("IN","India");
map.set("UN", "United Nations");
map.set("fr", "france");

// console.log(map);

for ( const [key, value] of map ){
   // console.log(key ," :-", value);
    
}

// for in loop

const myObject ={
    JS : " Javascript",
    CPP : " c plus plus ",
    PY : " python",

}

for (const key in myObject) {

   // console.log(`${key} shortcut for ${myObject[key]}`);
    
}
 
const array =  ["javascript", "ruby", "python", "Java" ]

array.forEach( function (val){
    //console.log(val);
     
})

const myCoding = [
    {
        languageName : "Java script",
        languageShort : "Js",

        
    },
    {
         languageName : " COSTAMINATED",
        languageShort : "Js"
    },
    {
         languageName : "PYHON",
        languageShort : "Js"
    }
]

myCoding.forEach(( item )=> {
    console.log(item);
    
});


const coding =  [1,2,3,4,5,,6,7,8,9,10 ];

 //let num = coding.filter((num) => num >5); // if yo are going here scope then use return 
// console.log(num);

// mapping 
const myNumber = [1,2,3,4,56,7,8,90];

const num = myNumber.map( (num) => { return num + 10});
console.log(num);

 // reduce functioning

 const myTotal = [1,2,3,4,5];

 const total = myTotal.reduce( function( acc , crrval ) {
    return acc + crrval;
 } , 0);

 console.log(total);



