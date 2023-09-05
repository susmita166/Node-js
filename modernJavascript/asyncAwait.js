function getCheese(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const cheese = "cheese";
            resolve(cheese);
        }, 2000);
    });
}


function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dough = "dough";
            resolve(dough);
        }, 2000);
    });
}


function bakePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const pizza = "pizza";
            resolve(pizza);
        }, 2000);
    });
}

function pizzaService(pizza){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            reject("Unable to contact the Customer");
        }, 2000);
    });
}

async function orderPizza(){
    try{
        const cheese = await getCheese();
        console.log("Here is the",cheese);

    }
    catch(err){
        console.log('An error occred:',err);
    }

}

orderPizza();