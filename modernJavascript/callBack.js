// var number = [1,2,3,4,5];

// function mainFunction(callback){
//     number.forEach(callback);
// }

// var showData = function(val){
//    console.log("Result:", val);
// }

// mainFunction(showData);




// var show = (name, callback) => {
//     console.log("Hello ! My name is :", name);
//     callback("nodeJs");
// }

// var study = (course) =>{
//     console.log('Currently i am practicing:', course);
// }

// var result = show("Susmita", study);

 
let sum = function(a, b, callback){
    return callback(a, b);
}


let addition = (a, b) =>{
    return a + b;
}

let result = sum(3, 5, addition);
console.log(result);




