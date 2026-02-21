let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(" Async task 2");
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("Async 2 resolved");
}
)