async function validateConditions(data) {
    const results = await Promise.allSettled([
        emailValidation(data.email).catch(error => {
            throw { type: 'Email', message: error.message };
        }),
        adharValidation(data.adharNumber).catch(error => {
            throw { type: 'Adhar', message: error.message };
        })
    ]);
    const errors = results
    .filter(result => result.status === 'rejected')
    .map(result => result.reason);

    if (errors.length > 0) {
        throw errors; // throw the error array directly
    }
}


async function emailValidation(getEmail) {
    return new Promise((resolve, reject) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailRegex.test(getEmail)) {
            resolve(true);
        } else {
            throw new Error('Invalid Email address');
        }
    });
}

async function adharValidation(adharNumber) {
    return new Promise((resolve, reject) => {
        const adharRegex = /^\d{12}$/;
        if (adharRegex.test(adharNumber)) {
            resolve(true);
        } else {
            throw new Error('Invalid Aadhar number');
        }
    });
}

//here we export the validation and use in insert
module.exports = validateConditions;