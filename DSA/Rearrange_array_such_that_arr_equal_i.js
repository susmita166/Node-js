var arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1,10,-1];
//console.log(arr);
var temp ;
for(let i =0; i< arr.length ;i++){
    for(j = i; j < arr.length; j++){
       if(arr[j] == i){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            break;
       }
    }
}

for(let i =0; i< arr.length ;i++){
    
    // console.log(arr[i]);
    if(arr[i] != i){
        arr[i] = -1;
    }
}

for(let i =0; i< arr.length ;i++){
    console.log(arr[i]);
}