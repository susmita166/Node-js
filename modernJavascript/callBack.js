//Example 1.................................................

var number = [1,2,3,4,5];

function mainFunction(callback){
    number.forEach(callback);
}

var showData = function(val){
   console.log("Result:", val);
}

mainFunction(showData);


//Example 2 .................................................

var show = (name, callback) => {
    console.log("Hello ! My name is :", name);
    callback("nodeJs");
}

var study = (course) =>{
    console.log('Currently i am practicing:', course);
}

var result = show("Susmita", study);


//Example 3 .................................................

let sum = function(a, b, callback){
    return callback(a, b);
}


let addition = (a, b) =>{
    return a + b;
}

let sumResult = sum(3, 5, addition);
console.log("Sum Value:",sumResult);




