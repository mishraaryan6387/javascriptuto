function addTwo_Nummber(number1,number2){

let result = number1 + number2;
return result;
     
}


const result = addTwo_Nummber(3,889);

// console.log(" result: ", result);


function loginuserMesssage (userName){
    if(userName == undefined){
        return console.log("Please logged in ");
        
    }

    return `${userName} is just looged in`;
}


// const user ={
//     Name : "Aryan",
//     price : 78,

// }

function handleObject( anyObject){
    return console.log(`${anyObject.Name} is the name of the customer and their price is ${anyObject.price}`);

}
//  handleObject(user);

 // another way to pss object 

 handleObject({
    Name : "Aryan",
    price : 4903,
 })

 const myArray = [200,388,383];

 function returnSecondArray(getArray){

    return console.log(getArray[1]);

 }

 returnSecondArray(myArray);


 // Arrow functon

 
const addTwo = (num1, num2) =>
{
    return num1 + num2;
}

// const addTwo = (num1,num2) => ( num1+num2);
 

