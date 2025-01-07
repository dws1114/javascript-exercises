const sumAll = function(num1, num2) {
    let numberSum = 0;
    
    if (
        num1 < 0 ||
        num2 < 0 ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        typeof num1 == "string" ||
        typeof num2 == "string"
    ) {
        return "ERROR";
    } else {
        if (num1 > num2) {
            const newNum = num1;
            num1 = num2;
            num2 = newNum;
        }

        for (i = num1; i <= num2; i++) {
            numberSum += i;
        }
        return numberSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
