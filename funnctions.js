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
loginuserMesssage()
