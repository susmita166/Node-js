


const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '../File_upload_Crud');
const FilePath = `${dirPath}/rename_file.txt`;

// This is for File creation by using Node js
// fs.writeFileSync(FilePath , "This is simple file,created aby using Node js file method.");
// console.log("File Created Successfully.");



// This is for File read
// fs.readFile(FilePath, 'utf8',(err,item)=>{
//     console.log(item);
// })


//This is for append the text
// fs.appendFile(FilePath, 'This is simple file,created aby using Node js file method. and This for append the text',(err)=>{
//     if(!err){
//             console.log("file update succesfully");
//        }
//        else{
//           console.log("Please check your error");
//        }
// })

//This is for file rename 
// fs.rename(FilePath, `${dirPath}/rename_file.txt` ,(err)=>{
//     if(!err){
//             console.log("file name update succesfully");
//        }
//        else{
//           console.log("Please check error");
//        }
// })


//This is for delete file  
fs.unlinkSync(`${dirPath}/rename_file.txt`);

