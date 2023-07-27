let arr = [9, 2, 3, 5, 4, 5, 3, 4,10,10];
// 

for(let i = 0; i< arr.length; i++){
    var count = 0;
    for(let j = 0; j < arr.length; j++){
        if(i != j){
            if(arr[i] == arr[j]){
                 count = count + 1;
            }
        }
    }
    if(count == 0){
        console.log(arr[i]);
    }
}

