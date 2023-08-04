const conection_mongoDB= require("./mongodb_config");

const createSchema = new conection_mongoDB.Schema({
    name:{
        type : String,
        required :true
    },
    Role : String,
    Phone_number : String,
    Location : String,
    date: {
        type : Date,
        default : Date.now
    }
})


const createCollection = new conection_mongoDB.model("Employees", createSchema);

createCollection.insertMany([
    {
        name : "Susmita Nayak",
        Role : "NodeJs Developer",
        Phone_number : 8917646964,
        Location : "Bhubaneswar"
    },
    {
        name : "Subhasmita Nayak",
        Role : "Python Developer",
        Phone_number : 9937931823,
        Location : "Rourkela"
    },
    {
        name : "SmrutiRanjan Nayak",
        Role : "React Developer",
        Phone_number : 7654326789,
        Location : "Rourkela"
    }
]).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});














// const createDocument =  async () => {
//     try{
//         const createDocument1 = new createSchema({
//             name : "Susmita Nayak",
//             Role : "NodeJs Developer",
//             Phone_number : 8917646964,
//             Location : Bhubaneswar
//         })


//         const createDocument2 = new createSchema({
//             name : "Subhasmita Nayak",
//             Role : "Python Developer",
//             Phone_number : 9937931823,
//             Location : Rourkela
//         })


//         const createDocument3 = new createSchema({
//             name : "SmrutiRanjan Nayak",
//             Role : "React Developer",
//             Phone_number : 7654326789,
//             Location : Rourkela
//         })

//         const result = createCollection.insertMany([createDocument1, createDocument2, createDocument3]);
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

//yconsole.log(createDocument);