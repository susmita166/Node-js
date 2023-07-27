let arr = [15, 2, 4, 8, 9, 5, 10, 2, 23 ];
//console.log(arr);
const new_arr = [];
let check_no = 12;
var temp ;
for(let i=0; i <arr.length;i++){
  // console.log("i value",arr[i]);
   temp = arr[i];
   if(temp == check_no){
    //console.log("We get the number",i);
    console.log("Sum found in indexes "+ i );
    // break;
    }else{
        for(let j=i+1; j <arr.length;j++){
            if(temp < check_no){
                temp = temp +arr[j];
            }
            
            if(temp == check_no){
                console.log("Sum found between indexes "+ i + " and " + j);
                break;
            }
            if(temp > check_no){
    
                break;
            }
       }
    }
}


