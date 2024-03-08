const removeFromArray = function(array, ...args) {
    const newArray = [];
    // Define a named function to use with forEach
    function checkItem(item) {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    }
    // Use the named function with forEach
    array.forEach(checkItem);
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
