//Array Foreach.................................................

let num = [7, 8, 5];


// Example1---------------------------------
num.forEach(function (value) {
  console.log(value);
}); 

// Example2---------------------------------
let sum = 0;
let sumValue = () =>{
    num.forEach((val)=>{
        sum = sum+val;
    });
    return sum;
}

let val = sumValue();
console.log(val);


//Array map.................................................

// Example1---------------------------------
let marksValue = [10, 20, 30, 40, 50 , 60];

// marksValue.map(function (value) {
//     console.log(value);
// }); 

// Example2---------------------------------
let sumVal = 0;
let testFunc = () =>{
    marksValue.map((val)=>{
        sumVal = sumVal + val;
    });
    return sumVal;
}

let mapFunc = testFunc();
console.log(mapFunc);




//Array find.................................................


// let findValue = (val) =>{
//     if(val == 60){
//         return val;
//     }
// }

// let val = marksValue.find(findValue);
// console.log("value is :",val);

