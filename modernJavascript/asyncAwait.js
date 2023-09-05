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



async function orderPizza()
{
    try{
        const cheese = await getCheese();
        console.log("Here is the", cheese);

        const dough = await makeDough();
        console.log("Here is the", dough);

        const pizza = await bakePizza();
        console.log("Here is the", pizza);

        const servePizza = await pizzaService();
    }
    catch(err){
         console.log(err);
    }
    finally{
        console.log("Yah,I got the customer");
    }
}

orderPizza();