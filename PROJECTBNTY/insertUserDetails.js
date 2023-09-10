const sqlConfig = require("./Bntyy_sql_configuration");
// const email_config = require("./email_config");
const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './StorefileUpload/', // Store files in the uploads directory
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({storage})

app.use(express.urlencoded({ extended: true }));


app.post("/insertUserDetails", upload.single('Photo'), async (req, resp) => {
   // console.log(req.file);
        try {
            const insertDataResult = await insertData(req.body, req.file);
            if(insertDataResult){
                resp.json({message: 'Your Data added Successfully'});
            }
        } catch (error) {
            console.error('Error:', error);
            resp.status(500).json({ error: 'Internal server error' });
        }
});


async function insertData(requestData, photoFile) {
    let registrationNumber;
    try 
    {
      registrationNumber = await getRegistrationNumber(6);
    } 
    catch (error) 
    {
      console.error('An error occurred:', error);
    }

  try {
    const personalDetails = {
      RegistrationNo: registrationNumber,
      Name: requestData.Name || '',
      Father_Name: requestData.Father_Name || '',
      Gender: requestData.Gender || '',
      DOB: requestData.DOB || '',
      DOB_In_Year: requestData.DOB_In_Year || '',
      Blood_Group: requestData.Blood_Group || '',
      Aadhar_No: requestData.Aadhar_No || '',
      Photo: photoFile.originalname || '',
      Mobile_No: requestData.Mobile_No || '',
      Email_Id: requestData.Email_Id || '',
    };

    const addressDetails = {
      Address: requestData.Address || '',
      DistId: requestData.DistId || '',
      villageName: requestData.villageName || '',
    };

    return new Promise((resolve, reject) => {
      // Execute the database query
      sqlConfig.query('INSERT INTO t_tblpersonaldetails SET ?', personalDetails, (error, result) => {
        if (error) {
          reject(error.sqlMessage);
        } else {
          addressDetails.ApplicationId = result.insertId;
          sqlConfig.query('INSERT INTO t_tblAdreesDetails SET ?', addressDetails, (err, res) => {
            if (err) {
              reject(err.sqlMessage);
            } else {
              resolve(res);
            }
          });
        }
      });
    });
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; // Re-throw the error if needed
  }
}


async function getRegistrationNumber(length) {
    return new Promise((resolve, reject) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomNumber = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          randomNumber += chars.charAt(randomIndex);
        }
      resolve(randomNumber);
    });
}
  

app.listen(5000);
