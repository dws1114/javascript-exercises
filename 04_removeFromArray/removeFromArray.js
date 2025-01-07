const removeFromArray = function(sourceArray, ...args) {
   const filteredArray = sourceArray.filter(i => !args.includes(i));
   return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
