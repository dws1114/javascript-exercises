const reverseString = function(string) {
    // Turn string into an array
    let stringArray = [];
    for (const char of string) {
        stringArray.push(char);
    }

    // Reverse the array
    stringArray.reverse();

    // Turn array into a string
    const reversedString = stringArray.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
