let sumValue =(a, b) => new Promise((resolve, reject) => {
    const sum = a + b;
    if(sum != 0){
        resolve(sum);
    }else{
        reject
    }
    
})

sumValue(100, 200)
        .then(data =>{
            console.log("sum value:", data);
            if(data != 0){
                return new Promise((resolve, reject) => {
                    const sumData = data + 3;
                    resolve(sumData);
                })
            }
        }).then(datavalue =>{
            console.log("Modified sum value:",datavalue);
            return new Promise((resolve, reject) => {
                const multipleData = datavalue * 3;
                resolve(multipleData);
            })
        }).then(multiplicationValue =>{
            console.log("Modified multiplication value:",multiplicationValue);
        })


