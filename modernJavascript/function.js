function func1(a,b){
    let sum = a +b;
    return sum;
}

let getSumvalue1 = func1(5, 7);
console.log(getSumvalue1);

//To convert normal Function to Anonymous  function

let func2 = function(a, b) {
    let sum = a +b;
    return sum;
}

let getSumvalue2 = func2(3,4);
console.log(getSumvalue2);

//To convert normal Function to Arrow  function

let func3 = (a, b) =>{
    let sum = a +b;
    return sum;
}

let getSumvalue3 = func3(3,4);
console.log(getSumvalue3);

//or you can use arrow function like this

let func4 = (a, b) => a +b;
console.log(func4(3,4));

