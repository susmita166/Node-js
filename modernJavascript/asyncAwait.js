let sumValue = (a, b) => new Promise((resolve, reject) => {
    const sum = a + b;
    if (sum !== 0) {
        resolve(sum);
    } else {
        reject("Sum is zero");
    }
});

async function main() {
    try {
        const data = await sumValue(100, 200);
        console.log("Sum value:", data);

        if (data !== 0) {
            const datavalue = await new Promise((resolve) => {
                const sumData = data + 3;
                resolve(sumData);
            });
            console.log("Modified sum value:", datavalue);

            const multiplicationValue = await new Promise((resolve) => {
                const multipleData = datavalue * 3;
                resolve(multipleData);
            });
            console.log("Modified multiplication value:", multiplicationValue);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

main();