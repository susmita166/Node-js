function myfnc_test(send_variable, c){
   var result = send_variable();
   var sum = result[0] + result[1] + c ;
   console.log(sum);
}

function send_variable(){
     var a = 10;
     var b = 20;
     return [a, b];
    //return "Hello"
}

myfnc_test(send_variable, 7)

// const val = function sum(a, b){
//     console.log(a+b);
// }
 
// val(3,2);

