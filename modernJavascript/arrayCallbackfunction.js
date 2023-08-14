//Array Foreach.................................................

let num = [7, 8, 5];

// num.forEach(function (value) {
//   console.log(value);
// }); 
let sum = 0;
let sumValue = () =>{
    num.forEach((val)=>{
        sum = sum+val;
    });
    return sum;
}

let func = (callback) =>{
    return callback();
}

let val = func(sumValue);
console.log(val);


//Array map.................................................

//let marksValue = [10, 20, 30, 40, 50 , 60];

// marksValue.map(function (value) {
//     console.log(value);
// }); 


//Array find.................................................


// let findValue = (val) =>{
//     if(val == 60){
//         return val;
//     }
// }

// let val = marksValue.find(findValue);
// console.log("value is :",val);

