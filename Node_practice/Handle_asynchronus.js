// To handle asynchronus data we have to used promise funcytion

let a = 20;
let b = "hello";

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    if (typeof a !== 'number' || typeof b !== 'number') 
    {
        reject(new Error('Both arguments must be numbers.'));
    } 
    else{ 
        resolve(a + b);
    }
    }, 1000); // Simulating a delay of 1 second
});

waitingData.then(result => {
    console.log('Sum:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
});

