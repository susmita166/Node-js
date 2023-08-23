//nodemon .\modernJavascript\promise.js
let a = 10;
let b = 20;


//Promise example with 3 different style

//Example1------------------------------------------
let checkEqual = new Promise(function(resolve,reject){
    if(a == b){
        resolve();
    }else{
        reject();
    }
});

checkEqual
        .then(()=>{
            console.log("woho, This is equal");
        })
        .catch(()=>{
            console.log("noo, This is not equal");
        })




//Example2------------------------------------------
let checkEqual2 = new Promise(function(resolve,reject){
    if(a == b){
        resolve("wow, This is equal");
    }else{
        reject("oh !noo, This is not equal");
    }
});

checkEqual2
        .then((data)=>{
            console.log(data);
        })
        .catch((data)=>{
            console.log(data);
        })        


//Example3------------------------------------------
let checkEqual3 = new Promise(function(resolve,reject){
    if(a == b){
        resolve("This is equal");
    }else{
        reject("This is not equal");
    }
});

checkEqual3
        .then((data)=>{
            console.log("Congratulation, ",data);
        })
        .catch((data)=>{
            console.log("Sorry, ",data);
        })         
        .finally(()=>{
            console.log("This is a Equality check program which, i made by using javascript Promise concept.")
        })       