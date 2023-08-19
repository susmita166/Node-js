//...........................................................Array Foreach.................................................

let num = [7, 8, 5];


// Example1---------------------------------
// num.forEach(function (value) {
//   console.log(value);
// }); 

// Example2---------------------------------
let sum = 0;
let sumValue = () =>{
    num.forEach((val)=>{
        sum = sum+val;
    });
    return sum;
}

let val = sumValue();
//console.log(val);


//.........................................................Array map.................................................

// Example1---------------------------------
let marksValue = [10, 20, 30, 40, 50 , 60];


// let get_value = marksValue.map(function (value) {
//     console.log(value);
// }); 

// Example2---------------------------------
let sumFunc = () =>{
    let sum = 0;
    marksValue.map(function(value){
        sum = sum + value;
    });
    return sum;
}

let sumvalueget = sumFunc();
//console.log(sumvalueget);

// Example3---------------------------------


let multiValue = 0;
let getValue = marksValue.map(function(value){
    return value * 5;
});

//console.log(getValue); 
//console.log(marksValue);


//.........................................................Array filter.................................................

const arrayData = [32, 33, 16, 40];

let getFilterAges = (val) =>{
    return val  > 20;
};

let Data = arrayData.filter(getFilterAges);
console.log(Data);
















//Array find.................................................


// let findValue = (val) =>{
//     if(val == 60){
//         return val;
//     }
// }

// let val = marksValue.find(findValue);
// console.log("value is :",val);

