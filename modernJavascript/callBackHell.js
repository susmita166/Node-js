function getCheese(callback){
    setTimeout(() => {
        const x = "cheese";
        console.log("Here is",x);
        callback(x);
    },2000);
}

function makeDough(callback){
    setTimeout(() => {
        const y = "dough";
        console.log("Here is the",y);
        callback(y);
    },2000);
}

// function makeDough(cheese, callback){
//     setTimeout(() => {
//         const y = "dough";
//         console.log("Here is the",y);
//         callback(x);
//     },2000);
// }


getCheese((cheese) =>{
    makeDough((Dough) =>{
        console.log("got my",Dough);
    })
})
